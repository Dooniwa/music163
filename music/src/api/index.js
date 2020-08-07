import Network from './network'

export const getBanner = () => Network.get('/banner?type=2')
export const getPersonalized = () => Network.get('/personalized?limit=6')
export const getAlbum = () => Network.get('/album/newest')
export const getNewsong = () => Network.get('/personalized/newsong')
