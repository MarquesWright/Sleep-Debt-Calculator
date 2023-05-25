// a function that accepts a day as argument and returns the number of hours slept for the night
const getSleepHours = day => {
    // a conditional to return the hours slept each day
    switch (day) {
        case 'monday':
            return 4;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 6;
            break;
        case 'friday':
            return 8;
            break;
        case 'saturday':
            return 8;
            break;
        case 'sunday':
            return 2;
            break;
    }
};

// a function that gives the total sleep hours that you actually slept using an implicit return
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// a function returns the ideal sleep hours that you prefer
const getIdealSleepHours = idealHours => idealHours * 7;

// a function to calculate sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed.');
    } else {
        console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
};

// start the program
calculateSleepDebt();
