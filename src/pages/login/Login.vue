<template>
    <div>
        <login-header></login-header>
        <login-page></login-page>
    </div>
</template>

<script>
import LoginHeader from './components/Header'
import LoginPage from './components/Page'
export default {
    name: 'Login',
    components: {
        LoginHeader: LoginHeader,
        LoginPage: LoginPage,
    }
}
</script>

<style lang="stylus" scoped>

</style>
