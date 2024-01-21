import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUsuario() { // los nombres de los componentes en react deben inicar con mayuscula

    let navigate=useNavigate()

    // se coloca en un array los objetos que se guardaran del formulario 
    const [usuario, setUsuario] = useState({
        name: "",
        apellido: "",
        email: ""
    })

    // variable con los nombres que van en los name dle form
    const { name, apellido, email } = usuario

    const onImputChange = (e) => {
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }

    // submit del form
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8030/usuario", usuario) // ulr del back end imsonia se coloca el local host de Spring probado en imsonia
        navigate("/") // ruta o name de la ruta a la cual quiero que se dirija despues del POST o submit 
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
                <Link to='/' class="btn bg-red-700 text-white py-2 px-4 rounded">Cancelar</Link>
            </form>
        </div>

    )
}
