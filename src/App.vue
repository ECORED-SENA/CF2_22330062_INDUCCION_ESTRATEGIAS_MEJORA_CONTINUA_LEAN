<template lang="pug">
#app.app
  Header
  .contenedor-principal
    AsideMenu
    section.seccion-principal(:class="{'seccion-principal--barra-avance-open' : !menuState}")
      router-view
  BarraAvance
  Accesibilidad
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    menuOpen: false,
  }),
  computed: {
    menuState() {
      return this.$store.getters.isMenuOpen
    },
  },
  mounted() {
    this.$aos.init({
      offset: 100,
    })
  },
}
</script>

<style lang="sass">
.banner-principal
  .tarjeta
    max-height: 506px
  .banner-principal__img
    padding-top: 2.4rem !important
    padding-right: 0 !important
.decorador-titulo
  display: flex
  .container-decorador
    display: flex
    align-items: flex-end
    height: 70px
    background: linear-gradient(0deg, rgba(169,227,241,1) 0%, rgba(169,227,241,1) 50%, rgba(255,255,255,1) 50%)
</style>
