import { useEffect, useState, useCallback } from 'react'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import useInput from './hooks/useInput'

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
            setLoading(false)
    }, [])


    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])


    return (
        <section>
            <h3>Effects</h3>

        <Button style={{marginBottom: '1rem'}} onClick={() => setModal(true)}>Открыть информацию</Button>

        <Modal open={modal}>
            <h3>Hello from Modal</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eius autem doloremque, quidem aliquid quam tempora laborum eos incidunt unde corrupti sint nihil eligendi tenetur, eum, quibusdam vero nostrum. Natus.</p>
            <Button onClick={() => setModal(false)}>Close modal</Button>
        </Modal>

        { loading && <p>Loading ...</p> }

        {!loading && ( 
            <>
                <input type="text" className='control' { ... input} />
            <ul>
                {users.filter (user => user.name.toLowerCase().includes(input.value.toLowerCase())).map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
                </ul>
            </>
        )}
        </section>
    )
}