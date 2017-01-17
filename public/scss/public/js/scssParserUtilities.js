var bloquesSCSS;
var symbolTableActual;
var cssString;

function estaDefinidaVar(id){
	var contenido = symbolTableActual.vars[id];
	if(contenido === undefined){
	   return false;   
	}else{
	   return true;        
	}
}

function existeBloque(id){
	var contenido = symbolTableActual.blocks[id];
	if(contenido === undefined){
	   return null;   
	}else{
	   return contenido;        
	}
}

function createSymbolTable(tree){
 
        var symbolTable = {name: "raiz", father: null, vars: {}, blocks: {}};
        symbolTableActual = symbolTable;
        /*SE AÑADEN LAS VARIABLES A LA TABLA DE VARIABLES Y SE BORRA EL NODO DEL ARBOL*/
        if(tree.hasOwnProperty("BloqueSCSS") && tree.BloqueSCSS !== undefined){
                if(tree.BloqueSCSS.hasOwnProperty("VarList") && tree.BloqueSCSS.VarList !== undefined){
                        for (var i in tree.BloqueSCSS.VarList){
                                       if(!estaDefinidaVar(tree.BloqueSCSS.VarList[i].atribute)){
                                             symbolTable.vars[tree.BloqueSCSS.VarList[i].atribute] = tree.BloqueSCSS.VarList[i].value;  
                                       }else{
 						throw("Var "+tree.BloqueSCSS.VarList[i].atribute+" is already defined");
                                       }
                                            
                        }
                delete tree.BloqueSCSS.VarList;
                }                                      
        }
        tree.BloqueSCSS.symbolTable = symbolTable;
        return tree;
}

function getAtKeyRulesCSS(tree){
         
 	var atKeyStr="";
        if(tree.hasOwnProperty("BloqueSCSS") && tree.BloqueSCSS !== undefined){
           if(tree.BloqueSCSS.hasOwnProperty("atKeyRules") && tree.BloqueSCSS.atKeyRules !== undefined){
                        var atKeyRules = tree.BloqueSCSS.atKeyRules.reverse();
                        for (var i in atKeyRules){
                            atKeyStr = atKeyStr + atKeyRules[i].type+" "+atKeyRules[i].value+"\n";  
                                            
                        }
                        atKeyStr = atKeyStr + "\n";
           }                                               
        }

        return atKeyStr;
}

function recorrerBloques(tree){
        if(tree.hasOwnProperty("BloquesNormales") && tree.BloquesNormales !== undefined){
                        for (var i in tree.BloquesNormales){
				var bloque = existeBloque(tree.BloquesNormales[i].selector);
				if(bloque==null){
				        bloque = {name: tree.BloquesNormales[i].selector, father: null, atributos: [],funciones: []}; 
					symbolTableActual.blocks[bloque.name] = bloque;       
				}

                            	getBlockContent(tree.BloquesNormales[i].BlockContent, bloque.name);                     
                        }                                      
        }

        return tree;
}
function getBlockContent(node, blockName){
        var bloque = existeBloque(blockName);

	for (var i in node){
		if( node[i].type == "ATRIBUTOS"){
		      var atributo = node[i].atribute+" : ";
                      var values = "";
		      if(node[i].value[0].type == "SCSSFUNCTION"){
                             values = callSCSSFunctionAtribute(node[i].value[0]);
		      }else{
				if( Object.prototype.toString.call( node[i].value ) === '[object Array]' ) {
					var valuesArray = node[i].value;
					for (var j in valuesArray){
						/*SI ES UNA VARIABLE LA SUSTITUIMOS*/
						var isVariable = valuesArray[j];
						if(valuesArray[j]==","){
							values = values + valuesArray[j];
						}else{
							var res = isVariable.match(/\$(-|_|[a-zA-Z])(-|_|[a-zA-Z0-9])*/gi);
							if(res != null){
								if(estaDefinidaVar(res[0])){
								    values = values + symbolTableActual.vars[res[0]]+" ";
								}else{
								    throw("Var "+res[0]+" is not declared");
								}
							}else{
								var next = parseInt(j+1);
								if(valuesArray[next]=="," || valuesArray[next]===undefined ) values = values + valuesArray[j];
		                                                else values = values + valuesArray[j]+" ";
				 				 	 
							}	
						}
		
					}
				}else{
						/*SI ES UNA VARIABLE LA SUSTITUIMOS*/
						var isVariable = node[i].value;
						var res = isVariable.match(/\$(-|_|[a-zA-Z])(-|_|[a-zA-Z0-9])*/gi);
						if(res != null){
							if(estaDefinidaVar(res[0])){
							    values = values + symbolTableActual.vars[res[0]]+" ";
							}else{
							    throw("Var "+res[0]+" is not declared");
							}
						}else{
			 				values = values + node[i].value; 	 
						}		
				}

		      }

                      atributo = atributo + values + ";";
                      bloque.atributos.push(atributo);
		}else if(node[i].type == "SCSSFUNCTION"){
                      bloque.funciones.push(node[i]);
                }else{
			var nombre;
			if(node[i].mode == "%%"){
			     nombre = bloque.name+ " "+node[i].selector;
			}else if(node[i].mode == "%%&"){
			     nombre = bloque.name+node[i].selector;
			}
			var bloqueHijo = existeBloque(nombre);
			if(bloqueHijo==null){
			    bloqueHijo = {name: nombre, father: bloque, atributos: [],funciones: []}; 
			    symbolTableActual.blocks[nombre] = bloqueHijo;    
			}
                        getBlockContent(node[i].BlockContent,bloqueHijo.name);
                        
		}

	}                          

}


function bloquesFunciones(){      
        for (var i in symbolTableActual.blocks){
		if(symbolTableActual.blocks[i].hasOwnProperty("funciones") && symbolTableActual.blocks[i] !== undefined){
		    for (var j in symbolTableActual.blocks[i].funciones){
                    	callBlockFunctions(symbolTableActual.blocks[i].funciones[j], symbolTableActual.blocks[i].name);
                    }
		}                
        }
}

function getBloquesCSS(){
	var css="";         
        var bloques = symbolTableActual.blocks;
        for (var i in bloques){
            var bloque;
            var selector =bloques[i].name+"{\n";
	    var atributosStr = "";
            var atributos = bloques[i].atributos.reverse();
            for (var j in atributos){    
		atributosStr = atributosStr + "\t"+atributos[j]+"\n";
	    }      
	    bloque = selector + atributosStr +"}\n";
            css = css + bloque+"\n";                  
        }
	return css
}

function callBlockFunctions(node,id){
	var functionId = node.id;

	if(existFunction(functionId)){
		var numberOfParamsFunctionId = getNumberParams(functionId);
		var functionParams = [];
                var numberOfParams = 0;
 
                if( Object.prototype.toString.call( node.value ) === '[object Array]' ) {
		        var nodeParams = node.params.reverse();
			for (var j in nodeParams){
			     if(nodeParams[j]!=","){
				  numberOfParams++;
				  functionParams.push(nodeParams[j]);
			     }
			}
                }else{
			numberOfParams = 1;
			functionParams.push(node.params);
		}
		
		if(numberOfParams == numberOfParamsFunctionId ){
		      resultSCSSBlockFunction(id,functionId,functionParams);
		}else{
			throw ("Error, the function \""+functionId+"\" uses "+numberOfParamsFunctionId+" params");
		}        
        }else{
		throw ("Error, the function \""+functionId+"\" doesn't exists");
	}


}


function callSCSSFunctionAtribute(node){
	var functionId = node.id;

	if(existFunction(functionId)){
		var numberOfParamsFunctionId = getNumberParams(functionId);
		var functionParams = [];
                var numberOfParams = 0;
 
                if( Object.prototype.toString.call( node.params ) === '[object Array]' ) {
		        var nodeParams = node.params.reverse();
			for (var j in nodeParams){
			     if(nodeParams[j]!=","){
				  numberOfParams++;
				  functionParams.push(nodeParams[j]);
			     }
			}
                }else{
			numberOfParams = 1;
			functionParams.push(node.params);
		}

		
		if(numberOfParams == numberOfParamsFunctionId ){
		       return resultSCSSFunction(functionId,functionParams);
		}else{
			throw ("Error, the function \""+functionId+"\" uses "+numberOfParamsFunctionId+" params");
		}        
        }else{
		throw ("Error, the function \""+functionId+"\" doesn't exists");
	}


}

