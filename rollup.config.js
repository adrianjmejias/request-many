import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import { defineConfig } from "rollup";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist/esm",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
    watch: {
      include: "src/**/*",
    },
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]);
