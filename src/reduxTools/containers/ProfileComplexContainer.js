import {bindActionCreators} from "redux";
import {logoutAction} from "../actions/logoutAction";
import {connect} from "react-redux";
import ProfileBar from "../../components/ProfileBar";
import ProfileComplex from "../../components/ProfileComplex";
import {editUserAction} from "../actions/editActions";
import {updateAvatarAction} from "../actions/avatarActions";

function mapStateToProps(state) {
    return {
        email: state.user.userLogin,
        userName: state.user.userName,
        avatar: state.user.avatar,
        phone: state.user.phone,
        fblink: state.user.fblink,
        token: state.token,
        message: state.messageEdit,
        newAvatar: state.newAvatar
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editUser: editUserAction,
        updateAvatar: updateAvatarAction
    },dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileComplex)