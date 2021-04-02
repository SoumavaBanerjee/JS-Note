import * as esbuild from "esbuild-wasm";
import { onResolveInterface } from "../interfaces/unpkgPluginInterface";

export const unpkgPathPlugin = () => {
  return {
    name: "unpkg-path-plugin",
    setup(build: esbuild.PluginBuild) {
      // resolve bundling entry point
      build.onResolve(
        { filter: /(^index\.js$)/ },
        (args: onResolveInterface) => {
          if (args.path === "index.js")
            return { path: args.path, namespace: "a" };
        }
      );

      // Resolve sub directories imported in base package
      build.onResolve({ filter: /^\.+\// }, (args: onResolveInterface) => {
        return {
          path: new URL(args.path, `https://unpkg.com/${args.resolveDir}/`)
            .href,
          namespace: "a",
        };
      });

      // Resolve base package name
      build.onResolve({ filter: /.*/ }, async (args: onResolveInterface) => {
        return {
          path: `https://unpkg.com/${args.path}`,
          namespace: "a",
        };
      });
    },
  };
};
