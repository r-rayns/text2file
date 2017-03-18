javascript:(function(){
	var textFile = null;
	var html = "";

	/*Creates a new blob with the highlighted text*/
	function makeTextFile (text, buttonRef) {
		var data = new Blob ([text], {type: 'text/plain'});

		if (textFile !== null) {
			window.URL.revokeObjectURL(textFile);
		};

		textFile = window.URL.createObjectURL(data);
		/*Set the file name to Date.now*/
		buttonRef.download = Date.now()+'.txt';
		return textFile;
	};

	function closePopup(){
		var popup = document.getElementById('popup');
		popup.style.display = 'none';
	}

	if(document.getElementById("popup")===null) {
		document.body.insertAdjacentHTML('beforeend', `
		<div id='popup' style='position:fixed; top:50%; left:50%; margin-left:-200px; height:100px;
		 width:400px; background-color:rgb(51, 51, 51); text-align: center; z-index:999; border-radius: 10px;'>
			<span style='display:block; vertical-align:middle; line-height:100px;'>
		 		<a download='snippet.txt'} id='downloadlink' style='color:#FFFFFF; padding:5px; margin-right:5px; border-radius: 5px; text-transform: uppercase;
		 		font-weight: 600; border-color: #3D9970; background-color: #3D9970;'>
		 			<span style='font-family: sans-serif; '>Save</span>
				</a>
		 		<a id='cancelSave' style='color:#FFFFFF; padding:5px; margin-right:5px; border-radius: 5px; text-transform: uppercase;
		  	font-weight: 600; border-color: #FF4136; background-color: #FF4136; cursor: pointer'>
		  		<span style='font-family: sans-serif; '>Cancel</span>
				</a>
		  </span>
		  </div>`);
	}
	else {
		var popup = document.getElementById('popup');
		/*it's loaded just reopen...*/
		popup.style.display = 'inline';
	}

	html = window.getSelection().toString();
	var saveBtn = document.getElementById('downloadlink');
	var cancelBtn = document.getElementById('cancelSave');
	cancelBtn.onclick=function(){closePopup()};
	saveBtn.href = makeTextFile(html, saveBtn);
	saveBtn.onclick = function(){closePopup();};
})()
