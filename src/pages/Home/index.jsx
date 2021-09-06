import React from 'react';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import {ChatInput, Status} from "../../components";
import { Dialogs, Messages } from "../../containers";


import './Home.scss';


const Home = () => {

    return (
        <section className='home'>

            <div className="chat">
                <div className="chat__sidebar">

                    <div className="chat__sidebar-header">
                        <div>
                            <TeamOutlined />
                            <span>Список диалогов</span>
                        </div>
                        <FormOutlined />
                    </div>

                    <div className="chat__sidebar-dialogs">
                        <Dialogs items={[
                            {
                                _id: "311db2f6311424ae6538381ae2298907",
                                text: 'Мы свидетельствуем Вам глубочайшее наше подчение',
                                isReaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: "311db2f6311424ae6538381ae2298907",
                                    fullname: 'Fedor Dostoevsky',
                                    avatar: null
                                }
                            },
                            {
                                _id: "321db2f6311424ae6538381ae2298907",
                                text: 'Офоыв вывувцв увцджд кшшш',
                                isReaded: false,
                                created_at: new Date(),
                                user: {
                                    _id: "311db2f6311424ae6538381ae2298907",
                                    fullname: 'Allan Ballan',
                                    avatar: null
                                }
                            }
                        ]} />
                    </div>
                </div>

                <div className="chat__dialog">
                    <div className="chat__dialog-header">
                        <div />
                        <div className="chat__dialog-header-center">
                            <b className="chat__dialog-header-username">Fedor Dosta</b>
                            <div className="chat__dialog-header-status">
                                <Status online={true} />
                            </div>
                        </div>
                        <EllipsisOutlined style={{ fontSize: '22px' }} />
                    </div>
                    <div className="chat__dialog-messages">
                        <Messages />
                    </div>
                    <div className="chat__dialog-input">
                        <ChatInput />
                    </div>
                </div>
            </div>


{/*            <Message avatar='https://sun9-63.userapi.com/impg/c855120/v855120546/1dba47/SAFu-Pp3fhM.jpg?size=100x0&quality=88&crop=40,32,696,696&sign=b0c9806cd3f802f64fb40a5e3fa8195d&ava=1'
                isTyping
            />*/}

        </section>
    )
};


export default Home;
