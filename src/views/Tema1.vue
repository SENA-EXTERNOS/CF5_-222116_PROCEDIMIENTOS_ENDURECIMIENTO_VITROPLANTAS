<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos básicos para el endurecimiento
    p.mb-5 Vamos a dar inicio al desarrollo del componente formativo Procedimientos para el endurecimiento de vitroplantas, presentando lo relacionado con los fundamentos básicos para el endurecimiento.

    .bg--gradientBlue.p-5.mb-4 
      SlyderB(:datos="datosSlyder")

    <Separador></Separador>
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1.	Concepto y condiciones de endurecimiento de vitroplantas      
    p.mt-5.mb-5 Como fundamento básico para el endurecimiento se presenta a continuación el concepto y condiciones de endurecimiento de vitroplantas.

    
      TabsC.color-secundario.mb-5.mt-5
        .py-3.py-md-4(titulo="Definición de vitroplantas").slyderB_bg_01               
          .row.justify-content-center.p-5
            .col-lg-7.order-lg-2.mb-4.mb-lg-0         
              p Reciben el nombre de vitroplantas aquellos individuos vegetales que han sido producto de la micropropagación asexual y que avanzan su desarrollo en recipientes de vidrio y en condiciones que, aunque aún se controlan, tienden a ser compartidas con el ambiente natural en su proceso de aclimatación.                
            .col-lg-5.order-lg-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img5.png', alt='').img400.m-auto

        .py-3.py-md-4(titulo="<i>In vitro</i> vs <i>ex vitro</i>").slyderB_bg_01
          .row.justify-content-center.p-5          
            .col-lg-7.order-lg-2.mb-4.mb-lg-0
              p.mb-0 Según Espinosa et al. (2019), las plantas que provienen del cultivo de tejidos generalmente requieren de tratamientos para prevenir su muerte después de transferidas a condiciones #[i ex vitro], ya que las producidas #[i in vitro] son incapaces de resistir los cambios de ambiente a los que se enfrentan. Esto es debido a que se han desarrollado en un ambiente aséptico, con variaciones mínimas de temperatura, alta humedad y disponibilidad de nutrientes y baja concentración de dióxido de carbono. Ante el minucioso procedimiento, se comparten responsabilidades entre la infraestructura y la metodología, de tal manera que se aporte en cada fase lo que se requiere para lograr en su primer avance la supervivencia del material vegetal. 
            .col-lg-5.order-lg-1                                       
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img6.png', alt='').img400.m-auto      

        .py-3.py-md-4(titulo="Técnica <i>in vitro</i>").slyderB_bg_01
          .row.justify-content-center.p-5
            .col-lg-7.order-lg-2.mb-4.mb-lg-0                           
              p.mb-0 Al disponer de etapas tan tempranas en la formación de tejido, la técnica #[i in vitro] determina la procedencia del tejido o del tipo de células del cual se pretende obtener el brote de germinación. Es una etapa de fragilidad en cuanto al desempeño del procedimiento y tienen que ver con el resultado final las técnicas, los implementos y los tiempos en control de las variables en los lugares determinados para realizar la sección mencionada; pues desde que se inicie se corren los riesgos propios de la práctica en la que se pueden experimentar eventos de contaminación del material o pérdida del mismo por exposiciones a variables que le afectan fisiológicamente.
            .col-lg-5.order-lg-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img7.png', alt='').img400.m-auto

        .py-3.py-md-4(titulo="Nombre del botón").slyderB_bg_01
          .row.justify-content-center.p-5
            .col-lg-7.order-lg-2.mb-4.mb-lg-0                           
              p.mb-0 La vitroplanta es el resultado de todos los protocolos en conjunto y requiere que las condiciones en las cuales se inicie sean las óptimas y así se pueda avanzar en las etapas que preceden al endurecimiento o aclimatación. Lo anterior es un paso más en el cual se atenderá la limpieza del medio en que se originó el brote y los procesos de cuidado del sistema radical altamente delicados al paso de sustrato. 
            .col-lg-5.order-lg-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/tema1/img8.png', alt='').img400.m-auto  

    <Separador></Separador>
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2.	Condiciones de calidad en material vegetal
    p.mb-5 Introducción	Determinados el concepto y condiciones de endurecimiento de vitroplantas, se presentan a continuación las condiciones de calidad en material vegetal.  


    .slyderA_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.ps-4.mb-0 Las características morfológicas que se observan en una vitroplanta, y posteriormente en plántulas aclimatadas, deben ser traducidas en términos de calidad. Esto permite proyectar producciones exitosas después de un proceso que busca garantizar el adecuado desarrollo. Las características también están relacionadas al tipo de especie en la cual se registran las medidas cuantitativas como talla, número de hojas, número de raíces y longitud de estas. 
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img9.png')      
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="02")              
              p.ps-4.mb-0 La homogeneidad del cultivo en general debe disponer de las mismas características, pues la clonación o reproducción asexual de una planta madre de alta calidad debe estar en la generación clonada, así como la sanidad y el registro de sus cualidades debe ser consecuente con el estadio en desarrollo.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img10.png')    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Para mayor claridad en cuanto a esta temática, cuando se hace alusión a la genética de la especie en cuestión de calidad, se hace referencia al origen de la misma como la semilla. En casos de micropropagación o reproducción asexual se determina a partir de las células aisladas o de los tejidos de los cuales se inicia el crecimiento. 
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img11.png')  
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Con relación a lo anterior, se despliega la calidad en cuanto a la morfología, incluyendo todos aquellos aspectos de forma que presenta la especie y fisiología en cuanto al acertado y eficiente proceso metabólico y funcional en respuesta de las diferentes etapas de crecimiento. Otro de los aspectos para tener en cuenta en la calidad suele estar asociado a la sanidad, es decir, a la presencia o no de agentes patógenos que puedan condicionar su desarrollo.
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img12.png')  
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Por descripciones como la anterior, en cuanto a la calidad la especie reproducida debe ser morfológicamente ideal en el momento de sacar a campo, pues fisiológicamente se encuentra en condiciones idóneas para responder con un alto porcentaje de supervivencia al ambiente natural. En cada una de las fases de desarrollo por las que pase el material vegetal propagado ha de requerir de una valoración en cuanto al procedimiento que se utiliza. Esto permite que se estandaricen protocolos para garantizar la calidad de la etapa en que se encuentra, porque cuando las plántulas evidencian ya los brotes de germinación de sus tejidos aéreos, serán calificadas por su fenotipo y morfología, siendo estas características las que indiquen resultados o deficiencias. Por esta razón los controles aseguran las decisiones a tener en cuenta respecto a los resultados. 	 Imagen: 222116_i15
          .col-6.col-lg-4
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/img13.png') 

    p.mb-5 Reconociendo las condiciones de endurecimiento y calidad en material vegetal, en el siguiente video se describe el tipo de infraestructura requerida para el endurecimiento.

    <Separador></Separador>
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3.	Tipo de infraestructura requerida para el endurecimiento

    figure
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    .row.justify-content-center.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.png')})`}"
          )                             
          .bloque-texto-g__texto.p-4
            i.fas.fa-quote-left
            p  Cedillo (2019) analiza:  al construir un invernadero, las condiciones climáticas dentro del mismo cambian con respecto al exterior. Los plásticos de la cubierta superior dejan filtrar la radiación y una vez que se ha saturado el ambiente la empiezan a reflejar, lo anterior hace que suba la temperatura y por lo tanto en las horas de más radiación se tengan altas temperaturas dentro del invernadero. De ahí viene el concepto utilizado en el tema de cambio climático “Efecto Invernadero”, que no es más que un incremento en la temperatura de la tierra. Al aumentar la temperatura, la humedad del aire, que se conoce como humedad relativa disminuye, ya que ambos elementos climáticos son inversamente proporcionales; Esta relación de incremento de la temperatura y disminución de la humedad relativa no es óptimo para el crecimiento de las plantas, y este fenómeno depende principalmente de la radiación solar. (p. 5)
            i.fas.fa-quote-right

    p.mt-5.mb-5 Algunas de las estructuras utilizadas en la aclimatación y endurecimiento de vitroplantas se conoce como cámara de humedad.
    p Cámara de humedad en invernadero de aclimatación o endurecimiento

    .row.justify-content-center.mt-5
      .col-8.col-lg-4
        figure(data-aos="fade-left")
          img.l.my-3(src="@/assets/curso/temas/tema1/img15.png", alt="alt") 
      .col-lg-8
        LineaTiempoD.color-secundario.mt-3
          p(numero="1" titulo="Utilidad de las cámaras de humedad") Las cámaras de humedad permiten mantener el control de variables como la temperatura, el tiempo de luminosidad o fotoperiodo y la radiación. 

          p(numero="2" titulo="Explantes germinados") Los explantes ya germinados deben replantear de manera fisiológica los procesos de transformación química de la energía, presentando mayor actividad fotosintética y administrando el recurso hídrico en periodos de tiempo en que la absorción no se requiere; por eso la vitroplanta es beneficiada al llegar a la fase de aclimatación y endurecimiento.

    .row.justify-content-md-center.mt-3
      .col-md-10
        .tarjeta.color-tarjeta-descargas.p-3.mt-5
          .row.justify-content-md-center
            .col-1.mt-3
              figure
                img(src="@/assets/curso/temas/tema1/img16.png")
            .col-md-7
                p.text-small.text-white Para profundizar un poco más sobre el procedimiento de endurecimiento #[i ex vitro], visite el Grupo de innovación educativa en biodiversidad y biología vegetal en el blog 
            .col-md-3.mt-3
              .row.justify-content-end
                .col-md-10
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/CF5 Procedimientos para el endurecimiento de vitroplantas v2.pdf')" target="_blank")
                    span Ver enlace
                    i.fa.fa-link          


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'En el desarrollo biotecnológico, las técnicas de micropropagación permiten obtener un material vegetal con características que comercialmente benefician el cultivo y su producción. Para llevar a cabo el endurecimiento de vitroplantas se obtiene antes un producto <i>in vitro</i> mediante reproducción asexual, bien sea, utilizando las yemas, células meristemáticas u otro tejido celular que permite su crecimiento completo, a partir de la totipotencia de las células vegetales; esta secuencia de procedimientos dan paso a siguientes etapas como la aclimatación o endurecimiento, indispensable para la supervivencia del material vegetal, pues permite el fortalecimiento fisiológico de órganos como las raíces y láminas foliares ante las condiciones del ambiente natural.',
        imagen: require('@/assets/curso/temas/tema1/img1.png'),
      },
      {
        texto:
          'Todos estos procedimientos no se pueden realizar sin hacer uso de la infraestructura que se requiere para tal fin, pues el proceso de propagación <i>in vitro</i> implica desde el inicio una relación con el espacio en que se lleven a cabo las diferentes actividades de las fases por las que pasa el material vegetal. Entre estas actividades se cuenta la disposición al reproducir el material vegetal como es el caso en recipientes de vidrio, y la germinación mediante el uso de sustratos en condiciones previamente tratadas.',
        imagen: require('@/assets/curso/temas/tema1/img2.png'),
      },
      {
        texto:
          'Por esta razón, el conocimiento de los procedimientos implicados, los materiales requeridos y los objetivos del proyecto, inician la ruta de la aplicación de la técnica <i>in vitro</i> y su avance al manejo de vitroplantas. Cuando se lleva a cabo esta fase, las especies vegetales se encuentran en un periodo de desarrollo del estado vegetativo, por ejemplo, en la parte subterránea las raíces están instalando sus estructuras en el sustrato disponible, de tal manera que pueden explorar las características del mismo realizando la absorción de los nutrientes y del recurso hídrico. ',
        imagen: require('@/assets/curso/temas/tema1/img3.png'),
      },
      {
        texto:
          'Con respecto a las partes aéreas, se determina la formación y el crecimiento a un número determinado de las láminas foliares (es decir, las hojas), siendo cada vez más activas en cuanto a procesos relacionados con la intensidad de luz que se suministre; acción que paulatinamente debe ser realizada en exclusivo por la planta y así lograr su independencia al ambiente controlado. ',
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
