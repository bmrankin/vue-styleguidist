import * as path from 'path'
import { ComponentDoc } from '../../../src/Documentation'
import { parse } from '../../../src/main'

const button = path.join(__dirname, './iev.js')
let docDropDown: ComponentDoc

describe('tests wrapper with root slot', () => {
	beforeEach(async done => {
		docDropDown = await parse(button)
		done()
	})

	it('should return an object', () => {
		expect(typeof docDropDown).toBe('object')
	})

	it('should pick up the component name', () => {
		expect(docDropDown.displayName).toBe('iev')
	})
})
