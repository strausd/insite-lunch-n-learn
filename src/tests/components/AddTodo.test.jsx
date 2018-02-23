import React from 'react';
import { shallow, mount } from 'enzyme';

import { AddTodo } from '../../components/AddTodo';
import { todos } from '../mockdata/todos';


let wrapper, addTodoSpy;

beforeAll(() => {
    addTodoSpy = jest.fn();
    wrapper = shallow(<AddTodo addTodo={ addTodoSpy } />);
});

test('should render AddTodo component properly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should submit form with input value for new todo item', () => {
    const mounted_wrapper = mount(<AddTodo addTodo={addTodoSpy} />);
    const new_value = 'ksjdhgkjsh';
    mounted_wrapper.find('input').at(0).instance().value = new_value;
    mounted_wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(addTodoSpy).toHaveBeenLastCalledWith(new_value);
});
