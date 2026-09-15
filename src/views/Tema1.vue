<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Recepción de porcinos para beneficio
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La #[b recepción de porcinos] es la primera etapa del proceso de beneficio animal y tiene como finalidad verificar que los animales cumplan con los requisitos sanitarios, documentales y de bienestar antes del sacrificio. Este procedimiento permite garantizar la #[b inocuidad de la carne], proteger la salud pública y asegurar un manejo adecuado de los animales.
          .caja-1(data-aos="fade-right")
            p.mb-0 Durante esta fase se realiza la revisión de la documentación, la identificación de los porcinos, la evaluación de su estado sanitario, las condiciones del transporte y la #[b inspección ante mortem]. Todas estas actividades deben ejecutarse conforme a la normatividad vigente y a las #[b Buenas Prácticas Porcícolas (BPP)]. Una recepción adecuada reduce el riesgo de enfermedades, facilita la trazabilidad y disminuye el estrés de los animales, lo que contribuye a obtener canales de mejor calidad y mayor rendimiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img1.png', alt='' style="width: 500px").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto e importancia de la recepción de porcinos
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 La #[b recepción de porcinos] comprende el conjunto de actividades técnicas y sanitarias realizadas desde la llegada de los animales hasta su ingreso al proceso de beneficio. Su objetivo es verificar su estado de salud, identificación, documentación y condiciones de bienestar. Esta etapa permite detectar animales enfermos, lesionados o no aptos para el beneficio, con el propósito de garantizar la seguridad alimentaria y el cumplimiento de la legislación sanitaria.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Importancia
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img4.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Una recepción adecuada mejora la calidad de la carne, fortalece la bioseguridad y facilita el control sanitario del establecimiento. Además, reduce las pérdidas económicas ocasionadas por decomisos, lesiones o contaminación de las canales.
      p.mb-5 Las #[b Buenas Prácticas Porcícolas (BPP)] establecen que este proceso debe desarrollarse mediante procedimientos estandarizados que garanticen el bienestar animal y la trazabilidad. La importancia de esta etapa se relaciona con los siguientes aspectos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sanidad
                  p.mb-0 Permite detectar animales enfermos o lesionados antes de su ingreso al proceso de beneficio y contribuye al control sanitario del establecimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bienestar animal
                  p.mb-0 Favorece un manejo adecuado de los porcinos durante la recepción, con el propósito de reducir el estrés y el sufrimiento de los animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inocuidad
                  p.mb-0 Contribuye a disminuir los riesgos de contaminación que pueden comprometer la seguridad de la carne destinada al consumo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Calidad de la carne
                  p.mb-0 Un manejo adecuado durante esta etapa favorece la obtención de canales de mejor calidad y contribuye a reducir pérdidas asociadas con lesiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bioseguridad
                  p.mb-0 Permite aplicar controles sanitarios orientados a prevenir el ingreso de enfermedades y reducir los riesgos para el establecimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 Facilita el seguimiento del lote mediante la identificación de los porcinos y la revisión de los registros y la documentación correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 En conjunto, estos aspectos permiten comprender la recepción como una etapa fundamental para controlar las condiciones sanitarias y de bienestar antes de continuar con el proceso de beneficio.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Objetivos de la recepción de animales
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La recepción busca garantizar que únicamente ingresen al proceso de beneficio porcinos aptos desde el punto de vista sanitario y de bienestar animal. También permite verificar el cumplimiento de la documentación exigida y asegurar la correcta identificación de los animales. Además, este procedimiento facilita la #[b inspección ante mortem], protege la inocuidad de la carne y fortalece la bioseguridad de la planta de beneficio. Sus principales objetivos y finalidades son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Verificar el estado sanitario
                  p.mb-0 Permite identificar animales aptos para el beneficio mediante la evaluación de su estado de salud y sus condiciones generales al momento de la recepción.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Revisar la documentación
                  p.mb-0 Permite confirmar el cumplimiento de los requisitos legales y sanitarios exigidos para el ingreso de los animales al proceso de beneficio.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Garantizar la trazabilidad
                  p.mb-0 Contribuye a mantener el control sobre el origen del lote mediante la identificación de los animales y la revisión de los registros correspondientes.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Proteger el bienestar animal
                  p.mb-0 Busca reducir el estrés, las lesiones y el sufrimiento mediante condiciones adecuadas de manejo durante la recepción de los porcinos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Aplicar medidas de bioseguridad
                  p.mb-0 Permite prevenir el ingreso de enfermedades y controlar los riesgos sanitarios que pueden afectar a los animales y al establecimiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Favorecer la inocuidad
                  p.mb-0 Contribuye a controlar los riesgos que pueden comprometer la carne y favorece la obtención de un producto seguro para el consumo.
      p.mb-0 El cumplimiento de estos objetivos permite establecer condiciones adecuadas para continuar con las demás etapas del proceso de beneficio.
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Importancia para la inocuidad y la calidad de la carne
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La recepción influye directamente en la #[b inocuidad y la calidad de la carne]. Un manejo adecuado durante el transporte, descargue y descanso reduce el estrés y evita lesiones que afectan el rendimiento de la canal.
      p.mb-5 Por el contrario, un manejo inadecuado puede ocasionar hematomas, fracturas, contaminación y alteraciones en la carne, lo que disminuye su valor comercial y aumenta los decomisos. La aplicación de las #[b Buenas Prácticas Porcícolas (BPP)] y de las #[b Buenas Prácticas de Manufactura (BPM)] permite controlar estos riesgos y garantizar un producto seguro para el consumidor. Los principales factores relacionados con la recepción y sus posibles consecuencias son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img18.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Estrés").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede generar alteraciones en la carne, como PSE o DFD, que afectan sus características y disminuyen su calidad.
            .row(titulo="Golpes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden ocasionar hematomas y lesiones que afectan la canal y generan pérdidas asociadas con los decomisos.
            .row(titulo="Transporte inadecuado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede provocar lesiones y pérdida de peso en los animales, con efectos sobre su bienestar y el rendimiento de la canal.
            .row(titulo="Falta de higiene").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incrementa el riesgo de contaminación microbiológica y puede comprometer la inocuidad de la carne destinada al consumo.
            .row(titulo="Bioseguridad deficiente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incrementa los riesgos sanitarios y puede favorecer situaciones que afecten la sanidad animal y la salud pública.
      p.mb-0 Por esta razón, controlar estos factores desde la recepción contribuye a proteger la inocuidad del producto y a conservar la calidad de las canales.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Relación con las Buenas Prácticas Porcícolas (BPP)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las #[b Buenas Prácticas Porcícolas (BPP)] establecen procedimientos para garantizar la sanidad animal, la bioseguridad, la trazabilidad, el bienestar animal y la inocuidad de la carne durante el proceso de beneficio.
          .caja-1(data-aos="fade-right")
            p.mb-0 En la recepción se verifica la documentación sanitaria, la identificación de los porcinos, las condiciones del transporte y el estado general de los animales. Estas acciones permiten prevenir riesgos sanitarios y asegurar que únicamente ingresen animales aptos para el beneficio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El cumplimiento de las BPP mejora la calidad de la carne, fortalece la trazabilidad y asegura el cumplimiento de la normatividad vigente. Su relación con las actividades desarrolladas durante la recepción se concreta en los siguientes principios:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t1/img21.png', alt='' style="max-width: 400px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img22.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Bienestar animal
              p.mb-0.text-center Se aplica mediante un manejo tranquilo y sin maltrato durante el descargue, con el propósito de reducir el estrés, las lesiones y el sufrimiento.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img23.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Bioseguridad
              p.mb-0.text-center Comprende la aplicación de controles sanitarios y medidas orientadas a prevenir el ingreso y la propagación de enfermedades.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Sanidad animal
              p.mb-0.text-center Incluye la verificación del estado de salud de los porcinos para identificar condiciones que puedan afectar su aptitud para el beneficio.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Trazabilidad
              p.mb-0.text-center Se desarrolla mediante la revisión de la identificación, la documentación y los registros asociados con el origen y seguimiento del lote.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inocuidad
              p.mb-0.text-center Comprende la prevención y el control de riesgos que puedan afectar la seguridad de la carne destinada al consumo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Registros
              p.mb-0.text-center Incluye la documentación y el seguimiento de las actividades desarrolladas durante la recepción, como soporte del control del proceso.
      p.mb-5 La aplicación articulada de estos principios fortalece el control sanitario y permite mantener condiciones adecuadas durante la recepción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Beneficios de aplicar las BPP
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p La aplicación de las #[b Buenas Prácticas Porcícolas] durante la recepción genera beneficios relacionados con la sanidad, el bienestar animal, la bioseguridad y el cumplimiento de los requisitos establecidos. Entre los principales se encuentran:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Garantizan la sanidad y la inocuidad de la carne. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Protegen el bienestar de los animales. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Fortalecen la bioseguridad y la trazabilidad. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Favorecen el cumplimiento de la normatividad sanitaria vigente. 
          p.mb-0 Estos beneficios evidencian la importancia de aplicar procedimientos estandarizados desde la recepción y durante las etapas posteriores del proceso de beneficio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img28.png', alt='' style="width: 500px").m-auto
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Requisitos para el ingreso de los porcinos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img29.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.mb-3(data-aos="fade-left")
            p.mb-0 El ingreso de los porcinos a la planta de beneficio debe cumplir con #[b requisitos sanitarios, documentales y de bienestar animal] establecidos por la normatividad vigente. Estas verificaciones contribuyen a garantizar la inocuidad de la carne, facilitan la trazabilidad y reducen el riesgo de introducir enfermedades al establecimiento.
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img30.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El cumplimiento de estos requisitos comprende la revisión de la documentación sanitaria, la identificación de los animales, la trazabilidad de los lotes y las condiciones en las que se realizan el transporte y el descargue.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Requisitos sanitarios y documentales
      p.mb-5 Antes del ingreso, los porcinos deben estar respaldados por la documentación exigida por la autoridad sanitaria competente. Asimismo, se debe comprobar que los animales se encuentren clínicamente sanos y aptos para el beneficio. La revisión documental permite verificar el origen de los animales, el cumplimiento de las condiciones sanitarias y la legalidad de su movilización. Los principales requisitos y su finalidad son los siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Guía Sanitaria de Movilización Interna (GSMI)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Guía Sanitaria de Movilización Interna (GSMI)
              p.mb-0 Permite autorizar y respaldar el transporte legal de los animales desde su lugar de procedencia hasta la planta de beneficio.
        .py-3.py-md-4(titulo="Identificación del predio de origen")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificación del predio de origen
              p.mb-0 Permite verificar la procedencia del lote y relacionar los animales recibidos con el predio de origen.
        .py-3.py-md-4(titulo="Estado sanitario de los animales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img33.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estado sanitario de los animales
              p.mb-0 Comprende la evaluación de las condiciones generales de los porcinos para detectar signos de enfermedad, lesiones u otras alteraciones.
        .py-3.py-md-4(titulo="Cumplimiento de normas sanitarias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img34.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cumplimiento de normas sanitarias
              p.mb-0 Contribuye a proteger la salud pública y animal mediante el cumplimiento de los requisitos sanitarios establecidos para el ingreso.
      p.mb-5 La revisión integral de estos requisitos permite determinar si los animales cumplen con las condiciones necesarias para continuar con el proceso de recepción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de los animales
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img35.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p La #[b identificación de los animales] permite reconocer el origen de cada porcino y mantener el control durante todo el proceso de beneficio. Esta información facilita las inspecciones oficiales y el seguimiento sanitario.
      p.mb-5 Los animales deben ingresar identificados mediante los sistemas autorizados por la autoridad competente. Estos mecanismos permiten relacionar cada animal o lote con su procedencia y con la documentación que respalda su movilización:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img36.jpg', alt="" ).m-auto
              h4.text-center Arete o dispositivo oficial
              .caja-3_p
                p.mb-0  Permite realizar la identificación individual o por lote y mantener el reconocimiento de los animales durante su ingreso y permanencia en el proceso.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img37.jpg', alt="" ).m-auto
              h4.text-center Registros del productor
              .caja-3_p
                p.mb-0  Permiten relacionar los animales con el predio de origen y respaldar la información correspondiente a su procedencia.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img38.jpg', alt="" ).m-auto
              h4.text-center Documentación sanitaria
              .caja-3_p
                p.mb-0 Permite confirmar la procedencia de los porcinos y comprobar que su movilización se encuentra respaldada por los documentos sanitarios correspondientes.
      p.mb-5 La correcta identificación constituye un elemento fundamental para conservar la trazabilidad y facilitar el control sanitario de los animales recibidos.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trazabilidad y registros
      p.mb-5 La #[b trazabilidad] permite conocer el recorrido del animal desde el predio de origen hasta la planta de beneficio. Este procedimiento facilita el control sanitario, la inspección oficial y la atención de posibles alertas sanitarias.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img39.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-1(data-aos="fade-left").mb-3
            p Todos los registros deben conservarse de manera organizada y actualizada, con el fin de mantener disponible la información correspondiente al lote durante las diferentes etapas del proceso de beneficio. Entre los registros básicos se encuentran los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Predio de origen:] registra la procedencia de los animales y permite relacionar el lote recibido con el establecimiento del cual fue movilizado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Fecha de ingreso:] registra el día en que los porcinos son recibidos en la planta y permite mantener el seguimiento cronológico del lote.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Cantidad de animales:] registra el número de porcinos recibidos y facilita el control del lote durante su ingreso al establecimiento.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Inspección ante mortem:] contiene la información relacionada con el estado sanitario del lote determinada durante la evaluación previa al sacrificio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Destino de la canal:] permite mantener el seguimiento de los animales durante el beneficio y relacionar la información del lote con las canales obtenidas.
          p.mb-0 La conservación organizada y actualizada de estos registros fortalece el seguimiento sanitario y garantiza la continuidad de la información durante el proceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Condiciones del transporte
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El transporte debe realizarse en vehículos limpios, desinfectados y adecuados para el traslado de porcinos. Durante el recorrido, se debe evitar el hacinamiento, el maltrato y las condiciones que generen estrés o lesiones. El descargue debe efectuarse de forma tranquila, mediante rampas apropiadas y con personal capacitado en #[b bienestar animal]. Las principales condiciones que deben cumplirse son las siguientes:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t1/img40.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img41.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Vehículo
              p.mb-0.text-center Debe encontrarse limpio, desinfectado y en buen estado para realizar el traslado de los porcinos en condiciones adecuadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img42.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Espacio
              p.mb-0.text-center Debe permitir el traslado de los animales sin hacinamiento y reducir las condiciones que puedan ocasionar caídas durante el recorrido.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img43.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Manejo
              p.mb-0.text-center Debe realizarse sin golpes, gritos ni uso de elementos que causen dolor, con el propósito de proteger el bienestar de los animales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img44.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Descargue
              p.mb-0.text-center Debe efectuarse mediante rampas seguras y antideslizantes que faciliten el desplazamiento de los porcinos y reduzcan el riesgo de lesiones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img45.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Bienestar animal
              p.mb-0.text-center Las condiciones de transporte y manejo deben contribuir a minimizar el estrés y las lesiones durante el traslado y el descargue.
      p.mb-0 El cumplimiento de estas condiciones contribuye a proteger a los animales durante su movilización y disminuye los factores que pueden afectar su bienestar y la calidad posterior de la carne.
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Inspección ante mortem
      p.mb-5 A continuación, se presenta un video sobre la inspección ante mortem en porcinos, en el que se describen los principales aspectos evaluados para determinar su estado sanitario, identificar posibles alteraciones y garantizar condiciones adecuadas de bienestar e inocuidad antes del proceso de beneficio.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Inspección ante mortem y evaluación sanitaria de los porcinos
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación de animales no aptos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los animales que presenten signos de enfermedad, lesiones graves, alteraciones del comportamiento o condiciones que representen un riesgo sanitario deben ser separados inmediatamente para una #[b evaluación veterinaria]. Estos porcinos no podrán ingresar al proceso de beneficio hasta que la autoridad competente determine su condición. De acuerdo con los signos identificados, deben adoptarse las siguientes acciones:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t1/img46.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img47.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fiebre o decaimiento
              p.mb-0.text-center Requiere el aislamiento del animal y la correspondiente evaluación veterinaria para establecer su condición sanitaria.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img48.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Lesiones graves
              p.mb-0.text-center Requieren la separación del animal respecto del lote para impedir su ingreso al proceso sin una valoración previa.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img49.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Dificultad para caminar
              p.mb-0.text-center Requiere una valoración sanitaria que permita determinar la condición del animal y establecer las acciones correspondientes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img50.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Secreciones anormales
              p.mb-0.text-center Requieren una inspección detallada para determinar su origen y establecer si representan un riesgo sanitario.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t1/img51.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Sospecha de enfermedad infectocontagiosa
              p.mb-0.text-center Requiere la notificación correspondiente y el aislamiento inmediato del animal como medida de control sanitario.
      p.mb-5 La separación oportuna de los animales que presentan estas condiciones contribuye a prevenir riesgos y permite que la autoridad competente determine las medidas correspondientes.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para la aprobación del beneficio
      p.mb-5 Un porcino será aprobado para el beneficio cuando presente un buen estado sanitario, comportamiento normal, adecuada condición corporal y cumpla con los requisitos documentales establecidos. La decisión final corresponde al #[b médico veterinario responsable de la inspección], quien autoriza o rechaza el ingreso del animal al proceso de beneficio. Para esta decisión se consideran los siguientes criterios:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img52.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Estado sanitario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El animal debe encontrarse clínicamente sano y no presentar condiciones sanitarias que impidan su ingreso al proceso de beneficio.
            .row(titulo="Documentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La documentación requerida debe encontrarse completa y vigente para respaldar la procedencia y movilización de los animales.
            .row(titulo="Identificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La identificación debe ser correcta y verificable, de manera que permita relacionar el animal o lote con su información de origen.
            .row(titulo="Bienestar animal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El porcino no debe presentar lesiones ni signos de estrés severo que comprometan sus condiciones para el beneficio.
            .row(titulo="Inspección veterinaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El animal debe contar con la aprobación oficial emitida como resultado de la inspección ante mortem correspondiente.
      p.mb-0 El cumplimiento conjunto de estos criterios permite autorizar el ingreso de los porcinos al beneficio y mantener el control sanitario previo al sacrificio.
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Bienestar animal durante la recepción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 El #[b bienestar animal durante la recepción] busca minimizar el estrés, el miedo y las lesiones de los porcinos desde su llegada a la planta de beneficio. Un manejo adecuado favorece la salud de los animales, mejora la calidad de la carne y contribuye al cumplimiento de la normatividad vigente sobre protección animal.
          p.mb-0 Las actividades de descarga, movilización, descanso y suministro de agua deben ser realizadas por personal capacitado, mediante técnicas de manejo humanitario que reduzcan las situaciones que puedan generar sufrimiento o lesiones.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img53.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Descarga y movilización de los animales
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La descarga debe efectuarse de forma tranquila, mediante rampas seguras, antideslizantes y con pendiente adecuada. Los porcinos deben movilizarse en grupos pequeños, evitando golpes, caídas y aglomeraciones. El desplazamiento hacia los corrales debe realizarse de acuerdo con el comportamiento natural de los animales y reduciendo los factores que puedan generar estrés. Las principales prácticas durante esta etapa son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Descarga")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img54.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Descarga
              p.mb-0 Debe realizarse mediante rampas seguras y antideslizantes que faciliten el desplazamiento y reduzcan el riesgo de caídas o lesiones.
        .py-3.py-md-4(titulo="Movilización")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img55.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Movilización
              p.mb-0 Los animales deben desplazarse con calma y en grupos pequeños, evitando aglomeraciones que dificulten su movimiento.
        .py-3.py-md-4(titulo="Manejo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img56.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manejo
              p.mb-0 Debe efectuarse sin golpes, gritos ni movimientos bruscos que generen miedo, estrés o lesiones en los porcinos.
        .py-3.py-md-4(titulo="Instalaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img57.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Instalaciones
              p.mb-0 Los pasillos deben mantenerse limpios y libres de obstáculos para facilitar el desplazamiento seguro de los animales hacia los corrales.
      p.mb-5 La aplicación de estas prácticas favorece un desplazamiento seguro y contribuye a disminuir situaciones que puedan afectar el bienestar de los porcinos durante la recepción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de bajo estrés
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img58.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El #[b manejo de bajo estrés] consiste en conducir a los porcinos mediante técnicas que reduzcan el miedo y faciliten su desplazamiento natural. Esta práctica mejora el bienestar animal y disminuye el riesgo de lesiones.
      p.mb-5 El personal debe evitar el uso de fuerza excesiva y emplear únicamente elementos de manejo autorizados, de acuerdo con el comportamiento de los animales. Los principales criterios para este tipo de manejo son los siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Movimientos tranquilos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img59.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Movimientos tranquilos
              p.mb-0 Favorecen un desplazamiento controlado de los animales y contribuyen a reducir las respuestas asociadas con el estrés.
        .py-3.py-md-4(titulo="Uso de banderas o paneles")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img60.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Uso de banderas o paneles
              p.mb-0 Facilita la conducción de los porcinos sin recurrir a prácticas que puedan causar dolor o miedo innecesario.
        .py-3.py-md-4(titulo="Evitar gritos y golpes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img61.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Evitar gritos y golpes
              p.mb-0 Disminuye el riesgo de lesiones y miedo durante la movilización, además de favorecer un manejo más tranquilo.
        .py-3.py-md-4(titulo="Personal capacitado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img62.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Personal capacitado
              p.mb-0 Permite aplicar técnicas adecuadas de conducción y mejora las condiciones de manejo y seguridad durante la recepción.
      p.mb-5 El manejo de bajo estrés depende tanto de las técnicas empleadas como de la preparación del personal responsable de movilizar a los animales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Descanso, ayuno y suministro de agua
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Antes del beneficio, los porcinos deben permanecer en corrales de descanso que les permitan recuperarse del transporte. Durante este periodo, deben disponer permanentemente de #[b agua limpia y potable]. El ayuno previo al sacrificio debe realizarse conforme a los protocolos establecidos, con el propósito de favorecer el bienestar animal y reducir el riesgo de contaminación durante el faenado. Durante este periodo deben atenderse los siguientes aspectos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Descanso
                  p.mb-0 Los animales deben permanecer en corrales limpios, ventilados y con espacio suficiente para recuperarse de las condiciones asociadas con el transporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img63.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Agua
                  p.mb-0 Debe garantizarse la disponibilidad permanente de agua limpia y potable durante el periodo de permanencia en los corrales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img64.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ayuno
                  p.mb-0 Debe cumplirse el tiempo establecido antes del beneficio, de acuerdo con los protocolos definidos para esta etapa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img65.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vigilancia
                  p.mb-0 El estado de los animales debe evaluarse de manera continua para identificar oportunamente signos de alteración, estrés o enfermedad.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img66.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El control de estas condiciones durante el periodo de descanso contribuye a mantener el bienestar de los porcinos antes del sacrificio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Prevención del maltrato animal
      p.mb-5 El #[b maltrato animal] debe prevenirse durante todas las etapas de la recepción. Está prohibido causar dolor, sufrimiento o lesiones mediante golpes, objetos punzantes, descargas eléctricas innecesarias o cualquier práctica que afecte el bienestar de los porcinos. La capacitación del personal y el cumplimiento de los protocolos de bienestar animal son fundamentales para garantizar un manejo humanitario. Las prácticas permitidas y prohibidas se diferencian de la siguiente manera:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img18.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Manejo tranquilo y ordenado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica permitida que favorece la conducción de los porcinos sin generar miedo, estrés o lesiones innecesarias.
            .row(titulo="Uso de paneles de manejo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica permitida para facilitar el desplazamiento de los animales mediante elementos adecuados para su conducción.
            .row(titulo="Personal capacitado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Su participación permite aplicar procedimientos de manejo acordes con los principios de bienestar y seguridad durante la recepción.
            .row(titulo="Supervisión veterinaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuye al seguimiento de las condiciones sanitarias y de bienestar de los animales durante las actividades de recepción.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Golpear o patear a los animales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica prohibida porque puede causar dolor, lesiones y sufrimiento, además de afectar las condiciones de bienestar animal.
            .row(titulo="Arrastrar animales vivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica prohibida debido al riesgo de causar lesiones, dolor y sufrimiento durante la movilización.
            .row(titulo="Gritar o causar miedo innecesario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica prohibida porque incrementa el estrés y dificulta el manejo tranquilo de los porcinos.
            .row(titulo="Uso inadecuado de elementos eléctricos o punzantes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Es una práctica prohibida cuando causa dolor, lesiones o sufrimiento y afecta las condiciones de bienestar de los animales.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img67.png", alt="" style="width: 350px").m-auto
      p.mb-0 La prevención del maltrato requiere la aplicación permanente de prácticas de manejo adecuadas, personal capacitado y seguimiento de los protocolos establecidos para proteger el bienestar animal.
      Separador
      #t_1_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.8 Bioseguridad en el área de recepción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 La #[b bioseguridad en el área de recepción] comprende el conjunto de medidas destinadas a prevenir el ingreso y la propagación de enfermedades durante la llegada de los porcinos a la planta de beneficio. Su correcta aplicación protege la salud animal, contribuye a preservar la inocuidad de la carne y fortalece la seguridad del personal.
          p.mb-0 Estas medidas abarcan el control sanitario de ingreso, la limpieza y desinfección de instalaciones y equipos, el control de plagas y la aplicación de acciones preventivas por parte del personal.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img68.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control sanitario de ingreso
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img69.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 El #[b control sanitario de ingreso] inicia con la revisión de la documentación exigida y la inspección del estado general de los porcinos. Durante esta etapa, se verifica que los animales estén clínicamente sanos y cumplan con los requisitos establecidos para ingresar al proceso de beneficio.
      p.mb-5 Los porcinos que presenten signos de enfermedad, lesiones o alteraciones del comportamiento deben ser aislados y evaluados por el médico veterinario, con el fin de evitar riesgos sanitarios. Las principales actividades de control son las siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Revisión documental")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img70.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Revisión documental
              p.mb-0 Permite verificar el cumplimiento de los requisitos sanitarios exigidos para el ingreso de los porcinos a la planta de beneficio.
        .py-3.py-md-4(titulo="Inspección de los animales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img71.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Inspección de los animales
              p.mb-0 Permite detectar signos de enfermedad, lesiones o alteraciones que puedan comprometer la condición sanitaria de los porcinos.
        .py-3.py-md-4(titulo="Identificación del lote")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img72.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Identificación del lote
              p.mb-0 Permite relacionar los animales con su procedencia y mantener la trazabilidad durante las diferentes etapas del proceso.
        .py-3.py-md-4(titulo="Aislamiento de animales sospechosos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img73.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Aislamiento de animales sospechosos
              p.mb-0 Permite separar a los porcinos que presenten signos o condiciones de riesgo para evitar la posible propagación de enfermedades.
      p.mb-5 La aplicación de estos controles permite identificar oportunamente riesgos sanitarios y adoptar las medidas correspondientes antes de que los animales continúen en el proceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Limpieza y desinfección
      p.mb-5 La #[b limpieza y desinfección] de corrales, rampas, pasillos, equipos y vehículos es fundamental para disminuir la presencia de microorganismos y prevenir la contaminación cruzada. Estas actividades deben realizarse de forma periódica mediante productos autorizados y procedimientos establecidos.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.color-1.ajuste-2(data-aos="fade-right").mb-3
            p Mantener las instalaciones en condiciones higiénicas contribuye a conservar un ambiente seguro para los animales, el personal y el proceso de beneficio. Las acciones principales se desarrollan en los siguientes espacios y elementos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Corrales:] requieren limpieza y desinfección periódicas para reducir la acumulación de residuos y disminuir la presencia de microorganismos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Rampas y pasillos:] deben mantenerse libres de residuos y someterse a procesos de limpieza y desinfección que favorezcan condiciones higiénicas adecuadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Vehículos:] deben limpiarse después de cada transporte para reducir la presencia de residuos y prevenir la transferencia de contaminantes entre los lotes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Equipos:] requieren lavado y desinfección antes y después de su uso, de acuerdo con los procedimientos establecidos para mantener condiciones higiénicas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Teja:] debe mantenerse libre de acumulación de polvo, residuos orgánicos y nidos de plagas, realizando limpieza periódica que evite el deterioro y la contaminación de las áreas inferiores.
          p.mb-0 La ejecución sistemática de estas actividades contribuye a reducir la contaminación y fortalece las condiciones de bioseguridad en el área de recepción.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img74.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control de plagas
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El #[b control de plagas] busca evitar la presencia de roedores, moscas, insectos y aves que puedan contaminar las instalaciones o transmitir enfermedades. Para ello, la planta debe implementar un programa permanente de monitoreo y control. La adecuada disposición de residuos, la limpieza de las áreas y el mantenimiento de las instalaciones son acciones esenciales para reducir la proliferación de plagas. Entre las principales medidas de control se encuentran las siguientes:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img75.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Roedores
              p.mb-0.text-center Requieren la implementación de trampas y mecanismos de monitoreo permanente para detectar y controlar oportunamente su presencia.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img76.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Moscas
              p.mb-0.text-center Su control requiere mantener la limpieza de las áreas y realizar un manejo adecuado de los residuos que puedan favorecer su proliferación.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img77.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Insectos
              p.mb-0.text-center Deben controlarse mediante programas autorizados que permitan reducir su presencia y prevenir riesgos de contaminación en las instalaciones.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img78.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Aves
              p.mb-0.text-center Debe restringirse su acceso a las instalaciones mediante medidas que impidan su ingreso a las áreas destinadas a la recepción de los animales.
      p.mb-5 El control permanente de estas plagas disminuye los riesgos de contaminación y contribuye a mantener condiciones sanitarias adecuadas en la planta.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Medidas de prevención sanitaria
      p.mb-5 Las #[b medidas de prevención sanitaria] incluyen el uso de elementos de protección personal, el lavado y la desinfección de manos, la restricción del ingreso de personas no autorizadas y el cumplimiento de los protocolos de bioseguridad. Asimismo, es importante mantener registros sanitarios y capacitar continuamente al personal para fortalecer la prevención de enfermedades y garantizar la inocuidad del proceso. Las principales medidas son las siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img79.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Uso de elementos de protección personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuye a prevenir la contaminación durante las actividades de recepción y protege al personal frente a los riesgos asociados con el proceso.
            .row(titulo="Lavado y desinfección de manos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite reducir la transmisión de microorganismos y fortalecer las condiciones higiénicas durante la manipulación y el contacto con las áreas de recepción.
            .row(titulo="Restricción de ingreso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite controlar el acceso de personas no autorizadas a las áreas de recepción y disminuir posibles riesgos para la bioseguridad.
            .row(titulo="Registros sanitarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten documentar las actividades de control y facilitar el seguimiento de las condiciones sanitarias y de trazabilidad del proceso.
            .row(titulo="Capacitación del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fortalece el cumplimiento de los protocolos de bioseguridad y favorece la aplicación adecuada de las medidas de prevención sanitaria.
      p.mb-0 La aplicación permanente de estas medidas fortalece la bioseguridad del área de recepción y contribuye a prevenir riesgos para los animales, el personal y la inocuidad del proceso.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
