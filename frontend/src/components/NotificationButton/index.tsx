import icon from '../../assets/imagens/notification-icon.svg';
import '../../index.css';

function NotificationButton() {
    return (
        <div className="btn-send">
            <img src={icon} alt="img"/>
        </div>
    )
}

export default NotificationButton;
