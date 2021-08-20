import { useState, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

export default function useInfiniteScroll({
  ref = null,
  options = {
    threshold: 0,
  },
  forward = false,
  callback = () => {},
}) {
  const [isFetching, setIsFetching] = useState(false);

  const isBottomVisible = useIntersectionObserver(ref, options, forward);

  useEffect(() => {
    isBottomVisible && setIsFetching(true);
  }, [isBottomVisible]);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
