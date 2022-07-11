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
    <div
      ref={modalRef}
      className='fixed z-20 w-full h-full top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)]'
    >
      <div
        className={`w-[500px] bg-white text-center relative rounded-lg shadow-sm overflow-hidden`}
      >
        {!props.hideCloseButton && (
          <span
            onClick={() => props.setIsShowModal(false)}
            className='absolute top-0 right-0 cursor-pointer text-textSecondaryColor text-2xl opacity-50 p-4 hover:text-opacity-75'
          >
            <i className='fa-solid fa-xmark'></i>
          </span>
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
