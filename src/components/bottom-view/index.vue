<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">
                  搜索用户数
                </div>
                <div class="chart-data">
                  92,123
                </div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
              <div class="chart">
                <div class="chart-title">
                  搜索量
                </div>
                <div class="chart-data">
                  123,123
                </div>
                <v-chart :options="searchUserOptions"></v-chart>
              </div>
            </div>
            <div class="table-wrapper">
              <el-table :data="tableData">
                <el-table-column prop="rank"
                                 label="排名"
                                 width="180"></el-table-column>
                <el-table-column prop="keyword"
                                 label="关键词"
                                 width="180"></el-table-column>
                <el-table-column prop="count"
                                 label="总搜索量"></el-table-column>
                <el-table-column prop="users"
                                 label="搜索用户数"></el-table-column>
              </el-table>
              <el-pagination layout="prev,pager,next"
                             :total="100"
                             :page-size="4"
                             background
                             @current-change="onPageChange"></el-pagination>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行榜</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions"></v-chart>
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomView',
  data () {
    return {
      searchUserOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          show: false
        },
        series: [{
          type: 'line',
          data: [100, 120, 130, 200, 250, 356, 700, 899, 129],
          areaStyle: {
            color: 'rgba(95, 187, 255, .5)'
          },
          lineStyle: {
            color: 'rgb(95, 187, 255)'
          },
          itemStyle: {
            opacity: 0
          },
          smooth: true
        }],
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }
      },
      searchNumOptions: {},
      categoryOptions: {},
      tableData: [{
        id: 1,
        rank: 1,
        keyword: '成都',
        count: 100,
        users: 30,
        range: '90%'
      }, {
        id: 2,
        rank: 2,
        keyword: '北京',
        count: 100,
        users: 20,
        range: '50%'
      }, {
        id: 3,
        rank: 3,
        keyword: '上海',
        count: 100,
        users: 10,
        range: '30%'
      }, {
        id: 4,
        rank: 4,
        keyword: '天津',
        count: 100,
        users: 50,
        range: '20%'
      }],
      radioSelect: '深圳'
    }
  },
  mounted () {
    this.renderPieChart()
  },
  methods: {
    onPageChange (page) {
      console.log(page)
    },
    renderPieChart () {
      const mockData = [
        {
          legendName: '粉面粥店',
          value: 67,
          percent: '15.40%',
          itemStyle: {
            color: '#e7e702'
          },
          name: '粉面粥店 | 15.40%'
        },
        {
          legendName: '简餐便当',
          value: 97,
          percent: '22.32%',
          itemStyle: {
            color: '#8d7fec'
          },
          name: '简餐便当 | 22.32%'
        },
        {
          legendName: '汉堡披萨',
          value: 92,
          percent: '21.14%',
          itemStyle: {
            color: '#5085f2'
          },
          name: '汉堡披萨 | 21.14%'
        }
      ]
      this.categoryOptions = {
        title: [{
          text: '品类分布',
          textStyle: {
            fontSize: 14,
            color: '#666'
          },
          left: 20,
          top: 20
        }, {
          text: '累计订单量',
          subtext: '320',
          x: '34.5%',
          y: '42.5%',
          textAlign: 'center',
          textStyle: {
            fontSize: 14,
            color: '#999'
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333'
          }
        }],
        series: [{
          type: 'pie',
          data: mockData,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                return params.data.legendName
              }
            }
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'], // [内半径, 外半径(当前画布最短边 * xx%)]
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true
            }
          },
          clockWise: true, // 顺时针
          itemStyle: {
            borderWidth: 4,
            borderColor: '#FFF'
          }
        }],
        legend: {
          type: 'scroll',
          orient: 'vertical',
          height: 250,
          left: '70%',
          top: 'middle',
          textStyle: {
            color: '#8c8c8c'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            const str = params.marker + params.data.legendName + '<br/>' + '数量: ' + params.data.value
            return str
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;
    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;
      &:first-child {
        padding: 0 10px 0 0;
      }
      &:last-child {
        padding: 0 0 0 10px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;
          .chart {
            flex: 1;
            padding: 0 10px;
            .chart-title {
              color: #999;
              font-size: 14px;
            }
            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts {
              height: 50px;

            }
          }
        }
        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 20px 0 0 20px;
          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 15px;
          }
        }
      }
    }
  }
</style>
