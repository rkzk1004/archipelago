gsap.registerPlugin(ScrollTrigger);

// lenis
const lenis = new Lenis()
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)
lenis.scrollTo(0)

// cursor
$(window).mousemove(function(e){
  const cursorX = e.clientX
  const cursorY = e.clientY
  gsap.to('.cursor',.2,{
    x:cursorX,
    y:cursorY,
    // ease:"none"
  })
})
$('a').hover(function(){
  $('.cursor').addClass('on')
},function(){
  $('.cursor').removeClass('on')
})

// sc-intro-motion
introMotionInner = $('.sc-intro-motion .inner')
introMotionSvgGroup = $('.sc-intro-motion .group-ico .ico-main')
introMotionSvg = $('.sc-intro-motion .ico-second-wrap')
introMotionTitleArea = $('.sc-intro-motion .group-text')
introMotionTitle = $('.sc-intro-motion .group-text .title-area .title span')
introMotionImgArea = $('.sc-intro-motion .group-img')
introMotionShade = $('.sc-intro-motion img.shade')
introSvg = $('.sc-intro .ico-second-wrap')

ScrollTrigger.matchMedia({
  '(min-width:992px)':function(){
    const introMotionTl = gsap.timeline({})
    introMotionTl
    .from($('body'),{opacity:0})
    
    .to(introMotionTitle[0],{yPercent:-100},'a+=0.5')
    .to(introMotionTitle[1],{yPercent:-100},'a+=0.9')
    .to(introMotionTitle[2],{yPercent:-100},'a+=1.3')
    
    .to(introMotionShade,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',duration:1.5})
    
    .to(introMotionTitle,{yPercent:100,delay:0.5})
    
    .to(introMotionSvg,{width:'65rem',duration:1})
    
    .to(introMotionTitleArea,{yPercent:100,opacity:0},'b')
    .to(introMotionImgArea,{yPercent:100,opacity:0},'b')
    .to(introMotionInner,{paddingTop:'15vh'},'b')
    
    .to($('.sc-intro-motion'),{height:0,duration:1},'c')
    .to(introMotionSvgGroup,{left:'48.5%'},'c-=0.3')
    
    .from(introSvg,{width:'65rem'})
  },
  '(min-width:768px) and (max-width:991px)':function(){
    const introMotionTl = gsap.timeline({})
    introMotionTl
    .from($('body'),{opacity:0})
    
    .to(introMotionTitle[0],{yPercent:-100},'a+=0.5')
    .to(introMotionTitle[1],{yPercent:-100},'a+=0.9')
    .to(introMotionTitle[2],{yPercent:-100},'a+=1.3')
    
    .to(introMotionShade,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',duration:1.5})
    
    .to(introMotionTitle,{yPercent:100,delay:0.5})
    
    .to(introMotionSvg,{width:'40rem',duration:1})
    
    .to(introMotionTitleArea,{yPercent:100,opacity:0},'b')
    .to(introMotionImgArea,{yPercent:100,opacity:0},'b')
    .to(introMotionInner,{paddingTop:'15vh'},'b')
    
    .to($('.sc-intro-motion'),{height:0,duration:1},'c')
    .to(introMotionSvgGroup,{left:'41%'},'c-=0.3')
  },
  '(min-width:570px) and (max-width:767px)':function(){
    const introMotionTl = gsap.timeline({})
    introMotionTl
    .from($('body'),{opacity:0})
    
    .to(introMotionTitle[0],{yPercent:-100},'a+=0.5')
    .to(introMotionTitle[1],{yPercent:-100},'a+=0.9')
    .to(introMotionTitle[2],{yPercent:-100},'a+=1.3')
    
    .to(introMotionShade,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0 100%)',duration:1.5})
    
    .to(introMotionTitle,{yPercent:100,delay:0.5})
    
    .to(introMotionSvg,{width:'33rem',duration:1})
    
    .to(introMotionTitleArea,{yPercent:100,opacity:0},'b')
    .to(introMotionImgArea,{yPercent:100,opacity:0},'b')
    .to(introMotionInner,{paddingTop:'15vh'},'b')
    
    .to($('.sc-intro-motion'),{height:0,duration:1},'c')
    .to(introMotionSvgGroup,{left:'39%'},'c-=0.3')
  }
})

// header scroll
ScrollTrigger.create({
  // markers:true,
  trigger:'.sc-intro',
  start:'15% 0',
  onEnter:function(){
    $('.header').addClass('hide')
  },
  onLeaveBack:function(){
    $('.header').removeClass('hide')
  }
})

let lastScroll = 0
$(window).scroll(function(){
  let scroll = $(this).scrollTop()
  if(lastScroll>scroll){
    $('.header').addClass('show')
  }else{
    $('.header').removeClass('show')
  }
  lastScroll=scroll
})

ScrollTrigger.create({
  // markers:true,
  trigger:'.sc-about',
  start:'0 0',
  onEnter:function(){
    $('.header').addClass('gradient')
  },
  onLeaveBack:function(){
    $('.header').removeClass('gradient')
  }
})

// .header 반응형 hover
if($(window).width()>=992){
  // .header .group-search
  $('.header').hover(function(){
    $('.group-search').addClass('on')
    $('.gnb-sublist').addClass('on')
  },function(){
    $('.group-search').removeClass('on')
    $('.gnb-sublist').removeClass('on')
  })
}

// btn-menu
$('.btn-menu').click(function(){
  $('.group-search').toggleClass('on')
})

// mobile-list
$('.mobile-item').click(function(){
  $(this).toggleClass('on').siblings().removeClass('on')
})

// sc-about
const aboutText = new SplitType('.sc-about .title', { types: 'words, chars', });
gsap.to('.sc-about .title .word',{
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-about',
    start:'0 0%',
    end:'100% 100%',
    scrub:true,
  },
  delay:0.1,
  stagger:0.1,
  duration:0.05,
  color:'#272520'
})

// sc-video
const videoTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-video',
    start:'0 0',
    end:'100% 100%',
    scrub:true,
    // pin:true
  }
})
videoTl
.to('.sc-video .group-img.first',{height:0})

$('.data').each(function(i,el){
  gsap.from(el, {
    scrollTrigger:{
      trigger:el,
      start:"0% 80%",
      end:"100% 0%",
      // markers:true,
    },
    textContent: 0,
    duration: 1,
    ease: Power1.easeIn,
    snap: { textContent: 1 },
  });
})

marqeeTl = gsap.timeline({
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-working',
    start:'0 100%',
    end:'100% 0%',
    scrub:0,
  },
})
marqeeTl.to('.marquee-wrap.row',{xPercent:25},'a')
marqeeTl.to('.marquee-wrap.reverse',{xPercent:-25},'a')

// sc-design
gsap.from('.sc-design .content-item',{
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-design .content-list',
    start:'0 90%',
  },
  stagger:.1,
  yPercent:10,
  opacity:0
})