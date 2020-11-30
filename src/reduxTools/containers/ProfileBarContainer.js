import ProfileBar from "../../components/ProfileBar";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loginAction} from "../actions/loginActions";
import {logoutAction} from "../actions/logoutAction";

function mapStateToProps(state) {
    return {
        userLogin: state.user.userLogin,
        userName: state.user.userName,
        avatar: state.user.avatar,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: logoutAction
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBar);