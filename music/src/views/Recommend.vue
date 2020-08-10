<template>
  <div class="recommend">
    <ScrollView>
      <div>
        <Banner :banners="banners"></Banner>
        <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem"></Personalized>
        <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
        <Newsong :newsong="newsong"></Newsong>
      </div>
    </ScrollView>
    <transition>
      <router-view></router-view>
    </transition>
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
  methods: {
    fatherSelectItem (id) {
      // console.log(id)
      this.$router.push({
        path: `/recommend/detail/${id}`
      })
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
  overflow: hidden;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
}
  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-to{
    transform: translateX(0);
  }
  .v-enter-active{
    transition: all 1s;
  }
  .v-leave{
    transform: translateX(0);
  }
  .v-leave-to{
    transform: translateX(100%);
  }
  .v-leave-active{
    transition: all 1s;
  }
</style>
