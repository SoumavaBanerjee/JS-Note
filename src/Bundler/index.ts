import * as esbuild from "esbuild-wasm";
import * as plugins from "../plugins/index";

// eslint-disable-next-line import/no-anonymous-default-export
const bundle = async (rawCode: string) => {
  try {
    /**
     * @EntryPoint entry file to start bundling,
     * @bundle bundling should occur or not
     * @write return the file as an in-memory buffer
     * @color colored warnings
     * @define Define environment variable value
     * @plugin Define all custom written plugins
     */

    const bunduledCode = await esbuild.build({
      entryPoints: ["index.js"],
      bundle: true,
      write: false,
      color: true,
      define: {
        "process.env.NODE_ENV": '"development"', // set development to a string not a variable.
        global: "window",
      },
      plugins: [
        plugins.unpkgPathPlugin(),
        plugins.unpkgFetchPackagePlugin(rawCode),
      ],
    });
    console.log(bunduledCode);
    return bunduledCode.outputFiles[0].text;
  } catch (error) {
    console.error(error);
  }
};

export default bundle;
