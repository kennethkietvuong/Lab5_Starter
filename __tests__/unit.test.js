// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('whether it is a strong password: T1: valid', () => {
  expect(isStrongPassword('aaaaa')).toBe(true);
});

test('whether it is a strong password: T2: valid', () => {
  expect(isStrongPassword('aaa1898sfdh')).toBe(true);
});

test('whether it is a strong password T3: starts with num', () => {
  expect(isStrongPassword('1Adksjfoi98')).toBe(false);
});

test('whether it is a strong password T4: too long', () => {
  expect(isStrongPassword('aaaaasdfhsakdjhfsd8fy9')).toBe(false);
});


test('whether the entered date is valid: correct format', () => {
  expect(isDate('05/28/2003')).toBe(true);
});

test('whether the entered date is valid: incorrect format', () => {
  expect(isDate('05/28/03')).toBe(false);
});

test('whether the entered date is valid: first and second being only 1 long', () => {
  expect(isDate('5/8/2003')).toBe(true);
});

test('whether the entered date is valid: first or second too long ', () => {
  expect(isDate('005/28/2003')).toBe(false);
});

test('whether the entered hex color is valid', () => {
  expect(isHexColor('#fff')).toBeTruthy();
});

test('whether the entered he color is valid', () => {
  expect(isHexColor('123ABC')).toBeTruthy();
});

test('whether the entered he color is valid: not hex value', () => {
  expect(isHexColor('#gggggg')).toBeFalsy(); 
});

test('whether the entered he color is valid: not 3-6 letters', () => {
  expect(isHexColor('1234')).toBeFalsy(); 
});
