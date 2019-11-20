<script>
import { connect } from '../connect'
import TreeMenu from '@/components/organism/Menu/TreeMenu.vue'
export default connect({
  stateToProps: {
    isCollapse: state => state.components.treeMenu.isCollapse
  }
})('FuCTreeMenu', TreeMenu)
</script>
