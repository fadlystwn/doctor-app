import axios from 'axios';
import logger from '../helper/logger';

const url = 'https://run.mocky.io/v3/c9a2b598-9c93-4999-bd04-0194839ef2dc';

const fetchDoctors = async () => {
  try {
    const { data } = await axios.get(url);
    logger(data);
    return { isSuccess: true, data: data.data };
  } catch (err) {
    logger(err);
    return {
      isSuccess: false,
      msg: err?.message || 'Error, but no error message found.'
    };
  }
};

export default fetchDoctors;
