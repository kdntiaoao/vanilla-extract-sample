if(!self.define){let e,a={};const c=(c,i)=>(c=new URL(c+".js",i).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,f)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let t={};const d=e=>c(e,s),n={module:{uri:s},exports:t,require:d};a[s]=Promise.all(i.map((e=>n[e]||d(e)))).then((e=>(f(...e),t)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/X1mlUJiAE1CctSuM_-k3Q/_buildManifest.js",revision:"bff83009f9e71523429128a26844b071"},{url:"/_next/static/X1mlUJiAE1CctSuM_-k3Q/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/146-7e7448adc27e76ac.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/305-cec52f59b9ff0178.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/5095844a-e86969d4870bf6fd.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/89-c492721cba134688.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/958-73b1e69992b6ab89.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/app/(client)/layout-0ca4bedf5094e2cc.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/app/(client)/page-0adf0bbcc5927548.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/app/(client)/register/page-97adeebc5655196b.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/app/layout-5eca45b3521cad7d.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/bce60fc1-daa3d4bbd9b3e3b0.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/main-662720b3742c3e5e.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/main-app-4c9db3cb76a89205.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/pages/_app-9200364401d23de2.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/pages/_error-fd439d3920c9616e.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-2bc30d39e2336279.js",revision:"X1mlUJiAE1CctSuM_-k3Q"},{url:"/_next/static/css/0d0833cc84ef3e8c.css",revision:"0d0833cc84ef3e8c"},{url:"/_next/static/css/43aefb26b821659d.css",revision:"43aefb26b821659d"},{url:"/_next/static/css/93e3e85cc07297e1.css",revision:"93e3e85cc07297e1"},{url:"/_next/static/css/fd206e1c111830dd.css",revision:"fd206e1c111830dd"},{url:"/_next/static/media/032ef35619c888c3-s.woff2",revision:"531efd51f633069d4ed791cdaae68240"},{url:"/_next/static/media/0756feab22fcccb6-s.woff2",revision:"79f0e186fcd402998d45b5ad43f26e0e"},{url:"/_next/static/media/0aaeb9f82238597d-s.woff2",revision:"a460a3ec37e61608501966b0a5cf1636"},{url:"/_next/static/media/0c1270073d68e379-s.woff2",revision:"d0349645790feb155eb9e905220bda3b"},{url:"/_next/static/media/0cacc215583b76b2-s.woff2",revision:"0c956803c18692fdcc3c1dc512f5ae08"},{url:"/_next/static/media/12d14f0fe4e44e66-s.woff2",revision:"b8f52358502fd66b25ed4251982ebc2e"},{url:"/_next/static/media/1319435e210c272f-s.woff2",revision:"21932b42a9f0b95cbf26dacc5738dcc5"},{url:"/_next/static/media/140a9ea373a43d8d-s.woff2",revision:"755127c5f86743f4f755a8cc5b052746"},{url:"/_next/static/media/141fc11b5e61d081-s.woff2",revision:"c325eac17b2e14b645af09c91c84d60f"},{url:"/_next/static/media/16cf400287318edf-s.woff2",revision:"819ad22e3efd3c261717e02ff2b13f53"},{url:"/_next/static/media/1799d88132ad86ab-s.woff2",revision:"ca44f7d6b489af3f239e9c79865c469f"},{url:"/_next/static/media/17bd64327c4fe2cb-s.woff2",revision:"fcd2ad6b329cac4fbffec69145e38187"},{url:"/_next/static/media/1c6b340b1f148008-s.woff2",revision:"92df8b03c1e3c7216833179b1f4f1331"},{url:"/_next/static/media/206b84dd9afc7734-s.woff2",revision:"64aac8fb00078e73abe4d561d4543de8"},{url:"/_next/static/media/22258d6e5968d814-s.woff2",revision:"721f5e858b2a943f8e9a4493a39aa053"},{url:"/_next/static/media/23502f690d74d3c1-s.woff2",revision:"2d0fe37806deb8ad30227a0ed25523b7"},{url:"/_next/static/media/23ef8b5e4c262b0c-s.woff2",revision:"1128f98286fa47391aae5d2e2d6ccc9b"},{url:"/_next/static/media/2740b84232b262c9-s.woff2",revision:"02a23899d759520135e6adb392c8d8ed"},{url:"/_next/static/media/282809794cf69389-s.woff2",revision:"519d40d5478b383c6a95ce5aeaef25b7"},{url:"/_next/static/media/2a440e434520f43f-s.woff2",revision:"b71156cb5a18b34d65a436798fbbabde"},{url:"/_next/static/media/2d4362e8a6b2f328-s.woff2",revision:"8b5e79b29fd640ad8d43ffe28946e207"},{url:"/_next/static/media/316c60611244842b-s.woff2",revision:"d13c0ed79d1de5f345696ae0c47fc872"},{url:"/_next/static/media/3464cc8439e9de4b-s.woff2",revision:"d78b8d3522de2f0da403b0cdbb812b10"},{url:"/_next/static/media/36f1d079fc477382-s.woff2",revision:"834bf67140992fa940b45de9949fcc20"},{url:"/_next/static/media/38149784815b9f2d-s.woff2",revision:"67db8f69f08407110da96c256fac1399"},{url:"/_next/static/media/38d99319feb96e96-s.woff2",revision:"a9d4c27c49ca5dd254ca0f51648fbdae"},{url:"/_next/static/media/3b6ea09b34f44d4c-s.woff2",revision:"b026f8b968a2977355ee5e930ae693fc"},{url:"/_next/static/media/41d5a19be3c5b9c9-s.woff2",revision:"f8b6b4cc0a890ae26cbce7647e7a4a34"},{url:"/_next/static/media/438d75cea89248e1-s.woff2",revision:"20c926b7e491debd5e3f75d14a185cf5"},{url:"/_next/static/media/4741ec026b70ac51-s.woff2",revision:"f0a219f70217548826a58cb9b6fd083b"},{url:"/_next/static/media/47779fd6e42b5056-s.woff2",revision:"8fdac962f437dac983bf9e616fbb5a69"},{url:"/_next/static/media/485a384af46ec850-s.woff2",revision:"ac6fdd8984a18303a0989e80656652ce"},{url:"/_next/static/media/496203f75f1b9d23-s.woff2",revision:"c2e5d263bd6575955d482d3fe940e83c"},{url:"/_next/static/media/4b55d40f4815ac8f-s.woff2",revision:"af0a5954e1a3c4c7108707eaade0e956"},{url:"/_next/static/media/4c483e02d14217f7-s.woff2",revision:"dc9521910052266a22cb9ed3cffc7a6f"},{url:"/_next/static/media/4c58a39eab668066-s.woff2",revision:"166db3c33c7f45755cd692a7360c0c6e"},{url:"/_next/static/media/4d3dce90d35e60d5-s.woff2",revision:"2605e54eeaa14705aa9a7774f86c494f"},{url:"/_next/static/media/4db54539fabb5a79-s.woff2",revision:"bd8c04e5f5b3dd79b5967510cd61a70c"},{url:"/_next/static/media/4db73f9091c1246b-s.woff2",revision:"c68df46154063c9ec8ed34e536fa2710"},{url:"/_next/static/media/4e4e15b9b0165a0b-s.woff2",revision:"a72784bea5618d347167faaa1ade10c4"},{url:"/_next/static/media/500bd1acb7d99900-s.woff2",revision:"462ccce82e6b43ce9fd1c18b50cb204e"},{url:"/_next/static/media/5329095b1daf6e18-s.woff2",revision:"80d6566a7416590f4ab03bb5c1eaf237"},{url:"/_next/static/media/53d74a45a21022ef-s.woff2",revision:"749e877e0e25ff88c5329501e60eca5c"},{url:"/_next/static/media/570af435286a6048-s.woff2",revision:"73a14c8cefdbc2174e92f242e0ce308e"},{url:"/_next/static/media/58312d14f69fa9dd-s.woff2",revision:"aecd45043512bf6a9b84f5ffbb50e1f8"},{url:"/_next/static/media/59dd312f820fbf1f-s.woff2",revision:"28a966285c84ed8d364f8aa5d9230545"},{url:"/_next/static/media/5a4b35facc5b706e-s.woff2",revision:"599db46f6476614bc149e1891d84f0e8"},{url:"/_next/static/media/5a683de0f6de1546-s.woff2",revision:"4c21ebc8f8e56521cddcc44cd2eeead8"},{url:"/_next/static/media/5b1c5c1bb2a0af61-s.woff2",revision:"3161a053be031cf2cdbf91fecd2526d6"},{url:"/_next/static/media/5bb5c34e0c1de693-s.woff2",revision:"2242b842db2934940294e36b050d3868"},{url:"/_next/static/media/612a8c81641fc004-s.woff2",revision:"dbc5ac3a72b8f9cad3a54c0034a2b4be"},{url:"/_next/static/media/64af0a935d0a7d54-s.woff2",revision:"48729f766d9cf0f72f08c85dcb7593f9"},{url:"/_next/static/media/6515c0ddd0592d44-s.woff2",revision:"b171461d5ce2628d041c4b4c28858379"},{url:"/_next/static/media/67c841efd6b082d1-s.woff2",revision:"c6b118d1e929a4c8321c16b05ed42f86"},{url:"/_next/static/media/6a37d4d9af2b94be-s.woff2",revision:"58f953bf69d26ae4c737466effd23f64"},{url:"/_next/static/media/6a7e3410ac8edfa2-s.woff2",revision:"6ebe09ab915ee06d7ff315a429f496bd"},{url:"/_next/static/media/6c0723cc0c4acd42-s.woff2",revision:"09dc90833ec5dcbb343c405480d96153"},{url:"/_next/static/media/6d1a6286c8417b98-s.woff2",revision:"83fa9c7451f69502e91118aaa01370e3"},{url:"/_next/static/media/6f4b9915b6b24202-s.woff2",revision:"08f5d59459c4c26358c9c1f8627cadd6"},{url:"/_next/static/media/71edc087371543a4-s.woff2",revision:"b75f066b72da896dc8f0799475a36175"},{url:"/_next/static/media/79a592c02a1b86a4-s.woff2",revision:"1b2449765b5f7ac600a925574cd22b46"},{url:"/_next/static/media/7c6bced4c1c742a4-s.woff2",revision:"11cb16cb4819548b6be586b02a68bc82"},{url:"/_next/static/media/7c9905e683e2e60e-s.woff2",revision:"426b114862e5d9c2884b5fdbbc47bcaa"},{url:"/_next/static/media/7e4ed236f00d4c97-s.woff2",revision:"4f9f51d24178f2cad9ae817435d18b9f"},{url:"/_next/static/media/7e5c6e7b636cbd88-s.woff2",revision:"386c8241a2be071af8a6f60b638c8188"},{url:"/_next/static/media/7f02d2b00b157e24-s.woff2",revision:"a9d1687b19cfc28b9321cf930028c2c7"},{url:"/_next/static/media/7f4fc2f39300ce72-s.woff2",revision:"4a5dc26218c1b38bc428a26af6415cce"},{url:"/_next/static/media/80289790761e120c-s.woff2",revision:"d5e43e4bc50b8458a39d8dee77260d88"},{url:"/_next/static/media/816073abcdb61171-s.woff2",revision:"823b2f58cfa96e5bd059032e4adc8cfa"},{url:"/_next/static/media/82fc62d021475d3a-s.woff2",revision:"bb638a4a59c2c2424b6ec3908f3bc392"},{url:"/_next/static/media/839e21dc87fa5a70-s.woff2",revision:"c1bc18208f40cb46e2b0171256f72527"},{url:"/_next/static/media/83f7f256703ab3da-s.woff2",revision:"ba6f27d74a5185f9d263cf2f6c2827e4"},{url:"/_next/static/media/8665f5d793a81830-s.woff2",revision:"f8d0be90642580991cef10d07efbf3b3"},{url:"/_next/static/media/89189805301af301-s.woff2",revision:"c0dd1a6724b92d7a9ee2634effa1ea4f"},{url:"/_next/static/media/8b59876bd5cea596-s.woff2",revision:"48eca12e657494235897a0b15fd5f74d"},{url:"/_next/static/media/8f2d2baa9ff6ab1b-s.woff2",revision:"d14e0fbd4c807c4d69fc189dda3be9ae"},{url:"/_next/static/media/8fc1c558c10dab61-s.woff2",revision:"1a7cba3b898808048108a53a5da452be"},{url:"/_next/static/media/92e7e0af67f02486-s.woff2",revision:"72131dbf6815dc576eccf65e2168f7cd"},{url:"/_next/static/media/92e7e57c475c62f5-s.woff2",revision:"2ffe8c95dfe9631e021fd938c92bfe16"},{url:"/_next/static/media/92e84c7f863233c7-s.woff2",revision:"4028b093fe936700c8079987d3b9a65a"},{url:"/_next/static/media/97167f923781d9a6-s.woff2",revision:"ae67c6d6c8d84938fd66b5194aa29f06"},{url:"/_next/static/media/9ac93487b1c346e9-s.woff2",revision:"12bc1ee857fd0d68e13b383685993045"},{url:"/_next/static/media/9e0ad401d3311436-s.woff2",revision:"1628f00eb57bfc62c1a5612a3f77503c"},{url:"/_next/static/media/a33c9685425be141-s.woff2",revision:"3a91b758c6fbadeaeb102db48bdc2042"},{url:"/_next/static/media/a4b99857da65161f-s.woff2",revision:"8c2c829ba67f118ca01d9b409c848c7f"},{url:"/_next/static/media/a6984bf42c5c4fc9-s.woff2",revision:"416b7eb15457e553a469533a73947685"},{url:"/_next/static/media/a7358921b1c2341c-s.woff2",revision:"e0c92177ebf659281a634dfad8b367a4"},{url:"/_next/static/media/a90e56329d9cef05-s.woff2",revision:"03b748dd0e08367d0ed2a4268f5fa30f"},{url:"/_next/static/media/aa42b43f290c45f6-s.woff2",revision:"853995b8655775644e114975e75c9c07"},{url:"/_next/static/media/aec95178d3c8eba4-s.woff2",revision:"1e158774d4a30010c371d90f700c8a20"},{url:"/_next/static/media/b0e9fc85b5f7e8bc-s.woff2",revision:"9e08a2760decaf02bcfc84b5709a70e5"},{url:"/_next/static/media/b156bf5f76fb6daa-s.woff2",revision:"1ebc07d44dabba6e6faab9015278bd17"},{url:"/_next/static/media/b5470b1dce7e5ec6-s.woff2",revision:"454c07bfcdeb4177ee7fae0a790432a2"},{url:"/_next/static/media/b6e5f545277abde5-s.woff2",revision:"cb56e2b2ca25faaf4f93a62d4692fef9"},{url:"/_next/static/media/bb949ad8293d1ee8-s.woff2",revision:"5c689c5ad1c9cf552837a31ce3520745"},{url:"/_next/static/media/bc9bd3366be2e7a5-s.woff2",revision:"11962cac92fadf5980e2abb1bab87563"},{url:"/_next/static/media/bcf178e8f28833ed-s.woff2",revision:"8667c09cdba489ac90b9791a8cac4412"},{url:"/_next/static/media/c0c254a94ff199d5-s.woff2",revision:"683aac8ec1f986d2c05b4e9d62a58ef0"},{url:"/_next/static/media/c266333585de3f5f-s.woff2",revision:"05c008605c19b029993c85d3fe3357ce"},{url:"/_next/static/media/c3f67d00da16e8a2-s.woff2",revision:"bbc99cd734881a3dfd720bf1151f4bc8"},{url:"/_next/static/media/c5ab12cf35d77a2b-s.woff2",revision:"c522015cec55c1eca0d1178972b69dc3"},{url:"/_next/static/media/c8c7583f43fd01c9-s.woff2",revision:"9c44dbef135d958fc5ab29d720154bbd"},{url:"/_next/static/media/d12e391a866ae5fc-s.woff2",revision:"c0b8d24cf3215ae2624355e8eb558584"},{url:"/_next/static/media/d1bc97de9e3f7fb9-s.woff2",revision:"59b31d6bc5a51f7e68ddd3dead202def"},{url:"/_next/static/media/d2908a2002d64a9c-s.woff2",revision:"963a952dff2fd95dff2f139f3944746d"},{url:"/_next/static/media/d41130e7a7cd5f28-s.woff2",revision:"b9246965af589dea6400a8f5b3517bf5"},{url:"/_next/static/media/d56a366ba21eb1e5-s.woff2",revision:"bf1299c30b377753d04ce3818a0719fe"},{url:"/_next/static/media/d60f9f4208122285-s.woff2",revision:"cd1b5c74ff9a9223304ffc6c26bd48b2"},{url:"/_next/static/media/d7db1f259ad87715-s.woff2",revision:"c1109adb581f65bc8f46913530bb1904"},{url:"/_next/static/media/d98a837581a5bffa-s.woff2",revision:"afcee4174c532084880664c9a2e6df5c"},{url:"/_next/static/media/dd470bf1075aefd2-s.woff2",revision:"35ee6a1b60d392dbf12d0335dedb8664"},{url:"/_next/static/media/e3fa5f3179352cb6-s.woff2",revision:"df4aa5d632b95d771ab314d80d794092"},{url:"/_next/static/media/e60b15e6e1355d96-s.woff2",revision:"90248ca9debf9a881f0f98324ab8b10e"},{url:"/_next/static/media/e8aa4183899a8d6a-s.woff2",revision:"ad4acd395d0675dd928a495eab63c0cb"},{url:"/_next/static/media/eb1cb20c4dec4c6d-s.woff2",revision:"8285aedd3cd8cad11deec022094bf688"},{url:"/_next/static/media/eb20b410ffa9dcc6-s.woff2",revision:"7318662c8316df94117e7f0846f486c5"},{url:"/_next/static/media/ee03d24aada4025d-s.woff2",revision:"77b87566f9d1740b253b38f6f85aa083"},{url:"/_next/static/media/f2031944822f8d29-s.woff2",revision:"7ce63d44a9f58f12047a19d0e4b9cb22"},{url:"/_next/static/media/f22cbe73839f1860-s.woff2",revision:"da97f0f16adb9bec736675de239a5d6f"},{url:"/_next/static/media/fab5d8f485670454-s.woff2",revision:"ca8873bf72357eb88bc60efb13ccd5db"},{url:"/_next/static/media/logo.af8cf0c0.png",revision:"67d5e5c2f1d19a21c748c2bf65d8a59a"},{url:"/icon-192x192.png",revision:"1893a84fd381ea221c2fd90545e138e0"},{url:"/icon-256x256.png",revision:"04f38ead7196502d2946bf066ce27b42"},{url:"/icon-384x384.png",revision:"4cb2b6d32f0c47587b92628250aadc3e"},{url:"/icon-512x512.png",revision:"f2b66551f074c65f849133e8447a2eef"},{url:"/manifest.webmanifest",revision:"a3f503c6e3ad95633e796c3784d70650"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:c,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
