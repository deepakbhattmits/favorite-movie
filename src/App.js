import React, { Component } from 'react';
import './App.css';
import FromPage from './FromPage';
import RenderPage from './RenderPage';

class App extends Component {
  state={
    fields : {},
    dataArr: [],
  }
  handleChange = ( e ) => {
    let fields = this.state.fields;
    // console.log('change in ',e.target.name)
    fields[e.target.name] = e.target.value;
    this.setState({
        fields: {...this.state.fields,[e.target.name]: e.target.value }
    });   
  } 
  handleSubmit = ( e ) => {
    e.preventDefault();
    const dataArr = this.state.fields;
    this.setState({ dataArr: [...this.state.dataArr, dataArr ] })
  }
  render () {
    return (
      <div className='main ui container'>
        <div className='ui row'>
          <FromPage 
            handleChange= { this.handleChange }
            handleSubmit= { this.handleSubmit }
          />
        </div>
        <div className='ui row'>
          <RenderPage 
            data = { this.state.dataArr }
          />
        </div>

      </div>
    );
  }
}

export default App;
