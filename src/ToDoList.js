const ToDoList = (props) => {
  
    return (
        <>
        <div className="todo_style">
       <i className='fas fa-trash' id="toggle" 
       style={{color:"rgb(144, 58, 224)",
       cursor: "pointer", 
       margin: "0 15px 5px 15px"}}
       onClick={()=>
            {props.handleDelete(props.id);
        }}/>
        <li key="id">{props.text}</li>
        </div>
        </>
     );
}
 
export default ToDoList;