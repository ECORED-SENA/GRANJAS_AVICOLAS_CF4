<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Demanda del producto
    p.mb-5 Se ha abordado la producción y la generación de informes desde una perspectiva interna de la empresa, pero no se puede desconocer que el objetivo de una empresa es satisfacer las necesidades del entorno por lo que en el proceso debe generar valor para sí misma o para sus propietarios.
      br
      br
      |Desde la concepción de la empresa y en la toma de decisiones estratégicas, siempre deberá evaluarse la demanda, entendida como la exigencia del mercado en relación con un bien o servicio determinado. Por ejemplo, para definir si se constituye una granja avícola productora de huevos, primero debe evaluarse si en la región existen clientes potenciales, como familias que los demanden para consumo o fábricas para usarlos como materia prima.
      br
      br
      |El comportamiento del mercado frente a un producto suele obedecer a diferentes causas, la mayoría de ellas escapan del alcance de la empresa. No obstante, uno de los elementos sobre los que existe un margen de maniobra y que tiene incidencia directa sobre el mercado es la determinación del precio. 
    #t_3_1.titulo-segundo
      h2 3.1 Teoría de la oferta y la demanda
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    .row.mb-5
      .col-md-6
        p.mb-5 Con esta se presume que el precio se establecerá por la unión de dos variables fundamentales: la necesidad de los consumidores y la oferta de los productores. 
          br
          br
          |La ley de la demanda y de la oferta se unen para dar cabida a esta teoría; la primera apunta a una relación inversa, donde a menor sea el precio de un bien o servicio, mayor será la demanda, es decir, la intención de los consumidores de adquirirlo. Por otra parte, la ley de la oferta describe una relación directa, donde a mayor precio del producto, mayor será la intención de los productores de ofrecerlo.
          br
          br
          |Lo que se busca al estudiar el mercado es buscar ese equilibrio donde el precio es lo suficientemente bajo para que los consumidores lo quieran, pero no tanto para que el costo de producción sea superior al de venta. Por ello, se insiste tanto en políticas de mejoramiento continuo de la producción, porque permiten hacer más eficiente la transformación de bienes, reduciendo su costo de fabricación y, por lo tanto, dando un mayor margen para reducir el precio de venta, generando así una fuerte ventaja competitiva frente a terceros en mercados competitivos. 
        p.mb-5 Se suele decir que el mercado tiene la capacidad de autorregularse bajo el modelo económico actual, esta afirmación proviene de la teoría, puesto que aquí se explica cómo el precio de los productos fluctúa de tal forma que si sube demasiado, los clientes no lo comprarán, por lo que el exceso de oferta para la baja demanda obligará a los productores a reducir el precio de venta lo suficiente como para salir de su inventario. Aquel punto en el que coinciden las pretensiones de la oferta con las de la demanda, es conocido como el equilibrio del mercado.
      .col-md-6
        .titulo-sexto.color-acento-contenido.bg-white
          h5 Figura 3  Curva de oferta y demanda
        figure
          img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen')
          figcaption Nota. Tomada de https://economipedia.com/definiciones/ley-de-oferta-y-demanda.html
    #t_3_2.titulo-segundo
      h2 3.2 Cálculo de la demanda
    p.mb-5 La demanda de un producto es equivalente a la cantidad de compradores multiplicada por la cantidad de productos que adquiere cada uno de ellos en un periodo de tiempo determinado. Aunque a primera vista parece un cálculo sencillo, esconde muchos elementos objeto de estudio detrás. Por ejemplo, ¿cómo determino el número de compradores que tendrá mi producto? O, ¿cuántas unidades adquiere cada uno y con qué frecuencia? 
    LineaTiempoD.color-acento-contenido.bg-white
        div(numero="1" titulo="Segmentar el mercado") 
          .row
            .col-md-6
              p Los productos suelen estar enfocados a una parte de la población en concreto, pueden existir nichos más o menos grandes dependiendo del tipo de producto, pero una correcta segmentación permite descartar una cantidad significativa de personas que no cumplen con las condiciones o características para comprar el producto. 
                br
                br
                |Por ejemplo, si las dimensiones de la empresa no son muy significativas, el primer filtro lógico es seleccionar el municipio o la localidad donde se encuentra la fábrica; posteriormente, podría fraccionarse de acuerdo con la naturaleza del bien producido, si se trata de una empresa que vende maquillaje, la siguiente segmentación que puede hacerse es la de separar hombres y mujeres.
            .col-md-6: img(src="@/assets/curso/img54.jpg" )
        div(numero="2" titulo="Definir mercado meta") 
          .row
            .col-md-6
              p Una vez determinada la población objetivo, es necesario definir el mercado meta, es decir, aquella porción del segmento al que se le espera vender el producto. Siguiendo con el ejemplo anterior, se podrían descartar las mujeres menores de 15 años y mayores de 70, así el mercado meta estaría compuesto por mujeres entre 16 y 69 años; se puede ser más específico si se considera el rango de precios del producto y así descartar, por ejemplo, las mujeres que pertenecen a los estratos 1 y 2.
            .col-md-6: img(src="@/assets/curso/img55.jpg" style="width:472px")
        div(numero="3" titulo="Análisis de la competencia") 
          .row
            .col-md-6
              p Salvo que el producto en mención sea completamente nuevo, puede estudiarse su comportamiento en el mercado con la venta de los competidores. Cuántas unidades se han vendido, cuáles son los precios promedio y las inconformidades que tienen sus clientes frecuentes. Es viable aplicar técnicas de recolección de información como: las entrevistas, o apegarse de información elaborada por otras fuentes como: las cámaras de comercio y otras entidades estatales.
            .col-md-6: img(src="@/assets/curso/img56.jpg" style="width:472px")
        div(numero="4" titulo="Estimar porción de mercado que se espera cubrir") 
          .row
            .col-md-6
              p La inclusión de un producto en un mercado implica competir con otros proveedores de productos similares o sustitutos. Salvo en situaciones de monopolio, es prácticamente imposible lograr abarcar toda la demanda de un bien. Esta fase es la más subjetiva y con mayor margen de error, se trata de determinar qué cantidad del mercado podrá ocupar el bien producido.
                br
                br
                |Por ejemplo, si se venden mensualmente 1.000 kits de maquillaje en la población designada a las mujeres en el rango de edad y en la estratificación definida, la empresa puede aspirar a participar en el mercado con una venta de 100 de esos kits con similares características, en este caso estimaría una participación del 10%. 
                b Por otro lado, muchos factores pueden afectar en este aspecto, tales como: la cantidad de competidores, el tamaño de la demanda y la capacidad de producción, entre otros.
            .col-md-6: img(src="@/assets/curso/img57.jpg" style="width:472px")
        div(numero="5" titulo="Calcular la demanda") 
          .row
            .col-md-6
              p Habiendo definido el número de unidades que se esperan vender en un periodo determinado, en este caso mensual, solo resta multiplicarlo por el precio de venta. Muchos factores intervienen en la determinación del precio; tales como: el caso del costo de producción, la política de entrada al mercad y la diferenciación o ventaja competitiva.
                br
                br
                |Por otro lado, algunas empresas compiten con un menor precio de venta y otros con productos de mayor calidad, por lo que, sea cual sea la estrategia, debe existir un margen de rentabilidad que permita cubrir los gastos de ventas y administrativos, lo que dejar utilidad suficiente para garantizar la permanencia en el mercado.
            .col-md-6: img(src="@/assets/curso/img58.jpg" style="width:472px")



















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

<style lang="sass" scoped></style>
