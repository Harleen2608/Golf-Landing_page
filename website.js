var crsr = document.querySelector("#cursor")
var crsrblr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=dets.x+"px" 
   crsr.style.top=dets.y+"px" 
   crsrblr.style.left=dets.x-250+"px" 
    crsrblr.style.top=dets.y-250+"px" 

})


gsap.to("#nav",{
    backgroundColor:"#000",
 duration:0.5,
 height:"110px",
 scrollTrigger:{
     scrub:1,
     pin:true,
     trigger:"#nav",
     scroller:"body",
     start:"top 10%",
     end:"top 12%",
     markers:false,
 }

})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        scrub:1,
        pin:true,
        trigger:"#main",
        scroller:"body",
        start:"top 90%",
        end:"bottom 30%",
        markers:false,
    }
})
