<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <div v-if="!data.status">
                <no-data-tip
                    v-show="(!data.viewDatas || data.viewDatas.length <= 0) &&
                    (!data.foodDatas || data.foodDatas.length <= 0) &&
                    (!data.hotelDatas || data.hotelDatas.length <= 0) &&
                    (!data.massageDatas || data.massageDatas.length <= 0) &&
                    (!data.ktvDatas || data.ktvDatas.length <= 0)
                    "
                />
                <div v-if="data.viewDatas && data.viewDatas.length > 0">
                    <home-title title="景点结果：" />
                    <view-list :viewDatas="data.viewDatas" />
                </div>
                <div v-if="data.foodDatas && data.foodDatas.length > 0">
                    <home-title title="美食结果：" />
                    <food-list :foodDatas="data.foodDatas" />
                </div>
                <div v-if="data.hotelDatas && data.hotelDatas.length > 0">
                    <home-title title="酒店结果：" />
                    <hotel-list :hotelDatas="data.hotelDatas" />
                </div>
                <div v-if="data.massageDatas && data.massageDatas.length > 0">
                    <home-title title="按摩结果：" />
                    <massage-list :massageDatas="data.massageDatas" />
                </div>
                <div v-if="data.ktvDatas && data.ktvDatas.length > 0">
                    <home-title title="KTV结果：" />
                    <ktv-list :ktvDatas="data.ktvDatas" />
                </div>
            </div>
            <error :errorShow="data.status == -1"/>
        </div>
    </div>
</template>
<script>
import error from './Sub/Error'
import NoDataTip from './Sub/NoDataTip'
import HomeTitle from './Sub/HomeTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import KtvList from './KtvList/Index'
import MassageList from './MassageList/Index'
import BetterScroll from 'better-scroll'
export default {
    name: 'SearchScrollWrapper',
    components: {
        error,
        NoDataTip,
        HomeTitle,
        ViewList,
        FoodList,
        HotelList,
        KtvList,
        MassageList
    },
    props: {
        data: {
            type: Object
        }
    },
    mounted() {
        this.scroll = new BetterScroll(this.$refs.wrapper)
    }
}
</script>