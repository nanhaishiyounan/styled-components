;(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('react'),
        require('AccessibilityInfo'),
        require('ActivityIndicator'),
        require('ReactNativeART'),
        require('Button'),
        require('DatePickerIOS'),
        require('DrawerLayoutAndroid'),
        require('FlatList'),
        require('Image'),
        require('ImageBackground'),
        require('ImageEditor'),
        require('ImageStore'),
        require('KeyboardAvoidingView'),
        require('ListView'),
        require('Modal'),
        require('NavigatorIOS'),
        require('Picker'),
        require('PickerIOS'),
        require('ProgressBarAndroid'),
        require('ProgressViewIOS'),
        require('ScrollView'),
        require('SectionList'),
        require('SegmentedControlIOS'),
        require('Slider'),
        require('SnapshotViewIOS'),
        require('Switch'),
        require('RefreshControl'),
        require('StatusBar'),
        require('SwipeableListView'),
        require('TabBarIOS'),
        require('Text'),
        require('TextInput'),
        require('ToastAndroid'),
        require('ToolbarAndroid'),
        require('Touchable'),
        require('TouchableHighlight'),
        require('TouchableNativeFeedback'),
        require('TouchableOpacity'),
        require('TouchableWithoutFeedback'),
        require('View'),
        require('ViewPagerAndroid'),
        require('VirtualizedList'),
        require('WebView'),
        require('ActionSheetIOS'),
        require('AdSupportIOS'),
        require('Alert'),
        require('AlertIOS'),
        require('AppRegistry'),
        require('AppState'),
        require('AsyncStorage'),
        require('BackAndroid'),
        require('BackHandler'),
        require('CameraRoll'),
        require('Clipboard'),
        require('DatePickerAndroid'),
        require('DeviceInfo'),
        require('Dimensions'),
        require('Easing'),
        require('ReactNative'),
        require('I18nManager'),
        require('ImagePickerIOS'),
        require('InteractionManager'),
        require('Keyboard'),
        require('LayoutAnimation'),
        require('Linking'),
        require('NativeEventEmitter'),
        require('NetInfo'),
        require('PanResponder'),
        require('PermissionsAndroid'),
        require('PixelRatio'),
        require('PushNotificationIOS'),
        require('Settings'),
        require('Share'),
        require('StatusBarIOS'),
        require('StyleSheet'),
        require('Systrace'),
        require('TimePickerAndroid'),
        require('TVEventHandler'),
        require('UIManager'),
        require('Vibration'),
        require('VibrationIOS'),
        require('RCTDeviceEventEmitter'),
        require('RCTNativeAppEventEmitter'),
        require('NativeModules'),
        require('Platform'),
        require('processColor'),
        require('requireNativeComponent'),
        require('takeSnapshot'),
        require('ColorPropType'),
        require('EdgeInsetsPropType'),
        require('PointPropType'),
        require('ViewPropTypes')
      )
    : typeof define === 'function' && define.amd
      ? define(
          [
            'exports',
            'react',
            'AccessibilityInfo',
            'ActivityIndicator',
            'ReactNativeART',
            'Button',
            'DatePickerIOS',
            'DrawerLayoutAndroid',
            'FlatList',
            'Image',
            'ImageBackground',
            'ImageEditor',
            'ImageStore',
            'KeyboardAvoidingView',
            'ListView',
            'Modal',
            'NavigatorIOS',
            'Picker',
            'PickerIOS',
            'ProgressBarAndroid',
            'ProgressViewIOS',
            'ScrollView',
            'SectionList',
            'SegmentedControlIOS',
            'Slider',
            'SnapshotViewIOS',
            'Switch',
            'RefreshControl',
            'StatusBar',
            'SwipeableListView',
            'TabBarIOS',
            'Text',
            'TextInput',
            'ToastAndroid',
            'ToolbarAndroid',
            'Touchable',
            'TouchableHighlight',
            'TouchableNativeFeedback',
            'TouchableOpacity',
            'TouchableWithoutFeedback',
            'View',
            'ViewPagerAndroid',
            'VirtualizedList',
            'WebView',
            'ActionSheetIOS',
            'AdSupportIOS',
            'Alert',
            'AlertIOS',
            'AppRegistry',
            'AppState',
            'AsyncStorage',
            'BackAndroid',
            'BackHandler',
            'CameraRoll',
            'Clipboard',
            'DatePickerAndroid',
            'DeviceInfo',
            'Dimensions',
            'Easing',
            'ReactNative',
            'I18nManager',
            'ImagePickerIOS',
            'InteractionManager',
            'Keyboard',
            'LayoutAnimation',
            'Linking',
            'NativeEventEmitter',
            'NetInfo',
            'PanResponder',
            'PermissionsAndroid',
            'PixelRatio',
            'PushNotificationIOS',
            'Settings',
            'Share',
            'StatusBarIOS',
            'StyleSheet',
            'Systrace',
            'TimePickerAndroid',
            'TVEventHandler',
            'UIManager',
            'Vibration',
            'VibrationIOS',
            'RCTDeviceEventEmitter',
            'RCTNativeAppEventEmitter',
            'NativeModules',
            'Platform',
            'processColor',
            'requireNativeComponent',
            'takeSnapshot',
            'ColorPropType',
            'EdgeInsetsPropType',
            'PointPropType',
            'ViewPropTypes',
          ],
          factory
        )
      : factory(
          (global.styled = {}),
          global.React,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        )
})(this, function(
  exports,
  React,
  AccessibilityInfo,
  ActivityIndicator,
  ReactNativeART,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  ImageBackground,
  ImageEditor,
  ImageStore,
  KeyboardAvoidingView,
  ListView,
  Modal,
  NavigatorIOS,
  Picker,
  PickerIOS,
  ProgressBarAndroid,
  ProgressViewIOS,
  ScrollView,
  SectionList,
  SegmentedControlIOS,
  Slider,
  SnapshotViewIOS,
  Switch,
  RefreshControl,
  StatusBar,
  SwipeableListView,
  TabBarIOS,
  Text,
  TextInput,
  ToastAndroid,
  ToolbarAndroid,
  Touchable,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewPagerAndroid,
  VirtualizedList,
  WebView,
  ActionSheetIOS,
  AdSupportIOS,
  Alert,
  AlertIOS,
  AppRegistry,
  AppState,
  AsyncStorage,
  BackAndroid,
  BackHandler,
  CameraRoll,
  Clipboard,
  DatePickerAndroid,
  DeviceInfo,
  Dimensions,
  Easing,
  ReactNative,
  I18nManager,
  ImagePickerIOS,
  InteractionManager,
  Keyboard,
  LayoutAnimation,
  Linking,
  NativeEventEmitter,
  NetInfo,
  PanResponder,
  PermissionsAndroid,
  PixelRatio,
  PushNotificationIOS,
  Settings,
  Share,
  StatusBarIOS,
  StyleSheet,
  Systrace,
  TimePickerAndroid,
  TVEventHandler,
  UIManager,
  Vibration,
  VibrationIOS,
  RCTDeviceEventEmitter,
  RCTNativeAppEventEmitter,
  NativeModules,
  Platform,
  processColor,
  requireNativeComponent,
  takeSnapshot,
  ColorPropType,
  EdgeInsetsPropType,
  PointPropType,
  ViewPropTypes
) {
  'use strict'

  var React__default = 'default' in React ? React['default'] : React
  AccessibilityInfo =
    AccessibilityInfo && AccessibilityInfo.hasOwnProperty('default')
      ? AccessibilityInfo['default']
      : AccessibilityInfo
  ActivityIndicator =
    ActivityIndicator && ActivityIndicator.hasOwnProperty('default')
      ? ActivityIndicator['default']
      : ActivityIndicator
  ReactNativeART =
    ReactNativeART && ReactNativeART.hasOwnProperty('default')
      ? ReactNativeART['default']
      : ReactNativeART
  Button =
    Button && Button.hasOwnProperty('default') ? Button['default'] : Button
  DatePickerIOS =
    DatePickerIOS && DatePickerIOS.hasOwnProperty('default')
      ? DatePickerIOS['default']
      : DatePickerIOS
  DrawerLayoutAndroid =
    DrawerLayoutAndroid && DrawerLayoutAndroid.hasOwnProperty('default')
      ? DrawerLayoutAndroid['default']
      : DrawerLayoutAndroid
  FlatList =
    FlatList && FlatList.hasOwnProperty('default')
      ? FlatList['default']
      : FlatList
  Image = Image && Image.hasOwnProperty('default') ? Image['default'] : Image
  ImageBackground =
    ImageBackground && ImageBackground.hasOwnProperty('default')
      ? ImageBackground['default']
      : ImageBackground
  ImageEditor =
    ImageEditor && ImageEditor.hasOwnProperty('default')
      ? ImageEditor['default']
      : ImageEditor
  ImageStore =
    ImageStore && ImageStore.hasOwnProperty('default')
      ? ImageStore['default']
      : ImageStore
  KeyboardAvoidingView =
    KeyboardAvoidingView && KeyboardAvoidingView.hasOwnProperty('default')
      ? KeyboardAvoidingView['default']
      : KeyboardAvoidingView
  ListView =
    ListView && ListView.hasOwnProperty('default')
      ? ListView['default']
      : ListView
  Modal = Modal && Modal.hasOwnProperty('default') ? Modal['default'] : Modal
  NavigatorIOS =
    NavigatorIOS && NavigatorIOS.hasOwnProperty('default')
      ? NavigatorIOS['default']
      : NavigatorIOS
  Picker =
    Picker && Picker.hasOwnProperty('default') ? Picker['default'] : Picker
  PickerIOS =
    PickerIOS && PickerIOS.hasOwnProperty('default')
      ? PickerIOS['default']
      : PickerIOS
  ProgressBarAndroid =
    ProgressBarAndroid && ProgressBarAndroid.hasOwnProperty('default')
      ? ProgressBarAndroid['default']
      : ProgressBarAndroid
  ProgressViewIOS =
    ProgressViewIOS && ProgressViewIOS.hasOwnProperty('default')
      ? ProgressViewIOS['default']
      : ProgressViewIOS
  ScrollView =
    ScrollView && ScrollView.hasOwnProperty('default')
      ? ScrollView['default']
      : ScrollView
  SectionList =
    SectionList && SectionList.hasOwnProperty('default')
      ? SectionList['default']
      : SectionList
  SegmentedControlIOS =
    SegmentedControlIOS && SegmentedControlIOS.hasOwnProperty('default')
      ? SegmentedControlIOS['default']
      : SegmentedControlIOS
  Slider =
    Slider && Slider.hasOwnProperty('default') ? Slider['default'] : Slider
  SnapshotViewIOS =
    SnapshotViewIOS && SnapshotViewIOS.hasOwnProperty('default')
      ? SnapshotViewIOS['default']
      : SnapshotViewIOS
  Switch =
    Switch && Switch.hasOwnProperty('default') ? Switch['default'] : Switch
  RefreshControl =
    RefreshControl && RefreshControl.hasOwnProperty('default')
      ? RefreshControl['default']
      : RefreshControl
  StatusBar =
    StatusBar && StatusBar.hasOwnProperty('default')
      ? StatusBar['default']
      : StatusBar
  SwipeableListView =
    SwipeableListView && SwipeableListView.hasOwnProperty('default')
      ? SwipeableListView['default']
      : SwipeableListView
  TabBarIOS =
    TabBarIOS && TabBarIOS.hasOwnProperty('default')
      ? TabBarIOS['default']
      : TabBarIOS
  Text = Text && Text.hasOwnProperty('default') ? Text['default'] : Text
  TextInput =
    TextInput && TextInput.hasOwnProperty('default')
      ? TextInput['default']
      : TextInput
  ToastAndroid =
    ToastAndroid && ToastAndroid.hasOwnProperty('default')
      ? ToastAndroid['default']
      : ToastAndroid
  ToolbarAndroid =
    ToolbarAndroid && ToolbarAndroid.hasOwnProperty('default')
      ? ToolbarAndroid['default']
      : ToolbarAndroid
  Touchable =
    Touchable && Touchable.hasOwnProperty('default')
      ? Touchable['default']
      : Touchable
  TouchableHighlight =
    TouchableHighlight && TouchableHighlight.hasOwnProperty('default')
      ? TouchableHighlight['default']
      : TouchableHighlight
  TouchableNativeFeedback =
    TouchableNativeFeedback && TouchableNativeFeedback.hasOwnProperty('default')
      ? TouchableNativeFeedback['default']
      : TouchableNativeFeedback
  TouchableOpacity =
    TouchableOpacity && TouchableOpacity.hasOwnProperty('default')
      ? TouchableOpacity['default']
      : TouchableOpacity
  TouchableWithoutFeedback =
    TouchableWithoutFeedback &&
    TouchableWithoutFeedback.hasOwnProperty('default')
      ? TouchableWithoutFeedback['default']
      : TouchableWithoutFeedback
  View = View && View.hasOwnProperty('default') ? View['default'] : View
  ViewPagerAndroid =
    ViewPagerAndroid && ViewPagerAndroid.hasOwnProperty('default')
      ? ViewPagerAndroid['default']
      : ViewPagerAndroid
  VirtualizedList =
    VirtualizedList && VirtualizedList.hasOwnProperty('default')
      ? VirtualizedList['default']
      : VirtualizedList
  WebView =
    WebView && WebView.hasOwnProperty('default') ? WebView['default'] : WebView
  ActionSheetIOS =
    ActionSheetIOS && ActionSheetIOS.hasOwnProperty('default')
      ? ActionSheetIOS['default']
      : ActionSheetIOS
  AdSupportIOS =
    AdSupportIOS && AdSupportIOS.hasOwnProperty('default')
      ? AdSupportIOS['default']
      : AdSupportIOS
  Alert = Alert && Alert.hasOwnProperty('default') ? Alert['default'] : Alert
  AlertIOS =
    AlertIOS && AlertIOS.hasOwnProperty('default')
      ? AlertIOS['default']
      : AlertIOS
  AppRegistry =
    AppRegistry && AppRegistry.hasOwnProperty('default')
      ? AppRegistry['default']
      : AppRegistry
  AppState =
    AppState && AppState.hasOwnProperty('default')
      ? AppState['default']
      : AppState
  AsyncStorage =
    AsyncStorage && AsyncStorage.hasOwnProperty('default')
      ? AsyncStorage['default']
      : AsyncStorage
  BackAndroid =
    BackAndroid && BackAndroid.hasOwnProperty('default')
      ? BackAndroid['default']
      : BackAndroid
  BackHandler =
    BackHandler && BackHandler.hasOwnProperty('default')
      ? BackHandler['default']
      : BackHandler
  CameraRoll =
    CameraRoll && CameraRoll.hasOwnProperty('default')
      ? CameraRoll['default']
      : CameraRoll
  Clipboard =
    Clipboard && Clipboard.hasOwnProperty('default')
      ? Clipboard['default']
      : Clipboard
  DatePickerAndroid =
    DatePickerAndroid && DatePickerAndroid.hasOwnProperty('default')
      ? DatePickerAndroid['default']
      : DatePickerAndroid
  DeviceInfo =
    DeviceInfo && DeviceInfo.hasOwnProperty('default')
      ? DeviceInfo['default']
      : DeviceInfo
  Dimensions =
    Dimensions && Dimensions.hasOwnProperty('default')
      ? Dimensions['default']
      : Dimensions
  Easing =
    Easing && Easing.hasOwnProperty('default') ? Easing['default'] : Easing
  ReactNative =
    ReactNative && ReactNative.hasOwnProperty('default')
      ? ReactNative['default']
      : ReactNative
  I18nManager =
    I18nManager && I18nManager.hasOwnProperty('default')
      ? I18nManager['default']
      : I18nManager
  ImagePickerIOS =
    ImagePickerIOS && ImagePickerIOS.hasOwnProperty('default')
      ? ImagePickerIOS['default']
      : ImagePickerIOS
  InteractionManager =
    InteractionManager && InteractionManager.hasOwnProperty('default')
      ? InteractionManager['default']
      : InteractionManager
  Keyboard =
    Keyboard && Keyboard.hasOwnProperty('default')
      ? Keyboard['default']
      : Keyboard
  LayoutAnimation =
    LayoutAnimation && LayoutAnimation.hasOwnProperty('default')
      ? LayoutAnimation['default']
      : LayoutAnimation
  Linking =
    Linking && Linking.hasOwnProperty('default') ? Linking['default'] : Linking
  NativeEventEmitter =
    NativeEventEmitter && NativeEventEmitter.hasOwnProperty('default')
      ? NativeEventEmitter['default']
      : NativeEventEmitter
  NetInfo =
    NetInfo && NetInfo.hasOwnProperty('default') ? NetInfo['default'] : NetInfo
  PanResponder =
    PanResponder && PanResponder.hasOwnProperty('default')
      ? PanResponder['default']
      : PanResponder
  PermissionsAndroid =
    PermissionsAndroid && PermissionsAndroid.hasOwnProperty('default')
      ? PermissionsAndroid['default']
      : PermissionsAndroid
  PixelRatio =
    PixelRatio && PixelRatio.hasOwnProperty('default')
      ? PixelRatio['default']
      : PixelRatio
  PushNotificationIOS =
    PushNotificationIOS && PushNotificationIOS.hasOwnProperty('default')
      ? PushNotificationIOS['default']
      : PushNotificationIOS
  Settings =
    Settings && Settings.hasOwnProperty('default')
      ? Settings['default']
      : Settings
  Share = Share && Share.hasOwnProperty('default') ? Share['default'] : Share
  StatusBarIOS =
    StatusBarIOS && StatusBarIOS.hasOwnProperty('default')
      ? StatusBarIOS['default']
      : StatusBarIOS
  StyleSheet =
    StyleSheet && StyleSheet.hasOwnProperty('default')
      ? StyleSheet['default']
      : StyleSheet
  Systrace =
    Systrace && Systrace.hasOwnProperty('default')
      ? Systrace['default']
      : Systrace
  TimePickerAndroid =
    TimePickerAndroid && TimePickerAndroid.hasOwnProperty('default')
      ? TimePickerAndroid['default']
      : TimePickerAndroid
  TVEventHandler =
    TVEventHandler && TVEventHandler.hasOwnProperty('default')
      ? TVEventHandler['default']
      : TVEventHandler
  UIManager =
    UIManager && UIManager.hasOwnProperty('default')
      ? UIManager['default']
      : UIManager
  Vibration =
    Vibration && Vibration.hasOwnProperty('default')
      ? Vibration['default']
      : Vibration
  VibrationIOS =
    VibrationIOS && VibrationIOS.hasOwnProperty('default')
      ? VibrationIOS['default']
      : VibrationIOS
  RCTDeviceEventEmitter =
    RCTDeviceEventEmitter && RCTDeviceEventEmitter.hasOwnProperty('default')
      ? RCTDeviceEventEmitter['default']
      : RCTDeviceEventEmitter
  RCTNativeAppEventEmitter =
    RCTNativeAppEventEmitter &&
    RCTNativeAppEventEmitter.hasOwnProperty('default')
      ? RCTNativeAppEventEmitter['default']
      : RCTNativeAppEventEmitter
  NativeModules =
    NativeModules && NativeModules.hasOwnProperty('default')
      ? NativeModules['default']
      : NativeModules
  Platform =
    Platform && Platform.hasOwnProperty('default')
      ? Platform['default']
      : Platform
  processColor =
    processColor && processColor.hasOwnProperty('default')
      ? processColor['default']
      : processColor
  requireNativeComponent =
    requireNativeComponent && requireNativeComponent.hasOwnProperty('default')
      ? requireNativeComponent['default']
      : requireNativeComponent
  takeSnapshot =
    takeSnapshot && takeSnapshot.hasOwnProperty('default')
      ? takeSnapshot['default']
      : takeSnapshot
  ColorPropType =
    ColorPropType && ColorPropType.hasOwnProperty('default')
      ? ColorPropType['default']
      : ColorPropType
  EdgeInsetsPropType =
    EdgeInsetsPropType && EdgeInsetsPropType.hasOwnProperty('default')
      ? EdgeInsetsPropType['default']
      : EdgeInsetsPropType
  PointPropType =
    PointPropType && PointPropType.hasOwnProperty('default')
      ? PointPropType['default']
      : PointPropType
  ViewPropTypes =
    ViewPropTypes && ViewPropTypes.hasOwnProperty('default')
      ? ViewPropTypes['default']
      : ViewPropTypes

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * @typechecks
   */

  var _uppercasePattern = /([A-Z])/g

  /**
   * Hyphenates a camelcased string, for example:
   *
   *   > hyphenate('backgroundColor')
   *   < "background-color"
   *
   * For CSS style names, use `hyphenateStyleName` instead which works properly
   * with all vendor prefixes, including `ms`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenate(string) {
    return string.replace(_uppercasePattern, '-$1').toLowerCase()
  }

  var hyphenate_1 = hyphenate

  var msPattern = /^ms-/

  /**
   * Hyphenates a camelcased CSS property name, for example:
   *
   *   > hyphenateStyleName('backgroundColor')
   *   < "background-color"
   *   > hyphenateStyleName('MozTransition')
   *   < "-moz-transition"
   *   > hyphenateStyleName('msTransition')
   *   < "-ms-transition"
   *
   * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
   * is converted to `-ms-`.
   *
   * @param {string} string
   * @return {string}
   */
  function hyphenateStyleName(string) {
    return hyphenate_1(string).replace(msPattern, '-ms-')
  }

  var hyphenateStyleName_1 = hyphenateStyleName

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {}

  {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument')
      }
    }
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format)

    if (!condition) {
      var error
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
        )
      } else {
        var args = [a, b, c, d, e, f]
        var argIndex = 0
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++]
          })
        )
        error.name = 'Invariant Violation'
      }

      error.framesToPop = 1 // we don't care about invariant's own frame
      throw error
    }
  }

  var invariant_1 = invariant

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var invariant$1 = function(condition, format, a, b, c, d, e, f) {
    {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument')
      }
    }

    if (!condition) {
      var error
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.'
        )
      } else {
        var args = [a, b, c, d, e, f]
        var argIndex = 0
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++]
          })
        )
        error.name = 'Invariant Violation'
      }

      error.framesToPop = 1 // we don't care about invariant's own frame
      throw error
    }
  }

  var invariant_1$1 = invariant$1

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  // Note(vjeux): this would be better as an interface but flow doesn't
  // support them yet
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  var Animated = (function() {
    function Animated() {
      _classCallCheck(this, Animated)
    }
    _createClass(Animated, [
      {
        key: '__attach',
        value: function __attach() {},
      },
      {
        key: '__detach',
        value: function __detach() {},
      },
      {
        key: '__getValue',
        value: function __getValue() {},
      },
      {
        key: '__getAnimatedValue',
        value: function __getAnimatedValue() {
          return this.__getValue()
        },
      },
      {
        key: '__addChild',
        value: function __addChild(child) {},
      },
      {
        key: '__removeChild',
        value: function __removeChild(child) {},
      },
      {
        key: '__getChildren',
        value: function __getChildren() {
          return []
        },
      },
    ])
    return Animated
  })()

  var Animated_1 = Animated

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    )
  }

  var _createClass$1 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedWithChildren = (function(_Animated) {
    _inherits(AnimatedWithChildren, _Animated)

    function AnimatedWithChildren() {
      _classCallCheck$1(this, AnimatedWithChildren)
      var _this = _possibleConstructorReturn(
        this,
        Object.getPrototypeOf(AnimatedWithChildren).call(this)
      )

      _this._children = []
      return _this
    }
    _createClass$1(AnimatedWithChildren, [
      {
        key: '__addChild',
        value: function __addChild(child) {
          if (this._children.length === 0) {
            this.__attach()
          }

          this._children.push(child)
        },
      },
      {
        key: '__removeChild',
        value: function __removeChild(child) {
          var index = this._children.indexOf(child)
          if (index === -1) {
            console.warn("Trying to remove a child that doesn't exist")
            return
          }

          this._children.splice(index, 1)
          if (this._children.length === 0) {
            this.__detach()
          }
        },
      },
      {
        key: '__getChildren',
        value: function __getChildren() {
          return this._children
        },
      },
    ])
    return AnimatedWithChildren
  })(Animated_1)

  var AnimatedWithChildren_1 = AnimatedWithChildren

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  var InteractionManager$1 = {
    current: {
      createInteractionHandle: function() {},
      clearInteractionHandle: function() {},
    },

    inject: function(manager) {
      InteractionManager$1.current = manager
    },
  }

  var InteractionManager_1 = InteractionManager$1

  /*
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   */

  function normalizeColor(color) {
    var match

    if (typeof color === 'number') {
      if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
        return color
      }
      return null
    }

    // Ordered based on occurrences on Facebook codebase
    if ((match = matchers.hex6.exec(color))) {
      return parseInt(match[1] + 'ff', 16) >>> 0
    }

    if (names.hasOwnProperty(color)) {
      return names[color]
    }

    if ((match = matchers.rgb.exec(color))) {
      return (
        ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
          0x000000ff) >>> // a
        0
      )
    }

    if ((match = matchers.rgba.exec(color))) {
      return (
        ((parse255(match[1]) << 24) | // r
        (parse255(match[2]) << 16) | // g
        (parse255(match[3]) << 8) | // b
          parse1(match[4])) >>> // a
        0
      )
    }

    if ((match = matchers.hex3.exec(color))) {
      return (
        parseInt(
          match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
            'ff', // a
          16
        ) >>> 0
      )
    }

    // https://drafts.csswg.org/css-color-4/#hex-notation
    if ((match = matchers.hex8.exec(color))) {
      return parseInt(match[1], 16) >>> 0
    }

    if ((match = matchers.hex4.exec(color))) {
      return (
        parseInt(
          match[1] +
          match[1] + // r
          match[2] +
          match[2] + // g
          match[3] +
          match[3] + // b
            match[4] +
            match[4], // a
          16
        ) >>> 0
      )
    }

    if ((match = matchers.hsl.exec(color))) {
      return (
        (hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
          0x000000ff) >>> // a
        0
      )
    }

    if ((match = matchers.hsla.exec(color))) {
      return (
        (hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
          parse1(match[4])) >>> // a
        0
      )
    }

    return null
  }

  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1
    }
    if (t > 1) {
      t -= 1
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t
    }
    if (t < 1 / 2) {
      return q
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6
    }
    return p
  }

  function hslToRgb(h, s, l) {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s
    var p = 2 * l - q
    var r = hue2rgb(p, q, h + 1 / 3)
    var g = hue2rgb(p, q, h)
    var b = hue2rgb(p, q, h - 1 / 3)

    return (
      (Math.round(r * 255) << 24) |
      (Math.round(g * 255) << 16) |
      (Math.round(b * 255) << 8)
    )
  }

  // var INTEGER = '[-+]?\\d+';
  var NUMBER = '[-+]?\\d*\\.?\\d+'
  var PERCENTAGE = NUMBER + '%'

  function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike, 0)
  }

  function call() {
    return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)'
  }

  var matchers = {
    rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
    rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
    hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
    hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
    hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#([0-9a-fA-F]{6})$/,
    hex8: /^#([0-9a-fA-F]{8})$/,
  }

  function parse255(str) {
    var int = parseInt(str, 10)
    if (int < 0) {
      return 0
    }
    if (int > 255) {
      return 255
    }
    return int
  }

  function parse360(str) {
    var int = parseFloat(str)
    return ((int % 360 + 360) % 360) / 360
  }

  function parse1(str) {
    var num = parseFloat(str)
    if (num < 0) {
      return 0
    }
    if (num > 1) {
      return 255
    }
    return Math.round(num * 255)
  }

  function parsePercentage(str) {
    // parseFloat conveniently ignores the final %
    var int = parseFloat(str, 10)
    if (int < 0) {
      return 0
    }
    if (int > 100) {
      return 1
    }
    return int / 100
  }

  var names = {
    transparent: 0x00000000,

    // http://www.w3.org/TR/css3-color/#svg-color
    aliceblue: 0xf0f8ffff,
    antiquewhite: 0xfaebd7ff,
    aqua: 0x00ffffff,
    aquamarine: 0x7fffd4ff,
    azure: 0xf0ffffff,
    beige: 0xf5f5dcff,
    bisque: 0xffe4c4ff,
    black: 0x000000ff,
    blanchedalmond: 0xffebcdff,
    blue: 0x0000ffff,
    blueviolet: 0x8a2be2ff,
    brown: 0xa52a2aff,
    burlywood: 0xdeb887ff,
    burntsienna: 0xea7e5dff,
    cadetblue: 0x5f9ea0ff,
    chartreuse: 0x7fff00ff,
    chocolate: 0xd2691eff,
    coral: 0xff7f50ff,
    cornflowerblue: 0x6495edff,
    cornsilk: 0xfff8dcff,
    crimson: 0xdc143cff,
    cyan: 0x00ffffff,
    darkblue: 0x00008bff,
    darkcyan: 0x008b8bff,
    darkgoldenrod: 0xb8860bff,
    darkgray: 0xa9a9a9ff,
    darkgreen: 0x006400ff,
    darkgrey: 0xa9a9a9ff,
    darkkhaki: 0xbdb76bff,
    darkmagenta: 0x8b008bff,
    darkolivegreen: 0x556b2fff,
    darkorange: 0xff8c00ff,
    darkorchid: 0x9932ccff,
    darkred: 0x8b0000ff,
    darksalmon: 0xe9967aff,
    darkseagreen: 0x8fbc8fff,
    darkslateblue: 0x483d8bff,
    darkslategray: 0x2f4f4fff,
    darkslategrey: 0x2f4f4fff,
    darkturquoise: 0x00ced1ff,
    darkviolet: 0x9400d3ff,
    deeppink: 0xff1493ff,
    deepskyblue: 0x00bfffff,
    dimgray: 0x696969ff,
    dimgrey: 0x696969ff,
    dodgerblue: 0x1e90ffff,
    firebrick: 0xb22222ff,
    floralwhite: 0xfffaf0ff,
    forestgreen: 0x228b22ff,
    fuchsia: 0xff00ffff,
    gainsboro: 0xdcdcdcff,
    ghostwhite: 0xf8f8ffff,
    gold: 0xffd700ff,
    goldenrod: 0xdaa520ff,
    gray: 0x808080ff,
    green: 0x008000ff,
    greenyellow: 0xadff2fff,
    grey: 0x808080ff,
    honeydew: 0xf0fff0ff,
    hotpink: 0xff69b4ff,
    indianred: 0xcd5c5cff,
    indigo: 0x4b0082ff,
    ivory: 0xfffff0ff,
    khaki: 0xf0e68cff,
    lavender: 0xe6e6faff,
    lavenderblush: 0xfff0f5ff,
    lawngreen: 0x7cfc00ff,
    lemonchiffon: 0xfffacdff,
    lightblue: 0xadd8e6ff,
    lightcoral: 0xf08080ff,
    lightcyan: 0xe0ffffff,
    lightgoldenrodyellow: 0xfafad2ff,
    lightgray: 0xd3d3d3ff,
    lightgreen: 0x90ee90ff,
    lightgrey: 0xd3d3d3ff,
    lightpink: 0xffb6c1ff,
    lightsalmon: 0xffa07aff,
    lightseagreen: 0x20b2aaff,
    lightskyblue: 0x87cefaff,
    lightslategray: 0x778899ff,
    lightslategrey: 0x778899ff,
    lightsteelblue: 0xb0c4deff,
    lightyellow: 0xffffe0ff,
    lime: 0x00ff00ff,
    limegreen: 0x32cd32ff,
    linen: 0xfaf0e6ff,
    magenta: 0xff00ffff,
    maroon: 0x800000ff,
    mediumaquamarine: 0x66cdaaff,
    mediumblue: 0x0000cdff,
    mediumorchid: 0xba55d3ff,
    mediumpurple: 0x9370dbff,
    mediumseagreen: 0x3cb371ff,
    mediumslateblue: 0x7b68eeff,
    mediumspringgreen: 0x00fa9aff,
    mediumturquoise: 0x48d1ccff,
    mediumvioletred: 0xc71585ff,
    midnightblue: 0x191970ff,
    mintcream: 0xf5fffaff,
    mistyrose: 0xffe4e1ff,
    moccasin: 0xffe4b5ff,
    navajowhite: 0xffdeadff,
    navy: 0x000080ff,
    oldlace: 0xfdf5e6ff,
    olive: 0x808000ff,
    olivedrab: 0x6b8e23ff,
    orange: 0xffa500ff,
    orangered: 0xff4500ff,
    orchid: 0xda70d6ff,
    palegoldenrod: 0xeee8aaff,
    palegreen: 0x98fb98ff,
    paleturquoise: 0xafeeeeff,
    palevioletred: 0xdb7093ff,
    papayawhip: 0xffefd5ff,
    peachpuff: 0xffdab9ff,
    peru: 0xcd853fff,
    pink: 0xffc0cbff,
    plum: 0xdda0ddff,
    powderblue: 0xb0e0e6ff,
    purple: 0x800080ff,
    rebeccapurple: 0x663399ff,
    red: 0xff0000ff,
    rosybrown: 0xbc8f8fff,
    royalblue: 0x4169e1ff,
    saddlebrown: 0x8b4513ff,
    salmon: 0xfa8072ff,
    sandybrown: 0xf4a460ff,
    seagreen: 0x2e8b57ff,
    seashell: 0xfff5eeff,
    sienna: 0xa0522dff,
    silver: 0xc0c0c0ff,
    skyblue: 0x87ceebff,
    slateblue: 0x6a5acdff,
    slategray: 0x708090ff,
    slategrey: 0x708090ff,
    snow: 0xfffafaff,
    springgreen: 0x00ff7fff,
    steelblue: 0x4682b4ff,
    tan: 0xd2b48cff,
    teal: 0x008080ff,
    thistle: 0xd8bfd8ff,
    tomato: 0xff6347ff,
    turquoise: 0x40e0d0ff,
    violet: 0xee82eeff,
    wheat: 0xf5deb3ff,
    white: 0xffffffff,
    whitesmoke: 0xf5f5f5ff,
    yellow: 0xffff00ff,
    yellowgreen: 0x9acd32ff,
  }

  function rgba(colorInt) {
    var r = Math.round((colorInt & 0xff000000) >>> 24)
    var g = Math.round((colorInt & 0x00ff0000) >>> 16)
    var b = Math.round((colorInt & 0x0000ff00) >>> 8)
    var a = ((colorInt & 0x000000ff) >>> 0) / 255
    return {
      r: r,
      g: g,
      b: b,
      a: a,
    }
  }
  normalizeColor.rgba = rgba

  var normalizeCssColor = normalizeColor

  var _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  var _createClass$2 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  var linear = function(t) {
    return t
  }

  /**
   * Very handy helper to map input ranges to output ranges with an easing
   * function and custom behavior outside of the ranges.
   */ var Interpolation = (function() {
    function Interpolation() {
      _classCallCheck$2(this, Interpolation)
    }
    _createClass$2(Interpolation, null, [
      {
        key: 'create',
        value: function create(config) {
          if (config.outputRange && typeof config.outputRange[0] === 'string') {
            return createInterpolationFromStringOutputRange(config)
          }

          var outputRange = config.outputRange
          checkInfiniteRange('outputRange', outputRange)

          var inputRange = config.inputRange
          checkInfiniteRange('inputRange', inputRange)
          checkValidInputRange(inputRange)

          invariant_1$1(
            inputRange.length === outputRange.length,
            'inputRange (' +
              inputRange.length +
              ') and outputRange (' +
              outputRange.length +
              ') must have the same length'
          )

          var easing = config.easing || linear

          var extrapolateLeft = 'extend'
          if (config.extrapolateLeft !== undefined) {
            extrapolateLeft = config.extrapolateLeft
          } else if (config.extrapolate !== undefined) {
            extrapolateLeft = config.extrapolate
          }

          var extrapolateRight = 'extend'
          if (config.extrapolateRight !== undefined) {
            extrapolateRight = config.extrapolateRight
          } else if (config.extrapolate !== undefined) {
            extrapolateRight = config.extrapolate
          }

          return function(input) {
            invariant_1$1(
              typeof input === 'number',
              'Cannot interpolation an input which is not a number'
            )

            var range = findRange(input, inputRange)
            return interpolate(
              input,
              inputRange[range],
              inputRange[range + 1],
              outputRange[range],
              outputRange[range + 1],
              easing,
              extrapolateLeft,
              extrapolateRight
            )
          }
        },
      },
    ])
    return Interpolation
  })()

  function interpolate(
    input,
    inputMin,
    inputMax,
    outputMin,
    outputMax,
    easing,
    extrapolateLeft,
    extrapolateRight
  ) {
    var result = input

    // Extrapolate
    if (result < inputMin) {
      if (extrapolateLeft === 'identity') {
        return result
      } else if (extrapolateLeft === 'clamp') {
        result = inputMin
      }
    }

    if (result > inputMax) {
      if (extrapolateRight === 'identity') {
        return result
      } else if (extrapolateRight === 'clamp') {
        result = inputMax
      }
    }

    if (outputMin === outputMax) {
      return outputMin
    }

    if (inputMin === inputMax) {
      if (input <= inputMin) {
        return outputMin
      }

      return outputMax
    }

    // Input Range
    if (inputMin === -Infinity) {
      result = -result
    } else if (inputMax === Infinity) {
      result = result - inputMin
    } else {
      result = (result - inputMin) / (inputMax - inputMin)
    }

    // Easing
    result = easing(result)

    // Output Range
    if (outputMin === -Infinity) {
      result = -result
    } else if (outputMax === Infinity) {
      result = result + outputMin
    } else {
      result = result * (outputMax - outputMin) + outputMin
    }

    return result
  }

  function colorToRgba(input) {
    var int32Color = normalizeCssColor(input)
    if (int32Color === null) {
      return input
    }

    int32Color = int32Color || 0 // $FlowIssue

    var r = (int32Color & 0xff000000) >>> 24
    var g = (int32Color & 0x00ff0000) >>> 16
    var b = (int32Color & 0x0000ff00) >>> 8
    var a = (int32Color & 0x000000ff) / 255

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
  }

  var stringShapeRegex = /[0-9\.-]+/g

  /**
   * Supports string shapes by extracting numbers so new values can be computed,
   * and recombines those values into new strings of the same shape.  Supports
   * things like:
   *
   *   rgba(123, 42, 99, 0.36) // colors
   *   -45deg                  // values with units
   */
  function createInterpolationFromStringOutputRange(config) {
    var outputRange = config.outputRange
    invariant_1$1(outputRange.length >= 2, 'Bad output range')
    outputRange = outputRange.map(colorToRgba)
    checkPattern(outputRange)

    // ['rgba(0, 100, 200, 0)', 'rgba(50, 150, 250, 0.5)']
    // ->
    // [
    //   [0, 50],
    //   [100, 150],
    //   [200, 250],
    //   [0, 0.5],
    // ]
    /* $FlowFixMe(>=0.18.0): `outputRange[0].match()` can return `null`. Need to
     * guard against this possibility.
     */
    var outputRanges = outputRange[0].match(stringShapeRegex).map(function() {
      return []
    })
    outputRange.forEach(function(value) {
      /* $FlowFixMe(>=0.18.0): `value.match()` can return `null`. Need to guard
       * against this possibility.
       */
      value.match(stringShapeRegex).forEach(function(number, i) {
        outputRanges[i].push(+number)
      })
    })

    /* $FlowFixMe(>=0.18.0): `outputRange[0].match()` can return `null`. Need to
     * guard against this possibility.
     */
    var interpolations = outputRange[0]
      .match(stringShapeRegex)
      .map(function(value, i) {
        return Interpolation.create(
          _extends({}, config, {
            outputRange: outputRanges[i],
          })
        )
      })

    // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    var shouldRound = /^rgb/.test(outputRange[0])

    return function(input) {
      var i = 0
      // 'rgba(0, 100, 200, 0)'
      // ->
      // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
      return outputRange[0].replace(stringShapeRegex, function() {
        var val = interpolations[i++](input)
        return String(shouldRound && i < 4 ? Math.round(val) : val)
      })
    }
  }

  function checkPattern(arr) {
    var pattern = arr[0].replace(stringShapeRegex, '')
    for (var i = 1; i < arr.length; ++i) {
      invariant_1$1(
        pattern === arr[i].replace(stringShapeRegex, ''),
        'invalid pattern ' + arr[0] + ' and ' + arr[i]
      )
    }
  }

  function findRange(input, inputRange) {
    for (var i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break
      }
    }

    return i - 1
  }

  function checkValidInputRange(arr) {
    invariant_1$1(arr.length >= 2, 'inputRange must have at least 2 elements')
    for (var i = 1; i < arr.length; ++i) {
      invariant_1$1(
        arr[i] >= arr[i - 1],
        /* $FlowFixMe(>=0.13.0) - In the addition expression below this comment,
         * one or both of the operands may be something that doesn't cleanly
         * convert to a string, like undefined, null, and object, etc. If you really
         * mean this implicit string conversion, you can do something like
         * String(myThing)
         */
        'inputRange must be monotonically increasing ' + arr
      )
    }
  }

  function checkInfiniteRange(name, arr) {
    invariant_1$1(arr.length >= 2, name + ' must have at least 2 elements')
    invariant_1$1(
      arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity,
      /* $FlowFixMe(>=0.13.0) - In the addition expression below this comment,
       * one or both of the operands may be something that doesn't cleanly convert
       * to a string, like undefined, null, and object, etc. If you really mean
       * this implicit string conversion, you can do something like
       * String(myThing)
       */
      name + 'cannot be ]-infinity;+infinity[ ' + arr
    )
  }

  var Interpolation_1 = Interpolation

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  var _uniqueId = 0

  var guid$1 = function uniqueId() {
    return String(_uniqueId++)
  }

  var _createClass$3 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$3(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$1(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedInterpolation = (function(_AnimatedWithChildren) {
    _inherits$1(AnimatedInterpolation, _AnimatedWithChildren)

    function AnimatedInterpolation(parent, interpolation) {
      _classCallCheck$3(this, AnimatedInterpolation)
      var _this = _possibleConstructorReturn$1(
        this,
        Object.getPrototypeOf(AnimatedInterpolation).call(this)
      )

      _this._parent = parent
      _this._interpolation = interpolation
      _this._listeners = {}
      return _this
    }
    _createClass$3(AnimatedInterpolation, [
      {
        key: '__getValue',
        value: function __getValue() {
          var parentValue = this._parent.__getValue()
          invariant_1$1(
            typeof parentValue === 'number',
            'Cannot interpolate an input which is not a number.'
          )

          return this._interpolation(parentValue)
        },
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var _this2 = this
          if (!this._parentListener) {
            this._parentListener = this._parent.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          var id = guid$1()
          this._listeners[id] = callback
          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          delete this._listeners[id]
        },
      },
      {
        key: 'interpolate',
        value: function interpolate(config) {
          return new AnimatedInterpolation(this, Interpolation_1.create(config))
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          this._parent.__addChild(this)
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          this._parent.__removeChild(this)
          this._parentListener = this._parent.removeListener(
            this._parentListener
          )
        },
      },
    ])
    return AnimatedInterpolation
  })(AnimatedWithChildren_1)

  var AnimatedInterpolation_1 = AnimatedInterpolation

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */
  var _createClass$4 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$4(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  // Important note: start() and stop() will only be called at most once.
  // Once an animation has been stopped or finished its course, it will
  // not be reused.
  var Animation = (function() {
    function Animation() {
      _classCallCheck$4(this, Animation)
    }
    _createClass$4(Animation, [
      {
        key: 'start',
        value: function start(fromValue, onUpdate, onEnd, previousAnimation) {},
      },
      {
        key: 'stop',
        value: function stop() {},
        // Helper function for subclasses to make sure onEnd is only called once.
      },
      {
        key: '__debouncedOnEnd',
        value: function __debouncedOnEnd(result) {
          var onEnd = this.__onEnd
          this.__onEnd = null
          onEnd && onEnd(result)
        },
      },
    ])
    return Animation
  })()

  var Animation_1 = Animation

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  function SetPolyfill() {
    this._cache = []
  }

  SetPolyfill.prototype.add = function(e) {
    if (this._cache.indexOf(e) === -1) {
      this._cache.push(e)
    }
  }

  SetPolyfill.prototype.forEach = function(cb) {
    this._cache.forEach(cb)
  }

  var SetPolyfill_1 = SetPolyfill

  var _createClass$5 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$5(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$2(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$2(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var Set = global.Set || SetPolyfill_1

  /**
   * Animated works by building a directed acyclic graph of dependencies
   * transparently when you render your Animated components.
   *
   *               new Animated.Value(0)
   *     .interpolate()        .interpolate()    new Animated.Value(1)
   *         opacity               translateY      scale
   *          style                         transform
   *         View#234                         style
   *                                         View#123
   *
   * A) Top Down phase
   * When an Animated.Value is updated, we recursively go down through this
   * graph in order to find leaf nodes: the views that we flag as needing
   * an update.
   *
   * B) Bottom Up phase
   * When a view is flagged as needing an update, we recursively go back up
   * in order to build the new value that it needs. The reason why we need
   * this two-phases process is to deal with composite props such as
   * transform which can receive values from multiple parents.
   */
  function _flush(rootNode) {
    var animatedStyles = new Set()
    function findAnimatedStyles(node) {
      if (typeof node.update === 'function') {
        animatedStyles.add(node)
      } else {
        node.__getChildren().forEach(findAnimatedStyles)
      }
    }

    findAnimatedStyles(rootNode)
    animatedStyles.forEach(function(animatedStyle) {
      return animatedStyle.update()
    })
  }

  /**
   * Standard value for driving animations.  One `Animated.Value` can drive
   * multiple properties in a synchronized fashion, but can only be driven by one
   * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
   * or calling `setValue`) will stop any previous ones.
   */ var AnimatedValue = (function(_AnimatedWithChildren) {
    _inherits$2(AnimatedValue, _AnimatedWithChildren)

    function AnimatedValue(value) {
      _classCallCheck$5(this, AnimatedValue)
      var _this = _possibleConstructorReturn$2(
        this,
        Object.getPrototypeOf(AnimatedValue).call(this)
      )

      _this._value = value
      _this._offset = 0
      _this._animation = null
      _this._listeners = {}
      return _this
    }
    _createClass$5(AnimatedValue, [
      {
        key: '__detach',
        value: function __detach() {
          this.stopAnimation()
        },
      },
      {
        key: '__getValue',
        value: function __getValue() {
          return this._value + this._offset
        },

        /**
         * Directly set the value.  This will stop any animations running on the value
         * and update all the bound properties.
         */
      },
      {
        key: 'setValue',
        value: function setValue(value) {
          if (this._animation) {
            this._animation.stop()
            this._animation = null
          }

          this._updateValue(value)
        },

        /**
         * Sets an offset that is applied on top of whatever value is set, whether via
         * `setValue`, an animation, or `Animated.event`.  Useful for compensating
         * things like the start of a pan gesture.
         */
      },
      {
        key: 'setOffset',
        value: function setOffset(offset) {
          this._offset = offset
        },

        /**
         * Merges the offset value into the base value and resets the offset to zero.
         * The final output of the value is unchanged.
         */
      },
      {
        key: 'flattenOffset',
        value: function flattenOffset() {
          this._value += this._offset
          this._offset = 0
        },

        /**
         * Adds an asynchronous listener to the value so you can observe updates from
         * animations.  This is useful because there is no way to
         * synchronously read the value because it might be driven natively.
         */
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var id = guid$1()
          this._listeners[id] = callback
          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          delete this._listeners[id]
        },
      },
      {
        key: 'removeAllListeners',
        value: function removeAllListeners() {
          this._listeners = {}
        },

        /**
         * Stops any running animation or tracking.  `callback` is invoked with the
         * final value after stopping the animation, which is useful for updating
         * state to match the animation position with layout.
         */
      },
      {
        key: 'stopAnimation',
        value: function stopAnimation(callback) {
          this.stopTracking()
          this._animation && this._animation.stop()
          this._animation = null
          callback && callback(this.__getValue())
        },

        /**
         * Interpolates the value before updating the property, e.g. mapping 0-1 to
         * 0-10.
         */
      },
      {
        key: 'interpolate',
        value: function interpolate(config) {
          return new AnimatedInterpolation_1(
            this,
            Interpolation_1.create(config)
          )
        },

        /**
         * Typically only used internally, but could be used by a custom Animation
         * class.
         */
      },
      {
        key: 'animate',
        value: function animate(animation, callback) {
          var _this2 = this
          var handle = null
          if (animation.__isInteraction) {
            handle = InteractionManager_1.current.createInteractionHandle()
          }

          var previousAnimation = this._animation
          this._animation && this._animation.stop()
          this._animation = animation
          animation.start(
            this._value,
            function(value) {
              _this2._updateValue(value)
            },

            function(result) {
              _this2._animation = null
              if (handle !== null) {
                InteractionManager_1.current.clearInteractionHandle(handle)
              }

              callback && callback(result)
            },

            previousAnimation
          )
        },

        /**
         * Typically only used internally.
         */
      },
      {
        key: 'stopTracking',
        value: function stopTracking() {
          this._tracking && this._tracking.__detach()
          this._tracking = null
        },

        /**
         * Typically only used internally.
         */
      },
      {
        key: 'track',
        value: function track(tracking) {
          this.stopTracking()
          this._tracking = tracking
        },
      },
      {
        key: '_updateValue',
        value: function _updateValue(value) {
          this._value = value
          _flush(this)
          for (var key in this._listeners) {
            this._listeners[key]({ value: this.__getValue() })
          }
        },
      },
    ])
    return AnimatedValue
  })(AnimatedWithChildren_1)

  var AnimatedValue_1 = AnimatedValue

  var _createClass$6 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$6(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$3(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$3(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  /**
   * 2D Value for driving 2D animations, such as pan gestures.  Almost identical
   * API to normal `Animated.Value`, but multiplexed.  Contains two regular
   * `Animated.Value`s under the hood.  Example:
   *
   *```javascript
   *  class DraggableView extends React.Component {
   *    constructor(props) {
   *      super(props);
   *      this.state = {
   *        pan: new Animated.ValueXY(), // inits to zero
   *      };
   *      this.state.panResponder = PanResponder.create({
   *        onStartShouldSetPanResponder: () => true,
   *        onPanResponderMove: Animated.event([null, {
   *          dx: this.state.pan.x, // x,y are Animated.Value
   *          dy: this.state.pan.y,
   *        }]),
   *        onPanResponderRelease: () => {
   *          Animated.spring(
   *            this.state.pan,         // Auto-multiplexed
   *            {toValue: {x: 0, y: 0}} // Back to zero
   *          ).start();
   *        },
   *      });
   *    }
   *    render() {
   *      return (
   *        <Animated.View
   *          {...this.state.panResponder.panHandlers}
   *          style={this.state.pan.getLayout()}>
   *          {this.props.children}
   *        </Animated.View>
   *      );
   *    }
   *  }
   *```
   */ var AnimatedValueXY = (function(_AnimatedWithChildren) {
    _inherits$3(AnimatedValueXY, _AnimatedWithChildren)

    function AnimatedValueXY(valueIn) {
      _classCallCheck$6(this, AnimatedValueXY)
      var _this = _possibleConstructorReturn$3(
        this,
        Object.getPrototypeOf(AnimatedValueXY).call(this)
      )

      var value = valueIn || { x: 0, y: 0 } // fixme: shouldn't need `: any`
      if (typeof value.x === 'number' && typeof value.y === 'number') {
        _this.x = new AnimatedValue_1(value.x)
        _this.y = new AnimatedValue_1(value.y)
      } else {
        invariant_1$1(
          value.x instanceof AnimatedValue_1 &&
            value.y instanceof AnimatedValue_1,
          'AnimatedValueXY must be initalized with an object of numbers or ' +
            'AnimatedValues.'
        )

        _this.x = value.x
        _this.y = value.y
      }

      _this._listeners = {}
      return _this
    }
    _createClass$6(AnimatedValueXY, [
      {
        key: 'setValue',
        value: function setValue(value) {
          this.x.setValue(value.x)
          this.y.setValue(value.y)
        },
      },
      {
        key: 'setOffset',
        value: function setOffset(offset) {
          this.x.setOffset(offset.x)
          this.y.setOffset(offset.y)
        },
      },
      {
        key: 'flattenOffset',
        value: function flattenOffset() {
          this.x.flattenOffset()
          this.y.flattenOffset()
        },
      },
      {
        key: '__getValue',
        value: function __getValue() {
          return {
            x: this.x.__getValue(),
            y: this.y.__getValue(),
          }
        },
      },
      {
        key: 'stopAnimation',
        value: function stopAnimation(callback) {
          this.x.stopAnimation()
          this.y.stopAnimation()
          callback && callback(this.__getValue())
        },
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var _this2 = this
          var id = guid$1()
          var jointCallback = function(_ref) {
            var number = _ref.value
            callback(_this2.__getValue())
          }

          this._listeners[id] = {
            x: this.x.addListener(jointCallback),
            y: this.y.addListener(jointCallback),
          }

          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          this.x.removeListener(this._listeners[id].x)
          this.y.removeListener(this._listeners[id].y)
          delete this._listeners[id]
        },

        /**
         * Converts `{x, y}` into `{left, top}` for use in style, e.g.
         *
         *```javascript
         *  style={this.state.anim.getLayout()}
         *```
         */
      },
      {
        key: 'getLayout',
        value: function getLayout() {
          return {
            left: this.x,
            top: this.y,
          }
        },

        /**
         * Converts `{x, y}` into a useable translation transform, e.g.
         *
         *```javascript
         *  style={{
         *    transform: this.state.anim.getTranslateTransform()
         *  }}
         *```
         */
      },
      {
        key: 'getTranslateTransform',
        value: function getTranslateTransform() {
          return [{ translateX: this.x }, { translateY: this.y }]
        },
      },
    ])
    return AnimatedValueXY
  })(AnimatedWithChildren_1)

  var AnimatedValueXY_1 = AnimatedValueXY

  var _createClass$7 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$7(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$4(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$4(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedAddition = (function(_AnimatedWithChildren) {
    _inherits$4(AnimatedAddition, _AnimatedWithChildren)

    function AnimatedAddition(a, b) {
      _classCallCheck$7(this, AnimatedAddition)
      var _this = _possibleConstructorReturn$4(
        this,
        Object.getPrototypeOf(AnimatedAddition).call(this)
      )

      _this._a = typeof a === 'number' ? new AnimatedValue_1(a) : a
      _this._b = typeof b === 'number' ? new AnimatedValue_1(b) : b
      _this._listeners = {}
      return _this
    }
    _createClass$7(AnimatedAddition, [
      {
        key: '__getValue',
        value: function __getValue() {
          return this._a.__getValue() + this._b.__getValue()
        },
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var _this2 = this
          if (!this._aListener && this._a.addListener) {
            this._aListener = this._a.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          if (!this._bListener && this._b.addListener) {
            this._bListener = this._b.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          var id = guid()
          this._listeners[id] = callback
          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          delete this._listeners[id]
        },
      },
      {
        key: 'interpolate',
        value: function interpolate(config) {
          return new AnimatedInterpolation_1(
            this,
            Interpolation_1.create(config)
          )
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          this._a.__addChild(this)
          this._b.__addChild(this)
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          this._a.__removeChild(this)
          this._b.__removeChild(this)
        },
      },
    ])
    return AnimatedAddition
  })(AnimatedWithChildren_1)

  var AnimatedAddition_1 = AnimatedAddition

  var _createClass$8 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$8(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$5(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$5(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedMultiplication = (function(_AnimatedWithChildren) {
    _inherits$5(AnimatedMultiplication, _AnimatedWithChildren)

    function AnimatedMultiplication(a, b) {
      _classCallCheck$8(this, AnimatedMultiplication)
      var _this = _possibleConstructorReturn$5(
        this,
        Object.getPrototypeOf(AnimatedMultiplication).call(this)
      )

      _this._a = typeof a === 'number' ? new AnimatedValue_1(a) : a
      _this._b = typeof b === 'number' ? new AnimatedValue_1(b) : b
      _this._listeners = {}
      return _this
    }
    _createClass$8(AnimatedMultiplication, [
      {
        key: '__getValue',
        value: function __getValue() {
          return this._a.__getValue() * this._b.__getValue()
        },
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var _this2 = this
          if (!this._aListener && this._a.addListener) {
            this._aListener = this._a.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          if (!this._bListener && this._b.addListener) {
            this._bListener = this._b.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          var id = guid()
          this._listeners[id] = callback
          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          delete this._listeners[id]
        },
      },
      {
        key: 'interpolate',
        value: function interpolate(config) {
          return new AnimatedInterpolation_1(
            this,
            Interpolation_1.create(config)
          )
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          this._a.__addChild(this)
          this._b.__addChild(this)
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          this._a.__removeChild(this)
          this._b.__removeChild(this)
        },
      },
    ])
    return AnimatedMultiplication
  })(AnimatedWithChildren_1)

  var AnimatedMultiplication_1 = AnimatedMultiplication

  var _createClass$9 = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$9(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$6(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$6(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedModulo = (function(_AnimatedWithChildren) {
    _inherits$6(AnimatedModulo, _AnimatedWithChildren)

    // TODO(lmr): Make modulus able to be an animated value

    function AnimatedModulo(a, modulus) {
      _classCallCheck$9(this, AnimatedModulo)
      var _this = _possibleConstructorReturn$6(
        this,
        Object.getPrototypeOf(AnimatedModulo).call(this)
      )

      _this._a = a
      _this._modulus = modulus
      _this._listeners = {}
      return _this
    }
    _createClass$9(AnimatedModulo, [
      {
        key: '__getValue',
        value: function __getValue() {
          return (
            (this._a.__getValue() % this._modulus + this._modulus) %
            this._modulus
          )
        },
      },
      {
        key: 'addListener',
        value: function addListener(callback) {
          var _this2 = this
          if (!this._aListener) {
            this._aListener = this._a.addListener(function() {
              for (var key in _this2._listeners) {
                _this2._listeners[key]({ value: _this2.__getValue() })
              }
            })
          }

          var id = guid()
          this._listeners[id] = callback
          return id
        },
      },
      {
        key: 'removeListener',
        value: function removeListener(id) {
          delete this._listeners[id]
        },
      },
      {
        key: 'interpolate',
        value: function interpolate(config) {
          return new AnimatedInterpolation_1(
            this,
            Interpolation_1.create(config)
          )
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          this._a.__addChild(this)
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          this._a.__removeChild(this)
        },
      },
    ])
    return AnimatedModulo
  })(AnimatedWithChildren_1)

  var AnimatedModulo_1 = AnimatedModulo

  var _createClass$a = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$a(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$7(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$7(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedTemplate = (function(_AnimatedWithChildren) {
    _inherits$7(AnimatedTemplate, _AnimatedWithChildren)

    function AnimatedTemplate(strings, values) {
      _classCallCheck$a(this, AnimatedTemplate)
      var _this = _possibleConstructorReturn$7(
        this,
        Object.getPrototypeOf(AnimatedTemplate).call(this)
      )

      _this._strings = strings
      _this._values = values
      return _this
    }
    _createClass$a(AnimatedTemplate, [
      {
        key: '__transformValue',
        value: function __transformValue(value) {
          if (value instanceof Animated_1) {
            return value.__getValue()
          } else {
            return value
          }
        },
      },
      {
        key: '__getValue',
        value: function __getValue() {
          var value = this._strings[0]
          for (var i = 0; i < this._values.length; ++i) {
            value +=
              this.__transformValue(this._values[i]) + this._strings[1 + i]
          }

          return value
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          for (var i = 0; i < this._values.length; ++i) {
            if (this._values[i] instanceof Animated_1) {
              this._values[i].__addChild(this)
            }
          }
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          for (var i = 0; i < this._values.length; ++i) {
            if (this._values[i] instanceof Animated_1) {
              this._values[i].__removeChild(this)
            }
          }
        },
      },
    ])
    return AnimatedTemplate
  })(AnimatedWithChildren_1)

  var AnimatedTemplate_1 = AnimatedTemplate

  var _extends$1 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  var _createClass$b = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$b(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$8(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$8(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedTracking = (function(_Animated) {
    _inherits$8(AnimatedTracking, _Animated)

    function AnimatedTracking(
      value,
      parent,
      animationClass,
      animationConfig,
      callback
    ) {
      _classCallCheck$b(this, AnimatedTracking)
      var _this = _possibleConstructorReturn$8(
        this,
        Object.getPrototypeOf(AnimatedTracking).call(this)
      )

      _this._value = value
      _this._parent = parent
      _this._animationClass = animationClass
      _this._animationConfig = animationConfig
      _this._callback = callback
      _this.__attach()
      return _this
    }
    _createClass$b(AnimatedTracking, [
      {
        key: '__getValue',
        value: function __getValue() {
          return this._parent.__getValue()
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          this._parent.__addChild(this)
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          this._parent.__removeChild(this)
        },
      },
      {
        key: 'update',
        value: function update() {
          this._value.animate(
            new this._animationClass(
              _extends$1({}, this._animationConfig, {
                toValue: this._animationConfig.toValue.__getValue(),
              })
            ),
            this._callback
          )
        },
      },
    ])
    return AnimatedTracking
  })(Animated_1)

  var AnimatedTracking_1 = AnimatedTracking

  function isAnimated(obj) {
    return obj instanceof Animated_1
  }

  var isAnimated_1 = isAnimated

  /**
   * https://github.com/gre/bezier-easing
   * BezierEasing - use bezier curve for transition easing function
   * by Gaëtan Renaudeau 2014 - 2015 – MIT License
   * @nolint
   */

  // These values are established by empiricism with tests (tradeoff: performance VS precision)
  var NEWTON_ITERATIONS = 4
  var NEWTON_MIN_SLOPE = 0.001
  var SUBDIVISION_PRECISION = 0.0000001
  var SUBDIVISION_MAX_ITERATIONS = 10

  var kSplineTableSize = 11
  var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0)

  var float32ArraySupported = typeof Float32Array === 'function'

  function A(aA1, aA2) {
    return 1.0 - 3.0 * aA2 + 3.0 * aA1
  }
  function B(aA1, aA2) {
    return 3.0 * aA2 - 6.0 * aA1
  }
  function C(aA1) {
    return 3.0 * aA1
  }

  // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT
  }

  // Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
  function getSlope(aT, aA1, aA2) {
    return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1)
  }

  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX,
      currentT,
      i = 0
    do {
      currentT = aA + (aB - aA) / 2.0
      currentX = calcBezier(currentT, mX1, mX2) - aX
      if (currentX > 0.0) {
        aB = currentT
      } else {
        aA = currentT
      }
    } while (
      Math.abs(currentX) > SUBDIVISION_PRECISION &&
      ++i < SUBDIVISION_MAX_ITERATIONS
    )
    return currentT
  }

  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
      var currentSlope = getSlope(aGuessT, mX1, mX2)
      if (currentSlope === 0.0) {
        return aGuessT
      }

      var currentX = calcBezier(aGuessT, mX1, mX2) - aX
      aGuessT -= currentX / currentSlope
    }

    return aGuessT
  }

  var bezier = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      // eslint-disable-line yoda
      throw new Error('bezier x values must be in [0, 1] range')
    }

    // Precompute samples table
    var sampleValues = float32ArraySupported
      ? new Float32Array(kSplineTableSize)
      : new Array(kSplineTableSize)
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2)
      }
    }

    function getTForX(aX) {
      var intervalStart = 0.0
      var currentSample = 1
      var lastSample = kSplineTableSize - 1

      for (
        ;
        currentSample !== lastSample && sampleValues[currentSample] <= aX;
        ++currentSample
      ) {
        intervalStart += kSampleStepSize
      }

      --currentSample

      // Interpolate to provide an initial guess for t
      var dist =
        (aX - sampleValues[currentSample]) /
        (sampleValues[currentSample + 1] - sampleValues[currentSample])
      var guessForT = intervalStart + dist * kSampleStepSize

      var initialSlope = getSlope(guessForT, mX1, mX2)
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2)
      } else if (initialSlope === 0.0) {
        return guessForT
      } else {
        return binarySubdivide(
          aX,
          intervalStart,
          intervalStart + kSampleStepSize,
          mX1,
          mX2
        )
      }
    }

    return function BezierEasing(x) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x // linear
      }
      // Because JavaScript number are imprecise, we should guarantee the extremes are right.
      if (x === 0) {
        return 0
      }

      if (x === 1) {
        return 1
      }

      return calcBezier(getTForX(x), mY1, mY2)
    }
  }

  var _createClass$c = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$c(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  /**
   * This class implements common easing functions. The math is pretty obscure,
   * but this cool website has nice visual illustrations of what they represent:
   * http://xaedes.de/dev/transitions/
   */ var Easing$1 = (function() {
    function Easing$$1() {
      _classCallCheck$c(this, Easing$$1)
    }
    _createClass$c(Easing$$1, null, [
      {
        key: 'step0',
        value: function step0(n) {
          return n > 0 ? 1 : 0
        },
      },
      {
        key: 'step1',
        value: function step1(n) {
          return n >= 1 ? 1 : 0
        },
      },
      {
        key: 'linear',
        value: function linear(t) {
          return t
        },
      },
      {
        key: 'ease',
        value: function ease(t) {
          return _ease(t)
        },
      },
      {
        key: 'quad',
        value: function quad(t) {
          return t * t
        },
      },
      {
        key: 'cubic',
        value: function cubic(t) {
          return t * t * t
        },
      },
      {
        key: 'poly',
        value: function poly(n) {
          return function(t) {
            return Math.pow(t, n)
          }
        },
      },
      {
        key: 'sin',
        value: function sin(t) {
          return 1 - Math.cos(t * Math.PI / 2)
        },
      },
      {
        key: 'circle',
        value: function circle(t) {
          return 1 - Math.sqrt(1 - t * t)
        },
      },
      {
        key: 'exp',
        value: function exp(t) {
          return Math.pow(2, 10 * (t - 1))
        },

        /**
         * A simple elastic interaction, similar to a spring.  Default bounciness
         * is 1, which overshoots a little bit once.  0 bounciness doesn't overshoot
         * at all, and bounciness of N > 1 will overshoot about N times.
         *
         * Wolfram Plots:
         *
         *   http://tiny.cc/elastic_b_1 (default bounciness = 1)
         *   http://tiny.cc/elastic_b_3 (bounciness = 3)
         */
      },
      {
        key: 'elastic',
        value: function elastic() {
          var bounciness =
            arguments.length <= 0 || arguments[0] === undefined
              ? 1
              : arguments[0]
          var p = bounciness * Math.PI
          return function(t) {
            return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p)
          }
        },
      },
      {
        key: 'back',
        value: function back(s) {
          if (s === undefined) {
            s = 1.70158
          }

          return function(t) {
            return t * t * ((s + 1) * t - s)
          }
        },
      },
      {
        key: 'bounce',
        value: function bounce(t) {
          if (t < 1 / 2.75) {
            return 7.5625 * t * t
          }

          if (t < 2 / 2.75) {
            t -= 1.5 / 2.75
            return 7.5625 * t * t + 0.75
          }

          if (t < 2.5 / 2.75) {
            t -= 2.25 / 2.75
            return 7.5625 * t * t + 0.9375
          }

          t -= 2.625 / 2.75
          return 7.5625 * t * t + 0.984375
        },
      },
      {
        key: 'bezier',
        value: function bezier$$1(x1, y1, x2, y2) {
          return bezier(x1, y1, x2, y2)
        },
      },
      {
        key: 'in',
        value: function _in(easing) {
          return easing
        },

        /**
         * Runs an easing function backwards.
         */
      },
      {
        key: 'out',
        value: function out(easing) {
          return function(t) {
            return 1 - easing(1 - t)
          }
        },

        /**
         * Makes any easing function symmetrical.
         */
      },
      {
        key: 'inOut',
        value: function inOut(easing) {
          return function(t) {
            if (t < 0.5) {
              return easing(t * 2) / 2
            }

            return 1 - easing((1 - t) * 2) / 2
          }
        },
      },
    ])
    return Easing$$1
  })()

  var _ease = Easing$1.bezier(0.42, 0, 1, 1)

  var Easing_1 = Easing$1

  var RequestAnimationFrame = {
    current: function(cb) {
      return global.requestAnimationFrame(cb)
    },
    inject: function(injected) {
      RequestAnimationFrame.current = injected
    },
  }

  var RequestAnimationFrame_1 = RequestAnimationFrame

  var CancelAnimationFrame = {
    current: function(id) {
      return global.cancelAnimationFrame(id)
    },
    inject: function(injected) {
      CancelAnimationFrame.current = injected
    },
  }

  var CancelAnimationFrame_1 = CancelAnimationFrame

  var _createClass$d = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$d(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$9(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$9(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var easeInOut = Easing_1.inOut(Easing_1.ease)
  var TimingAnimation = (function(_Animation) {
    _inherits$9(TimingAnimation, _Animation)

    function TimingAnimation(config) {
      _classCallCheck$d(this, TimingAnimation)
      var _this = _possibleConstructorReturn$9(
        this,
        Object.getPrototypeOf(TimingAnimation).call(this)
      )

      _this._toValue = config.toValue
      _this._easing = config.easing !== undefined ? config.easing : easeInOut
      _this._duration = config.duration !== undefined ? config.duration : 500
      _this._delay = config.delay !== undefined ? config.delay : 0
      _this.__isInteraction =
        config.isInteraction !== undefined ? config.isInteraction : true
      return _this
    }
    _createClass$d(TimingAnimation, [
      {
        key: 'start',
        value: function start(fromValue, onUpdate, onEnd) {
          var _this2 = this
          this.__active = true
          this._fromValue = fromValue
          this._onUpdate = onUpdate
          this.__onEnd = onEnd

          var start = function() {
            if (_this2._duration === 0) {
              _this2._onUpdate(_this2._toValue)
              _this2.__debouncedOnEnd({ finished: true })
            } else {
              _this2._startTime = Date.now()
              _this2._animationFrame = RequestAnimationFrame_1.current(
                _this2.onUpdate.bind(_this2)
              )
            }
          }

          if (this._delay) {
            this._timeout = setTimeout(start, this._delay)
          } else {
            start()
          }
        },
      },
      {
        key: 'onUpdate',
        value: function onUpdate() {
          var now = Date.now()
          if (now >= this._startTime + this._duration) {
            if (this._duration === 0) {
              this._onUpdate(this._toValue)
            } else {
              this._onUpdate(
                this._fromValue +
                  this._easing(1) * (this._toValue - this._fromValue)
              )
            }

            this.__debouncedOnEnd({ finished: true })
            return
          }

          this._onUpdate(
            this._fromValue +
              this._easing((now - this._startTime) / this._duration) *
                (this._toValue - this._fromValue)
          )

          if (this.__active) {
            this._animationFrame = RequestAnimationFrame_1.current(
              this.onUpdate.bind(this)
            )
          }
        },
      },
      {
        key: 'stop',
        value: function stop() {
          this.__active = false
          clearTimeout(this._timeout)
          CancelAnimationFrame_1.current(this._animationFrame)
          this.__debouncedOnEnd({ finished: false })
        },
      },
    ])
    return TimingAnimation
  })(Animation_1)

  var TimingAnimation_1 = TimingAnimation

  var _createClass$e = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$e(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$a(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$a(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var DecayAnimation = (function(_Animation) {
    _inherits$a(DecayAnimation, _Animation)

    function DecayAnimation(config) {
      _classCallCheck$e(this, DecayAnimation)
      var _this = _possibleConstructorReturn$a(
        this,
        Object.getPrototypeOf(DecayAnimation).call(this)
      )

      _this._deceleration =
        config.deceleration !== undefined ? config.deceleration : 0.998
      _this._velocity = config.velocity
      _this.__isInteraction =
        config.isInteraction !== undefined ? config.isInteraction : true
      return _this
    }
    _createClass$e(DecayAnimation, [
      {
        key: 'start',
        value: function start(fromValue, onUpdate, onEnd) {
          this.__active = true
          this._lastValue = fromValue
          this._fromValue = fromValue
          this._onUpdate = onUpdate
          this.__onEnd = onEnd
          this._startTime = Date.now()
          this._animationFrame = RequestAnimationFrame_1.current(
            this.onUpdate.bind(this)
          )
        },
      },
      {
        key: 'onUpdate',
        value: function onUpdate() {
          var now = Date.now()

          var value =
            this._fromValue +
            this._velocity /
              (1 - this._deceleration) *
              (1 -
                Math.exp(-(1 - this._deceleration) * (now - this._startTime)))

          this._onUpdate(value)

          if (Math.abs(this._lastValue - value) < 0.1) {
            this.__debouncedOnEnd({ finished: true })
            return
          }

          this._lastValue = value
          if (this.__active) {
            this._animationFrame = RequestAnimationFrame_1.current(
              this.onUpdate.bind(this)
            )
          }
        },
      },
      {
        key: 'stop',
        value: function stop() {
          this.__active = false
          CancelAnimationFrame_1.current(this._animationFrame)
          this.__debouncedOnEnd({ finished: false })
        },
      },
    ])
    return DecayAnimation
  })(Animation_1)

  var DecayAnimation_1 = DecayAnimation

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  function tensionFromOrigamiValue(oValue) {
    return (oValue - 30) * 3.62 + 194
  }

  function frictionFromOrigamiValue(oValue) {
    return (oValue - 8) * 3 + 25
  }

  function fromOrigamiTensionAndFriction(tension, friction) {
    return {
      tension: tensionFromOrigamiValue(tension),
      friction: frictionFromOrigamiValue(friction),
    }
  }

  function fromBouncinessAndSpeed(bounciness, speed) {
    function normalize(value, startValue, endValue) {
      return (value - startValue) / (endValue - startValue)
    }

    function projectNormal(n, start, end) {
      return start + n * (end - start)
    }

    function linearInterpolation(t, start, end) {
      return t * end + (1 - t) * start
    }

    function quadraticOutInterpolation(t, start, end) {
      return linearInterpolation(2 * t - t * t, start, end)
    }

    function b3Friction1(x) {
      return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28
    }

    function b3Friction2(x) {
      return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2
    }

    function b3Friction3(x) {
      return (
        0.00000045 * Math.pow(x, 3) -
        0.000332 * Math.pow(x, 2) +
        0.1078 * x +
        5.84
      )
    }

    function b3Nobounce(tension) {
      if (tension <= 18) {
        return b3Friction1(tension)
      } else if (tension > 18 && tension <= 44) {
        return b3Friction2(tension)
      } else {
        return b3Friction3(tension)
      }
    }

    var b = normalize(bounciness / 1.7, 0, 20)
    b = projectNormal(b, 0, 0.8)
    var s = normalize(speed / 1.7, 0, 20)
    var bouncyTension = projectNormal(s, 0.5, 200)
    var bouncyFriction = quadraticOutInterpolation(
      b,
      b3Nobounce(bouncyTension),
      0.01
    )

    return {
      tension: tensionFromOrigamiValue(bouncyTension),
      friction: frictionFromOrigamiValue(bouncyFriction),
    }
  }

  var SpringConfig = {
    fromOrigamiTensionAndFriction: fromOrigamiTensionAndFriction,
    fromBouncinessAndSpeed: fromBouncinessAndSpeed,
  }

  var _createClass$f = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$f(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$b(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$b(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  function withDefault(value, defaultValue) {
    if (value === undefined || value === null) {
      return defaultValue
    }

    return value
  }
  var SpringAnimation = (function(_Animation) {
    _inherits$b(SpringAnimation, _Animation)

    function SpringAnimation(config) {
      _classCallCheck$f(this, SpringAnimation)
      var _this = _possibleConstructorReturn$b(
        this,
        Object.getPrototypeOf(SpringAnimation).call(this)
      )

      _this._overshootClamping = withDefault(config.overshootClamping, false)
      _this._restDisplacementThreshold = withDefault(
        config.restDisplacementThreshold,
        0.001
      )
      _this._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.001)
      _this._initialVelocity = config.velocity
      _this._lastVelocity = withDefault(config.velocity, 0)
      _this._toValue = config.toValue
      _this.__isInteraction =
        config.isInteraction !== undefined ? config.isInteraction : true

      var springConfig
      if (config.bounciness !== undefined || config.speed !== undefined) {
        invariant_1$1(
          config.tension === undefined && config.friction === undefined,
          'You can only define bounciness/speed or tension/friction but not both'
        )

        springConfig = SpringConfig.fromBouncinessAndSpeed(
          withDefault(config.bounciness, 8),
          withDefault(config.speed, 12)
        )
      } else {
        springConfig = SpringConfig.fromOrigamiTensionAndFriction(
          withDefault(config.tension, 40),
          withDefault(config.friction, 7)
        )
      }

      _this._tension = springConfig.tension
      _this._friction = springConfig.friction
      return _this
    }
    _createClass$f(SpringAnimation, [
      {
        key: 'start',
        value: function start(fromValue, onUpdate, onEnd, previousAnimation) {
          this.__active = true
          this._startPosition = fromValue
          this._lastPosition = this._startPosition

          this._onUpdate = onUpdate
          this.__onEnd = onEnd
          this._lastTime = Date.now()

          if (previousAnimation instanceof SpringAnimation) {
            var internalState = previousAnimation.getInternalState()
            this._lastPosition = internalState.lastPosition
            this._lastVelocity = internalState.lastVelocity
            this._lastTime = internalState.lastTime
          }

          if (
            this._initialVelocity !== undefined &&
            this._initialVelocity !== null
          ) {
            this._lastVelocity = this._initialVelocity
          }

          this.onUpdate()
        },
      },
      {
        key: 'getInternalState',
        value: function getInternalState() {
          return {
            lastPosition: this._lastPosition,
            lastVelocity: this._lastVelocity,
            lastTime: this._lastTime,
          }
        },
      },
      {
        key: 'onUpdate',
        value: function onUpdate() {
          var position = this._lastPosition
          var velocity = this._lastVelocity

          var tempPosition = this._lastPosition
          var tempVelocity = this._lastVelocity

          // If for some reason we lost a lot of frames (e.g. process large payload or
          // stopped in the debugger), we only advance by 4 frames worth of
          // computation and will continue on the next frame. It's better to have it
          // running at faster speed than jumping to the end.
          var MAX_STEPS = 64
          var now = Date.now()
          if (now > this._lastTime + MAX_STEPS) {
            now = this._lastTime + MAX_STEPS
          }

          // We are using a fixed time step and a maximum number of iterations.
          // The following post provides a lot of thoughts into how to build this
          // loop: http://gafferongames.com/game-physics/fix-your-timestep/
          var TIMESTEP_MSEC = 1
          var numSteps = Math.floor((now - this._lastTime) / TIMESTEP_MSEC)

          for (var i = 0; i < numSteps; ++i) {
            // Velocity is based on seconds instead of milliseconds
            var step = TIMESTEP_MSEC / 1000

            // This is using RK4. A good blog post to understand how it works:
            // http://gafferongames.com/game-physics/integration-basics/
            var aVelocity = velocity
            var aAcceleration =
              this._tension * (this._toValue - tempPosition) -
              this._friction * tempVelocity
            var tempPosition = position + aVelocity * step / 2
            var tempVelocity = velocity + aAcceleration * step / 2

            var bVelocity = tempVelocity
            var bAcceleration =
              this._tension * (this._toValue - tempPosition) -
              this._friction * tempVelocity
            tempPosition = position + bVelocity * step / 2
            tempVelocity = velocity + bAcceleration * step / 2

            var cVelocity = tempVelocity
            var cAcceleration =
              this._tension * (this._toValue - tempPosition) -
              this._friction * tempVelocity
            tempPosition = position + cVelocity * step / 2
            tempVelocity = velocity + cAcceleration * step / 2

            var dVelocity = tempVelocity
            var dAcceleration =
              this._tension * (this._toValue - tempPosition) -
              this._friction * tempVelocity
            tempPosition = position + cVelocity * step / 2
            tempVelocity = velocity + cAcceleration * step / 2

            var dxdt = (aVelocity + 2 * (bVelocity + cVelocity) + dVelocity) / 6
            var dvdt =
              (aAcceleration +
                2 * (bAcceleration + cAcceleration) +
                dAcceleration) /
              6

            position += dxdt * step
            velocity += dvdt * step
          }

          this._lastTime = now
          this._lastPosition = position
          this._lastVelocity = velocity

          this._onUpdate(position)
          if (!this.__active) {
            // a listener might have stopped us in _onUpdate
            return
          }

          // Conditions for stopping the spring animation
          var isOvershooting = false
          if (this._overshootClamping && this._tension !== 0) {
            if (this._startPosition < this._toValue) {
              isOvershooting = position > this._toValue
            } else {
              isOvershooting = position < this._toValue
            }
          }

          var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold
          var isDisplacement = true
          if (this._tension !== 0) {
            isDisplacement =
              Math.abs(this._toValue - position) <=
              this._restDisplacementThreshold
          }

          if (isOvershooting || (isVelocity && isDisplacement)) {
            if (this._tension !== 0) {
              // Ensure that we end up with a round value
              this._onUpdate(this._toValue)
            }

            this.__debouncedOnEnd({ finished: true })
            return
          }

          this._animationFrame = RequestAnimationFrame_1.current(
            this.onUpdate.bind(this)
          )
        },
      },
      {
        key: 'stop',
        value: function stop() {
          this.__active = false
          CancelAnimationFrame_1.current(this._animationFrame)
          this.__debouncedOnEnd({ finished: false })
        },
      },
    ])
    return SpringAnimation
  })(Animation_1)

  var SpringAnimation_1 = SpringAnimation

  var _createClass$g = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$g(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$c(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$c(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedTransform = (function(_AnimatedWithChildren) {
    _inherits$c(AnimatedTransform, _AnimatedWithChildren)

    function AnimatedTransform(transforms) {
      _classCallCheck$g(this, AnimatedTransform)
      var _this = _possibleConstructorReturn$c(
        this,
        Object.getPrototypeOf(AnimatedTransform).call(this)
      )

      _this._transforms = transforms
      return _this
    }
    _createClass$g(AnimatedTransform, [
      {
        key: '__getValue',
        value: function __getValue() {
          return this._transforms.map(function(transform) {
            var result = {}
            for (var key in transform) {
              var value = transform[key]
              if (value instanceof Animated_1) {
                result[key] = value.__getValue()
              } else {
                result[key] = value
              }
            }

            return result
          })
        },
      },
      {
        key: '__getAnimatedValue',
        value: function __getAnimatedValue() {
          return this._transforms.map(function(transform) {
            var result = {}
            for (var key in transform) {
              var value = transform[key]
              if (value instanceof Animated_1) {
                result[key] = value.__getAnimatedValue()
              } else {
                // All transform components needed to recompose matrix
                result[key] = value
              }
            }

            return result
          })
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          var _this2 = this
          this._transforms.forEach(function(transform) {
            for (var key in transform) {
              var value = transform[key]
              if (value instanceof Animated_1) {
                value.__addChild(_this2)
              }
            }
          })
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          var _this3 = this
          this._transforms.forEach(function(transform) {
            for (var key in transform) {
              var value = transform[key]
              if (value instanceof Animated_1) {
                value.__removeChild(_this3)
              }
            }
          })
        },
      },
    ])
    return AnimatedTransform
  })(AnimatedWithChildren_1)

  var AnimatedTransform_1 = AnimatedTransform

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  var FlattenStyle = {
    current: function(style) {
      return style
    },
    inject: function(flatten) {
      FlattenStyle.current = flatten
    },
  }

  var FlattenStyle_1 = FlattenStyle

  var _extends$2 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  var _createClass$h = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$h(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$d(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$d(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedStyle = (function(_AnimatedWithChildren) {
    _inherits$d(AnimatedStyle, _AnimatedWithChildren)

    function AnimatedStyle(style) {
      _classCallCheck$h(this, AnimatedStyle)
      var _this = _possibleConstructorReturn$d(
        this,
        Object.getPrototypeOf(AnimatedStyle).call(this)
      )

      style = FlattenStyle_1.current(style) || {}
      if (style.transform && !(style.transform instanceof Animated_1)) {
        style = _extends$2({}, style, {
          transform: new AnimatedTransform_1(style.transform),
        })
      }

      _this._style = style
      return _this
    }
    _createClass$h(AnimatedStyle, [
      {
        key: '__getValue',
        value: function __getValue() {
          var style = {}
          for (var key in this._style) {
            var value = this._style[key]
            if (value instanceof Animated_1) {
              style[key] = value.__getValue()
            } else {
              style[key] = value
            }
          }

          return style
        },
      },
      {
        key: '__getAnimatedValue',
        value: function __getAnimatedValue() {
          var style = {}
          for (var key in this._style) {
            var value = this._style[key]
            if (value instanceof Animated_1) {
              style[key] = value.__getAnimatedValue()
            }
          }

          return style
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          for (var key in this._style) {
            var value = this._style[key]
            if (value instanceof Animated_1) {
              value.__addChild(this)
            }
          }
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          for (var key in this._style) {
            var value = this._style[key]
            if (value instanceof Animated_1) {
              value.__removeChild(this)
            }
          }
        },
      },
    ])
    return AnimatedStyle
  })(AnimatedWithChildren_1)

  var AnimatedStyle_1 = AnimatedStyle

  var _extends$3 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  var _createClass$i = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$i(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$e(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$e(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var AnimatedProps = (function(_Animated) {
    _inherits$e(AnimatedProps, _Animated)

    function AnimatedProps(props, callback) {
      _classCallCheck$i(this, AnimatedProps)
      var _this = _possibleConstructorReturn$e(
        this,
        Object.getPrototypeOf(AnimatedProps).call(this)
      )

      if (props.style) {
        props = _extends$3({}, props, {
          style: new AnimatedStyle_1(props.style),
        })
      }

      _this._props = props
      _this._callback = callback
      _this.__attach()
      return _this
    }
    _createClass$i(AnimatedProps, [
      {
        key: '__getValue',
        value: function __getValue() {
          var props = {}
          for (var key in this._props) {
            var value = this._props[key]
            if (value instanceof Animated_1) {
              props[key] = value.__getValue()
            } else {
              props[key] = value
            }
          }

          return props
        },
      },
      {
        key: '__getAnimatedValue',
        value: function __getAnimatedValue() {
          var props = {}
          for (var key in this._props) {
            var value = this._props[key]
            if (value instanceof Animated_1) {
              props[key] = value.__getAnimatedValue()
            }
          }

          return props
        },
      },
      {
        key: '__attach',
        value: function __attach() {
          for (var key in this._props) {
            var value = this._props[key]
            if (value instanceof Animated_1) {
              value.__addChild(this)
            }
          }
        },
      },
      {
        key: '__detach',
        value: function __detach() {
          for (var key in this._props) {
            var value = this._props[key]
            if (value instanceof Animated_1) {
              value.__removeChild(this)
            }
          }
        },
      },
      {
        key: 'update',
        value: function update() {
          this._callback()
        },
      },
    ])
    return AnimatedProps
  })(Animated_1)

  var AnimatedProps_1 = AnimatedProps

  /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   *
   */

  var ApplyAnimatedValues = {
    current: function ApplyAnimatedValues(instance, props) {
      if (instance.setNativeProps) {
        instance.setNativeProps(props)
      } else {
        return false
      }
    },

    inject: function(apply) {
      ApplyAnimatedValues.current = apply
    },
  }

  var ApplyAnimatedValues_1 = ApplyAnimatedValues

  var _extends$4 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  var _createClass$j = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()
  function _classCallCheck$j(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }
  function _possibleConstructorReturn$f(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }
    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }
  function _inherits$f(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  function createAnimatedComponent(Component) {
    var refName = 'node'
    var AnimatedComponent = (function(_React$Component) {
      _inherits$f(AnimatedComponent, _React$Component)
      function AnimatedComponent() {
        _classCallCheck$j(this, AnimatedComponent)
        return _possibleConstructorReturn$f(
          this,
          Object.getPrototypeOf(AnimatedComponent).apply(this, arguments)
        )
      }
      _createClass$j(AnimatedComponent, [
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this._propsAnimated && this._propsAnimated.__detach()
          },
        },
        {
          key: 'setNativeProps',
          value: function setNativeProps(props) {
            var didUpdate = ApplyAnimatedValues_1.current(
              this.refs[refName],
              props,
              this
            )
            if (didUpdate === false) {
              this.forceUpdate()
            }
          },
        },
        {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this.attachProps(this.props)
          },
        },
        {
          key: 'attachProps',
          value: function attachProps(nextProps) {
            var _this2 = this
            var oldPropsAnimated = this._propsAnimated

            // The system is best designed when setNativeProps is implemented. It is
            // able to avoid re-rendering and directly set the attributes that
            // changed. However, setNativeProps can only be implemented on leaf
            // native components. If you want to animate a composite component, you
            // need to re-render it. In this case, we have a fallback that uses
            // forceUpdate.
            var callback = function() {
              var didUpdate = ApplyAnimatedValues_1.current(
                _this2.refs[refName],
                _this2._propsAnimated.__getAnimatedValue(),
                _this2
              )
              if (didUpdate === false) {
                _this2.forceUpdate()
              }
            }

            this._propsAnimated = new AnimatedProps_1(nextProps, callback)

            // When you call detach, it removes the element from the parent list
            // of children. If it goes to 0, then the parent also detaches itself
            // and so on.
            // An optimization is to attach the new elements and THEN detach the old
            // ones instead of detaching and THEN attaching.
            // This way the intermediate state isn't to go to 0 and trigger
            // this expensive recursive detaching to then re-attach everything on
            // the very next operation.
            oldPropsAnimated && oldPropsAnimated.__detach()
          },
        },
        {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            this.attachProps(nextProps)
          },
        },
        {
          key: 'render',
          value: function render() {
            return React__default.createElement(
              Component,
              _extends$4({}, this._propsAnimated.__getValue(), {
                ref: refName,
              })
            )
          },
        },
      ])
      return AnimatedComponent
    })(React__default.Component)

    AnimatedComponent.propTypes = {
      style: function(props, propName, componentName) {
        if (!Component.propTypes) {
          return
        }

        // TODO(lmr): We will probably bring this back in at some point, but maybe
        // just a subset of the proptypes... We should have a common set of props
        // that will be used for all platforms.
        //
        // for (var key in ViewStylePropTypes) {
        //   if (!Component.propTypes[key] && props[key] !== undefined) {
        //     console.error(
        //       'You are setting the style `{ ' + key + ': ... }` as a prop. You ' +
        //       'should nest it in a style object. ' +
        //       'E.g. `{ style: { ' + key + ': ... } }`'
        //     );
        //   }
        // }
      },
    }

    return AnimatedComponent
  }

  var createAnimatedComponent_1 = createAnimatedComponent

  var _extends$5 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }

  var maybeVectorAnim = function(value, config, anim) {
    if (value instanceof AnimatedValueXY_1) {
      var configX = _extends$5({}, config)
      var configY = _extends$5({}, config)
      for (var key in config) {
        var _config$key = config[key]
        var x = _config$key.x
        var y = _config$key.y
        if (x !== undefined && y !== undefined) {
          configX[key] = x
          configY[key] = y
        }
      }

      var aX = anim(value.x, configX)
      var aY = anim(value.y, configY)
      // We use `stopTogether: false` here because otherwise tracking will break
      // because the second animation will get stopped before it can update.
      return parallel([aX, aY], { stopTogether: false })
    }

    return null
  }

  var spring = function(value, config) {
    return (
      maybeVectorAnim(value, config, spring) || {
        start: function(callback) {
          var singleValue = value
          var singleConfig = config
          singleValue.stopTracking()
          if (config.toValue instanceof Animated_1) {
            singleValue.track(
              new AnimatedTracking_1(
                singleValue,
                config.toValue,
                SpringAnimation_1,
                singleConfig,
                callback
              )
            )
          } else {
            singleValue.animate(new SpringAnimation_1(singleConfig), callback)
          }
        },

        stop: function() {
          value.stopAnimation()
        },
      }
    )
  }

  var timing = function(value, config) {
    return (
      maybeVectorAnim(value, config, timing) || {
        start: function(callback) {
          var singleValue = value
          var singleConfig = config
          singleValue.stopTracking()
          if (config.toValue instanceof Animated_1) {
            singleValue.track(
              new AnimatedTracking_1(
                singleValue,
                config.toValue,
                TimingAnimation_1,
                singleConfig,
                callback
              )
            )
          } else {
            singleValue.animate(new TimingAnimation_1(singleConfig), callback)
          }
        },

        stop: function() {
          value.stopAnimation()
        },
      }
    )
  }

  var decay = function(value, config) {
    return (
      maybeVectorAnim(value, config, decay) || {
        start: function(callback) {
          var singleValue = value
          var singleConfig = config
          singleValue.stopTracking()
          singleValue.animate(new DecayAnimation_1(singleConfig), callback)
        },

        stop: function() {
          value.stopAnimation()
        },
      }
    )
  }

  var sequence = function(animations) {
    var current = 0
    return {
      start: function(callback) {
        var onComplete = function(result) {
          if (!result.finished) {
            callback && callback(result)
            return
          }

          current++

          if (current === animations.length) {
            callback && callback(result)
            return
          }

          animations[current].start(onComplete)
        }

        if (animations.length === 0) {
          callback && callback({ finished: true })
        } else {
          animations[current].start(onComplete)
        }
      },

      stop: function() {
        if (current < animations.length) {
          animations[current].stop()
        }
      },
    }
  }

  // If one is stopped, stop all.  default: true

  var parallel = function(animations, config) {
    var doneCount = 0
    // Make sure we only call stop() at most once for each animation
    var hasEnded = {}
    var stopTogether = !(config && config.stopTogether === false)

    var result = {
      start: function(callback) {
        if (doneCount === animations.length) {
          callback && callback({ finished: true })
          return
        }

        animations.forEach(function(animation, idx) {
          var cb = function(endResult) {
            hasEnded[idx] = true
            doneCount++
            if (doneCount === animations.length) {
              doneCount = 0
              callback && callback(endResult)
              return
            }

            if (!endResult.finished && stopTogether) {
              result.stop()
            }
          }

          if (!animation) {
            cb({ finished: true })
          } else {
            animation.start(cb)
          }
        })
      },

      stop: function() {
        animations.forEach(function(animation, idx) {
          !hasEnded[idx] && animation.stop()
          hasEnded[idx] = true
        })
      },
    }

    return result
  }

  var delay = function(time) {
    // Would be nice to make a specialized implementation
    return timing(new AnimatedValue_1(0), {
      toValue: 0,
      delay: time,
      duration: 0,
    })
  }

  var stagger = function(time, animations) {
    return parallel(
      animations.map(function(animation, i) {
        return sequence([delay(time * i), animation])
      })
    )
  }

  var event = function(argMapping, config) {
    return function() {
      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }
      var traverse = function(recMapping, recEvt, key) {
        if (typeof recEvt === 'number') {
          invariant_1$1(
            recMapping instanceof AnimatedValue_1,
            'Bad mapping of type ' +
              typeof recMapping +
              ' for key ' +
              key +
              ', event value must map to AnimatedValue'
          )

          recMapping.setValue(recEvt)
          return
        }

        invariant_1$1(
          typeof recMapping === 'object',
          'Bad mapping of type ' + typeof recMapping + ' for key ' + key
        )

        invariant_1$1(
          typeof recEvt === 'object',
          'Bad event of type ' + typeof recEvt + ' for key ' + key
        )

        for (var key in recMapping) {
          traverse(recMapping[key], recEvt[key], key)
        }
      }

      argMapping.forEach(function(mapping, idx) {
        traverse(mapping, args[idx], 'arg' + idx)
      })

      if (config && config.listener) {
        config.listener.apply(null, args)
      }
    }
  }

  /**
   * Animations are an important part of modern UX, and the `Animated`
   * library is designed to make them fluid, powerful, and easy to build and
   * maintain.
   *
   * The simplest workflow is to create an `Animated.Value`, hook it up to one or
   * more style attributes of an animated component, and then drive updates either
   * via animations, such as `Animated.timing`, or by hooking into gestures like
   * panning or scrolling via `Animated.event`.  `Animated.Value` can also bind to
   * props other than style, and can be interpolated as well.  Here is a basic
   * example of a container view that will fade in when it's mounted:
   *
   *```javascript
   *  class FadeInView extends React.Component {
   *    constructor(props) {
   *      super(props);
   *      this.state = {
   *        fadeAnim: new Animated.Value(0), // init opacity 0
   *      };
   *    }
   *    componentDidMount() {
   *      Animated.timing(          // Uses easing functions
   *        this.state.fadeAnim,    // The value to drive
   *        {toValue: 1},           // Configuration
   *      ).start();                // Don't forget start!
   *    }
   *    render() {
   *      return (
   *        <Animated.View          // Special animatable View
   *          style={{opacity: this.state.fadeAnim}}> // Binds
   *          {this.props.children}
   *        </Animated.View>
   *      );
   *    }
   *  }
   *```
   *
   * Note that only animatable components can be animated.  `View`, `Text`, and
   * `Image` are already provided, and you can create custom ones with
   * `createAnimatedComponent`.  These special components do the magic of binding
   * the animated values to the properties, and do targeted native updates to
   * avoid the cost of the react render and reconciliation process on every frame.
   * They also handle cleanup on unmount so they are safe by default.
   *
   * Animations are heavily configurable.  Custom and pre-defined easing
   * functions, delays, durations, decay factors, spring constants, and more can
   * all be tweaked depending on the type of animation.
   *
   * A single `Animated.Value` can drive any number of properties, and each
   * property can be run through an interpolation first.  An interpolation maps
   * input ranges to output ranges, typically using a linear interpolation but
   * also supports easing functions.  By default, it will extrapolate the curve
   * beyond the ranges given, but you can also have it clamp the output value.
   *
   * For example, you may want to think about your `Animated.Value` as going from
   * 0 to 1, but animate the position from 150px to 0px and the opacity from 0 to
   * 1. This can easily be done by modifying `style` in the example above like so:
   *
   *```javascript
   *  style={{
   *    opacity: this.state.fadeAnim, // Binds directly
   *    transform: [{
   *      translateY: this.state.fadeAnim.interpolate({
   *        inputRange: [0, 1],
   *        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
   *      }),
   *    }],
   *  }}>
   *```
   *
   * Animations can also be combined in complex ways using composition functions
   * such as `sequence` and `parallel`, and can also be chained together simply
   * by setting the `toValue` of one animation to be another `Animated.Value`.
   *
   * `Animated.ValueXY` is handy for 2D animations, like panning, and there are
   * other helpful additions like `setOffset` and `getLayout` to aid with typical
   * interaction patterns, like drag-and-drop.
   *
   * You can see more example usage in `AnimationExample.js`, the Gratuitous
   * Animation App, and [Animations documentation guide](docs/animations.html).
   *
   * Note that `Animated` is designed to be fully serializable so that animations
   * can be run in a high performance way, independent of the normal JavaScript
   * event loop. This does influence the API, so keep that in mind when it seems a
   * little trickier to do something compared to a fully synchronous system.
   * Checkout `Animated.Value.addListener` as a way to work around some of these
   * limitations, but use it sparingly since it might have performance
   * implications in the future.
   */
  var lib = {
    /**
     * Standard value class for driving animations.  Typically initialized with
     * `new Animated.Value(0);`
     */
    Value: AnimatedValue_1,
    /**
     * 2D value class for driving 2D animations, such as pan gestures.
     */
    ValueXY: AnimatedValueXY_1,

    /**
     * Animates a value from an initial velocity to zero based on a decay
     * coefficient.
     */
    decay: decay,
    /**
     * Animates a value along a timed easing curve.  The `Easing` module has tons
     * of pre-defined curves, or you can use your own function.
     */
    timing: timing,
    /**
     * Spring animation based on Rebound and Origami.  Tracks velocity state to
     * create fluid motions as the `toValue` updates, and can be chained together.
     */
    spring: spring,

    /**
     * Creates a new Animated value composed from two Animated values added
     * together.
     */
    add: function add(a, b) {
      return new AnimatedAddition_1(a, b)
    },

    /**
     * Creates a new Animated value composed from two Animated values multiplied
     * together.
     */
    multiply: function multiply(a, b) {
      return new AnimatedMultiplication_1(a, b)
    },

    /**
     * Creates a new Animated value that is the (non-negative) modulo of the
     * provided Animated value
     */
    modulo: function modulo(a, modulus) {
      return new AnimatedModulo_1(a, modulus)
    },

    /**
     * Creates a new Animated value that is the specified string, with each
     * substitution expression being separately animated and interpolated.
     */
    template: function template(strings) {
      for (
        var _len2 = arguments.length,
          values = Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        values[_key2 - 1] = arguments[_key2]
      }
      return new AnimatedTemplate_1(strings, values)
    },

    /**
     * Starts an animation after the given delay.
     */
    delay: delay,
    /**
     * Starts an array of animations in order, waiting for each to complete
     * before starting the next.  If the current running animation is stopped, no
     * following animations will be started.
     */
    sequence: sequence,
    /**
     * Starts an array of animations all at the same time.  By default, if one
     * of the animations is stopped, they will all be stopped.  You can override
     * this with the `stopTogether` flag.
     */
    parallel: parallel,
    /**
     * Array of animations may run in parallel (overlap), but are started in
     * sequence with successive delays.  Nice for doing trailing effects.
     */
    stagger: stagger,

    /**
     *  Takes an array of mappings and extracts values from each arg accordingly,
     *  then calls `setValue` on the mapped outputs.  e.g.
     *
     *```javascript
     *  onScroll={Animated.event(
     *    [{nativeEvent: {contentOffset: {x: this._scrollX}}}]
     *    {listener},          // Optional async listener
     *  )
     *  ...
     *  onPanResponderMove: Animated.event([
     *    null,                // raw event arg ignored
     *    {dx: this._panX},    // gestureState arg
     *  ]),
     *```
     */
    event: event,

    /**
     * Existential test to figure out if an object is an instance of the Animated
     * class or not.
     */
    isAnimated: isAnimated_1,

    /**
     * Make any React component Animatable.  Used to create `Animated.View`, etc.
     */
    createAnimatedComponent: createAnimatedComponent_1,

    inject: {
      ApplyAnimatedValues: ApplyAnimatedValues_1.inject,
      InteractionManager: InteractionManager_1.inject,
      FlattenStyle: FlattenStyle_1.inject,
      RequestAnimationFrame: RequestAnimationFrame_1.inject,
      CancelAnimationFrame: CancelAnimationFrame_1.inject,
    },

    __PropsOnlyForTests: AnimatedProps_1,
  }

  // Export React, plus some native additions.
  const ReactNative$1 = {
    // Components
    get AccessibilityInfo() {
      return AccessibilityInfo
    },
    get ActivityIndicator() {
      return ActivityIndicator
    },
    get ART() {
      return ReactNativeART
    },
    get Button() {
      return Button
    },
    get DatePickerIOS() {
      return DatePickerIOS
    },
    get DrawerLayoutAndroid() {
      return DrawerLayoutAndroid
    },
    get FlatList() {
      return FlatList
    },
    get Image() {
      return Image
    },
    get ImageBackground() {
      return ImageBackground
    },
    get ImageEditor() {
      return ImageEditor
    },
    get ImageStore() {
      return ImageStore
    },
    get KeyboardAvoidingView() {
      return KeyboardAvoidingView
    },
    get ListView() {
      return ListView
    },
    get Modal() {
      return Modal
    },
    get NavigatorIOS() {
      return NavigatorIOS
    },
    get Picker() {
      return Picker
    },
    get PickerIOS() {
      return PickerIOS
    },
    get ProgressBarAndroid() {
      return ProgressBarAndroid
    },
    get ProgressViewIOS() {
      return ProgressViewIOS
    },
    get ScrollView() {
      return ScrollView
    },
    get SectionList() {
      return SectionList
    },
    get SegmentedControlIOS() {
      return SegmentedControlIOS
    },
    get Slider() {
      return Slider
    },
    get SnapshotViewIOS() {
      return SnapshotViewIOS
    },
    get Switch() {
      return Switch
    },
    get RefreshControl() {
      return RefreshControl
    },
    get StatusBar() {
      return StatusBar
    },
    get SwipeableListView() {
      return SwipeableListView
    },
    get TabBarIOS() {
      return TabBarIOS
    },
    get Text() {
      return Text
    },
    get TextInput() {
      return TextInput
    },
    get ToastAndroid() {
      return ToastAndroid
    },
    get ToolbarAndroid() {
      return ToolbarAndroid
    },
    get Touchable() {
      return Touchable
    },
    get TouchableHighlight() {
      return TouchableHighlight
    },
    get TouchableNativeFeedback() {
      return TouchableNativeFeedback
    },
    get TouchableOpacity() {
      return TouchableOpacity
    },
    get TouchableWithoutFeedback() {
      return TouchableWithoutFeedback
    },
    get View() {
      return View
    },
    get ViewPagerAndroid() {
      return ViewPagerAndroid
    },
    get VirtualizedList() {
      return VirtualizedList
    },
    get WebView() {
      return WebView
    },

    // APIs
    get ActionSheetIOS() {
      return ActionSheetIOS
    },
    get AdSupportIOS() {
      return AdSupportIOS
    },
    get Alert() {
      return Alert
    },
    get AlertIOS() {
      return AlertIOS
    },
    get Animated() {
      return lib
    },
    get AppRegistry() {
      return AppRegistry
    },
    get AppState() {
      return AppState
    },
    get AsyncStorage() {
      return AsyncStorage
    },
    get BackAndroid() {
      return BackAndroid
    }, // deprecated: use BackHandler instead
    get BackHandler() {
      return BackHandler
    },
    get CameraRoll() {
      return CameraRoll
    },
    get Clipboard() {
      return Clipboard
    },
    get DatePickerAndroid() {
      return DatePickerAndroid
    },
    get DeviceInfo() {
      return DeviceInfo
    },
    get Dimensions() {
      return Dimensions
    },
    get Easing() {
      return Easing
    },
    get findNodeHandle() {
      return ReactNative.findNodeHandle
    },
    get I18nManager() {
      return I18nManager
    },
    get ImagePickerIOS() {
      return ImagePickerIOS
    },
    get InteractionManager() {
      return InteractionManager
    },
    get Keyboard() {
      return Keyboard
    },
    get LayoutAnimation() {
      return LayoutAnimation
    },
    get Linking() {
      return Linking
    },
    get NativeEventEmitter() {
      return NativeEventEmitter
    },
    get NetInfo() {
      return NetInfo
    },
    get PanResponder() {
      return PanResponder
    },
    get PermissionsAndroid() {
      return PermissionsAndroid
    },
    get PixelRatio() {
      return PixelRatio
    },
    get PushNotificationIOS() {
      return PushNotificationIOS
    },
    get Settings() {
      return Settings
    },
    get Share() {
      return Share
    },
    get StatusBarIOS() {
      return StatusBarIOS
    },
    get StyleSheet() {
      return StyleSheet
    },
    get Systrace() {
      return Systrace
    },
    get TimePickerAndroid() {
      return TimePickerAndroid
    },
    get TVEventHandler() {
      return TVEventHandler
    },
    get UIManager() {
      return UIManager
    },
    get unstable_batchedUpdates() {
      return ReactNative.unstable_batchedUpdates
    },
    get Vibration() {
      return Vibration
    },
    get VibrationIOS() {
      return VibrationIOS
    },

    // Plugins
    get DeviceEventEmitter() {
      return RCTDeviceEventEmitter
    },
    get NativeAppEventEmitter() {
      return RCTNativeAppEventEmitter
    },
    get NativeModules() {
      return NativeModules
    },
    get Platform() {
      return Platform
    },
    get processColor() {
      return processColor
    },
    get requireNativeComponent() {
      return requireNativeComponent
    },
    get takeSnapshot() {
      return takeSnapshot
    },

    // Prop Types
    get ColorPropType() {
      return ColorPropType
    },
    get EdgeInsetsPropType() {
      return EdgeInsetsPropType
    },
    get PointPropType() {
      return PointPropType
    },
    get ViewPropTypes() {
      return ViewPropTypes
    },

    // Deprecated
    get Navigator() {
      invariant_1(
        false,
        'Navigator is deprecated and has been removed from this package. It can now be installed ' +
          'and imported from `react-native-deprecated-custom-components` instead of `react-native`. ' +
          'Learn about alternative navigation solutions at http://facebook.github.io/react-native/docs/navigation.html'
      )
    },
  }

  var reactNativeImplementation = ReactNative$1
  var reactNativeImplementation_1 = reactNativeImplementation.Dimensions

  var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(obj) {
          return typeof obj
        }
      : function(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj
        }

  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function')
    }
  }

  var createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i]
        descriptor.enumerable = descriptor.enumerable || false
        descriptor.configurable = true
        if ('value' in descriptor) descriptor.writable = true
        Object.defineProperty(target, descriptor.key, descriptor)
      }
    }

    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps)
      if (staticProps) defineProperties(Constructor, staticProps)
      return Constructor
    }
  })()

  var _extends$6 =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }

      return target
    }

  var inherits = function(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError(
        'Super expression must either be null or a function, not ' +
          typeof superClass
      )
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    })
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass)
  }

  var objectWithoutProperties = function(obj, keys) {
    var target = {}

    for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue
      if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
      target[i] = obj[i]
    }

    return target
  }

  var possibleConstructorReturn = function(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    }

    return call && (typeof call === 'object' || typeof call === 'function')
      ? call
      : self
  }

  //
  var isPlainObject = function(x) {
    return (
      (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' &&
      x.constructor === Object
    )
  }

  //

  /**
   * Parse errors.md and turn it into a simple hash of code: message
   */
  var ERRORS = {
    '1': 'Cannot create styled-component for component: %s.\n\n',
    '2':
      "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n* Are you trying to reuse it across renders?\n* Are you accidentally calling collectStyles twice?\n\n",
    '3':
      'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n',
    '4':
      'The `StyleSheetManager` expects a valid target or sheet prop!\n\n* Does this error occur on the client and is your target falsy?\n* Does this error occur on the server and is the sheet falsy?\n\n',
    '5':
      'The clone method cannot be used on the client!\n\n* Are you running in a client-like environment on the server?\n* Are you trying to run SSR on the client?\n\n',
    '6':
      "Trying to insert a new style tag, but the given Node is unmounted!\n\n* Are you using a custom target that isn't mounted?\n* Does your document not have a valid head element?\n* Have you accidentally removed a style tag manually?\n\n",
    '7':
      'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
    '8': 'ThemeProvider: Please make your "theme" prop an object.\n\n',
    '9': 'Missing document `<head>`\n\n',
    '10':
      'Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n',
    '11':
      'A plain React class (%s) has been interpolated into styles, probably as a component selector (https://www.styled-components.com/docs/advanced#referring-to-other-components). Only styled-component classes can be targeted in this fashion.',
  }

  /**
   * super basic version of sprintf
   */
  function format() {
    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    var a = args[0]
    var b = []
    var c = void 0

    for (c = 1; c < args.length; c += 1) {
      b.push(args[c])
    }

    b.forEach(function(d) {
      a = a.replace(/%[a-z]/, d)
    })

    return a
  }

  /**
   * Create an error file out of errors.md for development and a simple web link to the full errors
   * in production mode.
   */

  var StyledComponentsError = (function(_Error) {
    inherits(StyledComponentsError, _Error)

    function StyledComponentsError(code) {
      classCallCheck(this, StyledComponentsError)

      for (
        var _len2 = arguments.length,
          interpolations = Array(_len2 > 1 ? _len2 - 1 : 0),
          _key2 = 1;
        _key2 < _len2;
        _key2++
      ) {
        interpolations[_key2 - 1] = arguments[_key2]
      }

      if (false) {
        var _this = possibleConstructorReturn(
          this,
          _Error.call(
            this,
            'An error occurred. See https://github.com/styled-components/styled-components/blob/master/src/utils/errors.md#' +
              code +
              ' for more information. ' +
              ''
          )
        )
      } else {
        var _this = possibleConstructorReturn(
          this,
          _Error.call(
            this,
            format.apply(undefined, [ERRORS[code]].concat(interpolations))
          )
        )
      }
      return possibleConstructorReturn(_this)
    }

    return StyledComponentsError
  })(Error)

  //

  var windowWidth = reactNativeImplementation_1.get('window').width

  var objToCss = function objToCss(obj, prevKey) {
    var sortKeys = Object.keys(obj).sort()
    var isMedia = !sortKeys.some(function(k) {
      return /\D/g.test(k)
    })
    var ruleArray = Object.keys(obj)
      .filter(function(key) {
        var chunk = obj[key]
        return (
          chunk !== undefined &&
          chunk !== null &&
          chunk !== false &&
          chunk !== ''
        )
      })
      .map(function(key) {
        if (isMedia) {
          var mediaWidth =
            sortKeys.find(function(w) {
              return w >= windowWidth
            }) || sortKeys[sortKeys.length - 1]
          return '' + obj[mediaWidth]
        }
        if (isPlainObject(obj[key])) {
          return objToCss(obj[key], key)
        }
        return hyphenateStyleName_1(key) + ': ' + obj[key] + ';'
      })
    if (isMedia) {
      return ruleArray[0]
    } else {
      return prevKey
        ? prevKey + ' {\n  ' + ruleArray.join(' ') + '\n}'
        : ruleArray.join(' ')
    }
  }

  var flatten = function flatten(chunks, executionContext) {
    var result = chunks.reduce(function(ruleSet, chunk) {
      /* Remove falsey values */
      if (
        chunk === undefined ||
        chunk === null ||
        chunk === false ||
        chunk === ''
      ) {
        return ruleSet
      }

      /* Flatten ruleSet */
      if (Array.isArray(chunk)) {
        ruleSet.push.apply(ruleSet, flatten(chunk, executionContext))
        return ruleSet
      }

      /* Handle other components */
      if (chunk.hasOwnProperty('styledComponentId')) {
        // $FlowFixMe not sure how to make this pass
        ruleSet.push('.' + chunk.styledComponentId)
        return ruleSet
      }

      /* Either execute or defer the function */
      if (typeof chunk === 'function') {
        if (executionContext) {
          var nextChunk = chunk(executionContext)
          /* Throw if a React Element was given styles */
          if (React__default.isValidElement(nextChunk)) {
            var elementName = chunk.displayName || chunk.name
            throw new StyledComponentsError(11, elementName)
          }
          ruleSet.push.apply(ruleSet, flatten([nextChunk], executionContext))
        } else ruleSet.push(chunk)

        return ruleSet
      }

      /* Handle objects */
      ruleSet.push(
        // $FlowFixMe have to add %checks somehow to isPlainObject
        isPlainObject(chunk) ? objToCss(chunk) : chunk.toString()
      )

      return ruleSet
    }, [])
    return result
  }

  var stylis = createCommonjsModule(function(module, exports) {
    /*
   *          __        ___
   *    _____/ /___  __/ (_)____
   *   / ___/ __/ / / / / / ___/
   *  (__  ) /_/ /_/ / / (__  )
   * /____/\__/\__, /_/_/____/
   *          /____/
   *
   * light - weight css preprocessor @licence MIT
   */
    ;(function(factory) {
      /* eslint-disable */
      module['exports'] = factory(null)
    })(
      /** @param {*=} options */ function factory(options) {
        /* eslint-disable */

        /**
         * Notes
         *
         * The ['<method name>'] pattern is used to support closure compiler
         * the jsdoc signatures are also used to the same effect
         *
         * ----
         *
         * int + int + int === n4 [faster]
         *
         * vs
         *
         * int === n1 && int === n2 && int === n3
         *
         * ----
         *
         * switch (int) { case ints...} [faster]
         *
         * vs
         *
         * if (int == 1 && int === 2 ...)
         *
         * ----
         *
         * The (first*n1 + second*n2 + third*n3) format used in the property parser
         * is a simple way to hash the sequence of characters
         * taking into account the index they occur in
         * since any number of 3 character sequences could produce duplicates.
         *
         * On the other hand sequences that are directly tied to the index of the character
         * resolve a far more accurate measure, it's also faster
         * to evaluate one condition in a switch statement
         * than three in an if statement regardless of the added math.
         *
         * This allows the vendor prefixer to be both small and fast.
         */

        var nullptn = /^\0+/g /* matches leading null characters */
        var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
        var colonptn = /: */g /* splits animation rules */
        var cursorptn = /zoo|gra/ /* assert cursor varient */
        var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
        var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
        var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
        var elementptn = / *[\0] */g /* selector elements */
        var selectorptn = /,\r+?/g /* splits selectors */
        var andptn = /([\t\r\n ])*\f?&/g /* match & */
        var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
        var invalidptn = /\W+/g /* removes invalid characters from keyframes */
        var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
        var plcholdrptn = /::(place)/g /* match ::placeholder varient */
        var readonlyptn = /:(read-only)/g /* match :read-only varient */
        var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
        var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
        var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
        var whiteptn = /\s{2,}/g /* matches repeating whitespace */
        var pseudoptn = /([^\(])(:+) */g /* pseudo element */
        var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
        var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
        var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
        var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
        var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
        var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available */
        var imgsrcptn = /([^-])(image-set\()/

        /* vendors */
        var webkit = '-webkit-'
        var moz = '-moz-'
        var ms = '-ms-'

        /* character codes */
        var SEMICOLON = 59 /* ; */
        var CLOSEBRACES = 125 /* } */
        var OPENBRACES = 123 /* { */
        var OPENPARENTHESES = 40 /* ( */
        var CLOSEPARENTHESES = 41 /* ) */
        var OPENBRACKET = 91 /* [ */
        var CLOSEBRACKET = 93 /* ] */
        var NEWLINE = 10 /* \n */
        var CARRIAGE = 13 /* \r */
        var TAB = 9 /* \t */
        var AT = 64 /* @ */
        var SPACE = 32 /*   */
        var AND = 38 /* & */
        var DASH = 45 /* - */
        var UNDERSCORE = 95 /* _ */
        var STAR = 42 /* * */
        var COMMA = 44 /* , */
        var COLON = 58 /* : */
        var SINGLEQUOTE = 39 /* ' */
        var DOUBLEQUOTE = 34 /* " */
        var FOWARDSLASH = 47 /* / */
        var GREATERTHAN = 62 /* > */
        var PLUS = 43 /* + */
        var TILDE = 126 /* ~ */
        var NULL = 0 /* \0 */
        var FORMFEED = 12 /* \f */
        var VERTICALTAB = 11 /* \v */

        /* special identifiers */
        var KEYFRAME = 107 /* k */
        var MEDIA = 109 /* m */
        var SUPPORTS = 115 /* s */
        var PLACEHOLDER = 112 /* p */
        var READONLY = 111 /* o */
        var IMPORT = 105 /* <at>i */
        var CHARSET = 99 /* <at>c */
        var DOCUMENT = 100 /* <at>d */
        var PAGE = 112 /* <at>p */

        var column = 1 /* current column */
        var line = 1 /* current line numebr */
        var pattern = 0 /* :pattern */

        var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
        var prefix = 1 /* vendor prefix */
        var escape = 1 /* escape :global() pattern */
        var compress = 0 /* compress output */
        var semicolon = 0 /* no/semicolon option */
        var preserve = 0 /* preserve empty selectors */

        /* empty reference */
        var array = []

        /* plugins */
        var plugins = []
        var plugged = 0
        var should = null

        /* plugin context */
        var POSTS = -2
        var PREPS = -1
        var UNKWN = 0
        var PROPS = 1
        var BLCKS = 2
        var ATRUL = 3

        /* plugin newline context */
        var unkwn = 0

        /* keyframe animation */
        var keyed = 1
        var key = ''

        /* selector namespace */
        var nscopealt = ''
        var nscope = ''

        /**
         * Compile
         *
         * @param {Array<string>} parent
         * @param {Array<string>} current
         * @param {string} body
         * @param {number} id
         * @param {number} depth
         * @return {string}
         */
        function compile(parent, current, body, id, depth) {
          var bracket = 0 /* brackets [] */
          var comment = 0 /* comments /* // or /* */
          var parentheses = 0 /* functions () */
          var quote = 0 /* quotes '', "" */

          var first = 0 /* first character code */
          var second = 0 /* second character code */
          var code = 0 /* current character code */
          var tail = 0 /* previous character code */
          var trail = 0 /* character before previous code */
          var peak = 0 /* previous non-whitespace code */

          var counter = 0 /* count sequence termination */
          var context = 0 /* track current context */
          var atrule = 0 /* track @at-rule context */
          var pseudo = 0 /* track pseudo token index */
          var caret = 0 /* current character index */
          var format = 0 /* control character formating context */
          var insert = 0 /* auto semicolon insertion */
          var invert = 0 /* inverted selector pattern */
          var length = 0 /* generic length address */
          var eof = body.length /* end of file(length) */
          var eol = eof - 1 /* end of file(characters) */

          var char = '' /* current character */
          var chars = '' /* current buffer of characters */
          var child = '' /* next buffer of characters */
          var out = '' /* compiled body */
          var children = '' /* compiled children */
          var flat = '' /* compiled leafs */
          var selector /* generic selector address */
          var result /* generic address */

          // ...build body
          while (caret < eof) {
            code = body.charCodeAt(caret)

            // eof varient
            if (caret === eol) {
              // last character + noop context, add synthetic padding for noop context to terminate
              if (comment + quote + parentheses + bracket !== 0) {
                if (comment !== 0) {
                  code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
                }

                quote = parentheses = bracket = 0
                eof++
                eol++
              }
            }

            if (comment + quote + parentheses + bracket === 0) {
              // eof varient
              if (caret === eol) {
                if (format > 0) {
                  chars = chars.replace(formatptn, '')
                }

                if (chars.trim().length > 0) {
                  switch (code) {
                    case SPACE:
                    case TAB:
                    case SEMICOLON:
                    case CARRIAGE:
                    case NEWLINE: {
                      break
                    }
                    default: {
                      chars += body.charAt(caret)
                    }
                  }

                  code = SEMICOLON
                }
              }

              // auto semicolon insertion
              if (insert === 1) {
                switch (code) {
                  // false flags
                  case OPENBRACES:
                  case CLOSEBRACES:
                  case SEMICOLON:
                  case DOUBLEQUOTE:
                  case SINGLEQUOTE:
                  case OPENPARENTHESES:
                  case CLOSEPARENTHESES:
                  case COMMA: {
                    insert = 0
                  }
                  // ignore
                  case TAB:
                  case CARRIAGE:
                  case NEWLINE:
                  case SPACE: {
                    break
                  }
                  // valid
                  default: {
                    insert = 0
                    length = caret
                    first = code
                    caret--
                    code = SEMICOLON

                    while (length < eof) {
                      switch (body.charCodeAt(length++)) {
                        case NEWLINE:
                        case CARRIAGE:
                        case SEMICOLON: {
                          ++caret
                          code = first
                          length = eof
                          break
                        }
                        case COLON: {
                          if (format > 0) {
                            ++caret
                            code = first
                          }
                        }
                        case OPENBRACES: {
                          length = eof
                        }
                      }
                    }
                  }
                }
              }

              // token varient
              switch (code) {
                case OPENBRACES: {
                  chars = chars.trim()
                  first = chars.charCodeAt(0)
                  counter = 1
                  length = ++caret

                  while (caret < eof) {
                    switch ((code = body.charCodeAt(caret))) {
                      case OPENBRACES: {
                        counter++
                        break
                      }
                      case CLOSEBRACES: {
                        counter--
                        break
                      }
                      case FOWARDSLASH: {
                        switch ((second = body.charCodeAt(caret + 1))) {
                          // /*, //
                          case STAR:
                          case FOWARDSLASH: {
                            caret = delimited(second, caret, eol, body)
                          }
                        }
                        break
                      }
                      // given "[" === 91 & "]" === 93 hence forth 91 + 1 + 1 === 93
                      case OPENBRACKET: {
                        code++
                      }
                      // given "(" === 40 & ")" === 41 hence forth 40 + 1 === 41
                      case OPENPARENTHESES: {
                        code++
                      }
                      // quote tail delimiter is identical to the head delimiter hence noop,
                      // fallthrough clauses have been shifted to the correct tail delimiter
                      case DOUBLEQUOTE:
                      case SINGLEQUOTE: {
                        while (caret++ < eol) {
                          if (body.charCodeAt(caret) === code) {
                            break
                          }
                        }
                      }
                    }

                    if (counter === 0) {
                      break
                    }

                    caret++
                  }

                  child = body.substring(length, caret)

                  if (first === NULL) {
                    first = (chars = chars
                      .replace(nullptn, '')
                      .trim()).charCodeAt(0)
                  }

                  switch (first) {
                    // @at-rule
                    case AT: {
                      if (format > 0) {
                        chars = chars.replace(formatptn, '')
                      }

                      second = chars.charCodeAt(1)

                      switch (second) {
                        case DOCUMENT:
                        case MEDIA:
                        case SUPPORTS:
                        case DASH: {
                          selector = current
                          break
                        }
                        default: {
                          selector = array
                        }
                      }

                      child = compile(
                        current,
                        selector,
                        child,
                        second,
                        depth + 1
                      )
                      length = child.length

                      // preserve empty @at-rule
                      if (preserve > 0 && length === 0) {
                        length = chars.length
                      }

                      // execute plugins, @at-rule context
                      if (plugged > 0) {
                        selector = select(array, chars, invert)
                        result = proxy(
                          ATRUL,
                          child,
                          selector,
                          current,
                          line,
                          column,
                          length,
                          second,
                          depth,
                          id
                        )
                        chars = selector.join('')

                        if (result !== void 0) {
                          if ((length = (child = result.trim()).length) === 0) {
                            second = 0
                            child = ''
                          }
                        }
                      }

                      if (length > 0) {
                        switch (second) {
                          case SUPPORTS: {
                            chars = chars.replace(supportsptn, supports)
                          }
                          case DOCUMENT:
                          case MEDIA:
                          case DASH: {
                            child = chars + '{' + child + '}'
                            break
                          }
                          case KEYFRAME: {
                            chars = chars.replace(
                              keyframeptn,
                              '$1 $2' + (keyed > 0 ? key : '')
                            )
                            child = chars + '{' + child + '}'

                            if (
                              prefix === 1 ||
                              (prefix === 2 && vendor('@' + child, 3))
                            ) {
                              child = '@' + webkit + child + '@' + child
                            } else {
                              child = '@' + child
                            }
                            break
                          }
                          default: {
                            child = chars + child

                            if (id === PAGE) {
                              child = ((out += child), '')
                            }
                          }
                        }
                      } else {
                        child = ''
                      }

                      break
                    }
                    // selector
                    default: {
                      child = compile(
                        current,
                        select(current, chars, invert),
                        child,
                        id,
                        depth + 1
                      )
                    }
                  }

                  children += child

                  // reset
                  context = 0
                  insert = 0
                  pseudo = 0
                  format = 0
                  invert = 0
                  atrule = 0
                  chars = ''
                  child = ''
                  code = body.charCodeAt(++caret)
                  break
                }
                case CLOSEBRACES:
                case SEMICOLON: {
                  chars = (format > 0
                    ? chars.replace(formatptn, '')
                    : chars
                  ).trim()

                  if ((length = chars.length) > 1) {
                    // monkey-patch missing colon
                    if (pseudo === 0) {
                      first = chars.charCodeAt(0)

                      // first character is a letter or dash, buffer has a space character
                      if (first === DASH || (first > 96 && first < 123)) {
                        length = (chars = chars.replace(' ', ':')).length
                      }
                    }

                    // execute plugins, property context
                    if (plugged > 0) {
                      if (
                        (result = proxy(
                          PROPS,
                          chars,
                          current,
                          parent,
                          line,
                          column,
                          out.length,
                          id,
                          depth,
                          id
                        )) !== void 0
                      ) {
                        if ((length = (chars = result.trim()).length) === 0) {
                          chars = '\0\0'
                        }
                      }
                    }

                    first = chars.charCodeAt(0)
                    second = chars.charCodeAt(1)

                    switch (first) {
                      case NULL: {
                        break
                      }
                      case AT: {
                        if (second === IMPORT || second === CHARSET) {
                          flat += chars + body.charAt(caret)
                          break
                        }
                      }
                      default: {
                        if (chars.charCodeAt(length - 1) === COLON) {
                          break
                        }

                        out += property(
                          chars,
                          first,
                          second,
                          chars.charCodeAt(2)
                        )
                      }
                    }
                  }

                  // reset
                  context = 0
                  insert = 0
                  pseudo = 0
                  format = 0
                  invert = 0
                  chars = ''
                  code = body.charCodeAt(++caret)
                  break
                }
              }
            }

            // parse characters
            switch (code) {
              case CARRIAGE:
              case NEWLINE: {
                // auto insert semicolon
                if (comment + quote + parentheses + bracket + semicolon === 0) {
                  // valid non-whitespace characters that
                  // may precede a newline
                  switch (peak) {
                    case CLOSEPARENTHESES:
                    case SINGLEQUOTE:
                    case DOUBLEQUOTE:
                    case AT:
                    case TILDE:
                    case GREATERTHAN:
                    case STAR:
                    case PLUS:
                    case FOWARDSLASH:
                    case DASH:
                    case COLON:
                    case COMMA:
                    case SEMICOLON:
                    case OPENBRACES:
                    case CLOSEBRACES: {
                      break
                    }
                    default: {
                      // current buffer has a colon
                      if (pseudo > 0) {
                        insert = 1
                      }
                    }
                  }
                }

                // terminate line comment
                if (comment === FOWARDSLASH) {
                  comment = 0
                } else if (
                  cascade + context === 0 &&
                  id !== KEYFRAME &&
                  chars.length > 0
                ) {
                  format = 1
                  chars += '\0'
                }

                // execute plugins, newline context
                if (plugged * unkwn > 0) {
                  proxy(
                    UNKWN,
                    chars,
                    current,
                    parent,
                    line,
                    column,
                    out.length,
                    id,
                    depth,
                    id
                  )
                }

                // next line, reset column position
                column = 1
                line++
                break
              }
              case SEMICOLON:
              case CLOSEBRACES: {
                if (comment + quote + parentheses + bracket === 0) {
                  column++
                  break
                }
              }
              default: {
                // increment column position
                column++

                // current character
                char = body.charAt(caret)

                // remove comments, escape functions, strings, attributes and prepare selectors
                switch (code) {
                  case TAB:
                  case SPACE: {
                    if (quote + bracket + comment === 0) {
                      switch (tail) {
                        case COMMA:
                        case COLON:
                        case TAB:
                        case SPACE: {
                          char = ''
                          break
                        }
                        default: {
                          if (code !== SPACE) {
                            char = ' '
                          }
                        }
                      }
                    }
                    break
                  }
                  // escape breaking control characters
                  case NULL: {
                    char = '\\0'
                    break
                  }
                  case FORMFEED: {
                    char = '\\f'
                    break
                  }
                  case VERTICALTAB: {
                    char = '\\v'
                    break
                  }
                  // &
                  case AND: {
                    // inverted selector pattern i.e html &
                    if (quote + comment + bracket === 0 && cascade > 0) {
                      invert = 1
                      format = 1
                      char = '\f' + char
                    }
                    break
                  }
                  // ::p<l>aceholder, l
                  // :read-on<l>y, l
                  case 108: {
                    if (
                      quote + comment + bracket + pattern === 0 &&
                      pseudo > 0
                    ) {
                      switch (caret - pseudo) {
                        // ::placeholder
                        case 2: {
                          if (
                            tail === PLACEHOLDER &&
                            body.charCodeAt(caret - 3) === COLON
                          ) {
                            pattern = tail
                          }
                        }
                        // :read-only
                        case 8: {
                          if (trail === READONLY) {
                            pattern = trail
                          }
                        }
                      }
                    }
                    break
                  }
                  // :<pattern>
                  case COLON: {
                    if (quote + comment + bracket === 0) {
                      pseudo = caret
                    }
                    break
                  }
                  // selectors
                  case COMMA: {
                    if (comment + parentheses + quote + bracket === 0) {
                      format = 1
                      char += '\r'
                    }
                    break
                  }
                  // quotes
                  case DOUBLEQUOTE:
                  case SINGLEQUOTE: {
                    if (comment === 0) {
                      quote = quote === code ? 0 : quote === 0 ? code : quote
                    }
                    break
                  }
                  // attributes
                  case OPENBRACKET: {
                    if (quote + comment + parentheses === 0) {
                      bracket++
                    }
                    break
                  }
                  case CLOSEBRACKET: {
                    if (quote + comment + parentheses === 0) {
                      bracket--
                    }
                    break
                  }
                  // functions
                  case CLOSEPARENTHESES: {
                    if (quote + comment + bracket === 0) {
                      parentheses--
                    }
                    break
                  }
                  case OPENPARENTHESES: {
                    if (quote + comment + bracket === 0) {
                      if (context === 0) {
                        switch (tail * 2 + trail * 3) {
                          // :matches
                          case 533: {
                            break
                          }
                          // :global, :not, :nth-child etc...
                          default: {
                            counter = 0
                            context = 1
                          }
                        }
                      }

                      parentheses++
                    }
                    break
                  }
                  case AT: {
                    if (
                      comment +
                        parentheses +
                        quote +
                        bracket +
                        pseudo +
                        atrule ===
                      0
                    ) {
                      atrule = 1
                    }
                    break
                  }
                  // block/line comments
                  case STAR:
                  case FOWARDSLASH: {
                    if (quote + bracket + parentheses > 0) {
                      break
                    }

                    switch (comment) {
                      // initialize line/block comment context
                      case 0: {
                        switch (code * 2 + body.charCodeAt(caret + 1) * 3) {
                          // //
                          case 235: {
                            comment = FOWARDSLASH
                            break
                          }
                          // /*
                          case 220: {
                            length = caret
                            comment = STAR
                            break
                          }
                        }
                        break
                      }
                      // end block comment context
                      case STAR: {
                        if (
                          code === FOWARDSLASH &&
                          tail === STAR &&
                          length + 2 !== caret
                        ) {
                          // /*<!> ... */, !
                          if (body.charCodeAt(length + 2) === 33) {
                            out += body.substring(length, caret + 1)
                          }
                          char = ''
                          comment = 0
                        }
                      }
                    }
                  }
                }

                // ignore comment blocks
                if (comment === 0) {
                  // aggressive isolation mode, divide each individual selector
                  // including selectors in :not function but excluding selectors in :global function
                  if (
                    cascade + quote + bracket + atrule === 0 &&
                    id !== KEYFRAME &&
                    code !== SEMICOLON
                  ) {
                    switch (code) {
                      case COMMA:
                      case TILDE:
                      case GREATERTHAN:
                      case PLUS:
                      case CLOSEPARENTHESES:
                      case OPENPARENTHESES: {
                        if (context === 0) {
                          // outside of an isolated context i.e nth-child(<...>)
                          switch (tail) {
                            case TAB:
                            case SPACE:
                            case NEWLINE:
                            case CARRIAGE: {
                              char = char + '\0'
                              break
                            }
                            default: {
                              char = '\0' + char + (code === COMMA ? '' : '\0')
                            }
                          }
                          format = 1
                        } else {
                          // within an isolated context, sleep untill it's terminated
                          switch (code) {
                            case OPENPARENTHESES: {
                              // :globa<l>(
                              if (pseudo + 7 === caret && tail === 108) {
                                pseudo = 0
                              }
                              context = ++counter
                              break
                            }
                            case CLOSEPARENTHESES: {
                              if ((context = --counter) === 0) {
                                format = 1
                                char += '\0'
                              }
                              break
                            }
                          }
                        }
                        break
                      }
                      case TAB:
                      case SPACE: {
                        switch (tail) {
                          case NULL:
                          case OPENBRACES:
                          case CLOSEBRACES:
                          case SEMICOLON:
                          case COMMA:
                          case FORMFEED:
                          case TAB:
                          case SPACE:
                          case NEWLINE:
                          case CARRIAGE: {
                            break
                          }
                          default: {
                            // ignore in isolated contexts
                            if (context === 0) {
                              format = 1
                              char += '\0'
                            }
                          }
                        }
                      }
                    }
                  }

                  // concat buffer of characters
                  chars += char

                  // previous non-whitespace character code
                  if (code !== SPACE && code !== TAB) {
                    peak = code
                  }
                }
              }
            }

            // tail character codes
            trail = tail
            tail = code

            // visit every character
            caret++
          }

          length = out.length

          // preserve empty selector
          if (preserve > 0) {
            if (
              length === 0 &&
              children.length === 0 &&
              (current[0].length === 0) === false
            ) {
              if (
                id !== MEDIA ||
                (current.length === 1 &&
                  (cascade > 0 ? nscopealt : nscope) === current[0])
              ) {
                length = current.join(',').length + 2
              }
            }
          }

          if (length > 0) {
            // cascade isolation mode?
            selector =
              cascade === 0 && id !== KEYFRAME ? isolate(current) : current

            // execute plugins, block context
            if (plugged > 0) {
              result = proxy(
                BLCKS,
                out,
                selector,
                parent,
                line,
                column,
                length,
                id,
                depth,
                id
              )

              if (result !== void 0 && (out = result).length === 0) {
                return flat + out + children
              }
            }

            out = selector.join(',') + '{' + out + '}'

            if (prefix * pattern !== 0) {
              if (prefix === 2 && !vendor(out, 2)) pattern = 0

              switch (pattern) {
                // ::read-only
                case READONLY: {
                  out = out.replace(readonlyptn, ':' + moz + '$1') + out
                  break
                }
                // ::placeholder
                case PLACEHOLDER: {
                  out =
                    out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
                    out.replace(plcholdrptn, '::' + moz + '$1') +
                    out.replace(plcholdrptn, ':' + ms + 'input-$1') +
                    out
                  break
                }
              }

              pattern = 0
            }
          }

          return flat + out + children
        }

        /**
         * Select
         *
         * @param {Array<string>} parent
         * @param {string} current
         * @param {number} invert
         * @return {Array<string>}
         */
        function select(parent, current, invert) {
          var selectors = current.trim().split(selectorptn)
          var out = selectors

          var length = selectors.length
          var l = parent.length

          switch (l) {
            // 0-1 parent selectors
            case 0:
            case 1: {
              for (
                var i = 0, selector = l === 0 ? '' : parent[0] + ' ';
                i < length;
                ++i
              ) {
                out[i] = scope(selector, out[i], invert, l).trim()
              }
              break
            }
            // >2 parent selectors, nested
            default: {
              for (var i = 0, j = 0, out = []; i < length; ++i) {
                for (var k = 0; k < l; ++k) {
                  out[j++] = scope(
                    parent[k] + ' ',
                    selectors[i],
                    invert,
                    l
                  ).trim()
                }
              }
            }
          }

          return out
        }

        /**
         * Scope
         *
         * @param {string} parent
         * @param {string} current
         * @param {number} invert
         * @param {number} level
         * @return {string}
         */
        function scope(parent, current, invert, level) {
          var selector = current
          var code = selector.charCodeAt(0)

          // trim leading whitespace
          if (code < 33) {
            code = (selector = selector.trim()).charCodeAt(0)
          }

          switch (code) {
            // &
            case AND: {
              switch (cascade + level) {
                case 0:
                case 1: {
                  if (parent.trim().length === 0) {
                    break
                  }
                }
                default: {
                  return selector.replace(andptn, '$1' + parent.trim())
                }
              }
              break
            }
            // :
            case COLON: {
              switch (selector.charCodeAt(1)) {
                // g in :global
                case 103: {
                  if (escape > 0 && cascade > 0) {
                    return selector
                      .replace(escapeptn, '$1')
                      .replace(andptn, '$1' + nscope)
                  }
                  break
                }
                default: {
                  // :hover
                  return (
                    parent.trim() +
                    selector.replace(andptn, '$1' + parent.trim())
                  )
                }
              }
            }
            default: {
              // html &
              if (invert * cascade > 0 && selector.indexOf('\f') > 0) {
                return selector.replace(
                  andptn,
                  (parent.charCodeAt(0) === COLON ? '' : '$1') + parent.trim()
                )
              }
            }
          }

          return parent + selector
        }

        /**
         * Property
         *
         * @param {string} input
         * @param {number} first
         * @param {number} second
         * @param {number} third
         * @return {string}
         */
        function property(input, first, second, third) {
          var index = 0
          var out = input + ';'
          var hash = first * 2 + second * 3 + third * 4
          var cache

          // animation: a, n, i characters
          if (hash === 944) {
            return animation(out)
          } else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
            return out
          }

          // vendor prefix
          switch (hash) {
            // text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
            case 1015: {
              // text-shadow/text-align/text-transform, a
              return out.charCodeAt(10) === 97 ? webkit + out + out : out
            }
            // filter/fill f, i, l
            case 951: {
              // filter, t
              return out.charCodeAt(3) === 116 ? webkit + out + out : out
            }
            // color/column, c, o, l
            case 963: {
              // column, n
              return out.charCodeAt(5) === 110 ? webkit + out + out : out
            }
            // box-decoration-break, b, o, x
            case 1009: {
              if (out.charCodeAt(4) !== 100) {
                break
              }
            }
            // mask, m, a, s
            // clip-path, c, l, i
            case 969:
            case 942: {
              return webkit + out + out
            }
            // appearance: a, p, p
            case 978: {
              return webkit + out + moz + out + out
            }
            // hyphens: h, y, p
            // user-select: u, s, e
            case 1019:
            case 983: {
              return webkit + out + moz + out + ms + out + out
            }
            // background/backface-visibility, b, a, c
            case 883: {
              // backface-visibility, -
              if (out.charCodeAt(8) === DASH) {
                return webkit + out + out
              }

              // image-set(...)
              if (out.indexOf('image-set(', 11) > 0) {
                return out.replace(imgsrcptn, '$1' + webkit + '$2') + out
              }

              return out
            }
            // flex: f, l, e
            case 932: {
              if (out.charCodeAt(4) === DASH) {
                switch (out.charCodeAt(5)) {
                  // flex-grow, g
                  case 103: {
                    return (
                      webkit +
                      'box-' +
                      out.replace('-grow', '') +
                      webkit +
                      out +
                      ms +
                      out.replace('grow', 'positive') +
                      out
                    )
                  }
                  // flex-shrink, s
                  case 115: {
                    return (
                      webkit +
                      out +
                      ms +
                      out.replace('shrink', 'negative') +
                      out
                    )
                  }
                  // flex-basis, b
                  case 98: {
                    return (
                      webkit +
                      out +
                      ms +
                      out.replace('basis', 'preferred-size') +
                      out
                    )
                  }
                }
              }

              return webkit + out + ms + out + out
            }
            // order: o, r, d
            case 964: {
              return webkit + out + ms + 'flex' + '-' + out + out
            }
            // justify-items/justify-content, j, u, s
            case 1023: {
              // justify-content, c
              if (out.charCodeAt(8) !== 99) {
                break
              }

              cache = out
                .substring(out.indexOf(':', 15))
                .replace('flex-', '')
                .replace('space-between', 'justify')
              return (
                webkit +
                'box-pack' +
                cache +
                webkit +
                out +
                ms +
                'flex-pack' +
                cache +
                out
              )
            }
            // cursor, c, u, r
            case 1005: {
              return cursorptn.test(out)
                ? out.replace(colonptn, ':' + webkit) +
                    out.replace(colonptn, ':' + moz) +
                    out
                : out
            }
            // writing-mode, w, r, i
            case 1000: {
              cache = out.substring(13).trim()
              index = cache.indexOf('-') + 1

              switch (cache.charCodeAt(0) + cache.charCodeAt(index)) {
                // vertical-lr
                case 226: {
                  cache = out.replace(writingptn, 'tb')
                  break
                }
                // vertical-rl
                case 232: {
                  cache = out.replace(writingptn, 'tb-rl')
                  break
                }
                // horizontal-tb
                case 220: {
                  cache = out.replace(writingptn, 'lr')
                  break
                }
                default: {
                  return out
                }
              }

              return webkit + out + ms + cache + out
            }
            // position: sticky
            case 1017: {
              if (out.indexOf('sticky', 9) === -1) {
                return out
              }
            }
            // display(flex/inline-flex/inline-box): d, i, s
            case 975: {
              index = (out = input).length - 10
              cache = (out.charCodeAt(index) === 33
                ? out.substring(0, index)
                : out
              )
                .substring(input.indexOf(':', 7) + 1)
                .trim()

              switch ((hash =
                cache.charCodeAt(0) + (cache.charCodeAt(7) | 0))) {
                // inline-
                case 203: {
                  // inline-box
                  if (cache.charCodeAt(8) < 111) {
                    break
                  }
                }
                // inline-box/sticky
                case 115: {
                  out = out.replace(cache, webkit + cache) + ';' + out
                  break
                }
                // inline-flex
                // flex
                case 207:
                case 102: {
                  out =
                    out.replace(
                      cache,
                      webkit + (hash > 102 ? 'inline-' : '') + 'box'
                    ) +
                    ';' +
                    out.replace(cache, webkit + cache) +
                    ';' +
                    out.replace(cache, ms + cache + 'box') +
                    ';' +
                    out
                }
              }

              return out + ';'
            }
            // align-items, align-center, align-self: a, l, i, -
            case 938: {
              if (out.charCodeAt(5) === DASH) {
                switch (out.charCodeAt(6)) {
                  // align-items, i
                  case 105: {
                    cache = out.replace('-items', '')
                    return (
                      webkit +
                      out +
                      webkit +
                      'box-' +
                      cache +
                      ms +
                      'flex-' +
                      cache +
                      out
                    )
                  }
                  // align-self, s
                  case 115: {
                    return (
                      webkit +
                      out +
                      ms +
                      'flex-item-' +
                      out.replace(selfptn, '') +
                      out
                    )
                  }
                  // align-content
                  default: {
                    return (
                      webkit +
                      out +
                      ms +
                      'flex-line-pack' +
                      out.replace('align-content', '').replace(selfptn, '') +
                      out
                    )
                  }
                }
              }
              break
            }
            // min/max
            case 973:
            case 989: {
              // min-/max- height/width/block-size/inline-size
              if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
                break
              }
            }
            // height/width: min-content / width: max-content
            case 931:
            case 953: {
              if (dimensionptn.test(input) === true) {
                // stretch
                if (
                  (cache = input.substring(input.indexOf(':') + 1)).charCodeAt(
                    0
                  ) === 115
                )
                  return property(
                    input.replace('stretch', 'fill-available'),
                    first,
                    second,
                    third
                  ).replace(':fill-available', ':stretch')
                else
                  return (
                    out.replace(cache, webkit + cache) +
                    out.replace(cache, moz + cache.replace('fill-', '')) +
                    out
                  )
              }
              break
            }
            // transform, transition: t, r, a
            case 962: {
              out =
                webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out

              // transitions
              if (
                second + third === 211 &&
                out.charCodeAt(13) === 105 &&
                out.indexOf('transform', 10) > 0
              ) {
                return (
                  out
                    .substring(0, out.indexOf(';', 27) + 1)
                    .replace(transformptn, '$1' + webkit + '$2') + out
                )
              }

              break
            }
          }

          return out
        }

        /**
         * Vendor
         *
         * @param {string} content
         * @param {number} context
         * @return {boolean}
         */
        function vendor(content, context) {
          var index = content.indexOf(context === 1 ? ':' : '{')
          var key = content.substring(0, context !== 3 ? index : 10)
          var value = content.substring(index + 1, content.length - 1)

          return should(
            context !== 2 ? key : key.replace(pseudofmt, '$1'),
            value,
            context
          )
        }

        /**
         * Supports
         *
         * @param {string} match
         * @param {string} group
         * @return {string}
         */
        function supports(match, group) {
          var out = property(
            group,
            group.charCodeAt(0),
            group.charCodeAt(1),
            group.charCodeAt(2)
          )

          return out !== group + ';'
            ? out.replace(propertyptn, ' or ($1)').substring(4)
            : '(' + group + ')'
        }

        /**
         * Animation
         *
         * @param {string} input
         * @return {string}
         */
        function animation(input) {
          var length = input.length
          var index = input.indexOf(':', 9) + 1
          var declare = input.substring(0, index).trim()
          var out = input.substring(index, length - 1).trim()

          switch (input.charCodeAt(9) * keyed) {
            case 0: {
              break
            }
            // animation-*, -
            case DASH: {
              // animation-name, n
              if (input.charCodeAt(10) !== 110) {
                break
              }
            }
            // animation/animation-name
            default: {
              // split in case of multiple animations
              var list = out.split(((out = ''), animationptn))

              for (
                var i = 0, index = 0, length = list.length;
                i < length;
                index = 0, ++i
              ) {
                var value = list[i]
                var items = value.split(propertiesptn)

                while ((value = items[index])) {
                  var peak = value.charCodeAt(0)

                  if (
                    keyed === 1 &&
                    // letters
                    ((peak > AT && peak < 90) ||
                      (peak > 96 && peak < 123) ||
                      peak === UNDERSCORE ||
                      // dash but not in sequence i.e --
                      (peak === DASH && value.charCodeAt(1) !== DASH))
                  ) {
                    // not a number/function
                    switch (isNaN(parseFloat(value)) +
                      (value.indexOf('(') !== -1)) {
                      case 1: {
                        switch (value) {
                          // not a valid reserved keyword
                          case 'infinite':
                          case 'alternate':
                          case 'backwards':
                          case 'running':
                          case 'normal':
                          case 'forwards':
                          case 'both':
                          case 'none':
                          case 'linear':
                          case 'ease':
                          case 'ease-in':
                          case 'ease-out':
                          case 'ease-in-out':
                          case 'paused':
                          case 'reverse':
                          case 'alternate-reverse':
                          case 'inherit':
                          case 'initial':
                          case 'unset':
                          case 'step-start':
                          case 'step-end': {
                            break
                          }
                          default: {
                            value += key
                          }
                        }
                      }
                    }
                  }

                  items[index++] = value
                }

                out += (i === 0 ? '' : ',') + items.join(' ')
              }
            }
          }

          out = declare + out + ';'

          if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
            return webkit + out + out

          return out
        }

        /**
         * Isolate
         *
         * @param {Array<string>} current
         */
        function isolate(current) {
          for (
            var i = 0,
              length = current.length,
              selector = Array(length),
              padding,
              element;
            i < length;
            ++i
          ) {
            // split individual elements in a selector i.e h1 h2 === [h1, h2]
            var elements = current[i].split(elementptn)
            var out = ''

            for (
              var j = 0, size = 0, tail = 0, code = 0, l = elements.length;
              j < l;
              ++j
            ) {
              // empty element
              if ((size = (element = elements[j]).length) === 0 && l > 1) {
                continue
              }

              tail = out.charCodeAt(out.length - 1)
              code = element.charCodeAt(0)
              padding = ''

              if (j !== 0) {
                // determine if we need padding
                switch (tail) {
                  case STAR:
                  case TILDE:
                  case GREATERTHAN:
                  case PLUS:
                  case SPACE:
                  case OPENPARENTHESES: {
                    break
                  }
                  default: {
                    padding = ' '
                  }
                }
              }

              switch (code) {
                case AND: {
                  element = padding + nscopealt
                }
                case TILDE:
                case GREATERTHAN:
                case PLUS:
                case SPACE:
                case CLOSEPARENTHESES:
                case OPENPARENTHESES: {
                  break
                }
                case OPENBRACKET: {
                  element = padding + element + nscopealt
                  break
                }
                case COLON: {
                  switch (element.charCodeAt(1) * 2 +
                    element.charCodeAt(2) * 3) {
                    // :global
                    case 530: {
                      if (escape > 0) {
                        element = padding + element.substring(8, size - 1)
                        break
                      }
                    }
                    // :hover, :nth-child(), ...
                    default: {
                      if (j < 1 || elements[j - 1].length < 1) {
                        element = padding + nscopealt + element
                      }
                    }
                  }
                  break
                }
                case COMMA: {
                  padding = ''
                }
                default: {
                  if (size > 1 && element.indexOf(':') > 0) {
                    element =
                      padding +
                      element.replace(pseudoptn, '$1' + nscopealt + '$2')
                  } else {
                    element = padding + element + nscopealt
                  }
                }
              }

              out += element
            }

            selector[i] = out.replace(formatptn, '').trim()
          }

          return selector
        }

        /**
         * Proxy
         *
         * @param {number} context
         * @param {string} content
         * @param {Array<string>} selectors
         * @param {Array<string>} parents
         * @param {number} line
         * @param {number} column
         * @param {number} length
         * @param {number} id
         * @param {number} depth
         * @param {number} at
         * @return {(string|void|*)}
         */
        function proxy(
          context,
          content,
          selectors,
          parents,
          line,
          column,
          length,
          id,
          depth,
          at
        ) {
          for (var i = 0, out = content, next; i < plugged; ++i) {
            switch ((next = plugins[i].call(
              stylis,
              context,
              out,
              selectors,
              parents,
              line,
              column,
              length,
              id,
              depth,
              at
            ))) {
              case void 0:
              case false:
              case true:
              case null: {
                break
              }
              default: {
                out = next
              }
            }
          }
          if (out !== content) {
            return out
          }
        }

        /**
         * @param {number} code
         * @param {number} index
         * @param {number} length
         * @param {string} body
         * @return {number}
         */
        function delimited(code, index, length, body) {
          for (var i = index + 1; i < length; ++i) {
            switch (body.charCodeAt(i)) {
              // /*
              case FOWARDSLASH: {
                if (code === STAR) {
                  if (body.charCodeAt(i - 1) === STAR && index + 2 !== i) {
                    return i + 1
                  }
                }
                break
              }
              // //
              case NEWLINE: {
                if (code === FOWARDSLASH) {
                  return i + 1
                }
              }
            }
          }

          return i
        }

        /**
         * Minify
         *
         * @param {(string|*)} output
         * @return {string}
         */
        function minify(output) {
          return output
            .replace(formatptn, '')
            .replace(beforeptn, '')
            .replace(afterptn, '$1')
            .replace(tailptn, '$1')
            .replace(whiteptn, ' ')
        }

        /**
         * Use
         *
         * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
         */
        function use(plugin) {
          switch (plugin) {
            case void 0:
            case null: {
              plugged = plugins.length = 0
              break
            }
            default: {
              if (typeof plugin === 'function') {
                plugins[plugged++] = plugin
              } else if (typeof plugin === 'object') {
                for (var i = 0, length = plugin.length; i < length; ++i) {
                  use(plugin[i])
                }
              } else {
                unkwn = !!plugin | 0
              }
            }
          }

          return use
        }

        /**
         * Set
         *
         * @param {*} options
         */
        function set(options) {
          for (var name in options) {
            var value = options[name]
            switch (name) {
              case 'keyframe':
                keyed = value | 0
                break
              case 'global':
                escape = value | 0
                break
              case 'cascade':
                cascade = value | 0
                break
              case 'compress':
                compress = value | 0
                break
              case 'semicolon':
                semicolon = value | 0
                break
              case 'preserve':
                preserve = value | 0
                break
              case 'prefix':
                should = null

                if (!value) {
                  prefix = 0
                } else if (typeof value !== 'function') {
                  prefix = 1
                } else {
                  prefix = 2
                  should = value
                }
            }
          }

          return set
        }

        /**
         * Stylis
         *
         * @param {string} selector
         * @param {string} input
         * @return {*}
         */
        function stylis(selector, input) {
          if (this !== void 0 && this.constructor === stylis) {
            return factory(selector)
          }

          // setup
          var ns = selector
          var code = ns.charCodeAt(0)

          // trim leading whitespace
          if (code < 33) {
            code = (ns = ns.trim()).charCodeAt(0)
          }

          // keyframe/animation namespace
          if (keyed > 0) {
            key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
          }

          // reset, used to assert if a plugin is moneky-patching the return value
          code = 1

          // cascade/isolate
          if (cascade === 1) {
            nscope = ns
          } else {
            nscopealt = ns
          }

          var selectors = [nscope]
          var result

          // execute plugins, pre-process context
          if (plugged > 0) {
            result = proxy(
              PREPS,
              input,
              selectors,
              selectors,
              line,
              column,
              0,
              0,
              0,
              0
            )

            if (result !== void 0 && typeof result === 'string') {
              input = result
            }
          }

          // build
          var output = compile(array, selectors, input, 0, 0)

          // execute plugins, post-process context
          if (plugged > 0) {
            result = proxy(
              POSTS,
              output,
              selectors,
              selectors,
              line,
              column,
              output.length,
              0,
              0,
              0
            )

            // bypass minification
            if (result !== void 0 && typeof (output = result) !== 'string') {
              code = 0
            }
          }

          // reset
          key = ''
          nscope = ''
          nscopealt = ''
          pattern = 0
          line = 1
          column = 1

          return compress * code === 0 ? output : minify(output)
        }

        stylis['use'] = use
        stylis['set'] = set

        if (options !== void 0) {
          set(options)
        }

        return stylis
      }
    )
  })

  var stylisRuleSheet = createCommonjsModule(function(module, exports) {
    ;(function(factory) {
      module['exports'] = factory()
    })(function() {
      return function(insertRule) {
        var delimiter = '/*|*/'
        var needle = delimiter + '}'

        function toSheet(block) {
          if (block)
            try {
              insertRule(block + '}')
            } catch (e) {}
        }

        return function ruleSheet(
          context,
          content,
          selectors,
          parents,
          line,
          column,
          length,
          ns,
          depth,
          at
        ) {
          switch (context) {
            // property
            case 1:
              // @import
              if (depth === 0 && content.charCodeAt(0) === 64)
                return insertRule(content + ';'), ''
              break
            // selector
            case 2:
              if (ns === 0) return content + delimiter
              break
            // at-rule
            case 3:
              switch (ns) {
                // @font-face, @page
                case 102:
                case 112:
                  return insertRule(selectors[0] + content), ''
                default:
                  return content + (at === 0 ? delimiter : '')
              }
            case -2:
              content.split(needle).forEach(toSheet)
          }
        }
      }
    })
  })

  //

  var COMMENT_REGEX = /^\s*\/\/.*$/gm

  // NOTE: This stylis instance is only used to split rules from SSR'd style tags
  var stylisSplitter = new stylis({
    global: false,
    cascade: true,
    keyframe: false,
    prefix: false,
    compress: false,
    semicolon: true,
  })

  var stylis$1 = new stylis({
    global: false,
    cascade: true,
    keyframe: false,
    prefix: true,
    compress: false,
    semicolon: false, // NOTE: This means "autocomplete missing semicolons"
  })

  // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []
  // eslint-disable-next-line consistent-return
  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules
      parsingRules = []
      return parsedRules
    }
  }

  var parseRulesPlugin = stylisRuleSheet(function(rule) {
    parsingRules.push(rule)
  })

  stylis$1.use([parseRulesPlugin, returnRulesPlugin])
  stylisSplitter.use([parseRulesPlugin, returnRulesPlugin])

  var stringifyRules = function stringifyRules(rules, selector, prefix) {
    var flatCSS = rules.join('').replace(COMMENT_REGEX, '') // replace JS comments

    var cssStr =
      selector && prefix
        ? prefix + ' ' + selector + ' { ' + flatCSS + ' }'
        : flatCSS

    return stylis$1(prefix || !selector ? '' : selector, cssStr)
  }

  var splitByRules = function splitByRules(css) {
    return stylisSplitter('', css)
  }

  //

  function isStyledComponent(target) /* : %checks */ {
    return (
      // $FlowFixMe TODO: flow for styledComponentId
      typeof target === 'function' &&
      typeof target.styledComponentId === 'string'
    )
  }

  //

  /* This function is DEPRECATED and will be removed on the next major version release.
   * It was needed to rehydrate all style blocks prepended to chunks before React
   * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
   * the use of streamed style tags and will perform the rehydration earlier when needed
   * this function will not be needed anymore */
  function consolidateStreamedStyles() {
    {
      // eslint-disable-next-line no-console
      console.warn(
        'styled-components automatically does streaming SSR rehydration now.\n' +
          'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' +
          '- Please remove the consolidateStreamedStyles call from your client.'
      )
    }
  }

  //
  /* eslint-disable no-bitwise */

  /* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
   * counterparts */
  var charsLength = 52

  /* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
  var getAlphabeticChar = function getAlphabeticChar(code) {
    return String.fromCharCode(code + (code > 25 ? 39 : 97))
  }

  /* input a number, usually a hash and convert it to base-52 */
  var generateAlphabeticName = function generateAlphabeticName(code) {
    var name = ''
    var x = void 0

    /* get a char and divide by alphabet-length */
    for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
      name = getAlphabeticChar(x % charsLength) + name
    }

    return getAlphabeticChar(x % charsLength) + name
  }

  //

  var interleave = function(strings, interpolations) {
    var result = [strings[0]]

    for (var i = 0, len = interpolations.length; i < len; i += 1) {
      result.push(interpolations[i], strings[i + 1])
    }

    return result
  }

  //
  var EMPTY_ARRAY = Object.freeze([])
  var EMPTY_OBJECT = Object.freeze({})

  //

  var css = function(styles) {
    for (
      var _len = arguments.length,
        interpolations = Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      interpolations[_key - 1] = arguments[_key]
    }

    if (typeof styles === 'function' || isPlainObject(styles)) {
      // $FlowFixMe
      return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)))
    }

    // $FlowFixMe
    return flatten(interleave(styles, interpolations))
  }

  //

  var SC_ATTR =
    (typeof process !== 'undefined' && process.env.SC_ATTR) ||
    'data-styled-components'
  var SC_STREAM_ATTR = 'data-styled-streamed'
  var CONTEXT_KEY = '__styled-components-stylesheet__'

  var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window

  //
  var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm

  var extractComps = function(maybeCSS) {
    var css = '' + (maybeCSS || '') // Definitely a string, and a clone
    var existingComponents = []
    css.replace(SC_COMPONENT_ID, function(match, componentId, matchIndex) {
      existingComponents.push({
        componentId: componentId,
        matchIndex: matchIndex,
      })
      return match
    })
    return existingComponents.map(function(_ref, i) {
      var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex

      var nextComp = existingComponents[i + 1]
      var cssFromDOM = nextComp
        ? css.slice(matchIndex, nextComp.matchIndex)
        : css.slice(matchIndex)
      return { componentId: componentId, cssFromDOM: cssFromDOM }
    })
  }

  //
  /* eslint-disable camelcase, no-undef */

  var getNonce = function() {
    return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null
  }

  //
  // Helper to call a given function, only once
  var once = function(cb) {
    var called = false

    return function() {
      if (!called) {
        called = true
        cb()
      }
    }
  }

  //
  /* These are helpers for the StyleTags to keep track of the injected
   * rule names for each (component) ID that they're keeping track of.
   * They're crucial for detecting whether a name has already been
   * injected.
   * (This excludes rehydrated names) */

  /* adds a new ID:name pairing to a names dictionary */
  var addNameForId = function addNameForId(names, id, name) {
    if (name) {
      // eslint-disable-next-line no-param-reassign
      var namesForId = names[id] || (names[id] = Object.create(null))
      namesForId[name] = true
    }
  }

  /* resets an ID entirely by overwriting it in the dictionary */
  var resetIdNames = function resetIdNames(names, id) {
    // eslint-disable-next-line no-param-reassign
    names[id] = Object.create(null)
  }

  /* factory for a names dictionary checking the existance of an ID:name pairing */
  var hasNameForId = function hasNameForId(names) {
    return function(id, name) {
      return names[id] !== undefined && names[id][name]
    }
  }

  /* stringifies names for the html/element output */
  var stringifyNames = function stringifyNames(names) {
    var str = ''
    // eslint-disable-next-line guard-for-in
    for (var id in names) {
      str += Object.keys(names[id]).join(' ') + ' '
    }
    return str.trim()
  }

  /* clones the nested names dictionary */
  var cloneNames = function cloneNames(names) {
    var clone = Object.create(null)
    // eslint-disable-next-line guard-for-in
    for (var id in names) {
      clone[id] = _extends$6({}, names[id])
    }
    return clone
  }

  //

  //

  /* this marker separates component styles and is important for rehydration */
  var makeTextMarker = function makeTextMarker(id) {
    return '\n/* sc-component-id: ' + id + ' */\n'
  }

  /* create a new style tag after lastEl */
  var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
    var el = document.createElement('style')
    el.setAttribute(SC_ATTR, '')

    var nonce = getNonce()
    if (nonce) {
      el.setAttribute('nonce', nonce)
    }

    /* Work around insertRule quirk in EdgeHTML */
    el.appendChild(document.createTextNode(''))

    if (target && !tagEl) {
      /* Append to target when no previous element was passed */
      target.appendChild(el)
    } else {
      if (!tagEl || !target || !tagEl.parentNode) {
        throw new StyledComponentsError(6)
      }

      /* Insert new style tag after the previous one */
      tagEl.parentNode.insertBefore(
        el,
        insertBefore ? tagEl : tagEl.nextSibling
      )
    }

    return el
  }

  /* takes a css factory function and outputs an html styled tag factory */
  var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
    return function(additionalAttrs) {
      var nonce = getNonce()
      var attrs = [
        nonce && 'nonce="' + nonce + '"',
        SC_ATTR + '="' + stringifyNames(names) + '"',
        additionalAttrs,
      ]

      var htmlAttr = attrs.filter(Boolean).join(' ')
      return '<style ' + htmlAttr + '>' + css() + '</style>'
    }
  }

  /* takes a css factory function and outputs an element factory */
  var wrapAsElement = function wrapAsElement(css, names) {
    return function() {
      var _props

      var props = ((_props = {}),
      (_props[SC_ATTR] = stringifyNames(names)),
      _props)

      var nonce = getNonce()
      if (nonce) {
        // $FlowFixMe
        props.nonce = nonce
      }

      // eslint-disable-next-line react/no-danger
      return React__default.createElement(
        'style',
        _extends$6({}, props, { dangerouslySetInnerHTML: { __html: css() } })
      )
    }
  }

  var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
    return function() {
      return Object.keys(markers)
    }
  }

  var makeTextNode = function makeTextNode(id) {
    return document.createTextNode(makeTextMarker(id))
  }

  var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
    var names = Object.create(null)
    var markers = Object.create(null)

    var extractImport = getImportRuleTag !== undefined

    /* indicates whther getImportRuleTag was called */
    var usedImportRuleTag = false

    var insertMarker = function insertMarker(id) {
      var prev = markers[id]
      if (prev !== undefined) {
        return prev
      }

      markers[id] = makeTextNode(id)
      el.appendChild(markers[id])
      names[id] = Object.create(null)

      return markers[id]
    }

    var insertRules = function insertRules(id, cssRules, name) {
      var marker = insertMarker(id)
      var importRules = []
      var cssRulesSize = cssRules.length

      for (var i = 0; i < cssRulesSize; i += 1) {
        var rule = cssRules[i]
        var mayHaveImport = extractImport
        if (mayHaveImport && rule.indexOf('@import') !== -1) {
          importRules.push(rule)
        } else {
          mayHaveImport = false
          var separator = i === cssRulesSize - 1 ? '' : ' '
          marker.appendData('' + rule + separator)
        }
      }

      addNameForId(names, id, name)

      if (extractImport && importRules.length > 0) {
        usedImportRuleTag = true
        // $FlowFixMe
        getImportRuleTag().insertRules(id + '-import', importRules)
      }
    }

    var removeRules = function removeRules(id) {
      var marker = markers[id]
      if (marker === undefined) return

      /* create new empty text node and replace the current one */
      var newMarker = makeTextNode(id)
      el.replaceChild(newMarker, marker)
      markers[id] = newMarker
      resetIdNames(names, id)

      if (extractImport && usedImportRuleTag) {
        // $FlowFixMe
        getImportRuleTag().removeRules(id + '-import')
      }
    }

    var css = function css() {
      var str = ''
      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        str += markers[id].data
      }
      return str
    }

    return {
      clone: function clone() {
        throw new StyledComponentsError(5)
      },

      css: css,
      getIds: getIdsFromMarkersFactory(markers),
      hasNameForId: hasNameForId(names),
      insertMarker: insertMarker,
      insertRules: insertRules,
      removeRules: removeRules,
      sealed: false,
      styleTag: el,
      toElement: wrapAsElement(css, names),
      toHTML: wrapAsHtmlTag(css, names),
    }
  }

  var makeServerTagInternal = function makeServerTagInternal(
    namesArg,
    markersArg
  ) {
    var names = namesArg === undefined ? Object.create(null) : namesArg
    var markers = markersArg === undefined ? Object.create(null) : markersArg

    var insertMarker = function insertMarker(id) {
      var prev = markers[id]
      if (prev !== undefined) {
        return prev
      }

      return (markers[id] = [''])
    }

    var insertRules = function insertRules(id, cssRules, name) {
      var marker = insertMarker(id)
      marker[0] += cssRules.join(' ')
      addNameForId(names, id, name)
    }

    var removeRules = function removeRules(id) {
      var marker = markers[id]
      if (marker === undefined) return
      marker[0] = ''
      resetIdNames(names, id)
    }

    var css = function css() {
      var str = ''
      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        var cssForId = markers[id][0]
        if (cssForId) {
          str += makeTextMarker(id) + cssForId
        }
      }
      return str
    }

    var clone = function clone() {
      var namesClone = cloneNames(names)
      var markersClone = Object.create(null)

      // eslint-disable-next-line guard-for-in
      for (var id in markers) {
        markersClone[id] = [markers[id][0]]
      }

      return makeServerTagInternal(namesClone, markersClone)
    }

    var tag = {
      clone: clone,
      css: css,
      getIds: getIdsFromMarkersFactory(markers),
      hasNameForId: hasNameForId(names),
      insertMarker: insertMarker,
      insertRules: insertRules,
      removeRules: removeRules,
      sealed: false,
      styleTag: null,
      toElement: wrapAsElement(css, names),
      toHTML: wrapAsHtmlTag(css, names),
    }

    return tag
  }

  var makeServerTag = function makeServerTag() {
    return makeServerTagInternal()
  }

  var makeTag = function makeTag(
    target,
    tagEl,
    forceServer,
    insertBefore,
    getImportRuleTag
  ) {
    if (IS_BROWSER && !forceServer) {
      var el = makeStyleTag(target, tagEl, insertBefore)

      {
        return makeBrowserTag(el, getImportRuleTag)
      }
    }

    return makeServerTag()
  }

  /* wraps a given tag so that rehydration is performed once when necessary */
  var makeRehydrationTag = function makeRehydrationTag(
    tag,
    els,
    extracted,
    immediateRehydration
  ) {
    /* rehydration function that adds all rules to the new tag */
    var rehydrate = once(function() {
      /* add all extracted components to the new tag */
      for (var i = 0, len = extracted.length; i < len; i += 1) {
        var _extracted$i = extracted[i],
          componentId = _extracted$i.componentId,
          cssFromDOM = _extracted$i.cssFromDOM

        var cssRules = splitByRules(cssFromDOM)
        tag.insertRules(componentId, cssRules)
      }

      /* remove old HTMLStyleElements, since they have been rehydrated */
      for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
        var el = els[_i]
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        }
      }
    })

    if (immediateRehydration) rehydrate()

    return _extends$6({}, tag, {
      /* add rehydration hook to insertion methods */
      insertMarker: function insertMarker(id) {
        rehydrate()
        return tag.insertMarker(id)
      },
      insertRules: function insertRules(id, cssRules, name) {
        rehydrate()
        return tag.insertRules(id, cssRules, name)
      },
    })
  }

  //

  var SPLIT_REGEX = /\s+/

  /* determine the maximum number of components before tags are sharded */
  var MAX_SIZE = void 0
  if (IS_BROWSER) {
    /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
    MAX_SIZE = 40
  } else {
    /* for servers we do not need to shard at all */
    MAX_SIZE = -1
  }

  var sheetRunningId = 0
  var master = void 0

  var StyleSheet$1 = (function() {
    /* a map from ids to tags */
    /* deferred rules for a given id */
    /* this is used for not reinjecting rules via hasNameForId() */
    /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
    /* a list of tags belonging to this StyleSheet */
    /* a tag for import rules */
    /* current capacity until a new tag must be created */
    /* children (aka clones) of this StyleSheet inheriting all and future injections */

    function StyleSheet$$1() {
      var _this = this

      var target =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : IS_BROWSER ? document.head : null
      var forceServer =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : false
      classCallCheck(this, StyleSheet$$1)

      this.getImportRuleTag = function() {
        var importRuleTag = _this.importRuleTag

        if (importRuleTag !== undefined) {
          return importRuleTag
        }

        var firstTag = _this.tags[0]
        var insertBefore = true

        return (_this.importRuleTag = makeTag(
          _this.target,
          firstTag ? firstTag.styleTag : null,
          _this.forceServer,
          insertBefore
        ))
      }

      sheetRunningId += 1
      this.id = sheetRunningId
      this.forceServer = forceServer
      this.target = forceServer ? null : target
      this.tagMap = {}
      this.deferred = {}
      this.rehydratedNames = {}
      this.ignoreRehydratedNames = {}
      this.tags = []
      this.capacity = 1
      this.clones = []
    }

    /* rehydrate all SSR'd style tags */

    StyleSheet$$1.prototype.rehydrate = function rehydrate() {
      if (!IS_BROWSER || this.forceServer) {
        return this
      }

      var els = []
      var extracted = []
      var isStreamed = false

      /* retrieve all of our SSR style elements from the DOM */
      var nodes = document.querySelectorAll('style[' + SC_ATTR + ']')
      var nodesSize = nodes.length

      /* abort rehydration if no previous style tags were found */
      if (nodesSize === 0) {
        return this
      }

      for (var i = 0; i < nodesSize; i += 1) {
        // $FlowFixMe: We can trust that all elements in this query are style elements
        var el = nodes[i]

        /* check if style tag is a streamed tag */
        if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR)

        /* retrieve all component names */
        var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX)
        var elNamesSize = elNames.length
        for (var j = 0; j < elNamesSize; j += 1) {
          var name = elNames[j]
          /* add rehydrated name to sheet to avoid readding styles */
          this.rehydratedNames[name] = true
        }

        /* extract all components and their CSS */
        extracted.push.apply(extracted, extractComps(el.textContent))

        /* store original HTMLStyleElement */
        els.push(el)
      }

      /* abort rehydration if nothing was extracted */
      var extractedSize = extracted.length
      if (extractedSize === 0) {
        return this
      }

      /* create a tag to be used for rehydration */
      var tag = this.makeTag(null)
      var rehydrationTag = makeRehydrationTag(tag, els, extracted, isStreamed)

      /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
      this.capacity = Math.max(1, MAX_SIZE - extractedSize)
      this.tags.push(rehydrationTag)

      /* retrieve all component ids */
      for (var _j = 0; _j < extractedSize; _j += 1) {
        this.tagMap[extracted[_j].componentId] = rehydrationTag
      }

      return this
    }

    /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
     * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
      * StyleSheetManager's context */

    /* reset the internal "master" instance */
    StyleSheet$$1.reset = function reset() {
      var forceServer =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : false

      master = new StyleSheet$$1(undefined, forceServer).rehydrate()
    }

    /* adds "children" to the StyleSheet that inherit all of the parents' rules
     * while their own rules do not affect the parent */

    StyleSheet$$1.prototype.clone = function clone() {
      var sheet = new StyleSheet$$1(this.target, this.forceServer)

      /* add to clone array */
      this.clones.push(sheet)

      /* clone all tags */
      sheet.tags = this.tags.map(function(tag) {
        var ids = tag.getIds()
        var newTag = tag.clone()

        /* reconstruct tagMap */
        for (var i = 0; i < ids.length; i += 1) {
          sheet.tagMap[ids[i]] = newTag
        }

        return newTag
      })

      /* clone other maps */
      sheet.rehydratedNames = _extends$6({}, this.rehydratedNames)
      sheet.deferred = _extends$6({}, this.deferred)

      return sheet
    }

    /* force StyleSheet to create a new tag on the next injection */

    StyleSheet$$1.prototype.sealAllTags = function sealAllTags() {
      this.capacity = 1

      this.tags.forEach(function(tag) {
        // eslint-disable-next-line no-param-reassign
        tag.sealed = true
      })
    }

    StyleSheet$$1.prototype.makeTag = function makeTag$$1(tag) {
      var lastEl = tag ? tag.styleTag : null
      var insertBefore = false

      return makeTag(
        this.target,
        lastEl,
        this.forceServer,
        insertBefore,
        this.getImportRuleTag
      )
    }

    /* get a tag for a given componentId, assign the componentId to one, or shard */
    StyleSheet$$1.prototype.getTagForId = function getTagForId(id) {
      /* simply return a tag, when the componentId was already assigned one */
      var prev = this.tagMap[id]
      if (prev !== undefined && !prev.sealed) {
        return prev
      }

      var tag = this.tags[this.tags.length - 1]

      /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
      this.capacity -= 1

      if (this.capacity === 0) {
        this.capacity = MAX_SIZE
        tag = this.makeTag(tag)
        this.tags.push(tag)
      }

      return (this.tagMap[id] = tag)
    }

    /* mainly for injectGlobal to check for its id */

    StyleSheet$$1.prototype.hasId = function hasId(id) {
      return this.tagMap[id] !== undefined
    }

    /* caching layer checking id+name to already have a corresponding tag and injected rules */

    StyleSheet$$1.prototype.hasNameForId = function hasNameForId(id, name) {
      /* exception for rehydrated names which are checked separately */
      if (
        this.ignoreRehydratedNames[id] === undefined &&
        this.rehydratedNames[name]
      ) {
        return true
      }

      var tag = this.tagMap[id]
      return tag !== undefined && tag.hasNameForId(id, name)
    }

    /* registers a componentId and registers it on its tag */

    StyleSheet$$1.prototype.deferredInject = function deferredInject(
      id,
      cssRules
    ) {
      /* don't inject when the id is already registered */
      if (this.tagMap[id] !== undefined) return

      var clones = this.clones

      for (var i = 0; i < clones.length; i += 1) {
        clones[i].deferredInject(id, cssRules)
      }

      this.getTagForId(id).insertMarker(id)
      this.deferred[id] = cssRules
    }

    /* injects rules for a given id with a name that will need to be cached */

    StyleSheet$$1.prototype.inject = function inject(id, cssRules, name) {
      var clones = this.clones

      for (var i = 0; i < clones.length; i += 1) {
        clones[i].inject(id, cssRules, name)
      }

      var tag = this.getTagForId(id)

      /* add deferred rules for component */
      if (this.deferred[id] !== undefined) {
        // Combine passed cssRules with previously deferred CSS rules
        // NOTE: We cannot mutate the deferred array itself as all clones
        // do the same (see clones[i].inject)
        var rules = this.deferred[id].concat(cssRules)
        tag.insertRules(id, rules, name)

        this.deferred[id] = undefined
      } else {
        tag.insertRules(id, cssRules, name)
      }
    }

    /* removes all rules for a given id, which doesn't remove its marker but resets it */

    StyleSheet$$1.prototype.remove = function remove(id) {
      var tag = this.tagMap[id]
      if (tag === undefined) return

      var clones = this.clones

      for (var i = 0; i < clones.length; i += 1) {
        clones[i].remove(id)
      }

      /* remove all rules from the tag */
      tag.removeRules(id)
      /* ignore possible rehydrated names */
      this.ignoreRehydratedNames[id] = true
      /* delete possible deferred rules */
      this.deferred[id] = undefined
    }

    StyleSheet$$1.prototype.toHTML = function toHTML() {
      return this.tags
        .map(function(tag) {
          return tag.toHTML()
        })
        .join('')
    }

    StyleSheet$$1.prototype.toReactElements = function toReactElements() {
      var id = this.id

      return this.tags.map(function(tag, i) {
        var key = 'sc-' + id + '-' + i
        return React.cloneElement(tag.toElement(), { key: key })
      })
    }

    createClass(StyleSheet$$1, null, [
      {
        key: 'master',
        get: function get$$1() {
          return master || (master = new StyleSheet$$1().rehydrate())
        },

        /* NOTE: This is just for backwards-compatibility with jest-styled-components */
      },
      {
        key: 'instance',
        get: function get$$1() {
          return StyleSheet$$1.master
        },
      },
    ])
    return StyleSheet$$1
  })()

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var reactIs_development = createCommonjsModule(function(module, exports) {
    {
      ;(function() {
        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for
        var REACT_ELEMENT_TYPE = hasSymbol
          ? Symbol.for('react.element')
          : 0xeac7
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca
        var REACT_FRAGMENT_TYPE = hasSymbol
          ? Symbol.for('react.fragment')
          : 0xeacb
        var REACT_STRICT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.strict_mode')
          : 0xeacc
        var REACT_PROFILER_TYPE = hasSymbol
          ? Symbol.for('react.profiler')
          : 0xead2
        var REACT_PROVIDER_TYPE = hasSymbol
          ? Symbol.for('react.provider')
          : 0xeacd
        var REACT_CONTEXT_TYPE = hasSymbol
          ? Symbol.for('react.context')
          : 0xeace // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol
          ? Symbol.for('react.async_mode')
          : 0xeacf
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol
          ? Symbol.for('react.concurrent_mode')
          : 0xeacf
        var REACT_FORWARD_REF_TYPE = hasSymbol
          ? Symbol.for('react.forward_ref')
          : 0xead0
        var REACT_SUSPENSE_TYPE = hasSymbol
          ? Symbol.for('react.suspense')
          : 0xead1
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol
          ? Symbol.for('react.suspense_list')
          : 0xead8
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9
        var REACT_FUNDAMENTAL_TYPE = hasSymbol
          ? Symbol.for('react.fundamental')
          : 0xead5
        var REACT_RESPONDER_TYPE = hasSymbol
          ? Symbol.for('react.responder')
          : 0xead6
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7

        function isValidElementType(type) {
          return (
            typeof type === 'string' ||
            typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE ||
            type === REACT_CONCURRENT_MODE_TYPE ||
            type === REACT_PROFILER_TYPE ||
            type === REACT_STRICT_MODE_TYPE ||
            type === REACT_SUSPENSE_TYPE ||
            type === REACT_SUSPENSE_LIST_TYPE ||
            (typeof type === 'object' &&
              type !== null &&
              (type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE ||
                type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
                type.$$typeof === REACT_RESPONDER_TYPE ||
                type.$$typeof === REACT_SCOPE_TYPE ||
                type.$$typeof === REACT_BLOCK_TYPE))
          )
        }

        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof

            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type

                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type

                  default:
                    var $$typeofType = type && type.$$typeof

                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType

                      default:
                        return $$typeof
                    }
                }

              case REACT_PORTAL_TYPE:
                return $$typeof
            }
          }

          return undefined
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE
        var ContextConsumer = REACT_CONTEXT_TYPE
        var ContextProvider = REACT_PROVIDER_TYPE
        var Element = REACT_ELEMENT_TYPE
        var ForwardRef = REACT_FORWARD_REF_TYPE
        var Fragment = REACT_FRAGMENT_TYPE
        var Lazy = REACT_LAZY_TYPE
        var Memo = REACT_MEMO_TYPE
        var Portal = REACT_PORTAL_TYPE
        var Profiler = REACT_PROFILER_TYPE
        var StrictMode = REACT_STRICT_MODE_TYPE
        var Suspense = REACT_SUSPENSE_TYPE
        var hasWarnedAboutDeprecatedIsAsyncMode = false // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true // Using console['warn'] to evade Babel and ESLint

              console['warn'](
                'The ReactIs.isAsyncMode() alias has been deprecated, ' +
                  'and will be removed in React 17+. Update your code to use ' +
                  'ReactIs.isConcurrentMode() instead. It has the exact same API.'
              )
            }
          }

          return (
            isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE
          )
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE
        }
        function isElement(object) {
          return (
            typeof object === 'object' &&
            object !== null &&
            object.$$typeof === REACT_ELEMENT_TYPE
          )
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE
        }

        exports.AsyncMode = AsyncMode
        exports.ConcurrentMode = ConcurrentMode
        exports.ContextConsumer = ContextConsumer
        exports.ContextProvider = ContextProvider
        exports.Element = Element
        exports.ForwardRef = ForwardRef
        exports.Fragment = Fragment
        exports.Lazy = Lazy
        exports.Memo = Memo
        exports.Portal = Portal
        exports.Profiler = Profiler
        exports.StrictMode = StrictMode
        exports.Suspense = Suspense
        exports.isAsyncMode = isAsyncMode
        exports.isConcurrentMode = isConcurrentMode
        exports.isContextConsumer = isContextConsumer
        exports.isContextProvider = isContextProvider
        exports.isElement = isElement
        exports.isForwardRef = isForwardRef
        exports.isFragment = isFragment
        exports.isLazy = isLazy
        exports.isMemo = isMemo
        exports.isPortal = isPortal
        exports.isProfiler = isProfiler
        exports.isStrictMode = isStrictMode
        exports.isSuspense = isSuspense
        exports.isValidElementType = isValidElementType
        exports.typeOf = typeOf
      })()
    }
  })
  var reactIs_development_1 = reactIs_development.AsyncMode
  var reactIs_development_2 = reactIs_development.ConcurrentMode
  var reactIs_development_3 = reactIs_development.ContextConsumer
  var reactIs_development_4 = reactIs_development.ContextProvider
  var reactIs_development_5 = reactIs_development.Element
  var reactIs_development_6 = reactIs_development.ForwardRef
  var reactIs_development_7 = reactIs_development.Fragment
  var reactIs_development_8 = reactIs_development.Lazy
  var reactIs_development_9 = reactIs_development.Memo
  var reactIs_development_10 = reactIs_development.Portal
  var reactIs_development_11 = reactIs_development.Profiler
  var reactIs_development_12 = reactIs_development.StrictMode
  var reactIs_development_13 = reactIs_development.Suspense
  var reactIs_development_14 = reactIs_development.isAsyncMode
  var reactIs_development_15 = reactIs_development.isConcurrentMode
  var reactIs_development_16 = reactIs_development.isContextConsumer
  var reactIs_development_17 = reactIs_development.isContextProvider
  var reactIs_development_18 = reactIs_development.isElement
  var reactIs_development_19 = reactIs_development.isForwardRef
  var reactIs_development_20 = reactIs_development.isFragment
  var reactIs_development_21 = reactIs_development.isLazy
  var reactIs_development_22 = reactIs_development.isMemo
  var reactIs_development_23 = reactIs_development.isPortal
  var reactIs_development_24 = reactIs_development.isProfiler
  var reactIs_development_25 = reactIs_development.isStrictMode
  var reactIs_development_26 = reactIs_development.isSuspense
  var reactIs_development_27 = reactIs_development.isValidElementType
  var reactIs_development_28 = reactIs_development.typeOf

  var reactIs = createCommonjsModule(function(module) {
    {
      module.exports = reactIs_development
    }
  })
  var reactIs_1 = reactIs.isValidElementType

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols
  var hasOwnProperty = Object.prototype.hasOwnProperty
  var propIsEnumerable = Object.prototype.propertyIsEnumerable

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined'
      )
    }

    return Object(val)
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc') // eslint-disable-line no-new-wrappers
      test1[5] = 'de'
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {}
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
        return test2[n]
      })
      if (order2.join('') !== '0123456789') {
        return false
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {}
      'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
        test3[letter] = letter
      })
      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false
      }

      return true
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function(target, source) {
        var from
        var to = toObject(target)
        var symbols

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s])

          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key]
            }
          }

          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from)
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]]
              }
            }
          }
        }

        return to
      }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'

  var ReactPropTypesSecret_1 = ReactPropTypesSecret

  var printWarning = function() {}

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1
    var loggedTypeFailures = {}
    var has = Function.call.bind(Object.prototype.hasOwnProperty)

    printWarning = function(text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(
    typeSpecs,
    values,
    location,
    componentName,
    getStack
  ) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') +
                  ': ' +
                  location +
                  ' type `' +
                  typeSpecName +
                  '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' +
                  typeof typeSpecs[typeSpecName] +
                  '`.'
              )
              err.name = 'Invariant Violation'
              throw err
            }
            error = typeSpecs[typeSpecName](
              values,
              typeSpecName,
              componentName,
              location,
              null,
              ReactPropTypesSecret$1
            )
          } catch (ex) {
            error = ex
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') +
                ': type specification of ' +
                location +
                ' `' +
                typeSpecName +
                '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' +
                typeof error +
                '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
            )
          }
          if (
            error instanceof Error &&
            !(error.message in loggedTypeFailures)
          ) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true

            var stack = getStack ? getStack() : ''

            printWarning(
              'Failed ' +
                location +
                ' type: ' +
                error.message +
                (stack != null ? stack : '')
            )
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes.resetWarningCache = function() {
    {
      loggedTypeFailures = {}
    }
  }

  var checkPropTypes_1 = checkPropTypes

  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty)
  var printWarning$1 = function() {}

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text
      if (typeof console !== 'undefined') {
        console.error(message)
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message)
      } catch (x) {}
    }
  }

  function emptyFunctionThatReturnsNull() {
    return null
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator
    var FAUX_ITERATOR_SYMBOL = '@@iterator' // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn =
        maybeIterable &&
        ((ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL]) ||
          maybeIterable[FAUX_ITERATOR_SYMBOL])
      if (typeof iteratorFn === 'function') {
        return iteratorFn
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>'

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    }

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message
      this.stack = ''
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {}
        var manualPropTypeWarningCount = 0
      }
      function checkType(
        isRequired,
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        componentName = componentName || ANONYMOUS
        propFullName = propFullName || propName

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
            )
            err.name = 'Invariant Violation'
            throw err
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                  'function for the `' +
                  propFullName +
                  '` prop on `' +
                  componentName +
                  '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' +
                  'for details.'
              )
              manualPropTypeCallCache[cacheKey] = true
              manualPropTypeWarningCount++
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError(
                'The ' +
                  location +
                  ' `' +
                  propFullName +
                  '` is marked as required ' +
                  ('in `' + componentName + '`, but its value is `null`.')
              )
            }
            return new PropTypeError(
              'The ' +
                location +
                ' `' +
                propFullName +
                '` is marked as required in ' +
                ('`' + componentName + '`, but its value is `undefined`.')
            )
          }
          return null
        } else {
          return validate(
            props,
            propName,
            componentName,
            location,
            propFullName
          )
        }
      }

      var chainedCheckType = checkType.bind(null, false)
      chainedCheckType.isRequired = checkType.bind(null, true)

      return chainedCheckType
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName,
        secret
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue)

          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                preciseType +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('`' + expectedType + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull)
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside arrayOf.'
          )
        }
        var propValue = props[propName]
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an array.')
          )
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(
            propValue,
            i,
            componentName,
            location,
            propFullName + '[' + i + ']',
            ReactPropTypesSecret_1
          )
          if (error instanceof Error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createElementTypeTypeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue)
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected a single ReactElement type.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS
          var actualClassName = getClassName(props[propName])
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                actualClassName +
                '` supplied to `' +
                componentName +
                '`, expected ') +
              ('instance of `' + expectedClassName + '`.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning$1(
              'Invalid arguments supplied to oneOf, expected an array, got ' +
                arguments.length +
                ' arguments. ' +
                'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
            )
          } else {
            printWarning$1(
              'Invalid argument supplied to oneOf, expected an array.'
            )
          }
        }
        return emptyFunctionThatReturnsNull
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null
          }
        }

        var valuesString = JSON.stringify(expectedValues, function replacer(
          key,
          value
        ) {
          var type = getPreciseType(value)
          if (type === 'symbol') {
            return String(value)
          }
          return value
        })
        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` of value `' +
            String(propValue) +
            '` ' +
            ('supplied to `' +
              componentName +
              '`, expected one of ' +
              valuesString +
              '.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError(
            'Property `' +
              propFullName +
              '` of component `' +
              componentName +
              '` has invalid PropType notation inside objectOf.'
          )
        }
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type ' +
              ('`' +
                propType +
                '` supplied to `' +
                componentName +
                '`, expected an object.')
          )
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(
              propValue,
              key,
              componentName,
              location,
              propFullName + '.' + key,
              ReactPropTypesSecret_1
            )
            if (error instanceof Error) {
              return error
            }
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1(
          'Invalid argument supplied to oneOfType, expected an instance of array.'
        )
        return emptyFunctionThatReturnsNull
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i]
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' +
              getPostfixForTypeWarning(checker) +
              ' at index ' +
              i +
              '.'
          )
          return emptyFunctionThatReturnsNull
        }
      }

      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i]
          if (
            checker(
              props,
              propName,
              componentName,
              location,
              propFullName,
              ReactPropTypesSecret_1
            ) == null
          ) {
            return null
          }
        }

        return new PropTypeError(
          'Invalid ' +
            location +
            ' `' +
            propFullName +
            '` supplied to ' +
            ('`' + componentName + '`.')
        )
      }
      return createChainableTypeChecker(validate)
    }

    function createNodeChecker() {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        if (!isNode(props[propName])) {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` supplied to ' +
              ('`' + componentName + '`, expected a ReactNode.')
          )
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key]
          if (!checker) {
            continue
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }
      return createChainableTypeChecker(validate)
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(
        props,
        propName,
        componentName,
        location,
        propFullName
      ) {
        var propValue = props[propName]
        var propType = getPropType(propValue)
        if (propType !== 'object') {
          return new PropTypeError(
            'Invalid ' +
              location +
              ' `' +
              propFullName +
              '` of type `' +
              propType +
              '` ' +
              ('supplied to `' + componentName + '`, expected `object`.')
          )
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes)
        for (var key in allKeys) {
          var checker = shapeTypes[key]
          if (!checker) {
            return new PropTypeError(
              'Invalid ' +
                location +
                ' `' +
                propFullName +
                '` key `' +
                key +
                '` supplied to `' +
                componentName +
                '`.' +
                '\nBad object: ' +
                JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +
                JSON.stringify(Object.keys(shapeTypes), null, '  ')
            )
          }
          var error = checker(
            propValue,
            key,
            componentName,
            location,
            propFullName + '.' + key,
            ReactPropTypesSecret_1
          )
          if (error) {
            return error
          }
        }
        return null
      }

      return createChainableTypeChecker(validate)
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true
        case 'boolean':
          return !propValue
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode)
          }
          if (propValue === null || isValidElement(propValue)) {
            return true
          }

          var iteratorFn = getIteratorFn(propValue)
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue)
            var step
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false
                  }
                }
              }
            }
          } else {
            return false
          }

          return true
        default:
          return false
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true
      }

      return false
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue
      if (Array.isArray(propValue)) {
        return 'array'
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object'
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol'
      }
      return propType
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue
      }
      var propType = getPropType(propValue)
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date'
        } else if (propValue instanceof RegExp) {
          return 'regexp'
        }
      }
      return propType
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value)
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type
        default:
          return type
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS
      }
      return propValue.constructor.name
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1
    ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache
    ReactPropTypes.PropTypes = ReactPropTypes

    return ReactPropTypes
  }

  var propTypes = createCommonjsModule(function(module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true
      module.exports = factoryWithTypeCheckers(
        ReactIs.isElement,
        throwOnDirectAccess
      )
    }
  })

  var _StyleSheetManager$ch

  var StyleSheetManager = (function(_Component) {
    inherits(StyleSheetManager, _Component)

    function StyleSheetManager() {
      classCallCheck(this, StyleSheetManager)
      return possibleConstructorReturn(this, _Component.apply(this, arguments))
    }

    StyleSheetManager.prototype.getChildContext = function getChildContext() {
      var _ref

      return (_ref = {}), (_ref[CONTEXT_KEY] = this.sheetInstance), _ref
    }

    StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
      if (this.props.sheet) {
        this.sheetInstance = this.props.sheet
      } else if (this.props.target) {
        this.sheetInstance = new StyleSheet$1(this.props.target)
      } else {
        throw new StyledComponentsError(4)
      }
    }

    StyleSheetManager.prototype.render = function render() {
      /* eslint-disable react/prop-types */
      // Flow v0.43.1 will report an error accessing the `children` property,
      // but v0.47.0 will not. It is necessary to use a type cast instead of
      // a "fixme" comment to satisfy both Flow versions.
      return React__default.Children.only(this.props.children)
    }

    return StyleSheetManager
  })(React.Component)

  StyleSheetManager.childContextTypes = ((_StyleSheetManager$ch = {}),
  (_StyleSheetManager$ch[CONTEXT_KEY] = propTypes.oneOfType([
    propTypes.instanceOf(StyleSheet$1),
    propTypes.instanceOf(ServerStyleSheet),
  ]).isRequired),
  _StyleSheetManager$ch)
  StyleSheetManager.propTypes = {
    sheet: propTypes.oneOfType([
      propTypes.instanceOf(StyleSheet$1),
      propTypes.instanceOf(ServerStyleSheet),
    ]),
    target: propTypes.shape({
      appendChild: propTypes.func.isRequired,
    }),
  }

  //

  var ServerStyleSheet = (function() {
    function ServerStyleSheet() {
      classCallCheck(this, ServerStyleSheet)

      /* The master sheet might be reset, so keep a reference here */
      this.masterSheet = StyleSheet$1.master
      this.instance = this.masterSheet.clone()
      this.closed = false
    }

    ServerStyleSheet.prototype.complete = function complete() {
      if (!this.closed) {
        /* Remove closed StyleSheets from the master sheet */
        var index = this.masterSheet.clones.indexOf(this.instance)
        this.masterSheet.clones.splice(index, 1)
        this.closed = true
      }
    }

    ServerStyleSheet.prototype.collectStyles = function collectStyles(
      children
    ) {
      if (this.closed) {
        throw new StyledComponentsError(2)
      }

      return React__default.createElement(
        StyleSheetManager,
        { sheet: this.instance },
        children
      )
    }

    ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
      this.complete()
      return this.instance.toHTML()
    }

    ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
      this.complete()
      return this.instance.toReactElements()
    }

    ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(
      readableStream
    ) {
      var _this = this

      {
        throw new StyledComponentsError(3)
      }

      /* the tag index keeps track of which tags have already been emitted */
      var instance = this.instance

      var instanceTagIndex = 0

      var streamAttr = SC_STREAM_ATTR + '="true"'

      var transformer = new stream.Transform({
        transform: function appendStyleChunks(
          chunk,
          /* encoding */ _,
          callback
        ) {
          var tags = instance.tags

          var html = ''

          /* retrieve html for each new style tag */
          for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
            var tag = tags[instanceTagIndex]
            html += tag.toHTML(streamAttr)
          }

          /* force our StyleSheets to emit entirely new tags */
          instance.sealAllTags()

          /* prepend style html to chunk */
          this.push(html + chunk)
          callback()
        },
      })

      readableStream.on('end', function() {
        return _this.complete()
      })
      readableStream.on('error', function(err) {
        _this.complete()

        // forward the error to the transform stream
        transformer.emit('error', err)
      })

      return readableStream.pipe(transformer)
    }

    return ServerStyleSheet
  })()

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  }

  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  }

  var defineProperty$1 = Object.defineProperty
  var getOwnPropertyNames = Object.getOwnPropertyNames
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  var getPrototypeOf = Object.getPrototypeOf
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object)

  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components

      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent)
        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist)
        }
      }

      var keys = getOwnPropertyNames(sourceComponent)

      if (getOwnPropertySymbols$1) {
        keys = keys.concat(getOwnPropertySymbols$1(sourceComponent))
      }

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i]
        if (
          !REACT_STATICS[key] &&
          !KNOWN_STATICS[key] &&
          (!blacklist || !blacklist[key])
        ) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key)
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor)
          } catch (e) {}
        }
      }

      return targetComponent
    }

    return targetComponent
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics

  //

  var LIMIT = 200

  var createWarnTooManyClasses = function(displayName) {
    var generatedClasses = {}
    var warningSeen = false

    return function(className) {
      if (!warningSeen) {
        generatedClasses[className] = true
        if (Object.keys(generatedClasses).length >= LIMIT) {
          // Unable to find latestRule in test environment.
          /* eslint-disable no-console, prefer-template */
          console.warn(
            'Over ' +
              LIMIT +
              ' classes were generated for component ' +
              displayName +
              '. \n' +
              'Consider using the attrs method, together with a style object for frequently changed styles.\n' +
              'Example:\n' +
              '  const Component = styled.div.attrs({\n' +
              '    style: ({ background }) => ({\n' +
              '      background,\n' +
              '    }),\n' +
              '  })`width: 100%;`\n\n' +
              '  <Component />'
          )
          warningSeen = true
          generatedClasses = {}
        }
      }
    }
  }

  //

  var determineTheme = function(props, fallbackTheme, defaultProps) {
    // Props should take precedence over ThemeProvider, which should take precedence over
    // defaultProps, but React automatically puts defaultProps on props.

    /* eslint-disable react/prop-types */
    var isDefaultTheme = defaultProps && props.theme === defaultProps.theme
    var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme
    /* eslint-enable */

    return theme
  }

  //
  var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g
  var dashesAtEnds = /(^-|-$)/g

  /**
   * TODO: Explore using CSS.escape when it becomes more available
   * in evergreen browsers.
   */
  function escape(str) {
    return (
      str
        // Replace all possible CSS selectors
        .replace(escapeRegex, '-')

        // Remove extraneous hyphens at the start and end
        .replace(dashesAtEnds, '')
    )
  }

  //

  function getComponentName(target) {
    return target.displayName || target.name || 'Component'
  }

  //

  function isTag(target) /* : %checks */ {
    return typeof target === 'string'
  }

  //

  function generateDisplayName(target) {
    return isTag(target)
      ? 'styled.' + target
      : 'Styled(' + getComponentName(target) + ')'
  }

  //
  /* eslint-disable max-len */
  /**
   * Trying to avoid the unknown-prop errors on styled components by filtering by
   * React's attribute whitelist.
   *
   * To regenerate this regex:
   *
   * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
   * 2. Run `regexgen` with the list of space-separated words below as input
   * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
   *    and no false positives from partials
   * */
  /*
  children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut class for autofocus allow allowUserMedia allowPaymentRequest
  */
  /* eslint-enable max-len */

  var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:Animation|Touch|Load|Drag)Start|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|Lo(?:stPointer|ad)|TimeUpdate|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|GotPointer|MouseDown|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|KeyPress|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|P(?:rogress|laying)|DragEnd|Key(?:Down|Up)|(?:MouseU|Dro)p|(?:Wait|Seek)ing|Scroll|Focus|Paste|Abort|Drag|Play|Blur)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|onPointerLeav|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|onPointerMov|(?:attribute|glyph)Nam|playsInlin|(?:writing|input|edge)Mod|(?:formE|e)ncTyp|(?:amplitu|mo)d|(?:xlinkTy|itemSco|keyTy|slo)p|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|l(?:ip(?:Path)?|ass)|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|auto[Ff]ocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|on(?:PointerDow|FocusI)|formActio|zoomAndPa|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur)|rient)|p(?:reserveAspectRatio|ointsAt[X-Z]|anose1)|(?:(?:allowPaymentReque|(?:fontSize|length)Adju|manife)s|strokeMiterlimi|(?:(?:specularE|e)xpon|renderingInt|asc)en|(?:specularConsta|repeatCou|fontVaria)n|d(?:iffuseConsta|esce)n|baselineShif|vectorEffec|onPointerOu|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|markerStar|a(?:utoCorrec|bou)|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:gradientT|patternT|t)ransform|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|(?:markerM|onInval)i|preloa|metho|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|strokeDasharray|(?:onPointerCanc|lab)el|(?:allowFullScre|hidd)en|a(?:l(?:lowUserMedia|phabetic|t)|rabicForm|sync)|systemLanguage|(?:(?:o(?:nPointer(?:Ent|Ov)|rd)|allowReord|placehold|frameBord|paintOrd|post)e|repeatDu|d(?:efe|u))r|(?:pointerEve|keyPoi)nts|preserveAlpha|(?:strokeLineca|onPointerU|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|unicodeRange|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|(?:vI|i)deographic|mathematical|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|vAlphabetic|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|(?:xmlnsXl|valueL)ink|mediaGroup|spellCheck|(?:text|m(?:in|ax))Length|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|pathLength|(?:xlinkHr|glyphR)ef|innerHTML|xlinkShow|f(?:o(?:ntSize|rm?)|il(?:ter|l))|(?:tabInde|(?:sand|b)bo|viewBo)x|autoPlay|r(?:e(?:quired|sult|f))?|(?:(?:href|xml|src)La|kerni)ng|o(?:verflow|pen)|i(?:temRef|n2|s)|p(?:attern|oints)|unicode|d(?:efault|ata|ir)?|divisor|t(?:arget[XY]|o)|(?:stri|la)ng|(?:width|size)s|prefix|typeof|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|llow|s)|itemID|t(?:arget|ype)|m(?:edia|a(?:sk|x)|in)|value|width|x(?:mlns)?|size|href|k(?:ey)?|end|low|by|x[12]|y[12]|g[12]|i[dn]|f[xy]|[yz])$/
  /* From DOMProperty */
  var ATTRIBUTE_NAME_START_CHAR =
    ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD'
  var ATTRIBUTE_NAME_CHAR =
    ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040'
  var isCustomAttribute = RegExp.prototype.test.bind(
    new RegExp('^(x|data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
  )

  var validAttr = function(name) {
    return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase())
  }

  //

  function hasInInheritanceChain(child, parent) {
    var target = child

    while (target) {
      target = Object.getPrototypeOf(target)

      if (target && target === parent) {
        return true
      }
    }

    return false
  }

  //
  /**
   * Creates a broadcast that can be listened to, i.e. simple event emitter
   *
   * @see https://github.com/ReactTraining/react-broadcast
   */

  var createBroadcast = function createBroadcast(initialState) {
    var listeners = {}
    var id = 0
    var state = initialState

    function publish(nextState) {
      state = nextState

      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (var key in listeners) {
        var listener = listeners[key]
        if (listener === undefined) {
          // eslint-disable-next-line no-continue
          continue
        }

        listener(state)
      }
    }

    function subscribe(listener) {
      var currentId = id
      listeners[currentId] = listener
      id += 1
      listener(state)
      return currentId
    }

    function unsubscribe(unsubID) {
      listeners[unsubID] = undefined
    }

    return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe }
  }

  var _contextShape, _ThemeProvider$contex

  // NOTE: DO NOT CHANGE, changing this is a semver major change!
  var CHANNEL = '__styled-components__'
  var CHANNEL_NEXT = CHANNEL + 'next__'

  var CONTEXT_CHANNEL_SHAPE = propTypes.shape({
    getTheme: propTypes.func,
    subscribe: propTypes.func,
    unsubscribe: propTypes.func,
  })

  var contextShape = ((_contextShape = {}),
  (_contextShape[CHANNEL] = propTypes.func),
  (_contextShape[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
  _contextShape)

  var warnChannelDeprecated = void 0
  {
    warnChannelDeprecated = once(function() {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: Usage of `context.' +
          CHANNEL +
          '` as a function is deprecated. It will be replaced with the object on `.context.' +
          CHANNEL_NEXT +
          '` in a future version.'
      )
    })
  }

  var isFunction = function isFunction(test) {
    return typeof test === 'function'
  }

  /**
   * Provide a theme to an entire react component tree via context and event listeners (have to do
   * both context and event emitter as pure components block context updates)
   */

  var ThemeProvider = (function(_Component) {
    inherits(ThemeProvider, _Component)

    function ThemeProvider() {
      classCallCheck(this, ThemeProvider)

      var _this = possibleConstructorReturn(this, _Component.call(this))

      _this.unsubscribeToOuterId = -1

      _this.getTheme = _this.getTheme.bind(_this)
      return _this
    }

    ThemeProvider.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this

      // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
      // with the outer theme
      var outerContext = this.context[CHANNEL_NEXT]
      if (outerContext !== undefined) {
        this.unsubscribeToOuterId = outerContext.subscribe(function(theme) {
          _this2.outerTheme = theme

          if (_this2.broadcast !== undefined) {
            _this2.publish(_this2.props.theme)
          }
        })
      }

      this.broadcast = createBroadcast(this.getTheme())
    }

    ThemeProvider.prototype.getChildContext = function getChildContext() {
      var _this3 = this,
        _babelHelpers$extends

      return _extends$6(
        {},
        this.context,
        ((_babelHelpers$extends = {}),
        (_babelHelpers$extends[CHANNEL_NEXT] = {
          getTheme: this.getTheme,
          subscribe: this.broadcast.subscribe,
          unsubscribe: this.broadcast.unsubscribe,
        }),
        (_babelHelpers$extends[CHANNEL] = function(subscriber) {
          {
            warnChannelDeprecated()
          }

          // Patch the old `subscribe` provide via `CHANNEL` for older clients.
          var unsubscribeId = _this3.broadcast.subscribe(subscriber)
          return function() {
            return _this3.broadcast.unsubscribe(unsubscribeId)
          }
        }),
        _babelHelpers$extends)
      )
    }

    ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps
    ) {
      if (this.props.theme !== nextProps.theme) {
        this.publish(nextProps.theme)
      }
    }

    ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.unsubscribeToOuterId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId)
      }
    }

    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation

    ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
      var theme = passedTheme || this.props.theme

      if (isFunction(theme)) {
        var mergedTheme = theme(this.outerTheme)

        if (
          mergedTheme === null ||
          Array.isArray(mergedTheme) ||
          (typeof mergedTheme === 'undefined'
            ? 'undefined'
            : _typeof(mergedTheme)) !== 'object'
        ) {
          throw new StyledComponentsError(7)
        }

        return mergedTheme
      }

      if (
        theme === null ||
        Array.isArray(theme) ||
        (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !==
          'object'
      ) {
        throw new StyledComponentsError(8)
      }

      return _extends$6({}, this.outerTheme, theme)
    }

    ThemeProvider.prototype.publish = function publish(theme) {
      this.broadcast.publish(this.getTheme(theme))
    }

    ThemeProvider.prototype.render = function render() {
      if (!this.props.children) {
        return null
      }

      return React__default.Children.only(this.props.children)
    }

    return ThemeProvider
  })(React.Component)

  ThemeProvider.childContextTypes = contextShape
  ThemeProvider.contextTypes = ((_ThemeProvider$contex = {}),
  (_ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE),
  _ThemeProvider$contex)

  var _babelHelpers$extends

  // HACK for generating all static styles without needing to allocate
  // an empty execution context every single time...
  var STATIC_EXECUTION_CONTEXT = {}

  var modifiedContextShape = _extends$6(
    {},
    contextShape,
    ((_babelHelpers$extends = {}),
    (_babelHelpers$extends[CONTEXT_KEY] = propTypes.oneOfType([
      propTypes.instanceOf(StyleSheet$1),
      propTypes.instanceOf(ServerStyleSheet),
    ])),
    _babelHelpers$extends)
  )

  var identifiers = {}

  /* We depend on components having unique IDs */
  var generateId = function generateId(
    ComponentStyle,
    _displayName,
    parentComponentId
  ) {
    var displayName =
      typeof _displayName !== 'string' ? 'sc' : escape(_displayName)

    /**
     * This ensures uniqueness if two components happen to share
     * the same displayName.
     */
    var nr = (identifiers[displayName] || 0) + 1
    identifiers[displayName] = nr

    var componentId =
      displayName + '-' + ComponentStyle.generateName(displayName + nr)

    return parentComponentId !== undefined
      ? parentComponentId + '-' + componentId
      : componentId
  }

  var warnExtendDeprecated = function warnExtendDeprecated() {}
  {
    warnExtendDeprecated = once(function() {
      // eslint-disable-next-line no-console
      console.warn(
        'Warning: The "extend" API will be removed in the upcoming v4.0 release. Use styled(StyledComponent) instead. You can find more information here: https://github.com/styled-components/styled-components/issues/1546'
      )
    })
  }

  // $FlowFixMe

  var BaseStyledComponent = (function(_Component) {
    inherits(BaseStyledComponent, _Component)

    function BaseStyledComponent() {
      var _temp, _this, _ret

      classCallCheck(this, BaseStyledComponent)

      for (
        var _len = arguments.length, args = Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      return (
        (_ret = ((_temp = ((_this = possibleConstructorReturn(
          this,
          _Component.call.apply(_Component, [this].concat(args))
        )),
        _this)),
        (_this.attrs = {}),
        (_this.state = {
          theme: null,
          generatedClassName: '',
        }),
        (_this.unsubscribeId = -1),
        _temp)),
        possibleConstructorReturn(_this, _ret)
      )
    }

    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
      if (this.unsubscribeId !== -1) {
        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId)
      }
    }

    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(
      theme,
      props
    ) {
      var attrs = this.constructor.attrs

      var context = _extends$6({}, props, { theme: theme })
      if (attrs === undefined) {
        return context
      }

      this.attrs = Object.keys(attrs).reduce(function(acc, key) {
        var attr = attrs[key]

        // eslint-disable-next-line no-param-reassign
        acc[key] =
          typeof attr === 'function' &&
          !hasInInheritanceChain(attr, React.Component)
            ? attr(context)
            : attr
        return acc
      }, {})

      return _extends$6({}, context, this.attrs)
    }

    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(
      theme,
      props
    ) {
      var _constructor = this.constructor,
        attrs = _constructor.attrs,
        componentStyle = _constructor.componentStyle,
        warnTooManyClasses = _constructor.warnTooManyClasses

      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet$1.master

      // statically styled-components don't need to build an execution context object,
      // and shouldn't be increasing the number of class names
      if (componentStyle.isStatic && attrs === undefined) {
        return componentStyle.generateAndInjectStyles(
          STATIC_EXECUTION_CONTEXT,
          styleSheet
        )
      } else {
        var executionContext = this.buildExecutionContext(theme, props)
        var className = componentStyle.generateAndInjectStyles(
          executionContext,
          styleSheet
        )

        if (warnTooManyClasses !== undefined) {
          warnTooManyClasses(className)
        }

        return className
      }
    }

    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
      var _this2 = this

      var componentStyle = this.constructor.componentStyle

      var styledContext = this.context[CHANNEL_NEXT]

      // If this is a statically-styled component, we don't need to the theme
      // to generate or build styles.
      if (componentStyle.isStatic) {
        var generatedClassName = this.generateAndInjectStyles(
          STATIC_EXECUTION_CONTEXT,
          this.props
        )
        this.setState({ generatedClassName: generatedClassName })
        // If there is a theme in the context, subscribe to the event emitter. This
        // is necessary due to pure components blocking context updates, this circumvents
        // that by updating when an event is emitted
      } else if (styledContext !== undefined) {
        var subscribe = styledContext.subscribe

        this.unsubscribeId = subscribe(function(nextTheme) {
          // This will be called once immediately
          var theme = determineTheme(
            _this2.props,
            nextTheme,
            _this2.constructor.defaultProps
          )

          var generatedClassName = _this2.generateAndInjectStyles(
            theme,
            _this2.props
          )

          _this2.setState({
            theme: theme,
            generatedClassName: generatedClassName,
          })
        })
      } else {
        // eslint-disable-next-line react/prop-types
        var theme = this.props.theme || EMPTY_OBJECT
        var _generatedClassName = this.generateAndInjectStyles(
          theme,
          this.props
        )
        this.setState({ theme: theme, generatedClassName: _generatedClassName })
      }
    }

    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(
      nextProps
    ) {
      var _this3 = this

      // If this is a statically-styled component, we don't need to listen to
      // props changes to update styles
      var componentStyle = this.constructor.componentStyle

      if (componentStyle.isStatic) {
        return
      }

      this.setState(function(prevState) {
        var theme = determineTheme(
          nextProps,
          prevState.theme,
          _this3.constructor.defaultProps
        )
        var generatedClassName = _this3.generateAndInjectStyles(
          theme,
          nextProps
        )

        return { theme: theme, generatedClassName: generatedClassName }
      })
    }

    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      this.unsubscribeFromContext()
    }

    BaseStyledComponent.prototype.render = function render() {
      // eslint-disable-next-line react/prop-types
      var innerRef = this.props.innerRef
      var generatedClassName = this.state.generatedClassName
      var _constructor2 = this.constructor,
        styledComponentId = _constructor2.styledComponentId,
        target = _constructor2.target

      var isTargetTag = isTag(target)

      var className = [
        // eslint-disable-next-line react/prop-types
        this.props.className,
        styledComponentId,
        this.attrs.className,
        generatedClassName,
      ]
        .filter(Boolean)
        .join(' ')

      var baseProps = _extends$6({}, this.attrs, {
        className: className,
      })

      if (isStyledComponent(target)) {
        baseProps.innerRef = innerRef
      } else {
        baseProps.ref = innerRef
      }

      var propsForElement = baseProps
      var key = void 0

      for (key in this.props) {
        // Don't pass through non HTML tags through to HTML elements
        // always omit innerRef
        if (
          key !== 'innerRef' &&
          key !== 'className' &&
          (!isTargetTag || validAttr(key))
        ) {
          propsForElement[key] =
            key === 'style' && key in this.attrs
              ? _extends$6({}, this.attrs[key], this.props[key])
              : this.props[key]
        }
      }

      return React.createElement(target, propsForElement)
    }

    return BaseStyledComponent
  })(React.Component)

  var _StyledComponent = function(ComponentStyle, constructWithOptions) {
    var createStyledComponent = function createStyledComponent(
      target,
      options,
      rules
    ) {
      var _options$isClass = options.isClass,
        isClass =
          _options$isClass === undefined ? !isTag(target) : _options$isClass,
        _options$displayName = options.displayName,
        displayName =
          _options$displayName === undefined
            ? generateDisplayName(target)
            : _options$displayName,
        _options$componentId = options.componentId,
        componentId =
          _options$componentId === undefined
            ? generateId(
                ComponentStyle,
                options.displayName,
                options.parentComponentId
              )
            : _options$componentId,
        _options$ParentCompon = options.ParentComponent,
        ParentComponent =
          _options$ParentCompon === undefined
            ? BaseStyledComponent
            : _options$ParentCompon,
        extendingRules = options.rules,
        attrs = options.attrs

      var styledComponentId =
        options.displayName && options.componentId
          ? escape(options.displayName) + '-' + options.componentId
          : options.componentId || componentId

      var componentStyle = new ComponentStyle(
        extendingRules === undefined ? rules : extendingRules.concat(rules),
        attrs,
        styledComponentId
      )

      var StyledComponent = (function(_ParentComponent) {
        inherits(StyledComponent, _ParentComponent)

        function StyledComponent() {
          classCallCheck(this, StyledComponent)
          return possibleConstructorReturn(
            this,
            _ParentComponent.apply(this, arguments)
          )
        }

        StyledComponent.withComponent = function withComponent(tag) {
          var previousComponentId = options.componentId,
            optionsToCopy = objectWithoutProperties(options, ['componentId'])

          var newComponentId =
            previousComponentId &&
            previousComponentId +
              '-' +
              (isTag(tag) ? tag : escape(getComponentName(tag)))

          var newOptions = _extends$6({}, optionsToCopy, {
            componentId: newComponentId,
            ParentComponent: StyledComponent,
          })

          return createStyledComponent(tag, newOptions, rules)
        }

        createClass(StyledComponent, null, [
          {
            key: 'extend',
            get: function get$$1() {
              var rulesFromOptions = options.rules,
                parentComponentId = options.componentId,
                optionsToCopy = objectWithoutProperties(options, [
                  'rules',
                  'componentId',
                ])

              var newRules =
                rulesFromOptions === undefined
                  ? rules
                  : rulesFromOptions.concat(rules)

              var newOptions = _extends$6({}, optionsToCopy, {
                rules: newRules,
                parentComponentId: parentComponentId,
                ParentComponent: StyledComponent,
              })

              warnExtendDeprecated()

              return constructWithOptions(
                createStyledComponent,
                target,
                newOptions
              )
            },
          },
        ])
        return StyledComponent
      })(ParentComponent)

      StyledComponent.attrs = attrs
      StyledComponent.componentStyle = componentStyle
      StyledComponent.contextTypes = modifiedContextShape
      StyledComponent.displayName = displayName
      StyledComponent.styledComponentId = styledComponentId
      StyledComponent.target = target

      {
        StyledComponent.warnTooManyClasses = createWarnTooManyClasses(
          displayName
        )
      }

      if (isClass) {
        hoistNonReactStatics_cjs(StyledComponent, target, {
          // all SC-specific things should not be hoisted
          attrs: true,
          componentStyle: true,
          displayName: true,
          extend: true,
          styledComponentId: true,
          target: true,
          warnTooManyClasses: true,
          withComponent: true,
        })
      }

      return StyledComponent
    }

    return createStyledComponent
  }

  // Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
  function murmurhash(str) {
    var l = str.length | 0,
      h = l | 0,
      i = 0,
      k

    while (l >= 4) {
      k =
        (str.charCodeAt(i) & 0xff) |
        ((str.charCodeAt(++i) & 0xff) << 8) |
        ((str.charCodeAt(++i) & 0xff) << 16) |
        ((str.charCodeAt(++i) & 0xff) << 24)

      k =
        (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)
      k ^= k >>> 24
      k =
        (k & 0xffff) * 0x5bd1e995 + ((((k >>> 16) * 0x5bd1e995) & 0xffff) << 16)

      h =
        ((h & 0xffff) * 0x5bd1e995 +
          ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)) ^
        k

      l -= 4
      ++i
    }

    switch (l) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16
      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8
      case 1:
        h ^= str.charCodeAt(i) & 0xff
        h =
          (h & 0xffff) * 0x5bd1e995 +
          ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
    }

    h ^= h >>> 13
    h = (h & 0xffff) * 0x5bd1e995 + ((((h >>> 16) * 0x5bd1e995) & 0xffff) << 16)
    h ^= h >>> 15

    return h >>> 0
  }

  //

  var areStylesCacheable = IS_BROWSER

  var isStaticRules = function isStaticRules(rules, attrs) {
    for (var i = 0, len = rules.length; i < len; i += 1) {
      var rule = rules[i]

      // recursive case
      if (Array.isArray(rule) && !isStaticRules(rule)) {
        return false
      } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
        // functions are allowed to be static if they're just being
        // used to get the classname of a nested styled component
        return false
      }
    }

    if (attrs !== undefined) {
      // eslint-disable-next-line guard-for-in, no-restricted-syntax
      for (var key in attrs) {
        if (typeof attrs[key] === 'function') {
          return false
        }
      }
    }

    return true
  }

  var isHMREnabled =
    typeof module !== 'undefined' &&
    module.hot &&
    'development' !== 'production'

  /*
   ComponentStyle is all the CSS-specific stuff, not
   the React-specific stuff.
   */
  var _ComponentStyle = function(nameGenerator, flatten, stringifyRules) {
    /* combines hashStr (murmurhash) and nameGenerator for convenience */
    var generateRuleHash = function generateRuleHash(str) {
      return nameGenerator(murmurhash(str))
    }

    var ComponentStyle = (function() {
      function ComponentStyle(rules, attrs, componentId) {
        classCallCheck(this, ComponentStyle)

        this.rules = rules
        this.isStatic = !isHMREnabled && isStaticRules(rules, attrs)
        this.componentId = componentId

        if (!StyleSheet$1.master.hasId(componentId)) {
          var placeholder = ['.' + componentId + ' {}']

          StyleSheet$1.master.deferredInject(componentId, placeholder)
        }
      }

      /*
       * Flattens a rule set into valid CSS
       * Hashes it, wraps the whole chunk in a .hash1234 {}
       * Returns the hash to be injected on render()
       * */

      ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(
        executionContext,
        styleSheet
      ) {
        var isStatic = this.isStatic,
          componentId = this.componentId,
          lastClassName = this.lastClassName

        if (
          areStylesCacheable &&
          isStatic &&
          lastClassName !== undefined &&
          styleSheet.hasNameForId(componentId, lastClassName)
        ) {
          return lastClassName
        }

        var flatCSS = flatten(this.rules, executionContext)
        var name = generateRuleHash(this.componentId + flatCSS.join(''))

        if (!styleSheet.hasNameForId(componentId, name)) {
          styleSheet.inject(
            this.componentId,
            stringifyRules(flatCSS, '.' + name),
            name
          )
        }

        this.lastClassName = name
        return name
      }

      ComponentStyle.generateName = function generateName(str) {
        return generateRuleHash(str)
      }

      return ComponentStyle
    })()

    return ComponentStyle
  }

  //
  // Thanks to ReactDOMFactories for this handy list!

  var domElements = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',

    // SVG
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ]

  //

  var _styled = function(styledComponent, constructWithOptions) {
    var styled = function styled(tag) {
      return constructWithOptions(styledComponent, tag)
    }

    // Shorthands for all valid HTML Elements
    domElements.forEach(function(domElement) {
      styled[domElement] = styled(domElement)
    })

    return styled
  }

  //

  var replaceWhitespace = function replaceWhitespace(str) {
    return str.replace(/\s|\\n/g, '')
  }

  var _keyframes = function(nameGenerator, stringifyRules, css) {
    return function() {
      var styleSheet = StyleSheet$1.master
      var rules = css.apply(undefined, arguments)
      var name = nameGenerator(
        murmurhash(replaceWhitespace(JSON.stringify(rules)))
      )
      var id = 'sc-keyframes-' + name

      if (!styleSheet.hasNameForId(id, name)) {
        styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name)
      }

      return name
    }
  }

  //

  var _injectGlobal = function(stringifyRules, css) {
    var injectGlobal = function injectGlobal() {
      var styleSheet = StyleSheet$1.master
      var rules = css.apply(undefined, arguments)
      var hash = murmurhash(JSON.stringify(rules))
      var id = 'sc-global-' + hash

      if (!styleSheet.hasId(id)) {
        styleSheet.inject(id, stringifyRules(rules))
      }
    }

    return injectGlobal
  }

  //

  var _constructWithOptions = function(css) {
    var constructWithOptions = function constructWithOptions(
      componentConstructor,
      tag
    ) {
      var options =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : EMPTY_OBJECT

      if (!reactIs_1(tag)) {
        throw new StyledComponentsError(1, String(tag))
      }

      /* This is callable directly as a template function */
      // $FlowFixMe: Not typed to avoid destructuring arguments
      var templateFunction = function templateFunction() {
        return componentConstructor(
          tag,
          options,
          css.apply(undefined, arguments)
        )
      }

      /* If config methods are called, wrap up a new template function and merge options */
      templateFunction.withConfig = function(config) {
        return constructWithOptions(
          componentConstructor,
          tag,
          _extends$6({}, options, config)
        )
      }
      templateFunction.attrs = function(attrs) {
        return constructWithOptions(
          componentConstructor,
          tag,
          _extends$6({}, options, {
            attrs: _extends$6({}, options.attrs || EMPTY_OBJECT, attrs),
          })
        )
      }

      return templateFunction
    }

    return constructWithOptions
  }

  //

  var withTheme = function(Component) {
    var isStatelessFunctionalComponent =
      typeof Component === 'function' &&
      // $FlowFixMe TODO: flow for prototype
      !(Component.prototype && 'isReactComponent' in Component.prototype)

    // NOTE: We can't pass a ref to a stateless functional component
    var shouldSetInnerRef =
      isStyledComponent(Component) || isStatelessFunctionalComponent

    var WithTheme = (function(_React$Component) {
      inherits(WithTheme, _React$Component)

      function WithTheme() {
        var _temp, _this, _ret

        classCallCheck(this, WithTheme)

        for (
          var _len = arguments.length, args = Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key]
        }

        return (
          (_ret = ((_temp = ((_this = possibleConstructorReturn(
            this,
            _React$Component.call.apply(_React$Component, [this].concat(args))
          )),
          _this)),
          (_this.state = EMPTY_OBJECT),
          (_this.unsubscribeId = -1),
          _temp)),
          possibleConstructorReturn(_this, _ret)
        )
      }

      // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping

      WithTheme.prototype.componentWillMount = function componentWillMount() {
        var _this2 = this

        var defaultProps = this.constructor.defaultProps

        var styledContext = this.context[CHANNEL_NEXT]
        var themeProp = determineTheme(this.props, undefined, defaultProps)
        if (
          styledContext === undefined &&
          themeProp === undefined &&
          'development' !== 'production'
        ) {
          // eslint-disable-next-line no-console
          console.warn(
            '[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps'
          )
        } else if (styledContext === undefined && themeProp !== undefined) {
          this.setState({ theme: themeProp })
        } else {
          var subscribe = styledContext.subscribe

          this.unsubscribeId = subscribe(function(nextTheme) {
            var theme = determineTheme(_this2.props, nextTheme, defaultProps)
            _this2.setState({ theme: theme })
          })
        }
      }

      WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(
        nextProps
      ) {
        var defaultProps = this.constructor.defaultProps

        this.setState(function(oldState) {
          var theme = determineTheme(nextProps, oldState.theme, defaultProps)

          return { theme: theme }
        })
      }

      WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.unsubscribeId !== -1) {
          this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId)
        }
      }

      WithTheme.prototype.render = function render() {
        var props = _extends$6(
          {
            theme: this.state.theme,
          },
          this.props
        )

        if (!shouldSetInnerRef) {
          props.ref = props.innerRef
          delete props.innerRef
        }

        return React__default.createElement(Component, props)
      }

      return WithTheme
    })(React__default.Component)

    WithTheme.contextTypes = contextShape
    WithTheme.displayName = 'WithTheme(' + getComponentName(Component) + ')'
    WithTheme.styledComponentId = 'withTheme'

    return hoistNonReactStatics_cjs(WithTheme, Component)
  }

  //

  /* eslint-disable */
  var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
    StyleSheet: StyleSheet$1,
  }

  //

  /* Warning if you've imported this file on React Native */
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn(
      "It looks like you've imported 'styled-components' on React Native.\n" +
        "Perhaps you're looking to import 'styled-components/native'?\n" +
        'Read more about this at https://www.styled-components.com/docs/basics#react-native'
    )
  }

  /* Warning if there are several instances of styled-components */
  if (
    typeof window !== 'undefined' &&
    typeof navigator !== 'undefined' &&
    typeof navigator.userAgent === 'string' &&
    navigator.userAgent.indexOf('Node.js') === -1 &&
    navigator.userAgent.indexOf('jsdom') === -1
  ) {
    window['__styled-components-init__'] =
      window['__styled-components-init__'] || 0

    if (window['__styled-components-init__'] === 1) {
      // eslint-disable-next-line no-console
      console.warn(
        "It looks like there are several instances of 'styled-components' initialized in this application. " +
          'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' +
          'and makes your application bigger without a good reason.\n\n' +
          'See https://s-c.sh/2BAXzed for more info.'
      )
    }

    window['__styled-components-init__'] += 1
  }

  /* Instantiate singletons */
  var ComponentStyle = _ComponentStyle(
    generateAlphabeticName,
    flatten,
    stringifyRules
  )
  var constructWithOptions = _constructWithOptions(css)
  var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions)

  /* Instantiate exported singletons */
  var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css)
  var injectGlobal = _injectGlobal(stringifyRules, css)
  var styled = _styled(StyledComponent, constructWithOptions)

  exports.default = styled
  exports.css = css
  exports.keyframes = keyframes
  exports.injectGlobal = injectGlobal
  exports.isStyledComponent = isStyledComponent
  exports.consolidateStreamedStyles = consolidateStreamedStyles
  exports.ThemeProvider = ThemeProvider
  exports.withTheme = withTheme
  exports.ServerStyleSheet = ServerStyleSheet
  exports.StyleSheetManager = StyleSheetManager
  exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS

  Object.defineProperty(exports, '__esModule', { value: true })
})
//# sourceMappingURL=styled-components.js.map
