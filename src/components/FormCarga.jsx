import { useState } from 'react'
const FormCarga = () => {

    const [carga1, setCarga1] = useState('')
    const [fuerza, setFuerza] = useState('')
    const [distancia, setDistancia] = useState('')
    const [resultado, setResultado] = useState('')

    const carga = (q1, d, f) => {
        const k = 9*(10**9)
        const resp = ((d ** 2)*f)/(k*q1)
        return resp
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        setResultado(Number(carga(carga1, distancia, fuerza)))
    }

    return (
        <div className='mt-4'>
            <form
                className='grid grid-cols-3 grid-rows-2'
                onSubmit={handleSubmit}
            >
                <div className='m-5'>
                    <label
                        htmlFor="q1"
                        className='mx-3'
                    >Carga 1:</label>

                    <input
                        name='q1'
                        type="number"
                        className='border-2 border-electricidad-200/50 rounded placeholder:px-2'
                        placeholder='Carga 1'
                        value={carga1}
                        onChange={(e) => setCarga1(Number(e.target.value))}
                    />
                </div>

                <div className='m-5'>
                    <label
                        htmlFor="distancia"
                        className='mx-3'
                    >Distancia:</label>

                    <input
                        name='distancia'
                        type="number"
                        className='border-2 border-electricidad-200/50 rounded placeholder:px-2'
                        placeholder='Distancia'
                        value={distancia}
                        onChange={(e) => setDistancia(Number(e.target.value))}
                    />
                </div>

                <div className='m-5'>
                    <label
                        htmlFor="fuerza"
                        className='mx-3'
                    >Fuerza:</label>

                    <input
                        name='fuerza'
                        type="number"
                        className='border-2 border-electricidad-200/50 rounded placeholder:px-2'
                        placeholder='Fuerza'
                        value={fuerza}
                        onChange={(e) => setFuerza(Number(e.target.value))}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-electricidad-200 w-3/4 h-1/2 m-5 text-white ml-20 rounded hover:bg-electricidad-100'
                >
                    Calacular
                </button>

                <p className=' col-span-2 w-3/4 ml-20 p-5 text-xl'>
                    Resultado: <span className='ml-5 '>{resultado}{resultado !== '' ? 'C' : ''}</span>
                </p>
            </form>
        </div>
    )
}

export default FormCarga