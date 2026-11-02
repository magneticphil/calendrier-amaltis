/* Ancien emplacement de l'application des plantes mères : ce service worker se retire lui-même. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k.startsWith('meres-')) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll()) c.navigate('https://magneticphil.github.io/meres-amaltis/');
})()));
