import React from 'react'
import menuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'
const SubMenu = Menu.SubMenu;



export default class NavList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            menuTreeNode :null
        }
    }

    componentDidMount(){
        const menuTreeNode = this.renderMenu(menuConfig)
        this.setState({ menuTreeNode})
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item,index) => {
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }else{
                return <Menu.Item key={item.key}>{item.title}</Menu.Item>
            }
        })
    }

    handleClick(e) {
        console.log('click', e);
      }

    render(){
        const { handleClick } = this;
        return (
            <div>
                <div className="logo">
                    <img src='/assets/logo-ant.svg' alt=''/>
                    <h1>Imooc MS</h1>
                </div>

                

                <Menu onClick={handleClick} theme="dark" mode="vertical">
                {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}