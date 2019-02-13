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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6a791e9ab4eb4eefdd84cdd6adcd3500"
  },
  {
    "url": "assets/css/1.styles.e7739efe.css",
    "revision": "fe57e6e937229f571a288b1f2f8169cd"
  },
  {
    "url": "assets/css/2.styles.bbb88204.css",
    "revision": "1f655dc6d91911a9cab832d676df0944"
  },
  {
    "url": "assets/css/3.styles.2c52909e.css",
    "revision": "b147a637eb4e2dd8d0a9ce08447427d6"
  },
  {
    "url": "assets/css/4.styles.62d8c16d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.82e6f2b0.css",
    "revision": "4acca1e56ec5a810bc6eec84a88c0fd0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.e7739efe.js",
    "revision": "0a9c3efc0caa2cda6bcd458b31a5852e"
  },
  {
    "url": "assets/js/10.ccc127d0.js",
    "revision": "1e3274f4994a05a2dfff12402d8ad278"
  },
  {
    "url": "assets/js/11.ec9eec74.js",
    "revision": "6b03a44633e54b6630b475f600a9f392"
  },
  {
    "url": "assets/js/2.bbb88204.js",
    "revision": "1fcd623a823e1ddd715f957ca75c6d1c"
  },
  {
    "url": "assets/js/3.2c52909e.js",
    "revision": "e19939df976e218a55fe9e50b2015d6c"
  },
  {
    "url": "assets/js/4.62d8c16d.js",
    "revision": "623a85c59a4435cddcea7b4aa410dbc2"
  },
  {
    "url": "assets/js/5.975c8d77.js",
    "revision": "6c452ab8a90b186c582377bdff566aaf"
  },
  {
    "url": "assets/js/6.19fbf923.js",
    "revision": "554bda4fe47be037d3dd9b912f102b63"
  },
  {
    "url": "assets/js/7.4f72ecc5.js",
    "revision": "58f8eab1ad59f99b01436b7ade5301fb"
  },
  {
    "url": "assets/js/8.8c08270d.js",
    "revision": "645329e461ae7337f95f51591ecfa56e"
  },
  {
    "url": "assets/js/9.3a6e6f1a.js",
    "revision": "55eeca7af9f2bc764d5428bab96fe3b0"
  },
  {
    "url": "assets/js/app.82e6f2b0.js",
    "revision": "481d152ce69aff43a22c9caad598bfe0"
  },
  {
    "url": "Github/CONTRIBUTING.html",
    "revision": "c8dc30fc361777856753de71368b1bfa"
  },
  {
    "url": "Github/ISSUE_TEMPLATE/bug-report.html",
    "revision": "43de1823c55de4bf95df274719899f60"
  },
  {
    "url": "Github/ISSUE_TEMPLATE/feature-request.html",
    "revision": "190e0d1753c55fb1095da3db795a287e"
  },
  {
    "url": "Github/PULL_REQUEST_TEMPLATE.html",
    "revision": "59409872730f05d8e4a85e0a62632d4f"
  },
  {
    "url": "Guidelines/index.html",
    "revision": "180ceded3d020e5c68fc00d30018e16f"
  },
  {
    "url": "index.html",
    "revision": "9434483e6e8daab6e9fa4f2b2d67884b"
  },
  {
    "url": "th/index.html",
    "revision": "30425b058dad77508cf4c1ad3f4b1305"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
