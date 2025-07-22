import { useParams } from "react-router-dom";

export default function Profile(){
    const params=useParams();
    return <div style={{
        fontSize:30,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
    }}>Profile for {params.id}</div>;
}