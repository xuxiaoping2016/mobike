import React from 'react'
import { Row, Col} from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavList from './components/NavList'
import Home from './pages/home'

import './style/common.less'

export default class Admin extends React.Component {
    render(){
        return (
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavList></NavList>
                </Col>
                <Col span ={21} className="main">
                    <Header></Header>
                    <Row className="content">
                    <Home/>
                        {this.props.chilidren}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}