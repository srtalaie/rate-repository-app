import { useNavigate } from 'react-router-native';
import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const navigate = useNavigate()

  return <RepositoryListContainer repositories={repositories} navigate={navigate} />
};

export default RepositoryList;