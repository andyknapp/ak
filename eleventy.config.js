/*
	Eleventy config
	https://www.11ty.dev/docs/config/
*/

import { IdAttributePlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { bundle } from "lightningcss";
import { build } from "esbuild";
import { readFileSync } from "fs";
import { resolve, basename } from "path";

export default (eleventyConfig) => {
  eleventyConfig.addTemplateFormats("css");

  /*
		addPassthroughCopy tells Eleventy to copy files or directories to the output folder
		addPassthroughCopy can take a directory, file, or glob pattern
	*/
  //eleventyConfig.addPassthroughCopy("fonts/**/*.woff2");

  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async (_inputContent, inputPath) => {
      return async () => {
        const result = await build({
          entryPoints: [inputPath],
          bundle: false,
          write: false,
          target: "es2022",
          minify: process.env.NODE_ENV === "production",
        });
        return result.outputFiles[0].text;
      };
    },
  });

  /*
		CSS processing via LightningCSS
		https://lightningcss.dev/
	*/
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (_inputContent, inputPath) {
      if (inputPath.includes("_includes")) return;
      if (basename(inputPath).startsWith("_")) return;

      const addDependencies = this.addDependencies.bind(this);

      return async () => {
        const result = bundle({
          filename: inputPath,
          minify: process.env.NODE_ENV === "production",
          sourceMap: false,
          targets: {
            chrome: 95 << 16,
            firefox: 90 << 16,
            safari: 14 << 16,
          },
        });
        addDependencies(inputPath, result.sources);
        return result.code.toString();
      };
    },
  });

  /*
		Collections
		https://www.11ty.dev/docs/collections/
		Collections are groups of content that can be output in templates
		Usage: {% for post in collections.posts %}{{ post.data.title }}{% endfor %}
		Declaring a Collection here enables a directory to be used as a collection
		Otherwise, the collection must be declared in the front matter of each file using the keyword "tags"
	*/
  // eleventyConfig.addCollection('posts', collection => {
  // 	return [...collection.getFilteredByGlob('./src/posts/*.md')];
  // });

  eleventyConfig.addCollection("experience", (collection) =>
    collection
      .getFilteredByGlob("./src/content/experience/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0)),
  );

  eleventyConfig.addCollection("current", (collection) =>
    collection
      .getFilteredByGlob("./src/content/current/*.md")
      .sort((a, b) => (a.data.order || 0) - (b.data.order || 0)),
  );

  /*
		Watch targets
		By default Eleventy will watch for template changes, but depending on your configuration additional watch targets may be necessary
		Run `npm run debug` to view current watch targets
	*/
  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");
  eleventyConfig.addWatchTarget("src/css/**/*.css");
  eleventyConfig.addWatchTarget("src/js/**/*.ts");

  /*
		Official Eleventy plugins
		https://www.11ty.dev/docs/plugins/official/
		eleventyNavigationPlugin enables hierarchical navigation and breadcrumbs
	*/
  eleventyConfig.addPlugin(HtmlBasePlugin);

  /*
		Shortcodes
		https://www.11ty.dev/docs/shortcodes/
		Supported in JavaScript, Liquid, Nunjucks, and Handlebars templates
		Usage: {% year %}
	*/

  eleventyConfig.addFilter("where", (arr, key, val) =>
    arr.filter((item) => item.data[key] === val),
  );

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addShortcode("svg", (name) =>
    readFileSync(resolve("src/img", `${name}.svg`), "utf8"),
  );

  /*
		Filters
		https://www.11ty.dev/docs/filters/
		Do stuff to content and output in templates
		Usage: {{ "Hello, World!" | makeUppercase }}
	*/
  eleventyConfig.addPlugin(IdAttributePlugin, {
    checkDuplicates: false,
    // by default we use Eleventy’s built-in `slugify` filter:
    // slugify: eleventyConfig.getFilter("slugify"),
    // selector: "h1,h2,h3,h4,h5,h6", // default
  });
  eleventyConfig.addAsyncFilter(
    "makeUppercase",
    async (value) => `${value.toUpperCase()}`,
  );

  /*
		Other config options
		Make changes to default directory structure
		See this post for a deeper look into directory architecture https://www.njfamirm.ir/en/blog/eleventy-folder-structure-guide/
		Specify template engine options
		https://www.11ty.dev/docs/languages/
	*/

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk", // Allows us to use Nunjucks in HTML files
    dataTemplateEngine: "njk",
  };
};
