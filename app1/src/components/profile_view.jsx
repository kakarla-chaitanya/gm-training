import { Outlet, useNavigate, useParams } from "react-router-dom";

export default function ProfileView(){
    const params=useParams();
    const navigate=useNavigate();
    return<div style={{fontSize:20}}>
        <div>Profile View for {params.id}</div>
        <div style={{display:"flex",justifyContent:"space-around",paddingTop:"10px"}}>
        <div onClick={(e)=>{
            e.preventDefault();
            navigate(`/profile_view/${params.id}/`);
        }}>Basic Details</div>
        <div onClick={(e)=>{
            e.preventDefault();
            navigate(`/profile_view/${params.id}/address`);
        }}>Address</div>
        <div onClick={(e)=>{
            e.preventDefault();
            navigate(`/profile_view/${params.id}/other`);
        }}>Other</div>
        </div>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontWeight:"bold",
            height:"100vh"
        }}>
            <Outlet />
        </div>
        
    </div>;
}

function BasicDetails(){
    const params=useParams();
    return <div>
        Basic Details for {params.id}
    </div>;
}

function Address(){
    const params=useParams();
    return <div>
        Address for {params.id}
    </div>;
}

function Other(){
    const params=useParams();
    return <div>
        Other for {params.id}
    </div>;
}
export {BasicDetails,Address,Other};