import { AxiosError, isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ErrorResponse } from 'models';

export const assertFulfilled = <T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> => item.status === 'fulfilled';

export const errorHandler = (requestError: AxiosError) => {
  if (isAxiosError(requestError)) {
    if (requestError?.response?.data) {
      if (requestError.response.status === 404) {
        const status = requestError.response.status;
        const errorMessage =
          (requestError.response as ErrorResponse).data.error ||
          'An error occurred';
        return toast.error(`${status}: ${errorMessage}`);
      } else {
        return Promise.reject(requestError);
      }
    }
  }
};
