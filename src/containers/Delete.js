import { connect } from 'react-redux'
import DeleteComponent from '../components/DeleteComponent'
import { deleteItemData } from '../reducers/entity'

const mapDispatchToProps = {
	deleteItemData: ( entity, id )=>deleteItemData( entity, id )
}

const mapStateToProps = (state,ownProps) => ({
	item : {...state.item}
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteComponent)
