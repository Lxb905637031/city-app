<template>
  <div class="address-bd">
    <span class="iconfont icon-positioning" />
    <span class="address-text">{{ address }}</span>
  </div>
</template>
<script>
export default {
  name: 'DetailAddress',
  props: {
    address: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>
<style lang="scss" scoped>
.address-bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  padding: 0.1rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-positioning {
    font-size: 0.18rem;
    margin-right: 0.1rem;
    color: #999;
  }

  .address-text {
    font-size: 0.14rem;
    line-height: 0.18rem;
  }
}
</style>
