import React from 'react'
import { Row, Col} from 'antd';
import { formateDate } from '../../utils/utils'

import axios from '../../utils/axios'
import './index.less'

export default class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName:"河畔一觉",
            weather:{},
        }

        setInterval(() => {
            let sysTime = formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        })

        this.getWeatherAPIData();
    }

    async getWeatherAPIData(){
        let city = '北京';
        // const data = await axios.ajax({
        //     url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2',
        //     dataType: "jsonp", //指定服务器返回的数据类型 
        // })
        // 
        const data = await axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        })
        
        if(data.error === 0){
            const{ results:[info]} = data;
            const {weather_data:[weather]} =info;
            console.log(weather)
            this.setState({weather})
        }
    }
    
    render(){
        const { userName, sysTime, weather } = this.state;
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span ="24">
                        <span>欢迎，{userName}</span>
                        <a href="javascript:;">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">首页</Col>
                    <Col span="20" className="weather">
                        <span>{sysTime}</span>
                        <span className="weather-detail">
                        <img src={weather.dayPictureUrl} alt="" className="weather-img"/>
                        {`${weather.weather} ${weather.wind}`}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}