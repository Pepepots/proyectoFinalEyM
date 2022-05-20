import { useEffect, useState } from "react"

const InputDinamico = ({type, id, value, cambiarValor, eliminarValor }) => {

    // const [valueInput, setValueInput] = useState('')    

    // useEffect(() => {
    //     cambiarValor( id, valueInput)
    // }, [valueInput])

    return (
        <div className="grid grid-cols-3 grid-rows-2">
            <label
                htmlFor={`resistenica-${id}`}
                className='text-electricidad-100 text-xl col-span-3'
            >
                {type}{id}:
            </label>
            <input 
                name={`resistenica-${id}`}
                type="number" 
                className="col-span-2 p-2 border-2"
                placeholder="Ingresa resistencia"
                value={value}
                onChange={ (e) => cambiarValor(id, Number(e.target.value))}
            />
            <button 
                className="mx-auto w-1/2 bg-red-600 rounded hover:bg-red-800"
                onClick={() => eliminarValor(id)}
            >X</button>
        </div>
    )
}

export default InputDinamico