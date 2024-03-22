import {useSelector} from 'react-redux';

const useAppSelector = (callback) => {
  return useSelector(callback);
};

export default useAppSelector;
