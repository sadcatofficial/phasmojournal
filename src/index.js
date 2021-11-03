import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EvidenceContext from './context';
import ChosenIdContext from './ChosenIdContext'


function Main() {
  let [chosenId, changeChosenId] = useState(0);
  let [evidences, changeEvidences] = useState([
    {
      id: 1,
      name: "D.O.T.S Projector",
      state: 0,
      className: "evidence"
    },
    {
      id: 2,
      name: "EMF Level 5",
      state: 0,
      className: "evidence"
    },
    {
      id: 3,
      name: "Fingerprints",
      state: 0,
      className: "evidence"
    },
    {
      id: 4,
      name: "Freezing Temperatures",
      state: 0,
      className: "evidence"
    },
    {
      id: 5,
      name: "Ghost Orb",
      state: 0,
      className: "evidence"
    },
    {
      id: 6,
      name: "Ghost Writing",
      state: 0,
      className: "evidence"
    },
    {
      id: 7,
      name: "Spirit Box",
      state: 0,
      className: "evidence"
    },
  ]);

  return(
    <EvidenceContext.Provider value = {{evidences, changeEvidences}}>
    <ChosenIdContext.Provider value = {{chosenId, changeChosenId}}>
    <App /> 
    </ChosenIdContext.Provider>
    </EvidenceContext.Provider>
  )
}
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
