<template>
    <div class="wrapper">
        <div>
            <img class="header-img" :src="detailList.image"/>
        </div>
        <div class="header-title">{{detailList.curriculum}}</div>
        <div class="header-image" @click="imageShow">{{images.length}}张图片</div>
        <div class="icon">
            <div>
                <img class="icon-img" src="../../../assets/image/jingdian.png"/>
                <p class="icon-text">景点</p>
            </div>
            <div>
                <img class="icon-img" src="../../../assets/image/meishi.png"/>
                <p class="icon-text">美食</p>
            </div>
            <div>
                <img class="icon-img" src="../../../assets/image/gouwu.png"/>
                <p class="icon-text">购物</p>
            </div>
            <div>
                <img class="icon-img" src="../../../assets/image/zhusu.png"/>
                <p class="icon-text">住宿</p>
            </div>
        </div>
    </div>
</template>

<script>
import Bus from '../../../bus/bus'
export default {
    name: 'DetailHeader',
    data () {
      return {
        showimg: ''
      }
    },
    props: {
      detailList: Object,
      images: Array,
    },
    mounted () {
      Bus.$on('val', (data) => {
        this.showimg = data
      })
    },
    methods: {
      imageShow() {
        this.showimg = true
        Bus.$emit('val', this.showimg)
      }
    }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    position: relative
    .header-img
      width: 100%
    .header-title
      position: absolute
      top: 2rem
      left: .5rem
      font-size: .5rem
      color: white
    .header-image
      position: absolute
      top: 3rem
      left: .5rem
      font-size: .36rem
      color: white
    .icon
      display: flex
      justify-content: space-around
      position: absolute
      bottom: .5rem
      text-align: center
      width: 100%
      .icon-img
        width: 45% 
      .icon-text
        color: white
        padding-top: .1rem
        font-size: .3rem

</style>

