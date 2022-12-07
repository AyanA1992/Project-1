const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://quotes15.p.rapidapi.com/quotes/random/",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "24bb28c4ddmshc6ef3b0fcab9be7p12441ejsn667b60715565",
		"X-RapidAPI-Host": "quotes15.p.rapidapi.com"
	}
};

const setting = {
	"async": true,
	"crossDomain": true,
	"url": "https://random-images1.p.rapidapi.com/random?quantum=false",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "24bb28c4ddmshc6ef3b0fcab9be7p12441ejsn667b60715565",
		"X-RapidAPI-Host": "random-images1.p.rapidapi.com"
	}
};

$.ajax(setting).done(function (response) {
	console.log(response);
});


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
	$.ajax(settings).then(function (data) {
		console.log(data)
		$('.quote').text(data.content)
		$('.quote').append(`-${data.originator.name}`)
	},

		(error) => {
			console.log("bad request: ", error);
		}
	)
}

