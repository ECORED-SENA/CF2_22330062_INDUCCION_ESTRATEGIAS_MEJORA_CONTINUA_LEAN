<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Concepto de mejora continua

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.bloque-img-text-1.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/temas/tema2/img-1_1.png").img-mascara
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.fw-bold Este concepto se originó de una filosofía japonesa <em>KAIZEN</em>, cuyo nombre está compuesto de las palabras: <em>KAI</em> – Cambio y <em>ZEN</em> – bondad o bueno. Por lo que se interpreta como “bondad del cambio” o un “cambio bueno”. Para las empresas hoy en día representa un papel primordial en su funcionamiento ya que orienta las actividades o estrategias del proceso encaminados a la calidad y excelencia. Es necesario comprender que, con el objetivo de mantener el posicionamiento y calidad del producto, se deben revisar y mejorar continuamente sus procedimientos, sistemas y actividades realizadas por la empresa.

    p.mb-0 En la siguiente imagen se presentan 10 puntos clave del sistema Kaizen en la excelencia de las operaciones de mejora continua en las empresas, a continuación, se pueden ver: 

    img(src="@/assets/curso/temas/tema2/img-2.png" data-aos="fade-left" style="margin-left: -3rem; margin-right: -3rem; min-width: calc(100% + 6rem);").mb-5

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_1 2.1.	Variables y restricciones inherentes al proceso productivo
    
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema2/img-3.svg" style="max-width: 449px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.col-xl-7.px-xl-4.mb-0 La mejora continua debe significar una forma de vida dentro de la empresa que genera oportunidades, es importante que para aumentar la competitividad en las organizaciones se utilice esta herramienta valiosa y fundamental, la cual hará lograr este objetivo. También es considerada como una filosofía que se apunta al aprovechamiento de los recursos de la empresa, especialmente los recursos humanos y el aprendizaje interno.

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-left"
    )
      p.col-xl-7.px-xl-4.mb-5 Por otro lado, como ya se mencionó, la mejora continua se conoce como Kaizen en el enfoque Lean Manufacturing, el cual busca que se involucren todo el personal de la organización, incluyendo directivos y colaboradores por igual. El Kaizen busca mejorar la actitud de las personas, considerando que los esfuerzos conciben mejores resultados a largo plazo; sostiene que en el lugar de trabajo los colaboradores deben mantener y mejorar los niveles laborales con el fin de mejorar el rendimiento de cada proceso, lo cual representa una mejora en el desempeño laboral.
      img(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 540px").col-xl-5.mb-4.mb-xl-0.mx-auto
    
    p.mb-5 Por tanto, es importante resaltar los siguientes aspectos que toman gran relevancia en la implementación de este sistema en las empresas:

    SlyderF.mb-5.slider-edit-1(columnas="col-lg-6 col-xl-4" data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-5.png' style="max-width: 140px").mx-auto
        h4.text-center 1. Incrementa los niveles de productividad y rendimiento de la maquinaria.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-6.png' style="max-width: 140px").mx-auto
        h4.text-center 2. Productos o servicios de alta calidad a diferencia de nuestros competidores.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-7.png' style="max-width: 140px").mx-auto
        h4.text-center 3. Realiza procedimientos más eficientes y eficaces.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-8.png' style="max-width: 140px").mx-auto
        h4.text-center 4. Tiempos mínimos en procesos productivos.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-9.png' style="max-width: 140px").mx-auto
        h4.text-center 5. Optimización de costos y gastos de producción.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-10.png' style="max-width: 140px").mx-auto
        h4.text-center 6. Margenes de utilidad frente al costos bajos de producción.

      .tarjeta.color-acento-contenido.p-4.p-xl-5.h-100(style="background-color: #C9E3FE;")
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema2/img-11.png' style="max-width: 140px").mx-auto
        h4.text-center 7. Fidelización del cliente.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_2_2 2.2.	Técnicas o herramientas de mejoramiento continuo

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.bloque-img-text-2.mb-5(data-aos="fade-left")
      img(src="@/assets/curso/temas/tema2/img-12_1.png").img-mascara-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas de mejoramiento continuo usadas por el <em>Lean Manufacturing</em> en el mejoramiento de procesos productivos son, conforme lo señala Arrieta (2007), las cinco (5) eses, los sistemas SMED, los sistemas <em>Poka Yoke</em>, la fábrica visual, el desarrollo de Indicadores de Gestión (IDG), el desarrollo de procesos de <em>Value Stream Mapping</em> (VSM), el Control Estadístico de Calidad (SPC), los procesos Seis Sigma y el Mantenimiento Productivo Total (TPM), con sus diferentes técnicas de trabajo y el desarrollo de programas <em>Kaizen</em>.

    p.mb-5 Estas técnicas se pueden implementar en conjunto o independientemente, respondiendo a las características específicas de cada caso, algunos de ellos se explican en el siguiente video:

    figure.mb-5.video1(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Powx5406v2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .decorador-titulo.mb-5
      .container-decorador
        img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 72px").me-4
        h3.mb-0.pe-0.pe-md-5#t_2_2_1 Control visual.

    p.mb-5(data-aos="fade-left") El Lean Manufacturing en su filosofía considera el control visual como una técnica importante en la gestión de las empresas, ya que se utilizan con el propósito de comunicar de forma clara y sencilla la situación de un proceso de producción, permite un rápido reconocimiento y visualización de la información que se comunica, con el fin de aumentar la eficiencia y la claridad; estas señales pueden ser de muchas formas y colores.

    .position-relative.mb-5(data-aos="fade-right")
      img(src="@/assets/curso/temas/tema2/img-13.jpg")
      p.text-img-1 Los métodos de control visual tienen como objetivo aumentar la eficiencia y la eficacia de un proceso al hacer los pasos del proceso más visibles; la teoría detrás de control visual es que, si algo es claramente visible o está a la vista, es fácil de recordar y mantenerlo presente, una ventaja del control visual es que a todo el mundo se le dan las mismas señales visuales y así es probable que tengan el mismo punto de vista, de acuerdo con Consulting Group, (s.f.).

    p.mb-5 El sistema de control visual radica en mejorar la comunicación con la información relevante y estandarizarla, su implementación puede contribuir en los siguientes aspectos para la empresa:

    .d-flex.flex-wrap.justify-content-between.mb-5.position-relative(@mouseover="indicadorImagenHover = false" data-aos="fade-left")
      .indicador--hover.d-none.d-md-flex(v-if="indicadorImagenHover")
      .indicador--click.d-block.d-md-none(v-if="indicadorImagenHover")
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 01
        img(src="@/assets/curso/temas/tema2/img-16.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Eliminar los <br> desperdicios 
      
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 02
        img(src="@/assets/curso/temas/tema2/img-17.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Mejorar la <br> calidad
      
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 03
        img(src="@/assets/curso/temas/tema2/img-18.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Mejorar el tiempo <br> de respuesta
      
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 04
        img(src="@/assets/curso/temas/tema2/img-19.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Estandarizar<br> procedimientos

      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 05
        img(src="@/assets/curso/temas/tema2/img-20.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center.mb-0(style="line-height: 1.3") Mejorar la<br> planificación del<br> trabajo
      
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 06
        img(src="@/assets/curso/temas/tema2/img-21.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Reducir<br> costos
      
      .card-img-1
        img(src="@/assets/curso/temas/tema2/img-14.svg" style="max-width: 157px;")
        span(style="font-size: 30px").fw-bold 07
        img(src="@/assets/curso/temas/tema2/img-18.svg").content-img-decorador.mx-auto.mb-2
        p.fw-bold.text-center Motivar al<br> personal

    p.mb-5 Por otro lado, la implementación de esta técnica de control visual en las empresas puede darse en diferentes formas. A continuación se pueden ver las herramientas que se implementan:

    SlyderE.mb-5(data-aos="fade-right")
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Alarmas
          p permite comunicar a sus colaboradores circunstancias de urgencia. 
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-23.png' style="max-width: 820px")

      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Lámparas de colores
          p se utiliza en la cadena de producción con el objetivo de informar el estado en que se encuentra. Cada color representa el estado actual del proceso.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-24.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Lecciones de un punto
          p transmitir el conocimiento y habilidades de forma sencilla y concisa.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-25.png' style="max-width: 820px")

      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Tablero de información
          p implementado para  llevar una trazabilidad y seguimiento en la planificación de los procesos productivos.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-26.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Listas de verificación
          p son utilizadas con el fin de verificar las actividades realizadas de acuerdo a lo establecido previamente.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-27.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Marcas en el piso
          p se utilizan con el objetivo de organizar las áreas de trabajo en los procesos de producción y marcar las zonas para evitar urgencias o problemas en el flujo continuo. 
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-28.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Marcación del puesto de trabajo
          p su objetivo es contribuir al orden y mejorar la eficacia de las áreas de trabajo de los colaboradores.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-29.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Tablero de resultados
          p su objetivo es que mediante indicadores de desempeño se pueda comprobar el rendimiento de sus empleados influye en el resultado de los procesos y metas de la empresa.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-30.png' style="max-width: 820px")
      
      .d-flex.flex-wrap.px-2
        .col-xl-4.order-2.order-xl-1
          h3 Pirámide de seguridad
          p esta pirámide nos permite visualizar los diferentes tipos de accidentes graves, leves. Así mismo, los incidentes y practicas seguras.
        .col-xl-8.order-1.order-xl-2.mb-4.mb-xl-0.mx-auto
          img(src='@/assets/curso/temas/tema2/img-31.png' style="max-width: 820px")
    
    .decorador-titulo.mb-5
      .container-decorador
        img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 72px").me-4
        h3.mb-0.pe-0.pe-md-5#t_2_2_2 Hoja de ruta para la implantación <em>Lean</em>.
    
    p.mb-5(data-aos="fade-left") La hoja de ruta contempla 6 fases para la implementación, donde se inicia con un diagnóstico, seguido de la planificación para la implantación del Lean, lanzamiento, estabilización de mejoras, estandarización y fabricación en flujo. 
      br
      br
      | Implementar el sistema de <em>Lean Manufacturing</em> requiere una hoja de ruta que implica un plan y una ejecución seria y rigurosa en cada una de las fases, según se presenta en el siguiente PDF a descargar.
    
    .tarjeta.color-primario.p-3.mb-5.col-xl-8.mx-auto(style="background-color: #F3F9FF; border-radius: 0;" data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3
          img(src="@/assets/curso/temas/tema2/img-32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1(style="color: #12263F !important; font-size: 18px") "Hoja de ruta para la implantación Lean"
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="'https://www.youtube.com/watch?v=5Cmn3O7kEgQ&t'" target="_blank")
                span(style="color: #12263F !important") Descargar 
                i.fas.fa-file-download(style="color: black !important")
    
    .decorador-titulo.mb-5
      .container-decorador
        img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 72px").me-4
        h3.mb-0.pe-0.pe-md-5#t_2_2_3 Aspectos generales de implementación <em>Lean</em> en las empresas.
    
    p.mb-5.pb-5(data-aos="fade-left") Los aspectos generales en la implementación Lean se resumen a dos categorías principales que tienen relación con factores de productividad denominados:
    .d-flex.flex-wrap.justify-content-center.align-items-stretch.mb-5.pt-3(data-aos="fade-right")
      .col-md-6.col-xl-4.px-md-4.d-flex.mb-5.mb-md-auto
        .tarjeta.tarjeta--azul.p-4.px-md-5.position-relative(style="padding-top: 86px !important; box-shadow: 0 3px 6px rgba(0, 0, 0, .16)")
          img(src="@/assets/curso/temas/tema2/img-33.svg" style="max-width: 132px; position: absolute; left: 50%; top: -70px; transform: translateX(-50%)")
          h4.mb-4.text-center.fw-bold Factores internos
          p.text-center están sujetos a su control, ya que se modifican más fácilmente que otros como lo son las plantas industriales y el equipo en una empresa manufacturera, desempeñando un papel fundamental, adoptando medidas correctivas, reducción de tiempo parado y uso eficaz de las locaciones disponibles. 
      .col-md-6.col-xl-4.px-md-4.d-flex.pt-5.pt-md-0
        .tarjeta.tarjeta--azul.p-4.px-md-5.position-relative(style="padding-top: 86px !important; box-shadow: 0 3px 6px rgba(0, 0, 0, .16)")
          img(src="@/assets/curso/temas/tema2/img-33.svg" style="max-width: 132px; position: absolute; left: 50%; top: -70px; transform: translateX(-50%)")
          h4.mb-4.text-center.fw-bold Factores externos
          p.text-center se refieren al desempeño socio económico y ambiental del medio externo tales como las costumbres, cultura empresarial, el desempleo, la calidad de vida, el nivel educativo, la cultura ambiental, entre otros.

    .position-relative(style="width: calc(100% + 6rem); margin-left: -3rem; margin-right: -3rem;")
      img(src="@/assets/curso/temas/tema2/bg-1.png" style="position: absolute; top: -260px")
    
    .cajon.color-acento-contenido.p-4.mb-5(style="background-color: #5BC6E1" data-aos="fade-left")
      .h5 ¡Importante!
      p La tecnología, dado que con su uso es posible generar un incremento en el volumen de bienes y servicios, un perfeccionamiento de la calidad, la introducción de nuevos métodos de comercialización, entre otros, ha permitido que la automatización pueda asimismo mejorar el manejo de los materiales y el almacenamiento, los sistemas de comunicación y el control de la calidad.
    
    .decorador-titulo.mb-5
      .container-decorador
        img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 72px").me-4
        h3.mb-0.pe-0.pe-md-5#t_2_2_4 Fases de implementación.
    p.mb-5(data-aos="fade-right") Implementar el sistema de <em>Lean Manufacturing</em> requiere de un plan serio y riguroso donde en cada fase de su ejecución contemple la situación actual de la empresa, los objetivos del plan de mejora, los cambios en la organización, la realización de actividades para reducir desperdicios, la optimización de los métodos de trabajo y la planificación del flujo continuo de los procesos. A continuación, se pueden revisar las fases para su implementación:

    h4.mb-5.text-center FASES DE IMPLEMENTACIÓN LEAN

    .d-flex.flex-wrap.mb-4(data-aos="fade-left")
      .col-lg-7.order-2.order-lg-1
        LineaTiempoD.linea-tiempo-1
          p(numero="1" titulo="Fase 1") <b>Diagnóstico y formación: </b>
            | se identifican la situación actual de la empresa en los procesos productivos.
          
          p(numero="2" titulo="Fase 2") <b>Diseño del plan de mejora: </b>
            | se debe planificar un programa con objetivos a corto, mediano y largo plazo.
          
          p(numero="3" titulo="Fase 3") <b>Lanzamiento: </b>
            | en esta fase se empieza los cambios en los recursos y el funcionamiento operativo. 
          
          p(numero="4" titulo="Fase 4") <b>Estabilidad de mejoras: </b>
            | se realizan actividades para reducir desperdicios.
          
          p(numero="5" titulo="Fase 5") <b>Estandarización: </b>
            | optimiza y diseña métodos de trabajo.
          
          p(numero="6" titulo="Fase 6") <b>Producción en flujo: </b>
            | se debe plantear principios relacionados con producir continuamente sin desperdicios.
 
      .col-lg-5.order-1.order-lg-2.px-0.px-lg-4.mx-auto
        img(src="@/assets/curso/temas/tema2/img-34.png" style="max-width: 441px").mx-auto.mb-4.mb-lg-0

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    indicadorImagenHover: true,
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
.bloque-img-text-1
  margin-top: 120px
  position: relative
  overflow-x: clip
  .img-mascara
    position: absolute
    bottom: 0
    left: 0
    width: 50%
    height: 395px
  .bloque-texto-g__texto
    width: 70% !important
  @media (max-width: 1400px)
    .img-mascara
      bottom: 18px
      left: -51px
      width: 59%
  @media (max-width: 1200px)
    .img-mascara
      bottom: 61px
      left: -127px
      width: 79%
  @media (max-width: 992px)
    margin-top: 0
    .img-mascara
      display: none
    .bloque-texto-g__texto
      width: 100% !important
.slider-edit-1
  .horizontal-scroll
    align-items: stretch !important
  .fa-chevron-left, .fa-chevron-right
    color: #707BA3
.bloque-img-text-2
  margin-top: 120px
  position: relative
  overflow-x: clip
  .img-mascara-2
    position: absolute
    bottom: 0
    left: 0px
    width: 363px
    height: 407px
  @media (max-width: 1400px)
    .img-mascara-2
      bottom: 17px
      left: -50px
      width: 365px
  @media (max-width: 1200px)
    .img-mascara-2
      bottom: 65px
      left: -139px
      width: 420px
  @media (max-width: 992px)
    margin-top: 0
    .img-mascara-2
      display: none
.text-img-1
  position: absolute
  bottom: 0
  padding: 1rem 2rem
  margin-bottom: 0
  background-color: #EDF5FDF0
  @media (max-width: 1200px)
    position: relative
    padding: 1rem
.card-img-1
  position: relative
  margin-right: auto
  margin-left: auto
  margin-bottom: 1rem
  cursor: default
  &:hover
    p
      opacity: 1
    .content-img-decorador
      top: 25%
      transform: translateX(-50%)
  span
    position: absolute
    top: .3rem
    left: 1rem
  .content-img-decorador
    max-width: 70px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    transition: all .4s linear
  p
    position: absolute
    left: 50%
    bottom: 1rem
    transform: translateX(-50%)
    width: 100%
    opacity: 0
    transition: all .4s linear
.linea-tiempo-1
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__number
      background-color: #D2E1F1
    .linea-tiempo-d__item__content
      background-color: #D2E1F1
</style>
