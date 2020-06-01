import React, { Fragment } from "react";
import ReactTable from "react-table";
import { connect } from "react-redux";
import {AddUpvote} from "../actions/userActions";
const columns = [
  {
    Header: "S. No",
    width: 100,
    Cell: row => row.index + 1
  },
  {
    Header: "Comments",
    accessor: "comment"
  },
  {
    Header: "Vote Count",
    accessor: "voteCount"
  },
  {
    Header: "Up Vote",
    accessor: "upVote"
  },
  {
    Header: "New Details",
    accessor: "newDetails"
  }
];

class SkuListing extends React.Component {
  state={
    data1:[],
    index:""
  }
  componentDidMount=()=>{
    const {data2}=this.props
    const data1 = data2.map((item, index) => {
      item.upVote = (
        <button type="button" onClick={(e) => { e.preventDefault(); this.handleClickUpvote(e,item, index)}}>
          Icon
        </button>
      );
      return item;
    });
    this.setState({data1:data1})
  }

  handleClickUpvote = (e,data, index) => {
    this.setState({index})
    this.props.onClick(index);
  };

  render() {
    const {data2}=this.props
    const data1 = data2.map((item, index) => {
      item.upVote = (
        <button type="button" onClick={(e) => { e.preventDefault(); this.handleClickUpvote(e,item, index)}}>
          Icon
        </button>
      );
      return item;
    });
    return (
      <Fragment>
        <ReactTable
          sortable={true}
          filterable={true}
          data={this.state.index?data1:this.state.data1}
          columns={columns}
          defaultPageSize={10}
          minRows={5}
          showPagination={true}
          className="col m12 card z-depth-0"
          noDataText={<span>No found</span>}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => (console.log("ijsode the mapstate to prope",state),{
  data2:state.user
});
const mapDispatchToProps = dispatch => {
  return {
    onClick: data2 => {
      dispatch(AddUpvote(data2));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkuListing);
