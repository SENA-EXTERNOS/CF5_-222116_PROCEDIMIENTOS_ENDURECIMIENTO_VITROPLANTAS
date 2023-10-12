<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos para el endurecimiento
    p.mb-5 En este componente formativo, se van a desarrollar los conceptos generales sobre lo relacionado con los fundamentos básicos para el endurecimiento.

    .bg--gradientBlue.p-5.mb-5 
      SlyderB(:datos="datosSlyder")

    h3 Concepto y condiciones del endurecimiento de vitroplantas     
    p.mt-5.mb-5 Como fundamento básico para el endurecimiento, a continuación, se presentan el concepto y las condiciones para el endurecimiento de las vitroplantas.

    
      TabsC.color-secundario.mb-5.mt-5
        .py-3.py-md-4(titulo="Definición de vitroplantas").slyderB_bg_01               
          .row.justify-content-center.p-5
            .col-lg-7.mb-4.mb-lg-0         
              p Reciben el nombre de vitroplantas aquellos individuos vegetales que han sido producto de la micropropagación asexual y que avanzan su desarrollo en recipientes de vidrio y en condiciones que, aunque aún se controlan, tienden a ser compartidas con el ambiente natural en su proceso de aclimatación.                
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img5.png', alt='').img400.m-auto

        .py-3.py-md-4(titulo="<i>In vitro</i> vs <i>ex vitro</i>").slyderB_bg_01
          .row.justify-content-center.p-5          
            .col-lg-7.mb-4.mb-lg-0
              p.mb-0 Según Espinosa, et al., (2019), las plantas que provienen del cultivo de tejidos, generalmente requieren de tratamientos para prevenir su muerte después de ser transferidas a condiciones <i>ex vitr</i>o, debido a que las producidas <i>in vitro</i>, son incapaces de resistir los cambios de ambiente a los que se enfrentan. Esto, debido a que se han desarrollado en un ambiente aséptico, con variaciones mínimas de temperatura, alta humedad y disponibilidad de nutrientes y baja concentración de dióxido de carbono. Ante el minucioso procedimiento, se comparten responsabilidades entre la infraestructura y la metodología, de tal manera que se aporte en cada fase, lo que se requiere para lograr, en su primer avance, la supervivencia del material vegetal.
            .col-lg-5                                      
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img6.png', alt='').img400.m-auto      

        .py-3.py-md-4(titulo="Técnica <i>in vitro</i>").slyderB_bg_01
          .row.justify-content-center.p-5
            .col-lg-7.mb-4.mb-lg-0                           
              p.mb-0 Al disponer de etapas tan tempranas en la formación de tejido, la técnica <i>in vitro</i> determina la procedencia del tejido o del tipo de células del cual se pretende obtener el brote de germinación. Es una etapa de fragilidad en cuanto al desempeño del procedimiento y con el resultado final tienen que ver las técnicas, los implementos y los tiempos para el control de las variables, en los lugares determinados para realizar la sección mencionada, debido a que, desde que se inicie, se corren riesgos propios de la práctica, en la que se pueden experimentar eventos de contaminación del material o pérdida del mismo, por exposiciones a variables que le afectan fisiológicamente.
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img7.png', alt='').img400.m-auto

        .py-3.py-md-4(titulo="Vitroplantas").slyderB_bg_01
          .row.justify-content-center.p-5
            .col-lg-7.mb-4.mb-lg-0                           
              p.mb-0 La vitroplanta es el resultado de todos los protocolos en conjunto y requiere que las condiciones, en las cuales se inicie, sean las óptimas y así se pueda avanzar en las etapas que preceden al endurecimiento o aclimatación. Lo anterior es un paso más en el cual se atenderán la limpieza del medio en que se originó el brote y los procesos de cuidado del sistema radical, los cuales son altamente delicados con el paso del sustrato.
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img8.png', alt='').img400.m-auto  

    p.my-5 Definidos el concepto y las condiciones de endurecimiento de las vitroplantas, a continuación, se presentan las condiciones de calidad en el material vegetal.


    .slyderA_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.ps-4.mb-0 Las características morfológicas que se observan en una vitroplanta y, posteriormente, en plántulas aclimatadas, deben ser traducidas en términos de calidad. Esto permite proyectar producciones exitosas después de un proceso que busca garantizar el adecuado desarrollo. Las características también están relacionadas al tipo de especie en la cual se registran las medidas cuantitativas como talla, cantidad de hojas, de raíces y la longitud de estas.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img9.png')      
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")              
              p.ps-4.mb-0 La homogeneidad del cultivo, en general, debe disponer de las mismas características, pues la clonación o reproducción asexual de una planta madre de alta calidad, debe estar en la generación clonada, así como también la sanidad y el registro de sus cualidades deben ser consecuentes con el estadío en desarrollo.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img10.png')    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Para mayor claridad en cuanto a esta temática, cuando se hace alusión a la genética de la especie en cuestión de calidad, se hace referencia al origen de la misma como semilla. En casos de micropropagación o reproducción asexual, se determina a partir de las células aisladas o de los tejidos, desde los cuales se inicia el crecimiento.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img11.png')  
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Con relación a lo anterior, se despliega la calidad en cuanto a la morfología, incluyendo todos aquellos aspectos de la forma en que presentan la especie y la fisiología en cuanto al acertado y eficiente proceso metabólico y funcional en respuesta de las diferentes etapas de crecimiento. Otro de los aspectos para tener en cuenta en la calidad, suele estar asociado con la sanidad, es decir, con la presencia o no, de agentes patógenos que puedan condicionar su desarrollo.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img12.png')  
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Por descripciones como la anterior, en cuanto a la calidad, la especie reproducida debe ser morfológicamente ideal en el momento de sacar al campo, pues fisiológicamente se encuentra en condiciones idóneas para responder con un alto porcentaje de supervivencia al ambiente natural. En cada una de las fases de desarrollo por las que pase el material vegetal propagado, ha de requerir de una valoración en cuanto al procedimiento que se utiliza. Esto permite que se estandaricen protocolos para garantizar la calidad de la etapa en que se encuentra, porque cuando las plántulas evidencian ya los brotes de germinación de sus tejidos aéreos, serán calificadas por su fenotipo y morfología, siendo estas características las que indiquen resultados o deficiencias. Por esta razón, los controles aseguran las decisiones que se deben tener en cuenta con respecto a los resultados.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img13.png') 

    p.mb-5 Habiendo aprendido las condiciones de endurecimiento y calidad en el material vegetal, en el siguiente video se describe el tipo de infraestructura requerida para el endurecimiento.

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/ma1BSQ9pjLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    .row.justify-content-center.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            i.fas.fa-quote-left
            p  Cedillo (2019) analiza: “Al construir un invernadero, las condiciones climáticas dentro del mismo, cambian con respecto al exterior. Los plásticos de la cubierta superior dejan filtrar la radiación y, una vez que se ha saturado el ambiente, la empiezan a reflejar; lo anterior hace que suba la temperatura y, por lo tanto, en las horas de más radiación se tengan altas temperaturas dentro del invernadero. De ahí viene el concepto utilizado en el tema de cambio climático “Efecto Invernadero”, que no es más que un incremento en la temperatura de la tierra. Al aumentar la temperatura, la humedad del aire, que se conoce como humedad relativa, disminuye, porque ambos elementos climáticos son inversamente proporcionales. Esta relación de incremento de la temperatura y disminución de la humedad relativa, no es óptima para el crecimiento de las plantas, y este fenómeno depende principalmente de la radiación solar”. (p. 5)
            i.fas.fa-quote-right

    p.mt-5.mb-5 Una de las estructuras utilizada en la aclimatación y endurecimiento de vitroplantas, se conoce como cámara de humedad.

    .row.justify-content-center.mt-5
      .col-8.col-lg-4
        figure(data-aos="fade-left")
          img.l.my-3(src="@/assets/curso/temas/tema1/img15.png", alt="alt") 
      .col-lg-8
        LineaTiempoD.color-secundario.mt-3
          p(numero="1" titulo="Utilidad de las cámaras de humedad") Las cámaras de humedad permiten mantener el control de variables como la temperatura, el tiempo de luminosidad o fotoperiodo y la radiación. 

          p(numero="2" titulo="Explantes germinados") Los explantes ya germinados deben replantear, de manera fisiológica, los procesos de transformación química de la energía, presentando mayor actividad fotosintética y administrando el recurso hídrico en periodos de tiempo en los que la absorción no se requiere; por esto, la vitroplanta es beneficiada al llegar a la fase de aclimatación y endurecimiento.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En el desarrollo biotecnológico, las técnicas de micropropagación permiten obtener un material vegetal con características que comercialmente benefician el cultivo y su producción. Para llevar a cabo el endurecimiento de vitroplantas, se obtiene antes un producto in vitro mediante reproducción asexual, bien sea, utilizando las yemas, células meristemáticas u otro tejido celular que permita su crecimiento completo, a partir de la totipotencia de las células vegetales; esta secuencia de procedimientos, dan paso a las siguientes etapas; entre ellas, la aclimatación o endurecimiento, indispensable para la supervivencia del material vegetal, porque permite el fortalecimiento fisiológico de órganos como las raíces y láminas foliares, ante las condiciones del ambiente natural.',
        imagen: require('@/assets/curso/temas/tema1/img1.png'),
      },
      {
        texto:
          'Todos estos procedimientos no se pueden realizar sin hacer uso de la infraestructura que se requiere para tal fin, debido a que el proceso de propagación <i>in vitro</i> implica, desde el inicio, una relación con el espacio en el que se llevan a cabo las diferentes actividades de las fases por las que pasa el material vegetal. Entre estas actividades, se cuenta con la disposición para reproducir el material vegetal, como es el caso de recipientes de vidrio, y la germinación, mediante el uso de sustratos, en condiciones tratadas con anterioridad.',
        imagen: require('@/assets/curso/temas/tema1/img2.png'),
      },
      {
        texto:
          'Por esta razón, el conocimiento de los procedimientos implicados, los materiales requeridos y los objetivos del proyecto, inician la ruta de la aplicación de la técnica <i>in vitro</i> y su avance en el manejo de vitroplantas. Cuando se lleva a cabo esta fase, las especies vegetales se encuentran en un periodo de desarrollo del estado vegetativo; por ejemplo, en la parte subterránea, las raíces instalan sus estructuras en el sustrato disponible, de tal manera que puedan explorar las características del mismo, realizando la absorción de los nutrientes y del recurso hídrico. ',
        imagen: require('@/assets/curso/temas/tema1/img3.png'),
      },
      {
        texto:
          'Con respecto a las partes aéreas, se le determina la formación y el crecimiento, a una cantidad determinada de láminas foliares (es decir, las hojas), siendo cada vez más activas en cuanto a procesos relacionados con la intensidad de luz que se suministre; esta acción debe ser realizada paulatinamente y de forma exclusiva, por la planta, para lograr su independencia con el ambiente controlado.',
        imagen: require('@/assets/curso/temas/tema1/img4.png'),
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

<style lang="sass"></style>
