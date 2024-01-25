import { useState } from "react"
import { Button } from "./Button"

import axios from 'axios'

interface ITask {
    id: string
    title: string
}

export const Tasks = () => {
    const [tasks, setTasks] = useState<Array<ITask>>([])

    const handleClick = async () => {
        const { data } = await axios.get<Array<ITask>>('https://jsonplaceholder.typicode.com/todos?_limit=10')

        setTasks(data)
    }

    return (
        <>
            <h1>Tasks from API</h1>
            <Button onClick={handleClick}>Get Tasks From API</Button>
            {tasks.map(task => <p key={task.id}>{task.title}</p>)}
        </>
    )
}