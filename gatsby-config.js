const theme = require('./src/theme');

console.log(theme)

module.exports = {
	siteMetadata: theme,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-fontawesome-css",
		"gatsby-plugin-anchor-links",
		//{
		//resolve: "gatsby-plugin-google-analytics",
		//options: {
		//trackingId: "",
		//},
		//},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `Marc Bruna Fuster`,
				short_name: `Marc Bruna`,
				start_url: `/`,
				background_color: `#575756`,
				theme_color: `#fff`,
				display: `minimal-ui`,
				icon: "static/images/icon.png",
				icon_options: {
					purpose: `any maskable`,
				},
			},
		},
		// The offline plugin must be listed after the manifest plugin
		"gatsby-plugin-offline",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'uploads',
				path: `${__dirname}/static/uploads`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads',
						},
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048,
						},
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static',
						},
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['node_modules/bootstrap']
			},
		},
	],
};
