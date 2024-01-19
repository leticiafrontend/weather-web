export const getDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('en-US', options)

  return formattedDate
}
