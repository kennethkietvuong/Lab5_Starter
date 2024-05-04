// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

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