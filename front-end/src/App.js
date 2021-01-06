import Form from "./Form";

function App() {
    return (
        <>
            <div className="container mx-auto py-10">
                <div className="flex flex-row flex-wrap">
                    <div className="w-full mb-20">
                        <h1 className="text-2xl text-center font-bold">
                            Card Game
                        </h1>
                    </div>
                    <div className="w-full text-center">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
