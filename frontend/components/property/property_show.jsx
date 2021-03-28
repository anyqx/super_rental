import React from 'react';
import { withRouter } from 'react-router-dom';

class PropertyShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { };
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        debugger
        const propertyId = this.props.productId;
        this.props.fetchProperty(propertyId);
    }

    // handleClick() {
    //     e.preventDefault();
    //     const { currentUser, addCartItem, propertyId, userId } = this.props;
    //     currentUser ? addCartItem({propertyId: propertyId, user_id: userId}) :  '/login'
    // }
    render() {
        debugger
        const {property} = this.props
        return (
            <>
            <h2>property</h2>
            {property.title}
            {property.price}
            </>
        )
    }
}
 
export default PropertyShow;