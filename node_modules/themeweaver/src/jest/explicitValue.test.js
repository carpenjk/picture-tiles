import explicitValuesTheme from '../test_themes/explicitValuesTheme';

import {
  getBackgroundColor,
  getBorder,
  getBorderTop,
  getBorderRight,
  getBorderBottom,
  getBorderLeft,
  getBorderColor,
  getBorderRadius,
  getBorderStyle,
  getBorderWidth,
  getBoxShadow,
  getColor,
  getFontFamily,
  getFontSize,
  getFontWeight,
  getHeight,
  getLineHeight,
  getLetterSpacing,
  getMargin,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
  getMaxWidth,
  getMaxHeight,
  getMinHeight,
  getMinWidth,
  getPadding,
  getPaddingTop,
  getPaddingRight,
  getPaddingBottom,
  getPaddingLeft,
  getTextShadow,
  getTransitions,
  getWidth,
  getZIndex,
} from '../index';

// Function: getBackgroundColor
test('Explicit Value Test / getBackgroundColor: #C6D8FF', () => {
  expect(
    getBackgroundColor('nav.main', 'blue')({ theme: explicitValuesTheme })
  ).toStrictEqual('#C6D8FF');
});

// Function: getBorder
test('Explicit Value Test / getBorder: dashed blue', () => {
  expect(
    getBorder('nav.main', 'thick green')({ theme: explicitValuesTheme })
  ).toStrictEqual('dashed blue');
});
// Function: getBorderTop
test('Explicit Value Test / getBorderTop: solid blue', () => {
  expect(
    getBorderTop('nav.main', 'thick green')({ theme: explicitValuesTheme })
  ).toStrictEqual('solid blue');
});
// Function: getBorderRight
test('Explicit Value Test / getBorderRight: solid', () => {
  expect(
    getBorderRight('nav.main', 'thick green')({ theme: explicitValuesTheme })
  ).toStrictEqual('solid');
});
// Function: getBorderBottom
test('Explicit Value Test / getBorderBottom: dashed', () => {
  expect(
    getBorderBottom('nav.main', 'thick green')({ theme: explicitValuesTheme })
  ).toStrictEqual('dashed');
});
// Function: getBorderLeft
test('Explicit Value Test / getBorderLeft: solid red', () => {
  expect(
    getBorderLeft('nav.main', 'thick green')({ theme: explicitValuesTheme })
  ).toStrictEqual('solid red');
});
// Function: getBorderColor
test('Explicit Value Test / getBorderColor: #F8F8F8', () => {
  expect(
    getBorderColor('nav.main', 'green')({ theme: explicitValuesTheme })
  ).toStrictEqual('#F8F8F8');
});
// Function: getBorderRadius
test('Explicit Value Test / getBorderRadius: 5px', () => {
  expect(
    getBorderRadius('nav.main', '10px')({ theme: explicitValuesTheme })
  ).toStrictEqual('5px');
});
// Function: getBorderStyle
test('Explicit Value Test / getBorderStyle: dashed solid', () => {
  expect(
    getBorderStyle('nav.main', 'dashed')({ theme: explicitValuesTheme })
  ).toStrictEqual('dashed solid');
});
// Function: getBorderWidth
test('Explicit Value Test / getBorderWidth: 5px', () => {
  expect(
    getBorderWidth('nav.main', '10px')({ theme: explicitValuesTheme })
  ).toStrictEqual('5px');
});
// Function: getBoxShadow
test('Explicit Value Test / getBoxShadow: 1px 1px 1px 1px blue', () => {
  expect(
    getBoxShadow('nav.main', '10px 5px 5px red')({ theme: explicitValuesTheme })
  ).toStrictEqual('1px 1px 1px 1px blue');
});
// Function: getColor
test('Explicit Value Test  / getColor: red', () => {
  expect(
    getColor('nav.main', 'blue')({ theme: explicitValuesTheme })
  ).toStrictEqual('red');
});
// Function: getFontFamily
test("Explicit Value Test / getFontFamily: 'Poppins', sans-serif", () => {
  expect(
    getFontFamily(
      'nav.main',
      "'Roboto', sans-serif"
    )({ theme: explicitValuesTheme })
  ).toStrictEqual("'Poppins', sans-serif");
});
// Function: getFontSize
test('Explicit Value Test / getFontSize: 18px', () => {
  expect(
    getFontSize('nav.main', '12px')({ theme: explicitValuesTheme })
  ).toStrictEqual('18px');
});
// Function: getFontWeight
test('Explicit Value Test / getFontWeight: 500', () => {
  expect(
    getFontWeight('nav.main', 'regular')({ theme: explicitValuesTheme })
  ).toStrictEqual('500');
});
// Function: getHeight
test('Explicit Value Test / getHeight: 80px', () => {
  expect(
    getHeight('nav.main', 'regular')({ theme: explicitValuesTheme })
  ).toStrictEqual('80px');
});
// Function: getLineHeight
test('Explicit Value Test / getLineHeight: 3', () => {
  expect(
    getLineHeight('nav.main', '2.5')({ theme: explicitValuesTheme })
  ).toStrictEqual('3');
});
// Function: getLetterSpacing
test('Explicit Value Test / getLetterSpacing: 2.5', () => {
  expect(
    getLetterSpacing('nav.main', '2px')({ theme: explicitValuesTheme })
  ).toStrictEqual('2.5');
});
// Function: getMargin
test('Explicit Value Test / getMargin: 50px', () => {
  expect(
    getMargin('nav.main', '5px')({ theme: explicitValuesTheme })
  ).toStrictEqual('50px');
});
// Function: getMarginTop
test('Explicit Value Test / getMarginTop: 51px', () => {
  expect(
    getMarginTop('nav.main', '5px')({ theme: explicitValuesTheme })
  ).toStrictEqual('51px');
});
// Function: getMarginRight
test('Explicit Value Test / getMarginRight: 52px', () => {
  expect(
    getMarginRight('nav.main', '5px')({ theme: explicitValuesTheme })
  ).toStrictEqual('52px');
});
// Function: getMarginBottom
test('Explicit Value Test / getMarginBottom: 53px', () => {
  expect(
    getMarginBottom('nav.main', '5px')({ theme: explicitValuesTheme })
  ).toStrictEqual('53px');
});
// Function: getMarginLeft
test('Explicit Value Test / getMarginLeft: 54px', () => {
  expect(
    getMarginLeft('nav.main', '5px')({ theme: explicitValuesTheme })
  ).toStrictEqual('54px');
});
// Function: getMaxHeight
test('Explicit Value Test / getMaxHeight: 55px', () => {
  expect(
    getMaxHeight('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('55px');
});
// Function: getMaxWidth
test('Explicit Value Test / getMaxWidth: 56px', () => {
  expect(
    getMaxWidth('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('56px');
});
// Function: getMinHeight
test('Explicit Value Test / getMinHeight: 57px', () => {
  expect(
    getMinHeight('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('57px');
});
// Function: getMinWidth
test('Explicit Value Test / getMinWidth: 58px', () => {
  expect(
    getMinWidth('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('58px');
});
// Function: getPadding
test('Explicit Value Test / getPadding: 59px', () => {
  expect(
    getPadding('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('59px');
});
// Function: getPaddingTop
test('Explicit Value Test / getPaddingTop: 60px', () => {
  expect(
    getPaddingTop('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('60px');
});
// Function: getPaddingRight
test('Explicit Value Test / getPaddingRight: 61px', () => {
  expect(
    getPaddingRight('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('61px');
});
// Function: getPaddingBottom
test('Explicit Value Test / getPaddingBottom: 62px', () => {
  expect(
    getPaddingBottom('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('62px');
});
// Function: getPaddingLeft
test('Explicit Value Test / getPaddingLeft: 63px', () => {
  expect(
    getPaddingLeft('nav.main', '50px')({ theme: explicitValuesTheme })
  ).toStrictEqual('63px');
});
// Function: getTextShadow
test('Explicit Value Test / getTextShadow: 1px 2px 1px 2px blue', () => {
  expect(
    getTextShadow(
      'nav.main',
      '10px 5px #558ABB'
    )({ theme: explicitValuesTheme })
  ).toStrictEqual('1px 2px 1px 2px blue');
});
// Function: getTransition
test('Explicit Value Test / getTransition: top 500ms ease-in-out', () => {
  expect(
    getTransitions({
      style: 'top',
      path: 'nav.main',
      fallback: 'top 500ms ease',
    })({
      theme: explicitValuesTheme,
    })
  ).toStrictEqual('top 500ms ease-in-out');
});
// Function: getWidth
test('Explicit Value Test / getWidth: 70px', () => {
  expect(
    getWidth('nav.main', '100px')({ theme: explicitValuesTheme })
  ).toStrictEqual('70px');
});
// Function: getZIndex
test('Explicit Value Test / getZIndex: 1', () => {
  expect(
    getZIndex('nav.main', '1')({ theme: explicitValuesTheme })
  ).toStrictEqual('1');
});
