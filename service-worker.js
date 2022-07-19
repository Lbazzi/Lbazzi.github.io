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
    "revision": "26b93d4e00b661e6b612b81de7c10304"
  },
  {
    "url": "assets/back-to-top.svg",
    "revision": "cbe7b14b16686bbafd5f42b528a5360e"
  },
  {
    "url": "assets/css/0.styles.b4abfb0d.css",
    "revision": "1d2a48d2f4113adecd2df2a567c4335b"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/img_1.37b969d8.png",
    "revision": "37b969d804fbab6335a80d3abc675c0b"
  },
  {
    "url": "assets/img/img_1.894a5f0e.png",
    "revision": "894a5f0eb9ade292010334e3fdebc414"
  },
  {
    "url": "assets/img/img_1.bc0b56ab.png",
    "revision": "bc0b56ab01ab3d322c0d45cfa1e63471"
  },
  {
    "url": "assets/img/img_1.fcd4f0cb.png",
    "revision": "fcd4f0cb8ddc3c13dd94cac588fe8849"
  },
  {
    "url": "assets/img/img_10.6cc37fca.png",
    "revision": "6cc37fcadc48b9ebaf7a7d2a5c3400aa"
  },
  {
    "url": "assets/img/img_10.92d23701.png",
    "revision": "92d2370138de599891e10e5e7f997776"
  },
  {
    "url": "assets/img/img_10.b578512b.png",
    "revision": "b578512b45ea8fceae5ff214946763e1"
  },
  {
    "url": "assets/img/img_11.1b52a89b.png",
    "revision": "1b52a89be2c15621f0cb3516c02a080d"
  },
  {
    "url": "assets/img/img_11.4fc05ad2.png",
    "revision": "4fc05ad2c4f32ca53c7ead0063240a81"
  },
  {
    "url": "assets/img/img_11.8ab241a0.png",
    "revision": "8ab241a0fca9e1caff284230ec2efa85"
  },
  {
    "url": "assets/img/img_12.4e749e2c.png",
    "revision": "4e749e2ce1151d481018047bf8b61a59"
  },
  {
    "url": "assets/img/img_12.a2f65340.png",
    "revision": "a2f653407b7a9f9837058942322da232"
  },
  {
    "url": "assets/img/img_12.ed41913c.png",
    "revision": "ed41913c37cbd4bd9887e31e930d429e"
  },
  {
    "url": "assets/img/img_13.062af4f4.png",
    "revision": "062af4f425f61dda0a7898421f9157f0"
  },
  {
    "url": "assets/img/img_13.35023880.png",
    "revision": "35023880deca7f38c0d480e10a628297"
  },
  {
    "url": "assets/img/img_13.63d60eee.png",
    "revision": "63d60eee103e60fb1f7b4afe013fbbe1"
  },
  {
    "url": "assets/img/img_14.07800ee0.png",
    "revision": "07800ee0c0137281ee4ef3ac428bde00"
  },
  {
    "url": "assets/img/img_14.566010d1.png",
    "revision": "566010d15704ae0effdd0a9b09c25647"
  },
  {
    "url": "assets/img/img_14.adcf0f51.png",
    "revision": "adcf0f51b783313b4f9a9bdd6f3fd074"
  },
  {
    "url": "assets/img/img_15.3238d0e7.png",
    "revision": "3238d0e7367e5ea32911c7d25e8ddc22"
  },
  {
    "url": "assets/img/img_15.5ba6bae5.png",
    "revision": "5ba6bae5d0b475c686b42a91c97683fe"
  },
  {
    "url": "assets/img/img_15.ed0a2c3b.png",
    "revision": "ed0a2c3b24c5bd21f33351b7e15897a3"
  },
  {
    "url": "assets/img/img_16.59f67f86.png",
    "revision": "59f67f869b850669134a4ac31794a1b0"
  },
  {
    "url": "assets/img/img_16.70a04654.png",
    "revision": "70a046547e135404b605aa182b1cfad8"
  },
  {
    "url": "assets/img/img_16.b9244a1b.png",
    "revision": "b9244a1bac0d77ca7f1b3b6a3c62b6d4"
  },
  {
    "url": "assets/img/img_17.0244d675.png",
    "revision": "0244d675cb456e9c84a967d88b9709d5"
  },
  {
    "url": "assets/img/img_17.11bed0bf.png",
    "revision": "11bed0bf49d4209443e944536e5ac069"
  },
  {
    "url": "assets/img/img_17.8044b1dd.png",
    "revision": "8044b1ddc351e8d230dcda9605262d77"
  },
  {
    "url": "assets/img/img_18.7da0fc72.png",
    "revision": "7da0fc72ccc206d4ed53bee3d6c91025"
  },
  {
    "url": "assets/img/img_19.3c3b867e.png",
    "revision": "3c3b867e22f6ed8a7600b9857caaf70c"
  },
  {
    "url": "assets/img/img_19.8dab1f0e.png",
    "revision": "8dab1f0e5997e3fea337989d38daa674"
  },
  {
    "url": "assets/img/img_2.79cd2e0a.png",
    "revision": "79cd2e0ae0bdb5349e821daceb8ebdc4"
  },
  {
    "url": "assets/img/img_2.ee3c1063.png",
    "revision": "ee3c10632ab6a02b66e105932cb523d9"
  },
  {
    "url": "assets/img/img_2.fa6aedba.png",
    "revision": "fa6aedba625450cbfc3dd40fb2a21275"
  },
  {
    "url": "assets/img/img_20.6a206ae4.png",
    "revision": "6a206ae410ee75372dc5da6f34e1fbfe"
  },
  {
    "url": "assets/img/img_20.c5266436.png",
    "revision": "c5266436dfc9b7ed09585a86cbb974c1"
  },
  {
    "url": "assets/img/img_20.c8047b8c.png",
    "revision": "c8047b8c26c876ee4f1aa6de9ab6daa5"
  },
  {
    "url": "assets/img/img_21.91d1cb87.png",
    "revision": "91d1cb87c9bf226660d9882dcdf0cad0"
  },
  {
    "url": "assets/img/img_21.bea83e2b.png",
    "revision": "bea83e2bdbfd0069cf1da4965a2cf6b9"
  },
  {
    "url": "assets/img/img_22.529748f5.png",
    "revision": "529748f5927c232318665e6b156a7b00"
  },
  {
    "url": "assets/img/img_22.9f1f6981.png",
    "revision": "9f1f69816232cb9ef51baa899ed1ca23"
  },
  {
    "url": "assets/img/img_23.16de0fd5.png",
    "revision": "16de0fd5daa5ecc2a3e06d8a781eab27"
  },
  {
    "url": "assets/img/img_23.3e06a862.png",
    "revision": "3e06a862843b69bf226addebf8d1bf3e"
  },
  {
    "url": "assets/img/img_24.3a5757fb.png",
    "revision": "3a5757fb1179d78a33f265e54d0b81bd"
  },
  {
    "url": "assets/img/img_24.ffd46d50.png",
    "revision": "ffd46d503d3af3c4fa9f0f71c8c8c046"
  },
  {
    "url": "assets/img/img_25.3e06a862.png",
    "revision": "3e06a862843b69bf226addebf8d1bf3e"
  },
  {
    "url": "assets/img/img_25.b84e928d.png",
    "revision": "b84e928dad7979787391c2b09c160e23"
  },
  {
    "url": "assets/img/img_26.3a5757fb.png",
    "revision": "3a5757fb1179d78a33f265e54d0b81bd"
  },
  {
    "url": "assets/img/img_26.a13cda37.png",
    "revision": "a13cda3741074c66fd44176cc9330491"
  },
  {
    "url": "assets/img/img_27.7803d396.png",
    "revision": "7803d396878c7067c9a46cce9897d7c8"
  },
  {
    "url": "assets/img/img_27.8dab1f0e.png",
    "revision": "8dab1f0e5997e3fea337989d38daa674"
  },
  {
    "url": "assets/img/img_28.6b08e646.png",
    "revision": "6b08e64663f92c6a0bcd5e8871117a85"
  },
  {
    "url": "assets/img/img_28.c8047b8c.png",
    "revision": "c8047b8c26c876ee4f1aa6de9ab6daa5"
  },
  {
    "url": "assets/img/img_29.69e189f5.png",
    "revision": "69e189f5a3aafd46596950714df122b1"
  },
  {
    "url": "assets/img/img_29.bea83e2b.png",
    "revision": "bea83e2bdbfd0069cf1da4965a2cf6b9"
  },
  {
    "url": "assets/img/img_3.587e24c4.png",
    "revision": "587e24c4e3a200a4b2913930b3cffe56"
  },
  {
    "url": "assets/img/img_3.5f4c91a0.png",
    "revision": "5f4c91a0069caf9947327b3ee6a27718"
  },
  {
    "url": "assets/img/img_3.7d597b62.png",
    "revision": "7d597b627fa8c7dddc7f5f9a3e9acb35"
  },
  {
    "url": "assets/img/img_30.5ea3c24f.png",
    "revision": "5ea3c24fae16cec5ef5608e4fb52d430"
  },
  {
    "url": "assets/img/img_30.9d7ac791.png",
    "revision": "9d7ac7915cf8408827a5fad4d6faf4a4"
  },
  {
    "url": "assets/img/img_31.8dab1f0e.png",
    "revision": "8dab1f0e5997e3fea337989d38daa674"
  },
  {
    "url": "assets/img/img_31.9a899d2d.png",
    "revision": "9a899d2d01187e5770759259829ecd38"
  },
  {
    "url": "assets/img/img_32.29d26d59.png",
    "revision": "29d26d594f4733c540bc530c6089be1b"
  },
  {
    "url": "assets/img/img_32.c8047b8c.png",
    "revision": "c8047b8c26c876ee4f1aa6de9ab6daa5"
  },
  {
    "url": "assets/img/img_33.59cca219.png",
    "revision": "59cca219db6345deee3ce935561c1fa2"
  },
  {
    "url": "assets/img/img_33.9f1f6981.png",
    "revision": "9f1f69816232cb9ef51baa899ed1ca23"
  },
  {
    "url": "assets/img/img_34.3e06a862.png",
    "revision": "3e06a862843b69bf226addebf8d1bf3e"
  },
  {
    "url": "assets/img/img_4.4eac06ee.png",
    "revision": "4eac06eee700b053c0f36a8d96af5b7d"
  },
  {
    "url": "assets/img/img_4.645b704a.png",
    "revision": "645b704a9817697948ba493f265a60da"
  },
  {
    "url": "assets/img/img_4.87785d46.png",
    "revision": "87785d46aaa3fc40444e42c0395321ec"
  },
  {
    "url": "assets/img/img_4.c6959fc2.png",
    "revision": "c6959fc2033365adb1c3bb3853a51ea9"
  },
  {
    "url": "assets/img/img_5.00a1b717.png",
    "revision": "00a1b717d4ffc172336699997f371521"
  },
  {
    "url": "assets/img/img_5.23a62bdb.png",
    "revision": "23a62bdb609d231865adaa2097791161"
  },
  {
    "url": "assets/img/img_5.4174ae92.png",
    "revision": "4174ae92c9fde16895b25a9e3bd0d437"
  },
  {
    "url": "assets/img/img_5.59c46b36.png",
    "revision": "59c46b36e0dd9a3397d8a148d9609e2a"
  },
  {
    "url": "assets/img/img_6.155b23af.png",
    "revision": "155b23af605dec2e5fb47e0fc36243fc"
  },
  {
    "url": "assets/img/img_6.6ef6987c.png",
    "revision": "6ef6987c4e146162aad1bb6d438ecc87"
  },
  {
    "url": "assets/img/img_6.6febb93b.png",
    "revision": "6febb93b24eb1886112d1c6949d40b48"
  },
  {
    "url": "assets/img/img_6.98f2dde5.png",
    "revision": "98f2dde5b44ad948a9cdc0b8f307616b"
  },
  {
    "url": "assets/img/img_7.27aa4222.png",
    "revision": "27aa422239af9650f198d104341227bc"
  },
  {
    "url": "assets/img/img_7.56f24a22.png",
    "revision": "56f24a2287359b87b3fa9234af2ff3a2"
  },
  {
    "url": "assets/img/img_7.b8b8e702.png",
    "revision": "b8b8e702ea28a7579abff7cf01c944c7"
  },
  {
    "url": "assets/img/img_7.bf4752ef.png",
    "revision": "bf4752ef79cdada56caaffc345e771a7"
  },
  {
    "url": "assets/img/img_8.0edf060f.png",
    "revision": "0edf060f3872df1bc77e26531e44cbc1"
  },
  {
    "url": "assets/img/img_8.266fc1c4.png",
    "revision": "266fc1c4be54a76b29b28f03b6cec273"
  },
  {
    "url": "assets/img/img_8.4b5403b5.png",
    "revision": "4b5403b569e844d83e999b64609133f8"
  },
  {
    "url": "assets/img/img_8.feca71f6.png",
    "revision": "feca71f68d99c3e4014221c77eb42197"
  },
  {
    "url": "assets/img/img_9.4f17f425.png",
    "revision": "4f17f42547c27583afc2b3f3ba24482b"
  },
  {
    "url": "assets/img/img_9.87b8a9cb.png",
    "revision": "87b8a9cbe41db56970d6c4ce5b44cedc"
  },
  {
    "url": "assets/img/img_9.ad3eca15.png",
    "revision": "ad3eca15a49463113af64855c2e5032f"
  },
  {
    "url": "assets/img/img.2516ae9b.png",
    "revision": "2516ae9b0dd350c3ce053bde1aefeb27"
  },
  {
    "url": "assets/img/img.4811138a.png",
    "revision": "4811138a90864ddf4cbf845dd0f44112"
  },
  {
    "url": "assets/img/img.a21cb9dd.png",
    "revision": "a21cb9ddc7eac47e3319b597c31c985c"
  },
  {
    "url": "assets/js/1.5320c65e.js",
    "revision": "90ec8b7307c6ce4b809aa192f53dc03e"
  },
  {
    "url": "assets/js/10.5c5fe6f0.js",
    "revision": "86c9a9f4b00f623d4017a946aef4021a"
  },
  {
    "url": "assets/js/11.ba2ae683.js",
    "revision": "930438608cbd91a642e1ce00bab2cf9c"
  },
  {
    "url": "assets/js/12.dbfc838c.js",
    "revision": "e0dc9e47b9f302a4c504c7226ece3945"
  },
  {
    "url": "assets/js/13.299e9f0e.js",
    "revision": "7d896124a1c34695aa9f80f91ffe170c"
  },
  {
    "url": "assets/js/14.0b2799ea.js",
    "revision": "ef85cba4dffd50c8f7f02312b185749c"
  },
  {
    "url": "assets/js/15.17d5e14c.js",
    "revision": "ecd0313477399aeb0b2251d7178fd9eb"
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
    "url": "assets/js/4.08a59edc.js",
    "revision": "e1f7093d0b8a6009f2e1eac26c75dba5"
  },
  {
    "url": "assets/js/5.e80e9655.js",
    "revision": "adeccc541326278512a7fc4bddace500"
  },
  {
    "url": "assets/js/6.f60a9a5b.js",
    "revision": "124cdae185714f3b41129676c22b760c"
  },
  {
    "url": "assets/js/7.9f66d81f.js",
    "revision": "49cf451ff2e61dcb47fda039482a6bb3"
  },
  {
    "url": "assets/js/8.131012ab.js",
    "revision": "6c3856f7cdedb3f068025d48f334d6f6"
  },
  {
    "url": "assets/js/9.138b3954.js",
    "revision": "5d365cef485d58c468359291f18579b8"
  },
  {
    "url": "assets/js/app.1761b438.js",
    "revision": "a9b16ecdc3550826ca84ba2358703aef"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.e39b1308.js",
    "revision": "32cf449818ea27aea249dbcc3c633be8"
  },
  {
    "url": "avatar.jpg",
    "revision": "043d23ab031145aee21965af75a2781d"
  },
  {
    "url": "categories/index.html",
    "revision": "35d620be5d1e40428fe18a1163538abd"
  },
  {
    "url": "categories/操作手册/index.html",
    "revision": "b2a32e3f56f84104d5d9ec95dad7a7be"
  },
  {
    "url": "css/style.css",
    "revision": "2dac879b9cbaa160b40805f9f218cb2c"
  },
  {
    "url": "guide/index.html",
    "revision": "738e23f6d0654aa7e7fe25a36dbae276"
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
    "revision": "c6e381d3043b57ebc5210dacdc5d5aba"
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
    "revision": "c32bc8344b4f032169b1524e1f53c747"
  },
  {
    "url": "tags/OC工时系统/index.html",
    "revision": "4e18a52f1773310a13ed298880a2af21"
  },
  {
    "url": "tags/会议感知系统/index.html",
    "revision": "d582b5d9258fcb129af94b92a087b886"
  },
  {
    "url": "tags/日志分析系统/index.html",
    "revision": "7f06dac3ddb4160f60b84f373f02bacb"
  },
  {
    "url": "tags/资源管理系统/index.html",
    "revision": "1b6d90d13cbd35c9364d1c57f939d493"
  },
  {
    "url": "timeline/index.html",
    "revision": "0a0f507ff074b2061f45cd5ec0e07117"
  },
  {
    "url": "操作手册/视联网OC工时系统操作手册/视联网OC工时系统操作手册.html",
    "revision": "2122e278c8a2fc6e41654fb255e7b8bb"
  },
  {
    "url": "操作手册/视联网会议感知系统操作手册/视联网会议感知系统操作手册.html",
    "revision": "21db9d11420f98b340a8461954580619"
  },
  {
    "url": "操作手册/视联网日志分析系统操作手册/视联网日志分析系统操作手册.html",
    "revision": "3e0a7e42b1e1eea6374ca81ca1d8bc59"
  },
  {
    "url": "操作手册/视联网资源管理系统操作手册/视联网资源管理系统操作手册.html",
    "revision": "aee9fedf80b814b1b2423dd976607fdf"
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
