import React, { useState } from 'react';
import './Configuracion.css';

const sharedClasses = {
    border: 'border border-zinc-300',
    rounded: 'rounded',
    p2: 'p-2',
    p4: 'p-4',
    wFull: 'w-full',
    bgWhite: 'bg-white',
    shadow: 'shadow',
    flex: 'flex',
    itemsCenter: 'items-center',
    justifyBetween: 'justify-between',
    hover: 'hover:bg-zinc-100',
    cursorPointer: 'cursor-pointer',
    textSm: 'text-sm',
    block: 'block',
    mr2: 'mr-2',
    mb2: 'mb-2',
    mb4: 'mb-4',
};

interface CajeroItemProps {
    name: string;
    onSelect: (name: string) => void;
}

const CajeroItem: React.FC<CajeroItemProps> = ({ name, onSelect }) => (
    <li
        className={`${sharedClasses.flex} ${sharedClasses.itemsCenter} ${sharedClasses.p2} ${sharedClasses.hover} ${sharedClasses.cursorPointer}`}
        onClick={() => onSelect(name)}
    >
        <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="Cajero" className="w-8 h-8 rounded-full mr-2" />
        <span>{name}</span>
    </li>
);

const CajeroList = ({ onSelect }: { onSelect: (name: string) => void }) => (
    <ul className={`${sharedClasses.bgWhite} ${sharedClasses.border} rounded-lg ${sharedClasses.shadow}`}>
        <CajeroItem name="Guadalupe Galvan Caballero" onSelect={onSelect} />
        <CajeroItem name="Administrador de la Tienda" onSelect={onSelect} />
    </ul>
);

const NuevoCajeroForm = ({ selectedCajero }: { selectedCajero: string }) => (
    <form className={`${sharedClasses.bgWhite} ${sharedClasses.border} rounded-lg ${sharedClasses.p4} ${sharedClasses.shadow}`}>
        <div className={sharedClasses.mb4}>
            <label className={`${sharedClasses.block} ${sharedClasses.textSm} font-medium ${sharedClasses.mb4}`} htmlFor="usuario">Usuario</label>
            <input type="text" id="usuario" value={selectedCajero} readOnly className={`${sharedClasses.border} ${sharedClasses.rounded} ${sharedClasses.p2} ${sharedClasses.wFull}`} />
        </div>
        <div className={sharedClasses.mb4}>
            <label className={`${sharedClasses.block} ${sharedClasses.textSm} font-medium ${sharedClasses.mb4}`} htmlFor="clave">Clave</label>
            <input type="password" id="clave" className={`${sharedClasses.border} ${sharedClasses.rounded} ${sharedClasses.p2} ${sharedClasses.wFull}`} />
        </div>
        <div className={sharedClasses.mb4}>
            <label className={`${sharedClasses.block} ${sharedClasses.textSm} font-medium ${sharedClasses.mb4}`} htmlFor="nombre-completo">Nombre completo</label>
            <input type="text" id="nombre-completo" value={selectedCajero} readOnly className={`${sharedClasses.border} ${sharedClasses.rounded} ${sharedClasses.p2} ${sharedClasses.wFull}`} />
        </div>

        <fieldset className={`${sharedClasses.mb4}`}>
            <legend className={`${sharedClasses.textSm} font-medium mb-2`}>Permisos</legend>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
                <div className={`flex items-center`}>
                    <input type="checkbox" id="utilizar-producto" className={sharedClasses.mr2} />
                    <label htmlFor="utilizar-producto">Utilizar Producto Común</label>
                </div>
                <div className={`flex items-center`}>
                    <input type="checkbox" id="ver-reportes" className={sharedClasses.mr2} />
                    <label htmlFor="ver-reportes">Ver Reportes</label>
                </div>
                <div className={`flex items-center`}>
                    <input type="checkbox" id="gestionar-inventario" className={sharedClasses.mr2} />
                    <label htmlFor="gestionar-inventario">Gestionar Inventario</label>
                </div>
                <div className={`flex items-center`}>
                    <input type="checkbox" id="administrar-cuentas" className={sharedClasses.mr2} />
                    <label htmlFor="administrar-cuentas">Administrar Cuentas</label>
                </div>
            </div>
        </fieldset>

        <div className={`${sharedClasses.flex} ${sharedClasses.justifyBetween}`}>
            <button type="submit" className={`bg-secondary text-white hover:bg-secondary/80 p-2 rounded`}>Guardar Cajero y Permisos</button>
            <button type="button" className={`text-red-500 hover:text-red-700`}>Cancelar</button>
        </div>
    </form>
);

const Configuracion = () => {
    const [selectedCajero, setSelectedCajero] = useState<string>('');

    return (
        <>
            <header className="header">
                <h1>Bienvenido a la Gotita</h1>
            </header>
            <h1 className="roles-title text-2xl font-bold mb-4">Roles</h1>
            <div className={`${sharedClasses.flex}`}>
                <div className="cajero-container w-1/3 pr-4 mb-4">
                    <h2 className="cajeros-title">Cajeros</h2>
                    <div className={`${sharedClasses.flex} items-center mb4`}>
                        <input type="text" placeholder="Buscar..." className={`${sharedClasses.border} ${sharedClasses.rounded} ${sharedClasses.p2} mb4 w-full`} />
                        <button type="button" className={`bg-primary text-white hover:bg-primary/80 btn-agregar-cajero`}>
                            Agregar Cajero
                        </button>
                    </div>
                    <CajeroList onSelect={setSelectedCajero} />
                </div>
                <div className="nuevo-cajero w-2/3 pl-4">
                    <h2>Nuevo Cajero</h2>
                    <NuevoCajeroForm selectedCajero={selectedCajero} />
                    <h1>sndasjdh</h1>
                </div>
            </div>
        </>
    );
};

export default Configuracion;
