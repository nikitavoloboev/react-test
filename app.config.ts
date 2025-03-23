import { defineConfig } from "@tanstack/react-start/config"
import tsConfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      tailwindcss(),
    ],
  },
  server: {
    preset: "vercel",
  },
  react: {
    babel: {
      plugins: [
        [
          "babel-plugin-react-compiler",
          {
            target: "19",
          },
        ],
      ],
    },
  },
  tsr: {
    appDirectory: "./src",
    customScaffolding: {
      routeTemplate: [
        "%%tsrImports%%",
        "\n\n",
        "function RouteComponent() { return <></> };\n\n",
        "%%tsrExportStart%%{\n component: RouteComponent\n }%%tsrExportEnd%%\n",
      ].join(""),
    },
  },
})
