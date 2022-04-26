# dc-popup-auth
## _The Last Markdown Editor, Ever_

dc popup auth is a simple and useful vuejs plugin



## Main File:

**Developer Console Link** discord.com/developers/applications/you-bot-id/oauth2/general

![Screen Shot](https://gcdnb.pbrd.co/images/RPROeD19QFIq.png?o=1)

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
        <login-button :callback="callback" title="Login" />
        <logout-button title="Logout" @click="logout" />
    </section>
    
</template>

```

## Script:

```html
<script setup>
    const callback = (data) => {
        console.log(data)
    }
</script>
```

![ss](https://gcdnb.pbrd.co/images/bAJuebwuy8fH.png?o=1) ![ss](https://gcdnb.pbrd.co/images/5mgnlcHcbE5A.png?o=1)

