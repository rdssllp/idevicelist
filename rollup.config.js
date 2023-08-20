import builtins from "rollup-plugin-node-builtins";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import globals from "rollup-plugin-node-globals";
import json from "@rollup/plugin-json";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      inlineDynamicImports: true,
    },
    {
      file: pkg.module,
      format: "esm",
      inlineDynamicImports: true,
    },
    {
      file: pkg.browser,
      name: "idevicelist",
      format: "umd",
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    resolve(),
    commonjs(),
    json(),
    copy({
      targets: [{ src: "src/data.json", dest: "dist" }],
    }),
    globals(),
    builtins(),
  ],
};
