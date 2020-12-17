import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import SimplePostForm from "../../components/forms/SimplePostForm";
import LostPostForm from "../../components/forms/LostPostForm";

function mapStateToProps(state) {
    return {
        userName: state.user.userName,
        avatar: state.user.avatar,
        token: state.token,
        email: state.user.userLogin
    }
}


export default connect(mapStateToProps)(LostPostForm)