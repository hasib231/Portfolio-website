import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGtOoy1i9IMQwAAAYkgy_XoJgQY52Wf0-izOef5HUqvNd3qQ7SaVIzclhuMscMVARxxhHMwg_J0E_QjdmY4ySsq6le6zsUCZxMiPi-yRU8i6BG7-zm8CnoMg7KsOOZ_ZYfncAg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhasibul-hasan-699230190"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/hasib231" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default Socials;