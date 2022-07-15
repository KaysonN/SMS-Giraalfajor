import axios from 'axios';
import icon from '../../assets/imagens/notification-icon.svg';
import '../../index.css';
import { BASE_URL } from '../../utils/request';

type Props = {
    saleId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`).then(response => {
        console.log("OK");
    });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="btn-send" onClick={()=> handleClick(saleId)}>
            <img src={icon} alt="img" />
        </div>
    )
}

export default NotificationButton;
