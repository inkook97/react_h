import React, { createContext, useContext, useReducer } from "react";





function itemReducer(state, action) {
    switch (action.type) {
        case 'CREATE':
            return state.concat(action.todo);

        case 'TOGGLE':
            return state.map(todo =>
                todo.id === action.id ? { ...todo, done: !todo.done } : todo);

        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);

        default:
            throw new Error(`${action.type}이 잘못 전달됨`)
    };
}

const ItemStateContext = createContext();

export function ItemProvider({ children }) {
    const [state, dispatch] = useReducer(itemReducer);

    return (
        <ItemStateContext.Provider value={dispatch}>
            <ItemStateContext.Provider value={state}>
                {children}
            </ItemStateContext.Provider>
        </ItemStateContext.Provider>
    )
}

export function useItemState() {
    const context = useContext(ItemStateContext);
    if (!context) {
        throw new Error('temStateContext를 찾을 수 없음')
    }
    return context;
}
