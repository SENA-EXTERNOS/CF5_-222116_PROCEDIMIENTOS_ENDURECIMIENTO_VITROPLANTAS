<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Consolidación de espacios para el endurecimiento

    p.mt-5.mb-5 Una vez conocidos los fundamentos básicos para el endurecimiento, se presenta ahora la consolidación de espacios.

    .bg--gradientBlue.p-5.mb-4 
      SlyderB(:datos="datosSlyder")      
      
    h3.mt-5 Alistamiento de espacios de germinación
    p.mb-5 En el proceso de incorporación de espacios para el endurecimiento, se describe en este tema, el alistamiento de espacios para la germinación.

    .row.justify-content-center.bg1.mg-img.mt-5.mg-img-final.t-img 
      .col-md-6
        p.p-ml En algunos casos, los proyectos de micropropagación son requeridos para la producción en masa de alguna especie de interés económico; sin embargo, también pueden estar destinados al ejercicio <i>in vitro</i> de especies que presentan tasas de reproducción muy bajas y se encuentran en vía de extinción.  
      .col-md-6 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img6.png', alt='')
      .col-md-12.mt-5
        SlyderF(columnas="col-sm-4")
          .tarjeta.color-secundario.bg-tarjeta.h-slider.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img7.png' alt='')                  
              p.mt-5.texto-centro En la práctica, y en la disposición de adicionar en el proceso de propagación vegetal todo lo que esta necesita para desarrollarse, es de tener en cuenta que en los procesos para cada etapa, dependiendo de la especie, pueden variar las respuestas.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img8.png' alt='')                  
              p.mt-5.texto-centro Arrieta, <i>et al</i>. (2017), indican que no todas las plantas tienen la capacidad de enraizar espontáneamente, por lo que, a veces, es necesario aplicar sustancias hormonales que provoquen la formación de raíces.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img9.png' alt='')                  
              p.mt-5.texto-centro Las auxinas, por ejemplo, son hormonas reguladoras del crecimiento vegetal y, en dosis muy pequeñas, regulan los procesos fisiológicos de las plantas; todas estimulan la formación y el desarrollo de las raíces. 

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img10.png' alt='')                  
              p.mt-5.texto-centro La función de las auxinas en la promoción del enraizamiento tiene que ver con la división y crecimiento celular, la atracción de nutrientes y de otras sustancias al sitio de aplicación, las relaciones hídricas y fotosintéticas, entre otros aspectos.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img11.png' alt='')                  
              p.mt-5.texto-centro El conocimiento de la especie que se va a reproducir asexualmente, puede requerir de la dosificación exacta en el uso de hormonas, las cuales deben ubicarse, bien sea en el medio de cultivo, o en sustratos, cuando se acondicionan para etapas más avanzadas.
    

    .row.justify-content-center
      .col-lg-8
        p Dando continuidad a la consolidación de espacios para el endurecimiento, se presentan a continuación algunos elementos a considerar en la etapa de germinación.
        <hr>                     
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris") 
            .row(titulo="Etapa de germinación")
              .col-12                
                p.mb-0 Para iniciar la etapa de germinación, es posible detener la latencia de las semillas bajo controles, previos al inicio del cultivo <i>in vitro</i>; en el caso de otros tejidos a germinar, significa que la multiplicación de la plántula, en muchas de ellas, para iniciar su desarrollo, esté precedida por el endurecimiento y aclimatación para otras etapas más avanzadas.

            .row(titulo="Herramientas para la germinación")
              .col-12                              
                p.mb-0 Para la germinación se utilizan todas aquellas herramientas que intervienen en la desinfección y limpieza del material vegetal: elementos de soporte de los medios o cultivos como cajas de Petri, tubos de ensayo o frascos de vidrio, previamente esterilizados. 

            .row(titulo="Medio para la germinación")
              .col-12                
                p.mb-0 Este medio consta de nutrientes y hormonas con relación al tipo de especie a micropropagar; la selección de recipientes individuales o grupales difieren con respecto al objetivo del proyecto, recursos u otros aspectos que requieren la valoración de este.

            .row(titulo="Rotulación y ubicación de recipientes")
              .col-12                
                p.mb-0 En términos de procedimiento mecánico en cuanto a su desarrollo, es importante la rotulación y ubicación de los recipientes de vidrio en la respectiva sala de cultivo con temperaturas indicadas, intensidad lumínica y oscuridad apropiadas, como lo indican Salgado y Peñaranda (2019), en fases experimentales de germinación de semillas.
        
      .col-lg-4.d-none.d-lg-flex.mt-5
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img12.png", alt="alt").m-auto

    h3.mt-5 Preparación y desinfección de sustratos para el endurecimiento

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-5.mb-3
            figure
              img(src="@/assets/curso/temas/tema2/img13.png", alt="alt")        
          .col-sm-7.mb-3
            .bloque-texto-b.color-tarjeta-bloque-texto.p-4
              .bloque-texto-b__texto
                p El suelo hace parte de los componentes abióticos del ambiente, allí confluye un universo de seres vivos microscópicos que permiten la vida a las plantas. En términos de agricultura, el suelo juega un papel fundamental para el buen desarrollo de los cultivos, pues a través de este, las plantas absorben los nutrientes que en él se encuentran. Las características del suelo, pueden variar según las cantidades de los materiales que lo conforman; por estas razones, para utilizar como sustratos, se prefieren unos suelos más que otros.

      p.mt-5.mb-5  Las variables del suelo son: 

      .row.justify-content-center      
        .col-lg-10.position-relative         
          .avatar
            figure
              img(src="@/assets/curso/temas/tema2/img14.png", alt="alt").img250
          .crd.crd--avatarHorizontal.crd--first.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img15.png", alt="alt").img100
              .col
                  h5 Físicas 
                  p Por su estructura, arcillosa o arenosa.

          .crd.crd--avatarHorizontal.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img16.png", alt="alt").img100
              .col
                h5 Biológicas 
                p Por los microorganismos presentes.

          .crd.crd--avatarHorizontal.crd--three.py-4
            .row.align-items-center
              .col-auto
                figure
                  img(src="@/assets/curso/temas/tema2/img17.png", alt="alt").img100
              .col
                h5 Químicas 
                p Por su representación de macroelementos y microelementos.
                     


    p.mt-5 En este tema se presentan elementos indispensables, a considerar, en la preparación y desinfección de sustratos para el endurecimiento.
    .slyderA_bg_02.px-5.py-3.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="01")              
              p.ps-4.mb-0 Si bien un suelo con buenas características debe proveer, de manera natural, lo que las plantas requieren, en ejercicios de propagación de material vegetal, al controlar desde el inicio las variables que influyen en el crecimiento de estas, se requiere que el sustrato proporcione, más no genere en la plantación, inconvenientes de tipo patológico. Lo anterior, debido a que se pueden transmitir hongos, virus y bacterias, entre otros, afectando su desarrollo, así como cuando sus características estructurales o físicas inadecuadas, no permiten una buena absorción de agua en los periodos de tiempo que se requieren. 
          .col-7.col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img18.png')      
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0  
            .number(data-number="02")              
              p.ps-4.mb-0 Por las anteriores descripciones del suelo, pasa a interiorizar el sustrato como Gayosso, et al. (2016), lo definen: “Es el material sólido natural, de síntesis o residual, orgánico o mineral, puro o mezclado que en un contenedor permite el anclaje del sistema radical, da soporte a la planta e interviene o no en su nutrición”. Siendo el sustrato un componente indispensable, debe estar libre de impurezas que generan contaminación de las raíces y, posterior, de otras partes de la plántula, causando enfermedad y poniendo en riesgo su desarrollo. 
          .col-6.col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img19.png')    
        .row.justify-content-center.align-items-center.my-lg-4
          .col-lg-6.mb-4.mb-lg-0.pt-5.pt-0.position-relative
            .number(data-number="03")              
              p.ps-4.mb-0 Según Martínez (2008) en Díaz y Jordán (2018), las características que debe poseer un buen sustrato, serán aquellas que permitan la producción de plantas sanas y con la mejor calidad. Para obtener óptimos resultados durante la germinación, el enraizamiento y el crecimiento de las plántulas, se requiere, entre las características del medio de cultivo, 6 en pH, que es ligeramente ácido. El principal efecto del pH, es su influencia en la disponibilidad de los nutrientes minerales, especialmente en los micronutrientes. 
          .col-6.col-lg-6
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img20.png')  

    p.mt-5.mb-5  Para realizar la desinfección del sustrato existen dos formas, el método químico y el físico.
    .tarjeta.p-5(titulo="Ejemplo - 1")
      .row.justify-content-center
        .col-lg-11
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img21.png', alt='Texto que describa la imagen')

            div(x="41%" y="44%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  p.mb-3 Este método hace referencia al uso de productos con síntesis química, que se adiciona con un principio biocida, para eliminar cualquier tipo de microorganismo vivo presente.

            div(x="69%" y="75%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  p.mb-3 Este método hace uso del calor como la solarización, en donde se expone al Sol, el suelo cubierto de plástico, con altas temperaturas; al alterar esa variable, se eliminan los microorganismos que puedan generar la contaminación o riesgo en el sustrato, porque el metabolismo de esos agentes patológicos, no es resistente a las altas temperaturas.
                  
    p.mt-5.mb-5 En este tema se complementa la información relacionada con las formas de desinfección del sustrato.
    .bg--gradientBlue.p-5.mb-4 
      SlyderB(:datos="datosSlyder1")

    .row.justify-content-center.bg1.mg-img.mt-5.mg-img-final.t-img 
      .col-md-6
        p.p-ml Así como en cuestión de sustratos existen diversas maneras de desinfectar adecuadamente, también cabe resaltar que, las características que estos presentan, pueden manifestar beneficios para la absorción, tanto de nutrientes como de agua, que benefician el crecimiento de las raíces. 
      .col-md-6 
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema2/img24.png', alt='')
      .col-md-12.mt-5
        SlyderF(columnas="col-sm-4")
          .tarjeta.color-secundario.bg-tarjeta.h-slider2.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img25.png' alt='')                  
              p.mt-5.texto-centro Algunos, como las rocas de procedencia volcánica o arenas, pueden ser catalogados como sustratos inertes, que por su composición química se encargan del soporte de las plántulas sin casi intervenir con los procesos de nutrición o absorción de agua.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider2.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img26.png' alt='')                  
              p.mt-5.texto-centro Los sustratos activos, como son provenientes de otras composiciones orgánicas como cortezas de algunos árboles o de productos como celulosas, pueden presentar otras cualidades. Estos suelen ser más interactivos en temas de reserva de nutrientes o las interacciones entre ellos.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider2.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img27.png' alt='')                  
              p.mt-5.texto-centro Algunas de las propiedades que muestran estos tipos de sustratos tienden a referirse a la capacidad para absorber agua y también para reservar. Su composición estructural es evidenciada en cuanto a la compactación que presenta, y esto se encuentra relacionado al tamaño de las partículas que lo conforman.

          .tarjeta.tarjeta.color-secundario.bg-tarjeta.h-slider2.p-4
            .row.justify-content-center.mb-2
              .col-sm-2.col-lg-7.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/tema2/img28.png' alt='')                  
              p.mt-5.texto-centro Una utilización más en cuanto a sustratos, hace referencia a aquellos catalogados como artificiales que, por lo general, se utilizan para contribuir como mezclas, porque dada su composición son muy flexibles en cuanto a su estructura, pero se pueden degradar con facilidad y las proporciones y, en cuanto a su uso, pueden verse afectadas con estos cambios.

    h3.mt-5 Normatividad de seguridad industrial y seguridad en el trabajo

    p.mt-5.mb-5 Para finalizar, se describen aspectos destacados con la normatividad de seguridad industrial y seguridad en el trabajo.
    .slyderA_bg_02.px-5.py-3.mb-5.mt-5
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-6.mt-5             
              p.ps-4.mb-0 El resultado de las prácticas agrícolas en cuanto al medio ambiente, genera, para este, un impacto que no es benéfico; a través de sus implementaciones se producen emisiones a la atmósfera, aportes de residuos químicos al suelo y al agua, y alteraciones en los ecosistemas y la diversidad asociada.
          .col-6.mt-5
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img29.png')      
        .row.justify-content-center
          .col-md-6.mt-5              
              p.ps-4.mb-0 Debido a estas afectaciones, se ha requerido considerar la implementación de prácticas y técnicas que reduzcan esos impactos, lo mismo que un buen control y seguimiento, para que se protejan los recursos; es por esta razón que se disponen y aplican diferentes tratados y normas que escalan las regiones, la nación y hasta el nivel internacional, para que se promuevan dichas mejoras y se garanticen los recursos en un plazo más amplio.
          .col-6.mt-5
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img30.png')    
        .row.justify-content-center
          .col-md-6.mt-5             
              p.ps-4.mb-0 Algunos de los ejemplos, consisten en la aplicación de las buenas prácticas agrícolas. Estas hacen referencia, de manera directa, a las etapas que se realizan en la propagación de material vegetal, suelos, nutrición vegetal, y el material biológico micropropagado, materia prima en el desarrollo de proyectos en biotecnología vegetal.
          .col-6.mt-5
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema2/img31.png')

    p.mt-5.mb-5 Colombia hace parte de la Organización Internacional del Trabajo (OIT) e implementa políticas referentes al desempeño y crecimiento laboral, para mejorar las condiciones de trabajo, las cuales permiten alinear las normas laborales en pro de la generación de empleo. A continuación, se presentan las normas a cumplir, relacionadas con esta temática.
    .tarjeta.p-5
      .row.justify-content-center
        .col-lg-11
          ImagenInfograficaB.color-secundario
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema2/img32.png', alt='Texto que describa la imagen')

            div(x="40%" y="52%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  p.mb-3 La Resolución 2400 de mayo 22 de 1979, por el Ministerio de Trabajo y Seguridad Social, en donde especifica en el capítulo 2º, página 1, que: “se debe dar cumplimiento a normas legales en Medicina, Higiene y Seguridad Industrial, y dependiendo el contexto se elabora su propia reglamentación”.

            div(x="84%" y="66%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row
                  p.mb-3 La Resolución 0312 de 2019, define los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG- SST, en donde se proyecta conjuntamente toda la normatividad para un control de seguimiento que incluye el registro, la verificación y el cumplimiento que, básicamente, debe contener en cuanto a infraestructura, finanzas, tecnología, entre otras. 
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8    
        .cajon.color-acento-botones.p-4.mb-4
          p(data-aos="fade-down").mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        texto:
          'Las características del proceso de micropropagación de material vegetal involucran etapas de desarrollo propias para la obtención de un producto exitoso; de esta manera se articulan procesos y estructuras para que dichas etapas se den apropiadamente.',
        imagen: require('@/assets/curso/temas/tema2/img1.png'),
      },
      {
        texto:
          'El caso del endurecimiento de vitroplantas, implica el paso por un ambiente controlado en recipientes de vidrio o bandejas, en donde las variables cambian a pesar de la interferencia en su control; cuando se inicia la aclimatación, se dispone de estructuras adecuadas para que, en la germinación o regeneración de brotes, comience el reconocimiento de las variaciones climáticas y se dé inicio a las respuestas fisiológicas.',
        imagen: require('@/assets/curso/temas/tema2/img2.png'),
      },
      {
        texto:
          'Al ser un espacio para obtener una cantidad elevada de plántulas encaminadas a la producción o conservación, es importante tener claridad para disponer de las técnicas de manejo adecuadas, pues los procedimientos dispendiosos, al valorar cada uno de los ejemplares y los errores en los métodos de aplicación, podrán impactar negativamente si todo el material vegetal se encuentra en la misma sección de crecimiento. ',
        imagen: require('@/assets/curso/temas/tema2/img3.png'),
      },
      {
        texto:
          'Por lo anterior, los controles y seguimientos de protocolos son indispensables, tanto en el manejo del tema nutricional como hídrico; también si las variables de influencia agroclimática son las modificables o si es el caso de la identificación temprana de patógenos que pongan en riesgo la sanidad individual y general del material cultivado. ',
        imagen: require('@/assets/curso/temas/tema2/img4.png'),
      },
      {
        texto:
          'Atendiendo todos los posibles escenarios y las dinámicas cambiantes para una vitroplanta, al pasar de una fase a otra, es importante reconocer que una de sus alteraciones, como pérdida de humedad, es razón suficiente para asignar espacios especialmente adecuados.<br> <br> Es así como las vitroplantas pueden lograr que estructuras, como los estomas de las hojas de las plantas, que no habían sido muy desarrolladas durante la fase inicial, comiencen a actuar en el ejercicio del intercambio gaseoso. Es en las cámaras de humedad, o bajo la utilización de mallas con diferentes características y densidades, y bajo estos métodos, que se puede lograr presionar poco a poco la fisiología de la especie, para responder ante dichas variaciones de las condiciones agroclimáticas.',
        imagen: require('@/assets/curso/temas/tema2/img5.png'),
      },
    ],
    datosSlyder1: [
      {
        texto:
          'La técnica de solarización en campo también contribuye al control de hierbas acompañantes, las cuales no son permitidas pues compiten con la disponibilidad de nutrientes para la especie de interés.  ',
        imagen: require('@/assets/curso/temas/tema2/img22.png'),
      },
      {
        texto:
          'Hay variaciones en los métodos antes mencionados como la biofumigación, la cual utiliza la saturación de oxígeno por la alta oferta de materia orgánica. Esta técnica no solamente permite que, a través de la descomposición de la materia orgánica que la compone, se controle, de manera eficiente, la presencia de agentes como hongos, bacterias o nemátodos, sino que también aporta al suelo, elementos que permiten estructura y diversidad en nutrientes que pueden ser disminuidos, en cantidad, por las especies demandantes o por lavado de suelo por escorrentía.',
        imagen: require('@/assets/curso/temas/tema2/img23.png'),
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
