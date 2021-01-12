import React from "react";

export default function useWindowSize() {
	function changeWindowSize() {
		let vh = window.innerHeight * 0.01
		document.documentElement.style.setProperty('--vh', `${vh}px`)
	}

	changeWindowSize()

	React.useEffect(() => {
		window.addEventListener('resize', changeWindowSize)
		return () => {
			window.removeEventListener('resize', changeWindowSize)
		}
	}, [])
}
