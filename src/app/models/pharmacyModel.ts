import { OpeningDuration, OpeningHours, OpeningTime } from "../types";

export class Pharmacy {
    name: string;
    location: string;
    sundayHours: OpeningTime;
    weekdayHours: OpeningTime;
    saturdayHours: OpeningTime;
    holidayHours: OpeningTime;
    sundayDuration: number;
    weekdayDuration: number;
    saturdayDuration: number;
    holidayDuration: number;
    closedDuration: number;
    regularWeek: number;
    holidayWeek: number | undefined;
    openingHours: OpeningHours;
    openingDuration: OpeningDuration;

    constructor(
        name: string,
        location: string,
        sundayHours: OpeningTime,
        weekdayHours: OpeningTime,
        saturdayHours: OpeningTime,
        holidayHours: OpeningTime
    ) {
        this.name = name;
        this.location = location;
        this.sundayHours = sundayHours;
        this.weekdayHours = weekdayHours;
        this.saturdayHours = saturdayHours;
        this.holidayHours = holidayHours;

        this.openingHours = {
            Sunday: this.sundayHours,
            Weekday: this.weekdayHours,
            Saturday: this.saturdayHours,
            Holiday: this.holidayHours
        };

        this.sundayDuration = this.getDuration(this.sundayHours);
        this.weekdayDuration = this.getDuration(this.weekdayHours);
        this.saturdayDuration = this.getDuration(this.saturdayHours);
        this.holidayDuration = this.getDuration(this.holidayHours);
        this.closedDuration = 0;
        this.regularWeek = this.getRegularWeek();

        this.openingDuration = {
            Sunday: this.sundayDuration,
            Weekday: this.weekdayDuration,
            Saturday: this.saturdayDuration,
            Holiday: this.holidayDuration,
            Closed: this.closedDuration,
            RegularWeek: this.regularWeek
        };
    }

    getDuration(openingTime: OpeningTime) {
        const from = parseInt(openingTime.From);
        const to = parseInt(openingTime.To);
        return to - from;
    }

    getRegularWeek() {
        return this.weekdayDuration * 5 + this.saturdayDuration + this.sundayDuration;
    }
}
