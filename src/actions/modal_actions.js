export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = ({ modalType, modalProps }) => {
  return {
    type: SHOW_MODAL,
    modalType,
    modalProps
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};
