import { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { Sub } from "../types";
import { useNewForm } from "../hooks/useNewSubForm";


interface FormProps {
    onNewSub: (newSub: Sub) => void
}

export const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, dispatch] = useNewForm()

    const focusRef = useRef<HTMLInputElement>(null)

    useEffect(() => focusRef.current?.focus(), [])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        dispatch({ type: "clear" })
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="nick" placeholder="nick" />
                <input onChange={handleChange} type="number" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} type="text" name="avatar" placeholder="avatar" ref={focusRef} />
                <textarea onChange={handleChange} name="description" placeholder="description" />
                <button>Save new sub!</button>
            </form>
        </div>
    )
}