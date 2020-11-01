<template>
  <div class="container">
    <common-header :title="listTitle" />
    <tab />
    <list-scroll-wrapper />
  </div>
</template>
<script>
import fieldDatas from '@data/fields'
import { mapState } from 'vuex'
import CommonHeader from '@/components/Header/CommonHeader'
import Tab from '@/components/Tab/Index'
import ListScrollWrapper from '@/components/ScrollWrapper/List'
export default {
    name: 'List',
    components: {
        CommonHeader,
        Tab,
        ListScrollWrapper
    },
    computed: {
        ...mapState(['field']),
        listTitle () {
            if (this.field) {
                return fieldDatas.filter((item) => item.field === this.field)[0].iconText + '列表'
            } else {
                return '列表'
            }
		}
    },
    data() {
        return {
            title: '城市选择'
        }
    }
}
</script>
