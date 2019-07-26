import React,{Component} from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';


  class Avatar extends Component{
      constructor(){
          super();
          this.state={
              name:"Welcome To React Tutorials"
          }
      }
      namechange(){
          this.setState({
            name:"Welcome To ReactJs"
          })
      }
      render(){
        const avatarArray = [
            {
                id:1,
                name:'Ritesh Kumar',
                work:'Software Engginer'
            },
            {
                id:2,
                name:'Nitin Singh',
                work:'Software Engginer'
            },
            {
                id:3,
                name:'Gautam Kumar',
                work:'Software Engginer'
            },
            {
                id:4,
                name:'Nitu',
                work:'Software Engginer'
            },
        ];
    
        const card = avatarArray.map((avatar,i)=>{
            return <Avatarlist key={i} id={avatarArray[i].id} name={avatarArray[i].name} work={avatarArray[i].work}/>
        });
        return <div className='mainpage'>
        <h1>{this.state.name}</h1>
        {card}
        <button onClick = { ()=> this.namechange()}>Click Here</button>
        </div>

      }
  }  

export default Avatar;