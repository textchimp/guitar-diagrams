// Check out the SVGuitar library at https://github.com/omnibrain/svguitar 👍

const config = {
  // style: 'handdrawn',
  frets: 12,
  tuning: [ 'D', 'A', 'D', 'F', 'A', 'D' ]
}


const optColor = '#666';
// const optColor = '#000';
const root = {color: optColor, text: 'O', className: 'root' };
const third = {text: '3', color: 'orange', className: 'third'};
const fifth = {text: '5', color: 'red', className: 'fifth'};
var notes = new svguitar.SVGuitarChord('body')
      .chord({
        fingers: [

          [1, 2],
          [1, 3, third],
          [1, 5],
          [1, 7, fifth],
          [1, 8],
          [1, 10],
          [1, 12, root],


          [2, 1],
          [2, 3],
          [2, 5, root],
          [2, 7],
          [2, 8, third],
          [2, 10],
          [2, 12, fifth],

          // F
          [3, 2],
          [3, 4, fifth],
          [3, 5],
          [3, 7],
          [3, 9, root],
          [3, 11],
          [3, 12, third],

          [4, 2],
          [4, 3, third],
          [4, 5],
          [4, 7, fifth],
          [4, 8],
          [4, 10],
          [4, 12, root],


          [5, 1],
          [5, 3],
          [5, 5, root],
          [5, 7],
          [5, 8, third],
          [5, 10],
          [5, 12, fifth],

          [6, 2],
          [6, 3, third],
          [6, 5],
          [6, 7, fifth],
          [6, 8],
          [6, 10],
          [6, 12,  root],

          // [3, 3, '2'], // finger at string 1, fret 2, with text '2'
          // [2, 3, { text: '3', color: '#F00' }], // finger at string 2, fret 3, with text '3', colored red
          // [3, 3],
          // [6, 'x']
        ],
        barres: [],
      })
      .configure({
        ...config,
        title: 'D Minor',
        // position: 4,  // puts '4fr' at 1st drawn fret,
        // fretLabelPosition: 'left',  // on the left
        // fixedDiagramPosition: false
      })
      .draw();


// Rotate all the scale degree note text (assumes SVG is already rotated with CSS)
const textNodes = document.querySelectorAll( 'text.root, text.third, text.fifth' );
textNodes.forEach( node => {
    const xCenter = node.x.baseVal[0].value;
    const yCenter = node.y.baseVal[0].value;
    node.setAttribute( 'transform', `rotate(90, ${ xCenter }, ${ yCenter })` );
    // node.previousSibling.setAttribute('stroke-width', '6'); // stronger circle outline
});
