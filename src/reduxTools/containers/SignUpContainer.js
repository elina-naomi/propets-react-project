import {loginAction} from "../actions/loginActions";
import {bindActionCreators} from "redux";
import SignUpModal from "../../components/SignUpModal";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: loginAction
    },dispatch)
}

function mapStateToProps(state) {
    return {
        message: state.message,
        user: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal);