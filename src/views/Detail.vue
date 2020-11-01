<template>
    <div class="container">
        <common-header :title="title" />
        <detail-scroll-wrapper />
    </div>
</template>
<script>
import CommonHeader from '@/components/Header/CommonHeader'
import DetailScrollWrapper from '@/components/ScrollWrapper/Detail'
export default {
    name: 'Detail',
    components: {
        CommonHeader,
        DetailScrollWrapper
    },
    data() {
        return {
            title: '详细信息'
        }
    }
}
</script>