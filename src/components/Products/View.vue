<template>
  <div>
    <h4>
      Detalhes do produto
      <q-fab
        classNames="dark"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-small-fab
            class="white"
            v-link="'/products'"
            icon="arrow_back"
        ></q-small-fab>
        <q-small-fab
            class="primary"
            @click.native="openModal('/products/' + product.id + '/edit')"
            icon="edit"
        ></q-small-fab>
        <q-small-fab
            class="negative"
            @click.native="openModal('/products/' + product.id + '/remove')"
            icon="delete"
        ></q-small-fab>
      </q-fab>
    </h4>

    <q-modal ref="basicModal" position="bottom" :content-css="{minWindth: '800px', minHeight: '100px', padding: '20px'}" @close="closeModal()">
      <router-view></router-view>
      <hr>
      <button class="small primary" @click="$refs.basicModal.close()">Fechar</button>
    </q-modal>

    <table class="q-table horizontal-delimiter striped-even loose">
      <tbody>
      <tr>
        <th>Título</th>
        <td>{{ product.title }}</td>
      </tr>
      <tr>
        <th>Descrição</th>
        <td>{{ product.description }}</td>
      </tr>
      <tr>
        <th>Preço</th>
        <td>{{ product.price | currency }}</td>
      </tr>
      <tr>
        <th>Custo</th>
        <td>{{ product.cost | currency }}</td>
      </tr>
      <tr>
        <th>Estoque</th>
        <td>{{ product.stock ? product.stock.quantity : 0 }}</td>
      </tr>
      </tbody>
    </table>
    <hr>

    <h5>Histórico do Estoque</h5>

    <table class="q-table horizontal-delimiter striped-even loose">
      <thead>
      <tr>
        <th>quantidade</th>
        <th>data</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="stock of history">
        <td>{{ stock.quantity }}</td>
        <td>{{ stock.created | moment }}</td>
      </tr>
      </tbody>
    </table>

    <hr>

    <button class="dark" @click="openModal('/products/'+product.id+'/stock-in')">Entrada de estoque</button>
    <button class="dark" @click="openModal('/products/'+product.id+'/stock-out')">Saída de estoque</button>

  </div>
</template>

<script>
export default {
  computed: {
    product () {
      return this.$store.state.products.one.product || {}
    },
    history () {
      let stockIn = this.product.stock_in || []
      let stockOut = this.product.stock_out || []

      stockIn.forEach((item, index) => {
        stockIn[index].quantity = '+' + stockIn[index].quantity
      })

      stockOut.forEach((item, index) => {
        stockOut[index].quantity = '-' + stockOut[index].quantity
      })

      let history = stockIn.concat(stockOut)

      history.sort((a, b) => {
        return new Date(a.created) - new Date(b.created)
      })

      return history
    }
  },
  methods: {
    openModal (url) {
      this.$router.push(url)
      this.$refs.basicModal.open()
    },
    closeModal () {
      this.$router.push('/products/' + this.product.id)
    }
  },
  mounted () {
    this.$store.dispatch('productsGet', this.$route.params.id)
  }
}
</script>

<style scoped>
  .q-table {
    width: 100%;
  }
  .q-table tbody th {
    text-align: left;
  }
</style>
