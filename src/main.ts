import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index.ts'
import IconCustom from '@/components/IconCustom/IconCustom.vue'

// DEPENDENCIAS PARA BOOTSTRAP VUE NEXT
import {createBootstrap} from 'bootstrap-vue-next'

// Add the necessary CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// DEPENDENCIAS PARA ELEMENT PLUS
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component(IconCustom)
app.use(router)

app.use(createBootstrap())

app.use(ElementPlus)


app.mount('#app')
