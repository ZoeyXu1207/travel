<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-ticket></home-ticket>
        <home-content></home-content>
        <home-nav></home-nav>
    </div>
</template>

<script>
import HomeNav from './components/Nav'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeTicket from './components/Ticket'
import HomeContent from './components/Content'
export default {
    name: 'Home',
    components: {
        HomeNav: HomeNav,
        HomeHeader: HomeHeader,
        HomeSwiper: HomeSwiper,
        HomeTicket: HomeTicket,
        HomeContent: HomeContent,
    }

}
</script>

<style lang="stylus" scoped>

</style>



