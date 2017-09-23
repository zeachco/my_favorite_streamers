import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/fa/close';

const TwitchFrame = ({
    username,
    onClose,
}) => (
    <div className="stream-view">
        <CloseIcon className="close" onClick={() => onClose(username)}/>
        <iframe
            className="view"
            src={`//player.twitch.tv/?channel=${username}`}
            allowFullScreen
        />
    </div>
);

TwitchFrame.propTypes = {
    username: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TwitchFrame;