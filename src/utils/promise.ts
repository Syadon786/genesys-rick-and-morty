import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ErrorResponse } from 'models';

export const assertFulfilled = <T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> => item.status === 'fulfilled';

export const errorHandler = (requestError: AxiosError) => {
  if (isAxiosError(requestError)) {
    if (requestError?.response?.data) {
      switch (requestError.response.status) {
        case 400:
          return Promise.reject(requestError);
        case 404:
          const status = requestError.response.status;
          const errorMessage =
            (requestError.response as ErrorResponse).data.error ||
            'An error occurred';
          return toast.error(`${status}: ${errorMessage}`);
        default:
          return Promise.reject(requestError);
      }
    }
  }
};
