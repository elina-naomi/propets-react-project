import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SimplePostForm from "../../components/forms/SimplePostForm";

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
        avatar: state.user.avatar,
        token: state.token,
        email: state.user.userLogin
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({
//         editUser: editUserAction,
//         updateAvatar: updateAvatarAction
//     },dispatch)
// }



export default connect(mapStateToProps)(SimplePostForm)