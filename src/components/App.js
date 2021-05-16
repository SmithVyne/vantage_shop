import '../styles/App.css';
import {useState} from 'react';

const App = () => {
  const [tsv, setTsv] = useState("");

  const handleSubmit = () => {
    console.log(tsv)
  }
  
  return (
    <main>
      <form>
        <label htmlFor="tsv">TSV Content</label>
        <textarea name="tsv" onChange={({target}) => setTsv(target.value)} value={tsv} />
        <span className="form-bottom"><button className="send-tsv" type="button" onClick={handleSubmit}>Submit</button></span>
      </form>
    </main>
  );
}

export default App;
