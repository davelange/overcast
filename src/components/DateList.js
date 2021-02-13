function DateList({days, current, setDay}) {

    const d = new Date();

    function formatDate( n ) {
        return `${d.getUTCDate() + n}/${d.getMonth()+1}`;
    }

    function getClassName( n ) {
        return n === current ? 'dates__item dates__item--active' : 'dates__item';
    }

    return (
        <div className="flex__full flex dates">
            { days.map( (item, i) => (
                <p 
                    onClick={ () => setDay(i) }
                    className={ getClassName(i) } 
                    key={i}>
                { formatDate(i+1) }
                </p>)
            )}
        </div>
    )
}

export default DateList;