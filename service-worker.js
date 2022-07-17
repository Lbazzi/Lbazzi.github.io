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
    "revision": "72ae501ea1c0ebea6cc382ed1bb14af3"
  },
  {
    "url": "assets/css/0.styles.71998585.css",
    "revision": "7be0fb6d9035198e575b7caca7dddf91"
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
    "url": "assets/img/sakura.5e4a2cfb.png",
    "revision": "5e4a2cfbc3aae83420146d71ee06ba17"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5b42f2a5.js",
    "revision": "d745b257a5a1f74702bde3f4808b1bb3"
  },
  {
    "url": "assets/js/10.bcb8849b.js",
    "revision": "d8db6d1c466c02067d14e7def8bec40b"
  },
  {
    "url": "assets/js/11.a2ce965b.js",
    "revision": "10d224eb50bf6b9c7a348f6d450172e6"
  },
  {
    "url": "assets/js/12.33883a1e.js",
    "revision": "02cbc325bb0a6ed399c2084f47f0db3a"
  },
  {
    "url": "assets/js/13.e8149f64.js",
    "revision": "8cbf9a83083302c1e933a04112add55b"
  },
  {
    "url": "assets/js/14.841b0be5.js",
    "revision": "a39ff11bed08a261eb7545d9777f21d0"
  },
  {
    "url": "assets/js/15.ad583128.js",
    "revision": "b5c23a02adb332ab66a5dd4face36546"
  },
  {
    "url": "assets/js/16.01ee30b9.js",
    "revision": "8e562d313d594d7268aac34c717effbd"
  },
  {
    "url": "assets/js/17.8c666650.js",
    "revision": "fe64806818f6db4ef611bdc2e4285c9d"
  },
  {
    "url": "assets/js/18.34546509.js",
    "revision": "c2335427b2251cde55d77c2c735f4f5d"
  },
  {
    "url": "assets/js/19.cfc8455b.js",
    "revision": "f31205b857c03ac54c259afc054804ac"
  },
  {
    "url": "assets/js/4.4b2da322.js",
    "revision": "abbf97221af992b4d6439299f2e30871"
  },
  {
    "url": "assets/js/5.acb8259d.js",
    "revision": "a89916c03ecb198c04d8e27b0faacd0b"
  },
  {
    "url": "assets/js/6.7dba5421.js",
    "revision": "384f77a0dd2b7613ea1cb040366352d1"
  },
  {
    "url": "assets/js/7.6f1a5682.js",
    "revision": "9385f32736d9f01ad692179503b4de5f"
  },
  {
    "url": "assets/js/8.29f7128b.js",
    "revision": "0691fd6d277ebd1f685e866cea2bb153"
  },
  {
    "url": "assets/js/9.cb8d6a8e.js",
    "revision": "7be7bf1562d96f6b96ccbd2360a93be2"
  },
  {
    "url": "assets/js/app.1ae21c79.js",
    "revision": "de224a8976097abf87b579ae2b985136"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f81d2d91.js",
    "revision": "92ce67c452efe3ade7b26d7f8b165e2d"
  },
  {
    "url": "auth.html",
    "revision": "711769b8d840649148088d03f32e1a98"
  },
  {
    "url": "avatar.jpg",
    "revision": "043d23ab031145aee21965af75a2781d"
  },
  {
    "url": "categories/index.html",
    "revision": "3480c2356e018695ff1ae804d4bd8afd"
  },
  {
    "url": "categories/操作手册/index.html",
    "revision": "93b4cd54837ba75cc2b223014f436035"
  },
  {
    "url": "css/style.css",
    "revision": "e7ce95258f6bf22f21bf08110e163159"
  },
  {
    "url": "guide/index.html",
    "revision": "2d7059628df881bc7817f6888f1a2cdf"
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
    "revision": "eac80be32d10230f7099618c7aab1973"
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
    "revision": "d5b731bf48fcc3ac589a689fd254de31"
  },
  {
    "url": "tags/OC工时系统/index.html",
    "revision": "94896a11af362209592723526de12761"
  },
  {
    "url": "tags/会议感知系统/index.html",
    "revision": "8913a7447e4043b2ebc66ae757d69e39"
  },
  {
    "url": "tags/日志分析系统/index.html",
    "revision": "a1a0d1eee4e37f9a0a696e220b594e9e"
  },
  {
    "url": "tags/资源管理系统/index.html",
    "revision": "0f77e9a2095a098dfe98393bd3ef9254"
  },
  {
    "url": "timeline/index.html",
    "revision": "a6a13e1b07b550495105333e960f3ade"
  },
  {
    "url": "操作手册/视联网OC工时系统操作手册/视联网OC工时系统操作手册.html",
    "revision": "df8818575231aa99e2dfe66fdaa9accb"
  },
  {
    "url": "操作手册/视联网会议感知系统操作手册/视联网会议感知系统操作手册.html",
    "revision": "21ad41223be1e24a0ba3803d435883fc"
  },
  {
    "url": "操作手册/视联网日志分析系统操作手册/视联网日志分析系统操作手册.html",
    "revision": "14617932f806f1d5377a7028212d7dc9"
  },
  {
    "url": "操作手册/视联网资源管理系统操作手册/视联网资源管理系统操作手册.html",
    "revision": "4563caf08151eed9cd6434b33b9008c2"
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
