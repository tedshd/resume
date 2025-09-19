import React from "react"

class Nav extends React.Component {
  render() {
    return (
    <nav>
      <ul>
          <li>
              <a href="https://tedshd.io" target="_blank" title="web" rel="noreferrer">Web</a>
              <span className="print">https://tedshd.io</span>
          </li>
          <li>
              <a href="https://github.com/tedshd" target="_blank" title="GitHub" rel="noreferrer">GitHub</a>
              <span className="print">https://github.com/tedshd</span>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/tedshd" target="_blank"
                  title="Linkedin" rel="noreferrer">Linkedin</a>
              <span className="print">https://www.linkedin.com/in/tedshd</span>
          </li>
          <li>
              <a href="http://blog.tedshd.io" target="_blank" title="DevelopNote" rel="noreferrer">DevelopNote</a>
              <span className="print">http://blog.tedshd.io</span>
          </li>
          <li>
              <a href="http://www.slideshare.net/tysh310246" target="_blank"
                  title="SlideShare" rel="noreferrer">SlideShare</a>
              <span className="print">http://www.slideshare.net/tysh310246</span>
          </li>
      </ul>
    </nav>
    )
  }
}

export default Nav
