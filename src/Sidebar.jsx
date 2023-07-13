import { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import { links, social } from './data'

const Sidebar = () => {
  const { isSidebarOpen, closeSideBar } = useGlobalContext()

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>

      <ul className="links">
        {links.map((link) => {
          const { id, text, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>

      <ul className="social-links">
        {social.map((link) => {
          const { id, text, url, icon } = link
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
export default Sidebar
