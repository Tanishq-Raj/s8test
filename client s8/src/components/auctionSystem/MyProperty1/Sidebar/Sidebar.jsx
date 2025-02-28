import { useContext } from 'react';
import './Sidebar.scss';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AppContext } from '../../../../context/context';


  const Sidebar = () => {
    const location = useLocation(); // Get current route
    const {setSearchString} = useContext(AppContext)

  const menuItems = [
    {
      icon: '/profilePageLogo.svg',
      text: 'Profile',
      route: '/',
    },
    {
      icon: '/dashboard.svg',
      text: 'Dashboard',
      route: '/dashboard',

    },
    {
      icon: '/Asset.svg',
      text: 'Assets',
      route: '/myAssets',
    },
    {
      icon: '/profileS.svg',
      text: 'Profile Settings',
      route: '/profile',
    },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/">
          <div className="logo-circle">
     
              <span className="logo-text">S8</span>
   
          </div>
        </Link>
      </div>
      <div className="separator"></div> {/* Add the separator */}
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index} className={`menu-item ${location.pathname === item.route ? 'active' : ''}`}>
            <Link to={item.route} className="menu-link" onClick={() => setSearchString(null)}>
              <img src={item.icon} alt={item.text} className="icon" />
              <div className="text">{item.text}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;