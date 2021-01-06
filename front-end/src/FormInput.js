import React from "react";
import api from "./api";

import { useState } from "react";

const FormInput = (props) => {
    const [values, setValues] = useState({
        players: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await api.get(`/start/${values.players}`);
        props.onchange(res.data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="players"
                    value={values.players}
                    onChange={handleChange}
                    className="w-full xl:w-1/4 py-2 px-3 bg-gray-100 rounded shadow border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Please input the number of players"
                    required
                />
                <button
                    type="submit"
                    className="block mx-auto bg-green-500 px-6 py-2 font-semibold rounded shadow-lg text-white my-10 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                >
                    Start
                </button>
            </form>
        </div>
    );
};

export default FormInput;
