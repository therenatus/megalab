import './App.css';

function App() {
  let tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
  return (
    <ol id="todo-list">
      {
        tasks.map((element, i) => {
          return <li className="task" key={`${element}-${i}`}>{element}</li>
        })
      }
    </ol>
  );
}

export default App;
