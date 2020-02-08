<template>
    <div>
        
            <div class="revert" v-show="showAbs" @click="back">
                <img class="revert-img" src="../../../assets/image/fanhui.png"/>
            </div>
       
        <div class="revert-fixed" v-show="!showAbs" @click="back">
            
                <div class="revert-wrapper">
                <img class="fixed-img" src="../../../assets/image/fanhui.png"/>
                </div>
           
            {{detailList.curriculum}}      
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailRevert',
    data () {
        return {
            showAbs: true
        }
    },
     props: {
      detailList: Object,
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop || document.body.scrollTop
            if (top > 60) {
                this.showAbs = false
            } else {
                this.showAbs = true

            }
        },
        back () {
            this.$router.go(-1)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
  .revert
    position: absolute
    left: .2rem
    top: .2rem
    width: .6rem
    height: .6rem
    line-height: .6rem
    text-align: center
    border-radius: 50%
    background: rgba(0,0,0,.8)
    .revert-img
      width: .6rem
      color: white
  .revert-fixed
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .9rem
    line-height: .9rem
    text-align: center
    color: #fff
    background: #0086b3
    font-size: .35rem
    z-index: 2
    .revert-wrapper
      position: absolute
      top: 0
      left: 0
      width: .6rem
      text-align: center
      font-size: .4rem
      color: #fff
      .fixed-img
        width: .6rem
        color: white
        padding-bottom: .09rem
</style>


