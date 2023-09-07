export default function durationPosted(time: string) : string {
  const currentTime: Date = new Date()
  const timePosted: Date = new Date(time)
  const distance: number = currentTime.getTime() - timePosted.getTime()
  const monthName: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const timeUnits = [
    { unit: 'd', duration: 24 * 60 * 60 * 1000 },
    { unit: 'h', duration: 60 * 60 * 1000 },
    { unit: 'm', duration: 60 * 1000 },
    { unit: 's', duration: 1000 },
  ];

  for (const { unit, duration } of timeUnits) {
    const timeDistance = Math.floor(distance / duration);
    if (timeDistance < 29) return `${timeDistance}${unit}`;
    if (timeDistance > 28 && timeDistance < 360) return `${monthName[timePosted.getMonth()]} ${timePosted.getDate()}`
  }

  return `${timePosted.getFullYear()} ${monthName[timePosted.getMonth()]} ${timePosted.getDate()}`;
}