<template>
    <div>
        <collection-header></collection-header>
        <collection-collect></collection-collect>
    </div>
</template>

<script>
import CollectionHeader from './components/Header'
import CollectionCollect from './components/Collect'
export default {
    name: 'Collection',
    components: {
        CollectionHeader: CollectionHeader,
        CollectionCollect: CollectionCollect,
    }
}
</script>

<style lang="stylus" scoped>

</style>
