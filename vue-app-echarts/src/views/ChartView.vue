<template>
  <div>
    <div class="chart">chartView</div>
    <ChartBar />
  </div>
</template>

<script>
import ChartBar from '@/components/ChartBar.vue'

export default {
  // name: 'ChartView',
  components: {
    ChartBar
  }
}
</script>

<style scoped>
div {
  color: red;
}
</style>
