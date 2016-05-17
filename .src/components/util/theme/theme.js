import {grey100, grey300, grey500, cyan500, cyan700, lightBlack, darkBlack, white} from 'material-ui/styles/colors'
import ColorManipulator, {fade} from 'material-ui/utils/colorManipulator'
import Spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

export default {
  spacing: Spacing,
  zIndex: zIndex,
  fontFamily: 'helvetica neue, arial, hiragino sans gb, stheiti, wenquanyi micro hei, \\5FAE\\8F6F\\96C5\\9ED1, \\5B8B\\4F53, sans-serif',
  palette: {
    primary1Color: '#3366cc',
    primary2Color: cyan700,
    primary3Color: lightBlack,
    accent1Color: '#ff66cc',
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
  }
};
