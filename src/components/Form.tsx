import { useReducer } from "react"
import { Sub } from "../types"
import useNewSubForm from "../hooks/useNewSubForm"


interface FromProps{
    onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FromProps) => {
    //const [inputValues, setInputValues] = useState<FromState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = evt.target
        dispatch({
            type: "change_value",
            payload:{
                inputName: name,
                inputValue: value
            }
        })
        
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }


    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="username" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name="subMonths" placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar URL" />
                <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
                <input onChange={handleChange} value={inputValues.money} type="number" name="money" placeholder="money" />
                <button onClick={handleClear} type="button">Clear the form</button>
                <button type="submit">Save new sub!</button>

            </form>
        </div>

    )
}

export default Form


