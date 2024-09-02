import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvestorList from './components/InvestorList/InvestorList';
import InvestorDetail from './components/InvestorDetail/InvestorDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<InvestorList />} />
          <Route path="/investors/:id" element={<InvestorDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;