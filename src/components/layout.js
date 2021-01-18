import React from 'react'
import {useLocation} from "@reach/router"

import {FixedNavbar, StaticNavbar} from '../components/navbar'
import SEO from '../components/SEO/seo'
import Footer from '../components/footer'

import CookieConsent from "react-cookie-consent";
import {initializeAndTrack} from 'gatsby-plugin-gdpr-cookies'

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
			<CookieConsent
				location="bottom"
				buttonText="Acceptar"
				onAccept={() => {initializeAndTrack(location)}}
				enableDeclineButton
				declineButtonText=""
				cookieName="gatsby-gdpr-google-analytics"
				disableStyles={true}
				containerClasses="cookie-consent fixed-bottom alert alert-dark alert-dismissible fade show text-sm d-flex flex-row justify-content-between"
				buttonWrapperClasses="buttons"
				buttonClasses="btn btn-sm btn-primary"
				declineButtonClasses="btn-close"
				expires={150}>
				<p>
					Utilitzem galetes per millorar la informació i optimitzar l'experiència de l'usuari de manera contínua.
					Per a més informació, consulteu la <a href="/politica-de-privacitat" target="_blank" title="Política de cookies" className="alert-link"> política de galetes</a>.
				</p>
			</CookieConsent>
		</React.Fragment>
	)
}

export default TemplateWrapper
