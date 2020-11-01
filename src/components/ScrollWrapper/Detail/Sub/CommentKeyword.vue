<template>
  <div class="comment-bd">
    <detail-title icon="icon-haoping" title="评论关键词" />
    <div class="comment-keyword">
      <span
        class="keyword"
        v-for="(item, index) of commentKeyword"
        :key="index"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>
<script>
import DetailTitle from './Title'
export default {
  name: 'DetailCommentKeyword',
  components: {
    DetailTitle,
  },
  props: {
    // 评价关键词
    commentKeyword: {
      type: Array,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.comment-bd {
  @include flex-column;
  margin-top: 0.1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .comment-keyword {
    @include flex-row;
    flex-wrap: wrap;
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    box-sizing: border-box;

    .keyword {
      @include vh-center;
      height: 0.25rem;
      padding: 0 0.05rem;
      margin: 0 0.05rem 0.05rem 0;
      border: 1px solid $defaultGreen;
      border-radius: 0.03rem;
      color: $defaultGreen;
    }
  }
}
</style>
