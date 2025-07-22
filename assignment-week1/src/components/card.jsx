export default function Card({ name, email, department, onEdit, onDelete }) {
    return (
        <div className="card">
            <div>Name :- {name}</div>
            <div>Department :- {department}</div>
            <div>Email :- {email}</div>
            <div className="card-buttons">
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}
