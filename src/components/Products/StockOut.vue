<template>
  <div>
    <h5>Saída de estoque</h5>

    <form @submit.prevent="save()">
      <div class="floating-label">
        <input v-model="stock.quantity" required class="full-width" type="number">
        <label>Quantidade</label>
      </div>

      <button type="submit" class="positive">Salvar</button>
    </form>
  </div>
</template>

<script>
  import { Toast } from 'quasar'

  export default {
    data () {
      return {
        stock: {}
      }
    },
    methods: {
      save () {
        let data = {
          product_id: this.$route.params.id,
          quantity: this.stock.quantity
        }
        this.$store.dispatch('stockOutInsert', data)
          .then(() => {
            this.$store.dispatch('productsGet', this.$route.params.id)

            Toast.create.positive({
              html: 'Estoque removido com sucesso',
              icon: 'done',
              onDismiss: () => {
                this.$parent.close()
              }
            })
          })
          .catch(() => {
            Toast.create.negative({
              html: 'Novo estoque não pode ser salvo',
              icon: 'cancel'
            })
          })
      }
    }
  }
</script>

<style>
</style>
