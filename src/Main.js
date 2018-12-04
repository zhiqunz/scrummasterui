import React, { Component } from 'react';
import axios from 'axios';
import { Button , Alert , Tooltip , ButtonToolbar , OverlayTrigger, Table } from 'react-bootstrap';

class Main extends Component {
	state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    
    componentWillReceiveProps(newProps) {
        const {searchName} = newProps;
        //更新状态
        this.setState({
            initView:false,
            loading:true
        })
        //发请求
        // const url = `https://api.github.com/search/users?q=${searchName}`;
        const url = `http://blockchain-03.cn.ibm.com:1080/book?q=${searchName}`;
        axios.get(url)
            .then(response => {
                //得到数据
                const result = response.data;
                console.log(result);
                const users = result.map(item=> {
                    return {
                    	'id':item.id, 
                    	'url':item.url,
                        'context':item.context
                    }
                })
                console.log(users);
                //更新状态
                this.setState({                    
                    loading:false,
                    users
                })
            })
            .catch(error => {
                //更新状态
                this.setState({
                    loading:false,
                    errorMsg:error.message
                })
            })
    }

    render () {
        const {initView,loading,users,errorMsg} = this.state;
        const {searchName} = this.props;

        if(initView){
            return (<h2>请输入关键词进行搜索{searchName}</h2>)
        }else if(loading){
            return (<h2>正在请求</h2>)
        }else if(errorMsg){
            return (<h2>{errorMsg}</h2>)
        }else {
            return (
                <div className="row">
                
                
	                <Table striped bordered hover style={{wordBreak:'keep-all'}}>
					  <thead>
					    <tr>
					      <th>id</th>
					      <th>url</th>
					      <th>context</th>
					    </tr>
					  </thead>
					  <tbody>
					    {users.map((x, index) => {
					      return (
                            <tr key={index}>
					          <td>{x.id}</td>
					          <td>
                                 <a href={x.url} target="_blank">link</a>
                              </td>
					          <td>
                                <div dangerouslySetInnerHTML={{__html: 
                                    x.context.replace(/\n+ +\n+ *\n*/g, "<br />")
                                             .replace(/\n\n/g, "<br />")
                                             .replace(/\n/g, "<br />")
                                             .replace(eval('/'+ searchName +'/gi'), "<a><strong>"+searchName+" </strong></a>")
                                    }} 
                                /> 
                              </td>
					        </tr>
                          )
					    })}
					    
					  </tbody>
					</Table>
				</div>

            )
        }
    }

}


export default Main;
