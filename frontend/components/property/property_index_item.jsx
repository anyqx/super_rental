import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FavoriteCreateContainer from '../favorite/favorite_create_container';


class PropertyIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.findFavorite();
        this.favorite = 0;

    }

    componentDidMount() {
        // if (!this.props.favorites) return;
        this.findFavorite();
    }

    handleClick(e) {
        const propertyId = this.props.property.id;
        this.props.history.push(`/properties/${propertyId}`);
    }

    findFavorite(){
        let favoriteObject = false;
        if (!this.props.favorites) return 
        this.props.favorites.forEach (favorite => favorite.property_id === this.props.property.id ? favoriteObject = favorite : null)
        // this.setState({
        //     favorite: favoriteObject
        // })
        this.favorite = favoriteObject;
    }

    addComma(num){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        const { property } = this.props;

        return (
           <>
           <div className='property-index-display' key={property.id} >
                <Link to={`/properties/${property.id}`} onClick={()=> this.handleClick}>
                <FavoriteCreateContainer id='favorite' propertyId={property.id} key={property.id} favorite={this.favorite} />
                <img src={property.photoUrl} alt=""/>
                {/* <div className='address-container'>
                    <div id='address'>{property.address}, {property.city}, {property.state} &nbsp; {property.zipcode} </div>
                </div> */}

                <p id='price'>$ {this.addComma(property.price)}</p>

                <p>{property.address}, {property.city}, {property.state} &nbsp; {property.zipcode} </p>
                
                <p><span id='row'>{property.bedroom} Beds, {property.bathroom} Baths</span> <span className='2ndRow'>SQFT: </span>{this.addComma(property.sqft)}
                    <span id='row'>  Rent: $</span>{this.addComma(property.rent)}</p>
                
                
                <p className='thirdRow'>
                    <span id='num'>{property.cap_rate}%</span>
                    <span id='num'>{property.gross_yield}%</span>
                    <span id='num'>{property.annualized_return}%</span>
                </p>
                
                <p className='thirdRow'>
                    <span id='caption'>Cap Rate</span> 
                    <span id='caption'>Gross Yield</span>
                    <span id='caption'>Ann. Return</span> 
                </p>
                

              </Link>
          </div>
          </>
        )
    }
}

export default withRouter(PropertyIndexItem);