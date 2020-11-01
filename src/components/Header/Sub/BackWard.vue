<template>
  <div class="back-ward" @click="goBack">
    <span class="iconfont icon-header-arrow-left" />
  </div>
</template>
<script>
export default {
  name: 'BackWard',
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
};
</script>
<style lang="scss" scoed>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.back-ward {
  position: absolute;
  top: 0;
  left: 0;
  @include flex-row;
  @include vh-center;
  width: $headerHeight;
  height: $headerHeight;

  .iconfont {
    font-size: 0.2rem;
  }
}
</style>
