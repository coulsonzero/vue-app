<template>
  <div>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
    </p>
    <div class='chart' ref='chartbar_ref' id='bar'></div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.initChart()
  },
  methods: {
    // 初始化echarts对象
    initChart () {
      var myChart = this.$echarts.init(this.$refs.chartbar_ref)
      var option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      }
      myChart.setOption(option)
    }
    /*
    // 获取服务器数据
    async getData () {
      // http://localhost:8080/api/bar
      const ret = await this.$http.get('http://localhost:8080/api/bar')
      console.log(ret)
    },
    updateChart () {}
    */
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='less'>
.chart {
    position: relative;
    width: 600px;
    height: 400px;
    background:rgba(144, 173, 236, 0.86);
}
</style>
