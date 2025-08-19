require("esbuild").build({
  entryPoints: ["src/userplugins/CustomGlobalBadges/index.tsx"],
  bundle: true,
  outfile: "dist/CustomGlobalBadges.plugin.js",
  format: "esm",
  external: [
    "@api/Toasts",
    "@api/Commands",
    "@webpack",
    "@utils",
    "@stores",
    "@common",
    // ...add others as needed
  ],
});
