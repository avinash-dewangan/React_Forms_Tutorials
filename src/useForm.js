import { useState } from 'react'
//import validateInfo from '../validation/validateInfo'

function useForm(validateInfo, objectOfValues) {
    const [values, setValues] = useState(objectOfValues)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validateInfo(values))
        setIsSubmit(true);
    }
    return { handleChange, values, handleSubmit, isSubmit ,errors }
}

export default useForm;