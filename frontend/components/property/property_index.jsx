import React from 'react';
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchProperties();
    }

    render() {
        return (
            <>
            <div>
                <h1>Browse All Properties</h1>
                <ul>
                    
                </ul>
            </div>
            </>
        )
    }
}
 
export default PropertyIndex;