import React from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../../util/session';
import property_show_container from './property_show_container';

class PropertyShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(){
    //     const propertyId = this.props.propertyId;
    //     this.props.fetchPorperty(propertyId);
    // }

    // handleClick() {
    //     e.preventDefault();
    //     const { currentUser, addCartItem, propertyId, userId } = this.props;
    //     currentUser ? addCartItem({propertyId: propertyId, user_id: userId}) :  '/login'
    // }
    render() { 
        return (
            <>
                <div className='property-show-container'>
                    <p>{property.title}</p>
                    <p>{property.address}</p>
                    <p>{property.city},&nbsp;{property,state}&nbsp;{property.zipcode}</p>
                </div>
                <div>
                    <img src={property.photoUrl} alt="" />
                </div>
            </>
        )
    }
}
 
export default PropertyShow;