import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import MainPageHeader from './MainPageHeader/MainPageHeader';
import { TagLine } from '../TagLine/TagLine';
import { Services } from '../Services/Services';
import SolutionsOverview from './SolutionsOverview';
import ServicesOverview from './ServicesOverview';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPageHeader />
        <SolutionsOverview />
        <ServicesOverview />
      </div >
    );
  }

  componentDidMount() {
    

  }
}

export default App;