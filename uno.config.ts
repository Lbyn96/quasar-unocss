import { defineConfig } from "@unocss/vite";

export default defineConfig({
  rules: [
    -["m-1", { margin: "1px" }] +
      [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
});
