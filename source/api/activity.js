import requestFns from './functions';

const activity = {
    latest () {
        return requestFns.find('/latestActivity');
    }
};

export default activity;
