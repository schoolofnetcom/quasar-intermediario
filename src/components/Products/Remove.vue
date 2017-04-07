<template>
  <div>
    <h5>Remover produto</h5>
    <button class="positive circular" @click="remove()">
      <i>done</i>
    </button>
    <button class="negative circular" @click="close()">
      <i>close</i>
    </button>
  </div>
</template>

<script>
  import { Toast } from 'quasar'

  export default {
    methods: {
      close () {
        this.$parent.close()
      },
      remove () {
        this.$store.dispatch('productsDelete', this.$route.params.id)
          .then(() => {
            this.$store.dispatch('productsGet', this.$route.params.id)

            Toast.create.positive({
              html: 'Removido com sucesso',
              icon: 'done',
              onDismiss: () => {
                this.$router.push('/products')
              }
            })
          })
          .catch(() => {
            Toast.create.negative({
              html: 'Não pode ser removido',
              icon: 'cancel'
            })
          })
      }
    }
  }
</script>

<style>
</style>
