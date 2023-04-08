import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useDebounce } from 'use-debounce';

import useRepositories from '../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [order, setOrder] = useState('latest')
  const [searchKeyword, setSearchKeyword] = useState()
  const [searchKeywordDebounce] = useDebounce(searchKeyword, 500);

  const { repositories } = useRepositories(order, searchKeywordDebounce)
  const navigate = useNavigate()

  const onChange = (value) => {
    setSearchKeyword(value)
  }

  return (
    <View>
      <TextInput value={searchKeyword} onChangeText={onChange} />
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