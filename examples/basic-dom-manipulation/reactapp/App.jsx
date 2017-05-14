
import React from 'react';

class App extends React.Component {
   render() { 
               var i = 20;
               var mystyleSample = {
                  fontSize : 30,
                  color:'#FF0000'
               }

      return (
         
         <div>
         	<div>Hello world</div>
            <h1>Header</h1>
            <h2>Content</h2>

            <p data-myattr="myattr"> element</p>

            {/* using expression*/}
            <h1> {1+1} </h1>

            {/* using CSS styling from render function */}
            <p style = {mystyleSample}> This is mystyleSample content!!!</p>
            
            {/* using var from render function */}
            <p> { i == 20 ? 'BoolTrue' : 'BoolFalse'}</p>

            <Test1/>
            <Test2/>

         </div>
      );
   }
}

class Test1 extends React.Component {
   render() {
      return (
         <div>
            <h1>A testing header</h1>
         </div>
      );
   }
}

class Test2 extends React.Component {
   render() {
      return (
         <div>
            <h2>Some content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default App;