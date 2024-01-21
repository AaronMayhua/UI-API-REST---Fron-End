import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function () {

    const [usuario, setUsuario] = useState([]) // variable que contiene en un  array los datos de la DB

    // creando la variable id_usuer  siempre colocar la misma variable que aparece en la BD id = id 
    const {id_usuer} = useParams()

    // llamando a la accion para eliminar 
    useEffect(() => {
        loadUsuarios();
    }, []);

    // Haciendo la accio  para listar
    const loadUsuarios = async () => {
        const result = await axios.get("http://localhost:8030/users"); // axios siempre espera una ruta http://
        setUsuario(result.data);
    };

    // Eliminar buscando por id
    const deleteUser = async(id_usuer)=>{
        await axios.delete(`http://localhost:8030/user/${id_usuer}`)
        loadUsuarios() // se le implementa la primera accion
    }

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
                                    <Link 
                                        className="mx-1 btn btn-outline btn-info" 
                                        to={`/verusuario/${usuario.id_usuer}`}
                                        >Ver
                                    </Link>
                                    <Link 
                                        className="mx-1 btn btn-outline btn-success"
                                        to={`/editarusuario/${usuario.id_usuer}`}
                                        >Editar
                                    </Link>
                                    <button 
                                        className="mx-1 btn btn-outline btn-error"
                                        onClick={()=>deleteUser(usuario.id_usuer)}
                                        >Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
