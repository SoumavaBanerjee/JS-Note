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
      build.onLoad({ filter: /(^index\.js$)/ }, (args: onLoadInterface) => {
        return {
          loader: "jsx",
          contents: inputString,
        };
      });

      build.onLoad({ filter: /.css$/ }, async (args: onLoadInterface) => {
        const cachedPackage = await packageCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cachedPackage) return cachedPackage;

        const { data, request } = await axios.get(args.path);
        console.log(args.path);

        // Escape newLines(\n), single-quotes('') and doubleQuotes("") and comments(/**/, // ) in fetched css
        const escapedCssString = data
          .replace(/\n/g, "")
          .replace(/\/\*[\s\S]*?\*\//g, "")
          .replace(/"/g, `\\"`)
          .replace(/'/g, `\\'`);

        const contents = `
          const styleTag = document.createElement('style');
          styleTag.innerText = '${escapedCssString}';
          document.head.appendChild(styleTag);
        `;

        const result: esbuild.OnLoadResult = {
          loader: "jsx",
          contents,
          resolveDir: new URL("./", request.responseURL).pathname,
        };

        // set new result in cache
        packageCache.setItem(args.path, result);

        return result;
      });

      build.onLoad({ filter: /.*/ }, async (args: onLoadInterface) => {
        // check cache for file path
        const cachedPackage = await packageCache.getItem<esbuild.OnLoadResult>(
          args.path
        );
        if (cachedPackage) return cachedPackage;

        const { data, request } = await axios.get(args.path);
        console.log(args.path);

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
