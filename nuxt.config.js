export default {
	components: true,
	head: {
		title: 'Ripple',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: ''
			}
		]
	},
	modules: ['@nuxtjs/axios', '@nuxtjs/pwa'],
	pwa: {
		manifest: {
			lang: 'en'
		}
	},
	ssr: false,
	target: 'static'
};
