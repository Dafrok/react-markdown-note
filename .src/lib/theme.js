import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';
import zIndex from 'material-ui/lib/styles/zIndex';

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'helvetica neue, arial, hiragino sans gb, stheiti, wenquanyi micro hei, \\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, sans-serif',
  palette: {
    primary1Color: '#3366cc',
    primary2Color: Colors.cyan700,
    primary3Color: Colors.lightBlack,
    accent1Color: '#ff66cc',
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
  }
};
