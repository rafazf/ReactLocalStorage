import React,{useState, useEffect} from 'react';
import './App.css';
import {TaskCreator} from "./components/TaskCreator";
import {TaskTable} from "./components/TaskTable";
import {VisibilityControl} from "./components/VisibilityControl";
import {Container} from "./components/Container";
function App() {
    const [taskItems, setTaskItems] = useState([])
    const [showCompleted, setShowCompleted]=useState(false)

    useEffect(() => {
        let data = localStorage.getItem('tasks')
        if (data){
            setTaskItems(JSON.parse(data))
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(taskItems))
    },[ taskItems ])

    function cretateNewTask(taskName){
        if (!taskItems.find(task=> task.name === taskName)){
            setTaskItems([...taskItems,{name:taskName,done: false}])
        }
    }
    const toggleTask = task => {
        setTaskItems(
            taskItems.map(t => (t.name === task.name) ? {...t, done: !t.done} : t)
        )
    }

    const cleanTask = () =>{
        setTaskItems(taskItems.filter( t => !t.done))
        setShowCompleted(false)
    }
    return (
      <div className="App">
          <Container>
              <TaskCreator cretateNewTask={cretateNewTask}/>
              <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
              <VisibilityControl
                  setShowCompleted={(checked)=>setShowCompleted(checked)}
                  cleanTask={cleanTask}
                  isChecked={showCompleted}
              />
              {
                  showCompleted && (
                      <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
                  )
              }
          </Container>
      </div>
    );
}
export default App;
