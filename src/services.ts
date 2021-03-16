import { Services } from './test/services'

describe('Services', () => {
    it('should initialise with a services value of 0', () => {
        let services = new Services()
        expect(services.value).toBe(0)

    })
    it('should return a result of 5 when performing an addition of 5 immediately after creation',)
    let services = new Services()
    expect(services.add(5)).toBe(5)
})

it('should initialise with a calculated value of 0', () => {
    let services = new Services()
    services.add(5)
    expect(services.add(5)).toBe(5)

})
it('should initialise with a calculated value of 0', () => {
    let services = new Services()
})
