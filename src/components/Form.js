import React from 'react';
import { Link } from 'react-router-dom';


export default function Form({tsv, setTsv}) {
    return (
        <form>
            <label htmlFor="tsv">TSV content</label>
            <textarea onChange={({target}) => setTsv(target.value)} value={tsv} />
            <span className="form-bottom"><Link to="/shop/1" className="bottom-btns" type="button">Submit</Link></span>
        </form>
    )
}
