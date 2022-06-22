<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 Conocer los formatos para la documentación de mejoras de procesos
    
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema3/img-1.svg" style="max-width: 449px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.col-xl-7.px-xl-4.mb-0 En las mejoras de procesos se busca implementar mecanismos de control para la mejoría de resultados a través de un trabajo forzado y continuo en una organización dentro de sí misma en un claro enfoque de procesos del cual se lleva el seguimiento de sus resultados a través de evaluación e indicadores de metas.

    p.mb-5 Para la mejora de procesos, se necesita hacer una documentación clara y correcta y para ello se deben identificar las partes del proceso, siendo estos (ver figura 2):

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 2.
      span Formatos

    img(src="@/assets/curso/temas/tema3/img-2.svg" data-aos="fade-left").mb-5

    p.mb-5 Una vez identificadas las partes de un proceso y encontrados los puntos vulnerables que se ven redundantes o se benefician de mejoras presentadas por Lean Manufacturing, se utilizan “formatos” o plantillas prediseñadas para realizar la documentación de mejoras del proceso, algunos ejemplos son (ver figura 4):

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 3.
      span Identificación de las partes de un proceso

    .d-flex.flex-wrap.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 711px").mb-4.mb-xl-0.col-xl-7.mx-auto
      .col-xl-5.px-xl-2
        p.p-4(style="background-color: #E8F1FF; box-shadow: 0 3px 6px rgba(0, 0, 0, .16)") Estos formatos nos permiten llevar un control del proceso donde se conozca la información necesaria para poder empezar una planificación de la mejora donde se deja establecido lo que se quiere mejorar y que se va a llevar a cabo para luego ser ejecutado. Al ser ejecutado se realiza una evaluación donde se busca encontrar los errores que se presentan continuamente para luego actuar y ser corregidos buscando el fin de la mejora.

    p.mb-5(data-aos="fade-left") En la siguiente figura 5 se presenta los mecanismos que se deben utilizar para conocer todos los aspectos claves en el desarrollo de implementación de procesos de mejora:

    .titulo-sexto.color-acento-contenido.mb-5
      h5 Figura 4.
      span Formatos usados en la documentación de <em>Lean Manufacturing</em>

    img(src="@/assets/curso/temas/tema3/img-4.svg" data-aos="fade-right").col-12.col-md-6.mx-auto

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
