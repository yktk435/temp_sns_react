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

        this.props.getArticles()

        this.props.getFriends()
    }
    componentWillReceiveProps() {
        console.log(this.props.followingMode)
    }
    render() {
        // const { userName, userId, iconUrl, headerUrl, postObj, articles } = this.props
        console.log('00000000000000000000000000000000000000000000')
        console.log(this.props)
        // let store=useStore()
        return (

            <Switch>

                {/* <Route path="/profile/:menu" component={ProfileMenu} /> */}
                {/* <Route exact path="/profile" component={MyProfile} /> */}
                {(() => {
                    if (this.props.followingMode) {
                        console.log('truetruetruetruetruetruetruetruetrue')
                        return (<Following {...this.props} />)
                    } else {
                        console.log('falsefalsefalsefalsefalsefalsefalse')
                        return (<MyProfile {...this.props}/>)

                    }
                })()}
                {/* <MyProfile {...this.props} /> */}
                {/* <Following /> */}

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