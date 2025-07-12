import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  platform: 'node',
  packages: 'external',
  bundle: true,
  resolveExtensions: ['.ts', '.js'],
});
