// src/containers/Ranking.js
import { connect } from 'react-redux';
import Profile from '../components/centerarea/profile/profile'
import * as fetch from '../actions/fetch'
import * as profile from '../actions/profile'
import {withRouter} from 'react-router' 

const mapStateToProps = (state, ownProps) => {
    return (
        {
            userName: state.userInfo.user.userName,
            userId: state.userInfo.user.userId,
            iconUrl: state.userInfo.user.iconUrl,
            headerUrl: state.userInfo.user.headerUrl,
            accessToken: state.userInfo.user.accessToken,
            style: state.profile.style,
            // 投稿、返信、写真、グッドのどれを見ているか
            menuMode:state.profile.menuMode,
            // 投稿
            articles:state.articles.user,
            // 返信
            // 写真
            picObj:state.profile.picObj,
            // ぐっと
            goodObj: state.profile.goodObj,
            // loocation受け取り
            location: state.router.location,
            router: state.router,
            followingMode:state.profile.followingMode,
        }
    )
};
const mapDispatchToProps = dispatch => ({
    clickMenuItem(e) {
        dispatch(profile.clickMenuItem(e))
    },
    getArticles(token) {
        dispatch(fetch.getArticles(token))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));