import dayjs from 'dayjs';

const DateFormat = ({ date }) => {
    return dayjs(date).format('dddd, MMMM D, YYYY h:mm A')
}

export default DateFormat;