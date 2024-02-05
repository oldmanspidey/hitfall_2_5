

// function CopyToClip() {
//   // Get the text field
//   var copyText = document.getElementById('code');

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);
  
//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }



// function CopyToClip() {

// 	let copyText = document.getElementById('code').innerHTML;

// 	navigator.clipboard.writeText(copyText);

// 	console.log('Content copied to clipboard');

// }

function CopyToClip(section) {

	let copyText = document.querySelector(`.sect[id="${section}"] .code`).innerHTML;

	navigator.clipboard.writeText(copyText);

	// console.log('Content copied to clipboard');

	alert("Copied the text: " + copyText);

}