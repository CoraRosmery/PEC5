document.addEventListener("DOMContentLoaded",()=>{let e=1;function t(t){console.log(t),l(e+=t)}function l(t){let l;let n=document.getElementsByClassName("mySlides"),c=document.getElementsByClassName("dot");for(t>n.length&&(e=1),t<1&&(e=n.length),l=0;l<n.length;l++)n[l].style.display="none";for(l=0;l<c.length;l++)c[l].className=c[l].className.replace(" active","");n[e-1].style.display="block",c[e-1].className+=" active"}l(1),document.querySelector(".prev").addEventListener("click",()=>t(-1)),document.querySelector(".next").addEventListener("click",()=>t(1)),document.querySelectorAll(".dot").forEach((t,n)=>{t.addEventListener("click",()=>{l(e=n+1)})})});
//# sourceMappingURL=presentacion.26409696.js.map
