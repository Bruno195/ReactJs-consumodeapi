

export default function PostCard(props){
  //catch post directly inside of props
    return (
     
        <div className='post'>
        <img src={props.cover} alt={props.title} ></img>
        <div className='post-content'>

          <h2>{props.title} {props.id}</h2>
          <p>{props.body}</p>
      
        </div>
      </div>  
    
    )

}