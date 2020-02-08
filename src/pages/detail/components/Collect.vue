<template>
  <div>
    <div class="collect" v-if="notcall" @click="noColl">
        <img class="collect-img" src="../../../assets/image/weishoucang.png"/>
        <p class="collect-p">未收藏</p>
    </div>
    <div class="collect" v-else @click="canCel">
        <img class="collect-img" src="../../../assets/image/yishou.png"/>
        <p class="collect-p">已收藏</p>
    </div>
  </div>
</template>

<script>
import cookie from '../../../axios/cookie'
import { getcoll, collect, delcoll } from '../../../api/api'
export default {
    name: 'DetailCollect',
    props: {
      productId: ''
    },
    data () {
      return {
        notcall: true,
        iphones: '',
      }
    },
    methods: {
      noColl () {
        //console.log(cookie.getCookie('token'))
        //console.log(this.productId)
        if(cookie.getCookie('token')){
          collect({
            goods: this.productId
          }).then((res) => {
            console.log(res)
            this.notcall = false
          }).catch((error) => {
            console.log(error)
          })
        } else {
          this.iphones = '请登录后再收藏'
          this.showToast()
        }
      },
      //取消收藏
      canCel () {
        //console.log('执行了')
        delcoll(this.productId).then((res) => {
          console.log(res)
          this.notcall = true
        }).catch((error) => {
          console.log(error)
        })
      },
      //提示组件
      showToast() {
        this.$popups(this.iphones)
      }
    },
    //判断是否登录
    created () {
      var productId = this.productId
      if(cookie.getCookie('token')){
        //判断是否收藏
        getcoll(productId).then((res) => {
          console.log(res)
          this.notcall = false
        }).catch((error) => {
          console.log(error)
          //console.log('执行了')
          this.notcall = true
        })
      } else {
        this.notcall = true
        console.log('没有登录')
      }
    }
}
</script>

<style lang="stylus" scoped>
  .collect
    float: right
    text-align: center
    margin: .3rem .1rem
    .collect-img
      width: .5rem
    .collect-p
      font-size: .3rem
      line-height: 1.8
</style>


