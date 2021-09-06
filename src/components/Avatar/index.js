import React from 'react';
import { generateAvatarFromHash } from "../../utils/helpers";

import './Avatar.scss'

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img
                class='avatar'
                src={user.avatar}
                alt={`Avatar ${user.fullname}`}
            />
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstCharFromFullname = user.fullname[0].toUpperCase();
        return (
            <div
                style={{
                    background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%`
                }}
                className='avatar avatar--symbol'
            >
                {firstCharFromFullname}
            </div>
        )
    }
};


export default Avatar;
