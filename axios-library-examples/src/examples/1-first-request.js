import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products1';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.statusText);
      console.log(error.response);
    }
  };

  useEffect(() => {
    console.log('first axios request');
    fetchData();
  }, []);

  return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
