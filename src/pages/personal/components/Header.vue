<template>
    <div>
        <div class="name">
            <router-link to="/login" v-if="!this.userInfo.name">
              <div class="btn" v-show="show">
                  登录
              </div>
            </router-link>
            
            <div v-else>
                <img class="image" src="../../../assets/image/zhangguo.jpg" />
                <p class="p">{{this.userInfo.name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'PersonalHeader',
    data () {
        return {
            show: true
        }
    },
    computed: {
      ...mapState(['userInfo'])
    }
}
</script>

<style lang="stylus" scoped>
  .name
    background: #477bc7
    padding: 1rem 0
    text-align: center
    display: flex
    flex-direction: column
    align-items: center
    .btn
      background: yellowgreen 
      width: 2rem
      padding: 0.2rem 0.1rem
      border-radius: 0.1rem
      color: white
    .image
      width: 2rem
      border-radius: 50%
    .p
      font-size: .3rem
      color: white
      margin-top: .2rem

</style>




