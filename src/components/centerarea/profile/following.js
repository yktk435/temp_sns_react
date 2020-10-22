import React from 'react'

const Following = (props) => {
    console.log('FOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOWFOLLOW')
    // const { id, created_at, content, user_id, name, header, icon, url } = props
    return (

        <div style={{ padding: "10px 0", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">
            {/* フォロワー フォロー中 */}
            <div style={{ width: "100%", display: "inline-flex" }}>
                <div id="post" className="blue-when-hover profile-item" style={{ width: "calc(100%/2)" }} align="center" >
                    フォロワー
                            </div>
                <div id="rep" className="blue-when-hover profile-item" style={{ width: "calc(100%/2)" }} align="center" >
                    フォロー中
                            </div>
            </div>
        </div>
    )
}

export default Following