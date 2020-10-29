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
        dataGet: false,
        followUsers:[],
followerUsers:[]
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
                    user: {
                        ...state.user,
                        error: true, auth: false, dataGet: false
                    }
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.payload.response,
                        error: false,
                        auth: true,
                        dataGet: true
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
                        dataGet: true
                    },
                };

        case 'LOGIN_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj: action.payload.errorObj,
                    error: true,
                    dataGet: false
                }
            }

        case 'LOGIN_ERROR_EITH_TOKEN':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj: action.payload.errorObj,
                    dataGet: false
                }
            }

        case 'LOGOUT':
            return {
                user: {
                    auth: false,
                    dataGet: true
                }
            }
        case 'RECEIVE_MY_FRIENDS_DATA':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        followUsers: action.payload.responce.follow,
                        followerUsers: action.payload.responce.follower,
                    }

                }
        case 'FOLLOWING_INFO_UPDATE':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        followUsers: action.payload.responce.myFriends.follow,
                        followerUsers: action.payload.responce.myFriends.follower,
                    }

                }
        default:
            return state;
    }
}
