import '../styles/App.css';
import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
import Form from './Form';
import Modal from './Modal';
import { Route} from "react-router-dom";

const App = () => {
  const [tsv, setTsv] = useState("");
  const uuid = uuidv4();
  const [showModal, setShowModal] = useState(false);
  
  return (
    <main>
      <Form 
        tsv={tsv}
        setTsv={setTsv} 
        uuid={uuid}
        setShowModal={setShowModal}  
      />
      <Route path="/shop/:uuid">
        <Modal 
          setTsv={setTsv} 
          tsv={tsv} 
          showModal={showModal} 
          setShowModal={setShowModal}
        />
      </Route>
    </main>
  );
}

export default App;
