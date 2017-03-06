/**
 * Created by tongwanhua on 2017/3/4.
 */
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/Action'
import Link from './Link'
const mapStateToProps = (state,ownProps) => {
  return {
    active:ownProps.filter ===state.visibilityFilter
  }
};
const mapDispatchToProps = (dispatch,ownProps) =>{
  return {
    onClick:()=>{
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}
const FooterLink = connect(mapStateToProps,mapDispatchToProps)(Link);
export default FooterLink;
