import { NavigationActions } from 'react-navigation';

let navigator;
export function setNavigator(ref) {
  navigator = ref;
}
export function navigate(routeName, params) {
  navigator.dipatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
