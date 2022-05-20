import { useState } from "react";
import InputDinamico from "../components/InputDinamico";

const inicialStateSerie = [
    {
        id: 1,
        value: "",
    },
    {
        id: 2,
        value: "",
    },
];

const inicialStateParalelo = [
    {
        id: 1,
        value: "",
    },
    {
        id: 2,
        value: "",
    },
];

function Capacitancia() {

    const [serie, setSerie] = useState(inicialStateSerie);
    const [paralelo, setParalelo] = useState(inicialStateParalelo)
    const [serieResp, setSerieResp] = useState(0)
    const [paraleloResp, setParaleloResp] = useState(0)

    const cambiarValorSerie = (id, valor) => {
        const serieAct = serie.map((reg) =>
            reg.id === id ? { id: reg.id, value: valor } : reg
        );
        setSerie(serieAct);
    };

    const eliminarValorSerie = (id) => {
        const serieAct = serie.filter(reg => reg.id !== id);
        setSerie(serieAct);
    };

    const nuevoValorSerie = () => {
        const nuevObj = { id: serie[serie.length - 1].id + 1, value: '' }
        setSerie([...serie, nuevObj])
    }

    const cambiarValorParalelo = (id, valor) => {
        const paraleloAct = paralelo.map((reg) =>
            reg.id === id ? { id: reg.id, value: valor } : reg
        );
        setParalelo(paraleloAct);
    };

    const eliminarValorParalelo = (id) => {
        const paraleloAct = paralelo.filter(reg => reg.id !== id);
        setParalelo(paraleloAct);
    };

    const nuevoValorParalelo = () => {
        const nuevObj = { id: paralelo[paralelo.length - 1].id + 1, value: '' }
        setParalelo([...paralelo, nuevObj])
    }

    const calcularSerie = () => {
        const resp = serie.reduce( (sum, act) => sum + (act.value ** -1), 0)
        setSerieResp(resp ** -1)
    }

    const calcularParalelo = () => {
        const resp = paralelo.reduce( (sum, act) => sum + act.value, 0)
        setParaleloResp(resp)
    }
 
    return (
        <div className="grid grid-cols-2 grid-rows-1 min-h-full gap-7">
            <div className="my-3 p-3 rounded-lg shadow-xl bg-white">
                <h2 className="text-2xl text-center font-bold">Capacitancia Serie</h2>
                {serie.map((reg) => (
                    <InputDinamico
                        key={reg.id}
                        type={'C'}
                        id={reg.id}
                        value={reg.value}
                        cambiarValor={cambiarValorSerie}
                        eliminarValor={eliminarValorSerie}
                    />
                ))}

                <button
                    className="text-white text-lg mt-5 w-full bg-electricidad-300 rounded h-12 hover:bg-electricidad-200"
                    onClick={nuevoValorSerie}
                >
                    Añadir Capacitor
                </button>
                <div className="w-full">
                    <button
                        className="text-white w-1/2 inline-block text-lg mt-5 bg-electricidad-500 rounded h-12 hover:bg-electricidad-400"
                        onClick={calcularSerie}
                    >
                        Calcular
                    </button>
                    <p className="p-5 w-1/2 inline-block text-2xl ">
                        C = {serieResp.toFixed(4)} F
                    </p>
                </div>
            </div>

            <div className="my-3 p-3 rounded-lg shadow-xl bg-white">
                <h2 className="text-2xl text-center font-bold">
                    Capacitancia Paralelo
                </h2>
                {paralelo.map((reg) => (
                    <InputDinamico
                        key={reg.id}
                        type={'C'}
                        id={reg.id}
                        value={reg.value}
                        cambiarValor={cambiarValorParalelo}
                        eliminarValor={eliminarValorParalelo}
                    />
                ))}

                <button
                    className="text-white text-lg mt-5 w-full bg-electricidad-300 rounded h-12 hover:bg-electricidad-200"
                    onClick={nuevoValorParalelo}
                >
                    Añadir Capacitor
                </button>
                <div className="w-full">
                    <button
                        className="text-white w-1/2 inline-block text-lg mt-5 bg-electricidad-500 rounded h-12 hover:bg-electricidad-400"
                        onClick={calcularParalelo}
                    >
                        Calcular
                    </button>
                    <p className="p-5 w-1/2 inline-block text-2xl ">
                        C = {paraleloResp.toFixed(4)} F
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Capacitancia;
