/**
 * @jest-environment jsdom
 */

const { expect } = require('expect');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
const js = require('./index.js');

describe('Testing Client-Side index.html...', () => {
	beforeAll(() => {
		document.documentElement.innerHTML = html.toString();
		console.log('.............Testing html............ ', document);
	});

	it('test: <main section> is there', () => {
		let mainSec = document.querySelector('.mainSection');
		expect(mainSec).toBeTruthy();
	});

	it('test: <card> is in the html', () => {
		const card = document.querySelector('.card');
		expect(card).toBeTruthy();
	});

	it("test: <title> is 'Cars'", () => {
		let docTitle = document.title;
		expect(docTitle).toBe('Cars');
	});
});

describe('testing client side JavaScript', () => {
	test('90 chara remaining', () => {
		let numCharacters = 10;
		expect(updateCounter(numCharacters)).toBe('Characters remaining: 90');
	});
});
