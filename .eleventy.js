module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/prestations");
  eleventyConfig.addPassthroughCopy("./src/galerie");
  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};