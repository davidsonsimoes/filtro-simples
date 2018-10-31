// var arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     { },
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
//   ];
  
//   var invalidEntries = 0;
  
//   function filterByID(obj) {
//     if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
//       return true;
//     } else {
//       invalidEntries++;
//       return false;
//     }
//   }
  
//   var arrByID = arr.filter(filterByID);
  
//   console.log('Filtered Array\n', arrByID); 
//   // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
//   console.log('Number of Invalid Entries = ', invalidEntries); 
//   // 4


let facts = [
    ['gabriel', 'endereço', 'av rio branco, 109', true],
    ['joão', 'endereço', 'rua alice, 10', true],
    ['joão', 'endereço', 'rua bob, 88', true],
    ['joão', 'telefone', '234-5678', true],
    ['joão', 'telefone', '91234-5555', true],
    ['joão', 'telefone', '234-5678', false],
    ['gabriel', 'telefone', '98888-1111', true],
    ['gabriel', 'telefone', '56789-1010', true],
  ];


// objeto com logicas de filtros disponíveis
const filtros = {
    // isNumber: ( item ) => !isNaN( item ),
    // isOdd: ( item ) => !( item % 2 ),
    // isZero: ( item ) => !( item ),
    condicaoTelefone: ( item ) => ( item[1] === 'telefone'),
    condicaoEndereco: ( item ) => {
        if( item[1] === 'endereço') {
            let ultimo = item[item.length - 1];
            console.log(ultimo);
            return true
        }
    },
    validacaoAtivos: ( item ) => (Boolean(item[3] === true)),
}

// array de filtros habilitados
const aplicarFiltros = [ 'validacaoAtivos', 'condicaoEndereco' ]

const getValidFactsToEntity = ( item ) =>
    aplicarFiltros.reduce( ( acc, fn ) => {
        return acc && filtros[ fn ]( item )
    }, true );

var resultado = facts.filter(getValidFactsToEntity);

// const getFacts = (facts) => {
// for (var i = 0; i < facts.length; i++) {
//     return getValidFactsToEntity(facts[i]) ? facts[i] : false;
// }
// }
  
console.log( resultado );
// console.log(getFacts(facts));

// var invalidEntries = 0;

// function getValidFactsToEntity (facts) {
//     if (facts[4]) {
//         return true;
//       } else {
//         invalidEntries++;
//         return false;
//       }
// };





// var doubles = facts.map(function(facts) {
//     return facts;
// });

// var resultFacts = facts.filter(getValidFactsToEntity);
  
// console.log('Filtered Array\n', resultFacts); 
// // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

// console.log('Number of Invalid Entries = ', invalidEntries); 

// // console.log(getValidFactsToEntity(facts));
