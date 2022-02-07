import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="header">
        <div class="logo"> logomonde.png </div>
        <div class="argent"> 10000 $ </div>
        <div>
          {" "}
          <button class="multiplicateur">
            <span>x1 </span>
          </button>{" "}
        </div>
        <div class="idjoueur"> Wass </div>
      </div>
      <div class="main">
        <div> liste des boutons de menu </div>
        <div class="product">
          <div> premier produit </div>
          <div> second produit </div>
          <div> troisième produit </div>
          <div> quatrième produit </div>
          <div> cinquième produit </div>
          <div> sixième produit </div>
        </div>
      </div>
    </div>
  );
  
}

export default App;
