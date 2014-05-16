// jQuery AccessRanking show list from json Google analytics data.
$(document).ready(function(){
       var uri = 'http://linker.in/journal/accessranking_month.json';
  var base_uri = 'http://linker.in';
     var list = '<h1>linker.in ここ一ヶ月のアクセスランキング</h1>';
    list += '<ul class="rk_list">';
    $.getJSON(uri, function(data){
         var a = data;
          var c = 1;
             for (i=0; i<a.length; i++) {
                   var title = a[i]['dxp:dimension']['ga:pageTitle'].value;
                    var url = a[i]['dxp:dimension']['ga:pagePath'].value;
                  list += '<li class="rk_item">'+c+' : '+'<a href="'+url+'">'+title+'</a></li>';
                 c++;
           }
              list += '</ul>';
               $("div.accessranking").empty().html(list);
     });
    return false;
});
/*--
HTML: blow the code into widget
<div class="widget-ranking-entries widget-archives widget">
   <div class="widget-content accessranking">
   </div>
</div>
 
CSS: customize your favorite design
ul.rk_list {
 list-style-image: none;
list-style-position: outside;
  list-style-type: none; }
li.rk_item {
  margin: 0;
     padding: 0; }
footerJS: below the code into after </body>
<script type="text/javascript" src="http://linker.in/journal/js/accessranking.js"></script>
--*/

