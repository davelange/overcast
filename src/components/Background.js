import {themes} from '../theme';

function Background() {
    return (
        <div className="bg">
            <div className="bg__image"></div> 
            <div className="bg__gradient" style={ themes.getAppTheme() }></div>
        </div>
    )
}

export default Background;