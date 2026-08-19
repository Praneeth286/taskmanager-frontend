import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect, vi} from 'vitest';
import AddTaskForm from './AddTaskForm';
describe('AddTaskForm',() =>{
    it('shows an error when submitting an empty task',()=>{
        const mockOnAdd = vi.fn();
        render(<AddTaskForm onAdd={mockOnAdd}/>);
        const button = screen.getByText('Add Task');
        fireEvent.click(button);
        expect(screen.getByText('Task title cannot be empty')).toBeInTheDocument();
        expect(mockOnAdd).not.toHaveBeenCalled();
    });
it('calls onAdd with the typed title when valid', () => {
    const mockOnAdd = vi.fn();
    render(<AddTaskForm onAdd={mockOnAdd} />);

    const input = screen.getByPlaceholderText('Enter a task');
    fireEvent.change(input, { target: { value: 'Buy groceries' } });

    const button = screen.getByText('Add Task');
    fireEvent.click(button);

    expect(mockOnAdd).toHaveBeenCalledWith('Buy groceries');
  });
});