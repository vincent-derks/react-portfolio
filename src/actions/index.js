import Data from './../content/vderks.online.js'

export function loadContent(){
    return {
        type: 'LOAD_CONTENT',
        data: Data.content
    }
}

export function toggleMenu(){
    return {
        type: 'APP_TOGGLE_MENU'
    }
}
