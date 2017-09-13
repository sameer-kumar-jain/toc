import { connect } from 'react-redux'
import CreateComponent from '../components/CreateComponent'
import { saveItemData } from '../reducers/entity'

const mapDispatchToProps = {
	saveItemData: ( entity, data )=>saveItemData( entity, data )
}

const mapStateToProps = (state,ownProps) => ({
	product : state.product
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateComponent)
