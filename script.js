const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://inspiring-quotes.p.rapidapi.com/random?author=Albert",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "24bb28c4ddmshc6ef3b0fcab9be7p12441ejsn667b60715565",
		"X-RapidAPI-Host": "inspiring-quotes.p.rapidapi.com"
	}
};
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// URL:"https://motivational-quotes1.p.rapidapi.com/motivation"
/////^API Link////

// promise.then(
//       (data) => {
//         console.log(data);
//       },
//       (error) => {
//         console.log("bad request: ", error);
//       }
//     );



/////////elements/////////
const $btn = $('#getQuoteBtn'); 


///////////evnt
$btn.on('click', handleGetData) 
/////////functions////////

function handleGetData() {
$.ajax(settings).then(function(data){
console.log(data)
}
)}
