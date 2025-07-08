import * as React from 'react';
import ReactDOM from 'react-dom/client';

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
  Dispatch,
} from 'redux';
import { connect, Provider } from 'react-redux';

import keplerGlReducer, { enhanceReduxMiddleware } from '@kepler.gl/reducers';
import KeplerGl from '@kepler.gl/components';

import { AutoSizer } from 'react-virtualized';

// Define types for Redux state
interface RootState {
  keplerGl: any; // You can replace 'any' with proper Kepler.gl state type if available
}

interface ConnectedProps {
  dispatch: Dispatch;
}

const reducers = combineReducers({
  keplerGl: keplerGlReducer.initialState({
    uiState: {
      readOnly: false,
      currentModal: null,
    },
  }),
});

const middleWares = enhanceReduxMiddleware([
  // Add other middlewares here
]) as any[];

const enhancers = applyMiddleware(...middleWares);

const initialState = {};
const store: Store<RootState> = createStore(
  reducers,
  initialState,
  compose(enhancers)
);

const App: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
    }}
  >
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <KeplerGl
          mapboxApiAccessToken="xxx" // Replace with your mapbox token
          id="map"
          width={width}
          height={height}
        />
      )}
    </AutoSizer>
  </div>
);

const mapStateToProps = (state: RootState) => state;
const dispatchToProps = (dispatch: Dispatch) => ({ dispatch });
const ConnectedApp = connect(mapStateToProps, dispatchToProps)(App);

export const Root: React.FC = () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);

export const Kepler = Root;
