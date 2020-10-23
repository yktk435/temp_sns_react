import React from 'react'

// import Following from '../../../containers/following'
import Following from '../../centerarea/profile/following'
// import MyProfile from '../../../containers/MyProfile'
import MyProfile from '../../centerarea/profile/MyProfile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'; // 追加
// import { Provider } from 'react-redux';
import { useStore } from 'react-redux'

class Profile extends React.Component {

    componentWillMount() {
        let userId = this.props.match.params.userId
        this.props.getUserInfoInPrrofile(userId)
        this.props.getArticles(userId)

        this.props.getFriends(userId)
    }
    componentWillReceiveProps() {
        

        
    }
    render() {
        return (
            <Switch>
                {(() => {
                    if (this.props.followingMode) {
                        return (<Following {...this.props} />)
                    } else {
                        return (<MyProfile {...this.props} />)

                    }
                })()}
            </Switch>

        )
    }
}

const ProfileMenu = (props) => {
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    console.log(props.match.params.menu)
    return (
        <div>
            {(() => {
                switch (props.match.params.menu) {
                    case "following":
                        return (
                            <div>
                                <Following />
                            </div>
                        )


                    default:

                }
            })()}

        </div>
    )
}
export default Profile