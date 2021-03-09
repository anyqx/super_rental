import PropertyIndex from './property_index';
import { connect } from 'react-redux';
import { fetchProperties } from '../../actions/property_action';
import { asArray } from '../../reducers/selectors'

const mapStateToProps = (state) => {
    return {
        properties: asArray(state.entities)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProperties: () => dispatch(fetchProperties())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(PropertyIndex)
