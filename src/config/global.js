export default {
  global: {
    componenteFormativo: 'Mejora continua e indicadores de evaluación',
    descripcionCurso:
      'Este componente formativo apunta hacia determinar oportunidades de mejora continua y al proceso productivo según estándares de evaluación, los cuales se analizan dentro del marco de los principios de manufactura esbelta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        titulo: 'Valor agregado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Qué es el valor agregado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Comportamientos del valor agregado',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Actividades que generan valor',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Beneficios de implementar metodología de valor agregado',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Concepto de mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Oportunidades de mejora',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Técnicas o herramientas de mejoramiento continuo',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Conocer los formatos para la documentación de mejoras de procesos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'El factor humano en la implementación del <em>Lean</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Conceptos de liderazgo y trabajo de equipo, Diferencias y características',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Desarrollo de un equipo de trabajo',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Comunicación en el equipo de trabajo',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Medida de resultados <em>Lean</em> a través de indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Criterios a tener en cuenta para implantar indicadores',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Directrices básicas para definir indicadores',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Indicadores de medición para analizar la evaluación',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.1 Qué es el valor agregado.',
      referencia:
        'Godínez, A. M. (2015). Que es el valor agregado para los procesos Esbeltos y mejora continua',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4NdUrcjbx7E',
    },
    {
      tema: '2. Concepto de mejora continua.',
      referencia: 'Procem Consultores. (s.f.). La mejora continua.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E1pfwFCZo-U',
    },
    {
      tema: '4. El factor humano en la implementación de Lean',
      referencia:
        'Madriz, C. E., Sánchez, M., Sánchez, O. & Hernández-Granados, J. B. (2021). Influencia de la intervención humana en procesos modernos de manufactura: un enfoque de simulación de procesos centrado en el factor humano. Revista Tecnología En Marcha, 35(1), Pág. 3–13.',
      tipo: 'Artículo',
      link: 'https://revistas.tec.ac.cr/index.php/tec_marcha/article/view/5358',
    },
    {
      tema: '5. Medida de resultados Lean a través de indicadores',
      referencia:
        'Daniel, R., Paz, C. & Gómez, G. (s.f.). Administración de la calidad total.',
      tipo: 'Libro',
      link: 'http://nulan.mdp.edu.ar/1614/1/09_administracion_calidad.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Control Visual',
      significado:
        'Se utilizan con el fin de tener una comunicación visual facilitándole a todos los empleados el avance de las acciones de mejora.',
    },
    {
      termino: 'Heijunka',
      significado:
        'Sirve para planificar y nivelar la demanda de los clientes, hacia la producción en flujo continuo.',
    },
    {
      termino: 'Kaizen',
      significado:
        'Filosofía japonesa KAIZEN, cuyo nombre está compuesto de las palabras: KAI – Cambio y ZEN – bondad o bueno. Por lo que se interpreta como “bondad del cambio” o un “cambio bueno.',
    },
    {
      termino: 'Kanban',
      significado:
        'Sistema de control sincronizada de la producción basada en tarjetas.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'Es influir con seguridad en la toma y desarrollo de decisiones en un grupo determinado dirigiendo al grupo a la meta que esta propuesta para lograr.',
    },
    {
      termino: 'SMED',
      significado:
        'Es un sistema que se utiliza para reducir los tiempos de preparación.',
    },
    {
      termino: 'Trabajo de equipo',
      significado:
        'Es la capacidad que tiene un conjunto de personas para trabajar en unión con el fin de lograr el mismo objetivo que se tiene en común.',
    },
    {
      termino: 'Valor agregado',
      significado:
        'Es la utilidad adicional que tiene un bien o servicio como consecuencia de haber sufrido un proceso de transformación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alvarado Ramírez, K. & Pumisacho, Á. V. (2017). Prácticas de mejora continua, con enfoque Kaizen, en empresas del Distrito Metropolitano de Quito: Un estudio exploratorio. Intangible Capital, vol. 13, núm. 2, pp. 479-497. Universitat Politècnica de Catalunya Terrassa.',
      link: '',
    },
    {
      referencia:
        'Arrieta Posada, J. G. (2007). Interacción y conexiones entre las técnicas 5s, SMED y Poka Yoke en procesos de mejoramiento continuo. Tecnura, vol. 10, núm. 20, pp. 139-148. Universidad Distrital Francisco José de Caldas.',
      link: '',
    },
    {
      referencia:
        'Brigham, E. & Houston, J. (2006). Fundamentos de Administración Financiera. (10ª ed.). Cengage Learning Editores. pp. 831.',
      link: '',
    },
    {
      referencia:
        'Canseco Melchor, F. & Ojeda García, A. (2016), Comunicación Laboral: Una Propuesta Estratégica Para Facilitar El Quehacer De Los Equipos De Trabajo. Enseñanza e Investigación en Psicología, vol. 21, núm. 2, pp. 183- 194. Consejo Nacional para la Enseñanza en Investigación en Psicología A.C. Xalapa.',
      link: '',
    },
    {
      referencia: 'Consulting Group. (s.f.). Control Visual.',
      link:
        'https://spcgroup.com.mx/control-visual/#:~:text=Control%20Visual%20es%20una%20t%C3%A9cnica,textos%20u%20otras%20instrucciones%20escritas',
    },
    {
      referencia:
        'Chirinos, E., Rivero, E., Goyo, A., Méndez, E. & Figueredo, C. (2008). Indicadores de gestión para medir la eficiencia hospitalaria. Negotium, vol. 4, núm. 10, pp. 50-63. Fundación Miguel Unamuno y Jugo Maracaibo.',
      link: '',
    },
    {
      referencia:
        'Favela Herrera, M., Escobedo, M. T., Romero, R. & Hernández, J. (2019). Herramientas de manufactura esbelta que inciden en la productividad de una organización: modelo conceptual propuesto. Revista Lasallista De Investigación, Vol. 16 No 1–2019.',
      link: '',
    },
    {
      referencia:
        'García, M., Ráez, L., Castro, M., Vivar, L. & Oyola, L. (2003). Sistema de Indicadores de Calidad I Industrial. Data, vol. 6, núm. 2, pp. 63-65. Universidad Nacional Mayor de San Marcos Lima.',
      link: '',
    },
    {
      referencia:
        'García, A. (2016). Cultura de servicio en la optimización del servicio al cliente. Telos, vol. 18, núm. 3, septiembre-diciembre, pp. 381-398. Universidad Privada Dr. Rafael Belloso Chacín Maracaibo.',
      link: '',
    },
    {
      referencia:
        "González Quintana, M. J. & Cañadas Molina, E. (2008). Los indicadores de gestión y el cuadro de mando en las entidades no lucrativas CIRIEC-España. Revista de Economía Pública, Social y Cooperativa, núm. 63, pp. 227-252. Centre International de Recherches et d'Information sur l'Economie Publique, Sociale et Coopérative Valencia, Organismo Internacional.",
      link: '',
    },
    {
      referencia:
        'Guadarrama Tavira, E. & Rosales Estrada, E. M. (2015). Marketing Relacional: Valor, Satisfacción, Lealtad y Retención del Cliente. Análisis y Reflexión Teórica. Ciencia y Sociedad, vol. 40, núm. 2, pp. 307-340. Instituto Tecnológico de Santo Domingo Santo Domingo.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, E. & Mahecha, M. (2015). Propuesta de implementación de la metodología manufactura esbelta en el proceso de empaque en las líneas de coloración para el negocio de profesional de la planta de producción de Henkel colombiana SAS. Universidad Distrital Francisco José de Caldas facultad Tecnológica Proyecto curricular de Ingeniería de Producción.',
      link: '',
    },
    {
      referencia: 'López, J. F. (2018). Valor añadido. Economipedia.com.',
      link:
        'https://economipedia.com/definiciones/valor-anadido.html#:~:text=El%20valor%20a%C3%B1adido%20o%20valor,suma%20de%20los%20recursos%20utilizados',
    },
    {
      referencia:
        'Marín-García, J. A., Bautista-Poveda, Y. & García-Sabater, J. J. (2014). Etapas en la evolución de la mejora continua: Estudio multicaso. Intangible Capital, vol. 10, núm. 3, pp. 584-618. Universitat Politècnica de Catalunya Barcelona.',
      link: '',
    },
    {
      referencia:
        'Torrelles, C., Isus, S., Carrera, X., París, G. & Cela, J. M. (2011). Competencia De Trabajo En Equipo: Definición Y Categorización Profesorado. Revista de Currículum y Formación de Profesorado, vol. 15, núm. 3, pp. 329-344. Universidad de Granada.',
      link: '',
    },
    {
      referencia:
        'Vázquez Toledo, S., Bernal Agudo, J. L. & Liesa Orús, M. (2014). La conceptualización del liderazgo: una aproximación desde la práctica educativa REICE. Revista Iberoamericana sobre Calidad, Eficacia y Cambio en Educación, vol. 12, núm. 5, pp. 79-97. Red Iberoamericana de Investigación Sobre Cambio y Eficacia Escolar Madrid.',
      link: '',
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
        cargo: 'Responsable del equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'May Stefanny González',
        cargo: 'Experta temática',
        centro:
          'Centro de Industria empresa y servicios regionales - Regional Norte de Santander.',
      },
      {
        nombre: 'Gloria Lida Álzate Suarez',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Bogotá.',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo diseño y desarrollo de RED',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yerson Fabian Zarate Saavedra',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniel Polanco',
        cargo: 'Validación diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Edinson Castañeda Oviedo',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrea Botello',
        cargo: 'Validación desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Gabriel Urueta',
        cargo: 'Desarrollo actividades didácticas',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Ruiz',
        cargo: 'Revisión de guión audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Arenales',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero',
        cargo: 'Storyboard e Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Gallo',
        cargo: 'Storyboard e Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Calao',
        cargo: 'Animador y productor multimedia',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Erika Sandoval',
        cargo: 'Animador y productor multimedia',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Junior Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ludwyng Corzo',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria Camila Ovalle',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable equipo gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jose Daniel Guerrero',
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
