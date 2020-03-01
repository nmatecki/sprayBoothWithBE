import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as JobStore from '../store/Jobs';

export const JobBoard = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    debugger;
    dispatch(JobStore.actionCreators.requestJobs());
  })


  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">PO#</th>
            <th scope="col">Customer</th>
            <th scope="col">Description</th>
            <th scope="col">Date Received</th>
            <th scope="col">Due Date</th>
            <th scope="col">Quantity</th>
            <th scope="col">Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Moto</td>
            <td>Phones</td>
            <td>1/23/2020</td>
            <td>3/23/2020</td>
            <td>2000</td>
            <td>In Progress</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>US Army</td>
            <td>Shells</td>
            <td>1/23/2020</td>
            <td>2/02/2020</td>
            <td>1500</td>
            <td>Complete</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Nextel</td>
            <td>Batteries</td>
            <td>1/23/2020</td>
            <td>4/02/2020</td>
            <td>4000</td>
            <td>On Hold</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
