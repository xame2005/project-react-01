import React from 'react';
import Media from 'react-bootstrap/Media';
import Image from 'react-bootstrap/Image';
import { TelephoneInbound } from 'react-bootstrap-icons';
import { AiFillGithub } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

const Header = props => {
  return (
    <Media>
      <img
        width={100}
        height={100}
        className="mr-3"
        src="/src/assets/images/profile.jpg"
        alt="Generic placeholder"
      />
      <Media.Body>
        <ul>
          <h2>{props.name}</h2>
          <li>
            <GrReactjs size="1.4em" />
            {props.profession}
          </li>

          <li>
            <TelephoneInbound size="1.2em" /> {props.phone}
          </li>
          <li>
            <AiFillGithub size="1.2em" />
            <a href={props.website}>{props.website}</a>
          </li>
          <li>
            <AiOutlineMail />
            <a href={props.email}>{props.email}</a>
          </li>
          <li>
            <GoLocation />
            {props.address}
          </li>
        </ul>
      </Media.Body>
    </Media>
  );
};

export default Header;
