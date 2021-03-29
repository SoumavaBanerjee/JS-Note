import * as esbuild from "esbuild-wasm";
import localforage from "localforage";

import axios from "axios";
import { onLoadInterface } from "../interfaces/unpkgPathPluginInterface";

const packageCache = localforage.createInstance({
  name: "packageCache",
});

export const unpkgFetchPackagePlugin = (inputString: string) => {
  return {
    name: "unpkg-Fetch-Package-plugin",
    setup(build: esbuild.PluginBuild) {
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
