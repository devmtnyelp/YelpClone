import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDetails } from '../../ducks/events/reducer';
class UserProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId: '2b2b2b'
        }
    }

    componentDidMount(){
        const userId = this.props.match.params.userId
        this.props.getUserDetails(userId)
    }
    render(){
        return(<div>
        <p>hello        {this.props.match.params.userId}</p>
        
        <p>
        {console.log(this.props.eventReducer)}
        {this.props.eventReducer && JSON.stringify(this.props.eventReducer.info.data)}
        </p>
        </div>
        )
    }

}

function mapStateToProps( getUserDetails ) {
    return getUserDetails;
  }
export default connect(mapStateToProps, {getUserDetails})(UserProfile)

























// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { getUser } from '../../ducks/authentication/reducer';

// class userProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       userid: '2b2b2b'
//     };
//   }

//   render() {
//     console.log(this.props.userReducer.userDetail);
//     return (
//       <div className="">
//         userProfile
//         <div>
//           <button
//             onClick={() => {
//               this.props.getUser(this.state.userid);
//             }}
//           >
//             get info
//           </button>
//         </div>
//         <div>
//           <p>user info: </p>
//           <p>ID: {this.props.userReducer.userDetail.userid}</p>
//           <p>Name: {this.props.userReducer.userDetail.name}</p>
//           <p>Location: {this.props.userReducer.userDetail.city}, {this.props.userReducer.userDetail.state}</p>
//           <p>Avatar: {this.props.userReducer.userDetail.avatar}</p>
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps({ userReducer }) {
//   return { userReducer };
// }

// export default connect(mapStateToProps, { getUser })(userProfile);
