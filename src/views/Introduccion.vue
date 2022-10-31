<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center
      .tarjeta
        .row.justify-content-left
          .col-sm-7.mb-3
            .bloque-texto-b.color-tarjeta-bloque-texto.p-4
              .bloque-texto-b__texto
                p Bienvenido a su formación en el componente Procedimientos para el endurecimiento de vitroplantas, en el cual se aplican conceptos asociados a las condiciones de calidad del material vegetal. En un primer apartado se presentan los fundamentos básicos para el endurecimiento y en el segundo apartado lo relacionado con la consolidación de los espacios de endurecimientos. Le invitamos a iniciar este recorrido observando el video de introducción del componente formativo.
          .col-sm-5.mb-3
            figure
              img(src="@/assets/curso/temas/introduccion.png", alt="alt")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video        
                

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
