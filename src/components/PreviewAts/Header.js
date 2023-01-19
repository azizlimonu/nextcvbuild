import React from 'react'
import { Icons } from '../UI/Icons'
import style from '../../styles/previewAts/Header.module.css'

const Header = ({ info }) => {
  return (
    <header className={style.header}>
      <div className={style.name}>
        <p>
          <span className={style.firstname}>{info.firstName}</span>
          <span className={style.lastname}>{info.lastName}</span>
        </p>
        <h4 className={style.title}>{info.title}</h4>
      </div>

      <div className={style.links}>
        <ul>
          {info.phoneNumber && (
            <li>
              {info.phoneNumber}
              <Icons
                nameIcon='BsTelephoneFill'
                className='dark'
                link={false}
              />
            </li>
          )}

          {info.email && (
            <li>
              {info.email}
              <Icons
                nameIcon='MdEmail'
                className='dark'
                link={false}
              />
            </li>
          )}

          {info.address && (
            <li>
              {info.address}
              <Icons
                nameIcon='HiHome'
                className='dark'
                link={false}
              />
            </li>
          )}

          {info.linkedIn && (
            <li>
              {info.linkedIn}
              <Icons
                nameIcon='BsLinkedin'
                className='dark'
                link={false}
              />
            </li>
          )}

          {info.facebook && (
            <li>
              {info.facebook}
              <Icons
                nameIcon='BsFacebook'
                className='dark'
                link={false}
              />
            </li>
          )}
        </ul>
      </div>
    </header>
  )
}

export default Header