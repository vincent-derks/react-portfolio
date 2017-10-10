import AppReducer, { initialState } from './../../client/reducers/app'

describe('App reducers', () => {
    
    it('Has a default state', () => {
        expect(AppReducer(undefined, { type: 'nothing' })).toEqual(initialState)
    })

    it('Toggles the menu', () => {
        expect(AppReducer({ menuOpen: false }, {type: 'APP_TOGGLE_MENU'})).toEqual({menuOpen: true})
    })

})