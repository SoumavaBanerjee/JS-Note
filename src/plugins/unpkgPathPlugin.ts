import * as esbuild from "esbuild-wasm";
import axios from "axios";

interface onLoadInterface {
  importer?: string | undefined;
  kind?: string;
  namespace: string;
  path: string;
  pluginData?: string | undefined;
  resolveDir?: string;
}

interface onResolveInterface {
  importer?: string | undefined;
  kind?: string;
  namespace: string;
  path: string;
  pluginData?: string | undefined;
  resolveDir?: string;
}

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: onResolveInterface) => {
        console.log("onResole", args);
        if (args.path === "index.js")
          return { path: args.path, namespace: "a" };

        if (
          args.path.includes("./") ||
          args.path.includes("../") ||
          args.path.includes("~/")
        )
          return {
            path: new URL(args.path, args.importer + "/").href,
            namespace: "a",
          };

        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };

        // else if (
        //   args.path === "axios"
        // ) {
        //   return {
        //     path: `https://unpkg.com/${args.path}`,
        //     namespace: "a",
        //   };
        // }
      });

      build.onLoad({ filter: /.*/ }, async (args: onLoadInterface) => {
        console.log("onLoad", args);

        if (args.path === "index.js") {
          return {
            loader: "jsx",
            contents: `
              const file = require('medium-test-pkg') ;
              console.log(file);
            `,
          };
        }

        const { data } = await axios.get(args.path);
        return {
          loader: "jsx",
          contents: data,
        };
      });
    },
  };
};
