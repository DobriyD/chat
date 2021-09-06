import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns';
import isToday from 'date-fns/isToday';


import './DialogItem.scss'
import { IconReaded, Avatar } from "../";

const getMessageTime = createdAt => {

    createdAt = new Date(createdAt)

    if (isToday(createdAt)) {
        return format((createdAt), 'HH:mm');
    } else {
        return format((createdAt), 'dd/MM/yyyy');
    }
};


const DialogItem = ({
                        _id,
                        user,
                        unreaded,
                        isMe,
                        created_at,
                        text,
                        currentDialogId,
                        onSelect
}) => (
    <div className={classNames('dialogs__item', {
            'dialogs__item--online': user.isOnline,
            'dialogs__item--selected': currentDialogId === _id
        })}
        onClick={onSelect.bind(this, _id)}
    >
        <div className="dialogs__item-avatar"><Avatar user={user} /></div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullname}</b>
                <span>
                    {getMessageTime(created_at)}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>
                    {text}
                </p>
                {isMe && <IconReaded isMe={true} isReaded={false} />}
                {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>}
            </div>
        </div>
    </div>
);

export default DialogItem;
