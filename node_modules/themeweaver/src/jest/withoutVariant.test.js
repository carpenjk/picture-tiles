import withoutVariantTheme from '../test_themes/withoutVariantTheme';

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
test('Without Variant Test / getBackgroundColor: #C6D8FF', () => {
  expect(
    getBackgroundColor('nav', 'blue')({ theme: withoutVariantTheme })
  ).toStrictEqual('#C6D8FF');
});

// Function: getBorder
test('Without Variant Test / getBorder: dashed red', () => {
  expect(
    getBorder('nav', 'thick green')({ theme: withoutVariantTheme })
  ).toStrictEqual('dashed red');
});
test('Without Variant Test: br value / getBorder: thick double #32a1ce', () => {
  expect(
    getBorder('nav', 'thick green')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderTop
test('Without Variant Test / getBorderTop: thick double #32a1ce', () => {
  expect(
    getBorderTop('nav', 'thick green')({ theme: withoutVariantTheme })
  ).toStrictEqual('thick double #32a1ce');
});
test('Without Variant Test: br value / getBorderTop: dashed red', () => {
  expect(
    getBorderTop('nav', 'thick green')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('dashed red');
});
// Function: getBorderRight
test('Without Variant Test / getBorderRight: dashed red', () => {
  expect(
    getBorderRight('nav', 'thick green')({ theme: withoutVariantTheme })
  ).toStrictEqual('dashed red');
});
// Function: getBorderBottom
test('Without Variant Test / getBorderBottom: thick double #32a1ce', () => {
  expect(
    getBorderBottom('nav', 'thick green')({ theme: withoutVariantTheme })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderLeft
test('Without Variant Test / getBorderLeft: thick double #32a1ce', () => {
  expect(
    getBorderLeft('nav', 'thick green')({ theme: withoutVariantTheme })
  ).toStrictEqual('thick double #32a1ce');
});
// Function: getBorderColor
test('Without Variant Test / getBorderColor: #F8F8F8', () => {
  expect(
    getBorderColor('nav', 'green')({ theme: withoutVariantTheme })
  ).toStrictEqual('#F8F8F8');
});
// Function: getBorderRadius
test('Without Variant Test / getBorderRadius: 5px', () => {
  expect(
    getBorderRadius('nav', '10px')({ theme: withoutVariantTheme })
  ).toStrictEqual('5px');
});
// Function: getBorderStyle
test('Without Variant Test / getBorderStyle: solid', () => {
  expect(
    getBorderStyle('nav', 'dashed')({ theme: withoutVariantTheme })
  ).toStrictEqual('solid');
});
// Function: getBorderWidth
test('Without Variant Test / getBorderWidth: 3px 5px 3px 5px', () => {
  expect(
    getBorderWidth('nav', '10px')({ theme: withoutVariantTheme })
  ).toStrictEqual('3px 5px 3px 5px');
});
// Function: getBoxShadow
test('Without Variant Test / getBoxShadow: 5px 5px #558ABB', () => {
  expect(
    getBoxShadow('nav', '10px 5px 5px red')({ theme: withoutVariantTheme })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getColor
test('Without Variant  / getColor: #E5707A', () => {
  expect(getColor('nav', 'blue')({ theme: withoutVariantTheme })).toStrictEqual(
    '#E5707A'
  );
});
test('Without Variant: br value  / getColor: #C6D8FF', () => {
  expect(
    getColor('nav', 'blue')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('#C6D8FF');
});
// Function: getFontFamily
test("Without Variant Test / getFontFamily: 'Poppins', sans-serif", () => {
  expect(
    getFontFamily('nav', "'Roboto', sans-serif")({ theme: withoutVariantTheme })
  ).toStrictEqual("'Poppins', sans-serif");
});
// Function: getFontSize
test('Without Variant Test / getFontSize: 18px', () => {
  expect(
    getFontSize('nav', '12px')({ theme: withoutVariantTheme })
  ).toStrictEqual('18px');
});
// Function: getFontWeight
test('Without Variant Test / getFontWeight: 700', () => {
  expect(
    getFontWeight('nav', 'regular')({ theme: withoutVariantTheme })
  ).toStrictEqual('700');
});
// Function: getHeight
test('Without Variant Test / getHeight: 100%', () => {
  expect(
    getHeight('nav', '70px')({ theme: withoutVariantTheme })
  ).toStrictEqual('100%');
});
test('Without Variant Test: br value / getHeight: 80px', () => {
  expect(
    getHeight('nav', '70px')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('80px');
});
// Function: getLineHeight
test('Without Variant Test / getLineHeight: 3', () => {
  expect(
    getLineHeight('nav', '2.5')({ theme: withoutVariantTheme })
  ).toStrictEqual('3');
});
// Function: getLetterSpacing
test('Without Variant Test / getLetterSpacing: .2rem', () => {
  expect(
    getLetterSpacing('nav', '2px')({ theme: withoutVariantTheme })
  ).toStrictEqual('.2rem');
});
// Function: getMargin
test('Without Variant Test / getMargin: 20px', () => {
  expect(getMargin('nav', '5px')({ theme: withoutVariantTheme })).toStrictEqual(
    '20px'
  );
});
// Function: getMarginTop
test('Without Variant Test / getMarginTop: 0px', () => {
  expect(
    getMarginTop('nav', '5px')({ theme: withoutVariantTheme })
  ).toStrictEqual('0px');
});
// Function: getMarginRight
test('Without Variant Test / getMarginRight: 4px', () => {
  expect(
    getMarginRight('nav', '5px')({ theme: withoutVariantTheme })
  ).toStrictEqual('4px');
});
// Function: getMarginBottom
test('Without Variant Test / getMarginBottom: 32px', () => {
  expect(
    getMarginBottom('nav', '5px')({ theme: withoutVariantTheme })
  ).toStrictEqual('32px');
});
// Function: getMarginLeft
test('Without Variant Test / getMarginLeft: 8px', () => {
  expect(
    getMarginLeft('nav', '5px')({ theme: withoutVariantTheme })
  ).toStrictEqual('8px');
});
// Function: getMaxHeight
test('Without Variant Test / getMaxHeight: 100%', () => {
  expect(
    getMaxHeight('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('100%');
});
// Function: getMaxWidth
test('Without Variant Test / getMaxWidth: 100%', () => {
  expect(
    getMaxWidth('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('100%');
});
test('Without Variant Test: br value / getMaxWidth: 80px', () => {
  expect(
    getMaxWidth('nav', '50px')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('80px');
});
// Function: getMinHeight
test('Without Variant Test / getMinHeight: 100%', () => {
  expect(
    getMinHeight('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('100%');
});
// Function: getMinWidth
test('Without Variant Test / getMinWidth: 100%', () => {
  expect(
    getMinWidth('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('100%');
});
// Function: getPadding
test('Without Variant Test / getPadding: 1px 2px 1px 2px', () => {
  expect(
    getPadding('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('1px 2px 1px 2px');
});
// Function: getPaddingTop
test('Without Variant Test / getPaddingTop: 4px', () => {
  expect(
    getPaddingTop('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('4px');
});
test('Without Variant Test: br value / getPaddingTop: 16px', () => {
  expect(
    getPaddingTop('nav', '50px')({ theme: withoutVariantTheme }, 1)
  ).toStrictEqual('16px');
});
// Function: getPaddingRight
test('Without Variant Test / getPaddingRight: 0px', () => {
  expect(
    getPaddingRight('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('0px');
});
// Function: getPaddingBottom
test('Without Variant Test / getPaddingBottom: 0px', () => {
  expect(
    getPaddingBottom('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('0px');
});
// Function: getPaddingLeft
test('Without Variant Test / getPaddingLeft: 0px', () => {
  expect(
    getPaddingLeft('nav', '50px')({ theme: withoutVariantTheme })
  ).toStrictEqual('0px');
});
// Function: getTextShadow
test('Without Variant Test / getTextShadow: 5px 5px #558ABB', () => {
  expect(
    getTextShadow('nav', '10px 5px #558ABB')({ theme: withoutVariantTheme })
  ).toStrictEqual('5px 5px #558ABB');
});
// Function: getTransition
test('Without Variant Test / getTransition: top 500ms ease-in-out', () => {
  expect(
    getTransitions({
      style: 'top',
      path: 'nav',
      fallback: 'top 500ms ease',
    })({
      theme: withoutVariantTheme,
    })
  ).toStrictEqual('top 500ms ease-in-out');
});
test('Without Variant Test: br value / getTransition: left 500ms ease', () => {
  expect(
    getTransitions({
      style: 'top',
      path: 'nav',
      fallback: 'top 500ms ease',
    })(
      {
        theme: withoutVariantTheme,
      },
      1
    )
  ).toStrictEqual('left 500ms ease');
});
// Function: getWidth
test('Without Variant Test / getWidth: 80px', () => {
  expect(
    getWidth('nav', '100px')({ theme: withoutVariantTheme })
  ).toStrictEqual('80px');
});
// Function: getZIndex
test('Without Variant Test / getZIndex: 0', () => {
  expect(getZIndex('nav', '1')({ theme: withoutVariantTheme })).toStrictEqual(
    '0'
  );
});
