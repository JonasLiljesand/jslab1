let i;
let text;
let j;
let k;

//blocky
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
// for (i = 1; i <= 6; i++) {
//   text = '#.......';
//   console.log(text);
// }

// //fig2
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (j === i) {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

// fig 3
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (j === 3 || j === 4 || j === 5) {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//fig 4
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (j === 3 || i === 3) {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

// fig5
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (j === 5 || k === 7  )  {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//fig6
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if (j === i || k === 7  )  {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//fig7
// for (i = 1; i <= 6; i++) {
//   text = '';
//   for (j = 1; j <= 8; j++) {
//     k = i + j ;
//     if ( (j % 2 == 0 ) == false )  {
//       text = String(text) + '#';
//     } else {
//       text = String(text) + '.';
//     }
//   }
//   console.log(text)
// }

//fig8
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

