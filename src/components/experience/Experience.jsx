import React from 'react'
import './Experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {SiExpress} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiPandas} from 'react-icons/si'
import {SiNumpy} from 'react-icons/si'
import {GoGraph} from 'react-icons/go'
import {MdAutoGraph} from 'react-icons/md'
import {SiPowerbi} from 'react-icons/si'
import {SiTableau} from 'react-icons/si'
import {IoMdAnalytics} from 'react-icons/io'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 id='start__of__section'>I am Skilled In</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

      <div className="experience__web-developement">
        <h3>Web Application Developement</h3>
        <div className="experience__content">
{/* html */}
          <article className='experience__details'>
            <AiOutlineHtml5 className='experience__details-icons'/>
          <div>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
          </div>
          </article>
{/* css3 */}
            <article className='experience__details'>
            <DiCss3 className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Bootstrap */}
            <article className='experience__details'>
            <FaBootstrap className='experience__details-icons'/>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Tailwind */}
            <article className='experience__details'>
            <SiTailwindcss className='experience__details-icons'/>
            <div>
            <h4>Tailwind</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Javascrypt*/}
            <article className='experience__details'>
            <IoLogoJavascript className='experience__details-icons'/>
            <div>
            <h4>Javasript</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Nodejs */}
          <article className='experience__details'>
            <IoLogoNodejs className='experience__details-icons'/>
            <div>
            <h4>NodeJs</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Express */}
          <article className='experience__details'>
            <SiExpress className='experience__details-icons'/>
            <div>
            <h4>Express</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* React */}
          <article className='experience__details'>
            <SiReact className='experience__details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Redux */}
          <article className='experience__details'>
            <SiRedux className='experience__details-icons'/>
            <div>
            <h4>redux</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Mongo-Db */}
            <article className='experience__details'>
            <SiMongodb className='experience__details-icons'/>
            <div>
             <h4>MongoDb</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
        </div>

      </div>
{/* =========Data Analysis ============= */}


      <div className="experience__data-analysis">
        <h3>Data Analysis Experience</h3>
        <div className="experience__content">
{/* Python */}
            <article className='experience__details'>
            <SiPython className='experience__details-icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Pandas */}
            <article className='experience__details'>
            <SiPandas className='experience__details-icons'/>
            <div>
            <h4>Pandas</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Numpy */}
            <article className='experience__details'>
            <SiNumpy className='experience__details-icons'/>
            <div>
            <h4>Numpy</h4>
            <small className='text-light'>Experience</small> 
            </div>
          </article>
{/* Matplot-lib */}
            <article className='experience__details'>
            <GoGraph className='experience__details-icons'/>
            <div>
            <h4>Matplot-Lib</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Seaborn*/}
            <article className='experience__details'>
            <MdAutoGraph className='experience__details-icons'/>
            <div>
            <h4>Seaborn</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* PowerBi*/}
            <article className='experience__details'>
            <SiPowerbi className='experience__details-icons'/>
            <div>
            <h4>PowerBi</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Tableau*/}
            <article className='experience__details'>
            <SiTableau className='experience__details-icons'/>
            <div>
            <h4>Tableau</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
{/* Exploratory Data Analysis */}
            <article className='experience__details'>
            <IoMdAnalytics className='experience__details-icons'/>
            <div>
            <h4>EDA</h4>
            <small className='text-light'>Experience</small>
            </div>
          </article>
        </div>

      </div>


      </div>
    </section>
  )
}

export default Experience
