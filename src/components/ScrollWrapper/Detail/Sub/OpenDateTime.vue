<template>
  <div class="datetime-bd">
    <span class="iconfont icon-datetime" />
    <div class="datetime">
      {{ openDateTime }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailOpenDateTime',
  props: {
    // 开放时间
    openDateTime: {
      type: String,
      default: '加载中...'
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
.datetime-bd {
  display: flex;
  align-items: center;
  min-height: 0.44rem;
  padding: 0.1rem 0.15rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-datetime {
    font-size: 0.18rem;
    margin-right: 0.1rem;
    color: #999;
  }

  .datetime {
    font-size: 0.14rem;
    line-height: 0.18rem;
  }
}
</style>
