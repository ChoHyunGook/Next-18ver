import React from 'react';
import { connect } from 'react-redux';
import { increaseAsync, decreaseAsync } from '@/modules/user';
import Counter from '@/components/user/UserRegister';

const UserRegisterPage = ({ number, increaseAsync, decreaseAsync }) => {
  return (
    <UserRegister
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

export default connect(
  state => ({
    number: state.counter
  }),
  {
    increaseAsync,
    decreaseAsync
  }
)(UserRegisterPage);