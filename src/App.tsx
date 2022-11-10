import React, { useState } from 'react';
import InputEnter from './components/InputEnter';
import Todo from './components/Todo';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [currentString, setCurrentString] = useState('');

  const onHandlerInput = (e: string): void => {
    if (e.trim().length < 1) {
      return;
    }
    setTasks([...tasks, e]);
    setCurrentString('');
  };

  const onDeleteTask = (id: number): void => {
    const currentTask = tasks.filter((task, index) => index !== id);
    setTasks(currentTask);
  };

  const onChangeTask = (id: number, text: string): void => {
    const current = tasks;
    current[id] = text;
    setTasks([...current]);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <main className="todo">
          <h1>
            Solm<span>ToDo</span>
          </h1>
          <section className="todo__header">
            <InputEnter
              currentString={currentString}
              onHandlerInput={onHandlerInput}
              setCurrentString={setCurrentString}
            />
          </section>
          <section className="todo__body">
            {tasks.map((task, id) => (
              <Todo
                index={id}
                onChangeTask={onChangeTask}
                onDeleteTask={onDeleteTask}
                key={id}
                task={task}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
