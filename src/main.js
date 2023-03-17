import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faStar } from '@fortawesome/free-regular-svg-icons'

import FontAwesomeIcon from '@/helpers/fontAwesome'

// library.add(faStar)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
