<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Presupuesto de producción
    p.mb-5 Las empresas que llevan a cabo actividades de transformación previa a la venta de sus productos, cuentan con una estructura y con un área de producción. En ella, se ejecutan todos los procesos que modifican las materias primas hasta convertirlas en producto terminado; por lo que una misma entidad puede contar con diversas líneas de producción independientes según su actividad económica y su nicho de mercado. 
      br
      br
      |Cuando se trata de estimar el valor de un producto que ha pasado por un proceso de transformación, deben tenerse presente todos los costos necesarios de forma directa o indirecta en su producción. La medición de estas inversiones permitirá determinar el costo unitario de producción, el cual es uno de los factores más relevantes para definir el precio de venta de un producto. 
      br
      br
      |El plan de producción se convierte, entonces, en una herramienta administrativa que contempla todos los aspectos relevantes a la hora de definir el proceso productivo de cualquier empresa manufacturera. A partir de un estimativo de ventas y unas políticas de inventario, el presupuesto de producción proyectará la cantidad de unidades a realizar y la estimación de su costo unitario y total; con ello, las directivas podrán asignar los recursos necesarios en periodos de tiempo determinados, para garantizar que la empresa ejecute sus actividades de manera continua, a continuación, se presentan las características que se deben tener en cuenta.
    #t_1_1.titulo-segundo
      h2 1.1 Características
    p.mb-5 La elaboración de un presupuesto de producción es vital y suele contar con los siguientes factores.
    .row.mb-5
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.d-flex
            .p-4.align-items-center.d-flex
              p.mb-0 Se encuentra estrechamente relacionado con el presupuesto comercial o de ventas, por lo que la cantidad de unidades que se esperan vender de un producto le permite al área de producción determinar cuántas unidades se deben producir para satisfacer la demanda.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.d-flex
            .p-4.align-items-center.d-flex
              p.mb-0 Contempla todos los aspectos de la producción, no solo la cantidad de insumos y trabajo necesarios, sino también los tiempos para cada etapa de transformación, así como los requerimientos de capital (dinero).
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.d-flex
            .p-4.align-items-center.d-flex
              p.mb-0  Debe tenerse en cuenta la política de inventarios. Por norma general, la fórmula para determinar las unidades a producir es: 
                b unidades a vender + inventario final – inventario inicial. 
                | Esto implica que la producción se ve afectada por las unidades que se esperan dejar almacenadas, de la misma forma que se deducen las que fueron producidas anteriormente.
      .col-lg-6.mb-3
        .tarjeta-avatar-b.mb-5.h-100
          img(src='@/assets/curso/img2.svg' alt='AvatarTop')
          .tarjeta.color-primario-claro.d-flex
            .p-4.align-items-center.d-flex
              p.mb-0  Al estar sujeto a factores ajenos, debe ser lo suficientemente flexible para ajustarse a los cambios de otras áreas. Si las ventas se ven incrementadas, por ejemplo, deberá incrementarse el volumen de la producción para lograr cumplir con los requerimientos comerciales.
    #t_1_2.titulo-segundo
      h2 1.2 Distribución de recursos
    p.mb-5 Para llevar a cabo la producción es importante tener en cuenta la totalidad de los recursos necesarios y su equivalente en dinero, de tal forma que no se presenten interrupciones en el proceso. Un plan de producción debe ser lo suficientemente preciso para indicar la cantidad necesaria de cada recurso y el momento en el que será utilizado. En este sentido, es conveniente considerar los tres factores que se integran a través del plan de producción.
    h3 Costos de producción
    p.mb-5 Cualquier bien o mercancía producida requiere de tres elementos: materia prima, mano de obra y otros costos indirectos de fabricación; la suma de todos ellos constituye el costo de producción. Por lo que se presenta la descripción para comprender los conceptos mencionados:
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img3.svg' alt='AvatarTop' style='width:101px')
          
          .tarjeta.color-primario-claro.h-100
            .px-4.py-2.text-center
              h3 Materias primas
              p Son los materiales utilizados en la elaboración del producto. Comprenden aquellos insumos que son transformados o aquellos consumidos en el proceso.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.mb-0
          img(src='@/assets/curso/img4.svg' alt='AvatarTop' style='width:88px')
          
          .tarjeta.color-primario-claro.h-100
            .px-4.py-2.text-center
              h3 Mano de obra 
              p Corresponde al trabajo realizado por el personal operativo involucrado en la producción de los productos.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/img5.svg' alt='AvatarTop' style='width:117px')
          
          .tarjeta.color-primario-claro.h-100
            .px-4.py-2.text-center
              h3 Costos indirectos de fabricación
              p Todos los demás costos que no cumplen con las condiciones de las dos categorías anteriores, pero que son necesarios en el proceso productivo.
    p.mb-5 Para el caso de una empresa dedicada a la producción de huevos, algunos de los costos involucrados podrían clasificarse así:
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Materia prima
            th Mano de obra
            th Costos indirectos de fabricación
        tbody.bg-white.text-center
          tr
            td Gallina
            td Administrador de la granja
            td Servicios públicos
          tr
            td Canasta de cartón para huevos
            td Operario de la granja
            td Limpieza y desinfección
          tr
            td Alimento/concentrado
            td Veterinario
            td Suplementos o medicamentos
    p.mb-5 Una vez se identifican los insumos necesarios para llevar a cabo la producción, es necesario determinar las cantidades y su valor en dinero. La metodología utilizada puede variar dependiendo de la naturaleza del costo; en el caso de la materia prima, usualmente proviene de la oferta de un proveedor, por lo que su valor es equivalente al precio de compra (más todos los otros costos asociados que son necesarios para poner en disposición el producto, como, por ejemplo: el gasto de transporte, entre otros) multiplicado por el número de unidades.
      br
      br
      |Para poner en práctica sus conocimientos revise el siguiente ejemplo que permite determinar el costo mensual de la materia prima de una granja compuesta por 40 gallinas. 
    .titulo-sexto.color-acento-contenido.bg-white
      h5 Tabla 1 Valoración materia prima
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Insumo
            th Unidades
            th Valor unitario
            th Valor total
        tbody.bg-white.text-center
          tr
            td Gallina
            td 400
            td $ 17.000
            td $ 680.000
          tr
            td Canasta de cartón
            td 1.000
            td $ 200
            td $ 200.000
          tr
            td Alimento para gallina
            td 1.450 kg
            td $ 2.000
            td $ 2.900.000
    p.mb-5 En el caso de la mano de obra, deben considerarse todos los gastos asociados al empleado, continuando con el ejemplo de la granja se pueden relacionar así:  
    .titulo-sexto.color-acento-contenido.bg-white
      h5 Tabla 2 Valoración mano de obra
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Empleado
            th Salario
            th Prestaciones
            th Seguridad social
            th Total
        tbody.bg-white.text-center
          tr
            td Administrador
            td $1.500.000 
            td $ 330.000
            td $ 225.000
            td $ 2.055.000
          tr
            td Operario
            td $1.000.000
            td $220.000
            td $ 150.000
            td $ 1.370.000
    p.mb-5 Finalmente, los costos indirectos de fabricación son aquellos que no obedecen a un sistema de cálculo estándar debido a su diversidad por lo que su valor se estima a partir de datos históricos o tarifas unitarias cuando es posible. 
    .row.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 
              b Por ejemplo
              |, si para garantizar la salud de las aves es recomendable una vacunación periódica en un intervalo de cada 2 semanas, es posible calcular su costo a partir del costo de la vacuna y el número de vacunas necesarias al mes; mientras que, en el caso de los servicios públicos, su cálculo dependerá del consumo, adicionado a las tarifas básicas de aseo o alumbrado público. Ahora, se presentan otros elementos importantes a tener en cuenta.
    h3 Calendario presupuestal
    .row.mb-5
      .col-lg-4: img(src="@/assets/curso/img7.jpg")(data-aos="fade-left")
      .col-lg-8 
        p Una vez se tiene claridad sobre los insumos a utilizar en la producción y su costo, se debe establecer en qué fases del proceso productivo se hará uso de ellos. Por lo que se hace necesario realizar un calendario presupuestal, el cual busca programar las tareas a desarrollar en la producción y debe diseñarse teniendo en cuenta la secuencia en concordancia con los periodos de tiempo necesarios para ejecutarlas, minimizando jornadas improductivas o retrasos en las fechas estimadas de entrega.
          br
          br
          |La responsabilidad de coordinar el calendario presupuestal recae sobre el jefe del área de producción, dado que debe contar con la autoridad suficiente para disponer del talento humano con miras al diseño del mismo según sus indicaciones. Además, es de vital importancia que tenga el conocimiento técnico necesario para comprender todos los pormenores del proceso de producción, puesto que será el encargado de optimizar el sistema.
    p.mb-5 Para elaborar el calendario presupuestal es recomendable seguir una serie de pasos que garanticen que todos los aspectos relevantes en la producción han sido tenidos en cuenta. Se sugiere que cualquier proceso de gestión de tiempos considere los siguientes aspectos.
    p.mb-5 Proceso de gestión de tiempos, para esto es importante:

    
    
    
    
    //todo Proponer nuevo componenten como linea de tiempo ( COMENTAR DECISION CON DANIEL Y YULY )
    .row.mb-5.justify-content-center
      .col-lg-2: img(src="@/assets/curso/img8.svg")




    p.mb-5 La coordinación de cada una de las actividades a ejecutar posibilitará el uso eficiente de todos los recursos, por lo que se recomienda el uso de herramientas que permitan visualizar los horizontes de tiempo de una manera clara y efectiva, de tal forma que todos los participantes de la producción comprendan el cronograma. Para llevar a cabo esta labor se sugiere el uso de una de las herramientas más populares en la gestión de proyectos.
    h3 Diagrama de Gantt
    p.mb-5 Consiste en un gráfico de barras horizontales utilizado para representar un cronograma de manera visual. Cada barra del diagrama representa una actividad o tarea, y su longitud, el tiempo necesario para ejecutarla. Su diseño permite coordinar varias tareas de manera simultánea o secuencial, involucrando tantas como el proyecto requiera. Según el portal Asana.com (2020), las ventajas más significativas de los diagramas de Gantt son:
    ImagenInfografica.color-acento-contenido.bg-white.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img9.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido.p-3(x="61.5%" y="13%")
        p.mb-0  
          b Trazar visualmente el plan y el cronograma de un proyecto:   
          |se muestra cuál es el trabajo, cuándo y en qué orden se hará.
    p.mb-5 Para diseñar un diagrama de Gantt se requiere como insumo principal el cronograma elaborado en el plan de producción. Como recomendación se describe la siguiente metodología a seguir. 
    .row.mb-5.justify-content-center
      .col-lg-8 
        
          ImagenInfografica.color-acento-contenido.mb-5

            template(v-slot:imagen)
              figure.bg-white
                img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
            .tarjeta.color-primario.p-3(x="78.5%" y="20%")
              p.mb-0  Deben agregarse las tareas en sentido vertical con sus fechas de inicio y final. El horizonte de tiempo se extiende de manera horizontal, por lo que aquellas que necesiten de un periodo más largo, tendrán una mayor longitud.








































</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
