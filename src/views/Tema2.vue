<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Proceso de beneficio de porcinos
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b proceso de beneficio porcino] comprende el conjunto de operaciones técnicas, sanitarias y de bienestar animal que se realizan desde la insensibilización del animal hasta la refrigeración de la canal. Su propósito es obtener carne inocua, de excelente calidad y apta para el consumo humano, de acuerdo con la legislación sanitaria vigente, las #[b Buenas Prácticas de Manufactura (BPM)], los principios de bienestar animal y los procedimientos establecidos en el sistema oficial de inspección de carnes.
          .caja-1(data-aos="fade-right")
            p.mb-0 Durante todas las etapas del beneficio es indispensable mantener condiciones adecuadas de higiene, bioseguridad y control sanitario para prevenir la contaminación de la canal, proteger la salud pública y garantizar un producto seguro para el consumidor.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto e importancia del beneficio porcino
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          p El #[b beneficio porcino] es el proceso técnico mediante el cual los animales son sacrificados de forma humanitaria, bajo condiciones controladas de bienestar animal, inspección veterinaria e higiene. Este procedimiento permite obtener canales con características sanitarias adecuadas para el consumo humano y asegurar la inocuidad del producto.
          .caja-1.color-1(data-aos="fade-left")
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img30.svg', alt='' style="width: 80px").m-auto
              .col-xl
                p.mb-0 La correcta ejecución del beneficio reduce la contaminación microbiológica, disminuye las pérdidas económicas por decomisos, mejora el rendimiento de la canal y garantiza el cumplimiento de la normatividad sanitaria colombiana. Para comprender su importancia, es necesario considerar sus objetivos y los factores relacionados con la calidad e inocuidad de la carne.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Objetivos del beneficio
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El beneficio porcino busca producir carne inocua mediante procedimientos que protejan el bienestar animal, aseguren la higiene del proceso y garanticen la inspección veterinaria oficial. Asimismo, pretende optimizar el rendimiento de la canal, reducir pérdidas y proteger la salud pública.
      p.mb-5 Para alcanzar estos objetivos, todas las operaciones deben ser realizadas por personal capacitado, mediante equipos adecuados y procedimientos estandarizados. Los principales objetivos se relacionan a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Proteger el bienestar animal
                  p.mb-0 Busca reducir el estrés, el dolor y el sufrimiento mediante un manejo humanitario, una conducción adecuada y un aturdimiento efectivo. Su aplicación favorece la calidad de la carne y el cumplimiento de la #[b Ley 1774 de 2016].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Garantizar la inocuidad
                  p.mb-0 Tiene como finalidad obtener carne segura para el consumo humano mediante procedimientos sanitarios, BPM e inspección veterinaria, con lo cual se reducen los riesgos de contaminación microbiológica.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener la calidad de la canal
                  p.mb-0 Busca evitar defectos físicos y alteraciones de la carne mediante la correcta ejecución del sacrificio, la evisceración y la refrigeración, conservando características como el color, la textura y la vida útil.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cumplir la normatividad
                  p.mb-0 Comprende la aplicación de la legislación sanitaria vigente y de los protocolos establecidos por el #[b INVIMA] y el #[b ICA], lo que facilita la comercialización legal de la carne.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Optimizar el proceso
                  p.mb-0 Busca reducir pérdidas y mejorar la eficiencia operativa mediante la estandarización de los procedimientos y la capacitación del personal, favoreciendo la productividad y el aprovechamiento de los recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El cumplimiento articulado de estos objetivos permite desarrollar el beneficio bajo condiciones sanitarias, técnicas y de bienestar animal adecuadas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Calidad e inocuidad de la carne
      .caja-5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 La #[b calidad de la carne] depende del adecuado manejo de los porcinos antes y durante el beneficio. Factores como el estrés, los golpes, las lesiones y las prácticas inadecuadas de manipulación pueden afectar el color, la textura, el pH y la vida útil del producto.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img9.png', alt='' style="width: 500px").m-auto
      p.mb-5 La #[b inocuidad] se garantiza mediante el cumplimiento de las Buenas Prácticas de Manufactura, la inspección veterinaria, la higiene del personal, la limpieza y desinfección de los equipos y el mantenimiento permanente de la cadena de frío. Los principales factores que influyen en estas condiciones son los siguientes:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img10.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Bienestar animal").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce el estrés y favorece un pH muscular adecuado. Un manejo deficiente puede ocasionar carne PSE o DFD, hematomas y pérdidas económicas; por ello, se requiere un manejo tranquilo y un aturdimiento adecuado.
            .row(titulo="Higiene del proceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye la contaminación microbiológica y contribuye a proteger la salud pública. Su control requiere aplicar las BPM y mantener procedimientos permanentes de limpieza.
            .row(titulo="Inspección veterinaria").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite detectar enfermedades y lesiones que puedan comprometer la aptitud de la carne. Comprende la inspección ante mortem y post mortem para prevenir la comercialización de carne no apta.
            .row(titulo="Refrigeración").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conserva la calidad y prolonga la vida útil de la carne al limitar el desarrollo de microorganismos. Para ello, es indispensable mantener la cadena de frío.
            .row(titulo="Personal capacitado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece la correcta ejecución de los procedimientos y disminuye los errores durante el beneficio. Requiere capacitación continua y supervisión de las actividades.
      p.mb-0 El control de estos factores contribuye a conservar las características de la carne y a prevenir riesgos que puedan comprometer su inocuidad.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Etapas del beneficio porcino
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right").mb-3
            p.mb-0 El beneficio porcino comprende una #[b secuencia de operaciones técnicas] que permiten obtener una canal inocua y de alta calidad. Cada etapa debe desarrollarse mediante procedimientos estandarizados que garanticen el bienestar animal, la higiene del proceso y el cumplimiento de la normatividad sanitaria vigente.
          p.mb-0 Debido a que estas operaciones siguen un orden definido dentro del proceso, se desarrollan a continuación de acuerdo con su secuencia técnica.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Insensibilización o aturdimiento
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-3(data-aos="fade-left")
            p La #[b insensibilización o aturdimiento] consiste en provocar la pérdida inmediata de la conciencia del animal antes del sacrificio mediante métodos autorizados, como el aturdimiento eléctrico o con dióxido de carbono (CO₂). Este procedimiento evita el dolor, reduce el estrés y constituye uno de los principios fundamentales del sacrificio humanitario. Un aturdimiento efectivo facilita la sangría, mejora el bienestar animal y contribuye a obtener una canal de mejor calidad. Los aspectos fundamentales de esta etapa son los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Objetivo:] consiste en provocar la pérdida inmediata de la conciencia para evitar el dolor y el sufrimiento. Antes de realizar la sangría, debe verificarse la ausencia de reflejos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Métodos autorizados:] comprenden el aturdimiento eléctrico o mediante atmósfera controlada con CO₂. Su aplicación requiere equipos calibrados y personal capacitado para garantizar el bienestar animal.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Tiempo de aplicación:] el aturdimiento debe preceder inmediatamente a la sangría para evitar la recuperación de la conciencia. Por esta razón, debe minimizarse el intervalo entre ambos procedimientos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado esperado:] el animal debe permanecer inconsciente y sin percepción del dolor. La eficacia del procedimiento requiere supervisión permanente antes de continuar con la sangría.
      p.mb-5 La eficacia del aturdimiento debe comprobarse antes de avanzar a la siguiente operación, con el fin de mantener las condiciones de sacrificio humanitario.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sangría
      p La #[b sangría] consiste en realizar el corte de los principales vasos sanguíneos inmediatamente después del aturdimiento para lograr un desangrado completo del animal. Este procedimiento mejora la conservación de la carne y disminuye el desarrollo de microorganismos. La operación debe ejecutarse rápidamente, mediante cuchillos higienizados y bajo estrictas condiciones sanitarias. Para su adecuada ejecución se consideran los siguientes aspectos:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          ul.fa-ul.estilo___ul.mb-0
            li.mb-3
              span.fa-li
                i.fas.fa-check-circle
              | #[b Objetivo:] busca extraer la mayor cantidad posible de sangre para favorecer la conservación y la inocuidad de la carne. Debe realizarse inmediatamente después del aturdimiento.
            li.mb-3
              span.fa-li
                i.fas.fa-check-circle
              | #[b Procedimiento:] comprende el seccionamiento de los principales vasos sanguíneos para favorecer un desangrado adecuado. Se deben utilizar cuchillos higienizados durante la operación.
            li.mb-3
              span.fa-li
                i.fas.fa-check-circle
              | #[b Beneficio:] un desangrado adecuado contribuye a disminuir la carga microbiana, mejorar el color y prolongar la vida útil de la carne, siempre que se evite la contaminación durante el procedimiento.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Control sanitario:] requiere supervisión veterinaria para garantizar el cumplimiento del procedimiento y conservar los registros correspondientes al proceso.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 500px").m-auto
      .caja-6.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img30.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 Una sangría ejecutada bajo condiciones sanitarias adecuadas favorece la conservación de la carne y permite continuar con las operaciones posteriores.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Escaldado
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.ajuste-3(data-aos="fade-left").mb-3
            p El #[b escaldado] consiste en sumergir la canal en agua caliente a temperatura controlada para aflojar el pelo y facilitar su eliminación. El control del tiempo y la temperatura evita daños en la piel y mejora la eficiencia del proceso. Esta etapa contribuye a obtener una canal limpia y con una mejor presentación comercial. Los principales aspectos de control son los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Objetivo:] busca ablandar el pelo para facilitar su retiro durante el depilado. Para evitar daños en la piel, deben controlarse el tiempo y la temperatura del proceso.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Temperatura:] el agua debe mantenerse caliente de acuerdo con los parámetros técnicos establecidos. Su monitoreo continuo favorece el retiro uniforme del pelo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Beneficio:] facilita el procesamiento posterior y contribuye a mejorar la presentación comercial de la canal. El agua debe renovarse periódicamente para mantener condiciones adecuadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Riesgos:] el exceso de temperatura o de tiempo puede deteriorar la piel y favorecer condiciones de contaminación, por lo que deben ajustarse los parámetros del proceso.
          p.mb-0 El control adecuado del escaldado facilita el depilado y disminuye el riesgo de deterioro de la superficie de la canal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Depilado
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-3(data-aos="fade-right").mb-3
            p El #[b depilado] consiste en retirar completamente el pelo de la canal mediante equipos mecánicos o procedimientos manuales. Posteriormente, se realiza una revisión para eliminar cualquier residuo que permanezca adherido a la piel. Una correcta eliminación del pelo mejora la higiene y facilita las etapas posteriores del beneficio. Durante esta operación deben considerarse las siguientes actividades:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Eliminación del pelo:] tiene como objetivo retirar completamente el pelaje para mejorar la higiene de la canal. Los equipos utilizados deben mantenerse limpios y contar con mantenimiento preventivo.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Revisión manual:] permite retirar los residuos de pelo que permanezcan adheridos y asegurar una superficie uniforme antes de continuar con el flameado.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Limpieza de equipos:] permite reducir el riesgo de contaminación y mantener las condiciones de inocuidad. Requiere procedimientos frecuentes de limpieza y desinfección.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado final:] se espera obtener una canal uniforme y limpia que facilite las operaciones posteriores. El operario debe verificar el resultado antes de continuar con el proceso.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 La correcta ejecución del depilado prepara la superficie de la canal para las operaciones posteriores de acondicionamiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Flameado y pulido
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-3(data-aos="fade-left")
            p El #[b flameado] elimina los pelos residuales mediante una llama controlada y contribuye a reducir la carga microbiana superficial. Posteriormente, el #[b pulido] limpia la superficie de la canal y mejora su presentación final. Estas operaciones fortalecen la calidad higiénica y comercial del producto. Sus principales componentes son los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Flameado:] tiene como finalidad eliminar los pelos residuales y contribuir a reducir la contaminación superficial. La aplicación de la llama debe controlarse para evitar quemaduras en la piel.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Pulido:] permite mejorar el acabado de la canal y obtener una superficie uniforme. Durante esta operación deben retirarse los residuos carbonizados generados previamente.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Lavado posterior:] permite retirar las partículas restantes y mejorar las condiciones de higiene. Para esta actividad debe utilizarse agua potable.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Inspección:] permite comprobar la limpieza completa de la superficie y el cumplimiento de las condiciones sanitarias mediante supervisión continua.
      p.mb-5  La combinación adecuada del flameado, el pulido y el lavado permite acondicionar la superficie de la canal antes de la evisceración.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evisceración
      p.mb-5 La evisceración consiste en extraer cuidadosamente las vísceras torácicas y abdominales, evitando perforaciones que puedan contaminar la canal. Durante esta etapa se realiza la inspección sanitaria de los órganos para detectar posibles alteraciones o enfermedades. Una evisceración adecuada protege la inocuidad y facilita la inspección veterinaria oficial. Las actividades principales son las siguientes:
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          ul.fa-ul.estilo___ul.mb-0
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Extracción de vísceras:] consiste en retirar los órganos internos evitando perforaciones del tracto digestivo que puedan contaminar la canal durante el procedimiento.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Inspección veterinaria:] permite evaluar los órganos y tejidos para detectar enfermedades o alteraciones. Los órganos que presenten lesiones deben separarse de acuerdo con los procedimientos sanitarios.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Clasificación:] permite diferenciar las vísceras comestibles de aquellas destinadas a decomiso, con el propósito de proteger la inocuidad y cumplir los protocolos sanitarios.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Higiene:] requiere mantener los utensilios limpios y aplicar procedimientos permanentes de higienización para disminuir el riesgo de contaminación cruzada.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 500px").m-auto
      .caja-6.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img30.svg', alt='' style="width: 85px").m-auto
          .col-xl.col-md-10
            p.mb-0 La correcta extracción y evaluación de las vísceras es fundamental para prevenir la contaminación y respaldar la decisión sanitaria sobre la canal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 División de la canal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.color-1.ajuste-3(data-aos="fade-left").mb-3
            p La #[b división de la canal] se realiza longitudinalmente mediante equipos adecuados para facilitar la inspección #[i post mortem], la refrigeración y el posterior procesamiento o comercialización. El procedimiento debe realizarse con herramientas higienizadas y bajo estrictas condiciones sanitarias. Los aspectos principales de esta operación son los siguientes:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Objetivo:] consiste en dividir longitudinalmente la canal para facilitar la inspección y la refrigeración. Los cortes deben realizarse de manera uniforme y precisa.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Equipos:] pueden utilizarse sierras eléctricas o manuales debidamente higienizadas. Su limpieza y desinfección continua contribuyen a prevenir la contaminación durante el corte.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado:] se obtienen dos medias canales uniformes, lo que facilita las operaciones posteriores de transporte y comercialización. El corte debe verificarse al finalizar.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Control sanitario:] comprende la inspección posterior al corte para identificar alteraciones y conservar el registro correspondiente al procedimiento.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
            .col-xl
              p.mb-0 La división adecuada de la canal facilita su evaluación sanitaria y prepara el producto para las operaciones posteriores.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Lavado y refrigeración
      p.mb-5 El #[b lavado] elimina los residuos visibles presentes en la superficie de la canal antes de su ingreso a las cámaras de refrigeración. Posteriormente, la #[b refrigeración] disminuye rápidamente la temperatura para limitar el crecimiento de microorganismos y conservar las características de la carne. Mantener la #[b cadena de frío] constituye una medida fundamental para garantizar la inocuidad y prolongar la vida útil del producto. Esta etapa comprende los siguientes componentes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Lavado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Lavado
              p.mb-0 Tiene como objetivo eliminar residuos visibles y reducir la contaminación superficial. Para esta operación debe utilizarse agua potable a presión.
        .py-3.py-md-4(titulo="Escurrido")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Escurrido
              p.mb-0 Permite retirar el exceso de agua de la superficie de la canal. Debe mantenerse un tiempo adecuado de drenaje para disminuir condiciones que favorezcan la proliferación microbiana.
        .py-3.py-md-4(titulo="Refrigeración")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Refrigeración
              p.mb-0 Busca disminuir rápidamente la temperatura de la canal para conservar su calidad e inocuidad. Durante esta etapa debe mantenerse la cadena de frío.
        .py-3.py-md-4(titulo="Almacenamiento")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Almacenamiento
              p.mb-0 Permite conservar la carne hasta su distribución y prolongar su vida útil. Requiere monitoreo permanente de la temperatura y conservación de los registros correspondientes.
      p.mb-0 El control del lavado, el escurrido, la refrigeración y el almacenamiento permite conservar las condiciones sanitarias alcanzadas durante el beneficio.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Inspección #[i post mortem]
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            p.mb-0 La #[b inspección #[i post mortem]] es la evaluación sanitaria realizada por el médico veterinario oficial después del beneficio del porcino. Su finalidad es verificar que la canal y las vísceras sean aptas para el consumo humano, detectar alteraciones sanitarias y prevenir riesgos para la salud pública.
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img30.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Esta inspección comprende la evaluación sanitaria de la canal y las vísceras, la determinación de decomisos cuando corresponda y el registro de las decisiones sanitarias adoptadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Evaluación sanitaria de la canal
      p.mb-5 Durante la inspección #[i post mortem] se examinan la canal, las vísceras y los ganglios linfáticos mediante evaluación, palpación e incisión cuando sea necesario. Se buscan lesiones, enfermedades, contaminación o alteraciones que puedan afectar la inocuidad de la carne. Solo las canales que cumplen con los requisitos sanitarios continúan el proceso de refrigeración y comercialización. La evaluación comprende los siguientes aspectos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Canal
                  p.mb-0 Se evalúa para detectar lesiones o alteraciones que puedan afectar su condición sanitaria y determinar su aptitud para continuar en el proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Vísceras
                  p.mb-0 Se examinan para identificar enfermedades, lesiones o contaminación que puedan comprometer la inocuidad de la carne.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ganglios linfáticos
                  p.mb-0 Se evalúan para identificar posibles procesos infecciosos y aportar información a la determinación sanitaria correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estado general
                  p.mb-0 Integra los hallazgos obtenidos durante la inspección para determinar la aptitud de la canal para el consumo humano.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img27.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La evaluación conjunta de estos elementos permite sustentar la decisión sanitaria sobre la aptitud de la canal y las vísceras.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Decomisos
      p.mb-5 El #[b decomiso] consiste en retirar parcial o totalmente las canales, vísceras o tejidos que presenten alteraciones sanitarias y representen un riesgo para la salud pública. Los decomisos pueden ser parciales cuando la lesión está localizada o totales cuando la enfermedad compromete toda la canal. De acuerdo con el alcance de la medida, se diferencian de la siguiente manera:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img28.jpg', alt="" ).m-auto
              h4.text-center Parcial
              .caja-3_p
                p.mb-0  Se elimina únicamente la parte afectada cuando la alteración se encuentra localizada y no compromete la totalidad de la canal.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img29.jpg', alt="" ).m-auto
              h4.text-center Total
              .caja-3_p
                p.mb-0  Comprende el decomiso de toda la canal cuando la condición sanitaria representa un riesgo que impide destinarla al consumo humano.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-3.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img30.jpg', alt="" ).m-auto
              h4.text-center Vísceras
              .caja-3_p
                p.mb-0 Comprende el retiro de los órganos que presentan lesiones o alteraciones identificadas durante la inspección sanitaria.
      p.mb-5 La determinación del decomiso permite retirar del proceso aquellas partes o canales que no cumplen con las condiciones sanitarias requeridas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registros sanitarios
      p.mb-5 Los resultados de la inspección post mortem deben registrarse como parte del sistema de trazabilidad de la planta. Estos registros permiten documentar los hallazgos, los decomisos realizados y las decisiones sanitarias adoptadas. La información registrada facilita el control oficial, la vigilancia epidemiológica y el cumplimiento de la normatividad sanitaria. Los principales registros comprenden:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img31.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Identificación del lote").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite registrar la procedencia de los animales y relacionar los resultados de la inspección con el lote correspondiente.
            .row(titulo="Hallazgos sanitarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Documenta las lesiones y alteraciones identificadas durante la inspección, como soporte de las decisiones sanitarias adoptadas.
            .row(titulo="Decomisos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra el tipo y la causa del decomiso aplicado a la canal, las vísceras o los tejidos afectados.
            .row(titulo="Concepto veterinario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra la decisión de aprobación o rechazo de la canal emitida como resultado de la evaluación sanitaria.
      p.mb-0 El registro adecuado de esta información fortalece la trazabilidad y permite conservar evidencia de las decisiones adoptadas durante la inspección #[i post mortem].

</template>

<script>
export default {
  name: 'Tema2',
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
