import React from 'react'
import {useLocation} from "@reach/router"

import {FixedNavbar, StaticNavbar} from '../components/navbar'
import SEO from '../components/SEO/seo'
import Footer from '../components/footer'

import useSiteMetadata from './siteMetadata'

const TemplateWrapper = ({
	title,
	description,
	image,
	isBlogPost,
	datePublished,
	children,
}) => {
	const location = useLocation()

	const {
		defaultTitle,
		author,
		organization,
		social,
		menuLinks,
	} = useSiteMetadata()

	return (
		<React.Fragment>
			<SEO title={title} description={description} image={image} isBlogPost={isBlogPost} datePublished={datePublished} />
			<FixedNavbar organization={organization} social={social} />
			<StaticNavbar defaultTitle={defaultTitle} menuLinks={menuLinks} pathname={location.pathname} />
			{children}
			<Footer title={defaultTitle} author={author} />
		</React.Fragment>
	)
}

export default TemplateWrapper
