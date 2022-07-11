import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../../index.css'
import NotificationButton from '../NotificationButton'

function SalesCard() {
    return (
        <>
            <div className="app-card">
                <h2 className="title-card">Vendas</h2>
                <div>
                    <div className="container-form-person">
                        <div><DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            className="form-person"
                            dateFormat="dd/MM/yyyy"
                        /></div>
                    </div>

                    <div className="container-form-person">
                        <div><DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
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
                            <tr>
                                <td className="show992">#001</td>
                                <td className="show576">08/07/2022</td>
                                <td>Carlos</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 100.00</td>
                                <td>
                                    <div className="btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#002</td>
                                <td className="show576">08/07/2022</td>
                                <td>Carlos</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 100.00</td>
                                <td>
                                    <div className="btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#003</td>
                                <td className="show576">08/07/2022</td>
                                <td>Carlos</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 100.00</td>
                                <td>
                                    <div className="btn-container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard
