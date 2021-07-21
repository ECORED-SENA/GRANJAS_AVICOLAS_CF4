<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.mb-5
      .col-lg-6
        p Ejecutar un plan de producción es parte del día a día de una empresa de cualquier tipo, por ejemplo: una cuyo objetivo es la manufactura de un producto u otras como las de producción avícola que es el caso para este componente; este proceso es el pilar de la operación, pues permite elaborar el producto terminado dispuesto a la venta. Una correcta planeación contribuye a perfeccionar los procesos, reduciendo costos e incrementando la producción. 
          br
          br
          |Además, realizar un estudio sobre la demanda del producto, dará lugar a una programación más acertada respecto a las inversiones a realizar en insumos para producción y, a su vez, en el mejoramiento de la capacidad instalada con el objetivo de satisfacer las necesidades identificadas en el mercado.
          br
          br
          |Finalmente, con la implementación de medidas en aquellos procesos que demanden mayor atención a través de un plan de mejora contribuirá con el crecimiento empresarial y la generación de valor para los propietarios.
      .col-lg-6: img(src="@/assets/curso/img1.jpg")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
