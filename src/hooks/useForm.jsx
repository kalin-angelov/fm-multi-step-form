import { useState } from "react";

export const useForm = (initialValue) => {
    const [formValue, setFormValue] = useState(initialValue);

    const onFormValueChange = (e) => {
        const name = e.target.name;
        const checked = e.target.checked;

        setFormValue(state => ({...state, [name]: checked}));
    };

    return {
        formValue,
        onFormValueChange
    };
};