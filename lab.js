let i;
let text;
let j;
let k;

// //blocky
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (k < 8 ) {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//fig 1
function fig1 () {
	for (i = 1; i <= 6; i++) {
  	text = '#.......';
  	console.log(text);
	}
}
// //fig2
function fig2 () {
	for (i = 1; i <= 6; i++) {
  	text = '';
  	for (j = 1; j <= 8; j++) {
    	k = i + j ;
    	if (j === i) {
      		text = String(text) + '#';
    	} else {
      		text = String(text) + '.';
    	}
  	}
  	console.log(text)
	}
}

// fig 3
function fig3 () {
	for (i = 1; i <= 6; i++) {
  	text = '';
  	for (j = 1; j <= 8; j++) {
    	k = i + j ;
    	if (j === 3 || j === 4 || j === 5) {
      		text = String(text) + '#';
    	} else {
      		text = String(text) + '.';
    	}
  	}
  	console.log(text)
	}
}

//fig 4
function fig4 () {
	for (i = 1; i <= 6; i++) {
  		text = '';
  		for (j = 1; j <= 8; j++) {
    		k = i + j ;
    		if (j === 3 || i === 3) {
      			text = String(text) + '#';
    		} else {
      			text = String(text) + '.';
    		}
  		}
  	console.log(text)
	}
}

// fig5
function fig5 () {
	for (i = 1; i <= 6; i++) {
  		text = '';
  		for (j = 1; j <= 8; j++) {
    		k = i + j ;
    		if (j === 5 || k === 7  )  {
      			text = String(text) + '#';
    		} else {
      			text = String(text) + '.';
    		}
  		}
  	console.log(text)
	}
}

//fig6
function fig6 () {
	for (i = 1; i <= 6; i++) {
  		text = '';
  		for (j = 1; j <= 8; j++) {
    		k = i + j ;
    		if (j === i || k === 7  )  {
      			text = String(text) + '#';
    		} else {
      		text = String(text) + '.';
    	}
  	}
  	console.log(text)
	}
}

//fig7
function fig7 () {
for (i = 1; i <= 6; i++) {
  text = '';
  for (j = 1; j <= 8; j++) {
    k = i + j ;
   		if ( (j % 2 == 0 ) == false )  {
      		text = String(text) + '#';
    	} else {
      		text = String(text) + '.';
    	}
  	}
  	console.log(text)
	}
}

//fig8
function fig8 () {
for (i = 1; i <= 6; i++) {
  	text = '';
  	for (j = 1; j <= 8; j++) {
    	k = i + j ;
    	if ((j === 2 || j === 7) && (i != 1) && (i != 6) || (i === 2 || i === 5) && (j != 1) && (j != 8))  {
      		text = String(text) + '#';
    	} else {
      		text = String(text) + '.';
    	}
  	}
  	console.log(text)
	}
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Skriv en siffra mellan 1 och 8: ', (answer) => {
  // Check the user input and generate the pattern accordingly
  if (answer.toLowerCase() === '1') {
    fig1();
  } else if (answer.toLowerCase() === '2') {
    fig2();
  } else if (answer.toLowerCase() === '3') {
    fig3();
  }else if (answer.toLowerCase() === '4') {
    fig4();
  }else if (answer.toLowerCase() === '5') {
    fig5();
  }else if (answer.toLowerCase() === '6') {
    fig6();
  }else if (answer.toLowerCase() === '7') {
    fig7();
  }else if (answer.toLowerCase() === '8') {
    fig8();
  }else {
    console.log('Skriv välj en siffra mellan 1 och 8 för att visa den figuren, te.x skriv 1 för att visa figur 1' );
  }

  rl.close();
});
