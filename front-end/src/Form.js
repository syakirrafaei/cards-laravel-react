import React from "react";
import FormInput from "./FormInput";
import FormOutput from "./FormOutput";
import { useState } from "react";

const Form = () => {
    const [value, setValue] = useState("");
    const onchange = (data) => {
        setValue(data);
        // console.log("Form>", data);
    };

    return (
        <div>
            <FormInput
                data={value}
                onchange={(e) => {
                    onchange(e);
                }}
            />
            <FormOutput data={value} />
        </div>
    );
};

export default Form;
