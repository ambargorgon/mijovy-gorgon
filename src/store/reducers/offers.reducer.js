import { ADD_OFFER, LOAD_OFFER } from "../actions/offers.actions";

import Offer from '../../models/Offer'

const initialState = {
  offers: [],
};

const OffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OFFER:
      const newOffer = new Offer(Date.now(), action.payload.title, action.payload.image, action.payload.price, action.payload.description, action.payload.activity, action.payload.target, action.payload.location);
      return { ...state, offers: state.offers.concat(newOffer) };

    case LOAD_OFFER:
      return {
        ...state,
        offers: action.offers.map(
        item => new Offer(
          item.id,
          item.title,
          item.image,
          item.price,
          item.description,
          item.activity,
          item.target,
          item.location,
        ))
      }  
    
    default:
      return state;
  }
};

export default OffersReducer