import { useNavigate } from 'react-router-native';

import useDeleteReview from '../hooks/useDeleteReview';
import useUserReviews from '../hooks/useUserReviews';
import UserReviews from './UserReviews';

const UserReviewsListContainer = () => {
  const navigate = useNavigate()
  const { reviews, fetchMore } = useUserReviews({
    first: 3
  })
  const [deleteReview] = useDeleteReview();
  
  const onEndReach = () => {
    fetchMore()
  }

  return <UserReviews reviews={reviews} navigate={navigate} deleteReview={deleteReview} onEndReach={onEndReach}/>
};

export default UserReviewsListContainer;