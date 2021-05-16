import React from 'react';

export default function Form({tsv, setTsv, handleSubmit, loading}) {
    return (
        <form>
            <label htmlFor="tsv">TSV content</label>
            <textarea onChange={({target}) => setTsv(target.value)} value={tsv} />
            <span id={`${loading ? 'loading' : ''}`} className="form-bottom"><button className="send-tsv" type="button" onClick={handleSubmit}>Submit</button></span>
        </form>
    )
}
