<template>
  <div class="app-header flex bg-dark c-white">
    <ul class="flex v-center">
      <li v-b-tooltip="'主頁面'" @click="go('/')" class="bt-dash">總覽</li>
      <li v-b-tooltip="'刊登需求'" @click="go('Post')" class="bt-dash">刊登</li>
      <li v-b-tooltip="'交易紀錄'" class="bt-dash">紀錄</li>
    </ul>
    <ul class="flex v-center self-right">
      <li @click="go('Register')" class="bt-dash">註冊</li>
      <li @click="go('Login')" class="bt-dash">登入</li>
    </ul>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'app-header',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    go(route) {
      router.push(route);
    },
  },
};
</script>

<style lang='scss' scoped>
.app-header {
  padding: 3px 8px;
}
.app-header ul {
  height: 6vh;

  li {
    &:hover {
      background-color: #555;
    }
  }
}
</style>
