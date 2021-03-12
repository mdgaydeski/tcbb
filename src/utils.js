import dayjs from 'dayjs';

export const dateFormat = (date) => dayjs(date).format('dddd, MMMM D, YYYY h:mm A');

export const orderEventsByDate = (eventList) => {
    const MAX_DATE_VALUE = 8640000000000000;

    return eventList.sort((a, b) => {
        const aDate = new Date(a.performancesCollection.items[0].datetime || MAX_DATE_VALUE);
        const bDate = new Date(b.performancesCollection.items[0].datetime || MAX_DATE_VALUE);

        if(aDate > bDate) {
            return 1
        } else if(aDate < bDate) {
            return -1
        } else {
            return 0;
        }
    });
}

export const orderMembersByInstrument = (memberList) => {
    return memberList.sort((a, b) => {
        if(a.instrument.scoreOrder > b.instrument.scoreOrder) {
            return 1
        } else if (a.instrument.scoreOrder < b.instrument.scoreOrder) {
            return -1
        } else if (a.name > b.name) {
            return 1
        } else if (a.name < b.name) {
            return -1
        } else {
            return 0
        }
    });
}