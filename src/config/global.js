export default {
  global: {
    componenteFormativo:
      'Plan de producción y evaluación de resultados de la empresa',
    descripcionCurso:
      'El proceso productivo en una empresa toma vital importancia en su actividad misional; comprender las exigencias del mercado en contraste con la capacidad instalada para atenderlas aportará elementos de juicio para ejecutar la producción en función de una estimación del volumen de ventas esperado. Finalmente, refinar los procesos a través de un plan de mejora maximizará la generación de valor.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Presupuesto de producción',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Distribución de recursos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Órdenes de producción',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Capacidad instalada',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Trabajo en equipo',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Informes de ejecución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estructura',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Análisis',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Demanda del producto',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Teoría de la oferta y la demanda',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: ' Cálculo de la demanda',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plan de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Hallazgos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Pasos para implementarlo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Acciones correctivas y de mejora',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2016). Planes de mejoramiento. Departamento Administrativo del Servicio Civil Distrital.',
      link: 'https://www.serviciocivil.gov.co/planes-de-mejoramiento',
    },
    {
      referencia: 'Aneca. (s.f.). Plan de mejoras. Herramienta de trabajo.',
      link:
        'http://www.uantof.cl/public/docs/universidad/direccion_docente/15_elaboracion_plan_de_mejoras.pdf ',
    },
    {
      referencia:
        'Asana. (2020). ¿No conocías los diagramas de Gantt? Comienza aquí. ',
      link: 'https://asana.com/es/resources/gantt-chart-basics',
    },
    {
      referencia:
        'Guarnizo, C. F., y Cárdenas, S. M. (2015). Costos por órdenes de producción y por procesos. La Salle.',
      link:
        'https://es.scribd.com/book/485288049/Costos-por-ordenes-de-produccion-y-por-procesos',
    },
    {
      referencia:
        'Coworkingfy. (s.f.). Técnicas de trabajo en equipo | 4 métodos para lograr la unión. Coworkingfy.',
      link: 'https://coworkingfy.com/tecnicas-trabajo-en-equipo/',
    },
    {
      referencia:
        'Burbano A. (2006). Costos y presupuestos. Ediciones Uniandes. ',
      link:
        'https://es.scribd.com/read/436270130/Costos-y-presupuestos-Segunda-edicion ',
    },
  ],
  glosario: [
    {
      termino: 'Producción',
      significado: 'elaboración o transformación de un producto.',
    },
    {
      termino: 'Línea de producción',
      significado:
        'secuencia de operaciones asociadas a la elaboración de un producto.',
    },
    {
      termino: 'Diagrama',
      significado: 'representación gráfica de una idea o proceso.',
    },
    {
      termino: 'Cronograma',
      significado:
        'representación gráfica de actividades dispuestas en un periodo de tiempo.',
    },
    {
      termino: 'Demanda',
      significado:
        'cantidad exigida de un bien o servicio por sus consumidores.',
    },
    {
      termino: 'Informe',
      significado: 'documento elaborado con el fin de compartir información.',
    },
    {
      termino: 'Oferta',
      significado: 'ofrecimiento de productos para la venta.',
    },
  ],
  complementario: [
    {
      texto:
        'Saber Programas. (2017). ¿Cómo crear un diagrama de Gantt en Excel? [ Cronograma ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=chR6kx4btDQ',
    },
    {
      texto:
        'Padilla F. (2016). Costos por órdenes de producción. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xQG946KNQvg',
    },
    {
      texto:
        'Coworkingfy. (2019). Técnicas de trabajo en equipo | 4 métodos para lograr la unión. [Video]. YouTube. ',
      tipo: 'Artículo web',
      link: 'https://coworkingfy.com/tecnicas-trabajo-en-equipo/ ',
    },
    {
      texto: 'Sevilla A. (2015). Ley de oferta y demanda. Economipedia.com',
      tipo: 'Artículo web',
      link:
        'https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Avilan Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la granja. Regional Tolima',
      },
      {
        nombre: 'Lady Johanna Cruz',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la granja. Regional Tolima',
      },
      {
        nombre: 'Diana Marcela Luis Vásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de gestión industrial.Regional Distrito Capital',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de gestión industrial.Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Cáceres',
          'Gilberto Junior Rodríguez Rodríguez',
          'José Jaime Luis Tang Pinzón',
          'Carlos Eduardo Garavito Parada',
        ],
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
