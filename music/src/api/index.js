import Network from './network'

export const getBanner = () => Network.get('/banner?type=2')
export const getPersonalized = () => Network.get('/personalized?limit=6')
export const getNewest = () => Network.get('/album/newest')
export const getNewsong = () => Network.get('/personalized/newsong')
export const getDetail = (data) => Network.get('/playlist/detail', data)
export const getAlbum = (data) => Network.get('/album', data)
