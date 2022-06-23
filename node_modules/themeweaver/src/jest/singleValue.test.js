import singleValuesTheme from '../test_themes/singleValuesTheme';

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
  getTransform,
} from '../index';

// Function: getBackgroundColor
test('Single Value Test / getBackgroundColor: #C6D8FF', () => {
  expect(
    getBackgroundColor('nav.main', 'blue')({ theme: singleValuesTheme })
  ).toStrictEqual('#C6D8FF');
});

// Function: getBorder
test('Single Value Test / getBorder: dashed red', () => {
  expect(
    getBorder('nav.main', 'thick green')({ theme: singleValuesTheme })
  ).toStrictEqual('dashed red');
});
// Function: getBorderTop
test('Single Value Test / getBorderTop: thick double #32a1ce', () => {
  expect(
    getBorderTop('nav.main', 'thick green')({ theme: singleValuesTheme })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderRight
test('Single Value Test / getBorderRight: dashed red', () => {
  expect(
    getBorderRight('nav.main', 'thick green')({ theme: singleValuesTheme })
  ).toStrictEqual('dashed red');
});
// Function: getBorderBottom
test('Single Value Test / getBorderBottom: thick double #32a1ce', () => {
  expect(
    getBorderBottom('nav.main', 'thick green')({ theme: singleValuesTheme })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderLeft
test('Single Value Test / getBorderLeft: thick double #32a1ce', () => {
  expect(
    getBorderLeft('nav.main', 'thick green')({ theme: singleValuesTheme })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderColor
test('Single Value Test / getBorderColor: #F8F8F8', () => {
  expect(
    getBorderColor('nav.main', 'green')({ theme: singleValuesTheme })
  ).toStrictEqual('#F8F8F8');
});
// Function: getBorderRadius
test('Single Value Test / getBorderRadius: 5px', () => {
  expect(
    getBorderRadius('nav.main', '10px')({ theme: singleValuesTheme })
  ).toStrictEqual('5px');
});
// Function: getBorderStyle
test('Single Value Test / getBorderStyle: solid', () => {
  expect(
    getBorderStyle('nav.main', 'dashed')({ theme: singleValuesTheme })
  ).toStrictEqual('solid');
});
// Function: getBorderWidth
test('Single Value Test / getBorderWidth: 3px 5px 3px 5px', () => {
  expect(
    getBorderWidth('nav.main', '10px')({ theme: singleValuesTheme })
  ).toStrictEqual('3px 5px 3px 5px');
});
// Function: getBoxShadow
test('Single Value Test / getBoxShadow: 5px 5px #558ABB', () => {
  expect(
    getBoxShadow('nav.main', '10px 5px 5px red')({ theme: singleValuesTheme })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getColor
test('Single Value  / getColor: #E5707A', () => {
  expect(
    getColor('nav.main', 'blue')({ theme: singleValuesTheme })
  ).toStrictEqual('#E5707A');
});
// Function: getFontFamily
test("Single Value Test / getFontFamily: 'Roboto', sans-serif", () => {
  expect(
    getFontFamily(
      'nav.main',
      "'Roboto', sans-serif"
    )({ theme: singleValuesTheme })
  ).toStrictEqual("'Poppins', sans-serif");
});
// Function: getFontSize
test('Single Value Test / getFontSize: 18px', () => {
  expect(
    getFontSize('nav.main', '12px')({ theme: singleValuesTheme })
  ).toStrictEqual('18px');
});
// Function: getFontWeight
test('Single Value Test / getFontWeight: 700', () => {
  expect(
    getFontWeight('nav.main', 'regular')({ theme: singleValuesTheme })
  ).toStrictEqual('700');
});
// Function: getHeight
test('Single Value Test / getHeight: 80px', () => {
  expect(
    getHeight('nav.main', '70px')({ theme: singleValuesTheme })
  ).toStrictEqual('80px');
});
// Function: getLineHeight
test('Single Value Test / getLineHeight: 3', () => {
  expect(
    getLineHeight('nav.main', '2.5')({ theme: singleValuesTheme })
  ).toStrictEqual('3');
});
// Function: getLetterSpacing
test('Single Value Test / getLetterSpacing: .2rem', () => {
  expect(
    getLetterSpacing('nav.main', '2px')({ theme: singleValuesTheme })
  ).toStrictEqual('.2rem');
});
// Function: getMargin
test('Single Value Test / getMargin: 20px', () => {
  expect(
    getMargin('nav.main', '5px')({ theme: singleValuesTheme })
  ).toStrictEqual('20px');
});
// Function: getMarginTop
test('Single Value Test / getMarginTop: 0px', () => {
  expect(
    getMarginTop('nav.main', '5px')({ theme: singleValuesTheme })
  ).toStrictEqual('0px');
});
// Function: getMarginRight
test('Single Value Test / getMarginRight: 4px', () => {
  expect(
    getMarginRight('nav.main', '5px')({ theme: singleValuesTheme })
  ).toStrictEqual('4px');
});
// Function: getMarginBottom
test('Single Value Test / getMarginBottom: 32px', () => {
  expect(
    getMarginBottom('nav.main', '5px')({ theme: singleValuesTheme })
  ).toStrictEqual('32px');
});
// Function: getMarginLeft
test('Single Value Test / getMarginLeft: 8px', () => {
  expect(
    getMarginLeft('nav.main', '5px')({ theme: singleValuesTheme })
  ).toStrictEqual('8px');
});
// Function: getMaxHeight
test('Single Value Test / getMaxHeight: 100%', () => {
  expect(
    getMaxHeight('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('100%');
});
// Function: getMaxWidth
test('Single Value Test / getMaxWidth: 80px', () => {
  expect(
    getMaxWidth('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('80px');
});
// Function: getMinHeight
test('Single Value Test / getMinHeight: 80px', () => {
  expect(
    getMinHeight('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('80px');
});
// Function: getMinWidth
test('Single Value Test / getMinWidth: 100%', () => {
  expect(
    getMinWidth('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('100%');
});
// Function: getPadding
test('Single Value Test / getPadding: 20px', () => {
  expect(
    getPadding('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('20px');
});
// Function: getPaddingTop
test('Single Value Test / getPaddingTop: 16px', () => {
  expect(
    getPaddingTop('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('16px');
});
// Function: getPaddingRight
test('Single Value Test / getPaddingRight: 0px', () => {
  expect(
    getPaddingRight('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('0px');
});
// Function: getPaddingBottom
test('Single Value Test / getPaddingBottom: 0px', () => {
  expect(
    getPaddingBottom('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('0px');
});
// Function: getPaddingLeft
test('Single Value Test / getPaddingLeft: 0px', () => {
  expect(
    getPaddingLeft('nav.main', '50px')({ theme: singleValuesTheme })
  ).toStrictEqual('0px');
});
// Function: getTextShadow
test('Single Value Test / getTextShadow: 5px 5px #558ABB', () => {
  expect(
    getTextShadow('nav.main', '10px 5px #558ABB')({ theme: singleValuesTheme })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getTransition
test('Single Value Test / getTransition: top 500ms ease-in-out', () => {
  expect(
    getTransitions({
      style: 'top',
      path: 'nav.main',
      fallback: 'top 500ms ease',
    })({
      theme: singleValuesTheme,
    })
  ).toStrictEqual('top 500ms ease-in-out');
});
// Function: getTransform
test('Single Value Test / getTransform: scale(1.1)', () => {
  expect(
    getTransform('nav.main_hover', 'scale(1.25')({ theme: singleValuesTheme })
  ).toStrictEqual('scale(1.1)');
});
// Function: getWidth
test('Single Value Test / getWidth: 80px', () => {
  expect(
    getWidth('nav.main', '100px')({ theme: singleValuesTheme })
  ).toStrictEqual('80px');
});
// Function: getZIndex
test('Single Value Test / getZIndex: 0', () => {
  expect(
    getZIndex('nav.main', '1')({ theme: singleValuesTheme })
  ).toStrictEqual('0');
});
