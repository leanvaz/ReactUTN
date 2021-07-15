import { DELETE_TASK, GET_TASK, SET_TASK, UPDATE_TASK } from "../actions/tasks";

export const initialState = {
	tasks: [],
	selectedTask: {},
	owner: {},
};

export const tasksReducer = (state, action) => {
	switch (action.type) {
		case GET_TASK: {
			const selectedTask = state.task.find(
				(task) => task.id === action.payload.id
			);
			return {
				...state,
				selectedTask,
			};
		}
		case DELETE_TASK: {
			const tasks = state.tasks.filter((task) => task.id !== action.payload.id);

			return {
				...state,
				tasks,
			};
		}
		case SET_TASK: {
			return {
				...state,
				tasks: [action.payload.task, ...state.tasks],
			};
		}
		case UPDATE_TASK: {
		}
		default:
			return state;
	}
};
