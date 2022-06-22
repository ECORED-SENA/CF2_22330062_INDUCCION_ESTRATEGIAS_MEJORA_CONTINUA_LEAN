<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(style="background-color: #35B5D5;")
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-0.pb-4(:style="{'background-image': `url(${require('@/assets/curso/bg-1.svg')})`}" style="background-repeat: no-repeat; background-position: bottom;") Este componente formativo tiene como propósito determinar oportunidades de mejora continua en el proceso productivo según estándares y determinar estos modelos de evaluación del proceso, a partir de principios de manufactura esbelta, su desarrollo aplica metodologías basadas en investigación tipo exploratoria que acude a fuentes secundarias de información para los análisis de los temas tratados.
      br
      br
      | Para comenzar, se invita a explorar el video introductorio que se presenta a continuación, donde se relaciona la temática a tratar:

    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
