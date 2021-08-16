import react, { useState,useEffect} from 'react'
import DataService from '../../services/abastecimentos'

const Historico = () => {
    const [historico, setHistorico] = useState([])
    useEffect(() => {
        retrieveHistorico();
      }, []);
    const retrieveHistorico = () => {
        DataService.getAll()
            .then(response => {
                setHistorico(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div className="container" style={{ padding: '3rem' }}>
            <h3>Histórico</h3>
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <td>Motorista</td>
                        <td>Posto</td>
                        <td>Combustível</td>
                        <td>Valor</td>
                        <td>Qtd Litros</td>
                        <td>Km</td>
                    </tr>
                </thead>
                <tbody>
                {historico.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.motorista}</td>
                            <td>{item.posto}</td>
                            <td>{item.tipo}</td>
                            <td>{item.valor}</td>
                            <td>{item.litros}</td>
                            <td>{item.km}</td>
                        </tr>
                ))}

                </tbody>
            </table>
        </div>
    )
}
export default Historico