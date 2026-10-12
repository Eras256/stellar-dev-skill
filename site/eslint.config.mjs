import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  js.configs.recommended,
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
      "import/first": "error",
      "import/named": "off",
    },
  },
  globalIgnores([".next/**", "out/**", "public/**", "next-env.d.ts"]),
]);
