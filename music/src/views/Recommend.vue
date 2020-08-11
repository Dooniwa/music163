<template>
  <div class="recommend">
    <div class="recommend-swapper">
      <ScrollView>
        <div>
          <Banner :banners="banners"></Banner>
          <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
          <Personalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'albums'"></Personalized>
          <Newsong :newsong="newsong"></Newsong>
        </div>
      </ScrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getNewest, getNewsong } from '../api/index'
import Banner from '../components/Recommend/Banner'
import Personalized from '../components/Recommend/Personalized'
import Newsong from '../components/Recommend/Newsong'
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
    fatherSelectItem (id, type) {
      // console.log(id)
      // console.log(`/recommend/detail/${id}/${type}`)
      this.$router.push({
        path: `/recommend/detail/${id}/${type}`
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
    getNewest().then((data) => {
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
  .recommend-swapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
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
