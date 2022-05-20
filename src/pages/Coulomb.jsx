import React from 'react'
import FormCarga from '../components/FormCarga'
import FormDistancia from '../components/FormDistancia'
import FormFuerza from '../components/FormFuerza'

const Coulomb = () => {
    return (
        <div className='grid grid-cols-1 grid-rows-3 min-h-full'>
            <div className='my-3 p-3 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl text-center font-bold'>Fuerza</h2>
                <FormFuerza />
            </div>
            <div className='my-3 p-3 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl text-center font-bold'>Distancia</h2>
                <FormDistancia />
            </div>
            <div className='my-3 p-3 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl text-center font-bold'>Carga Electrica</h2>
                <FormCarga />
            </div>
        </div>
    )
}

export default Coulomb