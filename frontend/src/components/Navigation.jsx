import React, { useState } from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Profile from '../pages/Profile';

export default function Navigation() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'profile':
        return <Profile />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setPage('home')}>Главная</button>
        <button onClick={() => setPage('projects')}>Проекты</button>
        <button onClick={() => setPage('profile')}>Профиль</button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}
