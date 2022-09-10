(()=>{"use strict";const t=e;function e(t){this.date=t;var e=["January","February","March","April","May","June","July","August","September","October","November","December"];this.getMonthOfYear=function(){return t=this.date.getMonth(),e[t];var t},this.today=function(){this.date=new Date}}e.prototype.setYear=function(t){this.date.setFullYear=t},e.prototype.nextYear=function(){this.date.setFullYear(this.date.getFullYear()+1)},e.prototype.previousYear=function(){this.date.setFullYear(this.date.getFullYear()-1)},e.prototype.getDayOfMonth=function(){return this.date.getDate()},e.prototype.getYear=function(){return this.date.getFullYear()},e.prototype.getToday=function(){return this.date.getDate()},e.prototype.getWeekCalendar=function(){return{Week:"week"}},e.prototype.getYearCalendar=function(){var t=document.createElement("div");t.className="calendar",t.id="calendar";for(var e="<div class='year-container'>",a=0;a<12;a++){var n=new Date(this.date.getFullYear(),a,1);e+=this.getMonthCalenar(n)}return e+="</div>",t.innerHTML=e,t},e.prototype.getMonthCalenar=function(t){var e="<div class='month-container'>";return e+="<table id='calendar_table' class='calendar_table'>",e+=this.calCaption(t),e+=this.calWeakdayRow(),e+=this.calDays(t),(e+="</table>")+"</div>"},e.prototype.calCaption=function(t){var e=t.getMonth();return'<caption id="'.concat(this.getMonthOfYear(e),'">')+this.getMonthOfYear(e)+" <span class='year' id='year'>"+this.getYear()+"</span></caption>"},e.prototype.calWeakdayRow=function(){for(var t=["S","M","T","W","T","F","S"],e="<tr>",a=0;a<t.length;a++)e+="<th class='calendar-weakdays'>"+t[a]+"</th>";return e+"</tr>"},e.prototype.daysInMonth=function(t){var e=[31,28,31,30,31,30,31,31,30,31,30,31],a=t.getFullYear(),n=t.getMonth();return a%4==0&&(a%100==0&&a%400!=0||(e[1]=29)),e[n]},e.prototype.calDays=function(t){for(var e=0,a=new Date(t.getFullYear(),t.getMonth(),1),n=a.getDay(),r="<tr>",o=0;o<n;o++)r+="<td class='empty'><div class='empty-day'></div></td>";for(var c=this.daysInMonth(t),i=(new Date).getDate(),d=(new Date).getMonth(),l="",s="",u=1;u<=c;u++)a.setDate(u),n=a.getDay(),e="".concat(a.getFullYear()).concat(2===a.getMonth().toString().length?a.getMonth():"0"+a.getMonth()).concat(2===a.getDate().toString().length?a.getDate():"0"+a.getDate()),l=6===n?"sat":"",s=5===n?"fri":"",u===i&&t.getMonth()===d?r+="<td  class='calendar-dates ".concat(l," ").concat(s,"' id='calendar-today'><div data-daynumber=").concat(e," class='days'>")+u+"</div></td>":r+="<td  class='calendar-dates ".concat(l," ").concat(s,"'><div data-daynumber=").concat(e," class='days'>")+u+"</div></td>",6===n&&(r+="</tr>"),e++;for(var y=(n=(a=new Date(t.getFullYear(),t.getMonth(),c)).getDay())+1;y<7;y++)r+="<td class='empty'><div class='empty-day'></div></td>";return r+"</tr>"};var a=null,n=null;function r(t,e){a=t,n=e,l()}function o(){a.today(),l()}function c(){a.nextYear(),l()}function i(){a.previousYear(),l()}function d(t){t.textContent=a.getYear()}function l(){n.firstElementChild.remove(),n.prepend(a.getYearCalendar())}window.addEventListener("load",(function(){r(new t(new Date),document.querySelector(".section-main")),l();var e=document.querySelector("#btnToday"),a=document.querySelector("#btnPreviousYear"),n=document.querySelector("#btnNextYear");function l(){var t=document.querySelector(".current-year");document.querySelector(".today"),d(t)}e.addEventListener("click",(function(t){o(),l()})),a.addEventListener("click",(function(t){i(),l()})),n.addEventListener("click",(function(t){c(),l()}))}))})();