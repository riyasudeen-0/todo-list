import React, { Component } from 'react'
import "./Todo.css";
export default class Todo extends Component {
  state={
    input:"",
    items:[

    ]

    
  };
  HandleChange = event =>{
    this.setState({
      input:event.target.value
    });
    
    
  };
  StoreItems = event => {
    event.preventDefault(); 
    const {input}= this.state;
    
    this.setState({
     items: [...this.state.items,input],
     input:""
    });
  
  };
  deleteItem = key =>{
    const allItems=this.state.items;
    allItems.splice(key,1);
    this.setState({
      items:allItems
    })
  } ;
  ChangItem = ind =>{
    const ItemToEdit=this.state.items[ind];
    const UpdatedItem=[...this.state.items];
    UpdatedItem.splice(ind,1);
    this.setState({
      input:ItemToEdit,
      items:UpdatedItem
    });
  };
  
  render() {
    const {input,items} = this.state;
    
    return (
      <div className=" todo-container">
        
        <form className="input-section" onSubmit={this.StoreItems}>
        <h1>Todo App</h1>
            <input type='text' placeholder='enter items...'value={input} onChange={this.HandleChange}/>
           

        </form>
        <ul>
            {items.map((data,index) => (
              <li key={index}>
                
                {data}<i id='icon1'  className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
                    <i  id="icon2" className="fa-solid fa-pen-to-square"onClick={()=>this.ChangItem(index)}> </i>
                
              </li>
              
            ))}
            
        </ul>
      </div>
    )
  }
}
