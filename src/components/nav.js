import React from "react"

class Nav extends React.Component {
  render() {
    return (
    <nav>
      <ul>
          <li>
              <a href="https://tedshd.io" target="_blank" title="web">Web</a>
              <span className="print">https://tedshd.io</span>
          </li>
          <li>
              <a href="https://github.com/tedshd" target="_blank" title="GitHub">GitHub</a>
              <span className="print">https://github.com/tedshd</span>
          </li>
          <li>
              <a href="https://www.linkedin.com/in/tedshd" target="_blank"
                  title="Linkedin">Linkedin</a>
              <span className="print">https://www.linkedin.com/in/tedshd</span>
          </li>
          <li>
              <a href="http://blog.tedshd.io" target="_blank" title="DevelopNote">DevelopNote</a>
              <span className="print">http://blog.tedshd.io</span>
          </li>
          <li>
              <a href="http://www.slideshare.net/tysh310246" target="_blank"
                  title="SlideShare">SlideShare</a>
              <span className="print">http://www.slideshare.net/tysh310246</span>
          </li>
          <li>
              <a href="http://codepen.io/tedshd/" target="_blank" title="CodePen">CodePen</a>
              <span className="print">http://codepen.io/tedshd/</span>
          </li>
          <li>
              <a href="https://www.facebook.com/chander.shiu" target="_blank"
                  title="Facebook">Facebook</a>
              <span className="print">https://www.facebook.com/chander.shiu</span>
          </li>
      </ul>
    </nav>
    )
  }
}

export default Nav
