import React from "react";
import PropTypes from 'prop-types';
import readedSvg from "../../assets/img/readed.svg";
import noReadedSvg from "../../assets/img/noreaded.svg";

const IconReaded = ({ isMe, isReaded }) =>
    isMe && (
        isReaded ? (
            <img
                className='message__icon-readed'
                src={readedSvg}
                alt='readed icon'
            />
        ) : (
            <img
                className='message__icon-readed message__icon-readed--no'
                src={noReadedSvg}
                alt='no readed icon'
            />
        ));

IconReaded.propTypes = {
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
};

export default IconReaded;
