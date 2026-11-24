// =====================================================
// TRABAJOS REALIZADOS — 8 galerías listas para completar
//
// 1) Poné las fotos de cada trabajo en su carpeta:
//      img/trabajos/trabajo-1/   (foto-1.jpg, foto-2.jpg ...)
//      img/trabajos/trabajo-2/   y así hasta trabajo-8
// 2) Acá abajo cambiá título, fecha, categoría, descripción
//    y la descripción de cada foto (caption).
//
// date: 'AAAA-MM'  (se ordena solo, del más nuevo al más viejo)
// category: 'Sanitarismo' | 'Plomería' | 'Gas' | 'Calefacción'
// Si una foto es .jpeg o .png, cambiá la extensión en su "src".
// Para agregar o quitar fotos, copiá o borrá una línea { src... }.
// Mientras una foto no exista, se muestra "Foto pendiente de cargar".
// =====================================================
const PROJECTS = [
  {
    id: 'trabajo-1',
    title: 'Instalacion de radiador',
    date: '2025-09',
    category: 'Instalacion',
    description: 'Realizamos instalacion de sistemas de calefaccion por radiadores',
    photos: [
      { src: 'img/trabajos/trabajo-1/foto-1.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-3.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-4.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-5.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-6.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-7.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-8.jpeg' },
      { src: 'img/trabajos/trabajo-1/foto-9.jpeg' }
    ]
  },
  {
    id: 'trabajo-2',
    title: 'Instalacion de caldera Dual',
    date: '2026-09',
    category: 'Calefaccion',
    description: 'Instalacion y puesta en marcha de caldera dual',
    photos: [
      { src: 'img/trabajos/trabajo-2/foto-1.jpeg' },
      { src: 'img/trabajos/trabajo-2/foto-2.jpeg' }
    ]
  },
 
  {
    id: 'trabajo-4',
    title: 'Losa radiante',
    date: '2026-07',
    category: 'Calefacción',
    description: 'Tendido de cañeria para radiadores y losa radiante',
    photos: [
      { src: 'img/trabajos/trabajo-4/foto-2.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-5.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-6.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-7.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-8.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-9.jpg',  },
      { src: 'img/trabajos/trabajo-4/foto-10.jpg', },
      { src: 'img/trabajos/trabajo-4/foto-11.jpg', },
      { src: 'img/trabajos/trabajo-4/foto-12.jpg', },
      { src: 'img/trabajos/trabajo-4/foto-13.jpg', }
    ]
  },
  {
    id: 'trabajo-5',
    title: 'Cañeria de gas epoxi',
    date: '2026-06',
    category: 'Gas',
    description: 'Tendido de cañeria y derivaciones hacia sus medidores',
    photos: [
      { src: 'img/trabajos/trabajo-5/foto-2.jpg', },
      { src: 'img/trabajos/trabajo-5/foto-3.jpg', },
      { src: 'img/trabajos/trabajo-5/foto-4.jpg', },
      { src: 'img/trabajos/trabajo-5/foto-5.jpg', },
      { src: 'img/trabajos/trabajo-5/foto-6.jpg', },
      { src: 'img/trabajos/trabajo-5/foto-7.jpg', },
    ]
  },
  {
    id: 'trabajo-6',
    title: 'Gas fusion',
    date: '2026-05',
    category: 'Gas',
    description: 'Instalacion de gas domiciliaria con materiales de termofusion',
    photos: [
      { src: 'img/trabajos/trabajo-6/foto-1.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-2.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-3.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-4.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-5.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-6.jpg', },
      { src: 'img/trabajos/trabajo-6/foto-7.jpg', }
    ]
  },
 
  {
    id: 'trabajo-8',
    title: 'Termotanque solar',
    date: '2026-03',
    category: 'Sanitario',
    description: 'Instalacion y puesta en marcha de  termotanque solar ',
    photos: [
      { src: 'img/trabajos/trabajo-8/foto-1.jpg',  },
      { src: 'img/trabajos/trabajo-8/foto-2.jpg',  },
      { src: 'img/trabajos/trabajo-8/foto-3.jpg',  },
      { src: 'img/trabajos/trabajo-8/foto-4.jpg',  },
      { src: 'img/trabajos/trabajo-8/foto-5.jpg',  }
    ]
  },
  {
    id: 'trabajos9',
    title: 'instalacion',
    date: '2026-11',
    category: 'Sanitario',
    description: 'Instalacion de pluviales y cloacas ',
    photos: [
      { src: 'img/trabajos/trabajos9/foto1.jpg',  },
      { src: 'img/trabajos/trabajos9/foto2.jpg',  },
      { src: 'img/trabajos/trabajos9/foto3.jpg',  },
      { src: 'img/trabajos/trabajos9/foto4.jpg',  },
      { src: 'img/trabajos/trabajos9/foto5.jpg',  },
      { src: 'img/trabajos/trabajos9/foto6.jpg',  },
      { src: 'img/trabajos/trabajos9/foto7.jpg',  },
      { src: 'img/trabajos/trabajos9/foto8.jpg',  }
    ]
  }
];
