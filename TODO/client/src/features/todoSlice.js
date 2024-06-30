// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const baseURL = "http://localhost:5000/api/";

// const initialState = {
//   todos: [],
//   addTodoStatus: "",
//   addTodoError: "",
//   getTodosStatus: "",
//   getTodosError: "",
//   deleteTodoStatus: "",
//   deleteTodoError: "",
//   updateTodoStatus: "",
//   updateTodoError: "",
// };

// export const todosAdd = createAsyncThunk(
//   "todos/todosAdd",
//   async (todo, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(baseURL + "todos", todo);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

// export const getTodos = createAsyncThunk(
//   "todos/getTodos",
//   async (id = null, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(baseURL + "todos");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

// export const deleteTodo = createAsyncThunk(
//   "todos/deleteTodo",
//   async (id, { rejectWithValue }) => {
//     try {
//       const response = await axios.delete(baseURL + "todos/" + id);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

// export const updateTodo = createAsyncThunk(
//   "todos/updateTodo",
//   async (todo, { rejectWithValue }) => {
//     try {
//       const { _id, task, author, isComplete, date, uid } = todo;

//       const response = await axios.put(baseURL + "todos/" + _id, {
//         task,
//         author,
//         isComplete,
//         date,
//         uid,
//       });
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response?.data);
//     }
//   }
// );

// const todosSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [todosAdd.pending]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "pending",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [todosAdd.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         todos: [action.payload, ...state.todos],
//         addTodoStatus: "success",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [todosAdd.rejected]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "rejected",
//         addTodoError: action.payload,
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [getTodos.pending]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "pending",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [getTodos.fulfilled]: (state, action) => {
//       return {
//         ...state,
//         todos: action.payload,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "success",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [getTodos.rejected]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "rejected",
//         getTodosError: action.payload,
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [deleteTodo.pending]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "pending",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [deleteTodo.fulfilled]: (state, action) => {
//       const currentTodos = state.todos.filter(
//         (todo) => todo._id !== action.payload._id
//       );
//       return {
//         ...state,
//         todos: currentTodos,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "success",
//         deleteTodoError: "",
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [deleteTodo.rejected]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "rejected",
//         deleteTodoError: action.payload,
//         updateTodoStatus: "",
//         updateTodoError: "",
//       };
//     },
//     [updateTodo.pending]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "pending",
//         updateTodoError: "",
//       };
//     },
//     [updateTodo.fulfilled]: (state, action) => {
//       const updatedTodos = state.todos.map((todo) =>
//         todo._id === action.payload._id ? action.payload : todo
//       );
//       return {
//         ...state,
//         todos: updatedTodos,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "success",
//         updateTodoError: "",
//       };
//     },
//     [updateTodo.rejected]: (state, action) => {
//       return {
//         ...state,
//         addTodoStatus: "",
//         addTodoError: "",
//         getTodosStatus: "",
//         getTodosError: "",
//         deleteTodoStatus: "",
//         deleteTodoError: "",
//         updateTodoStatus: "rejected",
//         updateTodoError: action.payload,
//       };
//     },
//   },
// });

// export default todosSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for your API
const baseURL = 'https://todo-f-b.onrender.com/api/';

// Define initialState for your todo slice
const initialState = {
  todos: [],
  addTodoStatus: '',
  addTodoError: '',
  getTodosStatus: '',
  getTodosError: '',
  deleteTodoStatus: '',
  deleteTodoError: '',
  updateTodoStatus: '',
  updateTodoError: '',
};

// Create async thunk for todosAdd
export const todosAdd = createAsyncThunk(
  'todos/todosAdd',
  async (todo, { rejectWithValue }) => {
    // Add your API call to add a new todo
    try {
      const response = await axios.post(baseURL + 'todos', todo);
      return response.data;
    } catch (error) {
      console.log('todosAdd', error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Create async thunk for getTodos
export const getTodos = createAsyncThunk(
  'todos/getTodos',
  async (id = null, { rejectWithValue }) => {
    // Add your API call to get todos
    try {
      const response = await axios.get(baseURL + 'todos', id);
      return response.data;
    } catch (error) {
      console.log('getTodos', error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Create async thunk for deleteTodo
export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, { rejectWithValue }) => {
    // Add your API call to delete a todo
    try {
      const response = await axios.delete(baseURL + 'todos/' + id);
      return response.data;
    } catch (error) {
      console.log('deleteTodo', error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Create async thunk for updateTodo
export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async (todo, { rejectWithValue }) => {
    // Add your API call to update a todo
    try {
      const { _id, task, author, isComplete, date, uid } = todo;
      const response = await axios.put(baseURL + 'todos/' + _id, {
        task,
        author,
        isComplete,
        date,
        uid,
      });
      return response.data;
    } catch (error) {
      console.log('updateTodo', error);
      return rejectWithValue(error.response?.data);
    }
  }
);

// Create todoSlice
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  // Define extraReducers for each case
  extraReducers: (builder) => {
    builder
      // AddTodo
      .addCase(todosAdd.pending, (state, action) => {
        state.addTodoStatus = 'pending';
        state.addTodoError = '';
      })
      .addCase(todosAdd.fulfilled, (state, action) => {
        state.addTodoStatus = 'success';
        state.addTodoError = '';
        state.todos.unshift(action.payload);
      })
      .addCase(todosAdd.rejected, (state, action) => {
        state.addTodoStatus = 'rejected';
        state.addTodoError = action.payload;
      })
      // GetTodos
     .addCase(getTodos.pending, (state, action) => {
        state.getTodosStatus = 'pending';
        state.getTodosError = '';
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.getTodosStatus = 'success';
        state.getTodosError = '';
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.getTodosStatus = 'rejected';
        state.getTodosError = action.payload;
      })
      // DeleteTodo
      .addCase(deleteTodo.pending, (state, action) => {
        state.deleteTodoStatus = 'pending';
        state.deleteTodoError = '';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.deleteTodoStatus = 'success';
        state.deleteTodoError = '';
        state.todos = state.todos.filter(
          (todo) => todo._id !== action.payload._id
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.deleteTodoStatus = 'rejected';
        state.deleteTodoError = action.payload;
      })
      // UpdateTodo
      .addCase(updateTodo.pending, (state, action) => {
        state.updateTodoStatus = 'pending';
        state.updateTodoError = '';
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.updateTodoStatus = 'success';
        state.updateTodoError = '';
        const updatedTodos = state.todos.map((todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
        state.todos = updatedTodos;
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.updateTodoStatus= 'rejected';
        state.updateTodoError = action.payload;
      });
  },
});

// Export reducer
export default todosSlice.reducer;
