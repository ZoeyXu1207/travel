<template>
    <div>
        <detail-header 
          :detailList="detailList" 
          :images="images" 
        >
        </detail-header>
        <detail-collect :productId="productId"></detail-collect>
        <detail-speech :detailList="detailList" :article="article"></detail-speech>
        <detail-gallery :images="images"></detail-gallery>
        <detail-revert :detailList="detailList"></detail-revert>
       
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailRevert from './components/Revert'
import DetailGallery from './components/Gallery'
import DetailCollect from './components/Collect'
import DetailSpeech from './components/Speech'

import { goods } from '../../api/api'
export default {
    name: 'Detail',
    components: {
        DetailHeader: DetailHeader,
        DetailRevert: DetailRevert,
        DetailGallery: DetailGallery,
        DetailCollect: DetailCollect,
        DetailSpeech: DetailSpeech,
        
    },
    data () {
        return {
            productId: '',
            detailList: {},
            images: [],
            article: '',
           
        }
    },
    mounted () {
        goods(this.productId)
            .then((res) => {
              const data = res.data
              console.log(res)
              this.detailList = data
              this.images = data.images
              this.image = data.image
              this.article = data.goods_desc
             
          })
            .catch((error) => {
              console.log(error)
          })
    },
    created() {
        this.productId = this.$route.params.id

    }
}
</script>

<style lang="stylus" scoped>
 
</style>


