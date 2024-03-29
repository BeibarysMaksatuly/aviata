export default {
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
    css: [
        "@/assets/css/main.scss",
        "@/assets/css/custom.scss",
    ],
    components: true,
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    vuetify: {
        theme: {
            dark: false,
        }
    },
}
