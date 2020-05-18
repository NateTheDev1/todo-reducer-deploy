import moment from "moment";
moment().format();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD-TODO":
      return {
        todos: [
          ...state.todos,
          {
            item: action.title,
            completed: false,
            id: new Date(),
            finishedAt: null,
            tags: action.tags !== null ? action.tags : null,
          },
        ],
      };
    case "TOGGLE-TODO":
      return {
        ...state,
        todos: state.todos.map((todo, idx) =>
          idx === action.idx
            ? {
                ...todo,
                completed: !todo.completed,
                finishedAt: !todo.completed ? moment().calendar() : null,
              }
            : todo
        ),
      };
    case "CLEAR-COMPLETE":
      return {
        ...state,
        todos: state.todos.filter((todo) => {
          return todo.completed !== true;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589,
      finishedAt: null,
      tags: ["incomplete", "urgent"],
    },
  ],
};

export { todoReducer, initialState };
