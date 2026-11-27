const V='horreya-v2';
const FILES=['./','index.html','style.css','app.js','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png','facade.jpg','calm.jpg','nature.jpg','garden.jpg','reception.jpg','lobby.jpg','office.jpg','patio.jpg','pool.jpg','aerial.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('index.html'))))});
