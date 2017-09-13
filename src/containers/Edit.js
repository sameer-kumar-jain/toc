import { connect } from 'react-redux'
import EditComponent from '../components/EditComponent'
import { updateItemData } from '../reducers/entity'

const mapDispatchToProps = {
	updateItemData: ( entity, data )=>updateItemData( entity, data )
}

const mapStateToProps = (state,ownProps) => ({
	product : state.product
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComponent)
