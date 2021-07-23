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
          tr.h4.text-black
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
      h5.fw-normal 
        b Tabla 1 
        |Valoración materia prima
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr.h4.text-black
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
      h5.fw-normal 
        b Tabla 2  
        | Valoración mano de obra
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr.h4.text-black
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
      br 
      br 
      | La gestión de tienpos es muy importante en la organización y gestión de una empresa avícola, ya que, al no hacerse planeación y seguimiento se puede incurrir en sobregastos por pérdidas. 
    //todo Proponer nuevo componenten como linea de tiempo ( COMENTAR DECISION CON DANIEL Y YULY )
    .row.mb-5.justify-content-center
      .col-lg-10: img(src="@/assets/curso/img8.svg")




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
      .tarjeta.color-acento-contenido.p-3(x="65.5%" y="45%")
        p.mb-0  
          b Para organizar proyectos complejos: 
          | su sistema permite la compilación de una gran cantidad de tareas a la vez.
      .tarjeta.color-acento-contenido.p-3(x="60.5%" y="60%")
        p.mb-0  
          b Con el fin de coordinar múltiples involucrados: 
          |permiten designar las tareas a muchas personas a la vez. Cada cual puede tener uno o varios responsables.
      .tarjeta.color-acento-contenido.p-3(x="85.5%" y="90%")
        p.mb-0  
          b Se pueden estimar los cronogramas y cargas de trabajo: 
          |desde su concepción otorgan la facultad de saber con anticipación cuánto tiempo y cuánta mano de obra requerirá cada actividad en específico.
    p.mb-5 Para diseñar un diagrama de Gantt se requiere como insumo principal el cronograma elaborado en el plan de producción. Como recomendación se describe la siguiente metodología a seguir. 
    .row.mb-5.justify-content-center
      .col-lg-8 
        .dots--1
          ImagenInfografica.color-acento-contenido.mb-5

            template(v-slot:imagen)
              figure.bg-white
                img(src='@/assets/curso/img10.svg', alt='Texto que describa la imagen')
            .tarjeta.color-primario.p-3(x="94.3%" y="12.2%")
              p.mb-0.text-dark  Deben agregarse las tareas en sentido vertical con sus fechas de inicio y final. El horizonte de tiempo se extiende de manera horizontal, por lo que aquellas que necesiten de un periodo más largo, tendrán una mayor longitud.
            .tarjeta.color-secundario.p-3(x="4.3%" y="12.2%")
              p.mb-0.text-dark  Debe ser tan extenso como el ciclo productivo de la empresa, esto abarca todas las actividades relacionadas con la producción del bien a vender, es decir, desde la orden de compra de materia prima, hasta la puesta en inventario del producto terminado.
            .tarjeta.color-acento-botones.p-3(x="94.3%" y="90.2%")
              p.mb-0.text-dark En la ejecución de los procesos de producción, existen tareas que son dependientes de otras, hacer claridad sobre estas permite anticiparse a retrasos que afecten varias actividades del cronograma inicial.
            .tarjeta.color-acento-contenido.p-3(x="4.3%" y="90.2%")
              p.mb-0.text-dark Toda actividad productiva está sujeta a imprevistos que modifiquen los periodos de finalización de las tareas. La supervisión permanente del diagrama permitirá hacer modificaciones cuando así lo requiera la situación, otorgando más elementos de juicio para la entrega de los bienes terminados. Con esto, se evita que se programen entregas de productos en fechas en las que aún no se encuentran terminados.
    p.mb-5 Si bien existen herramientas especializadas en el diseño de este diagrama, es posible elaborar una versión simplificada del mismo haciendo uso de una hoja de cálculo. Retomando el ejemplo de la granja de producción avícola, se elabora la siguiente tabla y su diagrama correspondiente. 
    .titulo-sexto.color-acento-contenido.bg-white
      h5.fw-normal 
        b Tabla 3 
        | Cronograma de actividades
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th Proceso
            th Fecha inicial
            th Fecha final
            th Duración
        tbody.bg-white.text-center
          tr
            td Alistamiento de galpón
            td 15-abril
            td 28-abril
            td 13
          tr
            td Sanitización de la cama
            td 28-abril
            td 5-mayo
            td 7
          tr
            td Recepción de gallinas
            td 5-mayo
            td 6-mayo
            td 1
          tr
            td Alimentación de gallinas
            td 5-mayo
            td 20-mayo
            td 14
          tr
            td Recolección de huevos
            td 20-mayo
            td 31-mayo
            td 11
    .titulo-sexto.color-acento-contenido.bg-white
      h5.fw-normal 
        b Figura 1 
        | Diagrama de Gantt
    figure.mb-5 
      img(src='@/assets/curso/img11.svg')
    #t_1_3.titulo-segundo
      h2 1.3 Órdenes de producción
    p.mb-5 El sistema de costeo por órdenes de producción permite determinar el costo de un lote de producto terminado en concreto. Con esta metodología se busca determinar el costo de la materia prima, mano de obra y los costos directos de fabricación para un número de unidades; un sistema que resulta de especial utilidad cuando se trabaja por encargos y se busca estimar la utilidad para cada pedido.
      br
      br

      |En la siguiente figura se presenta, a modo de ejemplo, un esquema a utilizar a la hora de realizar órdenes de producción. El diligenciamiento de este suele estar precedido por una solicitud comercial, es decir, se planea y determina el costo de la producción del lote una vez se ha vendido una cantidad determinada de productos.
    .row
      .col-auto
        a.boton.color-acento-botones.text-black.mb-5.indicador__container(@click="modal1 = true")
          span Formato de orden de producción
          .indicador--click(v-if="mostrarIndicador")
      ModalA(:abrir-modal.sync="modal1")
        .row.align-items-center.justify-content-center
          .col-6
            figure
              img(src='@/assets/curso/img12.svg', alt='Texto que describa la imagen')
              figcaption Nota. Tomada Guarnizo y Cárdenas (2015) 
    h3 Características
    p.mb-5 La utilización de las órdenes de producción implica que el proceso productivo dará inicio una vez se emitan, pues en ellas se consigna el tipo y número de unidades a producir; de otra parte, las órdenes de producción suelen contar con las siguientes características.
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img13.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              p Se busca determinar un costo de producción independiente para cada pedido, por lo que suele darse en empresas productivas que no tienen una línea de producción estandarizada o permanente.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img14.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              p Requiere de una planificación previa al inicio de la producción, dado que el alistamiento de material y la elaboración de la orden de producción varía en función de la cantidad de unidades a producir.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.pt-5
          img(src='@/assets/curso/img15.svg' alt='AvatarTop' style='width:95px')
          .tarjeta.color-primario-claro.h-100
            .px-4.py-1.text-center
              p La producción usualmente requiere de un pedido previo, es decir, se trabaja por encargo que, a su vez, suele obedecer a ventas efectuadas a los clientes.
    h3 Diligenciamiento
    p.mb-5 Al hacer una orden de producción, se espera que la elaboración de productos solicitados se alcance con los insumos presupuestados. El objetivo de esta es alistarlos para que estén disponibles en el momento correspondiente para llevar a cabo el proceso productivo con la menor cantidad de excedentes, evitando costos de almacenaje, así como la caducidad u obsolescencia. 
      br
      br
      |Una vez se definen los insumos, se les debe asignar el valor correspondiente para determinar el costo total de la orden de producción y, finalmente, dividir por el número de unidades elaboradas para obtener el costo unitario.
      br
      br
      |En el siguiente ejemplo se solicita, por medio de la orden de producción número 47, 2.000 huevos a una granja avícola con el fin de cumplir con los pedidos semanales de este producto en la gestión comercial del área de ventas. Para efectos prácticos, las órdenes de producción tienen periodicidad semanal y se cuenta con un solo operario encargado para realizar este trabajo. A continuación, se presenta la siguiente discriminación de costos.
    h3 Diligenciamiento de una orden de producción
    h4 ¿Qué se debe tener en cuenta?
    .dots--1
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure.bg-white
            img(src='@/assets/curso/img16.svg', alt='Texto que describa la imagen')
        .tarjeta.color-acento-contenido.p-3(x="28.3%" y="74.2%")
          img(src='@/assets/curso/img17.svg' style='width:66px').mb-3
          h5 Materia Prima
          p Se estima que las aves consumen 84 kilogramos de concentrado semanalmente, la compra se efectúa mensualmente a un proveedor que la ofrece a razón de $2.000/kg incluida su entrega en la granja.
            br
            browser
            |Los huevos deben entregarse en canastas de cartón con capacidad para almacenar 30 unidades. Cada canasta cuesta $200, por lo que se requerirán 67 para los 2.000 huevos solicitados.
        .tarjeta.color-acento-contenido.p-3(x="72.3%" y="18.2%")
          img(src='@/assets/curso/img18.svg' style='width:66px').mb-2
          h5 Mano de obra
          p La granja cuenta con un solo operario cuyo salario básico es de $1.000.000, adicionalmente cuenta con las prestaciones de ley equivalentes a 30 % del ingreso básico, también se debe cancelar la seguridad social a las entidades correspondientes por un valor equivalente al 20 % del salario. Dado que la orden de producción se lleva a cabo en una semana, el costo del empleado debe tomarse de manera proporcional (una cuarta parte del salario).
        .tarjeta.color-acento-contenido.p-3(x="68.3%" y="85.2%")
          img(src='@/assets/curso/img19.svg' style='width:66px')
          h5 Costos indirectos
          p Se efectúa la misma proporción que con el empleado, por lo que los costos indirectos de fabricación mensuales son los siguientes: por concepto de aseo y desinfección de la granja: $600.000, el pago de servicios públicos (agua y luz) es en promedio de $100.000 y el costo de la cascarilla de arroz asciende a $40.000.
    .titulo-sexto.color-acento-contenido.bg-white
      h5.fw-normal 
        b Tabla 4 
        | Ejemplo de orden de producción
    figure
      img(src='@/assets/curso/img20.svg', alt='Texto que describa la imagen')
    p.mb-5 Como se aprecia, el objetivo de la orden de producción es estimar las cantidades y costo de los insumos necesarios; así, se puede tener un estimado del valor unitario de producción y determinar de manera precisa el margen de rentabilidad por huevo vendido.
      br
      br
      |Otro factor importante que se debe tener en cuenta en la gestión de una granja avícola es identificar la cantidad de productos que puede producir, para lo cual requiere conocer los siguientes aspectos.
    #t_1_4.titulo-segundo
      h2 1.4 Capacidad instalada
    .row.mb-5
      .col-lg-6
        p La capacidad instalada es equivalente al potencial máximo de producción de una sección o área de la empresa, bajo el supuesto de que se cuenta con la totalidad de los equipos, insumos y requerimientos necesarios para operar.
          br
          br
          |Usualmente, las empresas producen según las unidades que se venden o esperan vender, por lo que, en condiciones normales, la capacidad instalada es superior a la producción efectiva.
          br
          br
          |En aquellos casos donde la demanda de los bienes supera las posibilidades de producción de una empresa, la forma de proceder suele apuntar a la inversión en actualizaciones tecnológicas, compra de nueva maquinaria y ampliación de las áreas de producción o contratación de personal.
          br
          br
          |Cuando la demanda es inferior a la capacidad instalada, se considera que la planta se encuentra subutilizada, esto incrementa los costos fijos designados a cada producto elaborado. Por ejemplo, si el recibo de la energía eléctrica es de $100 y se producen 100 unidades, el costo asignado a cada unidad es de $1. Mientras que, si se producen solo 50 unidades, el costo unitario asignado será de $2. 
          br
          br
          |También se hace necesario realizar algunas mediciones para tener claro el proceso de gestión de una granja avícola.
      .col-lg-6: img(src="@/assets/curso/img21.jpg")(data-aos="fade-left")
    .row.mb-5
      .col-lg-6
        h3 Medición
        p Cuando se habla de la capacidad máxima de producción, no se pueden desestimar los periodos improductivos por requerimientos propios de la maquinaria, o por cuestiones fisiológicas de los operarios. Por ello, es importante calcular la capacidad instalada partiendo de la capacidad teórica, que es aquella que se alcanzaría trabajando las 24 horas del día, los 7 días de la semana.
          br
          br
          b Por ejemplo, una empresa que elabora envases plásticos hace uso de dos máquinas industriales que pueden producir cada una hasta 50 unidades por hora. 
          br
          br
          |Para determinar la capacidad teórica se debe multiplicar el número de unidades por hora por las horas del día, de esta forma se puede definir una capacidad teórica en los intervalos de tiempo que sean más beneficiosos para el análisis, así:
      .col-lg-6: img(src="@/assets/curso/img22.svg")(data-aos="fade-left")
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th 
            th 
            th 
        tbody.bg-white.text-center
          tr
            td Capacidad teórica diaria
            td 100 unidades por hora* 24 horas
            td 2.400 unidades
          tr
            td Capacidad teórica semanal
            td 2.400 unidades por día * 7 días
            td 16.800 unidades
          tr
            td Capacidad teórica mensual
            td 16.800 unidades por semana * 4 semanas
            td 67.200 unidades
    p.mb-5 A partir de esta capacidad teórica, se pueden deducir los periodos de tiempo improductivos que surgen por regulaciones normativas o por las limitaciones propias de la maquinaria. Suponiendo que el fabricante de esta recomienda el uso diario no mayor a 16 horas, por lo que la empresa ha de habituarse a esta condición contratando el personal operativo suficiente para prestar dos turnos de 8 horas por día. De lo anterior se deduce que 8 de cada 24 horas, la maquinaria estará en reposo o en mantenimiento para garantizar su vida útil, por lo que la capacidad instalada se calculará a partir de la proporción, de la siguiente forma:
    .row.mb-5.justify-content-center
      .col-lg-8 
        .color-primario.p-4.rounded-pill.mb-3
          h4.mb-0.text-black.text-white.text-center Ratio de disponibilidad: 16 horas/ 24 horas = 66,67%
        .color-primario.p-4.rounded-pill
          h4.mb-0.text-black.text-white.text-center Capacidad instalada diaria = capacidad teórica diaria * ratio de disponibilidad 
            br
            |Capacidad instalada diaria = 2.400 × 66,67% = 1.600 unidades
    p.mb-5 Por otro lado, se hace necesario revisar otros factores que alteran el proceso de gestión de una granja avícola al funcionar como empresa, lo que se verá en el siguiente ítem.
    h3 Factores limitantes
    p.mb-5 Existe multiplicidad de factores que pueden limitar la capacidad instalada de producción, la mayoría de ellos corresponden a factores ajenos a la administración, por lo que deben ser tenidos en cuenta a la hora de establecer políticas para incrementar la productividad. Las situaciones más recurrentes y a tener en cuenta a la hora de efectuar el cálculo de capacidad instalada son las que se mencionan en el siguiente objeto de aprendizaje.
    figure.mb-5
      img(src='@/assets/curso/img23.svg')
    p.mb-5 A continuación, se tienen en cuenta otros elementos que se deben tener en cuenta en la gestión de una empresa avícola.
    #t_1_5.titulo-segundo
      h2 1.5 Trabajo en equipo
    .row.mb-5
      .col-lg-6
        p Se concibe como la participación de dos o más personas para el cumplimiento de objetivos en común. Estos grupos pueden ser formales si surgen de la organización misma de la empresa y, por lo tanto, su colaboración proviene de una disposición administrativa; o informales, si no se encuentran respaldados por una decisión organizacional.
          br
          br
          |Para que se dé el trabajo en equipo debe existir una voluntad para trabajar de manera conjunta con terceros, siendo conscientes que el conocimiento de cada integrante del equipo podrá aportar a la ejecución de las tareas desde una perspectiva distinta, a continuación, se presentan algunos elementos importantes.
      .col-lg-6: img(src="@/assets/curso/img24.jpg")
    h3 Características
    p.mb-5 El trabajo en equipo requiere contar con una serie de cualidades o características para que aporte más que el trabajo individual, por lo que se describen aquellas que representan una mayor ventaja.
    SlyderD.mb-5(:datos="datosSlyder")
    h3 Técnicas
    p.mb-5 El desempeño de los equipos de trabajo puede verse afectado por técnicas enfocadas a potenciar las habilidades de sus integrantes. El portal Coworkingfy (s.f.) presenta cuatro (4) métodos basados en procedimientos y procesos lógicos para lograr este objetivo, a saber:
    .tarjetas-hover.d-flex.mb-5
      .tarjeta-hover__boton.p-3.color-primario.d-flex.align-items-center
        .tarjeta-hover__boton__content.d-flex.mx-2.align-items-center
          img(src='@/assets/curso/img32.svg' alt='AvatarTop' style='width:100px').mx-2.d-lg-block.d-none
          h4.text-white.mx-2.mb-0 Dinámica
            br
            |de grupos
      .tarjeta-hover__contenido.color-secundario.p-4.d-flex.align-items-center
        .ps-5 
          h4.mb-0 Definición
          p.mb-0 Esta estrategia se centra en la discusión verbal, enfatizando en exponer una problemática para ser resuelta de manera grupal. Se incentiva la generación de diálogo y la contratación de ideas. Así, puede enfocarse en cualquiera de las siguientes etapas: 
    h5.ps-5 Tipos
    AcordionA.mb-5.ps-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row(titulo="Generar ideas")
        .col-md-2
          figure
            img(src='@/assets/curso/img33.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p Bajo este sistema se busca producir la mayor cantidad de ideas ejercitando la imaginación. Una de las herramientas que utiliza para ello es la “lluvia de ideas” donde a partir de un ambiente despreocupado o informal, se lanzan varias ideas para llegar a un consenso. Con esto se busca estimular la creatividad en un ambiente espontáneo para luego concertar en aquellos elementos que aporten más a la solución de la problemática inicial.
      .row(titulo="Alcanzar el consenso")
        .col-md-2
          figure
            img(src='@/assets/curso/img34.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p Con esta estrategia se busca un consentimiento de todos los integrantes del equipo. La metodología se centra en ir reduciendo las opciones de solución a un problema, hasta que se llegue a una alternativa en la que todos estén de acuerdo. Se da en una etapa posterior a la lluvia de ideas, pues en este punto deben descartarse aquellas que no cumplan con las condiciones necesarias para resolver la problemática en cuestión.
      .row(titulo="Organizar las ideas")
        .col-md-2
          figure
            img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen')
        .col-md-10.mb-4.mb-md-0
          p En esta fase se busca ordenar, estructurar y categorizar la información. La metodología recomendada a aplicar es la de identificar las causas de las problemáticas a resolver, para plantear soluciones en el orden que sea más efectivo según su análisis.
    .tarjetas-hover.d-flex.mb-3
      .tarjeta-hover__boton.p-3.color-primario.d-flex.align-items-center
        .tarjeta-hover__boton__content.d-flex.mx-2.align-items-center
          img(src='@/assets/curso/img36.svg' alt='AvatarTop' style='width:100px').mx-2.d-lg-block.d-none
          h4.text-white.mx-2.mb-0 Solución de
            br
            |problemas
      .tarjeta-hover__contenido.color-secundario.p-3.d-flex.align-items-center
        .ps-5 
          p.mb-0 Es una técnica que requiere de mayor planeación, pues se busca aislar el problema para luego plantear una solución más estructurada. El diagrama de Gantt, visto previamente en este componente, es una de las metodologías aplicables bajo esta técnica, pues permite registrar las actividades enfocadas a resolver el problema, designar responsables y proponer horizontes de tiempo. Esta técnica se complementa con la elaboración de un plan de acción, que incluye los objetivos a cumplir a futuro. 
    .tarjetas-hover.d-flex.mb-3
      .tarjeta-hover__boton.p-3.color-primario.d-flex.align-items-center
        .tarjeta-hover__boton__content.d-flex.mx-2.align-items-center
          img(src='@/assets/curso/img37.svg' alt='AvatarTop' style='width:100px').mx-2.d-lg-block.d-none
          h5.text-white.mx-0.mb-0.pe-5.me-5( style="width:80px" ).d-flex.flex-wrap.flex-grow-1 Técnicas de experimentación
      .tarjeta-hover__contenido.color-secundario.p-4.d-flex.align-items-center
        .ps-5 
          p.mb-0 Este sistema incentiva la resolución de problemas a través de la experimentación, sometiendo a prueba diferentes alternativas para resolver problemáticas. Con ello se busca que el personal se mantenga en una mentalidad de mejoramiento continuo, aportando nuevos conocimientos con cada nueva estrategia aplicada a un mismo problema.
    .tarjetas-hover.d-flex.mb-5
      .tarjeta-hover__boton.p-3.color-primario.d-flex.align-items-center
        .tarjeta-hover__boton__content.d-flex.mx-2.align-items-center
          img(src='@/assets/curso/img38.svg' alt='AvatarTop' style='width:100px').mx-2.d-lg-block.d-none
          h4.text-white.mx-2.mb-0 Informarse y
            br
            |aprender
      .tarjeta-hover__contenido.color-secundario.p-4.d-flex.align-items-center
        .ps-5 
          p.mb-0 Es una técnica de amplia aplicación en las organizaciones. Con ella se busca que el personal se mantenga en constante capacitación para refinar sus tareas con el paso del tiempo. Es responsabilidad de las directivas otorgar las herramientas necesarias para que se logre este objetivo; para ello se puede disponer de sistemas como las capacitaciones, rotaciones de cargos, talleres prácticos, entre otros.













</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    datosSlyder: [
      {
        titulo: 'Objetivos en común:',
        texto:
          'Se deben identificar aquellas metas que comparten los integrantes del equipo, de esta forma será más sencillo dirigir los esfuerzos a un propósito claro.',
        imagen: require('@/assets/curso/img25.jpg'),
      },
      {
        titulo: 'Funciones por trabajador: ',
        texto:
          'Definir las labores que ejecutará cada integrante de acuerdo con su conocimiento y fortalezas hará que se incremente la efectividad, puesto que cada trabajador aportará desde una posición diferente.',
        imagen: require('@/assets/curso/img26.jpg'),
      },
      {
        titulo: 'Interdependencia: ',
        texto:
          'La secuencia de tareas a desarrollar debe crear una red en la que cada integrante se apoye en los demás, de forma que se complementen entre sí.',
        imagen: require('@/assets/curso/img27.jpg'),
      },
      {
        titulo: 'Reglas claras: ',
        texto:
          'Definidas por el mismo equipo o por su líder, enmarcar el trabajo dentro de una serie de reglas evita malentendidos y promueve la ejecución del trabajo de una forma organizada.',
        imagen: require('@/assets/curso/img28.jpg'),
      },
      {
        titulo: 'Comunicación acertada: ',
        texto:
          'Debe existir un flujo constante de comunicación entre los miembros del equipo, La retroalimentación es importante para atacar aquellas debilidades que pasarían desapercibidas al realizar las tareas de forma individual.',
        imagen: require('@/assets/curso/img29.jpg'),
      },
      {
        titulo: 'Responsabilidad: ',
        texto:
          'Así como se sugiere una designación de tareas, también se deben delimitar las responsabilidades. Aunque los objetivos se alcancen de manera conjunta, cada integrante debe responder por su porción del trabajo a realizar.',
        imagen: require('@/assets/curso/img30.jpg'),
      },
      {
        titulo: 'Liderazgo: ',
        texto:
          'Todo trabajo que implique la coordinación de dos o más personas requerirá de un buen líder. Su función será la de encaminar las tareas para alcanzar los objetivos y dirimir las discusiones que puedan surgir por posiciones contrarias. ',
        imagen: require('@/assets/curso/img31.jpg'),
      },
    ],
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

<style lang="sass" scoped>
.tarjeta-hover
  height: 162px

  &__boton
    z-index: 99
    height: 162px
    position: relative
    width: 320px
    &::after
      z-index: 0
      position: absolute
      content: ""
      width: 5px
      height: 81px
      top: (calc(50% - 81px))
      right: -30px
      border-left: solid 30px #17C878
      border-bottom: solid 81px transparent
      border-top: solid 81px transparent
    &::before
        content: ""
        position: absolute
        height: 100%
        top: 0
        left: 0
        width: 15px
        background-color: #F1D54E
  &__contenido
    z-index: 0
    width: 100%
</style>
