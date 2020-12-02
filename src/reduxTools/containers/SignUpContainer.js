import {loginAction} from "../actions/loginActions";
import {bindActionCreators} from "redux";
import SignUpModal from "../../components/SignUpModal";
import {connect} from "react-redux";
import {registerAction} from "../actions/registerActions";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginAction,
        register: registerAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        messageLogin: state.messageLogin,
        messageRegister: state.messageRegister,
        user: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);