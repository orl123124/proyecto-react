import logo from './logo.svg';
import './App.css';
//import Greeting from './componets/pure/greeting';
//import { GreetingF } from './componets/pure/greetingF';
import { TaskListComponent} from './componets/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        {/*/ import greeting 
        <Greeting  name={"orlando"}></Greeting>
        <GreetingF  name={"orlando Baria"}></GreetingF>
       */}
        <TaskListComponent></TaskListComponent>
         
      </header>
    </div>
  );
}

export default App;
