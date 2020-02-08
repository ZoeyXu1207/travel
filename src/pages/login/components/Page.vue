<template>
    <div>
        <div class="switch">
            <router-link to="/logined" tag="div">
              <div class="switch-div">登录</div>
            </router-link>
            <router-link to="/register" tag="div">
              <div class="switch-div">注册</div>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
}
</script>

<style lang="stylus" scoped>
.switch
  display: flex
  justify-content: space-around
  margin: .5rem 0
  .switch-div
    font-size: .3rem
</style>


