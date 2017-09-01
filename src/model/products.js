const categoryList = ['比特幣(Bitcoin)', '以太幣(Ethereum)', '瑞波幣(Ripple)', '萊特幣(LiteCoin)'];
const sellerList = ['胖虎', '小夫', '靜香', '大雄'];
const remainTimeList = ['1小時', '3小時', '6小時', '1天'];

function produceId() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const products = [];

for (let i = 0; i < 30; i += 1) {
  const product = {
    id: produceId(),
    category: categoryList[Math.floor(Math.random() * categoryList.length)],
    count: Math.floor(Math.random() * 100) + 1,
    price: Math.floor(Math.random() * 10000) + 1,
    seller: {
      nickname: sellerList[Math.floor(Math.random() * sellerList.length)],
    },
    wallet: `0x${produceId()}`,
    remainTime: remainTimeList[Math.floor(Math.random() * remainTimeList.length)],
  };
  products.push(product);
}

export default products;
