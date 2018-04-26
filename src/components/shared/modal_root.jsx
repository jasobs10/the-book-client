import React from 'react';
import { connect } from 'react-redux';
import ConfirmModal from './confirm_modal.jsx';
import SessionForm from '../auth/session_form.jsx';

export const CONFIRM = 'CONFIRM';
export const SESSION_FORM = 'SESSION_FORM';

const MODAL_COMPONENTS = {
  CONFIRM: ConfirmModal,
  SESSION_FORM: SessionForm
};

const mapStateToProps = (state) => state.modal;

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[modalType];

  return <ModalComponent {...modalProps} />
};

export default connect(mapStateToProps)(ModalRoot);
