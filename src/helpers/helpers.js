/**
 *
 * @param {string} hourString expect a "HH:MM PM" or "HH:MM AM"
 * @returns an hour string converted from AM/PM format to 0-23 hour format
 */
export const convertHour = (hourString) => {
  if (hourString === "" || !hourString) return "00:00";
  if (hourString.includes("PM")) {
    const hour = +hourString.trim().slice(0, 2) + 12;
    const minutes = hourString.trim().slice(4, 6);

    return `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`;
  } else return hourString.split(" ").at(0);
};
