<template>
  <div class="hotel-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'hotel', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="hotel-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <p class="score">{{ data.score }}</p>
        <p class="area">{{ data.area }}</p>
        <p class="others">
          <span class="item">
            ¥<span class="price">{{ data.default_price }}</span>
          </span>
          <span class="item">{{ data.city_name }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HotelListSub",
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
};
</script>
<style lang='scss' scoped>
@import '@styles/mixins.scss';
@import '@styles/variables.scss';
.hotel-item {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .hotel-img {
      width: 100%;
      height: 100%;
    }
  }

  .info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.1rem 0.1rem 0 1.2rem;
    box-sizing: border-box;

    .title {
      @include ellipsis;
      font-size: 0.18rem;
      color: #000;
      line-height: 0.2rem;
    }

    .score {
      line-height: 0.3rem;
      font-size: 0.16rem;
      color: $starColor;
    }

    .area {
      @include ellipsis;
      font-size: 0.14rem;
      color: #999;
    }

    .others {
      display: flex;
      justify-content: space-between;
      margin-top: 0.1rem;
      line-height: 0.25rem;

      .item {
        font-size: 0.14rem;

        &:nth-child(1) {
          color: $defaultGreen;

          .price {
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
