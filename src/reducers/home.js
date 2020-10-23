// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    text: '',
    response: '',
    error: false,
    timeLineInfo:
    {
        memberIds: [],
        articles: []
    }

};

const changeTimeLineData = (timeLineInfo) => {

}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_POST_TEXT':
            return {
                ...state,
                text: action.payload.text
            };
        case 'CLEAR_TEXT':
            // 投稿ボタンを押したら文字を消す
            return {
                text: undefined,
                imageFile: undefined,
                imageUrl: undefined
            }

        case 'IMAGE_CHOICE':
            return {
                ...state,
                imageUrl: action.payload.imageUrl,
            }

        case 'IMAGE_CLEAR':
            return {
                ...state,
                imageUrl: undefined,
            }
        case 'RECEIVE_TIMELINE':
            return action.payload.error
                ? {
                    ...state,
                    error: action.payload.error
                }
                : {
                    ...state,
                    timeLineInfo: action.payload.responce
                }
        default:
            return state;
    }
}
