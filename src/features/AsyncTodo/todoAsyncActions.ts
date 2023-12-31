/* eslint-disable import/no-cycle */

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Todo } from 'types';
import { TodoSlice } from './asyncTodoSlice';

export const fetchAllTodos = createAsyncThunk<
Todo[],
undefined,
{ state: { asyncTodos: TodoSlice } }
>(
  'todos/fetchTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    // const fetchedTodos = response.json();
    // return fetchedTodos;
    return (await response.json()) as Todo[];
  },
  {
    condition: (_, { getState }) => {
      const { status } = getState().asyncTodos;

      if (status === 'loading') {
        return false;
      }
      return true;
    },
  },
);

/*

condition сверху нужен для того, чтобы в DevTools -> Redux
функция не вызывалась дважды
*/

export const createTodo = createAsyncThunk<
Todo,
string
>(
  'todos/createTodo',
  async (text: string) => {
    const newTodo: Required<Omit<Todo, 'id'>> = {
      title: text,
      userId: 1,
      completed: false,
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    return (await response.json()) as Todo;
  },
);

export const removeTodo = createAsyncThunk<
Todo['id'],
Todo['id'],
{ rejectValue: string }
>(
  'todos/removeTodo',
  async (id, { rejectWithValue }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      return rejectWithValue(`Impossible to delete todo with id ${id}`);
    }
    return id;
  },
);

export const toggleTodo = createAsyncThunk<
Todo,
Todo['id'],
{ state: { asyncTodos: TodoSlice }, rejectValue: string }
>(
  'todos/toggleTodo',
  async (id, { getState, rejectWithValue }) => {
    const todo = getState().asyncTodos.list.find((el) => el.id !== id);

    if (todo) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...todo,
          complited: !todo.completed,
        }),
      });

      if (!response.ok) {
        return rejectWithValue(`Impossible to update todo with id ${id}`);
      }
      const updatedTodo = await response.json();
      return updatedTodo;
    }

    return rejectWithValue(`No such todo with id ${id}`);
  },
);
