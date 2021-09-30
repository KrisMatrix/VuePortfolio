//This index.js file is used by the perl Mojolicious::Plugin::Webpack 
// to create a combined css, vue, js files.

import './css/main.css';
import { createApp } from 'vue';
import App from './vue/App.vue';

createApp(App).mount('#app')
