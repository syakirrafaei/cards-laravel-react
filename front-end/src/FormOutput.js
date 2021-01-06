import React from "react";

function FormOutput(props) {
    console.log(props.data);
    const data =
        Object.keys(props.data).length > 0 && props.data !== false ? (
            Object.entries(props.data).map(([key, value]) => {
                return (
                    <div>
                        <div
                            key={key}
                            className="block bg-green-100 my-4 rounded-lg p-1 shadow"
                        >
                            <div className="font-semibold text-lg">
                                Round {key}
                            </div>
                            {Object.entries(value).map(([k, v]) => {
                                return (
                                    <div key={k} className="inline-block mr-3">
                                        {v},
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })
        ) : props.data === false ? (
            <span className="text-red-600">Please input number</span>
        ) : (
            <span>Please fill in the number of players.</span>
        );

    return (
        <>
            <h2 className="text-xl">Output:</h2>
            <div className="block">{data}</div>
        </>
    );
}

export default FormOutput;
