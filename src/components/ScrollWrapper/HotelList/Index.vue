<template>
    <div class="list-wrapper">
        <hotel-list-sub
            v-for="(item,index) of hotelDatas"
            :key="index"
            :data="item"
        />
    </div>
</template>
<script>
import HotelListSub from './Sub'
export default {
    name: 'HotelList',
    components: {
        HotelListSub
    },
    props: {
        hotelDatas: {
            type: Array,
            require: true
        }
    }
}
</script>