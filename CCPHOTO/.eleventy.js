module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/prestations");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};