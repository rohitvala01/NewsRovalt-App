import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/general" element={<News pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/business" element={<News pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>


        

        </Router>
      </div>
    );
  }
}
