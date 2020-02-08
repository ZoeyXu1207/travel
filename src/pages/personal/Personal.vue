<template>
    <div>
        <personal-nav></personal-nav>
        <personal-header></personal-header>
        <personal-business></personal-business>
    </div>
</template>

<script>
import PersonalNav from './components/Nav'
import PersonalHeader from './components/Header'
import PersonalBusiness from './components/Business'
export default {
    name: 'Personal',
    components: {
        PersonalNav: PersonalNav,
        PersonalHeader: PersonalHeader,
        PersonalBusiness: PersonalBusiness,
    }
}
</script>

<style lang="stylus" scoped>

</style>

