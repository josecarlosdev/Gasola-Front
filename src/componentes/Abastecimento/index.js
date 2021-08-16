import react, { useState } from 'react'
import Postos from "../Postos/index"
import DataService from '../../services/abastecimentos'
import { Alert } from 'react-bootstrap'

const Abastecimento = () => {
    const abastecimentoState = {
        litros: "",
        placa: "",
        valor: "",
        motorista: "",
        km: "",
        tipo: "",
        posto: "Posto Barrancao"
    }

    const [abastecimento, setAbastecimento] = useState(abastecimentoState)
    const [messege, setMessege] = useState('')
    const [show, setShow] = useState(false);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setAbastecimento({ ...abastecimento, [name]: value });

    };
    const save = async () => {
        if (abastecimento.litros == ""
            || abastecimento.tipo == ''
            || abastecimento.motorista == ""
            || abastecimento.valor == ""
            || abastecimento.km == "" 
            || abastecimento.placa == "") {
            setMessege("todos compos devem ser preenchidos")
            setShow(true)
        } else {
            const data = {
                litros: abastecimento.litros,
                placa: abastecimento.placa,
                valor: abastecimento.valor,
                motorista: abastecimento.motorista,
                km: abastecimento.km,
                posto: abastecimento.posto,
                tipo: abastecimento.tipo

            };
            //console.log(data)
            await DataService.create(data).then(response => {
                setAbastecimento({
                    litros: response.data.litros,
                    placa: response.data.placa,
                    valor: response.datavalor,
                    motorista: response.data.motorista,
                    km: response.data.km,
                    posto: response.data.posto,
                    tipo: response.data.tipo
                })
                console.log(response.data)
                alert('Abastecimento Salvo com sucesso')
                setAbastecimento({placa:"",km:"",valor:"",motorista:"",litros:""})
            })
        }
    }
    const onclickAbast = (value) => {
        if (value == 'g') {
            abastecimento.tipo = 'Gasolina'
            alert(abastecimento.tipo)
        }
        if (value == 'd1') {
            abastecimento.tipo = 'Disiel S10'
            alert(abastecimento.tipo)
        }
        if (value == 'd5') {
            abastecimento.tipo = 'Disiel S500'
            alert(abastecimento.tipo)
        }
        if (value == 'e') {
            abastecimento.tipo = 'Etanol'
            alert(abastecimento.tipo)
        }
        if (value == 'a') {
            abastecimento.tipo = 'Arta'
            alert(abastecimento.tipo)
        }
    }
    return (

        <div className="container" style={{ padding: '3rem' }}>
            {show ? (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Atenção!</Alert.Heading>
                    <p>
                        {messege}
                    </p>
                </Alert>
            ) : (<div></div>)}
            <div className="row">
                <div className="col-md-4">
                    <Postos />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <h3>Abastecimentos</h3>
                        <br />
                        <div className="col-md-2"
                            id="tipo"
                            onClick={() => onclickAbast('g')}
                            name="tipo"
                        >
                            <div class="card border-light mb-2" style={{ width: '5rem' }}>
                                <div style={{ width: '5rem', textAlign: 'center', backgroundColor: "rgb(208, 208, 207)" }}>
                                    <strong style={{ fontSize: '35px' }}>G</strong>
                                    <p style={{ textAlign: 'center', fontSize: '12px' }} >Gasolina</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-2"
                            id="tipo"
                            onClick={() => onclickAbast('d1')}
                            name="tipo"

                        >
                            <div class="card border-light mb-2" style={{ width: '5rem' }}>
                                <div style={{ width: '5rem', textAlign: 'center', backgroundColor: "rgb(208, 208, 207)" }}>
                                    <strong style={{ fontSize: '35px' }}>D</strong>
                                    <p style={{ fontSize: '12px' }} >Diesel s10</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-2"
                            id="tipo"
                            onClick={() => onclickAbast('d5')}
                            name="tipo"
                        >
                            <div class="card border-light mb-2" style={{ width: '5rem' }}>
                                <div style={{ width: '5rem', textAlign: 'center', backgroundColor: "rgb(208, 208, 207)" }}>
                                    <strong style={{ fontSize: '35px' }}>D</strong>
                                    <p style={{ fontSize: '12px' }} >Diesel s500</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-2"
                            id="tipo"
                            onClick={() => onclickAbast('e')}
                            name="tipo"
                        >
                            <div class="card border-light mb-2" style={{ width: '5rem' }}>
                                <div style={{ width: '5rem', textAlign: 'center', backgroundColor: "rgb(208, 208, 207)" }}>
                                    <strong style={{ fontSize: '35px' }}>E</strong>
                                    <p style={{ fontSize: '12px' }} >Etanol</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-2"
                            id="tipo"
                            onClick={() => onclickAbast('a')}
                            name="tipo"
                        >
                            <div class="card border-light mb-2" style={{ width: '5rem' }}>
                                <div style={{ width: '5rem', textAlign: 'center', backgroundColor: "rgb(208, 208, 207)" }}>
                                    <strong style={{ fontSize: '35px' }}>A</strong>
                                    <p style={{ textAlign: 'center', fontSize: '12px' }} >Arla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-5">
                            <label>Litros</label>
                            <input
                                style={{ backgroundColor: "rgb(208, 208, 207)" }}
                                className="form-control"
                                id="litros"
                                required
                                value={abastecimento.litros}
                                onChange={handleInputChange}
                                name="litros"
                            />
                        </div>
                        <div className="col-md-5">
                            <label>Placa</label>
                            <input
                                style={{ backgroundColor: "rgb(208, 208, 207)" }}
                                className="form-control"
                                id="placa"
                                required
                                value={abastecimento.placa}
                                onChange={handleInputChange}
                                name="placa"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-5">
                            <label>Valor</label>
                            <input
                                style={{ backgroundColor: "rgb(208, 208, 207)" }}
                                className="form-control"
                                id="valor"
                                required
                                value={abastecimento.valor}
                                onChange={handleInputChange}
                                name="valor"
                            />
                        </div>
                        <div className="col-md-5">
                            <label>Motorista</label>
                            <input
                                style={{ backgroundColor: "rgb(208, 208, 207)" }}
                                className="form-control"
                                id="motorista"
                                required
                                value={abastecimento.motorista}
                                onChange={handleInputChange}
                                name="motorista"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-5">
                            <label>Km Atual</label>
                            <input
                                style={{ backgroundColor: "rgb(208, 208, 207)" }}
                                className="form-control"
                                id="km"
                                required
                                value={abastecimento.km}
                                onChange={handleInputChange}
                                name="km"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                    <div className="col-md-5">

                    </div>
                        <div className="col-md-5"
                            
                        >
                            <button 
                              style={{ 
                                  textAlign:"center",
                                  backgroundColor: "rgb(208, 208, 207)",
                                  height:"3rem",
                                  width:"17rem"
                                }}
                                onClick={save}
                            >CONFIRMAR</button>
                        </div>
                       
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Abastecimento