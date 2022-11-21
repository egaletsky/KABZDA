export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

type ActionType = {
    type: string
}

export type StateType = {
    collapsed: boolean
}

export const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            //state.collapsed = !state.collapsed
            return {...state, collapsed:!state.collapsed}
        default:
            throw new Error('bad action type')
    }
}