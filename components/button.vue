<template>
  <button @click="getToken" :class="{ active: logging }">
    <span> {{ props.title ?? "Giriş Yap" }} </span>
    <div v-if="logging" class="loading-dc-popup-auth"></div>
  </button>
</template>

<style>
.loading-dc-popup-auth {
  border: 2px solid #000;
  border-radius: 50%;
  border-top: 2px solid #b91c1c;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

<script setup>
import { onMounted, ref, inject } from "vue";
import channel from "../channel";
import auth from "../authentication/auth";
import login from "../authentication/login";

const appID = inject("id");
const key = inject("key");

const logging = ref(false);

const props = defineProps({
  callback: Function,
  title: String,
});

onMounted(async () => {
  if (localStorage.getItem("token")) {
    logging.value = true;
    let userData = await auth(localStorage.getItem("token"));
    if (userData?.code !== 0) {
      logging.value = false;
      props.callback(userData);
    } else {
      localStorage.removeItem("token");
      logging.value = false;
      props.callback(null);
    }
  }
});

channel.onmessage = (token) => {
  logging.value = true;

  return login(token.data, appID, key)
    .then(({ token, user }) => {
      logging.value = false;
      localStorage.setItem("token", token);
      props.callback(user);
    })
    .catch(() => {
      logging.value = false;
      props.callback(null);
    });
};

const getToken = () => {
  if (logging.value) return;
  if (!key || !appID) {
    console.error("secretKey ve appID gerekli...");
    return;
  }
  window.open(
    `https://discord.com/api/oauth2/authorize?client_id=${appID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=identify%20guilds`,
    "Yetkilendir",
    "width=400,height=700,top=50,left=10"
  );
};
</script>

<style scoped>
.active {
  background-color: #949494;
  cursor: not-allowed;
}
</style>