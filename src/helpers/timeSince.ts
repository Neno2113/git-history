export const timeSince = (inputDate: string ) => {
    const startDate = new Date(inputDate);
    const currentDate = new Date();
  
    const timeDifferenceInMilliseconds = Number(currentDate) - Number(startDate);
  
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  
    const secondsDifference = Math.floor(timeDifferenceInMilliseconds / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
  
    let formattedRelativeTime;
  
    if (secondsDifference < 60) {
      formattedRelativeTime = rtf.format(-secondsDifference, 'second');
    } else if (minutesDifference < 60) {
      formattedRelativeTime = rtf.format(-minutesDifference, 'minute');
    } else if (hoursDifference < 24) {
      formattedRelativeTime = rtf.format(-hoursDifference, 'hour');
    } else {
      formattedRelativeTime = rtf.format(-daysDifference, 'day');
    }
  
    return formattedRelativeTime;
  }