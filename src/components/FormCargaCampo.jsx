import { useState } from 'react'

const FormCargaCampo = () => {
    
    
    const [campo, setCampo] = useState('')
    const [fuerza, setFuerza] = useState('')
    const [resultado, setResultado] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setResultado(Number(fuerza / campo))
    }

    return (
        <div className='mt-4'>
            <form
                className='grid grid-cols-2 grid-rows-2'
                onSubmit={handleSubmit}
            >

                <div className='m-5'>
                    <label
                        htmlFor="fuerza"
                        className='mx-3'
                    >Fuerza:</label>

                    <input
                        name='fuerza'
                        type="number"
                        className='w-2/3 border-2 border-electricidad-200/50 rounded placeholder:px-2'
                        placeholder='Fuerza'
                        value={fuerza}
                        onChange={(e) => setFuerza(Number(e.target.value))}
                    />
                </div>

                <div className='m-5'>
                    <label
                        htmlFor="campo"
                        className='mx-3'
                    >Campo: </label>

                    <input
                        name='campo'
                        type="number"
                        className='w-2/3 border-2 border-electricidad-200/50 rounded placeholder:px-2'
                        placeholder='Campo'
                        value={campo}
                        onChange={(e) => setCampo(Number(e.target.value))}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-electricidad-200 w-3/4 h-3/4 m-5 text-white rounded hover:bg-electricidad-100'
                >
                    Calacular
                </button>

                <p className='pt-5 text-xl mx-7'>
                    Resultado: <span className='ml-5 '>{resultado}{resultado !== '' ? 'C' : ''}</span>
                </p>
            </form>
        </div>
    )
}

export default FormCargaCampo