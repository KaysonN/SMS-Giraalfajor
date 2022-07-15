import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../index.css';
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from '../NotificationButton';

function SalesCard() {
    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const[sales, setSales] = useState<Sale[]>([]);

    // Executa algo quando o componente é montado e quando algum dado do mesmo se alterar,
    // ou seja, quando mudar dado x, essa função executa
    useEffect(() => {
        axios.get(`${BASE_URL}/sales`).then((response) => {
            setSales(response.data.content);
        })
    }, []);


    return (
        <>
            <div className="app-card">
                <h2 className="title-card">Vendas</h2>
                <div>
                    <div className="container-form-person">
                        <div>
                            <DatePicker
                                selected={minDate}
                                onChange={(date: Date) => setMinDate(date)}
                                className="form-person"
                                dateFormat="dd/MM/yyyy"
                            />
                        </div>
                    </div>

                    <div className="container-form-person">
                        <div><DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="form-person"
                            dateFormat="dd/MM/yyyy"
                        /></div>
                    </div>
                </div>
                <div>
                    <table className="table-vendas">
                        <thead>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </thead>
                        <tbody>
                            {
                                sales.map(sale=>{
                                    return (
                                    <tr key={sale.id}>
                                        <td className="show992">#{sale.id}</td>
                                        <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                        <td>{sale.sellerName}</td>
                                        <td className="show992">{sale.visited}</td>
                                        <td className="show992">{sale.deals}</td>
                                        <td>R${sale.amount.toFixed(2)}</td>
                                        <td>
                                            <div className="btn-container">
                                                <NotificationButton />
                                            </div>
                                        </td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard;
