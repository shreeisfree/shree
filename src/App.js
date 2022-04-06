
import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>my todo</h1>
      <Todo text='walk'/>
      <Todo text='talk'/>
      <Todo text='run'/>
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
