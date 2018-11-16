import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RuleList from './RuleList';
import registerServiceWorker from './registerServiceWorker';
import rules from './data.json'
import 'bootstrap/dist/css/bootstrap.css';


  // j'ai essayé de faire une barre de recherche, elle compile mais ne fonctionne pas: voir les methodes commentées dans RuleList.js

registerServiceWorker();

const reactElement = React.createElement('div', null, 'Hello World');
const domElement = document.getElementById('root');
ReactDOM.render(
  <div>
    <div>


    <form>Search a rule here 
        <input type="text" onChange= {rules.searchHandler}/>

        <RuleList rules={rules}/>

    </form>
      //<input type="radio" name="likes"  />

    </div>
    <div>

    </div>



  </div>,
  domElement);
