import { defineConfig } from "@unocss/vite";
import { presetUno } from "@unocss/preset-uno";
import { presetIcons } from "@unocss/preset-icons";
import { presetAttributify } from "@unocss/preset-attributify";
export default defineConfig({
  rules: [
    ["m-1", { margin: "1px" }],
    [(/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` }))],
    ["custom-rule", { color: "red" }],
  ],
  shortcuts: {
    "custom-shortcut": "text-lg text-orange hover:text-teal",
  },
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      cdn: "https://esm.sh/",
    }),
    presetAttributify(),
  ],
});
