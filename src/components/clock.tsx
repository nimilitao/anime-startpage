import { useEffect, useState } from 'react'
import '../global.css'

const Clock = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      const days = [
        'SUNDAY',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
      ]
      const now = new Date()
      const dateString = `${days[now.getDay()]} ${('0' + now.getDate()).slice(
        -2
      )}/${('0' + (now.getMonth() + 1)).slice(-2)}/${now.getFullYear()} ${(
        '0' + now.getHours()
      ).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${(
        '0' + now.getSeconds()
      ).slice(-2)}`

      setTime(dateString)
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-haxcorp text-6xl text-black" id="clock">
      {time}
    </div>
  )
}

export default Clock
