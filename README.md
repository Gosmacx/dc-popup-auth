# dc-popup-auth

dc-popup-auth is a simple and useful Discord **Vuejs** plugin.

![ss](https://s7.gifyu.com/images/rec-screen-_1_.gif)

## Discord Setup:

**Developer Console Link:** discord.com/developers/applications/`you-bot-id`/oauth2/general

![Screen Shot](https://gcdnb.pbrd.co/images/RPROeD19QFIq.png?o=1)

## Main File:

```js
import { createApp } from 'vue'
import App from './App.vue'

import discord from 'dc-popup-auth'
import router from './router'

const app = createApp(App)

app.use(discord, {
    key: 'Your Discord Bot Secret Key',
    id: 'Your Discord Bot Application ID',
    router
})
app.use(router)
app.mount('#app')
```

## Vue Template:

```html

<template>

    <section >
        <login-button v-if="!user" :callback="callback" title="Login" />
        <div v-else >
            <logout-button title="Logout" @click="logout" />
            <span> {{ user.username }} </span>
        </div>
    </section>
    
</template>

```

## Script:

```html
<script setup>
    import { ref } from 'vue'

    const user = ref(null)

    const callback = (data) => {
        console.log(data)
        user.value = data
    }

    const logout = () => {
        user.value = null
    }

</script>
```