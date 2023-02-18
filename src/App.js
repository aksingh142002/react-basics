
import './App.css';
import { Employ } from './Employ';
const name = "Akash";

function App() {
  return (
    <div className="App">
      <Employ salary ="20000" position ="Junior intern" company ="AR Tech" />
      <Employ salary ="80000" position ="Junior developer" company ="AR Tech" />
      <Employ salary ="100000" position ="Senior developer" company ="AR Tech" />
    </div>
  );
}

export default App;
