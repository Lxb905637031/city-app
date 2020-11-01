<template>
  <div class="city">
    <router-link to="City">
      <span class="city-name">{{ this.cityName }}</span>
      <span class="iconfont icon-header-arrow" />
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'CitySelect',
  computed: {
    ...mapState(['cityName']),
  },
};
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.city {
  width: 0.6rem;
  height: $headerHeight;

  a {
    @include flex-row;
    @include vh-center;
    width: 100%;
    height: $headerHeight;

    .city-name {
      font-size: 0.16rem;
      font-weight: bold;
    }

    .iconfont {
      font-size: 0.08rem;
      margin-left: 0.03rem;
    }
  }
}
</style>
