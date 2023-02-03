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
                p Bienvenido a este componente formativo donde podrá actualizar sus conocimientos sobre los fundamentos básicos para el endurecimiento y lo relacionado con la consolidación de los espacios de endurecimiento. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
          .col-sm-5.mb-3
            figure
              img(src="@/assets/curso/temas/introduccion.png", alt="alt")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                
                

    
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
