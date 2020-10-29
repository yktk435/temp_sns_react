import React from 'react'
import siteicon from './images/siteicon.png'
import batsu from '../components/images/batsu2.png'
export class ProfileEditPage extends React.Component {
    render() {
        const { inputUserId, inputPass, inputMail, pushCreateAccountButton, userName, userId, mail, pass, error } = this.props.userInfo.user
        const { inputUserName, saveChanges ,menuToggle} = this.props
        const { inputUserNameByEdit } = this.props.userInfo
        const {display}=this.props.userInfo
console.log(this.props)
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
                        <div onClick={() => { saveChanges({id:'username',input:inputUserNameByEdit})}}
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

                    {/* <!-- ユーザ名 --> */}
                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                        <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                            ユーザID</div>
                        {/* <input onChange={(e) => inputUserId(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} /> */}

                    </div>
                    {/* <!-- パスワード --> */}
                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                        <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>パスワード</div>
                        {/* <input onChange={(e) => inputPass(e.target.value)} className="text-area" type="password" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} /> */}
                    </div>


                </div>
            </div>
        )
    }
}