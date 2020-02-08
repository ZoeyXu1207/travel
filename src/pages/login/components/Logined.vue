<template>
    <div class="logined">
        <form>
            <input class="first-input" v-model="phoneNumber" type="text" placeholder="请输入手机号"/>
            <input type="password" v-model="password" placeholder="请输入密码"/>
            <input class="last-input" :disabled="!isregist" v-bind="logining" @click="loGin"
              type="button" value="登录" :class="{active: sendregis, begin: regisin}" 
            />
        </form>
    </div>
</template>

<script>
import {login} from '../../../api/api'
import cookie from '../../../axios/cookie'
export default {
    name: 'Logined',
    data () {
        return {
           phoneNumber: '',
           password: '',
           isregist: false,
           sendregis: true,
           regisin: false,
           //错误的提示信息
           iphones: ''
        }
    },
    computed: {
       logining () {
           if(this.phoneNumber && this.password != "") {
               this.isregist = true
               this.sendregis = false
               this.regisin = true
           } else {
               this.isregist = false
               this.sendregis = true
               this.regisin = false
           }
       } 
    },
    methods: {
      //引入弹窗组件
      showToast() {
        this.$popups(this.iphones)
      },
      loGin () {
        var that = this
        login({
          username: that.phoneNumber,
          password: that.password
        }).then((res) => {
          console.log(res)
          cookie.setCookie('name', that.phoneNumber,7)
          cookie.setCookie('token', res.data.token,7)
          this.$store.dispatch('users')
          this.$router.push({name: 'Home'})
        }).catch((error) => {
          console.log(error)
          if('non_field_errors' in error){
            that.iphones = '手机号或密码错误'
            that.showToast()
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped>
.logined
  margin: 0 0.5rem
  .first-input
    margin: .3rem 0
  .last-input
    border: 0
    margin-top: .8rem
    font-size: .3rem
    color: white
    border-radius: 20px
  .active
    background: #6cd868
  .begin
    background: #02bf03
    
.logined input 
    display: block
    width: 100%
    border: 1px solid #909090
    padding: .2rem 0
    border-radius: 3px
    
</style>

