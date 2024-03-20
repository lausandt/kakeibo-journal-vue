import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppContent from '@/components/AppContent.vue'

describe('Test AppContent', () => {
  //unit test suite
  it('It renders when component is created', () => {
    //unit test
    const wrapper = shallowMount(AppContent)
    expect(wrapper.text()).toMatch('The different views will be shown here')
  })
})
