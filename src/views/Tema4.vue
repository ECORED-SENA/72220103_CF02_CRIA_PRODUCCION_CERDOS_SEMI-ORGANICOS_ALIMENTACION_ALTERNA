<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Buenas Prácticas Porcícolas (BPP) y Buenas Prácticas de Manufactura (BPM)
      .caja-5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Las #[b Buenas Prácticas Porcícolas (BPP)] y las #[b Buenas Prácticas de Manufactura (BPM)] constituyen un conjunto de procedimientos técnicos, sanitarios y administrativos orientados a garantizar la producción de carne inocua, proteger el bienestar animal y reducir los riesgos para la salud pública. Su aplicación comprende las diferentes etapas de la producción y el beneficio porcino. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img1.png', alt='' style="width: 500px").m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto e importancia de las BPP y BPM
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las #[b BPP] comprenden las actividades orientadas a garantizar la sanidad, el bienestar animal, la bioseguridad y la trazabilidad durante la producción porcina. Por su parte, las #[b BPM] establecen los procedimientos de higiene y control que deben aplicarse durante el beneficio y procesamiento de la carne. La implementación de ambas prácticas mejora la calidad del producto, facilita el cumplimiento de la normatividad vigente y fortalece la confianza de los consumidores. Sus principales diferencias se presentan a continuación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img2.jpg', alt="" ).m-auto
                  h4.text-center Buenas Prácticas Porcícolas (BPP)
                  .caja-3_p
                    p.mb-0  Se aplican durante la producción porcina y se enfocan en aspectos relacionados con la sanidad, el bienestar animal, la bioseguridad y la trazabilidad. Su aplicación contribuye a mantener animales sanos y trazables.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .caja-3.h-100
                .row.justify-content-center.mb-3
                  .col-12
                    figure.mb-4
                      img(src='@/assets/curso/temas/t4/img3.jpg', alt="" ).m-auto
                  h4.text-center Buenas Prácticas de Manufactura (BPM)
                  .caja-3_p
                    p.mb-0 Se aplican durante el beneficio y procesamiento de la carne, con énfasis en las condiciones de higiene e inocuidad. Su cumplimiento contribuye a obtener carne segura para el consumo humano.
          p.mb-5 La aplicación articulada de las BPP y las BPM permite mantener condiciones sanitarias adecuadas a lo largo de la cadena porcícola.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios de las Buenas Prácticas Porcícolas
          p.mb-5 Las #[b Buenas Prácticas Porcícolas] buscan mantener animales sanos mediante programas de bioseguridad, alimentación adecuada, bienestar animal, control sanitario y registros permanentes. También promueven el uso responsable de medicamentos y el manejo adecuado de los residuos generados en la explotación. Su aplicación contribuye a mejorar la productividad y disminuir los riesgos sanitarios a lo largo de la cadena porcícola. Sus principales principios son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bioseguridad
                  p.mb-0 Comprende las medidas destinadas a prevenir el ingreso de enfermedades y reducir los riesgos sanitarios que puedan afectar a los animales y al sistema productivo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bienestar animal
                  p.mb-0 Promueve un manejo humanitario de los porcinos mediante prácticas orientadas a proteger sus condiciones durante las diferentes actividades de producción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación
                  p.mb-0 Requiere el suministro de dietas seguras y balanceadas que contribuyan al mantenimiento de condiciones adecuadas de los animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sanidad
                  p.mb-0 Comprende la aplicación de programas de prevención y control destinados a mantener la salud de los porcinos y disminuir los riesgos sanitarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Registros
                  p.mb-0 Permiten documentar las actividades realizadas y mantener el seguimiento y la trazabilidad dentro del sistema de producción porcina.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación conjunta de estos principios fortalece la sanidad, el bienestar animal y el control de los procesos desarrollados durante la producción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios de las Buenas Prácticas de Manufactura
      p.mb-5 Las #[b Buenas Prácticas de Manufactura] establecen procedimientos para garantizar la higiene durante el beneficio y procesamiento de la carne. Incluyen el control de instalaciones, equipos, personal, materias primas y operaciones de limpieza y desinfección. Su objetivo es prevenir la contaminación del producto y asegurar la inocuidad durante todas las etapas del proceso. Sus principales principios comprenden:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img9.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Higiene del personal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las prácticas destinadas a evitar que el personal se convierta en una fuente de contaminación durante el beneficio y procesamiento de la carne.
            .row(titulo="Limpieza y desinfección").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten reducir la presencia de microorganismos en instalaciones, equipos, utensilios y superficies mediante procedimientos establecidos.
            .row(titulo="Control del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende el seguimiento de las operaciones para mantener las condiciones necesarias y garantizar la inocuidad del producto.
            .row(titulo="Mantenimiento de equipos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite conservar los equipos en condiciones adecuadas de funcionamiento y disminuir los riesgos asociados con fallas o contaminación.
            .row(titulo="Documentación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite registrar y comprobar el cumplimiento de los procedimientos establecidos durante las diferentes etapas del proceso.
      p.mb-0 Estos principios proporcionan condiciones higiénicas y operativas que contribuyen a prevenir la contaminación durante el beneficio y procesamiento.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Higiene e inocuidad
      .caja-5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La #[b higiene y la inocuidad] son fundamentales para obtener carne apta para el consumo humano. Todas las actividades deben realizarse bajo condiciones sanitarias que reduzcan la contaminación y preserven la calidad del producto. El cumplimiento de los protocolos de limpieza, desinfección y manipulación adecuada protege la salud del consumidor y contribuye a conservar la vida útil de la carne.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img10.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Higiene del personal
      p.mb-5 El personal debe mantener adecuados hábitos de higiene, utilizar ropa de trabajo limpia y emplear correctamente los #[b elementos de protección personal (EPP)]. El lavado y la desinfección de manos deben realizarse antes de iniciar las labores y cada vez que sea necesario. Los trabajadores con enfermedades transmisibles o lesiones expuestas no deben participar en la manipulación de la carne. Los principales requisitos de higiene son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img11.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Lavado de manos
              p.mb-0.text-center Debe realizarse en los momentos requeridos para reducir el riesgo de transferencia de contaminantes durante las actividades relacionadas con el proceso.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t4/img12.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Uniforme limpio
              p.mb-0.text-center Debe mantenerse en condiciones higiénicas adecuadas para disminuir el riesgo de contaminación durante las labores.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img13.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Uso de EPP
              p.mb-0.text-center Contribuye a proteger al trabajador y al producto frente a los riesgos presentes durante las actividades de beneficio y procesamiento.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t4/img14.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Estado de salud
              p.mb-0.text-center Debe controlarse para prevenir riesgos sanitarios asociados con enfermedades transmisibles o lesiones expuestas del personal.
      p.mb-5 El cumplimiento permanente de estos requisitos contribuye a mantener condiciones higiénicas adecuadas durante la manipulación de la carne.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Limpieza y desinfección
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img15.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las instalaciones, los equipos, los utensilios y las superficies deben limpiarse y desinfectarse de forma periódica mediante productos autorizados y procedimientos estandarizados.
      p.mb-5 Estas actividades disminuyen la carga microbiana y previenen la contaminación durante el beneficio. Su aplicación comprende los siguientes elementos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Equipos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Equipos
              p.mb-0 Requieren procedimientos de lavado y desinfección que permitan retirar residuos y reducir la presencia de microorganismos.
        .py-3.py-md-4(titulo="Utensilios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Utensilios
              p.mb-0 Deben limpiarse antes y después del uso para conservar condiciones higiénicas y reducir el riesgo de contaminación durante las operaciones.
        .py-3.py-md-4(titulo="Pisos y paredes")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Pisos y paredes
              p.mb-0 Requieren higienización permanente para evitar la acumulación de residuos y mantener condiciones sanitarias adecuadas en las instalaciones.
        .py-3.py-md-4(titulo="Áreas de proceso")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Áreas de proceso
              p.mb-0 Deben incluirse en el programa de saneamiento y someterse a los procedimientos de limpieza y desinfección establecidos.
      p.mb-5 La ejecución periódica de estas actividades fortalece las condiciones sanitarias requeridas durante el beneficio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo higiénico de equipos y utensilios
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los equipos y utensilios deben mantenerse en buen estado, libres de corrosión y correctamente desinfectados antes de su utilización. Su almacenamiento debe realizarse en condiciones que eviten cualquier fuente de contaminación. El mantenimiento preventivo contribuye a garantizar un proceso seguro y eficiente. Para ello, deben considerarse las siguientes actividades:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Lavado
                  p.mb-0 Permite eliminar los residuos presentes en equipos y utensilios antes de aplicar las medidas posteriores de higienización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Desinfección
                  p.mb-0 Permite reducir la presencia de microorganismos después de la limpieza y mantener condiciones sanitarias adecuadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantenimiento
                  p.mb-0 Contribuye a prevenir fallas en los equipos y condiciones que puedan convertirse en fuentes de contaminación durante el proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento
                  p.mb-0 Debe realizarse en condiciones que conserven la higiene de los utensilios y eviten su exposición a posibles fuentes de contaminación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La combinación de estas actividades permite conservar los equipos y utensilios en condiciones adecuadas para su utilización.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Control de contaminación
      .caja-5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 El #[b control de contaminación] comprende las medidas orientadas a prevenir la presencia de agentes biológicos, físicos y químicos que puedan afectar la inocuidad de la carne durante el beneficio y procesamiento. Estas acciones forman parte de los programas de aseguramiento de la calidad y de las #[b Buenas Prácticas de Manufactura].
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img24.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Contaminación cruzada
      p.mb-5 La #[b contaminación cruzada] ocurre cuando microorganismos o residuos pasan de un producto, una superficie o un equipo contaminado a otro limpio. Su prevención requiere mantener separadas las áreas de proceso y aplicar estrictas medidas de higiene. El flujo adecuado del personal, los equipos y las canales reduce significativamente este riesgo. Entre las principales medidas preventivas se encuentran:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img25.png", alt="" style="width: 320px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Separación de áreas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite mantener diferenciadas las actividades del proceso y disminuir la transferencia de contaminantes entre áreas con distintas condiciones higiénicas.
            .row(titulo="Limpieza de equipos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce la presencia de microorganismos y residuos que puedan transferirse a la carne durante las operaciones de beneficio y procesamiento.
            .row(titulo="Lavado de manos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye la transmisión de contaminantes mediante las prácticas higiénicas requeridas durante la manipulación del producto.
            .row(titulo="Manejo adecuado de residuos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuye a mantener condiciones higiénicas y evita que los residuos se conviertan en una fuente de contaminación para las áreas de proceso.
      p.mb-5 La aplicación conjunta de estas medidas reduce el riesgo de transferencia de contaminantes durante las diferentes operaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control de peligros biológicos, físicos y químicos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los #[b peligros biológicos] incluyen bacterias, virus y parásitos; los #[b peligros físicos] corresponden a cuerpos extraños, como metal, vidrio o plástico; y los #[b peligros químicos] abarcan residuos de medicamentos, detergentes o desinfectantes. La identificación y el control de estos peligros permiten proteger la inocuidad del producto final. De acuerdo con su naturaleza, se clasifican de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img26.jpg', alt="" ).m-auto
              h4.text-center Biológicos
              .caja-3_p
                p.mb-0  Incluyen bacterias, virus y parásitos que pueden comprometer la inocuidad de la carne. Su control requiere medidas de higiene y desinfección durante el proceso.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img27.jpg', alt="" ).m-auto
              h4.text-center Físicos
              .caja-3_p
                p.mb-0  Comprenden cuerpos extraños, como fragmentos metálicos, vidrio o plástico. Su prevención requiere inspección y mantenimiento adecuado de instalaciones y equipos.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img28.jpg', alt="" ).m-auto
              h4.text-center Químicos
              .caja-3_p
                p.mb-0 Incluyen residuos de medicamentos, detergentes o desinfectantes. Su control exige el uso adecuado de productos autorizados y el cumplimiento de los procedimientos establecidos.
      p.mb-5 El control de estos peligros debe mantenerse durante las diferentes etapas del beneficio y procesamiento para disminuir los riesgos asociados con la inocuidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trazabilidad y registros
      p.mb-5 La #[b trazabilidad] permite conocer el origen del animal y realizar el seguimiento del producto durante todas las etapas del beneficio. Los registros documentan las actividades sanitarias, los controles realizados y las acciones correctivas implementadas. Estos documentos facilitan las auditorías, fortalecen el control sanitario y respaldan el cumplimiento de la normatividad vigente. Los principales registros son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t4/img29.png', alt='' style="max-width: 400px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Identificación del lote
              p.mb-0.text-center Permite establecer la procedencia de los animales y relacionar el producto con la información correspondiente a su origen.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inspecciones sanitarias
              p.mb-0.text-center Documentan los resultados de las inspecciones ante mortem y #[i post mortem], así como los controles realizadas durante el proceso de beneficio.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Limpieza y desinfección
              p.mb-0.text-center Registran las actividades de higienización realizadas en las instalaciones, equipos, utensilios y áreas de proceso.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Decomisos
              p.mb-0.text-center Documentan las causas de los decomisos y el destino establecido para los productos o tejidos que no cumplen con las condiciones sanitarias.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img34.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Acciones correctivas
              p.mb-0.text-center Registran las medidas implementadas frente a las desviaciones o situaciones identificadas durante los controles del proceso.
      p.mb-0 El mantenimiento organizado de estos registros fortalece la trazabilidad y proporciona soporte documental a las actividades de control sanitario.

</template>

<script>
export default {
  name: 'Tema4',
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
