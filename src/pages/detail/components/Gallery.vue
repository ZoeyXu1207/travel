<template>
    <div class="container" v-show="showGallery" @click="hideGallery">
        <div class="wrapper">
            <swiper :options="swiperOptions">
            <!-- slides -->
              <swiper-slide v-for="item in images" :key="item.id">
                <img class="gallery-img" :src="item.image" />
              </swiper-slide>
             
            <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
    
            </swiper>
        </div>
    </div>
</template>

<script>
import Bus from '../../../bus/bus'
export default {
    name: 'DetailGallery',
    props: {
        images: Array
    },
    data () {
        return {
            swiperOptions: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                observeParents: true,
                observer: true
            },
            showGallery: false
        }
    },
    mounted () {
        Bus.$emit('val', this.showGallery)
        Bus.$on('val', (data) => {
            this.showGallery = true
        })
    },
    methods: {
        hideGallery() {
            this.showGallery = false
        }
    }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      width: 100%
      padding-bottom: 100%
      height: 0
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

