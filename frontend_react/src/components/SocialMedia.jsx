import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { SlSocialLinkedin } from 'react-icons/sl';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://www.linkedin.com/in/yanis-aityounes/"><SlSocialLinkedin /></a>
        </div>
        <div>
            <a href='https://github.com/yanis900'><BsGithub /></a>
        </div>
    </div>
  )
}

export default SocialMedia