<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of picDatas" :key="index" :pic="item">
        <img :src="item" alt="" srcset="" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" />
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
export default {
  name: 'DetailSwiper',
  components: {
    swiper,
    swiperSlide,
  },
  props: {
    picDatas: {
      type: Array,
      require: true
    },
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@styles/variables.scss";
.swiper-wrap >>> .swiper-pagination-bullet-active {
  background-color: $defaultGreen;
}

.swiper-slide {
  height: 2rem;
}

.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
