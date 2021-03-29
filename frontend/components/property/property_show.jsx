import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class PropertyShow extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { };
        // this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const propertyId = this.props.propertyId;
        debugger
        this.props.fetchProperties(propertyId);
    }

    // handleClick() {
    //     e.preventDefault();
    //     const { currentUser, addCartItem, propertyId, userId } = this.props;
    //     currentUser ? addCartItem({propertyId: propertyId, user_id: userId}) :  '/login'
    // }
    render() {
        const {property} = this.props;
        debugger
        if (!property) return null;
        return (
            <>
            <h2>property</h2>
            {property.zipcode}
            {property.price}
            </>
        )
    }
}
 
export default PropertyShow;