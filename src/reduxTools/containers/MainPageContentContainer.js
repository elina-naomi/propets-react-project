import {connect} from "react-redux";
import MainPageContent from "../../components/contents/MainPageContent";

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(MainPageContent)