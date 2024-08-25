import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './ui/Layout.jsx';
import Header from './ui/Header.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="h-100">
        <Header />
        <Layout />
      </div>
    </Router>
  )
}

export default App;
