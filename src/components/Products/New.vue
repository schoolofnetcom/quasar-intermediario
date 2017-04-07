<template>
  <div>
    <h4>Novo produto</h4>



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
        <q-select
            type="radio"
            v-model="product.status"
            label="Status"
            required
            class="full-width"
            :options="[
              {
                label: 'Ativo',
                value: 1
              },
              {
                label: 'Desativado',
                value: 0
              }
            ]"
        ></q-select>
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
  export default {
    data () {
      return {
        product: {
          status: 1
        }
      }
    },
    methods: {
      save () {
        this.$store.dispatch('productsInsert', this.product)
          .then(() => {
            this.$router.push('/products')
          })
      }
    }
  }
</script>

<style>
</style>
