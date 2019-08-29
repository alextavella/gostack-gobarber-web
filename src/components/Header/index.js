import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-dark.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Alex Tavella</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>

            <img
              src="https://api.adorable.io/avatars/50/asdsada.png"
              alt="Profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
