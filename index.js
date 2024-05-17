console.log('Code 1: App started. Engage!')

import router from './src/routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);