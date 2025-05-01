/** @returns {string} YYYY-MM-DD */
const convertDateToString = (targetDate: Date) => {
  const year = targetDate.getFullYear().toString();
  let month = (targetDate.getMonth() + 1).toString();
  if (month.length === 1) {
    month = `0${month}`;
  }
  let date = targetDate.getDate().toString();
  if (date.length === 1) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export { convertDateToString };
