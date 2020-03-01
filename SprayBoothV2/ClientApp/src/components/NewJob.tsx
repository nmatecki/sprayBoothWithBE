import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CounterStore from '../store/Counter';
import { CustomerInfo } from './JobForm/CustomerInfo';
import { PartInfo } from './JobForm/Part';
import { Process } from './JobForm/Process';
import { Quality } from './JobForm/Quality';
import { Packaging } from './JobForm/Packaging';

type NewJobProps =
    CounterStore.CounterState &
    typeof CounterStore.actionCreators &
    RouteComponentProps<{}>;

class NewJob extends React.PureComponent<NewJobProps> {
    public render() {
        return (
            <React.Fragment>
                <CustomerInfo></CustomerInfo>
                <PartInfo></PartInfo>
                <Process></Process>
                <Quality></Quality>
                <Packaging></Packaging>
            </React.Fragment>
        );
    }
};

export default connect(
    (state: ApplicationState) => state.counter,
    CounterStore.actionCreators
)(NewJob);
