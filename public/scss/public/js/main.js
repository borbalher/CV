$(document).ready(function() {

  var cssString;
  $('#parse').click(function() {
    editorInput = $(".CodeMirror")[0].CodeMirror
    editorOutput = $(".CodeMirror")[1].CodeMirror

    try {
      tree = scss.parse(editorInput.getValue());
      createSymbolTable(tree);
      var cssStr = "";
      cssStr = cssStr + getAtKeyRulesCSS(tree);
      recorrerBloques(tree);
      bloquesFunciones();
      cssStr = cssStr + getBloquesCSS();
      editorOutput.setValue(cssStr);
      $( '#error').removeClass( "unhidden" ).addClass( "hidden" );
      $( '#download').removeClass( "hidden" ).addClass( "unhidden" );
    } catch (e) {
      editor = $(".CodeMirror")[1].CodeMirror
      editor.setValue("");
      $( '#download').removeClass( "unhidden" ).addClass( "hidden" );
      $('#error').removeClass("hidden").addClass("unhidden");
      $('#error').html('<pre>\n' + String(e) + '\n</pre>');
    }
  });


  $('#wipe').click(function() {
    editor = $(".CodeMirror")[0].CodeMirror
    editor.setValue("");

  });  

  $('#download').click(function() {
	downloadContent = $(".CodeMirror")[1].CodeMirror;
	var textToWrite = editorOutput.getValue();
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "scssGeneratedCode.css";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();    

  }); 

  
});


