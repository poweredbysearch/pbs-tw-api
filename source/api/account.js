import requestFns from './functions';

const account = {
    account () {
        return requestFns.find('/account');
    },

    authenticate () {
        return requestFns.find('/authenticate');
    }
};

export default account;
