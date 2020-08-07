<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
        <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
        <Newsong :newsong="newsong"></Newsong>
      </div>
    </ScrollView>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getAlbum, getNewsong } from '../api/index'
import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
import Newsong from '../components/Newsong'
import ScrollView from '../components/ScrollView'

export default {
  name: 'Recommend',
  data () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      newsong: []
    }
  },
  components: {
    Banner: Banner,
    Personalized: Personalized,
    Newsong: Newsong,
    ScrollView: ScrollView
  },
  created () {
    getBanner().then((data) => {
      // console.log(data)
      this.banners = data.banners
    }).catch(function (err) {
      console.log(err)
    })
    getPersonalized().then((data) => {
      // console.log(data)
      this.personalized = data.result
    }).catch(function (err) {
      console.log(err)
    })
    getAlbum().then((data) => {
      // console.log(data)
      this.albums = data.albums.splice(0, 6)
    }).catch(function (err) {
      console.log(err)
    })
    getNewsong().then((data) => {
      // console.log(data)
      this.newsong = data.result
    }).catch(function (err) {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="scss">
.recommend{
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
