<template>
    <div class="scroll-wrapper" ref="wrapper">
        <div class="scroll-content">
            <view-list
                v-if="field === 'view'"
                :viewDatas="listDatas[cityId]"
			/>
			<food-list
                v-if="field === 'food'"
                :foodDatas="listDatas[cityId]"
			/>
			<hotel-list
                v-if="field === 'hotel'"
                :hotelDatas="listDatas[cityId]"
			/>
			<massage-list
                v-if="field === 'massage'"
                :massageDatas="listDatas[cityId]"
			/>
			<ktv-list
                v-if="field === 'ktv'"
                :ktvDatas="listDatas[cityId]"
			/>
            <loading :loadingShow="loadingShow" />
            <error :errorShow="errorShow" />
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import { mapState } from 'vuex'
import ViewList from './ViewList/Index'
import FoodList from './FoodList/Index'
import HotelList from './HotelList/Index'
import KtvList from './KtvList/Index'
import MassageList from './MassageList/Index'
import Loading from './Sub/Loading'
import error from './Sub/Error'
import { ListModel } from '@/models/list'
import tools from '@/utils/tools'
export default {
    name: 'ListScrollWrapper',
    components: {
        ViewList,
        FoodList,
        HotelList,
        KtvList,
        MassageList,
        Loading,
        error
    },
    data() {
        return {
            errorShow: false,
            loadingShow: true,
            listDatas: {}
        }
    },
    computed: {
        ...mapState(['cityId', 'field'])
    },
    mounted() {
        this.scroll = new BetterScroll(this.$refs.wrapper)
        this.getListDatas(this.cityId, this.field)
    },
    methods: {
        getListDatas(cityId, field) {
            if (!this.listDatas[cityId]) {
                const listModel = new ListModel()
                this.loadingShow = true
                listModel.getListDatas(cityId, field).then((res) => {
                    if (res && res.status === 0) {
                        const data = tools.formatJSON(res.data, 'keyword')
                        this.errorShow = false
                        setTimeout(() => {
                            this.listDatas[cityId] = data
                            this.loadingShow = false
                        }, 500)
                    } else {
                        this.errorShow = true
                    }
                })
            }
        }
    },
    watch: {
        cityId() {
            this.getListDatas(this.cityId, this.field)
        }
    }
}
</script>