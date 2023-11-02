import {useEffect, useState} from 'react';
import * as tf from '@tensorflow/tfjs';

export const useTensorFlowLoaded = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    tf.ready().then(() => {
      if (isMounted) {
        setIsLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return isLoaded;
};
