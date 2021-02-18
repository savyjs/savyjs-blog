import theme from '@nuxt/content-theme-docs'

export default theme({
    buildModules: [
        '@nuxtjs/google-analytics'
    ],
    googleAnalytics: {
        id: 'UA-104158634-1'
    },
    server: {
        port: 8200
    },
    docs: {
        primaryColor: '#E24F55'
    }
})
