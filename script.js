document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu-toggle');
const nav=document.getElementById('site-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fermer le menu':'Ouvrir le menu');});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
function getRequest(){const f=document.getElementById('appointment-form');if(!f.reportValidity())return null;const val=id=>document.getElementById(id).value.trim();return 'Bonjour La Relance Bien-être, je souhaite vous contacter pour '+val('service')+'.\nPrénom : '+val('firstname')+'\nTéléphone : '+val('phone')+'\nDisponibilités : '+(val('preferences')||'à définir')+(val('message')?'\nMessage : '+val('message'):'')+'\nMerci de me confirmer les possibilités de rendez-vous.';}
const status=document.getElementById('form-status');
document.getElementById('appointment-form')?.addEventListener('submit',e=>{e.preventDefault();const msg=getRequest();if(!msg)return;status.textContent='Votre application SMS va s’ouvrir : pensez à confirmer l’envoi.';window.location.href='sms:+33766861379?body='+encodeURIComponent(msg);});
document.getElementById('copy-request')?.addEventListener('click',async()=>{const msg=getRequest();if(!msg)return;try{await navigator.clipboard.writeText(msg);status.textContent='Demande copiée. Vous pouvez la coller dans votre application de messages.';}catch{status.textContent='La copie automatique est indisponible. Vous pouvez contacter le cabinet au 07 66 86 13 79.';}});
