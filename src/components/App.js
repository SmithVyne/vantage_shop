import '../styles/App.css';
import {useState} from 'react';
import Form from './Form';
import Modal from './Modal';

const apiUrl = 'http://localhost:3002';

const App = () => {
  const [tsv, setTsv] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({tsv})
    })
    .then(res => res.json())
    .then(dt => {
      setData(dt);
      console.log(dt);
      setLoading(false);
    })
    .catch(e => console.log(e));
  }
  
  return (
    <main>
      <Form tsv={tsv} setTsv={setTsv} handleSubmit={handleSubmit} loading={loading} />
      <Modal data={data} showModal={showModal} setShowModal={setShowModal} />
    </main>
  );
}

export default App;
