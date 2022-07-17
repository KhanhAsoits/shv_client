import { Outlet } from 'react-router-dom';
import { AuthorNavbar } from './author.navbar';

import '../../styles/author.style.css';

export const AuthorsLayout = (props) => {
  return (
    <div className={'bg-gray-50 author-layout'}>
      <AuthorNavbar />
    </div>
  );
};
