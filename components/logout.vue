<template>
    <button @click="logout" > {{ props.title??'Çıkış Yap' }} </button>
</template>

<script setup>

const props = defineProps({
    title: String
})

const logout = () => {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
    }
}

</script>