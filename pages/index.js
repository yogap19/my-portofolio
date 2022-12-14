import Layout from '../components/Layout';
import Profile from './profile';
import Descript from './descript';
import ScoreList from './scoreList';
import Curiculum from './cv';
import Experience from './experience';
import Test from './test/table';
import { useRef } from 'react';

export default function Home() {
  const score = useRef();
  const cv = useRef();

  const scrollHandler = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Layout>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2"
        ref={cv}
      >
        <Descript />
        <Profile />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 mx-auto w-fit ">
        <div className="mx-10">
          <Curiculum />
        </div>
        <div className="mx-10">
          <Experience />
        </div>
      </div>
      <div className="flex flex-col fixed right-0 top-10">
        <button
          onClick={() => scrollHandler(cv.current)}
          className="button-fixed"
        >
          CV
        </button>
        <button
          onClick={() => scrollHandler(score.current)}
          className="button-fixed"
        >
          DNS
        </button>
      </div>
      <div ref={score}>
        <ScoreList />
      </div>
    </Layout>
  );
}
