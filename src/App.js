import logo from './logo.svg';
import './App.css';

const promiseObj = {};



const handlePromise = () => {
  promiseObj.promise = new Promise((resolve, rejecet) => {
    promiseObj.resolve = resolve;
    promiseObj.rejecet = rejecet;
  });

  setTimeout(() => {
    alert(promiseObj.resolve);
    promiseObj.resolve("handlePromise --- resolve");
  }, 3000);
  promiseObj.promise.then(res => console.log("promise.then --- res: ", res));
};


function App() {

  return (
    <div className="App">
      <h1>Promise Object</h1>
      <button onClick={handlePromise}>Trigger Promise</button>
    </div>
  );
}

export default App;
