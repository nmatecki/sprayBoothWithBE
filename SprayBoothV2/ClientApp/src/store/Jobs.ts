import { Reducer, Action } from "redux";
import { AppThunkAction } from '.';

export interface Job {
    po: number;
    customer: string;
    description: string;
    dateRecieved: Date;
    dateDue: Date;
    quantity: number;
    condition: string;
}

export interface JobBoardState {
    jobs: Job[]
}

interface RequestJobsAction {
    type: 'REQUEST_JOBS';
    startDateIndex: number;
}

interface ReceiveJobsAction {
    type: 'RECEIVE_JOBS';
    jobs: Job[];
}

export const actionCreators = {
    requestJobs: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        debugger;
        if (appState && appState.weatherForecasts) {
            fetch(`job`)
                .then(response => response.json() as Promise<Job[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_JOBS', jobs: data });
                });

            dispatch({ type: 'REQUEST_JOBS', startDateIndex: 1234 });
        }
    }
};

type KnownAction = RequestJobsAction | ReceiveJobsAction


export const reducer: Reducer<JobBoardState> = (state: JobBoardState | undefined, incomingAction: Action): JobBoardState => {
    if (state === undefined) {
        return { jobs: [] };
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_JOBS':
            return state;
        case 'RECEIVE_JOBS':
            debugger;
            return { jobs: action.jobs};
        default:
            return state;
    }
};