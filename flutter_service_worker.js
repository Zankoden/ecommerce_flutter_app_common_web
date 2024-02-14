'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9caf0b555e257ba22f45ab7b3f263c26",
"assets/AssetManifest.bin.json": "bc62fe1aab4d6efe261dbaaa5ecf7cf8",
"assets/AssetManifest.json": "817cf3a081cd9c9bdd7bf6cc5c0a9fd6",
"assets/assets/fonts/PoppinsBold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/PoppinsRegular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/PoppinsSemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/image_not_found.png": "a88029aaad6e6ea7596096c7c451840b",
"assets/assets/images/img_arrow_left.svg": "a7c374aad6f4b033b8421b6208f602bd",
"assets/assets/images/img_arrow_right.svg": "35b60ea1d4920ad981bcdbe16d568659",
"assets/assets/images/img_bag_icon.svg": "ee53ae680459826c392353cbb0a78c5e",
"assets/assets/images/img_bank_icon.svg": "939045dd2e36f784f643dee0e1587685",
"assets/assets/images/img_bikini_icon.svg": "579e0fb80e2153cd9fa231b3ffe03fe3",
"assets/assets/images/img_checkmark.svg": "059b5f7157ae6cbdb1f79553d3b34f43",
"assets/assets/images/img_checkmark_blue_50.svg": "a9fc1870277ca932febcbd454533b496",
"assets/assets/images/img_clear_icon.svg": "f4a42ad3f424d1eb1fe1db19d6b1ac06",
"assets/assets/images/img_close.svg": "b76a52f9f2743d35f120c09db4a50286",
"assets/assets/images/img_close_icon.svg": "c539e250466cf7d84500c1f4689676af",
"assets/assets/images/img_close_onprimarycontainer.svg": "645d5a3e007cc2f8fed261fa5c132b8f",
"assets/assets/images/img_close_pink_300.svg": "20051e18d0fac779d52ad6289fb17455",
"assets/assets/images/img_credit_card_icon.svg": "8f5ea9999c5e87b078c4a1980f7493a9",
"assets/assets/images/img_date_icon.svg": "09ff69a22eef22d78d1184dec5245b4f",
"assets/assets/images/img_down_icon.svg": "12ba9c236ba19d31e74df010228a3d8b",
"assets/assets/images/img_dress_icon.svg": "63099fd1a4eec8e7d77ca5c672300abd",
"assets/assets/images/img_email_icon.svg": "31400d5bc6e120c61fb3adc5933bc546",
"assets/assets/images/img_facebook_icon.svg": "b6f879631c8590cd4a92c94953ccdc98",
"assets/assets/images/img_filter.svg": "e7b65ef70c53d961fe16cc8e69f5e193",
"assets/assets/images/img_gender_icon.svg": "89cdd3a3deda54d4096fc85cf3eae7d8",
"assets/assets/images/img_google_icon.svg": "80ee4234dddce7950e74c5be6c03510b",
"assets/assets/images/img_group_475.svg": "d54fb9dfe51ace5878870c9bcaacdea1",
"assets/assets/images/img_high_heels_icon.svg": "f9185404f9c673da34c303bf53261021",
"assets/assets/images/img_image_product.png": "4e693488399a6dc73df3d19a0de56abd",
"assets/assets/images/img_linkedin.svg": "27fe0c71d54e583dd5946db586fa9bcf",
"assets/assets/images/img_list_icon.svg": "f4a2a0d9644b84a82ce793b3fb6f12f1",
"assets/assets/images/img_location.svg": "e75c96a6fd845025b4b59f631b0411e5",
"assets/assets/images/img_lock.svg": "ee625c088f92bf7d7db58b780b775353",
"assets/assets/images/img_lock_primary.svg": "604eae00e3ffbf4ea86af7c1a0e56917",
"assets/assets/images/img_logo.png": "e04e0e4de520eb6e03ff77ffbdc6c184",
"assets/assets/images/img_love_icon.svg": "710e325a39eea9e1cd8b2ab2e158aa2e",
"assets/assets/images/img_love_icon_pink_300.svg": "746ee0ab9efce1e6b9b70789b2d6dea4",
"assets/assets/images/img_man_pants_icon.svg": "cbbc12df9c8b43636993a5d525ef71b1",
"assets/assets/images/img_man_shoes_icon.svg": "eb5ae22c1b2fcdcbabec8b3e864a1bad",
"assets/assets/images/img_man_t_shirt_icon.svg": "9062c5f9a6aa686dc8c799a1e538506d",
"assets/assets/images/img_man_underwear_icon.svg": "0d91e9cfc446fa70b1ba3203197bbf6f",
"assets/assets/images/img_man_work_equipment.svg": "aa70e41608dc18fb92d2e9e562e9dc4f",
"assets/assets/images/img_message_icon.svg": "8939c5894907cc28d277af3df92ca518",
"assets/assets/images/img_mic_icon.svg": "518e4af95622af83b252119bf704861c",
"assets/assets/images/img_more_icon.svg": "873fd3f4484ff6fefc73cec2e0715532",
"assets/assets/images/img_nav_account.svg": "86c6b3fb0183a7ca419194d41344ac88",
"assets/assets/images/img_nav_cart.svg": "1d87d011c7f5213555a80c79df7bc63d",
"assets/assets/images/img_nav_cart_blue_gray_300.svg": "a6ed66358732ecb8953b06e79d036f4c",
"assets/assets/images/img_nav_cart_primary.svg": "638eb74d8cb43bc7f2bf3bced8cad251",
"assets/assets/images/img_nav_explore.svg": "22ba7e6d1f814b8a0e9cbbb58ec04213",
"assets/assets/images/img_nav_explore_primary.svg": "c8baf0ed54e4d5b5ca0e017c79dee64d",
"assets/assets/images/img_nav_home.svg": "4e6c7083721cea40c9d7d4a6144e66c6",
"assets/assets/images/img_nav_home_blue_gray_300.svg": "747938f77c649c1b0de2a3ce6727bb0a",
"assets/assets/images/img_nav_offer.svg": "c1865994f9b56b0cd9e6a785e95f149d",
"assets/assets/images/img_nav_offer_blue_gray_300.svg": "39a77d50c5e2c4f35b197a81a9c0f7cb",
"assets/assets/images/img_notification_icon.svg": "5329e3f941f57ae4704571840f26b19c",
"assets/assets/images/img_notification_icon_primary.svg": "9bf38b81d4408232386ea7c649659801",
"assets/assets/images/img_paypal_icon.svg": "864091dad361b6bfc2d8f38cf8f140a2",
"assets/assets/images/img_plus_icon.svg": "81d39bb7dad48b54664174d4a8e3e598",
"assets/assets/images/img_product_image.png": "e9dc2535ef2fafbbb5b56cbc83a30354",
"assets/assets/images/img_product_image_1.png": "9410cac30565c8eb9de62e762ae0b8d2",
"assets/assets/images/img_product_image_109x109.png": "ccaafba95d93b7889cf8191fc609e099",
"assets/assets/images/img_product_image_133x133.png": "6fd033003ed31cbd17d2111e1cd81592",
"assets/assets/images/img_product_image_2.png": "f230740a302af91e14fab2f890f0ee9e",
"assets/assets/images/img_product_image_238x375.png": "8a114e2887230116068ca6e2d1797adb",
"assets/assets/images/img_product_image_3.png": "e3ceb8addb38b61fb05d50ff99f5368b",
"assets/assets/images/img_product_image_4.png": "ebd078573d4c92ab973a34ada1a89810",
"assets/assets/images/img_product_picture01.png": "32a5447a016f22b1fc276db04e615112",
"assets/assets/images/img_product_picture02.png": "87420bfb820c473fdf9d79aea6ad9555",
"assets/assets/images/img_product_picture03.png": "7a72fa23324898aa9e2fa8f8057df3ff",
"assets/assets/images/img_profile_picture.png": "fa8fd04c27c853dd1945a46154ca2fed",
"assets/assets/images/img_profile_picture_1.png": "5c987fbe4a1d6b3e91172fe244856775",
"assets/assets/images/img_profile_picture_48x48.png": "900e773e28e94a3512f94e0b336f7515",
"assets/assets/images/img_profile_picture_72x72.png": "3a70bec7d8813398008ea23b5771d6a4",
"assets/assets/images/img_promotion_image.png": "082c61d46e8a768f5d871c52d7288aa7",
"assets/assets/images/img_recomended_product.png": "4608c28a4e75eecfc4eb08e30423ead4",
"assets/assets/images/img_rewind.svg": "9c926f74f2a5ca2b795c2bc90433eadc",
"assets/assets/images/img_right_icon.svg": "b4974636d3cef54db1d4dcf3ee45a6c4",
"assets/assets/images/img_short_icon.svg": "8a85d826a8a343de017f5e921a405ecc",
"assets/assets/images/img_skirt_icon.svg": "50b43712b40df66800e7c2a2f6122fb8",
"assets/assets/images/img_sort.svg": "f85662cb7bfbefbf23433ab6d0f3906d",
"assets/assets/images/img_transaction_icon.svg": "d6ec8d5252911ee3c92106fb205c3582",
"assets/assets/images/img_trash_icon.svg": "091b03dbf61be706f3a005ac390d9263",
"assets/assets/images/img_trophy.svg": "e0486ac87c36fb086f3a9eb4f9b249c4",
"assets/assets/images/img_user.svg": "c1bc748ebcd97aefa9e7288efd0a15a4",
"assets/assets/images/img_user_blue_50.svg": "d23fd987d86de43782ba2f41f05779e1",
"assets/assets/images/img_vector_41.svg": "ca9767d25d77dc27538e9800d0f2d748",
"assets/assets/images/img_woman_bag_icon.svg": "656c81f8be723670e428cddbe313e9d1",
"assets/assets/images/img_woman_pants_icon.svg": "69b07a7776e7b5e4a4a76ba6dc94308b",
"assets/assets/images/img_woman_t_shirt_icon.svg": "cb26afd5884d61d23ee1ce4f3e82e90a",
"assets/FontManifest.json": "da9189c86925883fb49fc52661f43399",
"assets/fonts/MaterialIcons-Regular.otf": "5acfe2c2c3556b636e22614ff78836c1",
"assets/NOTICES": "8eb8b45171879b087fe675e5e19f7131",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f5461e94f707a22f9b60226f673f4075",
"/": "f5461e94f707a22f9b60226f673f4075",
"main.dart.js": "bedd6f1af78de481cfb3322a38622696",
"manifest.json": "b828ace891cc0f12d16c2f8f4cab050d",
"version.json": "61bbdcbda2582f152cb45ca24dc1b5f4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
