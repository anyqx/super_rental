import { connect } from 'react-redux'
import PropertyShow from './property_show'
import { fetchProperty } from '../../util/property_api_util'

const mapStateToProps = (state) => ({
    userId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    propertyId,
    property
})

const mapDispatchToProps = dispatch => ({
    fetchProperty: id => dispatch(fetchProperty(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
