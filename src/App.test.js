import { render, screen } from '@testing-library/react';
import App from './App';
//import {findByDate} from './Controller/findByDate';
import Attendance from './components/Attendance';
import postData from './Controller/postData';

import findWithDate from './Controller/findByDate';
  
  //


  // setup a DOM element as a render target

  


  // cleanup on exiting
 







const can = {
  key: '2',
  ounces: 12,
};
const i=new Attendance("3");
const object=new Attendance("89", "4");


    

describe('the can1', () => {
 


   
    test('has 12 ounces', () => {
      postData(object.getKey(), object.getDate());
  const a= findWithDate;
      expect(a.getDate()).toEqual(object.getDate());
    });
})


