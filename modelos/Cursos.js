const mongoose=require('mongoose');

//Schema define la estrucutra de la base de datos
const Schema= mongoose.Schema;

const cursosSchema= new Schema({

    titulo: {
        type: String,
      
        
    },
    subtitulo:{
        type: String,
    },
    descri: {
        type: String,
    },
    urlImg:{
        type: String,
    },
    urlModal:{
        type: String,
    },
     

});
//precisamos exportar para usala nos controladores e colcoar e tirar coisas


module.exports =mongoose.model('Cursos',cursosSchema)