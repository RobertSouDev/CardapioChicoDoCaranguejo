import { Link, useLocation } from 'react-router-dom';

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
            <div className="h-12 border border-solid"></div>

            {/* Banner */}
            <div className="h-48 border border-solid border-red-400 overflow-hidden">
                <img                            
                    src="https://images.unsplash.com/photo-1739826155350-db63e78c098c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Banner" 
                    className="h-48 w-full object-none"
                />
            </div>

            {/* Nome do Restaurante */}
            <div className="h-12 border border-solid flex items-center justify-center">
                <h2>Chico do Caranguejo</h2>
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
                ${isActive ? 'shadow-2xl' : 'shadow-none'}`}
        >
            <p className="text-center text-blue-900">{name}</p>
        </Link>
    );
}