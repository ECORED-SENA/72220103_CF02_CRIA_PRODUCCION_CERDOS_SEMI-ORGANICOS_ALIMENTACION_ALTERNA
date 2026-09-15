<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Bienestar animal y normatividad vigente
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El #[b bienestar animal] y el cumplimiento de la #[b normatividad vigente] son fundamentales durante el beneficio porcino para garantizar un manejo humanitario, proteger la salud pública y obtener carne inocua y de calidad. Todas las actividades deben realizarse bajo criterios técnicos, sanitarios y éticos establecidos por la legislación colombiana.
          .caja-1(data-aos="fade-right")
            p.mb-0 Su adecuada aplicación requiere integrar condiciones de bienestar, medidas de bioseguridad, cumplimiento normativo y responsabilidades específicas por parte del personal que interviene en el proceso.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img1.png', alt='' style="width: 500px").m-auto
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Bienestar animal en el beneficio porcino
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El #[b bienestar animal] comprende las condiciones físicas y comportamentales orientadas a minimizar el dolor, el miedo y el estrés durante la recepción, permanencia y beneficio de los porcinos. Su aplicación mejora la calidad de la canal, reduce pérdidas económicas y favorece el cumplimiento de la legislación vigente. Los principales beneficios asociados con el bienestar animal son los siguientes:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Menor estrés")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Menor estrés
              p.mb-0 Contribuye a conservar mejores condiciones de la carne y disminuye alteraciones asociadas con situaciones de miedo o tensión durante el manejo.
        .py-3.py-md-4(titulo="Manejo adecuado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Manejo adecuado
              p.mb-0 Reduce la ocurrencia de lesiones y decomisos al favorecer procedimientos de conducción y manipulación acordes con las necesidades de los animales.
        .py-3.py-md-4(titulo="Bienestar animal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bienestar animal
              p.mb-0 Favorece la aplicación de prácticas de sacrificio humanitario orientadas a disminuir el dolor y el sufrimiento innecesario.
        .py-3.py-md-4(titulo="Cumplimiento legal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Cumplimiento legal
              p.mb-0 Permite desarrollar las actividades de manejo y beneficio conforme a los requisitos establecidos por la normatividad aplicable.
      p.mb-5 La incorporación de estos criterios durante el beneficio contribuye tanto a la protección de los animales como a la calidad sanitaria del proceso.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios de bienestar animal
      p.mb-5 Los principios del #[b bienestar animal] buscan asegurar que los porcinos permanezcan libres de hambre, sed, dolor, lesiones, miedo y estrés innecesario. También promueven instalaciones adecuadas, acceso permanente al agua y un manejo respetuoso durante todo el proceso. Estos principios constituyen la base de las #[b Buenas Prácticas Porcícolas (BPP)] y del sacrificio humanitario. Su aplicación comprende los siguientes aspectos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alimentación y agua
                  p.mb-0 Requiere garantizar las condiciones necesarias de suministro y disponibilidad, especialmente de agua, durante la permanencia de los animales en las instalaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Instalaciones adecuadas
                  p.mb-0 Deben permitir el desplazamiento y permanencia de los porcinos en condiciones que reduzcan el riesgo de lesiones, miedo y estrés.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo humanitario
                  p.mb-0 Comprende prácticas de conducción y manipulación orientadas a reducir el sufrimiento y evitar acciones que causen dolor innecesario.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Protección sanitaria
                  p.mb-0 Incluye medidas destinadas a prevenir enfermedades y mantener condiciones adecuadas de salud durante el proceso de beneficio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La aplicación conjunta de estos principios permite fortalecer las condiciones de bienestar durante la permanencia y el sacrificio de los animales.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo humanitario
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-3(data-aos="fade-right")
            p El #[b manejo humanitario] consiste en movilizar, conducir e insensibilizar los animales evitando golpes, maltrato y prácticas que ocasionen sufrimiento innecesario. El personal debe utilizar métodos autorizados y equipos adecuados. Un manejo correcto disminuye el estrés, mejora la calidad de la canal y protege el bienestar animal. Las actividades principales deben desarrollarse bajo los siguientes criterios:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Descarga:] Debe realizarse en condiciones que eviten golpes y caídas, utilizando procedimientos que faciliten el desplazamiento seguro de los porcinos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Conducción:] Debe efectuarse de manera tranquila, reduciendo factores que puedan generar miedo, aglomeraciones, estrés o lesiones.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Insensibilización:] Debe realizarse mediante métodos autorizados y bajo los parámetros técnicos establecidos para garantizar la pérdida de la conciencia antes del sacrificio.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Sacrificio:] Debe ejecutarse inmediatamente después del aturdimiento para evitar que el animal recupere la conciencia durante el procedimiento.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img10.png', alt='' style="width: 500px").m-auto
      p.mb-5 La correcta ejecución de estas actividades permite mantener condiciones de manejo compatibles con los principios de bienestar animal.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores de bienestar
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los #[b indicadores de bienestar] permiten evaluar si los animales fueron manejados correctamente durante el beneficio. Para ello, se consideran aspectos relacionados con el comportamiento, la presencia de lesiones, las vocalizaciones, las caídas y la efectividad de la insensibilización. El seguimiento de estos indicadores facilita la identificación de situaciones que requieren ajustes y fortalece la mejora continua del proceso.
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img11.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Lesiones
              p.mb-0.text-center Permiten evaluar la calidad del manejo e identificar posibles deficiencias durante la descarga, conducción o permanencia de los animales.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img12.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Vocalizaciones
              p.mb-0.text-center Pueden relacionarse con situaciones de estrés y permiten identificar condiciones de manejo que requieren atención o corrección.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img13.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Caídas
              p.mb-0.text-center Permiten evaluar las condiciones de movilización, las características de las instalaciones y la forma en que se conduce a los animales.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img14.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Efectividad del aturdimiento
              p.mb-0.text-center Permite comprobar la pérdida inmediata de la sensibilidad y determinar si la insensibilización cumple con el resultado esperado antes de la sangría.
      p.mb-5 El seguimiento sistemático de estos indicadores aporta información para ajustar las prácticas de manejo y fortalecer el bienestar animal.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Bioseguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            p.mb-0 El beneficio porcino debe desarrollarse conforme a la legislación colombiana relacionada con #[b bienestar animal, inocuidad, bioseguridad, protección ambiental y Buenas Prácticas Porcícolas].
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img20.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El conocimiento y la aplicación de estas disposiciones permiten desarrollar procesos respaldados por los requisitos legales y sanitarios correspondientes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img15.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas Prácticas Porcícolas (Resolución ICA 76509 de 2020)
      p.mb-5 La #[b Resolución ICA 76509 de 2020] establece los requisitos para la implementación de las #[b Buenas Prácticas Porcícolas], orientadas a fortalecer la bioseguridad, el bienestar animal, la trazabilidad y la inocuidad de la producción. Su aplicación favorece la producción responsable y la calidad sanitaria de los animales destinados al beneficio. Entre los componentes señalados se encuentran:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Bioseguridad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img16.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bioseguridad
              p.mb-0 Comprende medidas orientadas a prevenir enfermedades y reducir los riesgos sanitarios dentro del sistema de producción porcina.
        .py-3.py-md-4(titulo="Bienestar animal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Bienestar animal
              p.mb-0 Promueve un manejo adecuado de los porcinos bajo condiciones orientadas a proteger su integridad y reducir el sufrimiento.
        .py-3.py-md-4(titulo="Registros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registros
              p.mb-0 Permiten conservar información del proceso y garantizar el seguimiento y la trazabilidad de los animales y las actividades realizadas.
        .py-3.py-md-4(titulo="Sanidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sanidad
              p.mb-0 Comprende acciones destinadas a proteger las condiciones sanitarias de la producción y prevenir problemas que puedan afectar a los animales.
      p.mb-5 Estos componentes articulan las medidas sanitarias y de manejo requeridas dentro de las Buenas Prácticas Porcícolas.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ley 1774 de 2016 – Bienestar animal
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-1(data-aos="fade-right").color-1.mb-3
            p La #[b Ley 1774 de 2016] reconoce a los animales como seres sintientes y establece la obligación de brindarles protección y evitar el maltrato durante las diferentes etapas de manejo y beneficio. El incumplimiento de estas disposiciones puede generar las consecuencias establecidas en la legislación aplicable. Sus principios se relacionan con los siguientes aspectos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Protección animal:] orienta las prácticas de manejo hacia la prevención del sufrimiento innecesario y la protección de la integridad de los animales.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Trato digno:] requiere aplicar procedimientos respetuosos durante la movilización, permanencia y sacrificio de los porcinos.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Responsabilidad:] implica cumplir las disposiciones legales relacionadas con la protección y el bienestar de los animales durante el proceso.
          p.mb-0 La aplicación de estos principios fortalece el componente ético y legal del manejo de los porcinos durante el beneficio.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img20.png', alt='' style="width: 500px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Buenas Prácticas de Manufactura (BPM)
      p.mb-5 Las #[b Buenas Prácticas de Manufactura (BPM)] establecen los procedimientos necesarios para garantizar condiciones higiénicas durante el beneficio, procesamiento y manejo de la carne. Su implementación reduce los riesgos de contaminación y fortalece la inocuidad del producto. Sus principales componentes comprenden:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Higiene del personal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Higiene del personal
              p.mb-0 Comprende las prácticas orientadas a evitar que los trabajadores se conviertan en una fuente de contaminación durante el proceso.
        .py-3.py-md-4(titulo="Limpieza y desinfección")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Limpieza y desinfección
              p.mb-0 Permiten mantener las áreas, equipos y superficies en condiciones sanitarias adecuadas mediante procedimientos de higienización.
        .py-3.py-md-4(titulo="Control de procesos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Control de procesos
              p.mb-0 Permite mantener bajo seguimiento las actividades desarrolladas para favorecer la calidad y la inocuidad del producto.
        .py-3.py-md-4(titulo="Registros")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Registros
              p.mb-0 Permiten documentar las actividades y conservar evidencia del cumplimiento de los procedimientos establecidos.
      p.mb-5 La aplicación conjunta de estos componentes fortalece las condiciones higiénicas requeridas durante el beneficio porcino.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Normatividad sanitaria y ambiental aplicable
      p.mb-5 El beneficio porcino debe cumplir las disposiciones relacionadas con inspección sanitaria, protección ambiental, bienestar animal y gestión de residuos. Estas normas orientan el desarrollo de procesos seguros, sostenibles y compatibles con la protección de la salud pública. Entre las principales disposiciones incluidas se encuentran:
      p.mb-5 
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img25.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Decreto 1500 de 2007").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Regula aspectos relacionados con el sistema oficial de inspección, vigilancia y control de carnes dentro del marco sanitario aplicable.
            .row(titulo="Resolución ICA 76509 de 2020").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece requisitos asociados con las Buenas Prácticas Porcícolas y los componentes de sanidad, bioseguridad, trazabilidad y bienestar animal.
            .row(titulo="Resolución 2674 de 2013").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye disposiciones relacionadas con las Buenas Prácticas de Manufactura y las condiciones sanitarias aplicables al manejo de alimentos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Ley 1774 de 2016").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece disposiciones relacionadas con la protección y el bienestar animal y reconoce a los animales como seres sintientes.
            .row(titulo="Decreto 1076 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reúne disposiciones relacionadas con la normatividad ambiental aplicable a las actividades que pueden generar impactos sobre los recursos naturales.
            .row(titulo="Resolución 631 de 2015").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye disposiciones relacionadas con los vertimientos y su control dentro del manejo ambiental correspondiente.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img26.png", alt="" style="width: 300px").m-auto
      p.mb-0 El cumplimiento articulado de estas disposiciones permite integrar los componentes sanitarios, ambientales y de bienestar animal dentro del proceso de beneficio porcino.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Normatividad vigente
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img27.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El #[b operario] es responsable de cumplir los procedimientos establecidos para garantizar el bienestar animal, la bioseguridad, la inocuidad y la calidad del proceso de beneficio. Su desempeño influye directamente en la seguridad alimentaria y en el cumplimiento de la normatividad vigente. Estas responsabilidades comprenden la aplicación de protocolos, el diligenciamiento de registros y la ejecución segura de las actividades.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cumplimiento de protocolos
      p.mb-5 El operario debe seguir los procedimientos establecidos para recepción, movilización, sacrificio, limpieza, desinfección y manejo de residuos, utilizando correctamente los equipos y los elementos de protección personal. El cumplimiento de los protocolos reduce errores y fortalece la calidad del proceso. Las principales responsabilidades se relacionan con las siguientes actividades:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recepción
                  p.mb-0 Comprende el cumplimiento de las actividades asignadas para verificar las condiciones sanitarias y apoyar el control del ingreso de los animales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Beneficio
                  p.mb-0 Requiere aplicar correctamente los procedimientos técnicos definidos para cada una de las etapas del proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Higiene
                  p.mb-0 Comprende el cumplimiento de las actividades de limpieza y desinfección requeridas para mantener condiciones sanitarias adecuadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Bienestar animal
                  p.mb-0 Implica evitar el maltrato y aplicar prácticas de manejo que reduzcan el dolor, el miedo, el estrés y las lesiones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img31.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El desempeño adecuado de estas responsabilidades contribuye a mantener la uniformidad y seguridad de las operaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registros y trazabilidad
      p.mb-5 El operario debe diligenciar correctamente los registros relacionados con inspecciones, limpieza, desinfección, decomisos y trazabilidad de los animales. La información registrada permite demostrar el cumplimiento de los requisitos sanitarios y facilitar los procesos de auditoría y seguimiento. Los principales registros comprenden:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recepción de animales
                  p.mb-0 Permite documentar la información asociada con el ingreso de los porcinos y mantener el control correspondiente a esta etapa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Inspección sanitaria
                  p.mb-0 Conserva evidencia de las evaluaciones realizadas y de las condiciones sanitarias identificadas durante el proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Limpieza y desinfección
                  p.mb-0 Permite realizar seguimiento a las actividades de bioseguridad e higiene aplicadas en instalaciones, equipos y superficies.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Decomisos
                  p.mb-0 Documenta las decisiones relacionadas con el retiro de canales, tejidos u órganos que no cumplen con las condiciones sanitarias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Trazabilidad
                  p.mb-0 Permite relacionar la identificación de los animales, lotes y productos con las diferentes etapas desarrolladas durante el proceso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img32.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El correcto diligenciamiento de estos registros fortalece el control documental y permite mantener la continuidad de la información.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Seguridad e inocuidad durante el beneficio
      p.mb-5 El operario debe desarrollar sus actividades utilizando los #[b elementos de protección personal], respetando los protocolos sanitarios y evitando cualquier acción que comprometa la inocuidad de la carne. La aplicación permanente de estas medidas protege la salud del consumidor y del trabajador y contribuye a desarrollar un proceso de beneficio seguro y de calidad. Entre las principales acciones se encuentran:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img25.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Uso correcto de EPP").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Contribuye a proteger al trabajador frente a los riesgos asociados con las actividades desarrolladas durante el proceso de beneficio.
            .row(titulo="Aplicación de BPM").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece el mantenimiento de condiciones higiénicas y contribuye a obtener carne inocua y segura para el consumo.
            .row(titulo="Prevención de contaminación cruzada").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce la transferencia de contaminantes entre superficies, equipos, áreas y productos, protegiendo la calidad sanitaria de la carne.
            .row(titulo="Cumplimiento de protocolos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite desarrollar las actividades de manera estandarizada y conforme a los procedimientos técnicos y sanitarios establecidos.
      p.mb-0 El cumplimiento de estas acciones integra la seguridad del trabajador con la protección de la inocuidad y la calidad sanitaria del producto.

</template>

<script>
export default {
  name: 'Tema6',
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
