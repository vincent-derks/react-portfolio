const initialState = {
    content: {
        work: [
            {
                title: 'Randstad Intelligence Test',
                text: 'The client wanted us to build an intelligence test. Fast, stable, should work seamless across a broad spectrum of devices and impossible to cheat.',
                logo: 'images/randstad-logo.png',
                techniques: [
                    'symfony',
                    'javascript',
                    'twig'
                ]
            },{
                title: 'Snurk - horizontal living',
                text: 'We created a symfony-based e-commerce platform for our client.',
                logo: 'images/snurk-logo.jpg',
                techniques: [
                    'symfony',
                    'javascript',
                ]
            },{
                title: '0031 FlyFishing',
                text: 'My own personal blog about my biggest hobby: Flyfishing',
                logo: 'images/logo-0031flyfishing.png',
                techniques: [
                    'wordpress',
                    'javascript'
                ]
            }
        ]
    }
}

const contentReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case 'LOAD_CONTENT':
            return {
                ...state
            }
        default:
            return newState
    }
}

export default contentReducer
