import singleValuesLookupTheme from '../test_themes/singleValuesLookupTheme';
import responsiveValuesTheme from '../test_themes/responsiveValuesTheme';
import withoutVariantTheme from '../test_themes/withoutVariantTheme';
import explicitValuesTheme from '../test_themes/explicitValuesTheme';

import { getColor, getBackgroundColor } from '../index';

// Function: getColor
test('Single Value  / getColor: #E5707A', () => {
  expect(
    getColor('nav.main', 'blue')({ theme: singleValuesLookupTheme })
  ).toStrictEqual('#E5707A');
});

test('Responsive Value / getColor: #E5707A', () => {
  expect(
    getColor('nav.main', 'blue')({ theme: responsiveValuesTheme })
  ).toStrictEqual('#E5707A');
});

test('Without Variant / getColor #E5707A', () => {
  expect(getColor('nav', 'blue')({ theme: withoutVariantTheme })).toStrictEqual(
    '#E5707A'
  );
});

test('Explicit Value  / getColor #E5707A', () => {
  expect(
    getColor('nav.main', 'orange')({ theme: explicitValuesTheme })
  ).toStrictEqual('red');
});

// Function: getBackgroundColor
test('Single Value Test / getBackgroundColor: #C6D8FF', () => {
  expect(
    getBackgroundColor('nav.main', 'blue')({ theme: singleValuesLookupTheme })
  ).toStrictEqual('#C6D8FF');
});
