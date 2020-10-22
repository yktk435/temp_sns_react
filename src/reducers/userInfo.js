const initialState = {
    user: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false,
        auth: false,
    },
    otherUser: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false
    }

};


export default (state = initialState, action) => {


    switch (action.type) {
        case 'GET_USERINFO':
            return action.payload.error
                ? {
                    ...state,
                    user: { error: true, auth: false }
                }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    user: {
                        ...action.payload.response,
                        error: false,
                        auth: true,
                    },
                };
            
        case 'GET_OTHER_USERINFO':
            return action.payload.error
                ? {
                    ...state,
                    otherUser: { error: true }
                }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    otherUser: {
                        ...action.payload.response,
                        error: false,
                    },
                };
            
        case 'LOGIN_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj:action.payload.errorObj,
                    error: true
                }
            }
            
        case 'LOGIN_ERROR_EITH_TOKEN':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj:action.payload.errorObj,
                    
                }
            }
            
        case 'LOGOUT':
            return {
                user: {
                auth:false   
                }
            }
            
        default:
            return state;
    }
}
