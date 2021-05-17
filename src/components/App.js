import '../styles/App.css';
import {useState} from 'react';
import Form from './Form';
import Modal from './Modal';
import { Switch, Route} from "react-router-dom";



const App = () => {
  const [tsv, setTsv] = useState("");
  
  
  return (
    <main>
      <Form tsv={tsv} setTsv={setTsv} />
      <Switch>
        <Route path="/shop/:id">
          <Modal tsv={tsv} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
