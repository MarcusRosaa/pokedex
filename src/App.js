import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  class HelloMessage extends React.Component {
    render() {
      return (
        <div>
          Hello {this.props.name}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('hello-example')
  );
}

export default App;
