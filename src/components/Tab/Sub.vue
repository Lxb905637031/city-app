<template>
  <div
    :class="['tab-item', { current: cityInfo.cityId === cityId }]"
    @click="onTabClick(cityInfo)"
  >
    <span>{{ cityInfo.cityName }}</span>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'TabSub',
  props: {
    cityInfo: {
      type: Object,
      require: true,
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  methods: {
    ...mapMutations(['selectCity']),
    onTabClick(cityInfo) {
      this.selectCity(cityInfo)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.tab-item {
  @include vh-center;
  flex: 1;
  height: 100%;
  font-size: 0.16rem;
  box-sizing: border-box;
  border-bottom: 2px solid #fff;

  &.current {
    color: $defaultGreen;
    border-color: $defaultGreen;
  }
}
</style>
