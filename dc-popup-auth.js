import loginButton from './components/button.vue'
import logoutButton from './components/logout.vue'
import callbackComponent from './components/Callback.vue'

export default {
    install: (app, options) => {

        if (!options?.key || !options?.id || !options?.router) return console.error('Missing key, id, or router (vue-rotuer)...');

        try {
            options.router.addRoute({ path: '/callback', component: callbackComponent })
        } catch (e) {
            throw new Error('Error adding route to router...');  
        }

        app.component('loginButton', loginButton)
        app.component('logoutButton', logoutButton)
        app.provide('id', options.id)
        app.provide('key', options.key)
    }
}
