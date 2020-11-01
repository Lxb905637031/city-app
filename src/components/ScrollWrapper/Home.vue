<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <category-icons />
            <div v-if="!errorShow">
                <home-title title="推荐景点" />
                <view-list :viewDatas="homeDatas.viewDatas" />
                <home-title title="推荐美食" />
                <food-list :foodDatas="homeDatas.foodDatas" />
                <home-title title="推荐酒店" />
                <hotel-list :hotelDatas="homeDatas.hotelDatas" />
                <home-title title="推荐按摩" />
                <massage-list :massageDatas="homeDatas.massageDatas" />
                <home-title title="推荐KTV"/>
                <ktv-list :ktvDatas="homeDatas.ktvDatas" />
            </div>
            <error :errorShow="errorShow" />
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import Error from './Sub/Error'
import CategoryIcons from './CategoryIcons/Index'
import HomeTitle from './Sub/HomeTitle'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import KtvList from './KtvList/Index'
import MassageList from './MassageList/Index'
import { mapState } from 'vuex'
import { IndexModel } from '@/models/index'
import tools from '@/utils/tools'
export default {
    name: 'HomeScrollWrapper',
    components: {
        Error,
        CategoryIcons,
        HomeTitle,
        ViewList,
        FoodList,
        HotelList,
        KtvList,
        MassageList
    },
    data() {
        return {
            currentCityId: 0,
            errorShow: false,
            homeTile: {
                foodTitle: '推荐美食',
                hotelTitle: '推荐酒店',
                ktvTitle: '推荐KTV',
                massageTitle: '推荐按摩',
                viewTitle: '推荐景点'
            },
            homeDatas: {
                foodDatas: [],
                hotelDatas: [],
                ktvDatas: [],
                massageDatas: [],
                viewDatas: []
            }
        }
    },
    computed: {
        ...mapState(['cityId'])
    },
    mounted() {
        this.scroll = new BetterScroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true })
        this.currentCityId = this.cityId
        this.getHomeDatas(this.currentCityId)
    },
    activated() {
        // 缓冲池
        if (this.currentCityId !== this.cityId) {
            this.currentCityId = this.cityId
            this.getHomeDatas(this.currentCityId)
        }
    },
    methods: {
        getHomeDatas(cityId) {
            const indexModel = new IndexModel()
            indexModel.getHomeDatas(cityId).then(res => {
                if (res && res.status === 0) {
                    const data = res.data
                    this.errorShow = false
                    this.homeDatas.foodDatas = tools.formatJSON(data.foodDatas, 'keyword')
                    this.homeDatas.hotelDatas = data.hotelDatas
                    this.homeDatas.ktvDatas = data.ktvDatas
                    this.homeDatas.massageDatas = data.massageDatas
                    this.homeDatas.viewDatas = data.viewDatas
                } else {
                    this.errorShow = true
                }
            })
        }
    }
}
</script>
