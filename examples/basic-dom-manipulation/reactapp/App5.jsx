import React from 'react';

class App5 extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = "Adding Another Item. "
      var myArray = this.state.data;
      myArray.push(item)
      this.forceUpdate({data: myArray})
   };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App5;