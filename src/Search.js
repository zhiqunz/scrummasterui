import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
      setSearchName: PropTypes.func.isRequired
  }

  handleSearch = () => {
     //得到输入的关键字
     const searchName = this.input.value.trim();
     if(searchName){
         //搜索
         this.props.setSearchName(searchName);
     }
  }

    render () {
    		return (
            <div className="row">
              	<div className="col-md-6">
              		<div className="input-group">
                			<input type="text" className="form-control" placeholder="请输入检索关键字" ref={input=>this.input=input}></input>
                			<span className="input-group-btn">
                  			<button className="btn btn-primary" onClick={this.handleSearch}>检索</button>
                			</span>
              		</div>
            		</div>
          	</div>
        )
    }
};

export default Search;
