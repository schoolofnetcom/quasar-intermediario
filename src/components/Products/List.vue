<template>
  <div>
    <h4>
      Produtos

      <q-fab
        classNames="dark"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-small-fab
            class="positive"
            v-link="'/products/new'"
            icon="add"
        ></q-small-fab>
      </q-fab>
    </h4>

    <q-data-table
        :data="products.products || []"
        :columns="columns"
        :config="config"
    >
      <template slot="col-stock" scope="cell">
        <span>{{cell.row.stock.quantity}}</span>
      </template>

      <template slot="col-created" scope="cell">
        <span>{{ cell.row.created | moment }}</span>
      </template>

      <template slot="col-price" scope="cell">
        <span>{{ cell.row.price | currency }}</span>
      </template>

      <template slot="selection" scope="selection">
        <button class="primary clear" @click="goTo(selection)">
          <i>remove_red_eye</i> visualizar registro
        </button>
      </template>
    </q-data-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        // title: 'Produtos',
        columnPicker: true,
        selection: 'single',
        rowHeight: '50px',
        messages: {
          noData: '<i>error_outline</i> Nenhum registro para exibir.',
          noDataAfterFiltering: '<i>error_outline</i> Nenhum resultado. Refine os termos da busca.'
        },
        labels: {
          columns: 'Colunas',
          search: 'Pesquisar produto...',
          allCols: 'Todas as colunas',
          clear: 'limpar',
          selected: {
            singular: 'item selecionado.'
          }
        }
      },
      columns: [
        {
          label: 'Título',
          field: 'title',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Descrição',
          field: 'description',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Preço',
          field: 'price',
          width: '100px',
          sort: true
        },
        {
          label: 'Quantidade',
          field: 'stock',
          width: '100px',
          sort: true
        },
        {
          label: 'Cadastrado em',
          field: 'created',
          width: '100px',
          sort: true
        }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.state.products.list
    }
  },
  methods: {
    goTo (item) {
      let id = item.rows[0].data.id
      return this.$router.push('/products/' + id)
    }
  },
  mounted () {
    this.$store.dispatch('productsList')
  }
}
</script>

<style>
</style>
