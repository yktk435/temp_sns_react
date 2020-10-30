import React from 'react'
import siteicon from './images/siteicon.png'
import batsu from '../components/images/batsu2.png'
import pic from '../components/images/pic.png'
import { menuToggle2 } from '../actions/fetch'
import { Link } from 'react-router-dom';
import left from '../components/images/left.png'
import testpic from '../components/images/user.jpg'
import good from '../components/images/good.png'
import rep from '../components/images/rep.png'
import retweet from '../components/images/retweet.png'


export class ProfileEditPage extends React.Component {
    render() {
        const { inputUserId, inputPass, inputMail, pushCreateAccountButton, userName, userId, mail, pass, error } = this.props.userInfo.user
        const { inputUserName, saveChanges, menuToggle } = this.props
        const { inputUserNameByEdit } = this.props.userInfo
        const { display } = this.props.userInfo

        return (
            <div style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                margin: "auto",
                display
            }}>
                <div style={{
                    width: "600px",
                    height: "350px",
                    margin: 'auto',
                    backgroundColor: "rgba(20, 29, 38)",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}>

                    {/* <!-- プロフィールを編集 --> */}
                    <div style={{ fontSize: "23px", fontWeight: 'bold', color: "aliceblue", marginLeft: "50px", }}>
                        <div onClick={() => {
                            menuToggle()
                        }} className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "5px",
                            position: "absolute",
                            height: "21px",
                            width: "21px",
                            top: "13px",
                            left: "20px",
                        }}>
                            <img className="blue" src={batsu} style={{ width: "20px", position: "absolute" }} />
                        </div>
                        {/* <!-- 保存ボタン --> */}
                        <div onClick={() => { saveChanges({ id: 'username', input: inputUserNameByEdit }) }}
                            style={{
                                marginBottom: "20px", borderRadius: "30px", height: "20px", textAlign: "center", width: "30px", fontSize: "15px",
                                position: "absolute",
                                top: "16px",
                                right: "40px",
                                padding: "1px 10px 5px 10px",
                            }} className="btn--orange pointer">
                            保存
                    </div>
                        プロフィールを編集</div>

                    {/* 名前 */}
                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                        <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                            名前</div>
                        <input placeholder={userName} onChange={(e) => inputUserName(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />

                    </div>

                </div>
            </div>
        )
    }
}
const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
export class PostPage extends React.Component {
    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        this.props.imageChoce(imageUrl)
    }
    render() {

        const { iconUrl } = this.props.userInfo.user
        // 投稿に必要なデータをまとめた形

        const requestData = {
            text: this.props.home.text,
            imageFile: this.props.home.imageFile,
        }
        // 関数
        const { menuToggle2, inputPostText, post, clearTextBox, imageClear } = this.props
        // その他
        const { displayPostPage } = this.props.userInfo
        // const {imageUrl}=this.props.home.imageUrl
        return (
            <div style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                margin: "auto",
                display: displayPostPage
                // display: 'block'
            }}>
                <div style={{
                    width: "600px",
                    minHeight: "300px",
                    margin: 'auto',
                    backgroundColor: "rgba(20, 29, 38)",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}>
                    {/* バツボタン */}
                    <div onClick={() => menuToggle2()}
                        className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "10px",
                            height: "21px",
                            width: "21px",
                            marginBottom: "5px"
                        }}>
                        <img className="blue" src={batsu} style={{ width: "20px", position: "absolute" }} />
                    </div>

                    {/* /////////////////////////////////////////////////// */}
                    {/* <!-- ユーザ情報 --> */}
                    <div style={{ display: "inline-flex", borderTop: "1px solid rgb(48, 60, 67)", }}>
                        {/* ユーザアイコン */}
                        <div>
                            <img style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                padding: "10px"
                            }} className="" src={iconUrl} alt="ユーザアイコン" />
                        </div>
                        {/* <!-- 投稿内容 --> */}
                        <div style={{ display: "block" }}>
                            <div
                                id="post-text2"
                                onFocus={(e) => inputPostText(e.target.innerText)}
                                onBlur={(e) => inputPostText(e.target.innerText)}
                                className="text-area" style={{
                                    padding: "10px",
                                    fontSize: "20px",
                                    margin: "10px 20px 0 20px",
                                    width: "440px",
                                    border: "none",
                                    lineHeight: "25px"
                                }} contentEditable="true" ></div>
                            {(() => {
                                if (this.props.home.imageUrl != undefined) {
                                    return (
                                        <div style={{ position: "relative", margin: "5px 15px 0 0", padding: "10px", textAlign: "center", borderRadius: "20px" }} aria-label="投稿した写真を表示">
                                            <img src={this.props.home.imageUrl} style={{ width: "90%", borderRadius: "20px", height: "250px", objectFit: "cover" }} />
                                            <img className="pointer" onClick={() => imageClear()} src={batsu} style={{ backgroundColor: "black", borderRadius: "100%", top: "5px", left: "10px", position: "absolute", width: "20px" }} />
                                        </div>
                                    )
                                }
                            })()}
                        </div>

                    </div>

                    {/* /////////////////////////////////////////////////// */}

                    {/* 投稿ボタン写真追加アイコン */}
                    <div style={{ display: "block", width: "inherit" }}>
                        <div style={{
                            display: "flex",
                            marginTop: "15px",
                            marginBottom: "5px",
                            marginRight: "10px",

                        }}>
                            <div style={{ display: "flex", marginLeft: "auto" }}>
                                <label>
                                    {/* <!-- ▽見せる部分 --> */}
                                    <span class="filelabel" title="ファイルを選択">
                                        <div>
                                            <a className="a-to-block2 send-pic" style={{
                                                marginTop: "5px",
                                                textAlign: "center",
                                                borderRadius: "100%",
                                                marginRight: "20px"
                                            }}><img src={pic} className="image-icon" alt="＋画像" />
                                            </a>
                                        </div>

                                    </span>
                                    {/* <!-- ▽本来の選択フォームは隠す --> */}
                                    <input type="file" id="filesend" name="photo" accesst=".jpg,image/jpeg,image/png" onChange={(e) => this.handleChangeFile(e)} />
                                </label>

                                <a onClick={() => {
                                    document.querySelector('#post-text2').innerText = ''
                                    post(requestData)
                                    clearTextBox()
                                }} style={{ margin: "0 5px", }} className="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

export class Article extends React.Component {
    componentWillMount() {
        // その記事の情報を取得する
        const articleId = this.props.match.params.articleId
        this.props.getArticleInfo(articleId)
    }
    render() {
        // 表示している記事のユーザ情報
        console.log(this.props.member)
        const {id:memberId, name, user_id,icon } = this.props.otherPage.article.member
        const {id:articleId,created_at,content,postImageUrl}=this.props.otherPage.article.article
        const { goBack } = this.props
        
        // let icon = testpic
        // let user_id = "user_id"
        // let created_at = "2020年"
        // let content = "内容"
        // let postImageUrl = testpic
        // let name = "name"

        return (
            <div>
                {/* バツボタン */}
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
                {/* ここから記事情報 */}
                <div className="main-container" style={{ overflow: "auto" }}>
                    {/* ユーザ情報 */}
                    <div style={{display:"inline-flex"}}>
                        {/* ユーザアイコン */}
                        <div style={{ margin: "0 10px" }} aria-label="ユーザアイコン">
                            <div style={{ margin: "10px 0 0 5px" }}>
                                <a className="" href="" aria-label="ユーザアイコン">
                                    <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                                </a>
                            </div>
                        </div>
                        {/* ブロック2 */}
                        <div style={{ display: "block",paddingTop:"10px" }}>

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
                                                    <img src={postImageUrl} alt="投稿した写真を表示" style={{ width: "450px", borderRadius: "5%" }} />
                                                </a>
                                            </div>
                                        )
                                    }
                                })()}


                            </div>

                        </div>
                    </div>
                    <div>
                        
                        

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
                    {/* 返信 */}

                </div>
            </div>
        )
    }

}