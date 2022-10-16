
const DateToStr = props => {
    const date = props.date;

    return (
        <p>{date.toLocaleDateString('en-GB')}</p>
    )
}

export default DateToStr;