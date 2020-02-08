<template>
    <div>
        <div class="search">
            <input 
              class="search-input" 
              type="text" 
              placeholder="请输入目的地/攻略"
              v-model="keyword"
              @keyup.enter="submit"
            />
            <router-link to="/">
              <p class="search-p">取消</p>
            </router-link>   
        </div>
        <div class="wrapper" v-if="searchcont">
    
            <div v-for="item in result" :key="item.name.id">
              <router-link :to="'/detail/' + item.id" tag="div">
                
                <div class="content">
                    <div class="wrapper-img">
                        <img class="content-img" :src="item.name.image"/>
                    </div>
                    <div class="content-list">
                        <div class="content-name">{{item.name.name}}</div>
                        <div class="wrapper-logo">
                            <p class="content-logo">{{item.name.title}}</p>
                        </div>
                    </div>
                </div>
              </router-link>  
            </div>
    
        </div>
        <div class="nosearch" v-else>
          <img class="nosearch-img" src="../../assets/image/rekong.png"/>
        </div>
    </div>
</template>

<script>
import { search } from '../../api/api'
export default {
    name: 'Search',
    data() {
      return {
        keyword: '',
        result: [],
        searchcont: true
      }
    },
    methods: {
      submit() {
        search(this.keyword)
          .then((res) => {
            var searchdata = res.data
            if(searchdata.length !== 0) {
              this.result = searchdata
              this.searchcont = true
            }else{
              this.searchcont = false
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
}
</script>

<style lang="stylus" scoped>
  .search
    display: flex
    height: 1rem
    align-items: center
    padding: 0 .2rem
    .search-input
      height: .5rem
      width: 100%
      border-radius: .1rem
      padding: .06rem .2rem
      font-size: .26rem
      background: #ececec
    .search-p
      width: 1.2rem
      height: .5rem
      text-align: center
      line-height: .5rem
      color: #f39c11
      margin-left: .2rem
  .wrapper
    margin-bottom: 1rem
    .content
      display: flex
      height: auto 
      overflow: hidden
      padding: .2rem 0
      justify-content: space-between
      border-bottom: 1px solid #e8e8e8
      .wrapper-img
        width: 100%
        height: auto 
        margin-left: .1rem
        margin-right: .2rem
        .content-img
          width: 100%
          display: block
      .content-list
        width: 100%
        margin-right: .1rem
        position: relative
        .content-name
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 2
          overflow: hidden
          font-size: .34rem
          font-weight: bold
          line-height: 1.5
        .wrapper-logo
          position: absolute
          bottom: 0
          left: 0
          .content-logo
            border: 1px solid darkcyan
            color: #0086B3
            padding: .02rem .1rem
            border-radius: 1rem
  .nosearch
    text-align: center
    .nosearch-img
      width: 60%
      
  
</style>


