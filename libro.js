/* DATE */
const MO=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const nd=new Date();
const DS=`${nd.getDate()} de ${MO[nd.getMonth()]}, ${nd.getFullYear()}`;
['ld1','ld2'].forEach(id=>{const e=document.getElementById(id);if(e)e.textContent=DS;});

/* PARTICLES */
const pc=document.getElementById('pts');
const pcl=['#d4a853','#c8860a','#c0604a','#e8c4b0'];
for(let i=0;i<18;i++){
  const p=document.createElement('div');p.className='pt';
  const s=1.5+Math.random()*3;
  p.style.cssText=`width:${s}px;height:${s}px;left:${Math.random()*100}%;bottom:${Math.random()*15}%;background:${pcl[~~(Math.random()*pcl.length)]};animation-duration:${8+Math.random()*14}s;animation-delay:${Math.random()*10}s;`;
  pc.appendChild(p);
}

/* OPEN / CLOSE */
function openBook(){
  document.getElementById('closed-book').style.display='none';
  document.getElementById('open-book').classList.add('visible');
}
function closeBook(){
  document.getElementById('open-book').classList.remove('visible');
  document.getElementById('closed-book').style.display='block';
  goPage(0,true);
}

/* PAGE NAV */
let curPg=0;
function goPage(n,silent){
  document.getElementById('pg'+curPg).classList.remove('active');
  curPg=n;
  document.getElementById('pg'+curPg).classList.add('active');
}

/* CAROUSEL */
const ct=document.getElementById('ctrack');
const cdo=document.getElementById('cdots');
const slides=ct.querySelectorAll('.car-slide');
const ctot=slides.length;
let cc=0;

for(let i=0;i<ctot;i++){
  const d=document.createElement('div');d.className='car-dot'+(i===0?' on':'');
  d.onclick=(i=>()=>goSlide(i))(i);
  cdo.appendChild(d);
}
function goSlide(n){
  cc=n;ct.style.transform=`translateX(-${100*n}%)`;
  document.querySelectorAll('.car-dot').forEach((d,i)=>d.classList.toggle('on',i===n));
}
setInterval(()=>goSlide((cc+1)%ctot),3500);
let sx=0;
ct.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
ct.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>40)dx<0?goSlide((cc+1)%ctot):goSlide((cc-1+ctot)%ctot);});

/* ESCAPE BTN */
function escBtn(b){
  b.style.position='fixed';b.style.zIndex='50';b.style.transition='left .3s,top .3s';
  b.style.left=Math.random()*(window.innerWidth-180)+'px';
  b.style.top=Math.random()*(window.innerHeight-60)+'px';
}

/* CELEBRATE */
function celebrate(){
  document.getElementById('cel').classList.add('show');
  boom();let t=0;const iv=setInterval(()=>{boom();if(++t>16)clearInterval(iv);},1700);
}
const SY=['✦','✧','♡','❧','◆','✿','⋆'];
const SC=['#d4a853','#c8860a','#c0604a','#e8c4b0','#f0cc7a'];
function boom(){
  const c=document.getElementById('spl');
  for(let i=0;i<16;i++){
    const e=document.createElement('div');e.className='sp';
    e.textContent=SY[~~(Math.random()*SY.length)];
    const dr=2+Math.random()*2.5;
    e.style.cssText=`left:${Math.random()*100}vw;bottom:${Math.random()*15}vh;font-size:${.6+Math.random()*1.8}rem;color:${SC[~~(Math.random()*SC.length)]};animation-duration:${dr}s;animation-delay:${Math.random()*.5}s;`;
    c.appendChild(e);setTimeout(()=>e.remove(),(dr+1)*1000);
  }
}