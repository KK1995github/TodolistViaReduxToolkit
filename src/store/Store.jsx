import { configureStore } from "@reduxjs/toolkit";

import { TodoSlice } from "../features/todo/TodoSlice";


const store = configureStore({
    reducer: TodoSlice.reducer
})

export default store