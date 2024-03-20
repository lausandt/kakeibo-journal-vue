import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Test App.vue', () => {
  // unit test suite
  it('renders the different sub components when created', () => {
    //unit test
    const wrapper = mount(App)
    expect(wrapper.getComponent({ name: 'AppHeader' }).exists()).toBeTruthy()
    expect(wrapper.getComponent({ name: 'AppContent' }).exists()).toBeTruthy()
    expect(wrapper.getComponent({ name: 'AppFooter' }).exists()).toBeTruthy()
  })
})
