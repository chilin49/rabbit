<template>
  <div id="post">
    <page-title>刊登</page-title>
    <div class="form-container">
      <b-form @submit="postProduct">
        <b-form-group label="貨幣:" label-for="categoryInput">
          <b-form-select id="categoryInput" :options="category" required v-model="form.category"></b-form-select>
        </b-form-group>
        <b-form-group label="數量:" label-for="countInput">
          <b-form-input id="countInput" type="number" v-model="form.count" required></b-form-input>
        </b-form-group>
        <b-form-group label="單價:" label-for="priceInput">
          <b-form-input id="priceInput" type="number" v-model="form.price" required></b-form-input>
        </b-form-group>
        <b-form-group label="錢包位址:" label-for="walletInput">
          <b-form-input id="walletInput" type="text" v-model="form.wallet" required></b-form-input>
        </b-form-group>
        <div class="action-area">
          <b-button type="submit" variant="primary">刊登</b-button>
          <b-button type="reset" variant="secondary">重設</b-button>
        </div>
      </b-form>
    </div>

    <b-modal ref="postModal" title="刊登成功" ok-title="確定" ok-only>
      您可以到交易紀錄頁面查看詳細資訊。
    </b-modal>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';

document.title = '兔兔加密貨幣交易網 刊登';
export default {
  name: 'post',
  components: {
    PageTitle,
  },
  data() {
    return {
      form: {
        count: '',
        price: '',
        wallet: '',
        category: '比特幣(Bitcoin)',
      },
      category: [
        '比特幣(Bitcoin)',
        '以太幣(Ethereum)',
        '瑞波幣(Ripple)',
        '萊特幣(LiteCoin)',
      ],
    };
  },
  methods: {
    postProduct(event) {
      event.preventDefault();
      this.$refs.postModal.show();
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
