<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Procedimientos técnicos para el beneficio porcino
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los #[b procedimientos técnicos para el beneficio porcino] comprenden las actividades realizadas bajo criterios de bienestar animal, higiene y control sanitario. Su correcta ejecución garantiza un proceso eficiente y contribuye a la obtención de carne inocua y de calidad. Estos procedimientos requieren personal capacitado, equipos adecuados y el cumplimiento de las condiciones establecidas para el sacrificio humanitario.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Métodos de sacrificio humanitario
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          p El #[b sacrificio humanitario] consiste en provocar la pérdida inmediata de la conciencia del animal antes del desangrado, evitando dolor, sufrimiento y estrés innecesario. Este procedimiento debe realizarse por personal capacitado y mediante equipos autorizados.
          .caja-1(data-aos="fade-left")
            p.mb-0 La aplicación correcta del método de sacrificio mejora el bienestar animal y contribuye a obtener carne de mejor calidad. Para su adecuada ejecución, se deben considerar los métodos autorizados y los principios de bienestar animal durante el sacrificio.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Métodos autorizados
      p.mb-5 En las plantas de beneficio porcino se utilizan métodos de insensibilización autorizados, como el aturdimiento eléctrico y el aturdimiento con dióxido de carbono (CO₂), siempre bajo los parámetros técnicos establecidos por la normatividad vigente. El método seleccionado debe garantizar una pérdida rápida de la conciencia y mantener esta condición hasta el momento de la sangría. Los métodos incluidos son los siguientes:
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img3.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Eléctrico
          p.mb-0 Produce la pérdida inmediata de la conciencia mediante la aplicación de corriente eléctrica, de acuerdo con los parámetros técnicos establecidos para el procedimiento.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t3/img4.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Dióxido de carbono (CO₂)
          p.mb-0 Induce la insensibilización mediante la exposición controlada al gas, con el propósito de alcanzar la pérdida de la conciencia antes de la sangría.
      p.mb-5 Independientemente del método empleado, su correcta aplicación debe garantizar que el animal permanezca inconsciente hasta el momento de la sangría.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img3.png')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Bienestar animal durante el sacrificio
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t3/img5.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 El #[b bienestar animal] debe garantizarse durante todo el proceso de sacrificio mediante un manejo tranquilo, instalaciones adecuadas y procedimientos que eviten el dolor y el sufrimiento. El personal debe actuar con responsabilidad y cumplir los protocolos establecidos.
      p.mb-5 La supervisión veterinaria y la verificación permanente de la eficacia del aturdimiento son fundamentales para asegurar un sacrificio humanitario y el cumplimiento de la legislación vigente. Los principales criterios son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Manejo tranquilo
                  p.mb-0 Requiere evitar el estrés, los golpes y el maltrato durante la conducción y permanencia de los animales antes del sacrificio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aturdimiento eficaz
                  p.mb-0 Debe garantizar la pérdida inmediata de la conciencia y mantener esta condición hasta la realización de la sangría.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sangría inmediata
                  p.mb-0 Debe efectuarse inmediatamente después del aturdimiento para evitar que el animal recupere la conciencia durante el procedimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Supervisión veterinaria
                  p.mb-0 Permite verificar el cumplimiento de los procedimientos y de las condiciones sanitarias y de bienestar establecidas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Personal capacitado
                  p.mb-0 Debe aplicar correctamente los protocolos y utilizar los equipos de acuerdo con los procedimientos establecidos para el sacrificio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La aplicación conjunta de estos criterios permite desarrollar el sacrificio bajo condiciones adecuadas de bienestar animal, higiene y control sanitario.

</template>

<script>
export default {
  name: 'Tema3',
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
