export const parseDate = (date) => {
    let dateArray = date.split('T')
    dateArray = dateArray[0].split('-')
    dateArray = dateArray.reverse()
    return dateArray.join('/')
  }
