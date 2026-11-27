if('serviceWorker' in navigator){addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}))}
const views=[...document.querySelectorAll('.view')];
function show(){const id=(location.hash||'#home').slice(1);const ok=views.some(v=>v.id===id);
views.forEach(v=>v.hidden=v.id!==(ok?id:'home'));document.body.dataset.v=ok?id:'home';scrollTo(0,0)}
addEventListener('hashchange',show);show();
// install
let dp=null;const box=document.getElementById('install');
const standalone=matchMedia('(display-mode: standalone)').matches||navigator.standalone;
const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;if(!standalone)box.hidden=false});
document.getElementById('installBtn').onclick=async()=>{if(dp){dp.prompt();await dp.userChoice;dp=null;box.hidden=true}};
if(ios&&!standalone){document.getElementById('iosTip').hidden=false}
addEventListener('appinstalled',()=>{box.hidden=true});
