import React  from 'react';

 
 
const Buttons = React.lazy(() => import('./Components/Services/page'));
const Booking = React.lazy(() => import('./Components/Booking/Page'));
const ConfirmInfo = React.lazy(() => import('./Components/ConfirmInformation/page'));


const routes = [
 
  { path: '/', name: 'Services', component: Buttons, exact: true },
  { path: '/booking', name: 'Booking', component: Booking }, 
  { path: '/confirmInformation', name: 'Confirm Information', component: ConfirmInfo }, 
 
  
];

export default routes;
