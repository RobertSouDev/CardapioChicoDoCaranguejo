import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/chico-do-caranguejo-logo.png"
import banner from "../assets/caranguejo-banner.jpg"


export default function Navbar() {
    const menuItems = [
        "ENTRADAS", "CARNES & AVES", "MENU INDIVIDUAL", "MENU KIDS", "ESPECIAL PEIXES",
        "FRUTOS DO MAR", "GAURNIÇÕES", "SALADAS", "SOBREMESAS", "SUCOS", "BEBIDAS", 
        "DOSES", "CERVEJAS", "WHISKIES", "CACHAÇA", "VODKAS", "GIN", "CAIPFRUTAS",
        "DRINKS SEM ÁLCOOL", "FESTIVAL DOS DRINKS", "DRINKS ESPECIAIS", "DRINKS CLÁSSICOS", 
        "ADEGA CHICO"
    ];

    return (                 
        <div>
            {/* Barra superior */}
            {/* <div className="h-12 border border-solid"></div> */}

            {/* Nome do Restaurante */}
            <div className="mt-10 mb-5 border border-solid overflow-hidden flex justify-center">
                <img src={logo} alt="logo chico do caranguejo" className='w-40'/>
            </div>
            {/* Banner */}
            <div className=" border border-solid border-red-400 overflow-hidden">
                <img                            
                    src={banner} 
                    alt="Banner" 
                    className=" w-full object-left-top"
                />
            </div>



            {/* Menu de categorias */}
            <div className="h-28 text-white flex p-3 gap-4 overflow-x-auto whitespace-nowrap px-4">
                {menuItems.map((item, index) => (
                    <MenuItem 
                        key={index} 
                        name={item} 
                        path={`/${item.toLowerCase().replace(/ /g, '-').replace(/&/g, 'e')}`}
                    />
                ))}
            </div>
        </div>
    );
}

function MenuItem({ name, path }) {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <Link 
            to={path}
            className={`border border-gray-400  w-44 h-20 rounded-lg flex items-center justify-center min-w-[11rem]
                ${isActive ? 'shadow-2xl opacity-100' : 'shadow-none opacity-50'}`}
        >
            <p className="text-center text-blue-900">{name}</p>
        </Link>
    );
}

