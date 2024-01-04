import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Sub } from "../types";


interface FormProps {
    onNewSub: (newSub: Sub) => void
}

export const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]>()

    const focusRef = useRef<HTMLInputElement>(null)

    useEffect(() => focusRef.current?.focus(), [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        }
        )
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} type="number" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} type="text" name="avatar" placeholder="avatar" ref={focusRef}/>
                <textarea onChange={handleChange} name="description" placeholder="description" />
                <button>Save new sub!</button>
            </form>
        </div>
    )
}