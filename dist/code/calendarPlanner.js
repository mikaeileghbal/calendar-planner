(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e,n){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,n)}function n(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}var a=new WeakMap,r=new WeakMap;const o=function(){function o(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),e(this,a,{writable:!0,value:""}),e(this,r,{writable:!0,value:""}),this.state="EDIT",this.container=document.createElement("div"),this.input=document.createElement("input"),this.btnAdd=document.createElement("button"),this.btnDelete=document.createElement("button"),this.trash=document.createElement("i"),this.btnAdd.classList.add("todo__add","button"),this.container.classList.add("todo__row"),this.btnDelete.classList.add("button","btnDeleteItem"),this.trash.classList.add("fa","fa-trash"),this.input.placeholder="Note...",this.btnDelete.appendChild(this.trash),this.container.appendChild(this.input),this.container.appendChild(this.btnAdd),this.container.appendChild(this.btnDelete)}var i,c;return i=o,(c=[{key:"setState",value:function(){"NOEDIT"===this.state?(this.input.setAttribute("disabled","true"),this.btnAdd.style.display="none",this.btnDelete.style.display="block"):"EDIT"===this.state&&(this.input.removeAttribute("disabled"),this.btnAdd.style.display="block",this.btnDelete.style.display="none",this.input.focus())}},{key:"createNote",value:function(){var t=this;return this.input.textContent=function(t,e){return e.get?e.get.call(t):e.value}(this,n(this,r,"get")),this.btnAdd.textContent="Done",this.btnDelete.style.display="none",this.btnAdd.addEventListener("click",(function(e){e.stopPropagation(),function(t,e,a){(function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}})(t,n(t,e,"set"),a)}(t,r,t.input.value),t.state="NOEDIT",t.setState()})),this.btnDelete.addEventListener("click",(function(e){e.stopPropagation(),t.container.parentElement.removeChild(t.container)})),this.container.addEventListener("click",(function(e){t.state="EDIT",t.setState(),t.input.focus()})),this.container}}])&&t(i.prototype,c),Object.defineProperty(i,"prototype",{writable:!1}),o}(),i=function(){function t(t){this.date=t,this.currentMonth=this.date.getMonth()}function e(t){return["January","February","March","April","May","June","July","August","September","October","November","December"][t]}return t.prototype.setYear=function(t){this.date.setFullYear(t)},t.prototype.nextYear=function(){this.date.setFullYear(this.date.getFullYear()+1)},t.prototype.previousYear=function(){this.date.setFullYear(this.date.getFullYear()-1)},t.prototype.nextMonth=function(){this.date.setMonth(this.date.getMonth()+1)},t.prototype.previousMonth=function(){this.date.setMonth(this.date.getMonth()-1)},t.prototype.getDayOfMonth=function(){return this.date.getDate()},t.prototype.getMonthOfYear=function(){return this._getMonthName(this.date.getMonth())},t.prototype.getYear=function(){return this.date.getFullYear()},t.prototype.getToday=function(){return this.date.getDate()},t.prototype.getWeekCalendar=function(){return{Week:"week"}},t.prototype.getYearCalendar=function(){for(var t="<div class='year-container'>",e=0;e<12;e++)this.date.setMonth(e),t+=this.getMonthCalenar(this.date);return t},t.prototype.getMonthCalenar=function(t){var n="<div class='month-container'>";return n+="<table id='calendar_table' class='calendar_table'>",n+=function(t){var n=t.getMonth();return'<caption id="'.concat(e(n),'">')+e(n)+" <span class='year' id='year'>"+t.getFullYear()+"</span></caption>"}(t),n+=function(){for(var t=["S","M","T","W","T","F","S"],e="<tr>",n=0;n<t.length;n++)e+="<th class='calendar-weakdays'>"+t[n]+"</th>";return e+"</tr>"}(),n+=function(t){for(var e=0,n=new Date(t.getFullYear(),t.getMonth(),1),a=n.getDay(),r="<tr>",o=0;o<a;o++)r+="<td class='empty'><div class='empty-day'></div></td>";for(var i=function(t){var e=[31,28,31,30,31,30,31,31,30,31,30,31],n=t.getFullYear(),a=t.getMonth();return n%4==0&&(n%100==0&&n%400!=0||(e[1]=29)),e[a]}(t),c=(new Date).getDate(),s=(new Date).getMonth(),d="",l="",u=1;u<=i;u++)n.setDate(u),a=n.getDay(),e="".concat(n.getFullYear()).concat(2===n.getMonth().toString().length?n.getMonth():"0"+n.getMonth()).concat(2===n.getDate().toString().length?n.getDate():"0"+n.getDate()),d=6===a?"sat":"",l=5===a?"fri":"",u===c&&t.getMonth()===s?r+="<td class='calendar-dates ".concat(d," ").concat(l,"' id='calendar-today'>\n        <div data-daynumber=").concat(e," class='days'>").concat(u,"</div>\n        </td>"):r+="<td class='calendar-dates ".concat(d," ").concat(l,"'>\n        <div data-daynumber=").concat(e," class='days'> ").concat(u,"</div>\n        </td>"),6===a&&(r+="</tr>"),e++;for(var h=(a=(n=new Date(t.getFullYear(),t.getMonth(),i)).getDay())+1;h<7;h++)r+="<td class='empty'><div class='empty-day'></div></td>";return r+"</tr>"}(t),(n+="</table>")+"</div>"},t}(),c="YEAR_VIEW",s=((d=function(){this.View_Mode=c,this.calendar=new i(new Date)}).prototype.render=function(){var t;document.querySelector(".section-main"),this.View_Mode===c?document.querySelector(".calendar").innerHTML=this.calendar.getYearCalendar():document.querySelector(".calendar").innerHTML=this.calendar.getMonthCalenar(this.calendar.date),t=this.calendar,document.querySelector(".current-year").textContent=t.getYear(),document.querySelector(".today").textContent=t.getToday()},d.prototype.today=function(){this.calendar.setYear((new Date).getFullYear()),this.render()},d.prototype.nextYear=function(){this.View_Mode===c?this.calendar.nextYear():this.calendar.nextMonth(),this.render()},d.prototype.previousYear=function(){this.View_Mode===c?this.calendar.previousYear():this.calendar.previousMonth(),this.render()},d);var d;!function(){var t=new s;document.querySelector("#btnToday").addEventListener("click",(function(e){return t.today()})),document.querySelector("#btnNextYear").addEventListener("click",(function(e){return t.nextYear()})),document.querySelector("#btnPreviousYear").addEventListener("click",(function(e){return t.previousYear()})),document.querySelector("#view").addEventListener("change",(function(e){var n,a=e.target.value;"Month"===a?("css/monthview.css",(n=document.createElement("link")).rel="stylesheet",n.href="css/monthview.css",document.getElementsByTagName("head")[0].appendChild(n),t.View_Mode=viewModes.MONTH_VIEW):"Year"===a&&(function(t){var e=document.querySelector('link[href="'.concat("css/monthview.css",'"]'));console.log(e),e.parentNode.removeChild(e)}(),t.View_Mode=viewModes.YEAR_VIEW),t.render()})),document.querySelector("#btnCloseSidePanel").addEventListener("click",(function(t){document.querySelector(".side-panel").classList.remove("active")})),document.querySelector("#btnOpenNotes").addEventListener("click",(function(t){document.querySelector(".side-panel").classList.toggle("active")})),document.querySelector("#btnAddItem").addEventListener("click",(function(t){var n=document.querySelector("#newitem"),a=n.value;n.value="";var r=document.createElement("div"),o=document.createElement("label"),i=document.createTextNode(a),c=document.createElement("button"),s=document.createElement("i");s.classList.add("fa","fa-trash"),r.classList.add("todo__row"),o.classList.add("todo__label"),c.classList.add("btnDeleteItem"),c.appendChild(s),o.appendChild(i),r.appendChild(o),r.appendChild(c),e.appendChild(r),c.addEventListener("click",(function(){e.removeChild(r)})),o.addEventListener("click",(function(t){t.target.classList.toggle("checked")})),n.focus()})),document.querySelector("#btnCancel").addEventListener("click",(function(){document.querySelector(".add-item__countainer").classList.remove("show")})),document.querySelector(".button--add").addEventListener("click",(function(t){var e=new o,n=document.querySelector(".todo__container");n.appendChild(e.createNote()),n.lastChild.firstChild.focus()})),document.querySelectorAll(".todo__label");var e=document.querySelector(".todo__container");t.render()}()})();