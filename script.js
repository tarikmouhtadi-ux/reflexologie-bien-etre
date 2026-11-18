document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
/* Calendrier de réservation Cal.com — chargement officiel et sans serveur. */
(function(C,A,L){let p=function(a,ar){a.q.push(ar)};let doc=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];doc.head.appendChild(doc.createElement("script")).src=A;cal.loaded=true}if(ar[0]===L){const api=function(){p(api,arguments)};const ns=ar[1];api.q=api.q||[];if(typeof ns==="string"){cal.ns[ns]=cal.ns[ns]||api;p(cal,ar)}else p(cal,ar);return}p(cal,ar)}})(window,"https://app.cal.com/embed/embed.js","init");
Cal("init","relance",{origin:"https://app.cal.com"});
Cal.ns.relance("inline",{elementOrSelector:"#cal-booking",calLink:"tarik-m-r2b3gr/30min",config:{layout:"month_view",theme:"dark"}});
Cal.ns.relance("ui",{theme:"dark",styles:{branding:{brandColor:"#c99b61"},body:{background:"#17100d",backgroundColor:"#17100d"}},hideEventTypeDetails:false,layout:"month_view"});
