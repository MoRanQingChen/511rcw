/*	document.getElementById("test").onclick=function() {
		jp("http://www.511rcw.com/app/Handler1.ashx",{t:2},function(data){
			alert(data);
		})
	}*/
    function jp(url,oData,callback) {
    	window.callback=callback
        var oHead = document.getElementsByTagName('head')[0];
        var params = formatParams(oData);
        var oS = document.createElement('script');
        
        oHead.appendChild(oS);
        oS.src = url + '?' + params; 
        function formatParams(data) {
        	var arr = []; 
        	for (var name in data) {
            	arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
        	}
        	return arr.join('&');
    	}
    };