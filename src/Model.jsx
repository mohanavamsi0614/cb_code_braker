// Modal.js
import React from 'react';
import Loader from './Loader';

function Modal({ isLoading, children }) {
    return (
        <div className="modal-overlay ">
            <div className="modal-content flex justify-center">
                {isLoading ? (
                    <div className="loading-spinner">
                        <Loader/>
                        loading
                    </div> 
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export default Modal;
