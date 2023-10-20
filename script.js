window.addEventListener("mousemove",function(details){
   let rect=document.querySelector("#rect");
   let halfrect=rect.getBoundingClientRect().width/2;
 let xval= gsap.utils.mapRange(0,window.innerWidth,100+halfrect,this.window.innerWidth-100-halfrect,details.clientX);
   
   
   
    gsap.to('#rect',{
        left:xval+"px",
        ease:Power3
    });
});