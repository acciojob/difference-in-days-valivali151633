var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    // Calculate the difference in milliseconds
    const timeDiff = parsedDate2.getTime() - parsedDate1.getTime();

    // Calculate the difference in days
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    return daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
