export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://in-w.ru/wp-content/uploads/2016/04/Zayac.jpg',
        id: '123'
      },
      {
        title: 'Second ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://avatars.mds.yandex.net/get-pdb/477388/d9cabd7c-a836-4f63-bf9d-bd5040e14953/s1200',
        id: '1234'
      },
      {
        title: 'Third ad',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://get.pxhere.com/photo/nature-bird-bokeh-animal-wildlife-zoo-red-beak-fauna-close-up-panda-endangered-vertebrate-germany-magpie-eurasian-magpie-perching-bird-crow-like-bird-green-jay-188836.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}
