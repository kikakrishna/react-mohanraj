import { useState } from "react"

// first approch
function NameInput({ value, onChange }) {
    return (
        <div>
            <label>Name:</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
}


export function InputCheck({ value }) {

    // -----------------------------------------------
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        // Add other fields here
    });

    // first approch
    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            [fieldName]: value,
        });

        console.log(formData);
    };
    // --------------------Second approch------------------------------------------

    const [state, setstate] = useState('')
    const handleInputChange = (e) => {

        console.log(e.target.value);

        setstate(e.target.value)
        console.log(state);
    }

    // -------------------Third approach-------------------------------------

    const [inputValue, setInputValue] = useState("");

    // Event handler for input field changes
    const handleInputChangesecond = (e) => {
        setInputValue(e.target.value);

        console.log(inputValue);
    };


    // ------------------------------------------------------------
    return (
        <div>

            {/* first approch */}
            <NameInput value={formData.name} onChange={(value) => handleChange('name', value)} />


            {/* ---------------------------Second approach------------------------------------ */}
            <input type="text" onChange={handleInputChange} />

            {/* ----------------------third approach------------------------------------ */}

            <h2>Simple Input Example</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChangesecond}
                placeholder="Type something..."
            />
        </div>
    )


}

