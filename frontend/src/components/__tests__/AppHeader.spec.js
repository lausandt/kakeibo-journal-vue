import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('Test AppHeader', () => {
  // unit test suite
  it('Renders when the component is created', () => {
    // unit test
    const wrapper = shallowMount(AppHeader)

    expect(wrapper.text()).toMatch('Kakeibo Journal')

    const items = wrapper.findAll('li')
    expect(items.length).toEqual(3)
    expect(items[0].text()).toMatch('Home')
    expect(items[1].text()).toMatch('Instructions')
    expect(items[2].text()).toMatch('Login')
  })
})
