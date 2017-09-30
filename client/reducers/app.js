const initialState = {
    menuOpen: false,
    techniqueLogos: {
        'react'         : 'devicons devicons-react',
        'wordpress'     : 'devicons devicons-wordpress',
        'nodejs'        : 'devicons devicons-nodejs_small',
        'php'           : 'devicons devicons-php',
        'symfony'       : 'devicons devicons-symfony_badge',
        'bootstrap'     : 'devicons devicons-bootstrap',
        'javascript'    : 'devicons devicons-javascript_badge',
        'twig'          : 'custom-icon icon-twig',
        'redux'         : 'custom-icon icon-redux'
    }
}

const appReducer = (state = initialState, action) => {
    let newState = {...state}
    switch(action.type){
        case 'APP_TOGGLE_MENU':
            return {
                ...state,
                menuOpen: !state.menuOpen
            }
        default:
            return newState
    }
}

export default appReducer
