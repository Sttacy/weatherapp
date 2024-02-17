export function formateDate(date, option) {
  const formatedDate = date.toLocaleDateString(date, option);
  return formatedDate;
}
export function formateTime(date, option) {
  const formatedTime = date.toLocaleTimeString([], option);
  return formatedTime;
}
