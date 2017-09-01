<template>
  <div id="register">
    <page-title>註冊</page-title>
    <div class="form-container">
      <b-form @submit="register">
        <b-form-group label="信箱:" label-for="emailInput">
          <b-form-input id="emailInput" type="email" v-model="form.email" required placeholder="email"></b-form-input>
        </b-form-group>
        <b-form-group label="密碼:" label-for="passwordInput">
          <b-form-input id="passwordInput" type="password" v-model="form.password" required placeholder="password"></b-form-input>
        </b-form-group>
        <b-form-group label="密碼確認:" label-for="confirmInput">
          <b-form-input id="confirmInput" type="password" v-model="form.confirm" required placeholder="password"></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-checkbox v-model="form.checked">
            同意會員條款
          </b-form-checkbox>
        </b-form-group>
        <div class="action-area">
          <b-button type="submit" variant="primary">註冊</b-button>
          <b-button type="reset" variant="secondary">重設</b-button>
        </div>
      </b-form>
    </div>

    <b-modal ref="registerSuccessModal" title="註冊成功" ok-title="確定" ok-only>
      請至註冊的信箱收取驗證信，才能使用會員功能喲。
    </b-modal>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';

document.title = '兔兔加密貨幣交易網 註冊';
export default {
  name: 'resgister',
  components: {
    PageTitle,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirm: '',
        checked: false,
      },
    };
  },
  methods: {
    register(event) {
      event.preventDefault();
      this.$refs.registerSuccessModal.show();
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
