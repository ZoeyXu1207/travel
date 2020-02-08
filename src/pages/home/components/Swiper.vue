<template>
    <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
        <swiper-slide v-for="item in banner" :key="item.id">
            <img class="swiper-img" :src="item.image"/>
        </swiper-slide>

        <div class="swiper-pagination"  slot="pagination"></div>

    </swiper>
    </div>
</template>

<script>
import { banner } from '../../../api/api'
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            banner: []
        }
    },
    mounted () {
        banner({

        })
        .then((res) => {
            this.banner = res.data
        })
        .catch((error) => {
            console.log(error)
        })
    },
    computed: {
        showSwiper () {
            return this.banner.length
        }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    overflow: hidden
    width: 100%
    background: #eee
    .swiper-img
      width: 100%
</style>


