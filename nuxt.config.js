const axios = require('axios')

module.exports = {
  head: {
    titleTemplate: '%s - Blog',
    meta: [
            {charset: 'utf8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/node_modules/normalize.css/normalize.css',
    '~/assets/global.css'
  ],
  router: {
    base: ''
    // base: '/simple-blog-with-nuxt/'
  },
  generate: {
    routes () {
      return axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          var rts = []
          res.data.forEach((d) => {
            rts.push('/article/' + d.id)
          })
          return rts
        })
    }
  },
  build: {
    vendor: [
      'axios'
    ]
  }
}
