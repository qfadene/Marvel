import { useReducer } from 'react';

const useSetState = initialState => {
    return useReducer(
        (previousState, nextState) => {
            return { ...previousState, ...nextState };
        },
        {
            ...initialState,
        },
    );
};

export default useSetState