// date

let myDate = new Date();
console.log(myDate.toString()); // Output: Current date and time in string format
console.log(myDate.toDateString()); // Output: Current date in string format
console.log(myDate.toLocaleString()); // Output: Current date in locale-specific string format
console.log(typeof myDate); // Output: object

let myCreatedDate = new Date('2022-01-01');
console.log(myCreatedDate.toDateString()); // Output: Sat Jan 01 2022 00:00:00 GMT+0000 
// (Coordinated Universal Time)


let myTimestamp = Date.now();
console.log(myTimestamp); // Output: Current timestamp in milliseconds since January 1, 1970

let myDateFromTimestamp = new Date(myTimestamp);
console.log(myDateFromTimestamp.toString()); // Output: Current date and time based on the 
// timestamp


console.log(myCreatedDate.getTime()); // Output: Timestamp in milliseconds for the created 
// date
console.log(Math.floor(Date.now() / 1000));
 // Output: Timestamp in seconds since January 1, 1970

 let newDate = new Date();
 console.log(newDate.getFullYear()); // Output: Current year (e.g., 2024)
 console.log(newDate.getMonth()); // Output: Current month (0-11, where 0 is January and 11 is December)
 console.log(newDate.getDate()); // Output: Current day of the month (1-31)
 console.log(newDate.getHours()); // Output: Current hour (0-23)
 console.log(newDate.getMinutes()); // Output: Current minute (0-59)
 console.log(newDate.getSeconds()); // Output: Current second (0-59)
