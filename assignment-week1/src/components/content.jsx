import Card from './card';

export default function Content({ data, onEdit, onDelete }) {
    return (
        <div className="content">
            {Array.isArray(data) && data.length === 0 ? (
                <div className="content-no-body">
                    No Data. Please add a new one.
                </div>
            ) : (
                data.map((x, i) => (
                    <Card
                        key={i}
                        name={x.name}
                        email={x.email}
                        department={x.department}
                        onEdit={() => onEdit(i)}
                        onDelete={() => onDelete(i)}
                    />
                ))
            )}
        </div>
    );
}
