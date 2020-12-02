import {bindActionCreators} from "redux";
import {logoutAction} from "../actions/logoutAction";
import {connect} from "react-redux";
import ProfileBar from "../../components/ProfileBar";
import ProfileComplex from "../../components/ProfileComplex";

function mapStateToProps(state) {
    return {
        email: state.user.userLogin,
        userName: state.user.userName,
        avatar: state.user.avatar,
        phone: state.user.phone,
        fblink: state.user.fblink
    }
}



export default connect(mapStateToProps)(ProfileComplex)