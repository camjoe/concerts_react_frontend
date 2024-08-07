interface Showtime {
  day: string;
  month: string;
  year: string;
  time: string;
}

export function dateToShowtimeString(date: Date): string {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateJs = new Date(date);

  const dayOfMonth = dateJs.getDate();
  const day = weekDays[dateJs.getDay()];
  const month = months[dateJs.getMonth()];
  const time = dateJs.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return day + ' ' + month + ' ' + dayOfMonth + ' - Doors Open ' + time;
}

export function dateToDayString(date: Date): string {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dateJs = new Date(date);

  const dayOfMonth = dateJs.getDate();
  const day = weekDays[dateJs.getDay()];
  const month = months[dateJs.getMonth()];

  return day + ' ' + month + ' ' + dayOfMonth
}

export function dateToDoorsOpen(date: Date): string {
  const dateJs = new Date(date);
  const time = dateJs.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return 'Doors Open ' + time;
}

export function dateToShowtime(date: Date): Showtime {
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const day = weekDays[date.getDay()];
  const month = months[date.getMonth()];
  const year = months[date.getFullYear()];
  const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

  return {
    day: day,
    month: month,
    year: year,
    time: time
  } as Showtime;
}