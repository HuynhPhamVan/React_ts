import React from 'react'
import './index.css'

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space ,} from 'antd';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = (value: string) => console.log(value);

const HomePage = () => {
    return (

        <div className="">
       <div className='container'>
        <div className='menu'>
            <div className=" left">
                <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">PRODUCT</a></li>
                    <li><a href="">SLEEP TEAM</a></li>
                    <li><a href="">INFORMATION</a></li>
                    <li><a href="">ADDRESS</a></li>
                </ul>
            </div>
            <div className="beetwen">

                <Search placeholder="input search text" onSearch={onSearch} enterButton />


                </div>
                <div className='right'>

                </div>
            </div>
<div className='banner'>
    <img src="https://uploads-ssl.webflow.com/6073fad993ae97919f0b0772/609fa7b53c435fb27393587d_dd5787fa0c9306323b7176ce91a4d31ff6041c4a2.jpg" alt="" />
</div>
        </div>
        <div className=''>
            
        </div>
        </div>

    )

}

export default HomePage