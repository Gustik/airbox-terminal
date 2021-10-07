import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import messages from './messages'

const i18n = createI18n({
    locale: 'ru', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

createApp(App)
    .use(i18n)
    .use(store)
    .use(router)
    .mount('#app')
