<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-3(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p El componente formativo #[b recepción, beneficio porcino y manejo sostenible de subproductos] aborda los conocimientos y procedimientos necesarios para desarrollar de manera adecuada las etapas relacionadas con la recepción, el beneficio y el manejo posterior de los residuos y subproductos generados. Su desarrollo integra criterios técnicos, sanitarios, de bienestar animal, bioseguridad, trazabilidad e inocuidad, indispensables para contribuir a la obtención de carne porcina segura y de calidad.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='' style="width: 500px").m-auto
        .col-xl
          .caja-1.mb-3(data-aos="fade-left")
            p.mb-0 A lo largo del contenido se estudian los requisitos para el ingreso de los porcinos, la inspección ante mortem, las condiciones de bienestar durante la recepción, las etapas del proceso de beneficio y la inspección #[i post mortem]. También se profundiza en la aplicación de las #[b Buenas Prácticas Porcícolas (BPP)] y las #[b Buenas Prácticas de Manufactura (BPM)], así como en las medidas de higiene, control de contaminación y cumplimiento de los procedimientos técnicos establecidos.
          .row
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El componente incluye, además, el manejo y aprovechamiento de residuos y subproductos, la gestión ambiental, la producción sostenible y la normatividad relacionada con el bienestar animal y la operación en plantas de beneficio. De esta manera, el contenido articula las responsabilidades del personal con la protección de la salud pública, el cuidado de los animales, el cumplimiento normativo y el desarrollo de procesos porcícolas responsables y sostenibles.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
