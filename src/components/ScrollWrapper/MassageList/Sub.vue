<template>
  <div class="massage-item">
    <router-link
      :to="{ path: '/detail', query: { field: 'massage', id: data.id } }"
    >
      <div class="img">
        <img :src="data.img" :alt="data.name" class="massage-img" />
      </div>
      <div class="info">
        <h1 class="title">{{ data.name }}</h1>
        <div class="stars">
          <stars :starNum="Number(data.star)" />
          <span class="score">{{ data.score }}</span>
        </div>
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
import Stars from '../Sub/Stars';
export default {
  name: 'MassageListSub',
  components: {
    Stars,
  },
  props: {
    data: {
      type: Object,
      require: true,
    },
  },
}
</script>
<style lang="scss" scoped>
@import "@styles/mixins.scss";
@import "@styles/variables.scss";
.massage-item {
  position: relative;
  border-bottom: 1px solid #ddd;
  background-color: #fff;

  .img {
    width: 1.2rem;
    height: 1.2rem;
    padding: 0.1rem;
    box-sizing: border-box;

    .massage-img {
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

    .stars {
      font-size: 0.14rem;
      line-height: 0.5rem;
      color: #ccc;

      .score {
        color: $starColor;
      }
    }

    .others {
      display: flex;
      justify-content: space-between;
      font-size: 0.14rem;
      line-height: 0.35rem;

      .price {
        color: $defaultOrange;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
