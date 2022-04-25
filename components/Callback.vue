<template>
  <section class="w-full h-screen bg-violet-800 flex items-center justify-center text-white">
    
    <span class="text-5xl font-bold text-center animate-pulse">
        Giriş Yapılıyor...
    </span>

  </section>
</template>

<script setup>

import bc from '../channel'
import login from '../authentication/login'

const params = new URLSearchParams(window.location.search)

if (window.opener && window.opener !== window) {
  
  if (params.get('code')) bc.postMessage(params.get('code'));
  window.close()

} else {

  login(params.get('code'))
  .then(res =>{
    if (!res || res?.user?.message == '401: Unauthorized') return window.location.href = '/'
    // ...
  })
  
}

</script>