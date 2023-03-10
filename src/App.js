import './App.css'
import { useTranslation, Trans } from 'react-i18next'
import Nav from './components/nav'

import jobsList from './data/job.json'

import linksList from './data/links.json'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="langs">
          <button onClick={() => changeLanguage('zh-TW')}>中文</button>
          <button onClick={() => changeLanguage('en')}>English</button>
        </div>
        <div className="pure-g">
          <div id="avatar_container" className="pure-u">
            <img id="avatar" src="https://s.gravatar.com/avatar/4a867d2c11c031308e2f1abf0220c403?s=200" alt="Ted"
              title="Ted" />
          </div>
          <div className="pure-u">
            <h1 id="title">Ted's {t('resume')}</h1>
            <Nav></Nav>
            <section><span className="print">{t('this_resume_url_is')} https://tedshd.github.io/resume</span></section>
          </div>
        </div>
      </header>
      <main>
        <h2>{t('info')}</h2>
        <section>
          <ul>
            <li>許承德 (Ted)</li>
            <li>tedshd[at]gmail.com</li>
            {
              jobsList.map((element, index) => {
                return <li key={index}>{element.company}</li>
              })
            }
            <li>National Taiwan Ocean University(BS) Harbor and River Engineering (~ 2011)</li>
            <li>National Taiwan Ocean University Dormitory network maintenance team (2009 ~ 2010)</li>
          </ul>
        </section>
        <h2>{t('experience')}</h2>
        <section>
          {
            jobsList.map((element, index) => {
              return <dl key={index}><dt>{element.company}</dt>{
                element.content.map((el, i) => {
                  return <dd key={i}>{t(el)}{ (linksList[el]) ? <a className='extend_link' href={linksList[el]} target='_blank'>link</a>: ''}</dd>
                })
              }</dl>
            })
          }
        </section>
        <h2>{t('introduction')}</h2>
        <article>{t('intro')}</article>
        <h2>{t('specialty')}</h2>
        <section>
          <ul>
            <li>{t('s_1')}</li>
            <li>{t('s_2')}</li>
            <li>{t('s_3')}</li>
            <li>{t('s_4')}</li>
            <li>{t('s_5')}</li>
            <li>{t('s_6')}</li>
            <li>{t('s_7')}</li>
            <li>{t('s_8')}</li>
            <li>{t('s_9')}</li>
          </ul>
        </section>
        <h2>{t('side_project')}</h2>
        <section>
          <ul>
            <li>
              <a href="https://gameprice.tw" target={'_blank'}>比價找遊戲</a>
            </li>
            <li>
              <a href="https://groups.link/" target={'_blank'}>groups link</a>
            </li>
            <li>
              <a href="https://top5youtube.com/" target="_blank">Top 5 YouTube videos in year
              </a>
            </li>
            <li>
              <a href="https://qrcode-make.web.app/" target="_blank">QRcode maker</a>
            </li>
            <li>
              <a href="https://program.tex.com.tw/" target="_blank">TEX programmable mechanical keyboard web configurator</a>
            </li>
          </ul>
        </section>
        <h2>{t('skill')}</h2>
        <section className='pure-g'>
          <div className="pure-u-1 pure-u-md-1-3">
            <h3>{t('front_end')}</h3>
            <ul>
              <li>HTML</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>CSS3</li>
              <li>CSSlevel4</li>
              <li>Sass</li>
              <li>compass</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>yui</li>
              <li>AngularJS1</li>
              <li>Angular</li>
              <li>Vue.js</li>
              <li>React</li>
            </ul>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <h3>{t('back_end')}</h3>
            <ul>
              <li>PHP</li>
              <li>Codeigniter</li>
              <li>Laravel</li>
              <li>golang</li>
              <li>Python</li>
              <li>MySQL</li>
              <li>Redis</li>
              <li>Apache</li>
              <li>Nginx</li>
            </ul>
          </div>
          <div className="pure-u-1 pure-u-md-1-3">
            <h3>{t('service')}</h3>
            <ul>
              <li>Google Cloud Platform</li>
              <li>firebase</li>
              <li>AWS</li>
              <li>CloudFlare</li>
              <li>Google Analytics</li>
              <li>Facebook API</li>
              <li>Google API</li>
              <li>Google Adsense</li>
              <li>DFP(DoubleClick for Publishers)</li>
            </ul>
          </div>
        </section>
        <h2>{t('tool')}</h2>
        <section>
          <ul>
            <li>Docker</li>
            <li>Vim</li>
            <li>Visual Studio Code</li>
          </ul>
        </section>
        <h2>{t('record')}</h2>
        <section>
          <h3>2013</h3>
          <article>
            <p>Participate in Yahoo Hack Taiwan 2013</p>
            <p><a href="https://www.youtube.com/watch?v=KfV3ZbfyaMc" target="_blank">demo</a></p>
          </article>
          <h3>2014</h3>
          <article>
            <p>Participate in 2014 Samsung App develop game(The second place)(Best Smart TV develop)</p>
            <p><a href="http://edm.bnext.com.tw/2014samsungdeveloper/about_app_content.html" target="_blank">Info</a></p>
            <p><a href="https://www.youtube.com/watch?v=f1T9q5V3s48" target="_blank">demo</a></p>
            <p>Been invited be a FED Party 12 lecturer</p>
            <p><a href="https://www.youtube.com/watch?v=vr5HtuNX4p4" target="_blank">YouTube</a></p>
            <p><a href="https://tedshd.github.io/FED_Party_12/" target="_blank">demo</a></p>
          </article>
          <h3>2015</h3>
          <article>
            <p>Participate in 2015 Hsinchu hackathon(champion)</p>
            <img className="pure-img" src="https://c3.staticflickr.com/9/8353/30009083466_6203d7c9d0_c.jpg" alt="2015 Hsinchu hackathon" />
            <p><a href="https://www.flickr.com/gp/78340210@N04/1hyaa5" target="_blank">Design</a></p>
            <p><a href="https://tedshd.io/2015_hsinchu_hackthon/" target="_blank">demo</a></p>
          </article>
          <h3>2016</h3>
          <article>
            <p>Participate in 一秒搞懂政府網站創意競賽(通觀全局獎)</p>
            <img className="pure-img" src="https://c7.staticflickr.com/9/8737/28080293190_e26d880d9f_c.jpg" alt="一秒搞懂政府網站創意競賽" />
            <p>Share firebase with WTT #10</p>
            <p><a href="https://www.youtube.com/watch?v=ppyBS2Hbf4A" target="_blank">Video</a></p>
            <p><a href="https://docs.google.com/presentation/d/1we7yKYl1FtvmLaLdrLHml1j49LCd5qIVC8F04hyjqtM/edit?usp=sharing" target="_blank">Firebase slide share</a></p>
          </article>
          <h3>2017</h3>
          <article>
            <p>Share 了解 JavaScript 記憶體管理來調整效能與畫面入門 with Node 線上讀書會</p>
            <p><a href="https://www.youtube.com/watch?v=lNqJDqycSEo" target="_blank">Video</a></p>
            <p><a href="https://hackmd.io/p/ByoQ6xWfZ#/" target="_blank">slide share</a></p>
            <p>資料應用黑客松－嘉義黑蚵松(最佳人氣獎)</p>
            <img src="https://farm5.staticflickr.com/4419/37197944845_ef8138c855_b.jpg" alt="嘉義黑蚵松" className="pure-img" />
          </article>
          <h3>2018</h3>
          <article>
            <p>FEDC 2018 Front-End Workshop 講者</p>
            <p><a href="http://2018.fedc.tw/" target="_blank">FEDC 2018 - Front-End x Design Conference</a></p>
          </article>
        </section>
        <h2>{t('entertainment')}</h2>
        <section>
          <ul>
            <li>{t('bike')}</li>
            <li>{t('badminton')}</li>
            <li>{t('reading')}</li>
            <li>{t('acg')}</li>
            <li>{t('keyboard')}</li>
            <li>{t('lego')}</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
