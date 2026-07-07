(function(){
  'use strict';
  // nav background on scroll
  var nav=document.querySelector('.nav');
  if(nav){
    var onScroll=function(){ nav.classList.toggle('solid', window.scrollY>40); };
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }
  // hamburger
  var tg=document.querySelector('.nav-toggle'), dr=document.querySelector('.nav-drawer');
  if(tg&&dr){
    tg.addEventListener('click',function(){
      var o=tg.classList.toggle('open'); dr.classList.toggle('open',o);
      document.body.style.overflow=o?'hidden':'';
    });
    dr.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){tg.classList.remove('open');dr.classList.remove('open');document.body.style.overflow='';});
    });
  }
  // active link
  var cur=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,.nav-drawer a').forEach(function(a){
    var h=a.getAttribute('href');
    if(h===cur||(cur===''&&h==='index.html'))a.classList.add('active');
  });
  // fade-in
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);} });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.fade').forEach(function(el){io.observe(el);});
})();

/* === Concept C「灯」— lamp light === */
(function(){
  'use strict';
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  // create overlay layers
  var lamp=document.createElement('div');lamp.id='lamp';lamp.setAttribute('aria-hidden','true');
  var grain=document.createElement('div');grain.id='grain';grain.setAttribute('aria-hidden','true');
  document.body.appendChild(lamp);document.body.appendChild(grain);

  var tx=window.innerWidth/2, ty=window.innerHeight*0.4, x=tx, y=ty;
  var idle=true, idleTimer=null;

  function wake(cx,cy){
    tx=cx;ty=cy;idle=false;
    clearTimeout(idleTimer);
    idleTimer=setTimeout(function(){idle=true;},4000);
  }
  window.addEventListener('pointermove',function(e){wake(e.clientX,e.clientY);},{passive:true});
  window.addEventListener('touchstart',function(e){var t=e.touches[0];if(t)wake(t.clientX,t.clientY);},{passive:true});
  window.addEventListener('touchmove',function(e){var t=e.touches[0];if(t)wake(t.clientX,t.clientY);},{passive:true});

  var imgs=[].slice.call(document.querySelectorAll(
    '.hero img,.page-hero img,.band img,.split .ph img,.triple .ph img'));
  var radius=Math.min(window.innerWidth,460)*0.5;
  window.addEventListener('resize',function(){radius=Math.min(window.innerWidth,460)*0.5;},{passive:true});

  function loop(ts){
    if(idle){ // slow candle-drift when untouched (important on mobile)
      tx=window.innerWidth*(0.5+0.25*Math.sin(ts/3400));
      ty=window.innerHeight*(0.42+0.13*Math.cos(ts/4600));
    }
    x+=(tx-x)*0.08; y+=(ty-y)*0.08;
    lamp.style.setProperty('--lx',x+'px');
    lamp.style.setProperty('--ly',y+'px');
    for(var i=0;i<imgs.length;i++){
      var r=imgs[i].getBoundingClientRect();
      if(r.bottom<-100||r.top>window.innerHeight+100){imgs[i].classList.remove('lit');continue;}
      var cx=Math.max(r.left,Math.min(x,r.right));
      var cy=Math.max(r.top,Math.min(y,r.bottom));
      var d=Math.hypot(x-cx,y-cy);
      imgs[i].classList.toggle('lit',d<radius);
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
