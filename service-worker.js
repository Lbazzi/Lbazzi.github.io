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
    "revision": "e78e4b5f59777dd43fefbf55476cbd77"
  },
  {
    "url": "assets/css/0.styles.66843d10.css",
    "revision": "0cf9031d8e25e7b1ef634850eba4ca18"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.e6b09779.js",
    "revision": "b5326cd3d3548377ca4628442fb45e52"
  },
  {
    "url": "assets/js/10.297c60f2.js",
    "revision": "bb26265b302135e074eb7400be52e642"
  },
  {
    "url": "assets/js/11.c39e2817.js",
    "revision": "966dd5eab6f328b65f4ddd680a46e0c9"
  },
  {
    "url": "assets/js/12.d2974bf0.js",
    "revision": "a0ed8fc61e22d43a47bb5919b906f528"
  },
  {
    "url": "assets/js/13.28997193.js",
    "revision": "bbb1d688731d3f77d9584267dd5a6eab"
  },
  {
    "url": "assets/js/14.ac5d58d2.js",
    "revision": "24e8a445b0af103fec95a4d88e3afef5"
  },
  {
    "url": "assets/js/15.e90c9c92.js",
    "revision": "1cf5487735c306f1be0d13126e63c689"
  },
  {
    "url": "assets/js/16.376cd9d9.js",
    "revision": "01ed95a8d7a57a1bb6e9f7d783d6dca8"
  },
  {
    "url": "assets/js/17.2139927a.js",
    "revision": "23a16002a25969a14bdd8f81fbaa28c4"
  },
  {
    "url": "assets/js/18.e47718a0.js",
    "revision": "8dcb311194e9bcd6cac6d09e3fe5855b"
  },
  {
    "url": "assets/js/4.14d50692.js",
    "revision": "f2833b09be13701999bed8a90947cc5f"
  },
  {
    "url": "assets/js/5.58b7a939.js",
    "revision": "1271cf47e6993c434bd67cbb5ea17551"
  },
  {
    "url": "assets/js/6.e144aec5.js",
    "revision": "e9d64c920beda261a774114bb13b9d8e"
  },
  {
    "url": "assets/js/7.df7ecde5.js",
    "revision": "aced2a84ca19cbbbc660c2300eae049d"
  },
  {
    "url": "assets/js/8.a3425be7.js",
    "revision": "885e4b234295b6121d213af01ae51852"
  },
  {
    "url": "assets/js/9.da5de46c.js",
    "revision": "6e5e19efc90053ebc2da57d003f1b99c"
  },
  {
    "url": "assets/js/app.db934ccb.js",
    "revision": "ea3a302dd09306928b75611650fb98ff"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.2d25ea19.js",
    "revision": "471aa90869104f9121130a6c8fae7c63"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "a248c30bfe9782564a6527988d56c114"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c71771e5010bd1ae116f00427820a682"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "73ac517601d77a47b0ba07898f1b21c3"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2c12b0c0a970323876ce8e45b6a3ab34"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "972019f705d6fdde226280c6c1235252"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "01b0a8a33305b41c4979c6a45ece7cf6"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "dc7d1fd8e32a79374f5e6e18877c1c67"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "8c4facfb63799559c259242a676606e2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "7b8d2c0f4d7805f245eb7f98960cb45d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7533cc84a9b12a2be2b25e66a2e15daa"
  },
  {
    "url": "tags/js/index.html",
    "revision": "506a49143f595064925c0e1f6201b878"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "33d4b51c7c6b45151d3b3911a4cae589"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6727161896b1c61a4b2170f7619796ae"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "23b9ac3eecd383e3eaf18d350390777a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "384c0fb58dcb1ba3e07e9e04bd07e9bd"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d80b7683d0e78137fb89c13ad4861abf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "4a1a90c2a3c8b2032ca2e1937bfcde22"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "4dc7b6dc7746fea45bd19956c4052331"
  },
  {
    "url": "timeline/index.html",
    "revision": "9c3c958925786b2349fc6e13361fe84a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e50bf7341bc8d9c57b3380f2aef3d348"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "8e499f378e79de5e432a4e63b700269f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "57d8ee36a311bba86d90ce637f361049"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "50a36afe7384147b5fcc8c2c92464f83"
  },
  {
    "url": "生活分享/life.html",
    "revision": "336bedb699d66dd7abdc5eb474711c24"
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
