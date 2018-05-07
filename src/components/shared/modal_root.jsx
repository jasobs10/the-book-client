import React from 'react';
import { connect } from 'react-redux';
import ConfirmModal from './confirm_modal.jsx';
import SessionForm from '../auth/session_form.jsx';
import ResetPasswordForm from '../auth/reset_password.jsx';
import UpdatePasswordForm from '../auth/update_password.jsx';

export const CONFIRM = 'CONFIRM';
export const SESSION_FORM = 'SESSION_FORM';

const MODAL_COMPONENTS = {
  CONFIRM: ConfirmModal,
  SESSION_FORM: SessionForm,
  RESET_PASSWORD: ResetPasswordForm,
  UPDATE_PASSWORD: UpdatePasswordForm

};

const mapStateToProps = (state) => state.modal;

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const ModalComponent = MODAL_COMPONENTS[modalType];
  //put the react-modal-wrapper her mang

  return <ModalComponent {...modalProps} />
};

export default connect(mapStateToProps)(ModalRoot);
