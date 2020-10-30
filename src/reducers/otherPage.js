// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    article: { article: [], member: [] ,comments:[],commentedMembers:[]},
    repArticleId: undefined,
    

};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ARTICLEINFO':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage:action.payload.error,
                }
                : {
                    ...state,
                    article:action.payload.response
                }
        case 'REP_INFO':
            return {
                ...state,
                repArticleId:action.payload.articleId
            }
            case 'RECEIVE_POSTED_REP_DATA':
                return action.payload.error
                    ? {
                        ...state,
                        errorMessage: action.payload.error,
                        error: true
                    }
                    : {
                        ...state,
                        error: false,
                        article: {
                            ...state.article,
                            comments:action.payload.response.comments,
                            commentedMembers:action.payload.response.members
                        }
                        
                    }
        default:
            return state;
    }
}
