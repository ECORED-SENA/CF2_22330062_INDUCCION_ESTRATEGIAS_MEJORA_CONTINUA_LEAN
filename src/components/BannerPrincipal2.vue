<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
    style="min-height: 506px; display: flex; overflow: hidden;"
  )
    .row.banner-principal__row
      .col-lg-7.col-xxl-5.ps-4.ps-sm-5.py-4.py-sm-5.banner-principal__info
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .banner-principal__descripcion
          p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span.me-1 Ver más
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img
        img(:src="globalData.imagenBannerPrincipal")
        div(v-for="img in extraImgs" :class="img.clases")
          img(:src="img.imagen")
    .imagen_flotante_1: img(src="@/assets/curso/portada/flot1.svg").d-none.d-lg-block
    .imagen_flotante_2: img(src="@/assets/curso/portada/flot2.svg").d-none.d-lg-block
    .imagen_flotante_3: img(src="@/assets/curso/portada/flot3.svg").d-none.d-lg-block

  
</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.img-banner-1
  top: 0 !important
  right: -4% !important
  img
    min-width: 530px
    max-width: 530px
    position: absolute
    z-index: 1
  @media (max-width: 1400px)
    right: -8.5% !important
.img-p
  top: 3%
  right: -2%
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100%
  width: 100%
.banner-principal__info
  padding-left: 80px  !important
  z-index: 3
  @media (max-width: 768px)
    padding-left: 2rem !important
    z-index: 0
.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
  .tarjeta
    background-color: #F8F5F4
    background-size: cover
    //background-position: center
  &__info
    display: flex
    flex-direction: column
    justify-content: center
  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px
  &__componente
    margin-bottom: 20px
    h1
      line-height: 1.1em
      @media (max-width: $bp-max-xs)
        font-size: 2em
  &__descripcion
    margin-bottom: 20px
  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 3rem!important
  &__img
    animation: scale 5s ease-in-out infinite alternate
    @if $banner-principal-img-y == 'arriba'
      align-self: flex-start
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-bottom: 3rem!important
    @else if $banner-principal-img-y == 'abajo'
      align-self: flex-end
      padding-top: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
    @else
      align-self: center
      padding-top: 1.5rem
      padding-bottom: 1.5rem
      @media (min-width: $bp-min-sm)
        padding-top: 3rem!important
        padding-bottom: 3rem!important
.imagen_flotante
  &_1
    animation: float1 3.2s ease-in-out infinite alternate
    position: absolute
    width: 118px
    top: 27%
    right: 35%
    z-index: 2
  &_2
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 212px
    top: 50%
    right: 14%
    z-index: 2
  &_3
    animation: float1 3.3s ease-in-out infinite alternate
    position: absolute
    width: 166px
    top: 18%
    right: 8%
    z-index: 2
  &_4
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 134px
    top: 30%
    left: 55%
    z-index: 2
  &_5
    animation: float1 3.9s ease-in-out infinite alternate
    position: absolute
    width: 40px
    top: 3%
    left: 30%
    z-index: 99
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 167px
    top: 30%
    right: 3%
    z-index: 99
  &_7
    animation: float1 2.5s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 10%
    right: 3%
    z-index: 99
  &_8
    filter: blur(1px)
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 50px
    bottom: 20%
    right: 8%
    z-index: 99
@keyframes flash
  0%
    width: 0
    height: 0
  5%
    width: 50px
    height: 50px
  5.5%
    width: 100px
    height: 100px
  6%
    width: 150px
    height: 150px
  6.5%
    width: 200px
    height: 200px
  7%
    width: 0
    height: 0
  7.5%
    width: 50px
    height: 50px
  8%
    width: 100px
    height: 100px
  8.5%
    width: 150px
    height: 150px
  9%
    width: 200px
    height: 200px
  10%
    width: 0
    height: 0
@keyframes float1
  0%
    transform: translateY(20px)
  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.1)
  100%
    transform: scale(1)
@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
