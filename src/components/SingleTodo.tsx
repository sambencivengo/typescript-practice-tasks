import { Todo } from '../model';

const editIcon = '✏️';
const deleteIcon = '🗑';
const completeIcon = '✓';

type Props = {
	todo: Todo; // The model Todo is the type
	todos: Todo[]; // Array of our model Todo
	setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, todos, setTodos }: Props) {
	return (
		<div>
			<form className="todos_single">
				<span className="todos_single--text">{todo.todo}</span>
			</form>
		</div>
	);
}

export default SingleTodo;
