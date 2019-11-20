<template>
  <div>
    <div class="flex_layout">
      <div class="flex_layout left">
        <fu-c-hamburger style="cursor:pointer;margin-right:10px" />
        <fu-c-breadcrumb />
        <slot>
          <FuReturnTag @click="rollback" />
        </slot>
      </div>
      <keep-alive>
        <div class="flex_layout right">
          <slot name="right">
            <!-- <fu-header-search class="right-menu-item" /> -->
            <fu-screenfull class="right-menu-item" />
            <fu-user-dropdown class="avatar-container right-menu-item hover-effect" />
          </slot>
        </div>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import FuHeaderSearch from '@/components/molecules/FuHeaderSearch'
import FuUserDropdown from '@/components/molecules/FuUserDropdown'
import FuScreenfull from '@/components/molecules/FuScreenfull'
import FuBreadcrumb from '@/components/molecules/FuBreadcrumb'
import FuReturnTag from '@/components/molecules/FuReturnTag'
import router from '@/mixin/router'
import { connect } from 'vuex-connect'
import FuCHamburger from '@/containers/FuCHamburger'
const FuCBreadcrumb = connect({
  stateToProps: {
    navigation: state => state.navigation
  }
})('FuCBreadcrumb', FuBreadcrumb)

export default {
  name: 'FuBreadcrumbBanner',
  components: {
    FuUserDropdown,
    FuScreenfull,
    FuCBreadcrumb,
    FuCHamburger,
    FuReturnTag,
    FuHeaderSearch
  },
  mixins: [router]
}
</script>
<style lang='less' scoped>
.flex_layout {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left,
  .right {
    justify-content: start;

    .right-menu-item {
      display: flex;
      align-items: center;
      padding: 0 8px;
      height: 100%;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        // transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }

      .avatar-container {
        margin-right: 30px;
      }
    }
  }
}
</style>
