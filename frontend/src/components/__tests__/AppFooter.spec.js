import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppFooter from '@/components/AppFooter.vue'

describe('Test AppFooter', () => {
  // unit test suit
  it('It renders when component is created', () => {
    // unit test
    const wrapper = shallowMount(AppFooter)
    expect(wrapper.text()).toMatch('A Peckish Salty Production')
  })
})
