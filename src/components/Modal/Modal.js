import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const modalRef = useRef(props);

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setIsShowModal(false);
      }
    };
    window.addEventListener('click', clickOutsideContent);
    return () => {
      window.removeEventListener('click', clickOutsideContent);
    };
  }, [props]);

  return (
    <div ref={modalRef} className={`${props.isShowModal ? '' : ''}`}>
      <div>
        {!props.hideCloseButton && (
          <span onClick={() => props.setIsShowModal(false)}>&times;</span>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

export const ModalBody = ({ children }) => {
  return <div>{children}</div>;
};

export const ModalHeader = ({ children }) => {
  return <div>{children}</div>;
};

export const ModalFooter = ({ children }) => {
  return <div>{children}</div>;
};

Modal.propTypes = {
  setIsShowModal: PropTypes.func.isRequired,
  isShowModal: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  hideCloseButton: PropTypes.bool,
};
