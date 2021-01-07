import React from "react";

function FormOutput(props) {
  const data =
    Object.keys(props.data).length > 0 && props.data !== false ? (
      Object.entries(props.data).map(([key, value]) => {
        return (
          <div key={key}>
            <div className="block bg-green-100 my-4 rounded-lg p-1 shadow">
              <div className="font-semibold text-lg mt-1 mb-4">Round {key}</div>
              {Object.entries(value).map(([k, v]) => {
                return (
                  <div key={k} className="inline-block mr-3">
                    <span className="font-semibold text-sm">
                      Player {++k} :
                    </span>
                    <span className="px-2 rounded-full bg-green-200 text-green-700 text-center">
                      {v}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })
    ) : props.data === false ? (
      <span className="text-red-600">
        Please input a number between 1 - 9999
      </span>
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
