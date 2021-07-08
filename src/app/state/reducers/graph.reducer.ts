import { IApplicationState, IGraphState, initialState } from '../app.state';
import { EGraphActions, GraphActions } from '../actions/graph.actions';

export const graphReducers = (
  state = initialState.graph,
  action: GraphActions
): IGraphState => {
  let newState = state;
  switch (action.type) {
    case EGraphActions.AddValue: {
      newState.graph?.push(action.payload);
      break;
    }
    case EGraphActions.Clear: {
      newState.graph = [];
      break;
    }
  }
  return {...newState};
};
