<template>
  <div class="detail-wrapper">
    <detail-name :name="name" />
    <detail-stars :starNum="starNum" :score="score" />
    <detail-address :address="address" />
    <detail-price :price="price" />
    <detail-open-date-time :openDateTime="openDateTime" />
    <detail-recom :recom="recom" />
    <detail-comment-keyword :commentKeyword="commentKeyword" />
  </div>
</template>
<script>
import DetailName from "./Sub/Name";
import DetailStars from "./Sub/Stars";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailOpenDateTime from "./Sub/OpenDateTime";
import DetailRecom from "./Sub/Recom";
import DetailCommentKeyword from "./Sub/CommentKeyword";
export default {
  name: "DetailFood",
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailRecom,
    DetailCommentKeyword,
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    recom: String,
    commentKeyword: Array,
  },
};
</script>
