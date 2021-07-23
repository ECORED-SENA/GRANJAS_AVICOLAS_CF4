<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Plan de mejora
    .row.mb-5 
      .col-md-7
        p El plan de mejora aplica una vez se han efectuado los procesos de evaluación a los diferentes procesos de la empresa. Su objetivo es eliminar las ineficiencias y problemáticas para perfeccionar sus sistemas hasta donde sea posible; para ello, se diseña un conjunto de medidas enfocadas a solucionar, eliminar o reducir sus causas.
          br
          br
          |En este sentido, la mecánica operacional se desarrolla a partir de una planeación, seguida por una ejecución, luego una evaluación y, finalmente, la aplicación de medidas enfocadas a mejorar el proceso para retomar el ciclo nuevamente.
          br
          br
          |El alcance del plan de mejora abarca todas las áreas de la empresa, esto se debe a que cualquier proceso dentro del sistema es susceptible de mejora. Debido a ello, estos son responsabilidad de las directivas o la gerencia general, este grupo de personas está acompañado de los directores de cada área, sin embargo, durante el proceso de diseño resulta de vital importancia contar con la retroalimentación del personal operativo, quienes pueden aportar hallazgos que pasen desapercibidos en los niveles más altos de la organización. 
      .col-md-5: img(src="@/assets/curso/img70.png")
    #t_4_1.titulo-segundo
      h2 4.1 Hallazgos
    p.mb-5 El proceso de supervisión y evaluación finaliza con la recopilación de hallazgos, entendidos como la identificación de una problemática; para lo cual el Departamento Administrativo del Servicio Civil Distrital los clasifica según el proceso así:
    .col-md-5.mb-5
      a.anexo.mb-4.mb-lg-0(href="https://www.serviciocivil.gov.co/planes-de-mejoramiento" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-link.svg")
        .anexo__texto
          p 
            b Enlace web. 
            |Departamento Administrativo del Servicio Civil Distrital
            br
            br
            |Esta entidad en su sitio web menciona cómo recopila los hallazgos que sirven de base para identificar las problemáticas en la empresa.
    TabsA.color-acento-contenido.bg-white.mb-5
      .tarjeta.color-secundario.p-4(titulo="No conformidad")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img59.svg', alt='Texto que describa la imagen')
          .col-xl-6
            h4 No conformidad
            p Se identifica una situación que incumple con las exigencias de terceros o una disposición normativa o técnica. Por ejemplo, una empresa que no está cumpliendo con el plan de pagos acordado con una entidad financiera. La organización debe plantear una acción correctiva para solucionar.
      .tarjeta.color-secundario.p-4(titulo="No conformidad potencial")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img60.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 No conformidad potencial
            p Se evidencia una situación que podría desencadenar en un hallazgo de no conformidad. Por ejemplo, el daño de una máquina que afecta la producción sería una no conformidad, pero considerar el daño de otras máquinas de características similares es una no conformidad potencial.
      .tarjeta.color-secundario.p-4(titulo="Oportunidad de mejora")
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/img61.png', alt='Texto que describa la imagen')
          .col-xl-6
            h4 Oportunidad de mejora
            p Una situación que puede pulirse o perfeccionarse para hacerla más eficiente. Por ejemplo, una empresa que elabora productos a base de madera podría aprovechar y vender los sobrantes de producción a una fábrica de aglomerados, reduciendo así los costos a base de aprovechamientos.
              br
              br
              |Por ejemplo: en las empresas avícolas, se puede recolectar la gallinaza y venderla a viveros o campesinos de la zona para el cultivo de plantas. 
    p.mb-5 Es a partir de estos hallazgos que la empresa puede implementar una planeación enfocada a corregir las no conformidades, prevenir las no conformidades potenciales y aprovechar las oportunidades de mejora. Finalmente, es indispensable que conozca qué se puede hacer de manera permanente para alcanzar el objetivo de producción y el porcentaje de venta al final del proceso productivo.
    #t_4_2.titulo-segundo
      h2 4.2 Paso para implementarlo
    p.mb-5 Para ejecutar un plan de mejora que cumpla con su objetivo de perfeccionar los procesos evaluados, se recomienda realizar los siguientes pasos.
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img62.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              h4 Análisis de las causas
              p Consiste en identificar los procesos susceptibles de mejora y priorizados en relación con su relevancia para dar cumplimiento al objetivo misional de la compañía. Seguido de ello, se deben identificar las causas de la problemática y sus efectos negativos en la operación.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img63.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              h4 Propuesta de planificación
              p Se debe diseñar un plan que sea viable y lo suficientemente flexible para implementar acciones adicionales a futuro. A la hora de estructurarlo se incorporan los hallazgos del paso anterior y se analizan las posibles soluciones haciendo uso de herramientas de planeación como por ejemplo: la lluvia de ideas o el diagrama de Gantt, explicados previamente en el componente.
                br
                br
                |Una vez sean definidas las soluciones más efectivas, es necesario proponer las acciones y las tareas a realizar especificando los beneficios que se esperan obtener. Finalmente, se documenta todo el proceso en el plan de mejora.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img64.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              h4 Implementación y seguimiento: 
              p En esta fase deben integrarse los trabajadores propuestos para ejecutar las acciones de mejora. Es su tarea llevar a cabo las acciones y dar seguimiento con base en los indicadores de impacto y desempeño. Debido a que se encuentran directamente involucrados en la ejecución del plan de mejora, ellos son quienes pueden retroalimentar su diseño de forma más oportuna.
                br
                br
                |La evaluación constante de las medidas propuestas permitirá implementar acciones alternativas durante la ejecución del plan. Se recomienda que tanto la planificación como la ejecución sean acompañadas con un cronograma para delimitar el tiempo disponible y realizar cada tarea planeada, situación que no debe limitar la aplicación de medidas de forma permanente cuando la problemática lo amerite.
    .titulo-sexto.color-acento-contenido.bg-white
      h5.fw-normal 
        b Tabla 9 
        |Hoja de trabajo por área de mejora
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Tomada de Aneca (s.f.) 
        thead
          th(colspan=2).h4.text-start ÁREA DE MEJORA N.° 1
        tbody.bg-white
          tr
            td.color-secundario-claro Descripción del problema
            td 
          tr
            td.color-secundario-claro Causas que provocan el problema 
            td 
          tr
            td.color-secundario-claro Objetivos a conseguir
            td 
          tr
            td.color-secundario-claro Acciones de mejora
            td 1.
              br
              |2.
              br
              |3.
              br
              |(…)
          tr
            td.color-secundario-claro Beneficios esperados
            td 
    p.mb-5 Por otro lado, es imperativo definir indicadores de seguimiento lo cual permitirá cuantificar el cumplimiento de metas y brindar las herramientas necesarias para emitir un juicio de valor más objetivo.
      br
      br
      |La siguiente tabla aporta un modelo de seguimiento numerado por área y problemática, bajo esta estructura es posible segmentar el análisis y compartir únicamente los resultados que le competan a los trabajadores involucrados:
    .titulo-sexto.color-acento-contenido.bg-white
      h5.fw-normal 
        b Tabla 10 
        |Matriz de seguimiento de plan de     mejora
    .tabla-a.color-acento-contenido.mb-5 
      table
        caption Nota. Tomada de Aneca (s.f.) 
        thead
          tr(style="background-color:#E2F6C6")
            th(colspan=8).h3.text-black PLAN DE MEJORA N-(N+X)
          tr.text-black.h4
            th Acciones
              br
              |de mejora
            th Tareas
            th Responsable
              br
              |de la tarea
            th Tiempo
              br 
              |(inicio-final)
            th Recursos
              br
              |necesarios
            th Financiación
            th Indicador de
              br
              |seguimiento
            th Responsable
              br
              |seguimiento
        tbody.bg-white
          tr
            td.text-center 1.1 
            td a)
              br
              |b)
              br
              |c)
              br
              |(...)
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td.text-center 1.2
            td a)
              br
              |b)
              br
              |c)
              br
              |(...) 
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td.text-center (...)
            td 
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td.text-center 2.1
            td a)
              br
              |b)
              br
              |c)
              br
              |(...) 
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td.text-center 2.2
            td a)
              br
              |b)
              br
              |c)
              br
              |(...) 
            td 
            td 
            td 
            td 
            td 
            td 
          tr
            td.text-center (...)
            td 
            td 
            td 
            td 
            td 
            td 
            td 
    #t_4_3.titulo-segundo
      h2 4.3 Acciones correctivas y de mejora
    p.mb-5 Las acciones de un plan de mejora son aquellas actividades destinadas a eliminar una problemática o incrementar la eficiencia del proceso en evaluación. Su ciclo consiste en la su formulación, aplicación y posterior evaluación. Por un lado, las acciones correctivas buscan solucionar una no conformidad ya existente, es decir, una problemática que ya está presente; mientras que las acciones preventivas se enfocan en prevenir potenciales no conformidades, o en aprovechar las oportunidades de mejora; a continuación, se expondrán las fuentes y etapas.
    .row.mb-5
      .col-md-2.col-sm-12
        .color-primario.d-flex.p-3.justify-content-center.h-100
          .texto_cajon.m-auto.d-sm-flex.d-md-block.align-items-center.justify-content-center
            img(src="@/assets/curso/img65.svg" style="width:138px").mx-sm-3.mx-md-0
            h4.text-white.text-center  Acciones
              br
              |correctivas y
              br
              |de mejora
      .col-md-10.col-sm-12
        h4 Fuentes
        .contenedor.color-secundario.py-3.px-1.rounded1.mb-4
            .contentedor-gradiente__content.d-flex.align-items-center
              img(src="@/assets/curso/img66.svg" style="width:81px").mx-3 
              .contentedor-gradiente__content__textos
                h4.mb-0 Son
                p.mb-0 Aquellos motivos que llevan a la empresa a implementar las acciones correctivas y de mejora.
        .row.mb-2
          .col-lg-2
            h5 Pueden ser:
          .col-lg-10
            TabsA.color-acento-contenido.bg-white.mb-5
              .tarjeta.color-primario-claro.p-4(titulo="Análisis de contexto")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Análisis de contexto
                  p El contexto de una organización está dado por factores internos como la cultura organizacional, los valores o el desempeño de la empresa; así como factores externos como los entornos legales, sociales o económicos. La comprensión de estos elementos puede llevar a identificar problemáticas a abordar, por ejemplo, el incumplimiento de una disposición legal.
              .tarjeta.color-primario-claro.p-4(titulo="Partes interesadas")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Partes interesadas
                  p Son aquellos terceros que tienen influencia significativa en la empresa. Deben considerarse si, en caso de no cumplir con sus exigencias o expectativas, pueden afectar la sostenibilidad de la organización. Ejemplo de ellas son los proveedores, acreedores o clientes. De aquí pueden surgir acciones producto de problemáticas identificadas con incumplimientos en pagos o baja satisfacción con el producto.
              .tarjeta.color-primario-claro.p-4(titulo="Análisis de indicadores")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Análisis de indicadores
                  p La evaluación constante de los indicadores de gestión pueden aportar para la toma de medidas de forma oportuna. Por ejemplo, si se observa una tendencia a la baja en las unidades producidas, esto puede conllevar a acciones preventivas como un mantenimiento a la maquinaria o su renovación.
              .tarjeta.color-primario-claro.p-4(titulo="Informes de no conformidad")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Informes de no conformidad
                  p Los procedimientos de supervisión pueden arrojar resultados desfavorables en relación con el proceso en evaluación. Con el análisis de esta documentación se definirá si es necesario aplicar las acciones a que haya lugar. 
              .tarjeta.color-primario-claro.p-4(titulo=" Informes de auditoría")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img67.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Informes de auditoría
                  p Cualquier auditoría interna o externa podrá aportar hallazgos al sistema de gestión de calidad, que deberán ser atendidos según las recomendaciones del auditor.
        h4 Etapas
        .contenedor.color-secundario.py-3.px-1.rounded1.mb-4
            .contentedor-gradiente__content.d-flex.align-items-center
              img(src="@/assets/curso/img68.svg" style="width:81px").mx-3 
              .contentedor-gradiente__content__textos
                h4.mb-0 Diseño
                p.mb-0 El diseño e implementación de las acciones correctivas o de mejora deben seguir un conducto regular.
        .row.mb-2
          .col-lg-2
            h5 Estas son:
          .col-lg-10
            TabsA.color-acento-contenido.bg-white.mb-5
              .tarjeta.color-primario-claro.p-4(titulo="Definir la acción")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Definir la acción
                  p Se debe contextualizar la acción que se va a ejecutar, definir las responsabilidades del personal y documentarlo.
              .tarjeta.color-primario-claro.p-4(titulo="Análisis de causa")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Análisis de causa
                  p En esta fase se debe profundizar en la causa de la problemática. A mayor nivel de detalle, más acertada serán las acciones para abordarla.
              .tarjeta.color-primario-claro.p-4(titulo="Planificación de actividades")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Planificación de actividades
                  p Diseñar un cronograma de las actividades a desarrollar definiendo el personal a cargo para cada una de ellas y asignando los recursos necesarios.
              .tarjeta.color-primario-claro.p-4(titulo="Registro de resultados")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Registro de resultados
                  p Una vez aplicadas las acciones, se debe dejar registro por escrito de los pormenores, la forma como fueron efectuadas las actividades y las dificultades que se evidenciaron en su ejecución.
              .tarjeta.color-primario-claro.p-4(titulo="Evaluación de las acciones")
                  .titulos.d-flex.align-items-center.mb-3
                    img(src='@/assets/curso/img69.svg', alt='Texto que describa la imagen' style='width:47px')
                    h3.ms-3.mb-0 Evaluación de las acciones
                  p Finalmente se debe hacer una comparativa entre los indicadores previos y posteriores a la aplicación de las acciones. Es importante evidenciar la mejora en el proceso o el resultado para tener certeza de su efectividad. En caso de que se observe la continuación de la no conformidad u oportunidad de mejora, se deberá replantear la situación para definir si es necesario la aplicación de otras acciones.





</template>

<script>
export default {
  name: 'Tema4',
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

<style lang="sass" scoped></style>
