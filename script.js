document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
/* Cal.com : popup flottante officielle, sans iframe intégré dans la page. */
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1]; api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, ["initNamespace", namespace]);
      } else p(cal, ar);
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
Cal.config = Cal.config || {};
Cal.config.forwardQueryParams = true;
Cal.ns["30min"]("floatingButton", {"calLink":"tarik-m-r2b3gr/30min","config":{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}});
Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view","styles":{"branding":{"brandColor":"#c99b61"}}});
/* Le bouton interne ouvre la même fenêtre ; en cas de blocage, le lien Cal.com reste disponible. */
document.getElementById("open-booking")?.addEventListener("click", function() {
  Cal.ns["30min"]("modal", {calLink:"tarik-m-r2b3gr/30min",config:{layout:"month_view",useSlotsViewOnSmallScreen:true}});
});
