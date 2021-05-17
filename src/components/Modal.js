import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Loader from './Loader';

const apiUrl = 'http://localhost:3002';

function Modal({tsv}) {
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);
    const {shopData, errors} = data;
    const {uuid} = useParams();

    useEffect(()=>{
        fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tsv, uuid})
        })
        .then(res => res.json())
        .then(dt => {
            setData(dt);
            console.log(dt);
            setShowModal(true);
        })
        .catch(e => console.log(e));
    }, [tsv, uuid])
    
    return (
        <>
            <div className="modal-background">
                {showModal ? 
                    (<div className="modal">
                        <Link to="/" class="fas fa-times"></Link>
                        <span className="modal-labels">Results</span>
                        <div className="response results">
                            {JSON.stringify(shopData)}
                        </div>

                        <span className="modal-labels">Errors</span>
                        <div className="response errors">
                            {errors}
                        </div>

                        <div className="modal-bottom">
                            <a href="https://www.youtube.com/watch?v=3P6bmhire-Y" className="url">https://www.youtube.com/watch?v=3P6bmhire-Y</a>
                            <button className="bottom-btns">Copy link</button>
                        </div>
                    </div>) :<Loader />}
            </div>
        </>
    )
};

export default Modal;