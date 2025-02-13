// not in use

import './Notification.scss';

export function NotificationCard() {
  return (
    <div className="notificationContainer">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c747f16d648fe816e3d2d66c808473086ef100f816a34b852514c4f9a233fa1e?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
        className="backgroundImage"
        alt=""
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/065872fdc61017b1868eeae8e62027ca5df712f654e65d3f9cf08dfadf20b40c?placeholderIfAbsent=true&apiKey=e80f20ecf30841dba73cb2738bb00e1e"
        className="notificationIcon"
        alt="Notification bell icon"
      />
      <div className="notificationTitle">Notifications</div>
      <div className="notificationCount">
        You have 7 new notifications
      </div>
      <button 
        className="notificationButton"
        onClick={() => {}}
        tabIndex={0}
      >
        View Notifications
      </button>
    </div>
  );
}