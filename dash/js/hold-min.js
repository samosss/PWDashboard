function initCharts(){$(".chart.chart-bar").sparkline(void 0,{type:"bar",barColor:"rgba(0, 0, 0, 0.15)",negBarColor:"rgba(0, 0, 0, 0.15)",barWidth:"8px",height:"34px"})}function analCost(){getTodayData(function(a){var r,t,o,e,i;for(i=(i=new Date).getHours(),n=0;n<a.length;n++)r+=a[n].solar,t+=a[n].grid,o+=a[n].house,e+=a[n].battery,n==a.length-1&&(r/n*i,t/n*i,o/n*i,e/n*i)})}