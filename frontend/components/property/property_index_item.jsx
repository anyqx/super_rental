import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class PropertyIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
        // this.handleClick = this.handleClick.bind(this);
    }


    // handleClick(e) {
    //     const propertyId = this.props.property.id;
    //     this.props.history.push(`/properties/${propertyId}`);
    // }
    render() {
        const { property } = this.props;
        return (
            <>
            {/* <div>
                <li key={property.id} >
                    {property.title}
                    {property.address}
                    handle submit
                    <img src={product.photoUrl} alt='' />
                </li>
            </div> */}
            <div>
                <h1>this is index container</h1>
            </div>
            </>
        )
    }
}

export default withRouter(PropertyIndexItem);