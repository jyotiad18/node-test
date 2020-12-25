const assert = require('assert');

describe('file to be tested', () => {
	context('function to be tested', () => {
		before(() => {
			console.log('-----Before');
		})

		after(() => {
			console.log('-------After');
		})

		beforeEach(() => {
			console.log('------Before All');
		})

		afterEach(() => {
			console.log('-------After All');
		})

		it('should be  something', () => {
			assert.equal(1, 1);
		});

		it('should be deep equal', () => {
			assert.deepEqual({ 'name': 'jyoti' }, { 'name': 'jyoti' });
		})
	})

	context('function to be another tested', () => {
		it('should be  something', () => {
			assert.equal(1, 1);
		});		
	})
})