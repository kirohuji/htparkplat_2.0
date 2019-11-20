<script>
import { connect } from '../connect'
import FuHamburger from '@/components/atoms/FuHamburger'
export default connect({
  mutationsToEvents: {
    toggleClick: 'TOGGLE_TREEMENU'
  }
})('FuCHamburger', FuHamburger)
</script>
