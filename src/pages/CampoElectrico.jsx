import React from 'react'
import FormCampo from '../components/FormCampo'
import FormCargaCampo from '../components/FormCargaCampo'

const CampoElectrico = () => {
    return (
        <div className='grid grid-cols-1 grid-rows-2 min-h-full'>
            <div className='my-3 p-3 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl text-center font-bold'>Campo Electrico</h2>
                <FormCampo />
            </div>
            <div className='my-3 p-3 rounded-lg shadow-xl bg-white'>
                <h2 className='text-2xl text-center font-bold'>Carga</h2>
                <FormCargaCampo />
            </div>
        </div>
    )
}

export default CampoElectrico