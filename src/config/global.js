export default {
  global: {
    componenteFormativo:
      'Procedimientos para el endurecimiento de vitroplantas',
    descripcionCurso:
      'El desarrollo de este componente formativo, pretende articular los procedimientos asociados al crecimiento vegetal y a las variables de calidad, que requieren las especies para lograr la supervivencia de las vitroplantas, a estados de desarrollo más avanzados y autotróficos; lo anterior, se pretende, a través del conocimiento y la implementación de elementos que intervienen en estas etapas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
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
        titulo: 'Fundamentos básicos para el endurecimiento',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Consolidación de espacios para el endurecimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
  complementario: [
    {
      tema: 'Consolidación de espacios para el endurecimiento',
      referencia:
        'Torres. C. (2012). <i>Seguridad industrial. Legislación en seguridad y salud ocupacional en Colombia</i>. Universidad del Norte.',
      tipo: 'Documento ',
      link: 'https://manglar.uninorte.edu.co/handle/10584/2220#page=8',
    },
    {
      tema: 'Consolidación de espacios para el endurecimiento',
      referencia:
        'Chavéz, A. N, et al. (2008). <i>Desinfección de Suelos y Sustratos en la Agricultura de la Universidad Autónoma de Chapingo</i>.',
      tipo: 'Libro',
      link:
        'https://www.researchgate.net/publication/282157114_Desinfeccion_de_Sustratos_Suelos_y_Equipos_en_la_agricultura_metodos_y_equipos',
    },
    {
      tema: 'Consolidación de espacios para el endurecimiento',
      referencia:
        'CON LO NUESTRO TV. (2015). <i>Endurecimiento de las plantas in vitro de plantanera. Con Lo Nuestro 22</i>.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=6stWSHPWJh4',
    },
  ],
  glosario: [
    {
      termino: 'Germinación',
      significado:
        'es el proceso inicial vegetal a partir del cual el desarrollo del embrión inicia su crecimiento.',
    },
    {
      termino: 'Fotosíntesis',
      significado:
        'proceso mediante el cual las plantas fabrican su propio alimento mediante la transformación de energía lumínica en energía química. ',
    },
    {
      termino: 'Reproducción asexual',
      significado:
        'mecanismo de reproducción en las plantas y otros seres vivos sin intervención de células sexuales. ',
    },
    {
      termino: 'Fisiológico',
      significado: 'hace referencia a funciones internas de los seres vivos. ',
    },
    {
      termino: 'Lámina foliar',
      significado:
        'estructura fotosintética de las plantas, en la que recae mayormente el proceso de fotosíntesis, y otros procesos como el intercambio gaseoso. ',
    },
    {
      termino: 'Metabolismo',
      significado:
        'son todos los procesos y reacciones de tipo químicas en la transformación de energía en los seres vivos. ',
    },
    {
      termino: 'Células somáticas',
      significado:
        'cualquier célula estructural y funcional diferente a las células sexuales. ',
    },
    {
      termino: 'Solarización',
      significado:
        'técnica de desinfección de suelos y sustratos que utiliza principios termodinámicos en su aplicación. ',
    },
    {
      termino: 'Reproducción sexual',
      significado:
        'mecanismo que utilizan los seres vivos para garantizar la especie, en los animales interfieren las células sexuales.',
    },
    {
      termino: 'Macroelementos',
      significado:
        'son el conjunto de elementos que participan activamente de la nutrición en las plantas. ',
    },
    {
      termino: 'Microelementos',
      significado:
        'son elementos identificados y absorbidos por las plantas en menores cantidades, pero que son condicionales en el funcionamiento de los macroelementos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arrieta, et al. (2017). <i>Manual de Prácticas de la Unidad de Aprendizaje Propagación de Plantas</i>. Universidad Autónoma de Nayarit.',
      link: 'https://www.ecorfan.org/textbooks/P-Manual/PM%20TI/PM%20TI.pdf',
    },
    {
      referencia:
        'Avendaño, M. (2016). La reproducción de las plantas: costos y beneficios. <i>Revista Ciencia</i>, (67), p. 82-83.',
      link:
        'https://www.revistaciencia.amc.edu.mx/images/revista/67_4/PDF/ReproduccionPlantas.pdf  ',
    },
    {
      referencia:
        'Cedillo, P. E. (2019).<i> Manual de Prácticas de la Unidad de aprendizaje Propagación de plantas</i>. Universidad Nacional Autónoma de México.',
      link:
        'http://planificacionfesaragon.com/sites/default/files/manuales/Manual%20de%20Control%20de%20Clima.pdf   ',
    },
    {
      referencia:
        'Díaz, B. y Jordán, V. M. (2018). <i>Evaluación de Tratamiento Térmico con vapor de agua para desinfección de sustrato</i>. [Tesis de grado, Universidad de la República].',
      link:
        'https://www.colibri.udelar.edu.uy/jspui/bitstream/20.500.12008/29434/1/D%C3%ADazBernaschinaCamila.pdf',
    },
    {
      referencia:
        'Espinosa, et al. (2019). Influencia del tamaño de las plantas in vitro y tipo de sustrato en la aclimatación de Morus alba L. <i>Revista Pastos y Forrajes</i>, 42 (1).',
      link: 'https://www.redalyc.org/articulo.oa?id=269159592003',
    },
    {
      referencia:
        'Gayosso, et al. (2016). Sustratos para producción de flores. <i>Revista Agrociencia</i>, 50(5).',
      link:
        'https://www.scielo.org.mx/pdf/agro/v50n5/1405-3195-agro-50-05-617.pdf ',
    },
    {
      referencia:
        'Resolución 2400 de 1979. [Ministerio de Trabajo y Seguridad Social]. Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo. 22 mayo de 1979. ',
      link:
        'https://www.ilo.org/dyn/travail/docs/1509/industrial%20safety%20statute.pdf',
    },
    {
      referencia:
        'Salgado, J. M, & Peñaranda, L. V. (2019). Modificaciones en medios de cultivo aplicadas en conservación y producción <i>in-vitro<i> de orquídeas. <i>Revista Colombiana De Investigaciones Agroindustriales</i>, 6(1), p. 16–28.',
      link: 'https://doi.org/10.23850/24220582.1815',
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
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
