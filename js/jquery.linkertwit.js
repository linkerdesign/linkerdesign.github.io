$.fn.linkertwit = function(uname){
	var target = this;
	$.getJSON('http://twitter.com/statuses/user_timeline/'+uname+'.json?callback=?', function (json) {
		var count=0;
		$(target).append("<ul></ul>");
		for (var i=0; i<json.length; i++) {
			if(json[i].in_reply_to_status_id == null){
				count=count+1;
				$(target).children().append("<li><a href='http://twitter.com/#!/"+uname+"/status/"+ json[i].id +"'>"+ json[i].text + "</a></li>");
				if (count>2) {break;}
			}
		}
	});
};