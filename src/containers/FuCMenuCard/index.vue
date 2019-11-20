<script>
import { connect } from '../connect'
import FuMenuCard from '@/components/molecules/FuMenuCard'
export default connect({
  stateToProps: {
    parent: state => state.menuCardItems
  }
})('FuCMenuCard', FuMenuCard)
</script>
