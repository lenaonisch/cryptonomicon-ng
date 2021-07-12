import { createSelector } from '@ngrx/store';
import { IApplicationState, IGraphState } from '../app.state';

const graph = (state: IApplicationState) => state.graph;
export const normalizedGraph = createSelector(graph, (state: IGraphState) => {
  if (state.graph!.length > 0) {
    const min = Math.min(...state.graph!);
    const max = Math.max(...state.graph!);

    return state.graph!.map(
      (t) => 5 + ((t - min) * 95) / (max - min)
    );
  }
  return [];
});
