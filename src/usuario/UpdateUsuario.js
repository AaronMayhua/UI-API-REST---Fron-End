import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function Editusuario() { 

    let navigate=useNavigate()

    // Variable del Id para actualizar siempre colocar el mismo nombre que isiste en el back end ejemplo id en el back y cuando declare colocar el mismo name id no colocar idUser si no no funciona y axios reconoce como error ERROR Network Error AxiosError: Network Error at XMLHttpRequest.handleError (http://localhost:3000/static/js/bundle.js:51422:14)
    const {id_usuer} = useParams()

    const [usuario, setUsuario] = useState({
        name: "",
        apellido: "",
        email: ""
    });

    const { name, apellido, email } = usuario

    const onImputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    // Llamando a loadUser
    useEffect(()=>{
        loadUser()
    },[])


    // submit del form
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8030/api/user/${id_usuer}`, usuario); // ulr del back end imsonia se coloca el local host de Spring probado en imsonia
        navigate("/") // ruta o name de la ruta a la cual quiero que se dirija despues del POST o submit 
    };

    // Esto es para guardar la accion que se realizara y luego se llama ala funcion
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8030/api/user/${id_usuer}`)
        setUsuario(result.data)
    };

    return (
        <div>
            <form onSubmit={(e) => onSubmit(e)} class=" p-8 rounded shadow-md">
                <label class="block mb-4">
                    <span class="text-white-700">Nombre:</span>
                    <input
                        type={"text"}
                        name="name"
                        class="form-input mt-1 block w-full"
                        value={name}
                        onChange={(e) => onImputChange(e)} />
                </label>

                <label class="block mb-4">
                    <span class="text-white-700">Apellido:</span>
                    <input
                        type={"text"}
                        name="apellido"
                        class="form-input mt-1 block w-full"
                        value={apellido}
                        onChange={(e) => onImputChange(e)} />
                </label>

                <label class="block mb-4">
                    <span class="text-white-700">Email:</span>
                    <input
                        type={"email"}
                        name="email"
                        class="form-input mt-1 block w-full"
                        value={email}
                        onChange={(e) => onImputChange(e)} />
                </label>

                <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">Enviar</button>
                <Link 
                    to='/' 
                    class="btn bg-red-700 text-white py-2 px-4 rounded"
                    >Cancelar
                </Link>
            </form>
        </div>

    )
}
