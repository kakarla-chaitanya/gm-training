export default function Card(props){
    return (<div className="card">
        <div style={{display:"flex",gap:"2px",justifyContent:'center',alignItems:'center'}}>
            You have Selected 
            <div  style={{
                fontSize:20,
                fontWeight:700,
            }}>{props.name}</div>
        </div>
        {props.url!==""&& <img  src={props.url} alt={props.name}/>}
    </div>);
}