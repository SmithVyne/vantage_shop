import React from 'react';
import { Link } from 'react-router-dom';


export default function Form({tsv, setTsv, uuid, setShowModal}) {

    return (
        <form>
            <label htmlFor="tsv">TSV content</label>
            <textarea onChange={({target}) => setTsv(target.value)} value={tsv} />
            <span className="form-bottom">
                <Link to={`/shop/${uuid}`} className="bottom-btns" type="button" onClick={() => setShowModal(false)} >Submit</Link>
            </span>
        </form>
    )
}
