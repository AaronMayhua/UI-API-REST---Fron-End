import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function () {

    const [usuario, setUsuario] = useState([]) // variable que contiene en un  array los datos de la DB

    useEffect(() => {
        loadUsuarios();
    }, []);

    const loadUsuarios = async () => {
        const result = await axios.get("http://localhost:8030/usuarios"); // axios siempre espera una ruta http://
        setUsuario(result.data);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Config</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */
                        usuario.map((usuario, index) => (
                            <tr className="bg-base-200">
                                <td scope='row' key={index}>{usuario.id_usuer}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.email}</td>
                                <td>
                                    <button className="mx-1 btn btn-outline btn-info">Nuevo</button>
                                    <Link className="mx-1 btn btn-outline btn-success"
                                        to={`/editarusuario/${usuario.id_usuer}` }                                   >Editar</Link>
                                    <button className="mx-1 btn btn-outline btn-error">Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
