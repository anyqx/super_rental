import { connect } from 'react-redux'
import PropertyShow from './property_show'
import { fetchProperty } from '../../actions/property_action';
import { selectProperty } from '../../reducers/selectors';
import PropertyIndex from './property_index';

const mapStateToProps = (state) => {
    return {
        debugger
        // properties[PropertyId] 
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProperty: id => dispatch(fetchProperty(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyShow)
