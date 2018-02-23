import React from 'react';
import { shallow } from 'enzyme';

import TodoItemConnected, { TodoItem } from '../../components/TodoItem';
import { todos } from '../mockdata/todos';


let wrapper, deleteTodoSpy, toggleCompletedSpy;

beforeAll(() => {
    deleteTodoSpy = jest.fn();
    toggleCompletedSpy = jest.fn();
    wrapper = shallow(<TodoItem todo={todos[0]} deleteTodo={deleteTodoSpy} toggleCompleted={toggleCompletedSpy}/>);
});

test('should render TodoItem component properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call handleDeleteTodo on delete button click', () => {
    wrapper.find('button').at(0).simulate('click');
    expect(deleteTodoSpy).toHaveBeenLastCalledWith(todos[0].id);
});

test('should call handleToggleComplete on toggle complete button click', () => {
    wrapper.find('button').at(1).simulate('click');
    expect(toggleCompletedSpy).toHaveBeenLastCalledWith(todos[0].id);
});

test('should have not-complete class on todo paragraph tag', () => {
    expect(wrapper.find('p').hasClass('not-complete')).toEqual(true);
    expect(wrapper.find('p').html().includes('- Not Complete -')).toEqual(true);
});

test('should have complete class on todo paragraph tag', () => {
    const newWrapper = shallow(<TodoItem todo={todos[1]} deleteTodo={deleteTodoSpy} toggleCompleted={toggleCompletedSpy} />);
    expect(newWrapper.find('p').hasClass('complete')).toEqual(true);
    expect(newWrapper.find('p').html().includes('- Completed -')).toEqual(true);
});