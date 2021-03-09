import { connect } from 'react-redux'

import { actionCreator } from '../actionPath'
import PropertyShow from './property_show'
import { fetchProperty } from '../../util/property_api_util'

const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = dispatch => ({
    fetchProperty: id => dispatch(fetchProperty(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
