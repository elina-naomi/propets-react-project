import {connect} from "react-redux";
import Home from "../../components/Home";

function mapStateToProps(state) {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps)(Home);