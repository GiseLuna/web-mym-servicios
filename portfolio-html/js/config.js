// =====================================================
// DATOS EDITABLES DEL SITIO
// Todo lo que dice "EDITAR" es un dato de ejemplo.
// =====================================================
const SITE = {
  brand: 'MyM Servicios Sanitarios',
  tagline: 'Sanitarios · Desagues Pluviales · Gas · Calefacción',
  logo: 'img/logo.png',

  // WhatsApp: 549 + código de área sin 0 + número sin 15
  whatsappNumber: '5493435331314',              // EDITAR
  whatsappMessage: `¡Hola! 👋 ¡Bienvenido/a!

Gracias por comunicarte con nosotros.

Realizamos trabajos de instalaciones sanitarias, agua, gas y cloacas, reparaciones y mantenimiento.

🚿 Estamos para ayudarte a encontrar la mejor solución para tu hogar u obra.

¿En qué podemos ayudarte?

¡Dejanos tu consulta y te responderemos a la brevedad!`,

  instagramUrl: 'https://www.instagram.com/tu_usuario', // EDITAR
  instagramHandle: '@tu_usuario',                       // EDITAR
  email: 'mymserviciosanitarios@gmail.com',                          // EDITAR
  phone: 'mym Servicio Sanitarios',                          // EDITAR
  zone: 'Zona de trabajo: Paraná y alrededores', // EDITAR

  hero: {
    image: 'img/logomym.png',
    title: 'Soluciones para tu hogar, con responsabilidad y compromiso.',
    text: 'Servicios de sanitarismo, Desagues Pluviales, instalaciones de gas y calefacción. Calidad, responsabilidad y atención personalizada.'
  },

  about: {
    photo: 'img/nosotros.jpg',                    // EDITAR (null para ocultarla)
    title: 'Nosotros',
    paragraphs: [
      'Trabajamos con responsabilidad, compromiso y profesionalismo, priorizando la calidad de los materiales, la prolijidad y la seguridad en cada proyecto.',
    ],
    values: [
      { title: 'Calidad', text: 'Materiales y terminaciones cuidadas en cada trabajo.' },
      { title: 'Responsabilidad', text: 'Cumplimiento de normas y de lo acordado.' },
      { title: 'Cumplimiento', text: 'Respeto por los tiempos y la limpieza de la obra.' }
    ]
  }
};

const CATEGORIES = ['Sanitarios', 'Desagues Pluviales', 'Gas', 'Calefacción'];
