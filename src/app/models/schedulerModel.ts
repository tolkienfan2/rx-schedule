import { months } from '../constants';

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

    getWeeks() {
        const daysArray = this.getDates();
        const dayOfFirstDate = this.getDayOfFirstDate();
        const weeks = [];
        let week = [];
        
        for (let i = 0; i < dayOfFirstDate; i++) {
            week.push(null);
        }
        for (let i = 0; i < daysArray.length; i++) {
            week.push(daysArray[i]);
            if (week.length === 7) {
                weeks.push(week);
                week = [];
            }
        }
        if (week.length > 0) {
            for (let i = week.length; i < 7; i++) {
                week.push(null);
            }
            weeks.push(week);
        }
        return weeks;
    }
}

