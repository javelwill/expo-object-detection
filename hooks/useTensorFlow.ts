import {useEffect, useRef, useState} from 'react';
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

type ModelKind = {
  load: () => Promise<any>;
};

export const useTensorFlowModel = (modelKind: ModelKind) => {
  const [model, setModel] = useState(null);

  const isMounted = useRef(true);

  useEffect(() => {
    setModel(null);
    modelKind.load().then((model) => {
      if (isMounted.current) {
        setModel(model);
      }
    });
  }, [modelKind]);

  return model;
};
