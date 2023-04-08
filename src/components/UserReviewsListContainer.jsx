import { useNavigate } from 'react-router-native';

import useDeleteReview from '../hooks/useDeleteReview';
import useUserReviews from '../hooks/useUserReviews';
import UserReviews from './UserReviews';

const UserReviewsListContainer = () => {
  const navigate = useNavigate()
  const { reviews } = useUserReviews()
  const [ deleteReview ] = useDeleteReview();

  return <UserReviews reviews={reviews} navigate={navigate} deleteReview={deleteReview}/>
};

export default UserReviewsListContainer;