import { CommonActions } from '@react-navigation/native';

class NavigationUtil {
  static reset(routeName, navigation) {
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [
        { name: routeName }
      ],
    });
    navigation.dispatch(resetAction);
  }
}

export default NavigationUtil;