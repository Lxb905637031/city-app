<template>
  <div class="detail-wrapper">
    <detail-name :name="name" />
    <detail-stars :starNum="starNum" :score="score" />
    <detail-address :address="address" />
    <detail-price :price="price" />
    <detail-open-date-time :openDateTime="openDateTime" />
    <detail-comment-keyword :commentKeyword="commentKeyword" />
    <detail-service :service="service" />
  </div>
</template>
<script>
import DetailName from "./Sub/Name";
import DetailStars from "./Sub/Stars";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailOpenDateTime from "./Sub/OpenDateTime";
import DetailCommentKeyword from "./Sub/CommentKeyword";
import DetailService from "./Sub/Service";
export default {
  name: "DetailMassage",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailService,
    DetailCommentKeyword,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    service: Object,
    commentKeyword: Array,
  }
}
</script>
