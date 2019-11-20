<template>
  <content-layout>
    <template slot="header">
      <content-header-layout>
        <template slot="content">
          <!-- 看板 -->
          <div style="display: flex;align-items: flex-end;">
            <div class="profile-avatar">
              <el-avatar :size="70"
                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <div class="profile-content">
              <span class="profile-content-title">早安，管理员！</span>
              <!-- <span>交互专家 |蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</span> -->
            </div>
          </div>
        </template>
        <template slot="operation">
          <fu-statistic-group :items="statistics" />
        </template>
      </content-header-layout>
    </template>
    <div>
      <el-row :gutter="24">
        <el-col :span="16">
          <messages-card-panel />
          <div class="gutter"></div>
          <!-- <card-panel>
            <template slot="header">
            </template>
          </card-panel> -->
        </el-col>
        <el-col :span="8">
          <user-card :user="user" />
        </el-col>
      </el-row>
    </div>
  </content-layout>
</template>
<script>
import FuStatisticGroup from '@/components/molecules/FuStatisticGroup'
import UserCard from './components/UserCard'
import CardPanel from '@/views/home/components/CardPanel'
import FuSkeleton from '@/components/atoms/FuSkeleton'
import lazyLoadComponent from '@/utils/lazy-load-component.js'
export default {
  name: 'WorkSpace',
  components: {
    FuStatisticGroup,
    CardPanel,
    UserCard,
    MessagesCardPanel: lazyLoadComponent({
      componentFactory: () => import('@/views/home/components/MessagesCardPanel'),
      loading: FuSkeleton
    })
  },
  data () {
    return {
      user: {
        name: '大陆园区管理员',
        role: '管理员',
        email: 'admin@test.com'
      },
      statistics: [
        {
          label: '企业数量',
          value: 8
        },
        {
          label: '工业总产值',
          value: '768亿元'
        },
        {
          label: '年综合能耗',
          value: '462.45万吨标煤'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.profile-content {
  display: flex;
  flex-direction: column;
}

.profile-content-title {
  margin-bottom: 12px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
}

.gutter {
  margin-bottom: 24px;
}
</style>
