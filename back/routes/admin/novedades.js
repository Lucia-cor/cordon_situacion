var express = require('express');
var router = express.Router();
var novedadesModel = require( './../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);


router.get('/', async function(req, res, next) {
  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
      const imagen = cloudinary.image(novedad.img_id, {
        widht: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...novedad,
        imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });


res.render('admin/novedades', {
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req,res,next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try{
    var img_id = '';
    if ( req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id = (await uploader (imagen.tempFilePath)).public_id;
    }
    if (req.body.titulo != "" && req.body.lugar != "" && req.body.cuerpo != ""){
      await novedadesModel.insertNovedad( {
      ...req.body,
      img_id
     });
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
        
      })
    }
  } catch (error){
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargó la actividad'
    });
  }
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect ('/admin/novedades')
});

router.get ('/modificar/:id', async (req, res, next) => {
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  res.render ('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      titulo: req.body.titulo,
      lugar: req.body.lugar,
      cuerpo: req.body.cuerpo,
      fecha: req.body.fecha,
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect ('/admin/novedades');
  } catch (error) {
    console.log(error)
    res.render ('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se ha modificado la actividad'
    });
  }
});



module.exports = router;