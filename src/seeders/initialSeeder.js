const { Producto, Fabricante, Componente } = require('../models/index');

async function initialDatosCreados() {
  try {
    const producto_1 = await Producto.create({
      nombre: 'Celular POCO C65',
      descripcion: 'Sus 2 cámaras traseras de 50 Mpx/2 Mpx te permitirán tomar imágenes con más detalles.',
      precio: 419999.99,
      pathImg: 'https://picsum.photos/200',
    });
    const producto_2 = await Producto.create({
      nombre: 'Tablet Tab A9',
      descripcion: 'Disfruta de una experiencia visual inmersiva con la pantalla de alta frecuencia de actualización de la Tab A9.',
      precio: 311999.99,
      pathImg: 'https://picsum.photos/200',
    });
    const producto_3 = await Producto.create({
      nombre: 'Notebook Pavilion 15',
      descripcion: 'Notebook Pavilion 15-eg2529la Procesador Intel Core™ i5 de 12.ª generación.',
      precio: 1349999.99,
      pathImg: 'https://picsum.photos/200',
    });
    const fabricante_1 = await Fabricante.create({
      nombre: 'AMD',
      direccion: 'Estados Unidos',
      numeroContacto: '79031078',
      pathImgPerfil: 'https://picsum.photos/200',
    });
    const fabricante_2 = await Fabricante.create({
      nombre: 'Asus',
      direccion: 'China',
      numeroContacto: '2357001',
      pathImgPerfil: 'https://picsum.photos/200',
    });
    const fabricante_3 = await Fabricante.create({
      nombre: 'Intel',
      direccion: 'Estados Unidos',
      numeroContacto: '12157500',
      pathImgPerfil: 'https://picsum.photos/200',
    });
    const componente_1 = await Componente.create({
      nombre: 'Memoria RAM Fury Beast DDR4',
      descripcion: 'Con su tecnología DDR4, mejorará el desempeño de tu equipo, aumentará la fluidez y la velocidad en la transferencia de datos.',
    });
    const componente_2 = await Componente.create({
      nombre: 'Microprocesador Ryzen 5',
      descripcion: 'En este producto encontrarás los núcleos, que son los encargados de ejecutar las instrucciones y actividades que le asignás a tu dispositivo.',
    });
    const componente_3 = await Componente.create({
      nombre: 'Batería Hkx 401015',
      descripcion: 'Batería recargable modelo Hkx 401015, voltaje: 3,7V, mah: 60, voltaje de carga: 3,7',
    });

    await producto_1.addFabricantes([fabricante_1, fabricante_2]);
    await producto_2.addFabricantes([fabricante_2]);
    await producto_3.addFabricantes([fabricante_1, fabricante_3]);
    await producto_1.addComponentes([componente_1, componente_3]);
    await producto_2.addComponentes([componente_1, componente_2]);
    await producto_3.addComponentes([componente_3]);
    console.log('Los datos y relaciones fueron creados exitosamente!')
  } catch (error) {
    console.log('Error al crear los datos. ', error);
  }
}

module.exports = initialDatosCreados;
