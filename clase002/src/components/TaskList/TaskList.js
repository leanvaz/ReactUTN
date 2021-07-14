const TaskList=({tasks}) => {
	return(
		<>
		{tasks.map((task)=>(
		<p key={task.id}>{task.id} - {task.name}</p>
		))}
		</>
	)
}

export default TaskList