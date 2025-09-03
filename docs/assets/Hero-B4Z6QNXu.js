import{r as s,j as n}from"./index-DIF0E7Qj.js";import{P as w}from"./Particles-l0zhr4m1.js";const I=({darkMode:y})=>{const[t,m]=s.useState(!1),[b,g]=s.useState(!1);s.useEffect(()=>{const e=()=>{m(window.innerWidth<=768),g(window.innerHeight<window.innerWidth&&window.innerWidth<=768)};return e(),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),()=>{window.removeEventListener("resize",e),window.removeEventListener("orientationchange",e)}},[]),s.useEffect(()=>{const e=document.createElement("style");return e.textContent=`
      .wat-wij-doen-btn {
        position: relative;
        padding-bottom: 8px !important;
      }
      .wat-wij-doen-btn::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 6px;
        height: 6px;
        background-color: #fff;
        border-radius: 50%;
        opacity: 0;
        transition: opacity 0.3s ease, transform 0.2s ease;
      }
      .wat-wij-doen-btn:hover::after {
        opacity: 1;
      }
      /* On touch devices, disable hover but allow click animation */
      @media (hover: none) {
        .wat-wij-doen-btn:hover::after {
          opacity: 0;
        }
      }
      .wat-wij-doen-btn.clicked::after {
        opacity: 1;
        transform: translateX(-50%) scale(1.8);
      }
      /* Override hover state when no-hover class is applied */
      .wat-wij-doen-btn.no-hover:hover::after {
        opacity: 0 !important;
      }
    `,document.head.appendChild(e),()=>document.head.removeChild(e)},[]);const l=e=>{const d=document.getElementById(e);if(d){let c=function(o){a===null&&(a=o);const r=o-a,i=h(r,p,u,f);window.scrollTo(0,i),r<f&&requestAnimationFrame(c)},h=function(o,r,i,x){return o/=x/2,o<1?i/2*o*o+r:(o--,-i/2*(o*(o-2)-1)+r)};const p=window.pageYOffset,u=d.offsetTop-p,f=800;let a=null;requestAnimationFrame(c)}};return n.jsx("section",{className:"hero section-bg","data-aos":"fade-up",style:{paddingBottom:"80px",paddingLeft:"20px",paddingRight:"20px",width:"100%",minHeight:t?"calc(100vh - 100px)":"60vh",height:"auto",display:"flex",alignItems:"center"},children:n.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",width:"100%",background:"linear-gradient(135deg, #FF6B6B, #FF8E53)",borderRadius:"20px",padding:"60px 40px",position:"relative"},children:[n.jsx(w,{}),n.jsxs("div",{style:{display:t?"flex":"grid",flexDirection:t?"column":"row",gridTemplateColumns:t?"none":"1fr 1fr",gap:t?"3rem":"5rem",alignItems:"center",position:"relative",zIndex:2},children:[n.jsxs("div",{style:{textAlign:t?"center":"left",order:1,position:"relative",zIndex:3},children:[n.jsx("h1",{style:{fontSize:t?"3rem":"4rem",marginBottom:"1rem",color:"#fff",fontWeight:"700",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',lineHeight:"1.2"},children:"Welkom op de website van Qalor"}),n.jsx("h2",{style:{fontSize:t?"1.6rem":"2rem",marginBottom:"2rem",color:"#fff",fontWeight:"500",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:"Energiedeskundigen warmtenetten"}),n.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:t?"center":"flex-start"},children:[n.jsx("button",{onClick:()=>l("footer"),style:{padding:"0.5rem 1rem",background:"#fff",color:"#000",textDecoration:"none",borderRadius:"50px",fontWeight:"600",fontSize:t?"1rem":"1.2rem",transition:"all 0.3s ease",boxShadow:"0 4px 12px rgba(0,0,0,0.1)",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',border:"none",display:"inline-flex",alignItems:"center",justifyContent:"center",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent"},onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)"},children:n.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#000",WebkitTextFillColor:"#000",textShadow:"none",fontWeight:600,fontSize:t?"1rem":"1.2rem",lineHeight:1,position:"relative",zIndex:2,pointerEvents:"none"},children:["Contact",n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"30px",height:"30px",borderRadius:"50%",backgroundColor:"#ff6b35",pointerEvents:"none"},children:n.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[n.jsx("path",{d:"M4 8H12",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round"}),n.jsx("path",{d:"M9 5L12 8L9 11",stroke:"#fff",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})}),n.jsx("button",{onClick:e=>{e.target.classList.add("clicked"),setTimeout(()=>{e.target.classList.remove("clicked"),"ontouchstart"in window&&(e.target.classList.add("no-hover"),setTimeout(()=>{e.target.classList.remove("no-hover")},100))},200),l("qalor")},onTouchEnd:e=>{setTimeout(()=>{e.target.blur()},50)},className:"wat-wij-doen-btn",style:{padding:t?"0.8rem 1.5rem":"1rem 2rem",background:"transparent",color:"#fff",textDecoration:"none",borderRadius:"50px",fontWeight:"600",fontSize:t?"1rem":"1.2rem",border:"none",transition:"all 0.3s ease",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',whiteSpace:"nowrap",cursor:"pointer",outline:"none",WebkitTapHighlightColor:"transparent"},onMouseEnter:e=>{},onMouseLeave:e=>{},onMouseDown:e=>{e.target.style.background="transparent",e.target.style.color="#fff"},onMouseUp:e=>{e.target.style.background="transparent",e.target.style.color="#fff"},onFocus:e=>{e.target.style.background="transparent",e.target.style.color="#fff"},onBlur:e=>{e.target.style.background="transparent",e.target.style.color="#fff"},children:"Wat wij doen"})]})]}),n.jsx("div",{style:{width:t?"90%":"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:t?"40px":"0",order:2,position:"relative",zIndex:3},children:n.jsx("img",{alt:"Energy efficiency",src:"/qalor/src/assets/images-webp/hero-optimized.webp","data-aos":"zoom-in","data-aos-delay":"300",style:{width:"100%",height:"300px",minHeight:"300px",objectFit:"cover",objectPosition:"right",borderRadius:"15px",position:"relative"}})})]})]})})};export{I as default};
