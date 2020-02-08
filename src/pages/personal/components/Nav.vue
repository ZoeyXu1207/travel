<template>
    <div>
        <div class="nav">
            <router-link tag="div" to="/">
                <div>
                    <img class="nav-img" :src="shouye" />
                    <p class="nav-p">首页</p>
                </div>
            </router-link>
            <router-link tag="div" to="/personal">
                <div>
                    <img class="nav-img" :src="wode" />
                    <p class="nav-p">我的</p>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import shouyeb from '../../../assets/image/shouyea.png'
import wodeb from '../../../assets/image/wodeb.png'
export default {
    name: 'PersonalNav',
    data () {
        return {
            shouye: shouyeb,
            wode: wodeb
        }
    }
}
</script>

<style lang="stylus" scoped>
  .nav
    display: flex
    justify-content: space-between
    position: fixed
    left: 0
    right: 0
    bottom: 0
    text-align: center
    background: rgb(235, 235, 228)
    padding: 0 .4rem
    z-index: 99rem
    .nav-img
      width: 0.5rem
      height: 0.5rem
    .nav-p
      font-size: .26rem
      padding-top: .04rem
      


</style>


