<template>
    <div class="business" v-if="this.userInfo.name">
        
          <div class="business-div">
            <router-link to="/collection" tag="div">
             <img class="business-img" src="../../../assets/image/myshou.png" />
             <p class="business-p">我的收藏</p>
            </router-link>
          </div>
        
        
        <div class="business-div">
            <img class="business-img" src="../../../assets/image/tuichu.png" />
            <p class="business-p" @click="loGout">退出登录</p>
        </div>
    </div>
</template>

<script>
import cookie from '../../../axios/cookie'
import { mapState } from 'vuex'
export default {
    name: 'PersonalBusiness',
    computed: {
      ...mapState(['userInfo'])
    },
    methods: {
        loGout() {
            cookie.delCookie('token')
            cookie.delCookie('name')
            this.$store.dispatch('users')
            //跳转到首页
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style lang="stylus" scoped>
  .business
    display: flex
    justify-content: space-between
    margin: .3rem .1rem
    .business-div
      background: #3aa4f0
      text-align: center
      padding: .2rem 0
      width: 46%
      border-radius: 3px
      color: white
      font-size: .2rem
      .business-img
        width: .7rem
        padding-bottom: .1rem
</style>

