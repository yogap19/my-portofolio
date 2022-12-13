import Layout from '../components/Layout';
import Profile from './profile';
import Descript from './descript';
import ScoreList from './scoreList';
import Test from './test/table';
export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Descript />
        <Profile />
      </div>
      <ScoreList />
    </Layout>
  );
}
