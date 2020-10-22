import React from 'react'

// import Following from '../../../containers/following'
import Following from './following'
import MyProfile from '../../../containers/MyProfile'
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'; // 追加

class Profile extends React.Component {
    componentWillMount() {
        this.props.getArticles(this.props.accessToken)
    }
    componentWillReceiveProps(nextProps) {
        console.log('プロップスを受け取るとき')
        console.log(this.props)
        console.log(nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log('shouldComponentUpdate')
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
    }
    render() {
        // const { userName, userId, iconUrl, headerUrl, postObj, articles } = this.props
        console.log('00000000000000000000000000000000000000000000')
        console.log(this.props)
        return (
            
                <Switch>

                    <Route path="/profile/:menu" component={ProfileMenu} />
                    <Route path="/profile" component={MyProfile} />
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