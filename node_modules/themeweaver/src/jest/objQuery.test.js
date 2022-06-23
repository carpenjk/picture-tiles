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
} from '../index';

// Function: getColor
test('objQuery  / getColor: #E5707A', () => {
  expect(
    getColor({}, 'blue')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('#E5707A');
});

test('objQuery with suffix / getColor: #C6D8FF', () => {
  expect(
    getColor({suffix: '_open'}, 'blue')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('#C6D8FF');
});

test('objQuery no variant  / getColor: #444649', () => {
  expect(
    getColor({}, 'blue')({ theme: singleValuesTheme, tw: {semKey: 'content'} })
  ).toStrictEqual('#444649');
});

//! ***********************************************************************************

// Function: getBackgroundColor
test('objQuery Test / getBackgroundColor: #C6D8FF', () => {
  expect(
    getBackgroundColor('nav.main', 'blue')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('#C6D8FF');
});

// Function: getBorder
test('objQuery Test / getBorder: dashed red', () => {
  expect(
    getBorder('nav.main', 'thick green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('dashed red');
});
// Function: getBorderTop
test('objQuery Test / getBorderTop: thick double #32a1ce', () => {
  expect(
    getBorderTop('nav.main', 'thick green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderRight
test('objQuery Test / getBorderRight: dashed red', () => {
  expect(
    getBorderRight('nav.main', 'thick green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('dashed red');
});
// Function: getBorderBottom
test('objQuery Test / getBorderBottom: thick double #32a1ce', () => {
  expect(
    getBorderBottom('nav.main', 'thick green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderLeft
test('objQuery Test / getBorderLeft: thick double #32a1ce', () => {
  expect(
    getBorderLeft('nav.main', 'thick green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderColor
test('objQuery Test / getBorderColor: #F8F8F8', () => {
  expect(
    getBorderColor('nav.main', 'green')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('#F8F8F8');
});
// Function: getBorderRadius
test('objQuery Test / getBorderRadius: 5px', () => {
  expect(
    getBorderRadius('nav.main', '10px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('5px');
});
// Function: getBorderStyle
test('objQuery Test / getBorderStyle: solid', () => {
  expect(
    getBorderStyle('nav.main', 'dashed')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('solid');
});
// Function: getBorderWidth
test('objQuery Test / getBorderWidth: 3px 5px 3px 5px', () => {
  expect(
    getBorderWidth('nav.main', '10px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('3px 5px 3px 5px');
});
// Function: getBoxShadow
test('objQuery Test / getBoxShadow: 5px 5px #558ABB', () => {
  expect(
    getBoxShadow('nav.main', '10px 5px 5px red')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getColor
test('objQuery  / getColor: #E5707A', () => {
  expect(
    getColor('nav.main', 'blue')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('#E5707A');
});
// Function: getFontFamily
test("objQuery Test / getFontFamily: 'Roboto', sans-serif", () => {
  expect(
    getFontFamily(
      'nav.main',
      "'Roboto', sans-serif"
    )({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual("'Poppins', sans-serif");
});
// Function: getFontSize
test('objQuery Test / getFontSize: 18px', () => {
  expect(
    getFontSize('nav.main', '12px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('18px');
});
// Function: getFontWeight
test('objQuery Test / getFontWeight: 700', () => {
  expect(
    getFontWeight('nav.main', 'regular')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('700');
});
// Function: getHeight
test('objQuery Test / getHeight: 80px', () => {
  expect(
    getHeight('nav.main', '70px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('80px');
});
// Function: getLineHeight
test('objQuery Test / getLineHeight: 3', () => {
  expect(
    getLineHeight('nav.main', '2.5')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('3');
});
// Function: getLetterSpacing
test('objQuery Test / getLetterSpacing: .2rem', () => {
  expect(
    getLetterSpacing('nav.main', '2px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('.2rem');
});
// Function: getMargin
test('objQuery Test / getMargin: 20px', () => {
  expect(
    getMargin('nav.main', '5px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('20px');
});
// Function: getMarginTop
test('objQuery Test / getMarginTop: 0px', () => {
  expect(
    getMarginTop('nav.main', '5px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('0px');
});
// Function: getMarginRight
test('objQuery Test / getMarginRight: 4px', () => {
  expect(
    getMarginRight('nav.main', '5px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('4px');
});
// Function: getMarginBottom
test('objQuery Test / getMarginBottom: 32px', () => {
  expect(
    getMarginBottom('nav.main', '5px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('32px');
});
// Function: getMarginLeft
test('objQuery Test / getMarginLeft: 8px', () => {
  expect(
    getMarginLeft('nav.main', '5px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('8px');
});
// Function: getMaxHeight
test('objQuery Test / getMaxHeight: 100%', () => {
  expect(
    getMaxHeight('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('100%');
});
// Function: getMaxWidth
test('objQuery Test / getMaxWidth: 80px', () => {
  expect(
    getMaxWidth('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('80px');
});
// Function: getMinHeight
test('objQuery Test / getMinHeight: 80px', () => {
  expect(
    getMinHeight('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('80px');
});
// Function: getMinWidth
test('objQuery Test / getMinWidth: 100%', () => {
  expect(
    getMinWidth('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('100%');
});
// Function: getPadding
test('objQuery Test / getPadding: 20px', () => {
  expect(
    getPadding('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('20px');
});
// Function: getPaddingTop
test('objQuery Test / getPaddingTop: 16px', () => {
  expect(
    getPaddingTop('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('16px');
});
// Function: getPaddingRight
test('objQuery Test / getPaddingRight: 0px', () => {
  expect(
    getPaddingRight('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('0px');
});
// Function: getPaddingBottom
test('objQuery Test / getPaddingBottom: 0px', () => {
  expect(
    getPaddingBottom('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('0px');
});
// Function: getPaddingLeft
test('objQuery Test / getPaddingLeft: 0px', () => {
  expect(
    getPaddingLeft('nav.main', '50px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('0px');
});
// Function: getTextShadow
test('objQuery Test / getTextShadow: 5px 5px #558ABB', () => {
  expect(
    getTextShadow('nav.main', '10px 5px #558ABB')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getTransition
test('objQuery Test / getTransition: top 500ms ease-in-out', () => {
  expect(
    getTransitions({
      style: 'top',
      path: 'nav.main',
      fallback: 'top 500ms ease',
    })({
      theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'},
    })
  ).toStrictEqual('top 500ms ease-in-out');
});
// Function: getWidth
test('objQuery Test / getWidth: 80px', () => {
  expect(
    getWidth('nav.main', '100px')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('80px');
});
// Function: getZIndex
test('objQuery Test / getZIndex: 0', () => {
  expect(
    getZIndex('nav.main', '1')({ theme: singleValuesTheme, tw: {semKey: 'nav', variant: 'main'} })
  ).toStrictEqual('0');
});
