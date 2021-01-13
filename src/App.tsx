import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ProfilePage from './pages/Profile';
import RepoPage from './pages/Repo';

function App() {
  return (
    <Router>
      <Header />

      <ProfilePage />
      {/* <Route path="/:username" element={ProfilePage} />
      <Route path="/:username/:repo" element={RepoPage} /> */}

      <Footer />
    </Router>
  );
}

export default App;
