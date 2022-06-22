<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El siguiente mapa mental resume las temáticas desarrolladas en el componente formativo sobre los conceptos de valor agregado, mejora continua, fases para la implementación del Lean <em>Manufacturing</em>, la importancia del factor humano en las oportunidades de mejora, formatos para medir procesos e indicadores de evaluación.

    img(src="@/assets/curso/temas/sintesis.svg").mb-5
    .col-md-3.mx-auto
      a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
