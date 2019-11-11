import React, { Component } from 'react';
import NoteForm from './components/NoteForm';
import AllNote from './components/AllNote';


class App extends Component {
render() {
return (
<div className="App">
  <div className="navbar">
    <h2 className="center ">Post your Notes</h2>
    </div>
    <NoteForm />
    <AllNote />
</div>
);
}
}
export default App;