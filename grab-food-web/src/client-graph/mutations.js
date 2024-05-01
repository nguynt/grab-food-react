import {gql} from '@apollo/client';

const createNewRestaurant = gql`
    mutation CreateRestaurant($restaurantInput: RestaurantInput) {
        createRestaurant(restaurantInput: $restaurantInput) {
        name
  }
}
`
const deleteRestaurant = gql`
    mutation deleteRestaurant($id: ID!){
        deleteRestaurant(ID: $id)
    }
`
const addNewDish = gql`
    mutation EditMenu($idRes: ID!, $idMenu: ID!, $dishInput: DishInput) {
        editMenu(ID_Res: $idRes, ID_Menu: $idMenu, dishInput: $dishInput)
    }
`
const addnewMenu = gql`
    mutation AddnewMenu($id: ID!, $menuInput: MenuInput) {
    addnewMenu(ID: $id, menuInput: $menuInput)
    }
`
export {createNewRestaurant,deleteRestaurant,addNewDish,addnewMenu}