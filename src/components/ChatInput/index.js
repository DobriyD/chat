import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from "@ant-design/icons";
import {Input} from "antd";
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart'


import './ChatInput.scss';

const ChatInput = props => {
    const [value, setValue] = useState('');
    const [emojiPickerVisible, setShowEmojiPicker] = useState('');

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!emojiPickerVisible);
    }

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                {emojiPickerVisible && <div className="chat-input__emoji-picker">
                    <Picker set='apple' />
                </div>}
                <SmileOutlined onClick={toggleEmojiPicker} style={{fontSize: '18px'}}/>
            </div>
            <Input
                size='large'
                placeholder="Введите текст сообщения"
                onChange={e => setValue(e.target.value)}
            />
            <div className="chat-input__actions">
                <UploadField
                    containerProps={{
                        className: "chat-input__actions-upload-btn"
                    }}
                    uploadProps={{
                        accept: ".jpg,.jpeg,.png,.gif,.bmp",
                        multiple: "multiple"
                    }}
                >
                    <CameraOutlined style={{fontSize: '18px'}}/>
                </UploadField>
                {value ? <SendOutlined style={{fontSize: '18px'}}/> : <AudioOutlined style={{fontSize: '18px'}}/>}
            </div>
        </div>
    )
};

ChatInput.propTypes = {
    className: PropTypes.string
};

export default ChatInput;
