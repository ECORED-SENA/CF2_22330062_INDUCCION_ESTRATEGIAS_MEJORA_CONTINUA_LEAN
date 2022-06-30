<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 El factor Humano en la implementación del #[em Lean]
    
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-left"
    )
      img(src="@/assets/curso/temas/tema4/img-1.svg" style="max-width: 449px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.col-xl-7.px-xl-4.mb-0 El factor humano es la clave principal para que un <b><em>proyecto Lean</em></b> salga a la perfección, debido a que se busca un compromiso de todos los empleados sin importar el cargo con el que cuenten dentro de la empresa y así lograr un compromiso total donde gobierne un buen trabajo en equipo y un gran liderazgo por parte de los mandos altos obteniendo mayores resultados siempre y cuando se entregue lo mejor de todos para cumplir con el objetivo.

    p.mb-5(data-aos="fade-right") Con este método se busca asignar responsabilidad entre todos los trabajadores que se encuentren involucrados con el proyecto promoviendo una buena comunicación y colaboración en la empresa donde deba ser la encargada de facilitar los recursos necesarios a cada uno de sus trabajadores y llevar a cabo un buen desarrollo del método #[em Lean]. 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_1 4.1.	Conceptos de liderazgo y trabajo de equipo, diferencias y características
    
    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      .col-xl-7.order-2.order-xl-1
        p Las competencias personales del líder desarrollan a los equipos de trabajo, como en toda competencia se requiere de una transferencia y es de vital importancia poder movilizar el conjunto de conocimientos que se han ido logrando a lo largo del tiempo para poderlos poner en práctica.
          br
          br
          | A continuación, se puede ver la definición de competencia personal del líder según los siguientes autores:
        
        .bloque-texto-b.color-secundario.p-4.pb-xl-5.cajon-comillas-color.mx-auto.mb-4(style="background-color: #F3F9FF; box-shadow: 0 3px 6px rgba(0, 0, 0, .16)")
          p.ps-xl-5 Torrelles, Coiduras, Isus, Carrera, París, y Cela (2011)
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="color: #35B5D5")
            h4.mb-0 “No es solo saber que para trabajar en equipo se debe comunicar con los compañeros, cooperar, sino que se tiene que saber hacer, saber estar y saber ser”.
            i.fas.fa-quote-right.float-end(style="color: #35B5D5")
        p Es un grado más en esta estructura compleja que culmina con la puesta en práctica de todo aquello que se sabe, o del conjunto de recursos adquiridos, de acuerdo con la fuente citada.    
      img(src="@/assets/curso/temas/tema4/img-2.jpg" style="max-width: 429px").col-xl-5.mb-4.mb-xl-auto.mx-auto.order-1.order-xl-2
    
    p.mb-5(data-aos="fade-right") Para no tener confusiones con estas terminologías, se pueden ver el concepto de liderazgo y de trabajo de equipo identificando características y diferencias:

    .d-flex.flex-wrap(data-aos="fade-left")
      .col-xl-6.px-xl-2.mb-4
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-3.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color: #F3F9FF !important")
              img(src="@/assets/curso/temas/tema4/img-5.svg" style="max-width: 109px").mb-4
              h3.fw-bold(style="color: black") Trabajo en equipo
              p(style="color: black") <b style="color: black">Concepto:</b>
                br
                |es la capacidad que tiene un conjunto de personas para trabajar en unión con el fin de lograr el mismo objetivo que se tiene en común.
                br
                br
                |<b style="color: black">Diferencias:</b>
                br
                |es el encargado de hacer y complementar cada función que se requiera para el desarrollo del resultado final obteniendo la responsabilidad del proceso que se está llevando a cabo.
                br
                br
                |<b style="color: black">Características:</b>
                br
                |objetivos en común, cooperación entre los integrantes, pensamientos similares en ideas y soluciones, saber compartir.


      .col-xl-6.px-xl-2.mb-4
        .tarjeta.tarjeta-flip.color-primario
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-4.jpg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5(style="background-color: #F3F9FF !important")
              img(src="@/assets/curso/temas/tema4/img-6.svg" style="max-width: 109px").mb-4
              h3.fw-bold(style="color: black") Liderazgo
              p(style="color: black") <b style="color: black">Concepto:</b>
                br
                |es influir con seguridad en la toma y desarrollo de decisiones en un grupo determinado.
                br
                br
                |<b style="color: black">Diferencia:</b>
                br
                |busca llevar a cabo el cumplimiento del objetivo por medio de alguien encargado de llevar el orden del camino que se debe tomar para lograr la solución que se espera  en el resultado final.
                br
                br
                |<b style="color: black">Características:</b>
                br
                |saber dirigir, influenciar, escuchar, tener buena capacidad comunicativa, tener compromiso.
      
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_2 4.2.	 Desarrollo de un equipo de trabajo
    
    p.mb-5 Según el psicólogo Bruce Tuckman (1965), los equipos de trabajo pasan por 5 etapas de desarrollo: formación, asalto, normalización, actuación y clausura.

    ImagenInfografica.color-secundario.mb-5.container-img-infografica(data-aos="fade-right")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema4/img-7.svg')

      .tarjeta-img-infografica(x="25%" y="25%" numero="")
        .ps-2
          .titulo-sexto.color-primario.mb-0.p-0
            h5.ps-2 Etapa de la formación: 
        p.mb-0.px-3 es la etapa donde las personas que van a formar el equipo se dan a conocer dando una buena presentación e impresión a los demás compañeros del cual harán parte del equipo de trabajo.

      .tarjeta-img-infografica(x="33%" y="57%" numero="")
        .ps-2
          .titulo-sexto.color-primario.mb-0.p-0
            h5.ps-2 Etapa de normalización:
        p.mb-0.px-3 es la etapa donde se empieza a comprender y apreciar las fortalezas de cada uno de los integrantes del grupo entrando en razonamiento de las cosas malas que se estaban llevando y se deben corregir.
      
      .tarjeta-img-infografica(x="51%" y="52%" numero="")
        .ps-2
          .titulo-sexto.color-primario.mb-0.p-0
            h5.ps-2 Etapa de actuación:
        p.mb-0.px-3 es la etapa donde los miembros del equipo han tomado más confianza y llegan a sentirse seguros de lo que han venido realizando.
      
      .tarjeta-img-infografica(x="10%" y="67%" numero="")
        .ps-2
          .titulo-sexto.color-primario.mb-0.p-0
            h5.ps-2 Etapa de asalto: 
        p.mb-0.px-3 es la etapa donde comienzan los ideales y pensamientos de los integrantes a conocerse.

      .tarjeta-img-infografica(x="82%" y="73%" numero="")
        .ps-2
          .titulo-sexto.color-primario.mb-0.p-0
            h5.ps-2 Etapa de clausura:
        p.mb-0.px-3 es la etapa donde el trabajo de equipo logra su objetivo final, viendo los resultados que obtuvieron a lo largo del tiempo, es la etapa que concluye todo el proceso.
    img(src="@/assets/curso/temas/tema4/bg-1.png" style="margin-right: -3rem; margin-left: -3rem; min-width: calc(100% + 6rem); position: absolute;")
    p.mb-5(data-aos="fade-left") Para construir un nuevo escenario, en donde los fundamentos del #[em Lean Manufacturing] se vean reflejados y ejecutados, es primordial desarrollar un equipo de trabajo para garantizar el éxito en esta cultura de cooperación y comunicación. Existen diversos beneficios y motivaciones para implementar el trabajo colectivo en grupos multidisciplinares, tales como:

    img(src='@/assets/curso/temas/tema4/img-8.svg' data-aos="fade-right").col-lg-10.col-xl-8.mx-auto.mb-5

    p.mb-4(data-aos="fade-left") Por ende, se evidencia que contar con equipos de trabajo conformados por personas motivadas, comprometidas y dispuestas a compartir sus conocimientos aseguran el éxito en el proceso, otorgándole a la empresa resultados óptimos y eficientes a través de buenas prácticas coordinadas por los objetivos iniciales.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_4_3 4.3.	 Comunicación en el equipo de trabajo

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      p.col-xl-7.px-xl-4.mb-0 La comunicación en un equipo de trabajo es uno de los factores más esenciales que debe haber para que el equipo funcione, ya que la buena comunicación genera un entorno que impulsa un rendimiento excelente por medio de la confianza que se genera al dejar claras las ideas y objetivos que se buscan llevar a cabo obteniendo una buena comunicación de lo que se debe hacer entre todos los integrantes que forman el equipo de trabajo.
      img(src="@/assets/curso/temas/tema4/img-9.svg" style="max-width: 544px").col-xl-5.mb-4.mb-xl-0.mx-auto

    .d-flex.flex-wrap.mb-5(data-aos="fade-left")
      img(src="@/assets/curso/temas/tema4/img-10.jpg" style="max-width: 505px").col.xl-5.mx-auto.mb-4.mb-xl-auto
      .col-xl-7
        p Conocer en qué consiste la comunicación y diferentes formas mediante las cuales es posible la comunicación permite obtener una calidad de intercambio en la información siendo un factor clave de éxito en lo que se está desarrollando, es por eso, que cuando en un equipo de trabajo no existe una buena comunicación siempre se fracasa, ya que no saben cómo expresar las ideas y pensamientos ante el grupo de trabajo con el que van a interactuar.
          br
          br
          |En esencia, desarrollar el modelo en mano de miembros comprometidos no solo con los objetivos, sino también dispuestos a aprender, aportar conocimientos y mejorar colectivamente genera un ambiente de disposición, el cual permite dar paso a la colaboración y comunicación integral entre operarios, directivos y otros mandos.
        .cajon.color-primario.cajon-t4-1.p-4.mb-4(style="background-color: #F3F9FF; box-shadow: 0 3px 6px rgba(0, 0, 0, .16)")
          p De esta forma, el rol de la comunicación juega un papel clave en el modelo debido a que crea conciencia de grupo y conlleva a una estrecha colaboración activa, lo cual se traduce en la resolución de conflictos y/o dudas que puedan entorpecer el proceso, logrando así el esperado éxito colectivo. A continuación, se puede observar el proceso de comunicación asertiva en un equipo de trabajo (ver figura 5):

    div(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-3.png')})`}"
      style="background-repeat: no-repeat; background-position: top; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
    )
      .titulo-sexto.color-acento-contenido.mb-5
        h5 Figura 5.
        span Comunicación Asertiva en el equipo de trabajo.
      img(src="@/assets/curso/temas/tema4/img-11.svg" style="max-width: 505px" data-aos="fade-left").col-lg-10.col.xl-6.mx-auto.pb-5
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaFlip: true,
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

<style lang="sass">
.cajon-comillas-color.bloque-texto-b.color-secundario:before
    background-color: #C8D1DD !important
    height: 60px
.container-img-infografica
  .img-infografica__card
    min-width: 380px
  .tarjeta-img-infografica
    position: relative
    padding: 1rem 0
    background-color: #FFF7E6
    border-radius: 10px
  @media (max-width: 768px)
    .img-infografica__card
      min-width: auto
.cajon-t4-1.cajon.color-primario:before
    background-color: #93B0D0 !important
</style>
