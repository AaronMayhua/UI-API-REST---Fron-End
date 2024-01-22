import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

export default function ViewUser() {

    // array con objetos que buscar 
    const [usuario, setUsuario] = useState({
        name: "",
        apellido: "",
        email: ""
    })

    // Variable ID para buscar
    const { id_usuer } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    // Metodo para buscar usuario
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8030/api/user/${id_usuer}`)
        setUsuario(result.data)
    }

    return (
        <div>
            <h2>Detalles</h2>

            <div>
                <div>
                    detalles del usuario
                    <ul>
                        <li>
                            <b>Name:</b>
                            {usuario.name}
                        </li>
                        <li>
                            <b>Apellido:</b>
                            {usuario.apellido}
                        </li>
                        <li>
                            <b>Email:</b>
                            {usuario.email}
                        </li>
                    </ul>
                </div>
            </div>

            <Link
                to={"/"}>
                regresar

            </Link>
        </div>
    )
}
