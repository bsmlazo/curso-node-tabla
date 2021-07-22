const { crearArchivoTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , b = 5] = arg3.split('=');

// console.log( b );

// console.log(process.argv);
//  console.log(argv);

//console.log('base: yargs', argv.base);

// const b = 1;

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( nomArch => console.log(nomArch, 'creado') )
    .catch( err => console.log(err) );