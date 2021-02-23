import FeatherIcon from 'feather-icons-react';

function Time({time}) {
    return (
        <div className="time">
            <FeatherIcon icon="clock" width="16" height="16"/>
           <span className="time__text">{time}</span>
        </div>
    )
}

export default Time;