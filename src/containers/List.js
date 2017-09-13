import { connect } from 'react-redux'
import ListComponent from '../components/ListComponent'
import { loadItemList } from '../reducers/entity'

const mapDispatchToProps = {
	loadItemList: ( entity )=>loadItemList( entity )
}

const mapStateToProps = (state,ownProps) => ({
	product : state.product
})


export default connect(mapStateToProps, mapDispatchToProps)(ListComponent)
