<template>
  <div class="stars-bd">
      <span class="iconfont icon-smile" />
      <stars :starNum="starNum" />
      <span class="score">{{ score }}分</span>
  </div>
</template>
<script>
import Stars from "@/components/ScrollWrapper/Sub/Stars";
export default {
  name: 'DetailStars',
  components: {
    Stars,
  },
  props: {
    starNum: {
      type: Number,
      default: 0
    },
    score: {
      type: String,
      default: '0.0'
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.stars-bd {
  display: flex;
  height: 0.44rem;
  padding: 0.03rem 0.15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .icon-smile {
    font-size: 0.18rem;
    margin: 0.08rem 0.1rem 0 0;
    color: #999;
  }

  .score {
    font-size: 0.16rem;
    margin: 0.1rem 0 0 0.15rem;
    color:  $defaultOrange;
  }
}
</style>
