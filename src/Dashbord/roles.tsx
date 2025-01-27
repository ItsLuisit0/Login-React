import React, { useState } from "react";
import "./Configuracion.css";

type Cajero = {
  username: string;
  fullName: string;
  permisos: {
    verInventario: boolean;
    realizarDescuentos: boolean;
    cobrarTickets: boolean;
  };
};

const Configuracion = () => {
  const [cajeros, setCajeros] = useState<Cajero[]>([
    {
      username: "admin",
      fullName: "Administrador",
      permisos: {
        verInventario: true,
        realizarDescuentos: true,
        cobrarTickets: true,
      },
    },
  ]);
  const [newCajero, setNewCajero] = useState({
    username: "",
    password: "",
    fullName: "",
  });
  const [selectedCajero, setSelectedCajero] = useState<Cajero | null>(null);

  const handleAddCajero = () => {
    if (
      newCajero.username.trim() &&
      newCajero.fullName.trim() &&
      !cajeros.some((c) => c.username === newCajero.username)
    ) {
      setCajeros([
        ...cajeros,
        {
          username: newCajero.username,
          fullName: newCajero.fullName,
          permisos: {
            verInventario: false,
            realizarDescuentos: false,
            cobrarTickets: false,
          },
        },
      ]);
      setNewCajero({ username: "", password: "", fullName: "" });
    } else {
      alert("Asegúrate de completar los campos y que el usuario no exista ya.");
    }
  };

  const handleRemoveCajero = (username: string) => {
    setCajeros(cajeros.filter((cajero) => cajero.username !== username));
    if (selectedCajero?.username === username) {
      setSelectedCajero(null);
    }
  };

  const handleSelectCajero = (cajero: Cajero) => {
    setSelectedCajero(cajero);
  };

  const handlePermissionChange = (permission: keyof Cajero["permisos"]) => {
    if (!selectedCajero) return;
    const updatedCajeros = cajeros.map((cajero) =>
      cajero.username === selectedCajero.username
        ? {
            ...cajero,
            permisos: {
              ...cajero.permisos,
              [permission]: !cajero.permisos[permission],
            },
          }
        : cajero
    );
    setCajeros(updatedCajeros);
    setSelectedCajero(
      updatedCajeros.find((c) => c.username === selectedCajero.username) || null
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCajero((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container">

      <header className="header">
        <h1>Bienvenido a la Gotita</h1>
      </header>
      <h1 className="roles-title">Roles</h1>
      <div className="grid">
        {/* Cajeros */}
        <div className="cajero-container">
          <h2 className="cajeros-title">Cajeros</h2>
          <ul>
            {cajeros.map((cajero) => (
              <li key={cajero.username}>
                <span>{cajero.fullName}</span>
                <div>
                  <button
                    className="btn-ver-detalles"
                    onClick={() => handleSelectCajero(cajero)}
                  >
                    Ver detalles
                  </button>
                  <button
                    onClick={() => handleRemoveCajero(cajero.username)}
                    className="btn-eliminar"
                  >
                    Dar de baja
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

       
        <div className="form-y-detalle">
          <form
            className="nuevo-cajero"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddCajero();
            }}
          >
            <h2 className="form-title">Registrar Usuario</h2>
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese el usuario"
              value={newCajero.username}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese la contraseña"
              value={newCajero.password}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="fullName">Nombre Completo</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Ingrese el nombre completo"
              value={newCajero.fullName}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="btn-agregar-cajero">
              Agregar Cajero
            </button>
          </form>

         
          {selectedCajero && (
            <div className="detalles-cajero">
              <h2>Detalles del Cajero</h2>
              <p><strong>Usuario:</strong> {selectedCajero.username}</p>
              <p><strong>Nombre Completo:</strong> {selectedCajero.fullName}</p>
              <h3>Permisos</h3>
              <div className="permisos">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCajero.permisos.verInventario}
                    onChange={() => handlePermissionChange("verInventario")}
                  />
                  Ver Inventario
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCajero.permisos.realizarDescuentos}
                    onChange={() => handlePermissionChange("realizarDescuentos")}
                  />
                  Realizar Descuentos
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedCajero.permisos.cobrarTickets}
                    onChange={() => handlePermissionChange("cobrarTickets")}
                  />
                  Cobrar Tickets
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </main >
  );
};

export default Configuracion;
