import {
  SET_FULL_SCREEN,
  SET_MINI_SCREEN,
  SET_LIST_SCREEN,
  SET_IS_PLAYING,
  SET_MODE_TYPE
} from './mutations-type'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniScreen ({ commit }, flag) {
    commit(SET_MINI_SCREEN, flag)
  },
  setListScreen ({ commit }, flag) {
    commit(SET_LIST_SCREEN, flag)
  },
  setIsPlaying ({ commit }, flag) {
    commit(SET_IS_PLAYING, flag)
  },
  setModeType ({ commit }, flag) {
    commit(SET_MODE_TYPE, flag)
  }
}
