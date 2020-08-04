<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
  </div>
</template>

<script>
import { getBanner } from '../api/index'
import Banner from '../components/Banner'

export default {
  name: 'Recommend',
  data () {
    return {
      banners: []
    }
  },
  components: {
    Banner: Banner
  },
  created () {
    getBanner().then((data) => {
      // console.log(data)
      this.banners = data.banners
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped>

</style>
