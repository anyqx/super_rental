import PropertyIndex from './property_index';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions/property_action';
import { propertyArray } from '../../reducers/selectors'

const mapStateToProps = (state) => {
    return {
        properties: propertyArray(state.entities)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(PropertyIndex)
