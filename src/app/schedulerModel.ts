import { months } from './constants';

export class Scheduler {
    month: string;
    year: string;

    constructor(month: string, year: string) {
        this.month = month;
        this.year = year;
    }

    getDates() {
        const daysInMonth = new Date(parseInt(this.year), months.indexOf(this.month) + 1, 0).getDate();
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        return daysArray;
    }

    getDayOfFirstDate() {
        return new Date(parseInt(this.year), months.indexOf(this.month), 1).getDay();
    }
}

