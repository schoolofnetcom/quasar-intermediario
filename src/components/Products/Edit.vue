<template>
  <div>
    <h5>Editar produto</h5>

    <form @submit.prevent="save()">

      <div class="floating-label">
        <input v-model="product.title" required class="full-width">
        <label>Titulo</label>
      </div>

      <div class="floating-label">
        <input v-model="product.price" required class="full-width">
        <label>Preço</label>
      </div>

      <div class="floating-label">
        <input v-model="product.cost" required class="full-width">
        <label>Custo</label>
      </div>

      <div class="floating-label">
        <textarea v-model="product.description" required class="full-width"></textarea>
        <label>Descrição</label>
      </div>

      <div class="floating-label">
        <input v-model="product.alert_quantity" required class="full-width">
        <label>Alerta de quantidade baixa</label>
      </div>

      <button type="submit" class="positive">Salvar</button>

    </form>
  </div>
</template>

<script>
  import { Toast } from 'quasar'

  export default {
    computed: {
      product () {
        return this.$store.state.products.one.product || {}
      }
    },
    methods: {
      save () {
        let data = {
          title: this.product.title,
          price: this.product.price,
          cost: this.product.cost,
          description: this.product.description,
          alert_quantity: this.product.alert_quantity
        }
        this.$store.dispatch('productsUpdate', {id: this.$route.params.id, data: data})
          .then(() => {
            this.$store.dispatch('productsGet', this.$route.params.id)

            Toast.create.positive({
              html: 'Atualizado com sucesso',
              icon: 'done',
              onDismiss: () => {
                this.$parent.close()
              }
            })
          })
          .catch(() => {
            Toast.create.negative({
              html: 'Não pode ser atualizado',
              icon: 'cancel'
            })
          })
      }
    },
    data () {
      return {}
    },
    mounted () {
      this.$parent.open()
    }
  }
</script>
