<template>
  <div>
    <h4>Gerenciamento de Estoque</h4>

    <div class="row">
      <div class="width-3of6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta nisl at ante euismod, eget pellentesque sapien elementum. Curabitur sit amet turpis venenatis, feugiat tellus sit amet, venenatis metus.
        </p>

        <h5>Lorem ipsum</h5>

        <p>
          Phasellus euismod velit et diam tempor posuere. Ut non tortor malesuada, sodales quam sit amet, consequat mi. Cras tincidunt vehicula vehicula. Cras tempus leo leo, nec volutpat magna lacinia eu. Integer rhoncus ipsum ac sapien pretium, a posuere nunc iaculis. Morbi laoreet odio in ornare condimentum. Suspendisse potenti. In egestas porta odio, eget semper augue vulputate nec.
        </p>
      </div>
      <div class="width-offset-1of6 width-2of6">
        <donut-chart
            id="donut"
            :data="donutData"
            colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
            resize="true"
        ></donut-chart>
      </div>
    </div>

    <bar-chart
        id="bar"
        :data="barData"
        :xkey="'year'"
        :ykeys="barYKeys"
        :labels="labels"
        :bar-colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
        :grid="true"
        :grid-text-weight="'bold'"
        :resize="true"
    ></bar-chart>

  </div>
</template>

<script>
  import Raphael from 'raphael/raphael'
  global.Raphael = Raphael

  import { DonutChart, BarChart } from 'vue-morris'

  export default {
    data () {
      return {
        donutData: [
          {label: 'Red', value: 300},
          {label: 'Blue', value: 50},
          {label: 'Yellow', value: 100}
        ],
        barData: [
          {year: 2012, and: 10, ios: 5, win: 2},
          {year: 2013, and: 20, ios: 15, win: 3},
          {year: 2014, and: 20, ios: 25, win: 2},
          {year: 2015, and: 40, ios: 20, win: 1}
        ],
        barYKeys: ['and', 'ios', 'win'],
        labels: ['android', 'ios', 'windows']
      }
    },
    components: {
      DonutChart, BarChart
    }
}
</script>

<style>
</style>
