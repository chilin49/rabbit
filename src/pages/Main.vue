<template>
  <div id="main">
    <transition name="slide">
      <b-alert class="b-alert" :show="needLoginModalSec" @dismissed="needLoginModalSec=0">
        請先登入
      </b-alert>
    </transition>

    <page-title>總覽</page-title>

    <b-form-select class="category-select" :options="category" v-model="categorySelected"></b-form-select>
    <b-table striped hover :fields="fields" :items="filterProducts">
      <template slot="seller" scope="data">
        {{data.value.nickname}}
      </template>
      <template slot="action" scope="data">
        <b-button variant="primary" size="sm" @click="buy">購買</b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle';
import products from '@/model/products';

document.title = '兔兔加密貨幣交易網';
export default {
  name: 'main',
  components: {
    PageTitle,
  },
  data() {
    return {
      needLoginModalSec: 0,
      fields: {
        category: {
          label: '貨幣',
          sortable: true,
        },
        count: {
          label: '數量',
          sortable: true,
        },
        price: {
          label: '售價/個',
          sortable: true,
        },
        seller: {
          label: '賣家',
          sortable: true,
        },
        wallet: {
          label: '錢包',
        },
        remainTime: {
          label: '剩餘時間',
          sortable: true,
        },
        action: {
          label: '操作',
        },
      },
      products,
      category: [
        '全部',
        '比特幣(Bitcoin)',
        '以太幣(Ethereum)',
        '瑞波幣(Ripple)',
        '萊特幣(LiteCoin)',
      ],
      categorySelected: '全部',
    };
  },
  methods: {
    buy() {
      this.needLoginModalSec = 1;
    },
  },
  computed: {
    filterProducts() {
      if (this.categorySelected === '全部') {
        return this.products;
      }
      return this.products.filter(d => d.category === this.categorySelected);
    },
  },
};
</script>

<style lang='scss' scoped>
.category-select {
  width: 15vw;
  margin-left: 5vw;
  margin-bottom: 3vh;
}
</style>
