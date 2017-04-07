<template>
  <q-layout>
    <div slot="header" class="toolbar dark">
      <q-toolbar-title :padding="0">
        <span class="logo">e</span> EstoqueSys
      </q-toolbar-title>
    </div>

    <q-drawer>
      <div class="list platform-delimiter">
        <div class="toolbar light">
          <div class="toolbar-content">
            <div class="toolbar-title padding-1">
              <div>Bem vindo Erik</div>
            </div>
          </div>
        </div>
        <div class="list-label">
          Navegação
        </div>
        <q-drawer-link icon="store" to="/products">Produtos</q-drawer-link>
      </div>
    </q-drawer>

    <div class="layout-view">
      <div class="layout-padding">
        <router-view></router-view>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="styl">
  .logo {
    display: inline-block;
    padding: 0 5px;
    background-color: #777;
    border: 2px solid #555;
    border-radius: 4px;
  }
</style>
