function espejoHorizontal(objetoBoguiActual){
 
        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var imageDataAux = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var pixelData = imageData.data;
        var pixelDataAux = imageDataAux.data;
 
        var bytesPerPixel = 4;
 
        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) {
                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {
 
                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                        var startIdxAux = ((y) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((objetoBoguiActual.imgCanvas.width - x) * bytesPerPixel);
                       
                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                }
        }
        createBoguiFromCanvas(objetoBoguiActual, objetoBoguiActual.imgCanvas, imageDataAux);  
}
 

function espejoVertical(objetoBoguiActual){
 
        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var imageDataAux = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var pixelData = imageData.data;
        var pixelDataAux = imageDataAux.data;
 
        var bytesPerPixel = 4;
 
        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) {
                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {
 
                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                        var startIdxAux = ((objetoBoguiActual.imgCanvas.height - y) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((x) * bytesPerPixel);
                       
                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                }
        }
 
        createBoguiFromCanvas(objetoBoguiActual, objetoBoguiActual.imgCanvas, imageDataAux);      
 
}


function transpuesta(objetoBoguiActual){

        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);

        var canvasAux = $('<canvas/>')[0];      
        canvasAux.height =      objetoBoguiActual.imgCanvas.width;
        canvasAux.width = objetoBoguiActual.imgCanvas.height;       
        var ctxAux = canvasAux.getContext("2d");

        //var imageDataAux = ctxAux.getImageData(0,0,canvasAux.width, canvasAux.height);
        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
        var pixelData = imageData.data;
        var pixelDataAux = imageDataAux.data;

        var bytesPerPixel = 4;

        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) { 
                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {

                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                        var startIdxAux = ((x) * bytesPerPixel * canvasAux.width) + ((y) * bytesPerPixel);
                        
                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                        pixelDataAux[startIdxAux+3] = pixelData[startIdx+3];

                }
        }

        createBoguiFromCanvas(objetoBoguiActual, canvasAux, imageDataAux);
}

function rotarBasico(objetoBoguiActual, grados){

        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);

        var canvasAux = $('<canvas/>')[0];      
           
        var ctxAux;

        switch(grados){
                case 90:
                        canvasAux.height = objetoBoguiActual.imgCanvas.width;
                        canvasAux.width = objetoBoguiActual.imgCanvas.height;    
                        ctxAux = canvasAux.getContext("2d");
                        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
                        var pixelData = imageData.data;
                        var pixelDataAux = imageDataAux.data;
                        var bytesPerPixel = 4;

                        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) { 
                                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {

                                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                                        var startIdxAux = ((x) * bytesPerPixel * canvasAux.width) + ((canvasAux.width - 1 - y) * bytesPerPixel);
                                        
                                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                                        pixelDataAux[startIdxAux+3] = pixelData[startIdx+3];

                                }
                        }
                        


                break;

                case 180:
                        canvasAux.height = objetoBoguiActual.imgCanvas.height;
                        canvasAux.width = objetoBoguiActual.imgCanvas.width;    
                        ctxAux = canvasAux.getContext("2d");
                        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
                        var pixelData = imageData.data;
                        var pixelDataAux = imageDataAux.data;
                        var bytesPerPixel = 4;

                        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) { 
                                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {

                                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                                        var startIdxAux = ((canvasAux.height-1-y) * bytesPerPixel * canvasAux.width) + ((canvasAux.width - 1 - x) * bytesPerPixel);
                                        
                                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                                        pixelDataAux[startIdxAux+3] = pixelData[startIdx+3];

                                }
                        }
                        
                
                break;

                case 270:
                        canvasAux.height = objetoBoguiActual.imgCanvas.width;
                        canvasAux.width = objetoBoguiActual.imgCanvas.height;    
                        ctxAux = canvasAux.getContext("2d");
                        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
                        var pixelData = imageData.data;
                        var pixelDataAux = imageDataAux.data;
                        var bytesPerPixel = 4;

                        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) { 
                                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {

                                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                                        var startIdxAux = ((canvasAux.height-1-x) * bytesPerPixel * canvasAux.width) + ((y) * bytesPerPixel);
                                        
                                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                                        pixelDataAux[startIdxAux+3] = pixelData[startIdx+3];

                                }
                        }
                
                break;


                default:
                        canvasAux.height = objetoBoguiActual.imgCanvas.height;
                        canvasAux.width = objetoBoguiActual.imgCanvas.width;    
                        ctxAux = canvasAux.getContext("2d");
                        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
                        var pixelData = imageData.data;
                        var pixelDataAux = imageDataAux.data;
                        var bytesPerPixel = 4;

                        for(var y = 0; y < objetoBoguiActual.imgCanvas.height; y++) { 
                                for(var x = 0; x < objetoBoguiActual.imgCanvas.width; x++) {

                                        var startIdx = (y * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (x * bytesPerPixel);
                                        var startIdxAux = ((y) * bytesPerPixel * canvasAux.width) + ((x) * bytesPerPixel);
                                        
                                        pixelDataAux[startIdxAux] = pixelData[startIdx];
                                        pixelDataAux[startIdxAux+1] = pixelData[startIdx+1];
                                        pixelDataAux[startIdxAux+2] = pixelData[startIdx+2];
                                        pixelDataAux[startIdxAux+3] = pixelData[startIdx+3];

                                }
                        }


                break;
        }
        

        createBoguiFromCanvas(objetoBoguiActual, canvasAux, imageDataAux);
        
}

function calcularFactor(ini, fin){
        return (fin/ini*1.0)
}

function escalar(objetoBoguiActual, pixelX, pixelY, modo){

        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var canvasAux = $('<canvas/>')[0]; 

        canvasAux.height = pixelY;
        canvasAux.width = pixelX;  

        var factorX = calcularFactor(canvasAux.width, objetoBoguiActual.imgCanvas.width);
        var factorY = calcularFactor(canvasAux.height, objetoBoguiActual.imgCanvas.height);

        var ctxAux = canvasAux.getContext("2d");

        //var imageDataAux = ctxAux.getImageData(0,0,canvasAux.width, canvasAux.height);
        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
        var pixelData = imageData.data;
        var pixelDataAux = imageDataAux.data;

        var bytesPerPixel = 4;

        for(var y = 0; y < canvasAux.height; y++) { 
                for(var x = 0; x < canvasAux.width; x++) {

                        var pixelOriginalX = parseInt(x * factorX);
                        var pixelOriginalY = parseInt(y * factorY);

                        var pesoX = (x * factorX)-parseInt(x * factorX);
                        var pesoY = (y * factorY)-parseInt(y * factorY);
                        var color = 100;
                        var alfa = 255;

                        switch(modo){

                        case "vmp":
                                //VECINO MAS PROXIMO

                                var pixelCercanoX = {};
                                var pixelCercano;

                                if(pesoX < 0.5){
                                    pixelCercanoX['pixel'] = "izquierda";
                                    pixelCercanoX['valor'] = pesoX;
                                         
                                }else{
                                    pixelCercanoX['pixel'] = "derecha";
                                    pixelCercanoX['valor'] = 1-pesoX;      
                                }

                                var pixelCercanoY = {};

                                if(pesoY > 0.5){
                                    pixelCercanoY['pixel'] = "arriba";
                                    pixelCercanoY['valor'] = pesoY;
                                         
                                }else{
                                    pixelCercanoY['pixel'] = "abajo";
                                    pixelCercanoY['valor'] = 1-pesoY;      
                                }
                                
                                if(pixelOriginalY == objetoBoguiActual.imgCanvas.height-1){
                                        pixelCercanoY['pixel'] = "arriba";
                                        pixelCercanoY['valor'] = pesoY; 
                                }
                                if(pixelOriginalX == objetoBoguiActual.imgCanvas.width-1){
                                        pixelCercanoX['pixel'] = "izquierda";
                                        pixelCercanoX['valor'] = pesoX; 
                                }

                                if(pixelCercanoY.valor < pixelCercanoX.valor){
                                        pixelCercano = pixelCercanoY.pixel;
                                }else{
                                        pixelCercano = pixelCercanoX.pixel;     
                                }

                                switch(pixelCercano){
                                        case "arriba":
                                        color = pixelData[((pixelOriginalY) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)];
                                        alfa = pixelData[((pixelOriginalY) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)+3];
                                        break;
                                        case "abajo":
                                        color = pixelData[((pixelOriginalY+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)];
                                        alfa = pixelData[((pixelOriginalY+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)+3];
                                        break;
                                        case "izquierda":
                                        color = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX) * bytesPerPixel)];
                                        alfa = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX) * bytesPerPixel)+3];
                                        break;
                                        case "derecha":
                                        color = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX+1) * bytesPerPixel)];
                                        alfa = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX+1) * bytesPerPixel)+3];
                                        break;
                                }
                        break;

                        case "media":
                        
                                //MEDIA DE LOS 4 COLORES
                                var media = 0;
                                var numeroColores = 0;
                                alfa = 0;


                                
                                var colorArriba = pixelData[((pixelOriginalY) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)];
                                var alfaArriba = pixelData[(((pixelOriginalY) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel))+3];
                                alfa += (alfaArriba * ((1-pesoY)));
                                media += (colorArriba * ((1-pesoY)));
                                numeroColores += (1-pesoY);
                                
                                if(pixelOriginalY < objetoBoguiActual.imgCanvas.height-1){
                                        var colorAbajo = pixelData[((pixelOriginalY+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel)];
                                        var alfaAbajo = pixelData[(((pixelOriginalY+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (pixelOriginalX * bytesPerPixel))+3];
                                        alfa += (alfaAbajo * ((pesoY)));
                                        media += (colorAbajo * ((pesoY)));
                                        numeroColores += (pesoY);
                                }
                                
                                var colorIzquierda = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX) * bytesPerPixel)];
                                var alfaIzquierda = pixelData[((pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX) * bytesPerPixel))+3];
                                alfa += (alfaIzquierda * (1-pesoX));
                                media += (colorIzquierda * (1-pesoX));
                                numeroColores += (1-pesoX);
                                
                                if(pixelOriginalX < objetoBoguiActual.imgCanvas.width-1){
                                        var colorDerecha = pixelData[(pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX+1) * bytesPerPixel)];
                                        var alfaDerecha = pixelData[((pixelOriginalY * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((pixelOriginalX+1) * bytesPerPixel))+3];
                                        alfa += (alfaDerecha * ((pesoX)));
                                        media += (colorDerecha * ((pesoX)));
                                        numeroColores += (pesoX);
                                }
                                color =  media/numeroColores;
                                alfa = alfa/numeroColores;

                                break;

                        }
                        
                        var startIdxAux = ((y) * bytesPerPixel * canvasAux.width) + ((x) * bytesPerPixel);
                        
                        pixelDataAux[startIdxAux] = color;
                        pixelDataAux[startIdxAux+1] = color;
                        pixelDataAux[startIdxAux+2] = color;
                        pixelDataAux[startIdxAux+3] = alfa;

                }
        }

        createBoguiFromCanvas(objetoBoguiActual, canvasAux, imageDataAux);
        
        
}


function calcularNuevosPixelesRotacion(antiguoPixelX, antiguoPixelY, puntoAnclajeX, puntoAnclajeY, angulo){ //Pasar el angulo en radianes
        var nuevoPixelX = puntoAnclajeX + ((antiguoPixelX-puntoAnclajeX)*Math.cos(angulo)) - ((antiguoPixelY - puntoAnclajeY)*Math.sin(angulo));
        var nuevoPixelY = puntoAnclajeY + ((antiguoPixelX-puntoAnclajeX)*Math.sin(angulo)) + ((antiguoPixelY - puntoAnclajeY)*Math.cos(angulo));

        return [nuevoPixelX, nuevoPixelY];
}

function calcularViejosPixelesRotacion(nuevoPixelX, nuevoPixelY, puntoAnclajeX, puntoAnclajeY, angulo){ //Pasar el angulo en radianes
        var viejoPixelX = puntoAnclajeX + ((nuevoPixelX-puntoAnclajeX)*Math.cos(angulo)) + ((nuevoPixelY - puntoAnclajeY)*Math.sin(angulo));
        var viejoPixelY = puntoAnclajeY - ((nuevoPixelX-puntoAnclajeX)*Math.sin(angulo)) + ((nuevoPixelY - puntoAnclajeY)*Math.cos(angulo));

        return [viejoPixelX, viejoPixelY];
}

function estaContenidoEn(x, y, UL, UR, DL, DR){ //TODO: Comprobar que en todos los casos el pixel x,y se encuentra dentro del recinto formado por las rectas que unen los 4 puntos
        
        var aY = (DL[1]-UL[1]);
        var aX = (DL[0]-UL[0]);

        var constante = (aX*UL[1])-(aY*UL[0]);

        var rectaIzquierda = (x*aY) + constante - (aX*y);

        var bY = (DR[1]-UR[1]);
        var bX = (DR[0]-UR[0]);

        var consta = (bX*UR[1])-(bY*UR[0]);

        var rectaDerecha = (x*bY) + consta - (bX*y);

        if( (rectaIzquierda >= 0) && (rectaDerecha <= 0) ){
                return true;
        }
        return false;
        
}


function rotarInterpolar(objetoBoguiActual, puntoAnclajeX, puntoAnclajeY, angulo, modo){ //Pasar el angulo en radianes

        var imageData = objetoBoguiActual.ctx.getImageData(0, 0, objetoBoguiActual.imgCanvas.width, objetoBoguiActual.imgCanvas.height);
        var canvasAux = $('<canvas/>')[0]; 

        var posiblesExtremosX = [];
        var posiblesExtremosY = [];

        var aux_UL = calcularNuevosPixelesRotacion(0, 0, puntoAnclajeX, puntoAnclajeY, angulo);
        var aux_UR = calcularNuevosPixelesRotacion(objetoBoguiActual.imgCanvas.width-1, 0, puntoAnclajeX, puntoAnclajeY, angulo);
        var aux_DL = calcularNuevosPixelesRotacion(0, objetoBoguiActual.imgCanvas.height-1, puntoAnclajeX, puntoAnclajeY, angulo);
        var aux_DR = calcularNuevosPixelesRotacion(objetoBoguiActual.imgCanvas.width-1, objetoBoguiActual.imgCanvas.height-1, puntoAnclajeX, puntoAnclajeY, angulo);

        posiblesExtremosX.push(aux_UL[0]);
        posiblesExtremosY.push(aux_UL[1]);
        posiblesExtremosX.push(aux_UR[0]);
        posiblesExtremosY.push(aux_UR[1]);
        posiblesExtremosX.push(aux_DL[0]);
        posiblesExtremosY.push(aux_DL[1]);
        posiblesExtremosX.push(aux_DR[0]);
        posiblesExtremosY.push(aux_DR[1]);

        var maximoX = Math.max.apply(Math, posiblesExtremosX);
        var maximoY = Math.max.apply(Math, posiblesExtremosY);
        var minimoX = Math.min.apply(Math, posiblesExtremosX);
        var minimoY = Math.min.apply(Math, posiblesExtremosY);

        canvasAux.height = maximoY - minimoY + 2; //Sumamos 2 por los posibles errores del parseInt
        canvasAux.width = maximoX - minimoX + 2; 
        
        var desplazamientoY = parseInt(minimoY);

        var desplazamientoX;

        if(minimoX < 0){
                desplazamientoX = parseInt(minimoX)-1;
        }else{
                desplazamientoX = 0;
        }

        var ctxAux = canvasAux.getContext("2d");

        var imageDataAux = ctxAux.createImageData(canvasAux.width, canvasAux.height);
        var pixelData = imageData.data;
        var pixelDataAux = imageDataAux.data;

        var bytesPerPixel = 4;

        for(var y = 0; y < canvasAux.height; y++) { 
                for(var x = 0; x < canvasAux.width; x++){

                        //Si esta contenido 
                        if(estaContenidoEn(x+desplazamientoX, y+desplazamientoY, aux_UL, aux_UR, aux_DL, aux_DR)){

                                var viejosPixeles = calcularViejosPixelesRotacion(x+desplazamientoX, y+desplazamientoY, puntoAnclajeX, puntoAnclajeY, angulo);
                                var viejosPixelesRedondeado = [parseInt(viejosPixeles[0]), parseInt(viejosPixeles[1])];

                                var pesoX = viejosPixeles[0] - viejosPixelesRedondeado[0];
		                        var pesoY = viejosPixeles[1] - viejosPixelesRedondeado[1];
		                        var color = 100;
		                        var alfa = 255;


                                switch(modo){

		                        case "vmp":
		                                //VECINO MAS PROXIMO
		                                var pixelCercanoX = {};
		                                var pixelCercano;

		                                if(pesoX < 0.5){
		                                    pixelCercanoX['pixel'] = "izquierda";
		                                    pixelCercanoX['valor'] = pesoX;
		                                         
		                                }else{
		                                    pixelCercanoX['pixel'] = "derecha";
		                                    pixelCercanoX['valor'] = 1-pesoX;      
		                                }

		                                var pixelCercanoY = {};

		                                if(pesoY > 0.5){
		                                    pixelCercanoY['pixel'] = "arriba";
		                                    pixelCercanoY['valor'] = pesoY;
		                                         
		                                }else{
		                                    pixelCercanoY['pixel'] = "abajo";
		                                    pixelCercanoY['valor'] = 1-pesoY;      
		                                }
		                                
		                                if(viejosPixelesRedondeado[1] == objetoBoguiActual.imgCanvas.height-1){
		                                        pixelCercanoY['pixel'] = "arriba";
		                                        pixelCercanoY['valor'] = pesoY; 
		                                }
		                                if(viejosPixelesRedondeado[0] == objetoBoguiActual.imgCanvas.width-1){
		                                        pixelCercanoX['pixel'] = "izquierda";
		                                        pixelCercanoX['valor'] = pesoX; 
		                                }
										
		                                if(pixelCercanoY.valor < pixelCercanoX.valor){
		                                        pixelCercano = pixelCercanoY.pixel;
		                                }else{
		                                        pixelCercano = pixelCercanoX.pixel;     
		                                }

		                                switch(pixelCercano){
		                                        case "arriba":
		                                        color = pixelData[((viejosPixelesRedondeado[1]) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0]* bytesPerPixel)];
		                                        alfa = pixelData[((viejosPixelesRedondeado[1]) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel)+3];
		                                        break;
		                                        case "abajo":
		                                        color = pixelData[((viejosPixelesRedondeado[1]+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel)];
		                                        alfa = pixelData[((viejosPixelesRedondeado[1]+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel)+3];
		                                        break;
		                                        case "izquierda":
		                                        color = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]) * bytesPerPixel)];
		                                        alfa = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]) * bytesPerPixel)+3];
		                                        break;
		                                        case "derecha":
		                                        color = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]+1) * bytesPerPixel)];
		                                        alfa = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]+1) * bytesPerPixel)+3];
		                                        break;
		                                }
		                        break;
		                        
		                        case "media":
		                        
		                                //MEDIA DE LOS 4 COLORES
		                                var media = 0;
		                                var numeroColores = 0;
		                                alfa = 0;


		                                
		                                var colorArriba = pixelData[((viejosPixelesRedondeado[1]) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel)];
		                                var alfaArriba = pixelData[(((viejosPixelesRedondeado[1]) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel))+3];
		                                alfa += (alfaArriba * ((1-pesoY)));
		                                media += (colorArriba * ((1-pesoY)));
		                                numeroColores += (1-pesoY);
		                                
		                                if(viejosPixelesRedondeado[1] < objetoBoguiActual.imgCanvas.height-1){
		                                        var colorAbajo = pixelData[((viejosPixelesRedondeado[1]+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel)];
		                                        var alfaAbajo = pixelData[(((viejosPixelesRedondeado[1]+1) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + (viejosPixelesRedondeado[0] * bytesPerPixel))+3];
		                                        alfa += (alfaAbajo * ((pesoY)));
		                                        media += (colorAbajo * ((pesoY)));
		                                        numeroColores += (pesoY);
		                                }
		                                
		                                var colorIzquierda = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]) * bytesPerPixel)];
		                                var alfaIzquierda = pixelData[((viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]) * bytesPerPixel))+3];
		                                alfa += (alfaIzquierda * (1-pesoX));
		                                media += (colorIzquierda * (1-pesoX));
		                                numeroColores += (1-pesoX);
		                                
		                                if(viejosPixelesRedondeado[0] < objetoBoguiActual.imgCanvas.width-1){
		                                        var colorDerecha = pixelData[(viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]+1) * bytesPerPixel)];
		                                        var alfaDerecha = pixelData[((viejosPixelesRedondeado[1] * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]+1) * bytesPerPixel))+3];
		                                        alfa += (alfaDerecha * ((pesoX)));
		                                        media += (colorDerecha * ((pesoX)));
		                                        numeroColores += (pesoX);
		                                }
		                                color =  media/numeroColores;
		                                alfa = alfa/numeroColores;

		                                break;
		                                

		                        }
						
                                var startIdxAux = (y * bytesPerPixel * canvasAux.width) + (x * bytesPerPixel);
                                //var startIdx = ((viejosPixelesRedondeado[1]) * bytesPerPixel * objetoBoguiActual.imgCanvas.width) + ((viejosPixelesRedondeado[0]) * bytesPerPixel);
                                


                                pixelDataAux[startIdxAux] = color;
		                        pixelDataAux[startIdxAux+1] = color;
		                        pixelDataAux[startIdxAux+2] = color;
		                        pixelDataAux[startIdxAux+3] = alfa;
                        }

                }
        }
        console.log(desplazamientoX);

        createBoguiFromCanvas(objetoBoguiActual, canvasAux, imageDataAux);
        
}
