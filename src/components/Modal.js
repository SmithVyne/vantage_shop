import React, { useEffect, useState, memo } from 'react';
import {Link, useParams} from 'react-router-dom';
import Loader from './Loader';

const apiUrl = 'http://localhost:3002';

function Modal({setTsv, tsv}) {
    const [showModal, setShowModal] = useState(false);
    const [copied, setCopied] = useState(false);
    const [data, setData] = useState({});
    let {shopData, errors} = data;
    shopData = JSON.stringify(shopData, null, 4);
    const {uuid} = useParams();
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
    }, [tsv, uuid, setTsv])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    }
    
    return (
        <div className="modal-background">
            {showModal ? 
                (<div className="modal">
                    <Link to="/" className="fas fa-times"></Link>
                    <span className="modal-labels">Results</span>
                    <div className="response results">
                        {shopData}
                    </div>

                    <span className="modal-labels">Errors</span>
                    <div className="response errors">
                        {errors}
                    </div>

                    <div className="modal-bottom">
                        <a href={`${url}`} className="url">{`${url}`}</a>
                        <button onClick={copyToClipboard} className="bottom-btns">{copied ? 'Copied' : 'Copy link'}</button>
                    </div>
                </div>) :<Loader />}
        </div>
    )
};

export default memo(Modal);