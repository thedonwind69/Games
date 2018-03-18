import {connect} from 'react-redux';


import CityShow from './city_show';

import {fetchCity} from '../actions/city_actions';

import {fetchCategories} from '../actions/category_actions';

const mapStateToProps = (state) => ({

    currentUser: state.session.currentUser,
    currentCity: state.entities.currentCity,
    categories: state.entities.categories
});


const mapDispatchToProps = (dispatch) => ({

    fetchCity: (city_id) => dispatch( fetchCity(city_id) ),
    fetchCategories: () => dispatch(fetchCategories())

});



const CityShowContainer = connect(mapStateToProps, mapDispatchToProps)(CityShow);


export default CityShowContainer;