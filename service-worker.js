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
    "revision": "4bf800ee395ceb3a2bdc23a3fff72f75"
  },
  {
    "url": "assets/css/0.styles.51e7903d.css",
    "revision": "9506db1b37e74060b326f10650683c0b"
  },
  {
    "url": "assets/img/applecss(1).27e1363c.jpg",
    "revision": "27e1363c45112aa48556215d0401df90"
  },
  {
    "url": "assets/img/applecss(2).29ca98bc.jpg",
    "revision": "29ca98bc215698d9f122634e39130a8f"
  },
  {
    "url": "assets/img/applecss(3).827d2821.jpg",
    "revision": "827d2821d3df1f5411f4f6e624943764"
  },
  {
    "url": "assets/img/applecss(4).5b194851.jpg",
    "revision": "5b194851d3756d9beb594fd89a26f391"
  },
  {
    "url": "assets/img/applecss(5).9883b09c.jpg",
    "revision": "9883b09ca2882882dee45efb3e281ebd"
  },
  {
    "url": "assets/img/applecss(6).1ded29c5.jpg",
    "revision": "1ded29c5f6d674329967c2da4c14faa5"
  },
  {
    "url": "assets/img/cbdb.5c69d19c.jpg",
    "revision": "5c69d19c1b524d95b9195e87a5cf0447"
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
    "url": "assets/img/sc-all.c27cbd85.png",
    "revision": "c27cbd85a14b6a21fec448e99d36ebce"
  },
  {
    "url": "assets/img/sc.45485f28.png",
    "revision": "45485f285b5ed9c2dee4896658b9fa3c"
  },
  {
    "url": "assets/img/sc1.ea953d63.png",
    "revision": "ea953d63075ea25eac4c17ff18a5d16c"
  },
  {
    "url": "assets/img/sc2.8b907ed9.png",
    "revision": "8b907ed922a36b25f1b30984bdbf127f"
  },
  {
    "url": "assets/img/sc3.14f6d9f1.png",
    "revision": "14f6d9f116c179f0c7823a534f1036ae"
  },
  {
    "url": "assets/img/sc4.a5181a66.png",
    "revision": "a5181a667e559908aba684783eb19342"
  },
  {
    "url": "assets/img/sc5.d100cd45.png",
    "revision": "d100cd45e8737b7cf667ce4fb1f3fbd4"
  },
  {
    "url": "assets/img/slt.addebfbd.png",
    "revision": "addebfbd03e1b01a38651581574552f1"
  },
  {
    "url": "assets/img/vp1.6606dcca.png",
    "revision": "6606dccaecfee4197f346cb951f9a857"
  },
  {
    "url": "assets/img/vp2.bddcf170.png",
    "revision": "bddcf17050379f318184a2b4de9a8a27"
  },
  {
    "url": "assets/img/vp3.a493df54.png",
    "revision": "a493df5472d8f7a96ae18d7d834843a0"
  },
  {
    "url": "assets/img/vp4.9fe9b97c.png",
    "revision": "9fe9b97c33e4dd50ae3242ad3c21b934"
  },
  {
    "url": "assets/img/vp5.c3d3a3b3.png",
    "revision": "c3d3a3b3a685d42a6c2fd7706f022c5a"
  },
  {
    "url": "assets/img/vp6.fd207502.png",
    "revision": "fd207502da1d1f52d2112f02bcfce703"
  },
  {
    "url": "assets/img/vp7.4d63e555.png",
    "revision": "4d63e5556e71f7ceac17e386ba33401e"
  },
  {
    "url": "assets/img/vp8.1cd512c0.png",
    "revision": "1cd512c001865939b521977aa26dfd2e"
  },
  {
    "url": "assets/img/vue3.0_1.d3bbcc97.png",
    "revision": "d3bbcc970af8a97cf6a955693a1f1666"
  },
  {
    "url": "assets/img/vue3.0_10.f56a10b8.png",
    "revision": "f56a10b8d9c7189a603b4d06a2f6c480"
  },
  {
    "url": "assets/img/vue3.0_11.a5b39a82.png",
    "revision": "a5b39a824fd795bf7f67a4e7dfb9c787"
  },
  {
    "url": "assets/img/vue3.0_13.f268f159.png",
    "revision": "f268f15922a54dc18716ea6df8274691"
  },
  {
    "url": "assets/img/vue3.0_14.7db7368a.png",
    "revision": "7db7368ac6299ebb52be8e5b4fb20fc4"
  },
  {
    "url": "assets/img/vue3.0_3.c7a5cdd0.png",
    "revision": "c7a5cdd0d86f85b20a0bfb0e3b323d8a"
  },
  {
    "url": "assets/img/vue3.0_4.4c4bf43d.png",
    "revision": "4c4bf43df58ce5ddb4ea315eed0b4ee1"
  },
  {
    "url": "assets/img/vue3.0_5.5c743c1e.png",
    "revision": "5c743c1ee3545a208cb749ef0bb537e1"
  },
  {
    "url": "assets/img/vue3.0_6.9cae3503.png",
    "revision": "9cae3503476e03ea837f640a6a0bbd0b"
  },
  {
    "url": "assets/img/vue3.0_7.9c594861.png",
    "revision": "9c5948615dd7265c7e3a2417deb4c1a4"
  },
  {
    "url": "assets/img/vue3.0_8.718dec0e.png",
    "revision": "718dec0e138252c16d4560e2190d44cb"
  },
  {
    "url": "assets/img/vue3.0_9.04cd4061.png",
    "revision": "04cd406142312e76e69c7d11034d8971"
  },
  {
    "url": "assets/img/vue3.0.6c66373f.png",
    "revision": "6c66373f425854b80254582ef80a00f5"
  },
  {
    "url": "assets/js/1.5d8ce6c5.js",
    "revision": "254cca779da608422627ad9e7db82e87"
  },
  {
    "url": "assets/js/10.38a4a5f0.js",
    "revision": "6886541431b2b9481981593177adee44"
  },
  {
    "url": "assets/js/11.b91b5a40.js",
    "revision": "df1e922d55911a07e632cd4af6668b47"
  },
  {
    "url": "assets/js/12.95790516.js",
    "revision": "95435adc57811dad92da0fd4f314cba2"
  },
  {
    "url": "assets/js/13.66a0ab03.js",
    "revision": "e8c8cc1ad4e35129f14ec789a70e036e"
  },
  {
    "url": "assets/js/14.db55b9ac.js",
    "revision": "469fcf7930856d5e0748edeb03be7797"
  },
  {
    "url": "assets/js/15.24530ff1.js",
    "revision": "d2339d282897e82203b758f325464249"
  },
  {
    "url": "assets/js/16.fe9f571c.js",
    "revision": "4c3fe5afd07fb5b380b0be2d2d0929f4"
  },
  {
    "url": "assets/js/17.7d5bee7c.js",
    "revision": "2b46e7afe5b376be51d5480c14b8ab50"
  },
  {
    "url": "assets/js/18.7ae12281.js",
    "revision": "d688520d7c160658fdb1e79a5cba9a50"
  },
  {
    "url": "assets/js/19.fada0aa4.js",
    "revision": "43df46c7a1387b818dac8df314e2ff7b"
  },
  {
    "url": "assets/js/20.b3d6df78.js",
    "revision": "117acc1d2f83bfc3f6124af3bfacc78f"
  },
  {
    "url": "assets/js/21.c7001a47.js",
    "revision": "2dee50da67aeedfac5366ccf917bd454"
  },
  {
    "url": "assets/js/22.243d0792.js",
    "revision": "e374e67f8bb4e948971c156c7ea09f87"
  },
  {
    "url": "assets/js/23.98298096.js",
    "revision": "6ec50d657d0cb70b735a48b514a4caac"
  },
  {
    "url": "assets/js/3.9c4d39a8.js",
    "revision": "a4bee750c7c645b8fa4847144419174d"
  },
  {
    "url": "assets/js/4.c7fdfba1.js",
    "revision": "1f11098c71173802c1ec2eedc24ad5bc"
  },
  {
    "url": "assets/js/5.3ffe37a7.js",
    "revision": "46dfc62c532f65165fd1e515f35b6537"
  },
  {
    "url": "assets/js/6.e145e05c.js",
    "revision": "e8fbc31c23dd7cb332b28965756c93bc"
  },
  {
    "url": "assets/js/7.a7ee5362.js",
    "revision": "23866f5a2d4558f59817082e07842ff9"
  },
  {
    "url": "assets/js/8.eb1a7f4f.js",
    "revision": "178e3df5132d1011ac2cc15b5ff2c95c"
  },
  {
    "url": "assets/js/9.37b5f1df.js",
    "revision": "170a44d8645394b1ff9f4a505fd73ff3"
  },
  {
    "url": "assets/js/app.bb921435.js",
    "revision": "b9da5ecd2a87cf1ac5f20ebfb807b8b6"
  },
  {
    "url": "categories/index.html",
    "revision": "1bdbad7499fd5c51042a14cf587dd6a9"
  },
  {
    "url": "categories/JS底层原理/index.html",
    "revision": "efade94e231e6f89430a8b593bc2ba54"
  },
  {
    "url": "categories/前端技术/index.html",
    "revision": "de0b1e16cf5740ee07d8ff23189bd4c2"
  },
  {
    "url": "categories/前端项目/index.html",
    "revision": "afb273895059df73e993d4ed7c6a2027"
  },
  {
    "url": "categories/开源库/index.html",
    "revision": "2de32f6984fb8549184082434c15ac37"
  },
  {
    "url": "categories/软件工程/index.html",
    "revision": "417a49888b3c38e32b828627f1643d06"
  },
  {
    "url": "categories/面试经历/index.html",
    "revision": "fbe2d39ce7d93227a216bb331f0d9915"
  },
  {
    "url": "CBDB中国历代人物历史可视化系统.html",
    "revision": "765b1d0843f34fceae7c41e1c4363df9"
  },
  {
    "url": "ConquerFitness健身日记小程序.html",
    "revision": "f23142a6e8708847cad9634c149e89ff"
  },
  {
    "url": "images/ali.jpeg",
    "revision": "a28406f4bd1eced494e8b15fbed45289"
  },
  {
    "url": "images/applecss(1).jpg",
    "revision": "27e1363c45112aa48556215d0401df90"
  },
  {
    "url": "images/applecss(2).jpg",
    "revision": "29ca98bc215698d9f122634e39130a8f"
  },
  {
    "url": "images/applecss(3).jpg",
    "revision": "827d2821d3df1f5411f4f6e624943764"
  },
  {
    "url": "images/applecss(4).jpg",
    "revision": "5b194851d3756d9beb594fd89a26f391"
  },
  {
    "url": "images/applecss(5).jpg",
    "revision": "9883b09ca2882882dee45efb3e281ebd"
  },
  {
    "url": "images/applecss(6).jpg",
    "revision": "1ded29c5f6d674329967c2da4c14faa5"
  },
  {
    "url": "images/applecss(7).jpg",
    "revision": "05bcc4942738cc79eb5da3f39933c316"
  },
  {
    "url": "images/applecss(8).jpg",
    "revision": "cdbfac4db318db75a2dc384b7ed1fa85"
  },
  {
    "url": "images/bg.jpg",
    "revision": "775aca3635133ac80f36cb2613b03272"
  },
  {
    "url": "images/bibao.png",
    "revision": "a160ceeb23ae6c7485159587d8ad60e0"
  },
  {
    "url": "images/callstack.png",
    "revision": "c00da9a3605de3cbac651fe983bd0b94"
  },
  {
    "url": "images/cbdb.jpg",
    "revision": "5c69d19c1b524d95b9195e87a5cf0447"
  },
  {
    "url": "images/Chrome (1).png",
    "revision": "3a15d5b10eb3ddbabf670b3d8229d99c"
  },
  {
    "url": "images/Chrome (2).png",
    "revision": "f51d2b4f2b06154f8dbb75800d50d5d5"
  },
  {
    "url": "images/Chrome (3).png",
    "revision": "c09332b17a6fcdf85ed39fc1bcb1f9b5"
  },
  {
    "url": "images/Chrome (4).png",
    "revision": "ccb69a05db3adfa49e4427827665e0c2"
  },
  {
    "url": "images/Chrome (5).png",
    "revision": "fb280587a8f477dd66f49e317a61e582"
  },
  {
    "url": "images/Chrome (6).png",
    "revision": "611730331bebbd5e731b85b3ce8148f9"
  },
  {
    "url": "images/Chrome (7).png",
    "revision": "829b5d86ec1d758f4790c551859e455e"
  },
  {
    "url": "images/Chrome (8).png",
    "revision": "89cdfc4bcc6f1b2aa598156fe26cc1ba"
  },
  {
    "url": "images/Chrome (9).png",
    "revision": "6f501f395bfe1dd93951150d18fe92d0"
  },
  {
    "url": "images/ConquerFitness.png",
    "revision": "f7ffcc3ff6442ffe902843fe0629cfb4"
  },
  {
    "url": "images/headlogo.png",
    "revision": "be3a4768ffebe4bd999cae74f6cec4db"
  },
  {
    "url": "images/logo.png",
    "revision": "1d10d36ef2cfdfbd469e183cdfa361aa"
  },
  {
    "url": "images/qz.jpg",
    "revision": "98893b0a9e93371bd09006f8ce4d3880"
  },
  {
    "url": "images/sc-all.png",
    "revision": "c27cbd85a14b6a21fec448e99d36ebce"
  },
  {
    "url": "images/sc.png",
    "revision": "45485f285b5ed9c2dee4896658b9fa3c"
  },
  {
    "url": "images/sc1.png",
    "revision": "ea953d63075ea25eac4c17ff18a5d16c"
  },
  {
    "url": "images/sc2.png",
    "revision": "8b907ed922a36b25f1b30984bdbf127f"
  },
  {
    "url": "images/sc3.png",
    "revision": "14f6d9f116c179f0c7823a534f1036ae"
  },
  {
    "url": "images/sc4.png",
    "revision": "a5181a667e559908aba684783eb19342"
  },
  {
    "url": "images/sc5.png",
    "revision": "d100cd45e8737b7cf667ce4fb1f3fbd4"
  },
  {
    "url": "images/scope_ec.png",
    "revision": "8dd363aea4793853eaf259ba6bf92dfd"
  },
  {
    "url": "images/scope.png",
    "revision": "f51d2b4f2b06154f8dbb75800d50d5d5"
  },
  {
    "url": "images/slamdunk.jpg",
    "revision": "810baaacca51caa8b56ce2e81857e349"
  },
  {
    "url": "images/slt.png",
    "revision": "addebfbd03e1b01a38651581574552f1"
  },
  {
    "url": "images/vue3.0_1.png",
    "revision": "d3bbcc970af8a97cf6a955693a1f1666"
  },
  {
    "url": "images/vue3.0_10.png",
    "revision": "f56a10b8d9c7189a603b4d06a2f6c480"
  },
  {
    "url": "images/vue3.0_11.png",
    "revision": "a5b39a824fd795bf7f67a4e7dfb9c787"
  },
  {
    "url": "images/vue3.0_12.png",
    "revision": "a5b39a824fd795bf7f67a4e7dfb9c787"
  },
  {
    "url": "images/vue3.0_13.png",
    "revision": "f268f15922a54dc18716ea6df8274691"
  },
  {
    "url": "images/vue3.0_14.png",
    "revision": "7db7368ac6299ebb52be8e5b4fb20fc4"
  },
  {
    "url": "images/vue3.0_2.png",
    "revision": "d5a1d5e6e0c97b24d89af28e525adfc9"
  },
  {
    "url": "images/vue3.0_3.png",
    "revision": "c7a5cdd0d86f85b20a0bfb0e3b323d8a"
  },
  {
    "url": "images/vue3.0_4.png",
    "revision": "4c4bf43df58ce5ddb4ea315eed0b4ee1"
  },
  {
    "url": "images/vue3.0_5.png",
    "revision": "5c743c1ee3545a208cb749ef0bb537e1"
  },
  {
    "url": "images/vue3.0_6.png",
    "revision": "9cae3503476e03ea837f640a6a0bbd0b"
  },
  {
    "url": "images/vue3.0_7.png",
    "revision": "9c5948615dd7265c7e3a2417deb4c1a4"
  },
  {
    "url": "images/vue3.0_8.png",
    "revision": "718dec0e138252c16d4560e2190d44cb"
  },
  {
    "url": "images/vue3.0_9.png",
    "revision": "04cd406142312e76e69c7d11034d8971"
  },
  {
    "url": "images/vue3.0.png",
    "revision": "6c66373f425854b80254582ef80a00f5"
  },
  {
    "url": "images/vue3.png",
    "revision": "9c70f83cb16c10c8ead0a3a8a5a5333e"
  },
  {
    "url": "images/vuepress.jpg",
    "revision": "9d7ae45b0cf55396a3151e6ba518215d"
  },
  {
    "url": "images/wxminiapp.png",
    "revision": "d93414d9fe13b575e6cf85f0c60ad04c"
  },
  {
    "url": "index.html",
    "revision": "846e7e4004e1d80267fb51ed869ca87a"
  },
  {
    "url": "Scrum敏捷开发模式.html",
    "revision": "f3e0ca8f9291726438143081cae83930"
  },
  {
    "url": "tag/Alibaba/index.html",
    "revision": "c5ea9b9e4a9657b820b424f8c2c8944c"
  },
  {
    "url": "tag/Antd/index.html",
    "revision": "bd52c0c16ec5abdda4ef3f636176a77f"
  },
  {
    "url": "tag/Apple/index.html",
    "revision": "5eaad6fd1d40dede3c96c38b62971c7b"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "e160611ed2643ffb2515d07d0f80558f"
  },
  {
    "url": "tag/D3.js/index.html",
    "revision": "14f5754b039ae07217c8bf79a52a38cb"
  },
  {
    "url": "tag/Eharts/index.html",
    "revision": "99a20dda6d32bc8cf5140ad08f31881b"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "d846276165b85a6d5700654fbd7f5e39"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "7c867ec5f40e005abd36df12aca9d09e"
  },
  {
    "url": "tag/GitPages/index.html",
    "revision": "b19a338c0af3b90c0a8ad53a236da689"
  },
  {
    "url": "tag/index.html",
    "revision": "a9a60d5524463f4f27d039ecee126041"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "d93b1cb5b07ab0168119d3ccd0628a3e"
  },
  {
    "url": "tag/JS/index.html",
    "revision": "2b9c069251bfe7629c3fd37e6a6efb91"
  },
  {
    "url": "tag/React/index.html",
    "revision": "0b3d90fd7740a338a5c1950ea02db0e6"
  },
  {
    "url": "tag/SpringBoot/index.html",
    "revision": "0f3d588ba4d2ae07354585a659b44c0a"
  },
  {
    "url": "tag/Visualization/index.html",
    "revision": "721e80e843b71ec744d18dabbfb4e1cb"
  },
  {
    "url": "tag/Vue 3.0/index.html",
    "revision": "178ec9a08446de955a81c7bc21d2d4b2"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "3b4ff4f724bcba374e5256e7130873ac"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "9d5f827c9749d45494a480290c83fe6d"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "d1f002f7f6e0882f1c5d020f696448db"
  },
  {
    "url": "tag/敏捷开发/index.html",
    "revision": "bc9cc1d0a87bdece9de95e128ccd7253"
  },
  {
    "url": "tag/数据结构/index.html",
    "revision": "2461c6a02e04d5a302ff3ad5bda4f03d"
  },
  {
    "url": "tag/软件工程/index.html",
    "revision": "ede6a944a06a44b967ac76c2a9e704ce"
  },
  {
    "url": "tag/闭包/index.html",
    "revision": "f8bac851fe730e4bcb6bbb2577b6ac6c"
  },
  {
    "url": "timeline/index.html",
    "revision": "55fac6a05bf6ec8ae771d821e43cf5f3"
  },
  {
    "url": "Vue3.0 Beta笔记（侧重Performance提升原因和Composition API）.html",
    "revision": "5d8fa11f09762e45d636b3bcf45e5ea9"
  },
  {
    "url": "VuePress部署GitHub、Gitee遇到的那些坑.html",
    "revision": "935b3da803576c1de9add76ebb7626ad"
  },
  {
    "url": "一键完成HTML页面PDF（Word）转换.html",
    "revision": "5f95fc96fddadb2fe6a52d28202cbcbf"
  },
  {
    "url": "仿Apple官网CSS样式实现.html",
    "revision": "bba9d5e7567b669a549bdd09bc0836ee"
  },
  {
    "url": "模板.html",
    "revision": "a190908d02f55225c2a5c550f274fd62"
  },
  {
    "url": "深度解析JS闭包机制.html",
    "revision": "fb9925640350cf4c811526399d01e345"
  },
  {
    "url": "阿里企业智能事业部一面总结.html",
    "revision": "8b2e17cc04ce374bccf4659527f6763f"
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
