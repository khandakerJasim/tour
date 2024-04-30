export default function Dateformate(date, config) {
  const defaultoption = { day: "numeric", month: "long", year: "numeric" };
  const option = config ? config : defaultoption;
  return new Date(date).toLocaleDateString("en-us", option);
}
