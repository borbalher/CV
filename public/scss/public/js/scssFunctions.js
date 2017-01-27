
var scssfunctions = {"shade": "shade", "extends": "extends", "blend": "blend"};

function getNumberParams(id){
	switch(id){
		case "shade":
		        return 2;
			break;
		case "blend":
		        return 3;
			break;
		case "extends":
		        return 1;
			break;
	}
}

function existFunction(id){
	var contenido = scssfunctions[id];
	if(contenido === undefined){
	   return false;   
	}else{
	   return true;        
	}
}

function resultSCSSFunction(functionId,functionParams){
	switch(functionId){
		case "shade":
		        return shade(functionParams.reverse());
			break;
		case "blend":
		        return blend(functionParams.reverse());
			break;
	}
}

function resultSCSSBlockFunction(id,functionId,functionParams){
	switch(functionId){
		case "extends":
			extend(id,functionParams);
			break;
	}
}


function extend(id, functionParams){
	var bloquePadre = existeBloque(functionParams[0][0].replace(/"/g,""));
        if(bloquePadre != null){
		var bloqueHijo = symbolTableActual.blocks[id];
                bloqueHijo.atributos = bloqueHijo.atributos.concat(bloquePadre.atributos);
        }else{
		throw("Error, the selector "+functionParams[0]+" has not been defined");
        }
}

function shade(functionParams){
	var percent = functionParams[1];
        var color = functionParams[0];
        
        var firstChar =  color.charAt(0);

	if(color.charAt(0) == '"'){
	    color = color1.replace(/"/g,"");
	}else if(color.charAt(0)=="h"){
		throw ("HSL and HSLA are not supported right now");
	}


	var result;
        
        if(firstChar == "#"){
	    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
	    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
        }else if(firstChar == "r"){
		var f=color.split(","),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);

		R =Math.round((t-R)*p)+R;
		G =Math.round((t-G)*p)+G;
		B =Math.round((t-B)*p)+B;

		if ( R > 255 ) R = 255;
		else if  (R < 0) R = 0;

		if ( G > 255 ) G = 255;
		else if  (G < 0) G = 0;

		if ( B > 255 ) B = 255;
		else if  (B < 0) B = 0;

		return "rgb("+R+","+G+","+B+")";
	}else{
		throw ("Error, invalid params");
	}
}

function blend(functionParams){
	var percent = functionParams[2];
	var firstChar;
        var color1 = functionParams[0];        
        var color2 = functionParams[1];        



	if(color1.charAt(0) == color2.charAt(0) && color1.charAt(0) == '"'){
	    color1 = color1.replace(/"/g,"");
	    color2 = color2.replace(/"/g,"");
	}

	if(color1.charAt(0) == color2.charAt(0)){
		firstChar = color1.charAt(0) ;
	}else if(color1.charAt(0)=="h"){
		throw ("HSL and HSLA are not supported right now");
	}else{
		throw ("Error, the colors must be of the same type");
	}

	var result;
        if(firstChar == "#"){
    var f=parseInt(color1.slice(1),16),t=parseInt(color2.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*percent)+R1)*0x10000+(Math.round((G2-G1)*percent)+G1)*0x100+(Math.round((B2-B1)*percent)+B1)).toString(16).slice(1);
        }else if(firstChar == "r"){
    var f=color1.split(","),t=color2.split(","),R=parseInt(f[0].slice(4)),G=parseInt(f[1]),B=parseInt(f[2]);
	R =Math.round((parseInt(t[0].slice(4))-R)*percent)+R;
	G =Math.round((parseInt(t[1])-G)*percent)+G;
	B = Math.round((parseInt(t[2])-B)*percent)+B;

	if ( R > 255 ) R = 255;
	else if  (R < 0) R = 0;

	if ( G > 255 ) G = 255;
	else if  (G < 0) G = 0;

	if ( B > 255 ) B = 255;
	else if  (B < 0) B = 0;

	 return "rgb("+R+","+G+","+B+")";

	}else{
		throw ("Invalid params");
	}

}


