function Expandable({expand, children}) {
    
    const cls = () => {
        return expand ? 'collapsable open flex__full' : 'collapsable close flex__full'
    }

    return (
        <div className={cls()}>
            { children }
        </div>
    )
}

export default Expandable;