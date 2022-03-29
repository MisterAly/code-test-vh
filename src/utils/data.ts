export function DataFormat(data: string){
  const formatData = Date.now() - new Date(data).getTime()
  const hours = Math.floor(formatData / 3600000)
  const days = Math.floor(hours / 24)
  if(hours > 24){
    return days

  }else{
    return hours
  }
}