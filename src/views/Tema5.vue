<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span.text-white 5
      h1 Medida de resultados <em>Lean</em> a través de indicadores 
    
    .d-flex.flex-wrap.mb-5
      .col-xl-7.d-flex.flex-wrap.order-2.order-xl-1
        p.w-100 La media de resultados que se plasma a través de indicadores son datos o conjuntos de datos que permiten que el gestor entienda qué es lo que su equipo está haciendo, considerado como un monitoreo en el cual se evalúa el crecimiento de lo que se está realizando.
        .cajon.color-primario.cajon-t5-1.p-4.w-100(style="background-color: #DDEEFF")
          p Cuando se habla de los indicadores de resultados <em>Lean</em>, se puede hablar también de las herramientas que brindan beneficios a la hora de medir para poder actuar y mejorar el trabajo, ya que hay una necesidad global de integrar los indicadores en el proceso de mejora continua. Por ello, a continuación, se nombran las siete herramientas que ayudan a mejorar el trabajo:
          .d-flex.flex-wrap
            .col-12.col-lg-4.d-flex.justify-content-xl-center
              ul.lista-ul--color.mb-0
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | VMS.
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | 5S.
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | SMED.
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | TPM.
            .col-12.col-lg-4.d-flex.justify-content-xl-center
              ul.lista-ul--color.mb-0
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | KANBAN.
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | GESTION VISUAL.
                li.mb-0
                  img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
                  | KPI`s.
            .col-12.col-lg-4
              img(src="@/assets/curso/temas/tema5/img-1.svg" style="max-width: 96px").ms-auto
      img(src="@/assets/curso/temas/tema5/img-2.jpg" style="max-width: 505px").col-xl-5.mx-auto.mb-4.mb-xl-auto.order-1.order-xl-2
    p.mb-5 Es por esto que en cada una de ellas se pueden medir diferentes indicadores. Pero, se presentan los  doce (12) indicadores principales que son utilizados en la medida de resultados Lean (ver figura 6):
    img(src="@/assets/curso/temas/tema5/bg-1.png" style="margin-right: -3rem; margin-left: -3rem; min-width: calc(100% + 6rem); position: absolute; z-index: 0")
    .titulo-sexto.color-acento-botones.mb-5
      h5 Figura 6.
      span Indicadores para medida de resultados <em>Lean</em>
    
    .d-flex.flex-wrap.mb-5
      .col-xl-4.mx-auto.px-xl-2.mb-4.mb-xl-0
        img(src="@/assets/curso/temas/tema5/img-3.png" style="max-width: 399px")
      .col-xl-4.mx-auto.px-xl-2.mb-5.mb-xl-0
        .tarjeta.position-relative.p-1.px-4.mb-auto(style="background-color: #F3F9FF; box-shadow: 0 3px 6px #00000020; margin-top: 70px; min-height: 310px")
          img(src="@/assets/curso/temas/tema5/img-4.svg" style="margin-top: -49px; max-width: 96px").mx-auto.mb-4
          ul.lista-ul--color.mb-0
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | OEE (Eficiencia Global de los Equipos)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | TEEP (Rendimiento Efectivo
              br
              |Total de los Equipos)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | FTT (Calidad a la Primera)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | DTD (Tiempo de Muelle a Muelle)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | OTD (Entregas a Tiempo)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | BTS (Fabricación Según Programa)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | ITO (Tasa Rotación Inventario)
      .col-xl-4.mx-auto.px-xl-2.mb-5.mb-xl-0
        .tarjeta.position-relative.p-1.px-4.mb-auto(style="background-color: #F3F9FF; box-shadow: 0 3px 6px #00000020; margin-top: 70px; min-height: 310px")
          img(src="@/assets/curso/temas/tema5/img-4.svg" style="margin-top: -49px; max-width: 96px").mx-auto.mb-4
          ul.lista-ul--color.mb-0
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | RVA (Ratio Valor Añadido)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | PPMs (Partes Por Millón de Defectos)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | FR (Tasa Cumplimiento Entregas)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | IFA (índice de Frecuencia de Accidentes)
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              | MTBF – MTTR (Fiabilidad y 
            li.mb-0
              img(src="@/assets/curso/temas/tema5/decorador.svg" style="min-width: 15px; max-width: 15px").me-3
              |Mantenibilidad del Equipo)
            
    Separador

    .titulo-segundo.color-acento-botones
      h2#t_5_1 5.1.	Criterios a tener en cuenta para implantar indicadores

    .d-flex.flex-wrap.mb-5
      .col-xl-7.order-2.order-xl-1.pe-xl-4
        p.mb-4 Para implantar indicadores se deben tener en cuenta dos aspectos muy relevantes, los cuales son la toma de datos y la responsabilidad de la gestión, ya que un indicador es el medio por el cual se va a evaluar hasta qué punto se está llevando a cabo los objetivos estratégicos.
          br
          br
          |Algunos de los criterios que se deben tener en cuenta son los siguientes:
        .cajon.color-acento-botones.cajon-t5-1.p-4.px-xl-5.w-100(style="background-color: #AEDBEF")
          p Un indicador gráfico es el que más ayuda nos proporciona, ya que se da a entender en los datos que se están buscando.
            br
            |Se debe tener claridad en lo que se busca medir y qué parámetros están.
            br
            |Se debe partir de la necesidad de lo que se está buscando gestionar.
            br
            |Todo indicador va a servir, pero va a ver uno que otro que ofrezca más beneficios y herramientas y oportunidades en la calidad del trabajo.
      img(src="@/assets/curso/temas/tema5/img-5.jpg" style="max-width: 505px").col-xl-5.mb-4.mb-xl-auto.mx-auto.order-1.order-xl-2

    .titulo-segundo.color-acento-botones
      h2#t_5_2 5.2. Directrices básicas para definir indicadores
    
    .d-flex.flex-wrap.mb-5
      img(src="@/assets/curso/temas/tema5/img-6.jpg" style="max-width: 505px").col-xl-5.mb-4.mb-xl-auto.mx-auto
      .col-xl-7.ps-xl-4
        p Las directrices son un conjunto de normas que se llevan a cabo en la acción de un plan, por esto se relacionan las normas básicas para crear indicadores a la hora de llevarse a cabo:
        .cajon.color-acento-botones.cajon-t5-1.p-4.px-xl-5.w-100(style="background-color: #AEDBEF")
          p Cuando el objetivo se puede medir o cuantificar, se debe alinear con el indicador buscando el mismo fin para así tener una medición segura y confiable en el diagnóstico.
            br
            |Un indicador siempre será una escala numérica.
            br
            |A la hora de representar gráficamente el indicador se debe realizar de una manera fácil y sencilla.
            br
            |El indicador debe ser fácil a la hora de cuantificar.
            br
            |El indicador debe ser confiable en sus resultados ya que así facilita la toma de decisiones por parte del gestor.
    Separador
    .titulo-segundo.color-acento-botones
      h2#t_5_3 5.3. Indicadores de medición para analizar la evaluación
    p.mb-5 Los indicadores de gestión son una herramienta que permite a los gerentes y directivos de las organizaciones mantener una <b>evaluación permanente y sistemática de los resultados</b> de todas sus operaciones financieras y no financieras, ya sean de mercados, administrativas y ambientales, logrando un incremento de la eficacia, facilitando la toma de decisiones de manera oportuna, dado que recolectan toda la información necesaria que sirva de base para ejercer un mejoramiento continuo.
      br
      |Por otro lado, hay cinco tipos de indicadores para la medición y el análisis de la evaluación, los cuales se dividen en:
    
    .d-flex.flex-wrap.mb-5
      .col-12.col-md-6.col-lg-5.col-xl-3.px-2.mx-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/flip-1.svg')})`}" style="border-radius: 0 !important; background-color: transparent;")
            .tarjeta-flip__contenido.p-4(style="background-color: #F3F9FF !important; border-radius: 0 !important; background-color: #F3F9FF")
              img(src="@/assets/curso/temas/tema5/img-7.svg" style="max-width: 141px").mx-auto.mb-4
              p.fw-bold(style="color: black;") Indicadores de eficiencia
              p.mb-0(style="color: black;") Este indicador mide el nivel de ejecución del proceso y la optimización de los recursos que se utilizaron en los procesos productivos.
      .col-12.col-md-6.col-lg-5.col-xl-3.px-2.mx-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/flip-2.svg')})`}" style="border-radius: 0 !important; background-color: transparent;")
            .tarjeta-flip__contenido.p-4(style="background-color: #F3F9FF !important; border-radius: 0 !important; background-color: #D2E1F1")
              img(src="@/assets/curso/temas/tema5/img-8.svg" style="max-width: 141px").mx-auto.mb-4
              p.fw-bold(style="color: black;") Indicadores de cumplimiento
              p.mb-0(style="color: black;") Este indicador está relacionado con el grado de cumplimiento de las actividades, tareas y/o trabajos asignados.
      .col-12.col-md-6.col-lg-5.col-xl-3.px-2.mx-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/flip-3.svg')})`}" style="border-radius: 0 !important; background-color: transparent;")
            .tarjeta-flip__contenido.p-4(style="background-color: #F3F9FF !important; border-radius: 0 !important; background-color: #F3F9FF")
              img(src="@/assets/curso/temas/tema5/img-9.svg" style="max-width: 141px").mx-auto.mb-4
              p.fw-bold(style="color: black;") Indicadores de evaluación
              p.mb-0(style="color: black;") Este indicador tiene que ver con el rendimiento obtenido en una tarea, trabajo o proceso.
      .col-12.col-md-6.col-lg-5.col-xl-3.px-2.mx-auto
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema5/flip-4.svg')})`}" style="border-radius: 0 !important; background-color: transparent;")
            .tarjeta-flip__contenido.p-4(style="background-color: #F3F9FF !important; border-radius: 0 !important; background-color: #D2E1F1")
              img(src="@/assets/curso/temas/tema5/img-10.svg" style="max-width: 141px").mx-auto.mb-4
              p.fw-bold(style="color: black;") Indicadores de eficacia
              p.mb-0(style="color: black;") Este indicador está relacionado con las razones que indican capacidad o acierto en la consecución de tareas y/o trabajos.

    p Estos indicadores tienen como objetivo cumplir en la medición de satisfacer en los resultados que se esperan, los cuales tratan de comunicar la estrategia, comunicar las metas, identificar problemas y oportunidades, así como diagnosticar problemas.
      br
      br
      |El gestor tiene la libertad de escoger cuál indicador es el adecuado para lo que se está buscando siempre y cuando el indicador cumpla con los resultados básicos que se deben dar ayudando a facilitar los diagnósticos del proyecto.
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

<style lang="sass">
.cajon-t5-1.cajon.color-primario:before
  background-color: #93B0D0
</style>
