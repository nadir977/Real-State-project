import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { MdSunny } from 'react-icons/md'

const ThemeToggle = () => {


  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setIsDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-[35px] h-[35px] bg-gray-200 dark:bg-black border-border
       bg-main dark:text-white rounded-full flex items-center cursor-pointer justify-center ">
      {isDark ?  <MdSunny className='text-yellow-500 text-[20px]'/>: <FaMoon className='text-blue-600'/>}
    </button>
  )
}

export default ThemeToggle