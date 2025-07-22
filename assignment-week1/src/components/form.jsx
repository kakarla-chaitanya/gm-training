import { useEffect, useState } from "react";

export default function Form({ setData, formRef, data, editIndex, setEditIndex }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    // Load existing data when editing
    useEffect(() => {
        if (editIndex !== null) {
            setFormData(data[editIndex]);
        }
        if (formRef.current) {
            formRef.current.style.visibility = 'hidden';
        }
    }, [editIndex]);

    return (
        <div
            ref={formRef}
            className={`form`}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                formRef.current.style.visibility = 'hidden';
                setEditIndex(null); // Reset edit mode on close
            }}
        >
            <div
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                className="form-content"
            >
                <input
                    type="text"
                    value={formData.name}
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
                <input
                    type="email"
                    value={formData.email}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={formData.department}
                    name="department"
                    placeholder="Department"
                    onChange={handleChange}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (
                            formData.name.trim() === "" ||
                            formData.email.trim() === "" ||
                            formData.department.trim() === ""
                        ) {
                            return;
                        }

                        if (editIndex !== null) {
                            // Update existing entry
                            setData((prev) => {
                                const updated = [...prev];
                                updated[editIndex] = formData;
                                return updated;
                            });
                            setEditIndex(null);
                        } else {
                            // Add new entry
                            setData((prev) => [...prev, formData]);
                        }

                        formRef.current.style.visibility = 'hidden';
                        setFormData({ name: '', email: '', department: '' });
                    }}
                >
                    {editIndex !== null ? "Update" : "Submit"}
                </button>
            </div>
        </div>
    );
}
