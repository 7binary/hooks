import axios from 'axios';
import React, { useState } from 'react';

interface Params {
  url: string;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  body: any;
}

const useRequest = ({ url, method = 'post', body = {} }: Params) => {
  const [errors, setErrors] = useState<JSX.Element | null>(null);

  const doRequest = (params = {}) => new Promise(async (resolve, reject) => {
    try {
      // @ts-ignore
      const response = await axios[method](url, { ...body, ...params });
      setErrors(null);
      resolve(response);
    } catch (err) {
      setErrors((
        <div className="alert alert-danger">
          <h4>Errors:</h4>
          <ul className="my-0">
            {err.response.data.errors.map((e: Error) => (
              <li key={e.message}>{e.message}</li>
            ))}
          </ul>
        </div>
      ));
    }
  });

  return { doRequest, errors };
};

export default useRequest;
