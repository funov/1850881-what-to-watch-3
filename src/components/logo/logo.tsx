import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/app-route.ts';

type LogoProps = {
  isLight: boolean;
}

export function Logo({isLight}: LogoProps) {
  return (
    <div className="logo">
      <Link to={AppRoute.Main} className={isLight ? 'logo__link logo__link--light' : 'logo__link'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
