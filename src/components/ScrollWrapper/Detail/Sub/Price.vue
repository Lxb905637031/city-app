<template>
  <div class="price-bd">
    <span class="iconfont icon-price" />
    <span class="price">¥{{ price || 0 }} 元起</span>
  </div>
</template>
<script>
export default {
  name: 'DetailPrice',
  props: {
    // 价格
    price: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.price-bd {
  display: flex;
  height: 0.44rem;
  padding: 0.03rem 0.15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-price {
    margin: .08rem .1rem 0 0;
    font-size: 0.18rem;
    color: #000;
  }

  .price {
    font-size: 0.16rem;
    margin-left: 0.1rem;
    color: $defaultOrange;
  }
}
</style>
