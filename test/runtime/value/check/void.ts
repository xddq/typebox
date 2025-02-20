import { Value } from '@sinclair/typebox/value'
import { Type } from '@sinclair/typebox'
import { Assert } from '../../assert/index'

describe('value/check/Void', () => {
  const T = Type.Void()
  it('Should fail string', () => {
    const value = 'hello'
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should fail number', () => {
    const value = 1
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should fail boolean', () => {
    const value = true
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should pass null', () => {
    const value = null
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should pass undefined', () => {
    const value = undefined
    const result = Value.Check(T, value)
    Assert.isEqual(result, true)
  })
  it('Should fail object', () => {
    const value = { a: 1 }
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should fail array', () => {
    const value = [1, 2]
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
  it('Should fail Date', () => {
    const value = new Date()
    const result = Value.Check(T, value)
    Assert.isEqual(result, false)
  })
})
