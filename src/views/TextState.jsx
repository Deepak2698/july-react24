import React from 'react';

class  TextState extends React.Component{
    constructor(){
      super();
      this.state = {
        text: "Welcome participants",
        session: "Students enrolled for the course"
      }    
    }

   changeText(event){
      this.setState ( {text: "This is a React session",session:"Students are Learning"} );
    }

   render(){
     return (
       <div>
          <h1>{this.state.text}</h1>
          <h2>{this.state.session}</h2>
          <button onClick={(event) => this.changeText(event)}>Next</button>
       </div>
     );
   }
};

export default TextState;