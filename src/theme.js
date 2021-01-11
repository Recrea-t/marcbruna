module.exports = {
	title: "Marc Bruna Fuster",
	titleTemplate: "%s · Marc Bruna Fuster",
	description: `El teu fuster al Pallars Sobirà`,
	siteUrl: `https://marcbrunafuster.cat`,
	image: `/Logo.svg`,
	color: '#fff',
	author: {
		name: `Recrea't`,
	},
	organization: {
		name: 'Marc Bruna Fuster',
		url: 'https://marcbrunafuster.cat',
		logo: '/icon.png',
		email: "info@marcbrunafuster.cat",
		phone: {
			number: 34625453140,
			title: "(+34) 625 453 140",
		},
		address: 'POLÍGON INDUSTRIAL ELS SALACONS 7A - 8A, 25560 SORT',
	},
	social: {
		twitter: '',
		fbAppID: '',
		instagram: '',
		pinterest: '',
	},
	menuLinks: [
		{
			name: 'Inici',
			link: '/',
			submenuLinks: [],
		},
		{
			name: 'Serveis',
			link: 'dropdown',
			submenuLinks: [
				{
					name: 'Portes',
					link: '/portes',
					image: 'Icones_serveis_Portes.svg',
				},
				{
					name: 'Finestres',
					link: '/finestres',
					image: 'Icones_serveis_Finestres.svg',
				},
				{
					name: 'Cuines',
					link: '/cuines',
					image: 'Icones_serveis_Cuines.svg',
				},
				{
					name: 'Mobles a mida',
					link: '/mobles-a-mida',
					image: 'Icones_serveis_Moblesamida.svg',
				},
				{
					name: 'Parquets',
					link: '/parquets',
					image: 'Icones_serveis_Parquets.svg',
				},
				{
					name: 'Fusteria en general',
					link: '/fusteria-en-general',
					image: 'Icones_serveis_Moblesamida.svg',
				},
			],
		},
		{
			name: 'Clients',
			link: '/#clients',
			submenuLinks: [],
		},
		{
			name: 'Contacte',
			link: '/#contacte',
			submenuLinks: [],
		},
	],
};
