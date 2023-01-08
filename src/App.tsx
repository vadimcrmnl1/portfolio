import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main id={'main'}/>
            <Skills id={'skills'}/>
            <Projects id={'projects'}/>
        </div>
    );
}

export default App;
