function calculateDaysBetweenDates(begin, end) { 
    // Calculate the difference in milliseconds
    return Math.round((end - begin) / (1000 * 60 * 60 * 24));
}  