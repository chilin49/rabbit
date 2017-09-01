<template>
  <div id="login">
    <page-title>登入</page-title>
    <div class="form-container">
      <b-form @submit="login">
        <b-form-group label="信箱:" label-for="emailInput">
          <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="email"></b-form-input>
        </b-form-group>
        <b-form-group label="密碼:" label-for="passwordInput">
          <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="password"></b-form-input>
        </b-form-group>
        <div class="action-area">
          <b-button type="submit" variant="primary">登入</b-button>
          <b-button type="reset" variant="secondary">重設</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';

document.title = '兔兔加密貨幣交易網 登入';
export default {
  name: 'login',
  components: {
    PageTitle,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    login() {

    },
  },
};
</script>

<style lang='scss' scoped>
.form-container {
  padding: 8vh 10vw;
  margin: 0 15vw;
  border-radius: 4vw;
  background-color: #EEE;

  .action-area {
    padding: 2vw 0 0 1.5vw;
  }
}
</style>
