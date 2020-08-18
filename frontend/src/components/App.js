import React from 'react';
import HomePage from './HomePage';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import '../index.scss';

const stripePromise = loadStripe(
  'pk_test_51HBFs0IW0ITzK0bOSV8vWIivEJEQ3a9P3CNhfDYQXc44DguYFXcxPQRrcuq2TWfN30wZKUPv1gzz0tPUhYkBwcCF00GC7Rj5oJ'
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
  );
}

export default App;
