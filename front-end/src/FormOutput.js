import React from "react";

function FormOutput(props) {
    console.log(props.data);

    const data =
        Object.keys(props.data).length > 0 ? (
            Object.entries(props.data).map(([key, value]) => {
                return (
                    <div>
                        <div className="mt-10 font-semibold text-lg">
                            Round {key}
                        </div>
                        <div key={key} className="block bg-green-100 my-4">
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
        ) : (
            <span>Please input the number of players.</span>
        );

    return (
        <>
            <h2 className="text-xl">Output:</h2>
            <div className="block">{data}</div>
        </>
    );
}

export default FormOutput;
