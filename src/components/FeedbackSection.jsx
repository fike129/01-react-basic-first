import { useState, useRef } from "react"
import Button from "./Button/Button"
import { use } from "react"

function StateVsRef() {
    const input = useRef()
    const [value, setValue] = useState('')
    const [show, setShow] = useState(false)

    function handleKeyDown(event) {
        if (event.key == 'Enter') {
            setShow(true)
        }
    }


    return (
        <div>
            <h3>Input value: {show && input.current.value}</h3>
            <input ref={input} type="text" value={value} onKeyDown={handleKeyDown} onChange={(e) => setValue(e.target.value)} className="control" />
        </div>
    )
}




export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        hasError: true,
        reason: 'help'
    })
    // const [name, setName] = useState('')
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState('help')

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(name.trim().length == 0)
        setForm(prev => ({... prev, name: event.target.value,
            hasError: event.target.value.trim().length == 0,}))
    }

    // function toggleError(){
    //     // setHasError((prev) => !prev) //false
    //     // setHasError(!hasError) //true
    // }

    return (
        <section>
            <h3>Обратная связь</h3>

            {/* <Button onClick={toggleError}>Toogle Error</Button> */}

            <form style={{marginBottom: '1rem'}}>
                <label htmlFor="name">Ваше имя</label>
                <input type="text" id="name" className="control" value={form.name} style={{ 
                    border: form.hasError ? '1px solid red' : null,}} onChange={handleNameChange}/>

                <label htmlFor="reason">Причина обращения</label>
                <select
                    id="reason"
                    className="control"
                    value={form.reason}
                    onChange={(event) =>
                        setForm((prev) => ({ ...prev, reason: event.target.value }))
                    }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

                <pre>
                    Name: {form.name}
                    <br />
                    Reason: {form.reason}
                </pre>

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>



                
            </form>
            <hr />
            <StateVsRef />
        </section>
    )
}