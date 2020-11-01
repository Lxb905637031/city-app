<template>
    <div class="detail-wrapper">
        <detail-name :name="name" />
        <detail-stars :starNum="starNum" :score="score" />
        <detail-address :address="address" />
        <detail-price :price="price" />
        <detail-open-date-time :openDateTime="openDateTime" />
        <detail-tip :tip="tip" />
        <detail-intro :intro="intro" />
        <detail-ticket-info :ticket="ticketInfo" />
    </div>
</template>
<script>
import DetailName from './Sub/Name'
import DetailStars from './Sub/Stars'
import DetailAddress from './Sub/Address'
import DetailPrice from './Sub/Price'
import DetailOpenDateTime from './Sub/OpenDateTime'
import DetailTip from './Sub/Tip'
import DetailIntro from './Sub/Intro'
import DetailTicketInfo from './Sub/TicketInfo'
export default {
    name: 'DetailView',
    components: {
      DetailName,
      DetailStars,
      DetailAddress,
      DetailPrice,
      DetailOpenDateTime,
      DetailTip,
      DetailIntro,
      DetailTicketInfo
    },
    props: {
	    name: String,
		starNum: Number,
		score: String,
		address: String,
		price: Number,
		openDateTime: String,
        tip: String,
		intro: String,
		ticketInfo: String
	}
}
</script>