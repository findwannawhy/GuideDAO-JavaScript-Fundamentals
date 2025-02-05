export function getNextAge(age) {
  if (age != "") {
    return (Number.parseInt(age, 10) + 1).toString();
  }
  return "error";
}
