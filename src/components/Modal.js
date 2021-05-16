import React from 'react';

export default function Modal({showModal, data, setShowModal}) {
    return (
        <>
            {showModal && 
            <div className="modal-background">
                <div className="modal"></div>
            </div>}
        </>
    )
};