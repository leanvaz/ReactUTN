import React, { useState } from "react"
const TaskForm = () => {

	const addTask = (e) => {
		e.preventDefault()
		const [task]=e.target.elements
		const taskValue = task.value.trim()
		console.log(taskValue)
	}

	return(
		<>
		<h3>Formulario de tareas</h3>
		<form onSubmit={addTask}>
			<input type="text" name='task'  placeholder="comparPan" />
			<br/>
			<button className="mt-5" type="submit">
				enviar
			</button>
			<p>La tarea creada es </p>

		</form>
		</>
	)
}

export default TaskForm