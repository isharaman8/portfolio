import "./topbar.scss"
import {Mail} from "@material-ui/icons"
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
  <div className={`topbar ${menuOpen ? "active" : ""}`}>
    <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">Genius.</a>
        <div className="itemContainer">
        <LinkedInIcon className="icon"/>
        <a className="linkedInHref" href="https://lms.masaischool.com/">Aman Kumar</a>
        </div>
        <div className="itemContainer">
        <Mail className="icon"/>
        <span>isharaman8@gmail.com</span>
        </div>
      </div>

      <div className="right">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  </div>
  )
}
