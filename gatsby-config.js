const config = require('./site-config.json')

console.log(config)

module.exports = {
	siteMetadata: config,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-fontawesome-css",
		"gatsby-plugin-anchor-links",
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: "GTM-N54NL4G",
				includeInDevelopment: false,
			},
		},
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				//googleAnalytics: {
				//trackingId: 'UA-187465610-1',
				//cookieName: 'gatsby-gdpr-google-analytics',
				//},
				googleTagManager: {
					trackingId: 'GTM-N54NL4G',
					cookieName: 'gatsby-gdpr-google-tagmanager',
					gatsbyRouteChange: 'gatsby-route-change',
				},
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-robots-txt",
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
				path: `${__dirname}/static/images`,
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
			resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
			options: {
				devMode: false,
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
