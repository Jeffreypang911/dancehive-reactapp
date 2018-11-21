import React from 'react';

const VideoModal = ({ show, children }) => {
    const showHideClassName = show ? "modal display" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
};

export default VideoModal;