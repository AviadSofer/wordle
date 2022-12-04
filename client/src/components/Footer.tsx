import { Link, Route, Routes } from 'react-router-dom';
import ReportWord from './ReportWord';

const Footer: React.FC = () => {
  return (
    <footer className='pb-3'>
      <Routes>
        <Route path='/word/:id' element={<ReportWord />} />

        {new Array(8).fill(0).map((_, i) => (
          <Route
            key={i}
            path={`/${i + 4}-letters`}
            element={
              <Link key={i + 4} to={`/all-words/${i + 4}`}>
                <span className='mt-1 cursor-pointer text-base font-medium text-font underline'>
                  כל המילים עם {i + 4} אותיות
                </span>
              </Link>
            }
          />
        ))}

        <Route
          path={'/*'}
          element={
            <Link to={'/all-words/5'}>
              <span className='mt-1 cursor-pointer text-base font-medium text-font underline'>
                כל המילים עם 5 אותיות
              </span>
            </Link>
          }
        />
      </Routes>
    </footer>
  );
};

export default Footer;
