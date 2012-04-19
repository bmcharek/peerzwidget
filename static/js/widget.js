/*here the js code comes that generates the widget */

uhref = $("#jswidget").attr("href") ;
ref   = "http://www.peerz.nl/people/greg"; //this would be somethin retrieved from json
if( uhref ==  ref){
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
	    pdom.append('<img id="riasec_img" src="https://chart.googleapis.com/chart?cht=rs&amp;chs=330x330&amp;chxt=x&amp;chf=a,s,000000|bg,s,00000000&amp;chls=0&amp;chxr=0,0,105&amp;chxs=0,000000,10.5,-1,lt,8A8A8A&amp;chm=B,99d62a,0,1.0,5.0&amp;chd=t:64,0,37,0,113,12,64&amp;chxl=0:|Realistic|Investigative|Artistic|Social|Enterprising|Conventional">');
            pdom.append('<h3>' + msg.result.details.en.personal.personal +'</h3>'); 
            pdom.append('<div id="mywidget"></div>'); 
            $('#jswidget').append(pdom);
            
	    
	    
	    
	}
    });
}


