import{r as s,R as j,j as t}from"./index-DCeyDizt.js";import{p as S,h as v,j as z}from"./peter-C0SgrrY4.js";import{P as I}from"./Particles-DjbVU09V.js";const B=()=>{const[i,c]=s.useState({name:"",email:"",message:""}),[r,x]=s.useState({}),[f,g]=s.useState(window.innerWidth),[k,h]=s.useState(window.innerHeight),[l,u]=s.useState(!1),[a,b]=s.useState(!1);s.useEffect(()=>{const n=()=>{const o=window.innerWidth,p=window.innerHeight;g(o),h(p),u(o>=769&&o<=1024),b(o>p&&o/p>1.2)};return window.addEventListener("resize",n),n(),()=>window.removeEventListener("resize",n)},[]);const m=f<=768,e=m||l;j.useEffect(()=>{const n=document.createElement("style");return n.textContent=`
      .contact-input::placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input::-moz-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input:-ms-input-placeholder {
        color: rgba(255, 255, 255, 0.7) !important;
      }
      .contact-input:focus {
        border: 1px solid #fff !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .contact-submit-btn {
        background: rgba(204,51,17,0.3) !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .contact-submit-btn:focus {
        background: rgba(204,51,17,0.3) !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .contact-submit-btn:active {
        background: rgba(204,51,17,0.3) !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
      .contact-submit-btn:hover {
        background: rgba(204,51,17,0.5) !important;
      }
    `,document.head.appendChild(n),()=>{document.head.removeChild(n)}},[]);const y=`
    @keyframes floating1 {
      0%, 100% { transform: rotate(-5deg) translateY(0px); }
      50% { transform: rotate(-5deg) translateY(-10px); }
    }
    @keyframes floating2 {
      0%, 100% { transform: rotate(8deg) translateY(0px); }
      50% { transform: rotate(8deg) translateY(-8px); }
    }
    @keyframes floating3 {
      0%, 100% { transform: translateX(-50%) rotate(-3deg) translateY(0px); }
      50% { transform: translateX(-50%) rotate(-3deg) translateY(-12px); }
    }
  `;s.useEffect(()=>{const n=document.createElement("style");return n.type="text/css",n.innerHTML=y,document.head.appendChild(n),()=>{document.head.removeChild(n)}},[]);const d=n=>{c({...i,[n.target.name]:n.target.value})},w=n=>{n.preventDefault(),x({});const o={};if(i.name.trim()||(o.name="Naam is verplicht"),i.email.trim()?/\S+@\S+\.\S+/.test(i.email)||(o.email="Voer een geldig e-mailadres in"):o.email="E-mail is verplicht",i.message.trim()||(o.message="Bericht is verplicht"),Object.keys(o).length>0){x(o);return}console.log("Form submitted:",i),alert("Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op."),c({name:"",email:"",message:""})};return t.jsxs("section",{id:"contact","data-aos":"fade-in",className:"section-bg",style:{padding:e?"30px 10px 0px":"60px 20px 0px",width:"100%",position:"relative",overflow:"hidden"},children:[t.jsx(I,{}),t.jsxs("div",{style:{maxWidth:"1600px",margin:"0 auto",width:"100%",background:"rgba(255, 107, 107, 0.1)",borderRadius:"20px",padding:e?"20px 10px 0px":"40px 40px 0px",position:"relative",zIndex:2},children:[t.jsxs("div",{style:{textAlign:"left",marginBottom:e?"1rem":"1.5rem",maxWidth:e?"100%":"50%",width:e?"100%":"auto"},children:[t.jsx("div",{style:{fontSize:"1.6rem",color:"#fff",marginBottom:"0.5rem",fontWeight:"400",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:"• Contact"}),t.jsx("h2",{style:{fontSize:e?"2rem":"2.5rem",margin:"0",color:"#fff",fontWeight:"600",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:"Neem contact op met onze experts"})]}),t.jsxs("div",{style:{display:e?"flex":"grid",flexDirection:e?"column":"row",gridTemplateColumns:e?"none":"repeat(auto-fit, minmax(350px, 1fr))",gap:"2rem",alignItems:"start",marginBottom:"0"},children:[t.jsx("div",{style:{width:"100%",marginBottom:e?"1rem":"0"},children:t.jsxs("form",{onSubmit:w,style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[t.jsx("div",{style:{display:"flex",gap:e?"0.5rem":"1rem",flexDirection:"column"},children:t.jsxs("div",{style:{display:"flex",gap:e?"0.5rem":"1rem",flexDirection:"row"},children:[t.jsxs("div",{style:{flex:"1"},children:[t.jsx("input",{type:"text",name:"name",placeholder:"Uw naam",value:i.name,onChange:d,className:"contact-input",style:{padding:e?"0.8rem":"1rem",border:r.name?"2px solid #ff4444":"none",borderRadius:"25px",fontSize:e?"0.9rem":"1rem",width:"100%",boxSizing:"border-box",background:"rgba(204,51,17,0.3)",color:"#fff"}}),r.name&&t.jsx("div",{style:{color:"#fff",fontSize:"0.85rem",marginTop:"0.25rem",marginLeft:"1rem",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:r.name})]}),t.jsxs("div",{style:{flex:"1"},children:[t.jsx("input",{type:"email",name:"email",placeholder:"Uw e-mail",value:i.email,onChange:d,className:"contact-input",style:{padding:e?"0.8rem":"1rem",border:r.email?"2px solid #ff4444":"none",borderRadius:"25px",fontSize:e?"0.9rem":"1rem",width:"100%",boxSizing:"border-box",background:"rgba(204,51,17,0.3)",color:"#fff"}}),r.email&&t.jsx("div",{style:{color:"#fff",fontSize:"0.85rem",marginTop:"0.25rem",marginLeft:"1rem",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:r.email})]})]})}),t.jsxs("div",{children:[t.jsx("textarea",{name:"message",placeholder:"Uw bericht",value:i.message,onChange:d,rows:"5",className:"contact-input",style:{padding:e?"0.8rem":"1rem",border:r.message?"2px solid #ff4444":"none",borderRadius:"25px",fontSize:e?"0.9rem":"1rem",resize:"vertical",width:"100%",boxSizing:"border-box",background:"rgba(204,51,17,0.3)",color:"#fff",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'}}),r.message&&t.jsx("div",{style:{color:"#fff",fontSize:"0.85rem",marginTop:"0.25rem",marginLeft:"1rem",fontFamily:'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'},children:r.message})]}),t.jsx("button",{type:"submit",className:"contact-submit-btn",style:{padding:"0.5rem 1rem",color:"#fff",borderRadius:"25px",fontSize:e?"0.9rem":"1rem",fontWeight:"bold",cursor:"pointer",width:"auto",alignSelf:"flex-start",boxSizing:"border-box",transition:"all 0.3s ease",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:t.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:["Verzenden",t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"#fff",fontSize:"24px",fontWeight:"bold",color:"#ff6b35"},children:"→"})]})})]})}),t.jsx("div",{style:{position:"relative",height:"auto",display:"flex",alignItems:"flex-start",justifyContent:"center",width:"100%",minHeight:"fit-content",marginTop:e?"3rem":"0",marginBottom:e?"3rem":"0"},children:t.jsxs("div",{style:{position:"relative",width:"100%",height:e?"350px":"400px",transform:e?"translateY(0px)":"translateY(-120px)",display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsx("img",{src:S,alt:"Peter de Keijzer",loading:"lazy","data-aos":"fade-right","data-aos-delay":"100",style:{position:"absolute",top:e?"10px":"0px",left:"20px",width:m&&!a?"120px":a?"180px":l?"160px":"200px",height:m&&!a?"120px":a?"180px":l?"160px":"200px",borderRadius:"12px",objectFit:"cover",boxShadow:"0 8px 25px rgba(0,0,0,0.2)",transform:"rotate(-5deg)",animation:"floating1 3s ease-in-out infinite",zIndex:3}}),t.jsx("img",{src:v,alt:"Huub Jansen",loading:"lazy","data-aos":"fade-left","data-aos-delay":"200",style:{position:"absolute",top:e?"30px":"20px",right:"20px",width:m&&!a?"130px":a?"190px":l?"170px":"220px",height:m&&!a?"130px":a?"190px":l?"170px":"220px",borderRadius:"12px",objectFit:"cover",boxShadow:"0 8px 25px rgba(0,0,0,0.2)",transform:"rotate(8deg)",animation:"floating2 3.2s ease-in-out infinite 0.5s",zIndex:4}}),t.jsx("img",{src:z,alt:"Jan Pouw",loading:"lazy","data-aos":"fade-up","data-aos-delay":"300",style:{position:"absolute",bottom:e?"20px":"0px",left:"50%",transform:"translateX(-50%) rotate(-3deg)",width:e?"150px":a?"220px":l?"200px":"260px",height:e?"150px":a?"220px":l?"200px":"260px",borderRadius:"12px",objectFit:"cover",boxShadow:"0 8px 25px rgba(0,0,0,0.2)",animation:"floating3 3.5s ease-in-out infinite 1s",zIndex:5}})]})})]})]})]})};export{B as default};
