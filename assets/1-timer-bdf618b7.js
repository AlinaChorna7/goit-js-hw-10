import{f as p,i as y}from"./vendor-77e16229.js";const i=document.getElementById("datetime-picker"),s=document.querySelector("button[data-start]"),S=document.querySelector("span[data-days]"),b=document.querySelector("span[data-hours]"),v=document.querySelector("span[data-minutes]"),w=document.querySelector("span[data-seconds]");let u=null,d=null;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(y.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0):(u=e,s.disabled=!1)}};p(i,C);s.addEventListener("click",()=>{u&&(D(u),i.disabled=!0,s.disabled=!0)});function D(t){clearInterval(d),d=setInterval(()=>{const e=new Date().getTime(),n=t-e;if(n<=0)clearInterval(d),i.disabled=!1,m(0,0,0,0);else{const{days:o,hours:l,minutes:r,seconds:c}=I(n);m(o,l,r,c)}},1e3)}function I(t){const r=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),f=Math.floor(t%36e5/6e4),h=Math.floor(t%6e4/1e3);return{days:r,hours:c,minutes:f,seconds:h}}function m(t,e,n,o){S.textContent=a(t),b.textContent=a(e),v.textContent=a(n),w.textContent=a(o)}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer-bdf618b7.js.map
