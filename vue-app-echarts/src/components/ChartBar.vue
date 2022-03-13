<template>
  <div class="">
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <div class='chart' ref='chartbar_ref'></div>
  </div>
</template>

<script>
export default {
  name: 'ChartBar',
  data () {
    return {
      chartInstance: null
    }
  },
  mouted () {
    this.initChart()
    this.getData()
  },
  method: {
    initChart () {
      this.chartInstance = this.$echarts.init(this.$refs.chartbar_ref)
    },
    async getData () {
      const ret = this.$http.get('chartbar')
      console.log(ret)
    },
    updateChart () {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
