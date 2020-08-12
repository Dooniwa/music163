import { SET_FULL_SCREEN, SET_MINI_SCREEN } from './mutations-type'

export default {
  setFullScreen ({ commit }, flag) {
    commit(SET_FULL_SCREEN, flag)
  },
  setMiniScreen ({ commit }, flag) {
    commit(SET_MINI_SCREEN, flag)
  }
}
