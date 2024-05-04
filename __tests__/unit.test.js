// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


/**
 * isPhoneNumber
 */
test('valid phone number with parenthesis', () => {
  expect(isPhoneNumber("(123)-456-7890")).toBe(true);
});

test('valid phone number without parenthesis', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test('invalid phone number with space', () => {
  expect(isPhoneNumber("123 456 7890")).toBe(false);
});

test('invalid phone number with letters', () => {
  expect(isPhoneNumber("1x3-4a6-7f90")).toBe(false);
});

/**
 * isEmail
 */
test('valid email address all lowercase', () => {
  expect(isEmail("valid@gmail.com")).toBe(true);
});

test('valid email address with uppercase and different address', () => {
  expect(isEmail("VALID@ucsd.edu")).toBe(true);
});

test('invalid email with incorrect domain', () => {
  expect(isEmail("invalid@ucsd.what")).toBe(false);
});

test('invalid email with extra dots in name address', () => {
  expect(isEmail("in.va.li.d@ucsd.edu")).toBe(false);
});

/**
 * isStrongPassword
 */
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

/**
 * isDate
 */
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

/**
 * isHexColor
 */
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