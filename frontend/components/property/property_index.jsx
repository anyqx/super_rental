import React from 'react';
import PropertyIndexItem from './property_index_item';


class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUserFavorites: null
        }
        this.parseFavorites = this.parseFavorites.bind(this);
    }

    componentDidMount() {
        this.props.fetchProperties();
        this.props.fetchFavorites()
            .then( () => this.parseFavorites())
    }

    parseFavorites(){
        const allFavorites = [];
        this.props.favorites.forEach( favorite => favorite.user_id === this.props.userId ? allFavorites.push(favorite) : null);
        this.setState({
            currentUserFavorites: [...allFavorites]
        })

    }

    render() {
        const { properties} = this.props;
        if (!properties) return null;
        console.log(this.state.currentUserFavorites)
        return ( 
            <>
            <div>
                <h1>Browse All Properties</h1>
                <ul className='properties-index-container'>
                    {properties.map(property => {
                        return (
                            <PropertyIndexItem property={property} key={property.id} favorites={this.state.currentUserFavorites} />
                        )
                    })}
                </ul>
            </div> 
            </>
        )
    }
}
 
export default PropertyIndex;