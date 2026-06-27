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
