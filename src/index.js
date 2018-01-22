import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';

class Main extends React.Component {
  render() {
    return <Header />;
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
