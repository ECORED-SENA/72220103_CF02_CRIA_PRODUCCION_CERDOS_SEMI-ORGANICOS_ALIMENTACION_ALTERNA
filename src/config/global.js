export default {
  global: {
    Name: 'Recepción, beneficio porcino y manejo sostenible de subproductos',
    Description:
      'Este componente formativo desarrolla conocimientos y habilidades para la recepción y el beneficio de porcinos, mediante la aplicación de procedimientos técnicos, sanitarios y de bienestar animal. Aborda la inspección, el faenado, la bioseguridad, la inocuidad, la trazabilidad y las Buenas Prácticas Porcícolas y de Manufactura, así como el manejo sostenible de residuos y subproductos generados durante el proceso productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recepción de porcinos para beneficio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto e importancia de la recepción de porcinos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos de la recepción de animales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Importancia para la inocuidad y la calidad de la carne',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Relación con las Buenas Prácticas Porcícolas (BPP)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Requisitos para el ingreso de los porcinos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Inspección ante mortem',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Bienestar animal durante la recepción',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Bioseguridad en el área de recepción',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Proceso de beneficio de porcinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto e importancia del beneficio porcino',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Etapas del beneficio porcino',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Inspección <i>post mortem</i>',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimientos técnicos para el beneficio porcino',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Métodos de sacrificio humanitario',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Buenas Prácticas Porcícolas (BPP) y Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto e importancia de las BPP y BPM',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Higiene e inocuidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Control de contaminación',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Manejo de residuos y sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Clasificación de residuos generados',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aprovechamiento de subproductos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Gestión ambiental',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Bienestar animal y normatividad vigente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bienestar animal en el beneficio porcino',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Bioseguridad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Normatividad vigente',
            hash: 't_6_3',
          },
        ],
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
