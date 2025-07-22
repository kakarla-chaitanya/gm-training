import { useNavigate } from "react-router-dom";

export default function Header(){
    const navigate=useNavigate();
    return <div>
        <div className="flex">
            <div style={{fontWeight:700,fontSize:25}} onClick={(_)=>{
                navigate("/");
            }}>Asha</div>
            <div className="header-flex-ending">
                <div className="notify" onClick={(_)=>{
                    navigate("/profile/undefined")
                }}>N</div>
                <div className="profile"onClick={(_)=>{
                    navigate("/profile_view/undefined")
                }}>A</div>
            </div>
        </div>
    </div>;
}