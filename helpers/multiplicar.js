const colors = require('colors');
const fs = require('fs');

const crearArchivoTabla = async(b = 5, listar, h) => {
    try{
        
        let salida = '';

        for (let i = 1; i <= h; i++) {
            
            salida += (`${ b } x ${ i } = ${ b * i}\n`);
            
        }
        
        if (listar){
            console.log('==================='.red);
            console.log('   Tabla del', b);
            console.log('==================='.red);
            console.log(salida.green);
        }
        
        const nomArch = `./salida/tabla-${b}.txt`;

        fs.writeFileSync(nomArch, salida);
        
        return nomArch;
    } catch (e) {
        throw e;
    }
}

module.exports = {
    crearArchivoTabla
}