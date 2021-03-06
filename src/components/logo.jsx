/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link.jsx';

export default function Logo({ src, ...rest }) {
  return (
    <Link
    path="/"
    sx={{
      varient: 'links.logo',
      display: 'flex',
      cursor: 'pointer',
      mr: 15,
    }}
    {...rest}
    >
      <Image src={src}/>
    </Link>
  );
}
