export class Day {
    name: String;
    servings: String[];
    total_day_rate: number;
    breakfast_day_rate: number;
    breakfast_attendance_count: number;
    lunch_day_rate: number;
    lunch_attendance_count: number;
    dinner_day_rate: number;
    dinner_attendance_count: number;
    snacks_day_rate: number;
    snacks_attendance_count: number;

    constructor(name: String) {
        this.name = name,
            this.servings = ['breakfast', 'lunch', 'dinner', 'snacks'],
            this.total_day_rate = 0.0,
            this.breakfast_day_rate = 0.0,
            this.breakfast_attendance_count = 0,
            this.lunch_day_rate = 0.0,
            this.lunch_attendance_count = 0,
            this.dinner_day_rate = 0.0,
            this.dinner_attendance_count = 0,
            this.snacks_day_rate = 0.0,
            this.snacks_attendance_count = 0
    }
}

export class Expense {
    name: String;
    price: number;
    servings: String[];
    specific_day: boolean;
    target_day: String;

    constructor(name: String, price: number) {
        this.name = name,
            this.price = price,
            this.servings = [],
            this.specific_day = false,
            this.target_day = ""
    }
}

export class Attendance {
    day_name: String;
    present: boolean;
    servings: String[];

    constructor(day_name: String) {
        this.day_name = day_name,
            this.present = false,
            this.servings = ['breakfast', 'lunch', 'dinner', 'snacks']
    }
}

export class Person {
    name: String;
    attendance: Attendance[];
    cost: number;

    constructor(name: String, days: Day[]) {
        this.name = name,
            this.attendance = this.createAttendances(days)
        this.cost = 0.0
    }

    createAttendances(days: Day[]) {
        let attendances = [];
        for (var d of days) {
            attendances.push(new Attendance(d.name));

        }
        return attendances
    }
}