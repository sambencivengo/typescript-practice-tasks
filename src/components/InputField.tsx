import React, { useRef } from 'react';
import './styles.css';

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form
			className="input"
			onSubmit={(e) => {
				inputRef.current?.blur();
				handleAdd(e);
			}}
		>
			<input
				ref={inputRef}
				type="input"
				placeholder="Enter a task"
				className="input_box"
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<button className="input_submit" type="submit">
				Submit
			</button>
		</form>
	);
}

export default InputField;
