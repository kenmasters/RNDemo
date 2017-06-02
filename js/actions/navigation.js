import { NavigationActions } from 'react-navigation';
import { GET_TEAM, BACK } from '../actions/types';
import { Stack } from '../router/stack/navigationConfiguration';
import { Drawer } from '../router/drawer/navigationConfiguration';

export function stack(state, action) {
  switch (action.type) {
    case BACK: {
      const navigationAction = NavigationActions.back({});
      return Stack.router.getStateForAction(navigationAction, state);
    }
    case GET_TEAM: {
      const navigationAction = NavigationActions.navigate({
        routeName: 'TeamScreen',
        params: { ...action.payload },
      });

      return Stack.router.getStateForAction(navigationAction, state);
    }
    default: return Stack.router.getStateForAction(action, state);
  }
}

const initialNavState = Drawer.router.getStateForAction(
  Drawer.router.getActionForPathAndParams('DrawerClose'));

export function drawer(state, action) {
  return Drawer.router.getStateForAction(action, state);
}