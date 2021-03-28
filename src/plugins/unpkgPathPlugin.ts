import * as esbuild from "esbuild-wasm";
import localforage from "localforage";

import axios from "axios";
import {
  onLoadInterface,
  onResolveInterface,
} from "./unpkgPathPluginInterface";

const packageCache = localforage.createInstance({
  name: "packageCache",
});

export const unpkgPathPlugin = (inputString: string) => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: onResolveInterface) => {
        console.log("onResole", args);
        if (args.path === "index.js")
          return { path: args.path, namespace: "a" };

        console.log("DEBUGGING LOGS\n\n\n", args.path, "\n", args.resolveDir);

        // If ./ , ../ , ~/ is present in import, or it is
        // located in a sub-directory then
        // Calculate the path relative to the importer url
        if (
          args.path.includes("./") ||
          args.path.includes("../") ||
          args.path.includes("~/")
        )
          return {
            path: new URL(args.path, `https://unpkg.com/${args.resolveDir}/`)
              .href,
            namespace: "a",
          };

        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });

      build.onLoad({ filter: /.*/ }, async (args: onLoadInterface) => {
        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: inputString,
          };
        }

        // check cache for file path
        const cachedPackage = await packageCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        // if found return
        if (cachedPackage) return cachedPackage;

        const { data, request } = await axios.get(args.path);

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents: data,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        // set new result in cache
        packageCache.setItem(args.path, result);

        return result;
      });
    },
  };
};
