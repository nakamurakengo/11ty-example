const postcss = require("postcss");
const postcssLoadConfig = require("postcss-load-config");
const path = require("path");

module.exports = function (eleventyConfig) {
  // Generate a unique version number for cache busting
  eleventyConfig.addGlobalData("version", () => Date.now());

  // Copy the `styles` folder to the output directory
  eleventyConfig.addPassthroughCopy({ "_temp/styles/**": "styles" });

  // "passthrough" will not trigger an Eleventy build but will live reload in the dev server.
  // Only works with "--serve"
  // https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
