export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'aviata-test',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/css/main.scss",
        "@/assets/css/custom.scss",
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        theme: {
            dark: false,
        }
    },
}
