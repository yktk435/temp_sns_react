import React from 'react'
import { Link } from 'react-router-dom';
import good from '../../images/good.png'
import rep from '../../images/rep.png'
import retweet from '../../images/retweet.png'

import left from '../../images/left.png'
const MyProfile = (props) => {
    console.log(props)
    const { postObj, articles, style, menuMode, member } = props
    // 関数
    const {menuToggle, profileOrFollowing, clickMenuItem, followOr, goBack } = props
    // 表示中のユーザ情報
    const { id: member_id, name, user_id, icon, header } = member
    const { followerUsers, followUsers } = props
    // 自分のユーザ情報
    const { userName,userId, followUsers: myFollowUsers, followerUsers: myFollowerUsers } = props.userInfo.user

    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            {(() => {
                // userId:自分のユーザID
                // user_id:表示中のユーザID
                if (userId != user_id) {
                    return (
                        <div onClick={() => { goBack() }} className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "5px",
                            position: "absolute",
                            height: "21px",
                            width: "21px",
                            top: "20px",
                            transform: "translate(3px, 0)"
                        }}>
                            <img className="blue" src={left} style={{ width: "20px" }} />
                        </div>
                    )
                }
            })()}


            <div style={{ position: "relative" }}>
                {/* <!-- ヘッダ画像 --> */}
                < div >
                    <a href="">
                        <img src={header} className="header-image" alt="ヘッダ画像" />
                    </a>
                    {/* <!-- ユーザ画像 --> */}
                    <a href="" className="user-image-a">
                        <img style={{ backgroundColor: "rgb(20, 29, 38)" }} src={icon} alt="ユーザ画像" className="user-image-image-tag" /></a>

                </div>
                {/* <!-- プロフィール部分 --> */}
                <div style={{ padding: "15px", borderBottom: "1px solid rgb(48, 60, 67)" }}>
                    {/* <!-- プロフィール編集ボタン --> */}
                    {(() => {
                        // userId:自分のユーザID
                        // user_id:表示中のユーザID
                        if (userId == user_id) {
                            return (
                                <div className="icon-container" style={{ width: "170px", margin: "0px 0px 0px auto", height: "40px" }}>
                                    <a onClick={()=>{menuToggle()}} className="a-to-block edit-prof" style={{ borderRadius: "100px", position: "relative", textDecoration: "none", border: "1px solid rgba(29,161,242,1.00)", color: "rgba(29,161,242,1.00)" }}>
                                        <div className="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", margin: "auto", width: "80%", height: "20px", textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>プロフィールを編集</div>
                                    </a>
                                </div>
                            )
                        }
                        // 他のユーザプロフィールページ
                        else {
                            // follow 1:フォローしている 0:フォローしていない
                            let follow = myFollowUsers.find(user => user.userId == user_id) ? 1 : 0;
                            if (!follow) {
                                return (<div id="follow" className="edit-prof pointer" style={{
                                    borderRadius: "20px",
                                    border: "1px solid rgb(29, 161, 242)",
                                    // margin: "auto 10px auto 300px",
                                    height: "30px",
                                    width: "120px",
                                    textAlign: "center",
                                    lineHeight: "28px",
                                    color: "rgb(29, 161, 242)",
                                    position: "absolute",
                                    transform: "translate(400px, 10px)"
                                }} onClick={(e) => props.followOr(e.target.id, member_id)}>
                                    フォロー
                                </div>)
                            } else {
                                return (<div id="following" className="edit-prof pointer" style={{
                                    borderRadius: "20px",
                                    // border: "1px solid rgb(29, 161, 242)",
                                    // margin: "auto 10px auto 300px",
                                    height: "30px",
                                    width: "120px",
                                    textAlign: "center",
                                    lineHeight: "28px",
                                    backgroundColor: "rgb(29, 161, 242)",
                                    color: "white",
                                    position: "absolute",
                                    transform: "translate(400px, 10px)"
                                }} onClick={(e) => props.followOr(e.target.id, member_id)}>
                                    フォロー中
                                </div>)
                            }
                        }
                    })()}

                    {/* <!-- ユーザ名とユーザIDを表示 --> */}
                    <div>
                        {/* <!-- ユーザ名 --> */}
                        <div style={{ paddingTop: "60px", fontSize: "20px", fontWeight: "bold" }}>{
                            (() => {
                                if (userId == user_id) { return userName } else { return name}
                            })()
                        }</div>
                        {/* <!-- ユーザID --> */}
                        <div style={{ color: "rgb(115, 129, 136)", marginTop: "5px" }}>@{user_id}</div>
                    </div>
                    {/* フォロー フォロワー */}
                    <div style={{ display: "flex" }}>
                        {/* <!-- フォロー --> */}
                        {/* <Link to="/following" ><div style={{ color: "rgb(115, 129, 136)", marginTop: "5px", marginRight: "10px" }}><span style={{ color: "white", fontWeight: "bold" }}>3</span>フォロー</div></Link> */}
                        {/* <!-- フォロワー --> */}
                        {/* <Link to="/profile/following" ><div style={{ color: "rgb(115, 129, 136)", marginTop: "5px" }}><span style={{ color: "white", fontWeight: "bold" }}>3</span>フォロワー</div></Link> */}

                        {/* <!-- フォロー --> */}
                        <div className="pointer" onClick={(e) => {
                            profileOrFollowing('following')
                        }} style={{ color: "rgb(115, 129, 136)", marginTop: "5px", marginRight: "10px" }}><span style={{ color: "white", fontWeight: "bold" }}>{followUsers.length}</span>フォロー</div>
                        {/* <!-- フォロワー --> */}
                        <div className="pointer" onClick={() => { profileOrFollowing('following') }} style={{ color: "rgb(115, 129, 136)", marginTop: "5px" }}><span style={{ color: "white", fontWeight: "bold" }}>{followerUsers.length}</span>フォロワー</div>
                    </div>
                    {/* <!-- 投稿・返信・メディア(写真)・いいね(ぐっと)を表示 --> */}
                    <div style={{ width: "100%", display: "inline-flex" }}>
                        <div id="post" className="blue-when-hover profile-item" style={style[0]} align="center" onClick={(e) => clickMenuItem(e.target.id)}>
                            投稿
                            </div>
                        <div id="rep" className="blue-when-hover profile-item" style={style[1]} align="center" onClick={(e) => clickMenuItem(e.target.id)}>
                            返信
                            </div>
                        <div id="pic" className="blue-when-hover profile-item" style={style[2]} align="center" onClick={(e) => clickMenuItem(e.target.id)}>
                            写真
                            </div>
                        <div id="good" className="blue-when-hover profile-item" style={style[3]} align="center" onClick={(e) => clickMenuItem(e.target.id)}>
                            ぐっと
                            </div>
                    </div>
                </div>
            </div>
            {/* <!-- ユーザ投稿一覧 --> */}
            <div></div>
            {/* {(() => {
            
            if (typeof postObj === 'undefined') {
                return (<p>読込中</p>)
            } else {
                return (
                    <div>
                        {postObj.map(post => (<UserPost {...post} />))}
                    </div>
                )

            }

        })()} */}
            {/* <PostArea postObj={postObj} /> */}
            {(() => {
                switch (menuMode) {
                    case "post":
                        return (<PostArea articles={articles} member={member} />)
                        break;
                    case "rep":
                        break;
                    case "pic":
                        break;
                    case "good":
                        break;
                }
            })()}



        </div>

    )
}

const PostArea = (props) => {

    if (typeof props.articles === 'undefined') {
        return (<p>読込中</p>)
    } else {
        return (
            <div>
                {props.articles.map((article, i) => {
                    if (article.id != undefined) return (<UserPost key={i} article={article} member={props.member} />)
                })}
            </div>
        )
    }
}

export const UserPost = (props) => {
    const { created_at, content, id: articleId, postImageUrl } = props.article
    const { id: memberId, icon, header, name, user_id } = props.member
    return (
        <Link  to={"/status/"+articleId} style={{textDecoration:"none",color:"white"}}><div className="article-hover">
            <div style={{ padding: "10px 0", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">

                {/* ブロック1 */}
                <div style={{ margin: "0 10px" }} aria-label="ユーザアイコン">
                    <div style={{ margin: "5px" }}>
                        <a className="" href="" aria-label="ユーザアイコン">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                        </a>
                    </div>
                </div>
                {/* ブロック2 */}
                <div style={{ display: "block" }}>

                    {/* <!-- ユーザ名 --> */}
                    <div>
                        <div style={{ float: "left", marginLeft: "5px" }}>
                            <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{name}</a>
                        </div>
                        <div style={{ float: "left", margin: "0 15px" }}>
                            <Link to={"/user/" + user_id} style={{ textDecoration: "none" }}><div style={{ color: " rgb(115, 129, 136)" }} href="">@{user_id}</div></Link>
                        </div>
                        <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{created_at}</div>
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div>

                        <div className="font" style={{ padding: "5px 0", paddingRight: "50px", display: "inline-block" }} aria-label="投稿した文字を表示">{content}</div>
                        {(() => {
                            // 写真があれば表示
                            if (postImageUrl != null) {
                                return (
                                    <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                        <a href="" >
                                            <img src={postImageUrl} alt="投稿した写真を表示" style={{ width: "450px", height: "250px", objectFit: "cover", borderRadius: "5%" }} />
                                        </a>
                                    </div>
                                )
                            }
                        })()}


                    </div>

                </div>

            </div>
            {/* いいねボタンなど */}
            <div style={{ width: "100%", display: "inline-flex", paddingBottom: "2px", borderBottom: "1px solid rgb(48, 60, 67)" }}>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={rep} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>

                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={retweet} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>
                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={rep} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>

                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={good} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>
                </div>
            </div>
        </div>

        </Link>
    )
}

export default MyProfile