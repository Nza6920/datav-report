<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <total-sale/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-order/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-user/>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-user/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSale from '../total-sale'
import TotalOrder from '../total-order'
import TotalUser from '../total-user'
import TodayUser from '../today-user'

export default {
  name: 'topView',
  components: {
    TotalSale,
    TotalOrder,
    TotalUser,
    TodayUser
  }
}
</script>

<style lang="scss" scoped>
  .top-view {
    padding-top: 20px;
  }
</style>
