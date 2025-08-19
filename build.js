const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["src/userplugins/CustomGlobalBadges/index.tsx"],
  bundle: true,
  outfile: "dist/CustomGlobalBadges.plugin.js",
  format: "esm",
  target: ["esnext"],
  external: [
    "@api/Toasts",
    "@api/Commands",
    "@webpack",
    "@utils",
    "@stores",
    "@common",
    "react",
    "react-dom"
  ],
  logLevel: "info",
}).catch(() => process.exit(1));
