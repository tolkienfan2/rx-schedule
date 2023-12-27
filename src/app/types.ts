export type OpeningTime = {
    From: string;
    To: string;
};

export type OpeningHours = {
    Sunday: OpeningTime;
    Weekday: OpeningTime;
    Saturday: OpeningTime;
    Holiday: OpeningTime;
};

export type OpeningDuration = {
    Sunday: number;
    Weekday: number;
    Saturday: number;
    Holiday: number;
    Closed: number;
    RegularWeek: number;
};

type Role = 'Pharmacist' | 'Technician';

export type Staff = {
    Name: string;
    Role: Role;
    MaxWeeklyHours: number;
    MinWeeklyHours: number;
};


