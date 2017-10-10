import ContentReducer, { initialState } from './../../client/reducers/content'

describe('Content reducers', () => {
    
    it('Has a default state', () => {
        expect(ContentReducer(undefined, { type: 'nothing' })).toEqual(initialState)
    })

    it('Loads the content', () => {
        expect(ContentReducer({ content: null }, {type: 'LOAD_CONTENT', data: 'test'})).toEqual({content: 'test'})
    })

})