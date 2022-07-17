/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c0da65871db1b1cba0ea59bc3937e696"
  },
  {
    "url": "assets/css/0.styles.33581d1e.css",
    "revision": "6a25a481710dc312accc994b6bd54f71"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/img_1.0b70cc40.png",
    "revision": "0b70cc40a4700c9113f991e07b088467"
  },
  {
    "url": "assets/img/img_1.3ff530b6.png",
    "revision": "3ff530b61445b31bc4d270313eb4ee41"
  },
  {
    "url": "assets/img/img_1.884af666.png",
    "revision": "884af66695ea3b79cd4696d7068031bb"
  },
  {
    "url": "assets/img/img_1.bc0b56ab.png",
    "revision": "bc0b56ab01ab3d322c0d45cfa1e63471"
  },
  {
    "url": "assets/img/img_10.29a90d3b.png",
    "revision": "29a90d3b217ecee2b9c356e81927dfe3"
  },
  {
    "url": "assets/img/img_10.58947ab9.png",
    "revision": "58947ab9c94d03449672970f3887171e"
  },
  {
    "url": "assets/img/img_10.6b01c351.png",
    "revision": "6b01c351d29a2e2c7cd92207ac9488ab"
  },
  {
    "url": "assets/img/img_11.3c721d73.png",
    "revision": "3c721d73c2283b9496d706c7510cca4a"
  },
  {
    "url": "assets/img/img_11.5aaadce1.png",
    "revision": "5aaadce1c11628f63b087c802434c726"
  },
  {
    "url": "assets/img/img_11.d2376e44.png",
    "revision": "d2376e44b28a9ea8dc61920c4276a95e"
  },
  {
    "url": "assets/img/img_12.3811b58d.png",
    "revision": "3811b58daec8e52b0b68e7834ff40e73"
  },
  {
    "url": "assets/img/img_12.5b0b211c.png",
    "revision": "5b0b211ce636c8e172d2f75628cb7c6c"
  },
  {
    "url": "assets/img/img_12.a8cfbb34.png",
    "revision": "a8cfbb34f5d4b113c20cb9fb8595fd89"
  },
  {
    "url": "assets/img/img_13.361331d0.png",
    "revision": "361331d0ed82a4d9501b18d24db3add3"
  },
  {
    "url": "assets/img/img_13.92c3fbe0.png",
    "revision": "92c3fbe0fb89c3e911f50af7148a0415"
  },
  {
    "url": "assets/img/img_13.b54f75be.png",
    "revision": "b54f75be4467309ce1e0bdab4acaf7a7"
  },
  {
    "url": "assets/img/img_14.3ee6f51f.png",
    "revision": "3ee6f51f284e3e242a2e07d5a06ab854"
  },
  {
    "url": "assets/img/img_14.69c5c8fa.png",
    "revision": "69c5c8fa2216a3890f2ef85c581dc0d6"
  },
  {
    "url": "assets/img/img_14.84da87aa.png",
    "revision": "84da87aa086df90aeca2235df2ac322e"
  },
  {
    "url": "assets/img/img_15.28cc3592.png",
    "revision": "28cc359279a159f5d4ec7662d8f77167"
  },
  {
    "url": "assets/img/img_15.4b6dabe5.png",
    "revision": "4b6dabe54bed8c5ef01039f000b09eaa"
  },
  {
    "url": "assets/img/img_15.e32b7eaa.png",
    "revision": "e32b7eaa18f10bd3930e3f08662d1815"
  },
  {
    "url": "assets/img/img_16.1b342ded.png",
    "revision": "1b342ded23ecddd105aa3817fc2b1272"
  },
  {
    "url": "assets/img/img_16.2d166556.png",
    "revision": "2d1665561bb838ccaef169c907f8b7df"
  },
  {
    "url": "assets/img/img_16.912e9d91.png",
    "revision": "912e9d9115a6bfa4f76c078558c73cb6"
  },
  {
    "url": "assets/img/img_17.11bed0bf.png",
    "revision": "11bed0bf49d4209443e944536e5ac069"
  },
  {
    "url": "assets/img/img_17.361331d0.png",
    "revision": "361331d0ed82a4d9501b18d24db3add3"
  },
  {
    "url": "assets/img/img_17.e0439d49.png",
    "revision": "e0439d490d481a695490175d67ebdabf"
  },
  {
    "url": "assets/img/img_18.5cb348ae.png",
    "revision": "5cb348ae3f8c156c285a084b1cc3f3d5"
  },
  {
    "url": "assets/img/img_18.84da87aa.png",
    "revision": "84da87aa086df90aeca2235df2ac322e"
  },
  {
    "url": "assets/img/img_19.3c721d73.png",
    "revision": "3c721d73c2283b9496d706c7510cca4a"
  },
  {
    "url": "assets/img/img_19.f34545d3.png",
    "revision": "f34545d31b156bdfaa118d9fcd32a527"
  },
  {
    "url": "assets/img/img_2.1b7608fd.png",
    "revision": "1b7608fd63914e5547ab1dea61955ae6"
  },
  {
    "url": "assets/img/img_2.7317488a.png",
    "revision": "7317488a3a5889c44e1784830bc08ec3"
  },
  {
    "url": "assets/img/img_2.82f4b1e5.png",
    "revision": "82f4b1e514ab4d2c3424f2e7f1cb493d"
  },
  {
    "url": "assets/img/img_2.9924f28c.png",
    "revision": "9924f28cdc127d1fc1441d1b94c99097"
  },
  {
    "url": "assets/img/img_20.3811b58d.png",
    "revision": "3811b58daec8e52b0b68e7834ff40e73"
  },
  {
    "url": "assets/img/img_20.9007f584.png",
    "revision": "9007f584e800df669a2a117b2ca2d731"
  },
  {
    "url": "assets/img/img_21.361331d0.png",
    "revision": "361331d0ed82a4d9501b18d24db3add3"
  },
  {
    "url": "assets/img/img_21.eb620bdb.png",
    "revision": "eb620bdb3e9e15315f44e60a72646f73"
  },
  {
    "url": "assets/img/img_22.510c2f62.png",
    "revision": "510c2f62f539e39eadb35efa39de9102"
  },
  {
    "url": "assets/img/img_22.84da87aa.png",
    "revision": "84da87aa086df90aeca2235df2ac322e"
  },
  {
    "url": "assets/img/img_23.28cc3592.png",
    "revision": "28cc359279a159f5d4ec7662d8f77167"
  },
  {
    "url": "assets/img/img_23.b5257e03.png",
    "revision": "b5257e03bf56f7f00fd96389a5c96835"
  },
  {
    "url": "assets/img/img_24.1b342ded.png",
    "revision": "1b342ded23ecddd105aa3817fc2b1272"
  },
  {
    "url": "assets/img/img_24.1b97af87.png",
    "revision": "1b97af870eb99794352294a2aa61e759"
  },
  {
    "url": "assets/img/img_25.28cc3592.png",
    "revision": "28cc359279a159f5d4ec7662d8f77167"
  },
  {
    "url": "assets/img/img_25.fd80a776.png",
    "revision": "fd80a776d931c37603be067321507dba"
  },
  {
    "url": "assets/img/img_26.1b342ded.png",
    "revision": "1b342ded23ecddd105aa3817fc2b1272"
  },
  {
    "url": "assets/img/img_26.8f5b3fa1.png",
    "revision": "8f5b3fa14c65ea03be50d32e5cf3f2c2"
  },
  {
    "url": "assets/img/img_27.3c2ec84b.png",
    "revision": "3c2ec84be0bcf7a2fdd352286b9d8217"
  },
  {
    "url": "assets/img/img_27.3c721d73.png",
    "revision": "3c721d73c2283b9496d706c7510cca4a"
  },
  {
    "url": "assets/img/img_28.3811b58d.png",
    "revision": "3811b58daec8e52b0b68e7834ff40e73"
  },
  {
    "url": "assets/img/img_28.cf523caa.png",
    "revision": "cf523caa961924dd989e5d8a817f8d50"
  },
  {
    "url": "assets/img/img_29.5b1d5f7f.png",
    "revision": "5b1d5f7f59263ad88de97c684cd5216a"
  },
  {
    "url": "assets/img/img_29.77b6558d.png",
    "revision": "77b6558d9aa4c0b6a9f0b90b2f384e91"
  },
  {
    "url": "assets/img/img_3.0331caa9.png",
    "revision": "0331caa9f31e6a3d180947aa7b9532aa"
  },
  {
    "url": "assets/img/img_3.880f329b.png",
    "revision": "880f329be35c40ecfd0af483fff88119"
  },
  {
    "url": "assets/img/img_3.b27e03b0.png",
    "revision": "b27e03b002a967f83a4f60ddfe771814"
  },
  {
    "url": "assets/img/img_3.e4e1d20e.png",
    "revision": "e4e1d20ea6171c38635abd666cdd6fba"
  },
  {
    "url": "assets/img/img_30.63dd1c2a.png",
    "revision": "63dd1c2a796f7a858825dd1368b0c2b1"
  },
  {
    "url": "assets/img/img_30.dfccddd9.png",
    "revision": "dfccddd98f163580e673a5fea9338b55"
  },
  {
    "url": "assets/img/img_31.54a72125.png",
    "revision": "54a72125c77e75fe5cb4b322a22b8a8f"
  },
  {
    "url": "assets/img/img_31.5cbe5642.png",
    "revision": "5cbe5642ca3de1a0a6d09b61e232171a"
  },
  {
    "url": "assets/img/img_32.bd93cace.png",
    "revision": "bd93cace5ca36b1db7b719af7e8c2063"
  },
  {
    "url": "assets/img/img_32.cdc3efaa.png",
    "revision": "cdc3efaa8fba184f34f49829b76705a8"
  },
  {
    "url": "assets/img/img_33.146be8f6.png",
    "revision": "146be8f64e5d05fe602b5706a63ca953"
  },
  {
    "url": "assets/img/img_33.1813add6.png",
    "revision": "1813add60e9dbe534d1280ca38980d94"
  },
  {
    "url": "assets/img/img_34.e527544c.png",
    "revision": "e527544c99b478fd41deb02855f751a9"
  },
  {
    "url": "assets/img/img_4.35962f86.png",
    "revision": "35962f86bb5ee312a1fb02d3ddc8b8c6"
  },
  {
    "url": "assets/img/img_4.4497d557.png",
    "revision": "4497d5578c13aa8a708d7cb68e4630b8"
  },
  {
    "url": "assets/img/img_4.b9d54309.png",
    "revision": "b9d5430961faacbb62fb066df60bb992"
  },
  {
    "url": "assets/img/img_4.c809dd2e.png",
    "revision": "c809dd2e8c3ed90103156b21e9c144fc"
  },
  {
    "url": "assets/img/img_5.43c0f690.png",
    "revision": "43c0f6901b828e15f9f6cf02b3eeb22c"
  },
  {
    "url": "assets/img/img_5.ddb20561.png",
    "revision": "ddb205614d57b234387c0ae4cf00f2f0"
  },
  {
    "url": "assets/img/img_5.e326cc1a.png",
    "revision": "e326cc1a04f7e5c076c1074bd8b4a932"
  },
  {
    "url": "assets/img/img_5.fce2cd19.png",
    "revision": "fce2cd19c9945ff9217e4284ce87cdcd"
  },
  {
    "url": "assets/img/img_6.3ef63d94.png",
    "revision": "3ef63d9423224841cdb0922a65a53bba"
  },
  {
    "url": "assets/img/img_6.9e51eed8.png",
    "revision": "9e51eed81b5ade50f806d3b18114e55c"
  },
  {
    "url": "assets/img/img_6.a797a530.png",
    "revision": "a797a5305cd08e471488be2ccb0afe25"
  },
  {
    "url": "assets/img/img_7.20ddb9dd.png",
    "revision": "20ddb9dd59c0f40d530ebe4479ac4d5a"
  },
  {
    "url": "assets/img/img_7.61129f56.png",
    "revision": "61129f561cf065873f09f8b06a14bb5c"
  },
  {
    "url": "assets/img/img_7.999a9c80.png",
    "revision": "999a9c80a50b80b5d0a923e81d523354"
  },
  {
    "url": "assets/img/img_8.77937ba6.png",
    "revision": "77937ba68e3799a6c6a63cae82b0eaef"
  },
  {
    "url": "assets/img/img_8.8497a4cc.png",
    "revision": "8497a4ccb5b3fc1d619a6f56485504b4"
  },
  {
    "url": "assets/img/img_8.fdd5155c.png",
    "revision": "fdd5155ca57c813e8a67f8efe8fff2cc"
  },
  {
    "url": "assets/img/img_9.7808a6f0.png",
    "revision": "7808a6f0318efeaaa19b2b737ff7819d"
  },
  {
    "url": "assets/img/img_9.7e3bb528.png",
    "revision": "7e3bb528e075dc8b794660cc57e57c46"
  },
  {
    "url": "assets/img/img_9.d2ff003c.png",
    "revision": "d2ff003cfdb46fd3a9b094a71428ab04"
  },
  {
    "url": "assets/img/img.25427333.png",
    "revision": "25427333dc5fca0dee022e2ba8f90a72"
  },
  {
    "url": "assets/img/img.9bee545d.png",
    "revision": "9bee545de2c2c0f90d33e7bba32b5a5e"
  },
  {
    "url": "assets/img/img.b41088bc.png",
    "revision": "b41088bca04e34066f862b3d77254c4c"
  },
  {
    "url": "assets/img/img.fd51b3c5.png",
    "revision": "fd51b3c55b545796c906483574c011ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e27aba91.js",
    "revision": "9e05d3de8f84c2a79c4e7636048a6f89"
  },
  {
    "url": "assets/js/10.a0f92b8b.js",
    "revision": "3b4d1fb471a9ee38517037f7ae38cd1e"
  },
  {
    "url": "assets/js/11.94a07f73.js",
    "revision": "e2fc5b953f51435e680445c3c5238041"
  },
  {
    "url": "assets/js/12.93458870.js",
    "revision": "c4a8dba35c337ce3d17a21ea35c30c2f"
  },
  {
    "url": "assets/js/13.290c8a36.js",
    "revision": "522306e1c59a81e05849c0c51ed607e3"
  },
  {
    "url": "assets/js/14.1da9029d.js",
    "revision": "c4434cc5e6c0710c7fcdbb8c36d7cf84"
  },
  {
    "url": "assets/js/15.3e0133f5.js",
    "revision": "8f737e79ac024afe00e2d0ebf3ffbe37"
  },
  {
    "url": "assets/js/16.10142890.js",
    "revision": "05b424069ef84ccbbc49edd02803a32f"
  },
  {
    "url": "assets/js/17.425841f6.js",
    "revision": "3eaf1a34a5e482596e99924d398c81ac"
  },
  {
    "url": "assets/js/18.44337fdb.js",
    "revision": "0912c6d946843f290f1f64ba76e626d0"
  },
  {
    "url": "assets/js/19.ba9b3b5d.js",
    "revision": "9bad35a35b000950cd6aaf829d8233fb"
  },
  {
    "url": "assets/js/4.270cfedc.js",
    "revision": "09b4afca8c8ae2c02fd1d0957dcc7f29"
  },
  {
    "url": "assets/js/5.e1e810a8.js",
    "revision": "2b077dcc5ec6897d825b91127e05156b"
  },
  {
    "url": "assets/js/6.52ac9903.js",
    "revision": "88492a1cab4484ef2e95c151450f15c5"
  },
  {
    "url": "assets/js/7.93f34525.js",
    "revision": "fa300cb5131c1a75a6e418c2b41defe3"
  },
  {
    "url": "assets/js/8.e8fceadf.js",
    "revision": "2d48b8d219f0198712d4c5cf7dc9fed0"
  },
  {
    "url": "assets/js/9.b9da58ff.js",
    "revision": "67d79d84e985388dc5765e834f23989b"
  },
  {
    "url": "assets/js/app.e68151bc.js",
    "revision": "d5d594985038b9d35f42a310629b4ead"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.a414c3ea.js",
    "revision": "96dc67445d119eaa1e7fe0958f0a6be7"
  },
  {
    "url": "auth.html",
    "revision": "4068a5b09cec9151d28f61ec155b320a"
  },
  {
    "url": "avatar.jpg",
    "revision": "043d23ab031145aee21965af75a2781d"
  },
  {
    "url": "categories/index.html",
    "revision": "4ae95d0838498907b736de51edf93ff2"
  },
  {
    "url": "categories/操作手册/index.html",
    "revision": "bf9a4ea36998d36441ed4cc1ae98cf15"
  },
  {
    "url": "css/style.css",
    "revision": "e7ce95258f6bf22f21bf08110e163159"
  },
  {
    "url": "guide/index.html",
    "revision": "63ab2a67aa94edaa904fc32384e5b452"
  },
  {
    "url": "img/bg3.jpg",
    "revision": "e6abc0c086b2dd58c88222fba143ddad"
  },
  {
    "url": "img/sldl.png",
    "revision": "a86382190d4a1ef04b8e66a247491ed5"
  },
  {
    "url": "img/wechat-qr.jpg",
    "revision": "79182ec741d7db101fa4facc15a97e68"
  },
  {
    "url": "index.html",
    "revision": "326b48e0554cf6008c2ade27c70ececc"
  },
  {
    "url": "js/custom.js",
    "revision": "3fa54e98fb495f7756a399b235a7863c"
  },
  {
    "url": "sldl.png",
    "revision": "4681e6f4d907ba3f18444457fda35537"
  },
  {
    "url": "tag/index.html",
    "revision": "b1d1822fa4690a0b32a3f09fd049448f"
  },
  {
    "url": "tags/OC工时系统/index.html",
    "revision": "ce2912e37f7f47e711c3e4503dbeea0b"
  },
  {
    "url": "tags/会议感知系统/index.html",
    "revision": "d1fc1d2d7b2fb42c65b81ff4dc70d88c"
  },
  {
    "url": "tags/日志分析系统/index.html",
    "revision": "1afe218e37815217ced7a28ca0feb7bf"
  },
  {
    "url": "tags/资源管理系统/index.html",
    "revision": "f0e543b379ebcbef29100c3d3f631813"
  },
  {
    "url": "timeline/index.html",
    "revision": "ad7909f2a1e7ef8e32188213ad97e5e6"
  },
  {
    "url": "操作手册/视联网OC工时系统操作手册/视联网OC工时系统操作手册.html",
    "revision": "34d73f528b068a6c1ebbde9f8f470732"
  },
  {
    "url": "操作手册/视联网会议感知系统操作手册/视联网会议感知系统操作手册.html",
    "revision": "102e92c667fb19ef94fb88925272cb25"
  },
  {
    "url": "操作手册/视联网日志分析系统操作手册/视联网日志分析系统操作手册.html",
    "revision": "040c5b1a3cb15f933ddc9e86f6f51812"
  },
  {
    "url": "操作手册/视联网资源管理系统操作手册/视联网资源管理系统操作手册.html",
    "revision": "50776b645a294d07146cef397c89c699"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
