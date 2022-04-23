(()=>{"use strict";const e=function(){function e(e){this.date=e,this.currentMonth=this.date.getMonth()}function t(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e]}return e.prototype.setYear=function(e){this.date.setFullYear(e)},e.prototype.nextYear=function(){this.date.setFullYear(this.date.getFullYear()+1)},e.prototype.previousYear=function(){this.date.setFullYear(this.date.getFullYear()-1)},e.prototype.nextMonth=function(){this.date.setMonth(this.date.getMonth()+1),console.log(this.date)},e.prototype.previousMonth=function(){this.date.setMonth(this.date.getMonth()-1),console.log(this.date)},e.prototype.getDayOfMonth=function(){return this.date.getDate()},e.prototype.getMonthOfYear=function(){return this._getMonthName(this.date.getMonth())},e.prototype.getYear=function(){return this.date.getFullYear()},e.prototype.getToday=function(){return this.date.getDate()},e.prototype.getWeekCalendar=function(){return{Week:"week"}},e.prototype.getYearCalendar=function(){for(var e="<div class='year-container'>",t=0;t<12;t++){var n=new Date(this.getYear(),t,1);e+=this.getMonthCalenar(n)}return e},e.prototype.getMonthCalenar=function(e){var n="<div class='month-container'>";return n+="<table id='calendar_table' class='calendar_table'>",n+=function(e){var n=e.getMonth();return'<caption id="'.concat(t(n),'">')+t(n)+" <span class='year' id='year'>"+e.getFullYear()+"</span></caption>"}(e),n+=function(){for(var e=["S","M","T","W","T","F","S"],t="<tr>",n=0;n<e.length;n++)t+="<th class='calendar-weakdays'>"+e[n]+"</th>";return t+"</tr>"}(),n+=function(e){for(var t=0,n=new Date(e.getFullYear(),e.getMonth(),1),a=n.getDay(),o="<tr>",r=0;r<a;r++)o+="<td class='empty'><div class='empty-day'></div></td>";for(var c=function(e){var t=[31,28,31,30,31,30,31,31,30,31,30,31],n=e.getFullYear(),a=e.getMonth();return n%4==0&&(n%100==0&&n%400!=0||(t[1]=29)),t[a]}(e),i=(new Date).getDate(),l=(new Date).getMonth(),s="",d="",u=1;u<=c;u++)n.setDate(u),a=n.getDay(),t="".concat(n.getFullYear()).concat(2===n.getMonth().toString().length?n.getMonth():"0"+n.getMonth()).concat(2===n.getDate().toString().length?n.getDate():"0"+n.getDate()),s=6===a?"sat":"",d=5===a?"fri":"",u===i&&e.getMonth()===l?o+="<td class='calendar-dates ".concat(s," ").concat(d,"' id='calendar-today'>\n        <div data-daynumber=").concat(t," class='days'>").concat(u,"</div>\n        </td>"):o+="<td class='calendar-dates ".concat(s," ").concat(d,"'>\n        <div data-daynumber=").concat(t," class='days'> ").concat(u,"</div>\n        </td>"),6===a&&(o+="</tr>"),t++;for(var h=(a=(n=new Date(e.getFullYear(),e.getMonth(),c)).getDay())+1;h<7;h++)o+="<td class='empty'><div class='empty-day'></div></td>";return o+"</tr>"}(e),(n+="</table>")+"</div>"},e}();function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function n(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}var o=new WeakMap,r=new WeakMap;const c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,o,{writable:!0,value:""}),n(this,r,{writable:!0,value:""}),this.state="EDIT",this.container=document.createElement("div"),this.input=document.createElement("input"),this.btnAdd=document.createElement("button"),this.btnDelete=document.createElement("button"),this.trash=document.createElement("i"),this.btnAdd.classList.add("todo__add","button"),this.container.classList.add("todo__row"),this.btnDelete.classList.add("button","btnDeleteItem"),this.trash.classList.add("fa","fa-trash"),this.input.placeholder="Note...",this.btnDelete.appendChild(this.trash),this.container.appendChild(this.input),this.container.appendChild(this.btnAdd),this.container.appendChild(this.btnDelete)}var c,i;return c=e,(i=[{key:"setState",value:function(){"NOEDIT"===this.state?(this.input.setAttribute("disabled","true"),this.btnAdd.style.display="none",this.btnDelete.style.display="block"):"EDIT"===this.state&&(this.input.removeAttribute("disabled"),this.btnAdd.style.display="block",this.btnDelete.style.display="none",this.input.focus())}},{key:"createNote",value:function(){var e=this;return this.input.textContent=function(e,t){return t.get?t.get.call(e):t.value}(this,a(this,r,"get")),this.btnAdd.textContent="Done",this.btnDelete.style.display="none",this.btnAdd.addEventListener("click",(function(t){t.stopPropagation(),console.log("Done"),function(e,t,n){(function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}})(e,a(e,t,"set"),n)}(e,r,e.input.value),e.state="NOEDIT",e.setState()})),this.btnDelete.addEventListener("click",(function(t){t.stopPropagation(),e.container.parentElement.removeChild(e.container)})),this.container.addEventListener("click",(function(t){e.state="EDIT",e.setState(),e.input.focus()})),this.container}}])&&t(c.prototype,i),Object.defineProperty(c,"prototype",{writable:!1}),e}(),i="YEAR_VIEW",l="MONTH_VIEW";!function(){var t=i,n=new e(new Date),a=document.querySelector("#btnNextYear"),o=document.querySelector("#btnPreviousYear");function r(){document.querySelector(".section-main"),document.querySelector(".calendar").innerHTML=n.getYearCalendar(),document.querySelector(".current-year").textContent=n.getYear(),document.querySelector(".today").textContent=n.getToday()}document.querySelector("#btnToday").addEventListener("click",(function(){n.setYear((new Date).getFullYear()),r()})),a.addEventListener("click",(function(){t===i?n.nextYear():n.nextMonth(),r()})),o.addEventListener("click",(function(){t===i?n.previousYear():n.previousMonth(),r()})),r()}();var s=document.getElementById("calendar"),d=document.querySelector("#btnCloseSidePanel"),u=document.querySelector(".side-panel"),h=document.querySelector("#btnOpenNotes"),p=document.querySelectorAll(".todo__label"),y=document.querySelector("#btnAddItem"),m=document.querySelector("#btnCancel"),f=document.querySelector(".todo__container"),g=document.querySelector("#view"),v=document.querySelector(".button--add"),b=(document.querySelector(".add-item__countainer"),localStorage.getItem("currentYear")||(new Date).getFullYear()),M=new Date(b);M.setDate((new Date).getDate()),M.setMonth((new Date).getMonth()),console.log(M);var w=document.querySelector(".time");function D(){s.innerHTML=createCalendar(new Date(b,currentMonth,1)),S()}function E(e){e.forEach((function(t){t.addEventListener("click",(function(n){e.forEach((function(e){e.classList.remove("selected")})),t.classList.add("selected");var a=n.target.dataset.daynumber,o=new Date(a.slice(0,4),a.slice(4,6),a.slice(6,8));currentMonth=a.slice(4,6),console.log(currentMonth),console.log(o),document.querySelector(".side-panel_date").innerText=o.toDateString()}))}))}function S(){document.querySelector(".current-year");var e=document.querySelector(".today");"Year"===View_Mode||"Month"===View_Mode&&console.log(Number(currentMonth)),e.innerText=headerTitleToday}setInterval((function(){w.innerText=(new Date).toLocaleTimeString()}),1e3),g.addEventListener("change",(function(e){var t,n=e.target.value;"Month"===n?("css/monthview.css",(t=document.createElement("link")).rel="stylesheet",t.href="css/monthview.css",document.getElementsByTagName("head")[0].appendChild(t),View_Mode=l,D(),S()):"Year"===n&&(function(e){var t=document.querySelector('link[href="'.concat("css/monthview.css",'"]'));console.log(t),t.parentNode.removeChild(t)}(),View_Mode=i),function(){var e;"Year"===View_Mode?(e=b,M.setFullYear(e),function(e){localStorage.setItem("currentYear",e)}(b),setCalendarContainer(s),createYear(M),S(),E(document.querySelectorAll(".days"))):"Month"===View_Mode&&(console.log(currentMonth),D(currentMonth));var t=document.querySelectorAll(".days");console.log("dates:",t),E(t)}(),E(document.querySelectorAll(".days"))})),d.addEventListener("click",(function(e){console.log("clicked"),u.classList.remove("active")})),h.addEventListener("click",(function(e){console.log("clicked"),u.classList.toggle("active")})),p.forEach((function(e){e.addEventListener("click",(function(e){e.target.classList.toggle("checked")}))})),y.addEventListener("click",(function(e){var t=document.querySelector("#newitem"),n=t.value;t.value="";var a=document.createElement("div"),o=document.createElement("label"),r=document.createTextNode(n),c=document.createElement("button"),i=document.createElement("i");i.classList.add("fa","fa-trash"),a.classList.add("todo__row"),o.classList.add("todo__label"),c.classList.add("btnDeleteItem"),c.appendChild(i),o.appendChild(r),a.appendChild(o),a.appendChild(c),f.appendChild(a),c.addEventListener("click",(function(){f.removeChild(a)})),o.addEventListener("click",(function(e){e.target.classList.toggle("checked")})),t.focus()})),m.addEventListener("click",(function(){document.querySelector(".add-item__countainer").classList.remove("show")})),v.addEventListener("click",(function(e){var t=new c,n=document.querySelector(".todo__container");n.appendChild(t.createNote()),n.lastChild.firstChild.focus()}))})();