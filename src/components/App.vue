<template>
  <v-app>
    <header>共通ヘッダー</header>
    <router-view></router-view>
    <footer>共通フッター</footer>
  </v-app>
</template>

<script>
export default {
  data() {
  },
  methods: {
  },
  components : {
  }
};
</script>

<style>
.tittle {
  color: #000000;
  text-align: center;
}
.head{
  text-align: center;
}
.form {
  text-align: center;
}
.button{
  text-align: center;
}
</style>
