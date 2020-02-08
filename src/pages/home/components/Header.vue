<template>
    <div>
        <div class="search">
            <img class="search-img" src="../../../assets/image/feizhu.png" />
            <router-link to="/search">
              <input 
                class="search-input" 
                type="text" disabled="disabled" 
                placeholder="输入目的地/攻略/游记" 
              />
            </router-link>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style lang="stylus"scoped>
  .search
    display: flex
    height: 1rem
    align-items: center
    padding: 0 .2rem
    .search-img
      width: 2rem
      height: .76rem
      padding-right: .1rem
    .search-input
      height: .4rem
      width: 100%
      border-radius: .3rem
      padding: .06rem .2rem
      font-size: .26rem
</style>


