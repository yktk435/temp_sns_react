// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    article: { article: [], member: [] },
    repArticleId:undefined

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
        default:
            return state;
    }
}
