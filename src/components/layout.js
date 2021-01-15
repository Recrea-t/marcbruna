import React from 'react'
import CookieConsent from "react-cookie-consent";
import {useLocation} from "@reach/router"
import SEO from '../components/SEO/seo'
import {FixedNavbar, StaticNavbar} from '../components/navbar'
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
	const {pathname} = useLocation()

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
			<StaticNavbar defaultTitle={defaultTitle} menuLinks={menuLinks} pathname={pathname} />
			{children}
			<Footer title={defaultTitle} author={author} />
			<CookieConsent
				debug={true}
				location="bottom"
				buttonText="Acceptar"
				enableDeclineButton
				declineButtonText="Rebutjar"
				cookieName="gatsby-gdpr-google-analytics"
				containerClasses="bg-secondary text-sm"
				buttonWrapperClasses=""
				buttonClasses="btn btn-sm btn-primary"
				declineButtonClasses="btn btn-sm btn-primary"
				expires={150}>
				<p>
					Utilitzem galetes per distingir-vos d'altres usuaris en els nostres webs,
					per millorar la informació i els serveis que us oferim, i per facilitar-vos l'accés.
					Si no les accepteu, algunes parts del web poden deixar de funcionar.
					Per a més informació, consulteu la <a href="/politica-de-privacitat" target="_blank" title="Política de privacitat" className="alert-link"> política de privacitat</a>.
				</p>
			</CookieConsent>
		</React.Fragment>
	)
}

export default TemplateWrapper
