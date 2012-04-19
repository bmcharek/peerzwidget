/*here the js code comes that generates the widget */

uhref = $("#jswidget").attr("href") ;
ref   = "http://www.peerz.nl/people/greg"; //this would be something retrieved from json
if( uhref ==  ref){//here nore checks should be made. eg: is the person authorized to place this pers. widget?
    $.ajax({
	type : "GET",
	url  : "/jsondata/",
	dataType: 'json',
	success: function(msg){
	    var script= document.createElement('script');
            script.type='text/javascript';
            script.src="http://code.jquery.com/jquery-1.7.1.js";
            var pdom = $('<div id="outer"></div>');
	    pdom.append(script);
            pdom.append('<h2>According to peerz</h2>');
	    pdom.append('<img id="riasec_img" src="'+ msg.result.chart.all + '">');
            pdom.append('<h3>' + msg.result.details.en.personal.personal +'</h3>'); 
            pdom.append('<div id="mywidget"></div>'); 
            $('#jswidget').append(pdom);
            
	    
	    
	    
	}
    });
}


