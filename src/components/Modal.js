import React, { useEffect, useState, memo, useRef, useCallback } from 'react';
import {Link, useParams} from 'react-router-dom';
import Loader from './Loader';

const apiUrl = 'http://localhost:3002';

function Modal({setTsv, tsv, showModal, setShowModal, showWrapper, setshowWrapper}) {
    
    const [copied, setCopied] = useState(false);
    const [data, setData] = useState({});
    const {shopData, errors} = data;
    const {uuid} = useParams();
    const modalRef = useRef();
    const url = `http://localhost:3000/shop/${uuid}`;

    useEffect(()=>{
        fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({tsv, uuid})
        })
        .then(res => res.json())
        .then(({data, tsv}) => {
            setData(data);
            setTsv(tsv);
            setShowModal(true);
        })
        .catch(e => console.log(e));
    }, [tsv, uuid, setTsv, setShowModal])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    }

    const closeModal = ({target}) => modalRef.current === target && setshowWrapper(false)
    
    const escape = useCallback((e) => {
        e.key === "Escape" && showWrapper && setshowWrapper(false)
    }, [showWrapper, setshowWrapper])

    useEffect(() => {
        document.addEventListener('keydown', escape)
        return () => {
            document.removeEventListener('keydown', escape)
        }
    }, [escape])
    
    return (
        <>
            {showWrapper &&
            (<div onClick={closeModal} ref={modalRef} className="modal-background">
                {showModal ? 
                    (<div className="modal">
                        <Link to="/" className="fas fa-times"></Link>
                        <span className="modal-labels">Results</span>
                        <div className="response results">
                            {JSON.stringify(shopData, null, 4)}
                        </div>

                        <span className="modal-labels">Errors</span>
                        <div className="response errors">
                            {errors.map(err => <p>{err}</p>)}
                        </div>

                        <div className="modal-bottom">
                            <a href={`${url}`} className="url">{`${url}`}</a>
                            <button 
                                onClick={copyToClipboard} className="bottom-btns">
                                    {copied ? 'Copied' : 'Copy link'}
                            </button>
                        </div>
                    </div>) :<Loader />}
            </div>)}
        </>
    )
};

export default memo(Modal);