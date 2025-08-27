import './App.css';
import './index.css';
import Header from './component/Header'
import { Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { useState } from 'react';
import { Provider } from 'react-redux';
import cartStore from './utils/cartStore';

const AppLayout = () => {
  const [userName, setUserName] = useState('Puja')
  return (
    //config provider for dynamic data access everywhere
    <Provider store={cartStore}>
      <UserContext.Provider value={{ userName, setUserName }}>
        <div className="body container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
