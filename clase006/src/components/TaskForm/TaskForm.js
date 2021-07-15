import { useForm } from "react-hook-form";

const TaskForm = ({ addTask }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const createTask = (task) => {
		console.log(task);
	};

	return (
		<>
			<h2>Formulario de tareas</h2>
			<form onSubmit={handleSubmit(createTask)}>
				<div>
					<input
						type="text"
						placeholder="Tarea"
						{...register("task", { required: true })}
					/>
					{errors.task && <span>La tarea es obligatoria</span>}
				</div>
				<div>
					<input
						type="text"
						placeholder="Tarea"
						{...register("description", { required: true })}
					/>
					{errors.description && <span>La description es obligatoria</span>}
				</div>
				<button type="submit">Agregar Tarea</button>
			</form>
		</>
	);
};

export default TaskForm;
