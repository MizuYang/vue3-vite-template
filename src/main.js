import { createApp } from 'vue'

// import './style.css'
import 'bootstrap'

// import { defineConfig } from 'vite';

// export default defineConfig({
//   resolve: {
//     alias: [
//         {
//             // this is required for the SCSS modules
//             find: /^~(.*)$/,
//             replacement: '$1',
//         },
//     ],
// },
//   // base: '/my-app/',
//   // build: {
//   //   outDir: 'dist',
//   //   assetsDir: 'assets',
//   //   // 其他構建選項...
//   // },
//   // server: {
//   //   port: 3000,
//   //   // 其他伺服器配置...
//   // },
//   // // 其他項目配置...
// });

import App from './App.vue'

createApp(App).mount('#app')
