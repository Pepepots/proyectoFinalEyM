import { Link, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-electricidad-100 px-5 py-10'>
                <h2 className='text-4xl text-center text-white'>
                    <span className='font-black'>Proyecto</span> EyM
                </h2>

                <nav className='mt-10'>
                    <Link
                        className={`${urlActual === '/calcular/coulomb' ? 'text-electricidad-400' : 'text-white'} text-2xl block mt-5 hover:text-electricidad-400`}
                        to='/calcular/coulomb'
                    >
                        Coulomb
                    </Link>
                    <Link
                        className={`${urlActual === '/calcular/campo-electrico' ? 'text-electricidad-400' : 'text-white'} text-2xl block mt-5 hover:text-electricidad-400`}
                        to='/calcular/campo-electrico'
                    >
                        Campo Electrico
                    </Link>
                    <Link
                        className={`${urlActual === '/calcular/capacitancia' ? 'text-electricidad-400' : 'text-white'} text-2xl block mt-5 hover:text-electricidad-400`}
                        to='/calcular/capacitancia'
                    >
                        Capacitancia
                    </Link>
                    <Link
                        className={`${urlActual === '/calcular/resistencia' ? 'text-electricidad-400' : 'text-white'} text-2xl block mt-5 hover:text-electricidad-400`}
                        to='/calcular/resistencia'
                    >
                        Resistecia
                    </Link>
                </nav>
            </div>

            <div className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout