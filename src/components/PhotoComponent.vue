<template>
    <div>
<img :src="image" alt="">
<p>{{ earthDate }}</p>
    </div>
</template>

<script>
    export default {
        name: 'PhotoComponent',
        props: ['image', 'earthDate']
    }
</script>

<style lang="scss" scoped>
img {
    width: 200px;
}
</style>