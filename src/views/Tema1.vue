<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Valor agregado 
    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema1/img-1.svg" style="max-width: 449px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.col-xl-7.px-xl-4.mb-0 El valor agregado en la filosofía del <em><b>Lean Manufacturing</b></em> se debe orientar desde el enfoque del cliente, ya que si el producto y/o servicio no aporta ningún valor este no estaría dispuesto a pagarlo. 
        br
        br
        |Por lo tanto, la generación de valor en las empresas determina la capacidad para competir y ofrecer productos y/o servicios con costos menores. 
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1.	Qué es el valor agregado
    
    p.mb-5(data-aos="fade-left") El valor añadido o valor agregado es la utilidad adicional que tiene un bien o servicio como consecuencia de haber sufrido un proceso de transformación, conforme lo manifiesta López (2018), en otras palabras, el valor de un producto o servicio vale más que la suma de los recursos utilizados, la generación de valor agregado comprende un proceso de transformación desde una serie de elementos hasta un elemento final.
      br
      br
      |Para profundizar este concepto se invita a explorar el siguiente video:

    figure.mb-5.video1(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/-DRTbMzg8IE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .decorador-titulo.mb-5
      .container-decorador
        img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 72px").me-4
        h3.mb-0.pe-0.pe-md-5 <em>¿Por qué agregar valor?</em>
    
    p.mb-5(data-aos="fade-right") Las empresas hoy en día tienen un gran reto el de identificar el valor percibido por los clientes, ¿qué es realmente lo que quiere? y ¿cuánto está dispuesto a pagar? Por estos interrogantes, a continuación, se presenta en la siguiente figura la importancia que tiene para las empresas crear valor:

    img(src="@/assets/curso/temas/tema1/img-2.jpg" data-aos="fade-right" style="margin-left: -3rem; margin-right: -3rem; min-width: calc(100% + 6rem)")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2. Comportamientos del valor agregado
    
    p.mb-5(data-aos="fade-left") Las empresas que se focalizan en el cliente se encuentran en una mejor posición para establecer un beneficio a largo plazo, a través de acciones que determinan el comportamiento del valor agregado y que son explicadas a continuación:

    img(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 400px" data-aos="fade").mb-4.mx-auto
    img(src="@/assets/curso/temas/tema1/img-4.svg" data-aos="fade-right").mb-5

    p.text-center Nota: Tomada de Guadarrama Tavira, E.; Rosales Estrada, E. (2022). #[em Marketing] relacional: valor, satisfacción, lealtad y retención del
      br
      |Cliente. Análisis y reflexión teórica.  <a href="https://www.redalyc.org/pdf/870/87041161004.pdf" target="_blank">https://www.redalyc.org/pdf/870/87041161004.pdf</a>
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_3 1.3. Actividades que generan valor 

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 504px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.fw-bold.col-xl-7.px-xl-4.mb-0 La gestión empresarial centrada en el cliente genera valor y es un paso del #[em marketing] tradicional de transacciones sustentado en el cliente, según Pinto (1997), citado en Guadarrama y Rosales (2015), en un primer momento su enfoque se centra en transmitir del mensaje al cliente y en un segundo momento el diálogo permanente, un trato personalizado, proceso que implica recoger información de los clientes mediante la investigación, considerada ésta una actividad que debe ejercerse en forma sistemática y permanente.
    
    p.mb-5(data-aos="fade-left") Dentro de este orden de ideas, el enfoque anterior consiste en implementar un programa de #[em marketing] relacional, denominado también CRM (#[em Customer Relationship Manager]) con el cual las empresas identifican las necesidades que tiene el cliente y mejoran sus relaciones, esto implica una mayor comunicación y atención personalizada, saber lo que necesita y saber cuánto están dispuestos a pagar los clientes, darles mayores expectativas y hacerlos sentir en el centro de la organización, de acuerdo con Guadarrama y Rosales (2015).

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      p.col-xl-7.px-xl-4.mb-0 En esencia, crear una comunicación personalizada con el cliente crea lealtad y barreras a la competencia, es importante generar esta estrategia empresarial que busca identificar y mantener los clientes brindando un servicio personalizado lo cual supone mayor rentabilidad y crecimiento, no es un cambio de procedimiento sino un cambio estructural.
      img(src="@/assets/curso/temas/tema1/img-6.svg" style="max-width: 540px").col-xl-5.mb-4.mb-xl-0.mx-auto

    p Conozcamos la definición del #[em marketing] basado en relaciones según el autor:
    p.mb-5 Según Kotler (2000), citado en Guadarrama y Rosales (2015)

    .bloque-texto-b.color-secundario.p-4.cajon-comillas-color.col-xl-11.mx-auto(data-aos="fade-left")
      .bloque-texto-b__texto
        i.fas.fa-quote-left(style="color: #35B5D5")
        h4.mb-0 "Al adoptar el #[em marketing] basado en las relaciones, la empresa necesita visión, liderazgo y paciencia para tener éxito mediante actividades como establecer una alta dirección eficiente; crear un fuerte vínculo con su estrategia; recoger información acerca de los clientes; mejorar las técnicas y procesos de información”.
          br
          br
          |(Guadarrama y Rosales, 2015)
        i.fas.fa-quote-right.float-end(style="color: #35B5D5")
    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_4 1.4.	 Beneficios de implementar metodología de valor agregado

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 505px").col-xl-5.mb-4.mb-xl-0.mx-auto
      p.col-xl-7.px-xl-4.mb-0 El resultado de valor agregado influye de manera representativa en los beneficios de implementar esta metodología, ya que al ofrecer un valor adicional más allá de un servicio básico, permite crear un vínculo de fidelidad y lealtad con los clientes que influye de manera determinante y reiterativa en el consumo de los productos o servicios que se ofrecen. Por esta razón, es importante mantener esfuerzos permanentes para optimizar su prestación oportuna y de calidad.

    p.mb-5(data-aos="fade-left") Por otro lado, las empresas que se enfocan en el cliente se encuentran mejor posicionadas para diseñar estrategias que brinden beneficios a largo plazo. Esto no quiere decir que se deba ignorar la competencia, sino que se debe mantener cerca para actuar con diferentes estrategias a las necesidades de los clientes. Se puede afirmar que las empresas que se focalizan en añadir valor a sus procesos y dan respuesta a las necesidades del cliente constituyen un beneficio de impacto en la incidencia en el <em>Lean Manufacturing</em>.

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Mejora continua

    .d-flex.flex-wrap.flex-xl-nowrap.align-items-center.mb-5.clean-bg-movil(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-3.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom; margin-left: -3rem; padding-left: 3rem; margin-right: -3rem; padding-right: 3rem"
      data-aos="fade-right"
    )
      img(src="@/assets/curso/temas/tema1/img-8.svg" style="max-width: 400px").col-xl-4.mx-auto.mb-4.mb-xl-0
      p.col-xl-4.px-xl-5 Es por esto, que para aumentar la competitividad en las empresas es importante implementar la mejora continua (ver figura 1) como una herramienta fundamental para lograr este objetivo, también es considerada como una filosofía que se apunta al aprovechamiento de los recursos de la empresa, especialmente los recursos humanos, y en el aprendizaje interno. La mejora continua debe significar una forma de vida dentro de la empresa que genera oportunidades.
      img(src="@/assets/curso/temas/tema1/img-9.png" style="max-width: 400px").col-xl-4.mx-auto.mb-2
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.cajon-comillas-color.bloque-texto-b.color-secundario:before
    background-color: #C8D1DD !important
</style>
