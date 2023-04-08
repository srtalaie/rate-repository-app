import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { View } from 'react-native';
import { useNavigate } from 'react-router-native';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')

  const { repositories } = useRepositories(order)
  const navigate = useNavigate()

  return (
    <View>
      <Picker
        selectedValue={order}
        onValueChange={(itemValue) =>
          setOrder(itemValue)
        }>
        <Picker.Item label="Latest" value="latest" />
        <Picker.Item label="Highest to Lowest" value="highest" />
        <Picker.Item label="Lowest to Highest" value="lowest" />
      </Picker>
      <RepositoryListContainer repositories={repositories} navigate={navigate} />
    </View>
  )
};

export default RepositoryList;