import {gql} from '@apollo/client';

const getRestaurants = gql`
    query GetRestaurants {
        getRestaurant {
        owner
        name
        description
        _id
        rate
        img
        timeDelivery
        location {
            address
            coordinates
        }
  }
}
`
const getRestaurantID = gql`
    query getRestaurantID($id: ID!) {
        getRestaurantID(ID: $id) {
            owner
            name
            description
            _id
            rate
            img
            timeDelivery
            location {
                address
                coordinates
            }
            menu {
                _id
                title
                dish {
                    description
                    img
                    name
                    price
                }
            }
        }
    }
`
export {getRestaurants,getRestaurantID}