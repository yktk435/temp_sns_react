// src/actions/Ranking.js
import { replace } from 'react-router-redux';
import qs from 'qs';
// categoryをpayloadに含むように修正
// const startRequest = response => ({
//   type: 'START_REQUEST_F',
//   payload: { response },
// });
// const receiveData = (response, error) => ({
//   type: 'RECEIVE_DATA_F',
//   payload: { response, error },
// });
// const finishRequest = response => ({
//   type: 'FINISH_REQUEST_F',
//   payload: { response },
// });

const getUserInfoAction = (response, error) => ({
  type: 'GET_USERINFO',
  payload: { response, error },
});

const getOtherUserInfoAction = (response, error) => ({
  type: 'GET_OTHER_USERINFO',
  payload: { response, error },
});
const loginError = (errorObj, error) => ({
  type: 'LOGIN_ERROR',
  payload: { errorObj, error },
})
const loginErrorWithToken = (errorObj, error) => ({
  type: 'LOGIN_ERROR_EITH_TOKEN',
  payload: { errorObj, error },
})
const logoutAction = () => ({
  type: 'LOGOUT',

})

const receivePostData = (responce, error) => ({
  type: 'RECEIVE_POST_DATA',
  payload: {
    responce,
    error
  }
})

const receiveArticles = (responce, error) => ({
  type: 'RECEIVE_ARTICLES',
  payload: {
    responce,
    error
  }
})

const createAccountButtonError = error => ({
  type: 'CREATE_ACCOUNT_ERROR',
  payload: { error },
});

// 設定 Action


// const changeUserId = (userId) => ({
//   type: 'CHNAGE_USER_ID',
//   payload: {
//     userId
//   }
// })

// const saveUserId = () => ({
//   type: 'SAVE_USER_ID',
// })

export const saveChange = (s) => ({
  type: 'SAVE_CHANGE'
})

// const changeMail = (mail) => ({
//   type: 'CHNAGE_MAIL',
//   payload: {
//     mail
//   }
// })

// const saveMail = () => ({
//   type: 'SAVE_MAIL',
// })

// const changePass = (pass) => ({
//   type: 'CHNAGE_PASS',
//   payload: {
//     pass
//   }
// })

// const savePass = () => ({
//   type: 'SAVE_PASS',
// })

export const changeInput = (id, input) => ({
  type: 'CHANGE_INPUT',
  payload: {
    id, input
  }
})

const changeUserInfoError = (error) => ({
  type: 'CHANGE_USER_INFO_ERROR',
  payload: {
    error
  }
})

// 設定Action ここまで

// 検索

const startSearch = () => ({
  type:'START_SEARCH'
})
export const inputKeyWord= (keyword) => ({
  type: 'INPUT_KEYWORD',
  payload: {
    keyword
  }
})
const searchRes = (responce,error) => ({
  type: 'SEARCH_RESULT',
  payload: {
    responce,
    error
  }
})
/**********************************************/
// 検索
/**********************************************/

export const search = (keyword) => {
  return async (dispatch, getState) => { 
    console.log('accesstoken')
    console.log('accesstoken')
    console.log('accesstoken')
    console.log('accesstoken')
console.log(getAccesstoken())
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    console.log(option)
    const queryString = qs.stringify({
      keyword,
    });
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/member?keyword='+ encodeURI(keyword),option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(searchRes(data, null));
    } catch (err) {
      dispatch(searchRes(null,err ));
    }
  }
}
/**********************************************/
// 設定
/**********************************************/

export const saveChanges = (postData, token) => {
  return async (dispatch, getState) => {
    
    const option = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify({ input: postData.input })
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/member/' + postData.id, option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(getUserInfoAction(data, null));
    } catch (err) {
      dispatch(changeUserInfoError(err));
    }
  };
};

/**********************************************/
// アカウント作成
/**********************************************/
export const pushCreateAccountButton = (data) => {
  // const { userId, pass } = data
  return async (dispatch, getState) => {
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify(data)
    }
    try {
      const responce = await fetch('http://localhost:8000/api/member', option);
      const data = await responce.json();
      
      if ('error' in data) throw data
      document.cookie = 'access_token=' + data.accessToken
      dispatch(getUserInfoAction(data, null,));
      dispatch(replace('/home'))

    } catch (err) {
      dispatch(createAccountButtonError(err));
    }
  }
}

/**********************************************/
// 記事関係
/**********************************************/
export const post = (requestData, token) => {
  return async (dispatch, getState) => {
    const imageFile = document.querySelector("#filesend").files[0]

    
    const formData = new FormData();
    formData.append('text', requestData.text);
    formData.append('imageFile', imageFile);
    const option = {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json',
        'access_token': token,
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: formData
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/article', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(receivePostData(data, null));
    } catch (err) {
      dispatch(receivePostData(null, err));
    }
  };
};

export const getArticles = (token) => {
  return async (dispatch, getState) => {
    const option = {
      headers: {
        'access_token': token,
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    try {
      const responce = await fetch('http://localhost:8000/api/article', option);
      const data = await responce.json();
      if ('error' in data) throw data
      dispatch(receiveArticles(data, null));
    } catch (err) {
      dispatch(receiveArticles(null, err));
    }
  }
}
/**********************************************/
// ユーザ情報取得
/**********************************************/

export const getUserInfo = () => {
  // getState関数でstate.shopping.categoriesにアクセスする
  return async (dispatch, getState) => {

    // ログインしていなければloginにリダイレクトの処理を書く
    // クッキーを見てアクセストークンがなかったらログイン画面にリダイレクト
    // if (クッキーがなかったら) {
    //   dispatch(replace('/login'));
    //   return;
    // }

    try {
      const responce = await fetch('http://localhost:8000/api/test');
      const data = await responce.json();
      dispatch(getUserInfoAction(data, null,));
    } catch (err) {
      // dispatch(receiveData(null, err)); 
    }
  };
};

export const getOtherUserInfo = () => {
  // getState関数でstate.shopping.categoriesにアクセスする
  return async (dispatch, getState) => {

    // ログインしていなければloginにリダイレクトの処理を書く

    try {
      const responce = await fetch('http://localhost:8000/api/test');
      const data = await responce.json();
      dispatch(getOtherUserInfoAction(data, null,));
    } catch (err) {
      // dispatch(loginError(err)); 
    }
  };
};


export const startLogin = (ipassData) => {

  
  return async (dispatch, getState) => {
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'applicaxtion/json',
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify(ipassData)
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {

      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();


      if ('error' in data) throw data
      dispatch(replace('/home'))
      dispatch(getUserInfoAction(data, null,));
      document.cookie = 'access_token=' + data.accessToken

    } catch (err) {
      
      dispatch(loginError(err));
      dispatch(replace('/login'))

    }
  };
}
// アクセストークンを持っているならそれでログイン
export const startLoginWithToken = (token) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': token,
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',

      },
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {

      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();

      if ('error' in data) throw data
      // dispatch(replace('/home'))
      dispatch(getUserInfoAction(data, null,));
      document.cookie = 'access_token=' + data.accessToken

    } catch (err) {
      dispatch(loginErrorWithToken(err));
      dispatch(replace('/login'))

    }
  };
}


export const logout = () => {
  return (dispatch, getState) => {
    document.cookie = 'access_token=;'
    dispatch(logoutAction())
    dispatch(replace('/login'))
  }
}

/*****************************/
// 関数
/*****************************/
const getAccesstoken = () => {
  let token;
  document.cookie.split(';').forEach(item => {
    token = item.match(/access_token=(.*)/)
  })
  return token[1]

}
