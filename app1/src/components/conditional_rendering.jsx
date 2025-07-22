import { useState } from "react";

export default function ConditionalRendering() {
    const [checked, setChecked] = useState(false);
    return <div>
        <input type="checkbox" width="30px" height="30px" checked={checked} onChange={(e) => {
            setChecked(e.target.checked);
        }} />
        {checked ? "You are Selected" : "You are not Selected"}
    </div>;
} 