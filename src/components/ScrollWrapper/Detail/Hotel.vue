<template>
    <div class="detail-wrapper">
        <detail-name :name="name" />
        <detail-stars :starNum="starNum" :score="score" />
        <detail-address :address="address" />
        <detail-price :price="price" />
        <detail-service :service="service" />
    </div>
</template>
<script>
import DetailName from './Sub/Name'
import DetailStars from './Sub/Stars'
import DetailAddress from './Sub/Address'
import DetailPrice from './Sub/Price'
import DetailService from './Sub/Service'
export default {
    name: 'DetailHotel',
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailService
    },
    props: {
	    name: String,
		starNum: Number,
		score: String,
		address: String,
		price: Number,
        service: Object
	}
}
</script>