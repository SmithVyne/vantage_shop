import '../styles/App.css';
import {v4 as uuidv4} from 'uuid';
import {useMemo, useState} from 'react';
import Form from './Form';
import Modal from './Modal';
import { Route} from "react-router-dom";

const App = () => {
  const [tsv, setTsv] = useState("");
  const uuid = useMemo(() => uuidv4(), [tsv])
  
  return (
    <main>
      <Form tsv={tsv} setTsv={setTsv} uuid={uuid} />
      <Route path="/shop/:uuid">
        <Modal tsv={tsv} />
      </Route>
    </main>
  );
}

export default App;
