import Expenses from "./components/Expenses";
import expenses from "./data";

function App()
{

    return (
        <div>
            <Expenses items={expenses}/>
        </div>
    );
}

export default App;
