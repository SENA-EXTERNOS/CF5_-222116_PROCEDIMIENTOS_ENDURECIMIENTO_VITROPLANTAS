<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row
      .col-md-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Propagación masiva de material vegetal.
          p.mt-3 Síntesis: Procedimientos para el endurecimiento de vitroplantas.
      .col-md-1.d-flex.flex-row-reverse
            figure
              img(src="@/assets/curso/portada/logoSena.png", alt="alt")          
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/portada/sintesis.png", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis   

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
