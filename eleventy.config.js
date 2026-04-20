/*
	Eleventy config
	https://www.11ty.dev/docs/config/
*/

import { IdAttributePlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { transform } from 'lightningcss';

export default (eleventyConfig) => {
	eleventyConfig.addTemplateFormats("css");

	/*
		addPassthroughCopy tells Eleventy to copy files or directories to the output folder
		addPassthroughCopy can take a directory, file, or glob pattern
	*/
  eleventyConfig.addPassthroughCopy("src/js");
  //eleventyConfig.addPassthroughCopy("fonts/**/*.woff2");

	/*
		CSS processing via LightningCSS
		https://lightningcss.dev/
	*/
	eleventyConfig.addExtension("css", {
		outputFileExtension: "css",
		compile: async (inputContent, inputPath) => {
			if (inputPath.includes("_includes")) return;

			return async () => {
				const { code } = transform({
					filename: inputPath,
					code: Buffer.from(inputContent),
					minify: process.env.NODE_ENV === "production",
					sourceMap: false,
					targets: {
						chrome: 95 << 16,
						firefox: 90 << 16,
						safari: 14 << 16,
					},
				});
				return code.toString();
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

	/*
		Watch targets
		By default Eleventy will watch for template changes, but depending on your configuration additional watch targets may be necessary
		Run `npm run debug` to view current watch targets
	*/
	eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");
	eleventyConfig.addWatchTarget("src/css/**/*.css");
	eleventyConfig.addWatchTarget("src/js/**/*.js");

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
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


	/*
		Filters
		https://www.11ty.dev/docs/filters/
		Do stuff to content and output in templates
		Usage: {{ "Hello, World!" | makeUppercase }}
	*/
  eleventyConfig.addPlugin(IdAttributePlugin, {
		// by default we use Eleventy’s built-in `slugify` filter:
		// slugify: eleventyConfig.getFilter("slugify"),
		// selector: "h1,h2,h3,h4,h5,h6", // default
	});
	eleventyConfig.addAsyncFilter("makeUppercase", async (value) => `${value.toUpperCase()}`);

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
		templateFormats: [ "md", "njk", "html", ],
		markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk", // Allows us to use Nunjucks in HTML files
    dataTemplateEngine: "njk",
  };
}