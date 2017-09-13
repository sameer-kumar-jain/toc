import { connect } from 'react-redux'
import CalculateComponent from '../components/CalculateComponent'
const mapDispatchToProps = {}
const mapStateToProps = (state,ownProps) => ({product : state.product})
export default connect(mapStateToProps, mapDispatchToProps)(CalculateComponent)
