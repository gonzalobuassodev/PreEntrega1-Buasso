import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import { Layout } from './components/Layout';
function App() {
  return (
    <div className='App'>
      <Layout>
        <ItemListContainer />
      </Layout>
    </div>
  );
}

export default App;
