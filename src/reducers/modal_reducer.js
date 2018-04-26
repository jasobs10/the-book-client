import { HIDE_MODAL, SHOW_MODAL } from '../actions/modal_actions.js';

const initialModalState = Object.freeze({
  modalType: null,
  modalProps: {}
});

const modalReducer = (oldState = initialModalState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case HIDE_MODAL:
      return initialModalState;
    default:
      return oldState;
  }
};

export default modalReducer;
