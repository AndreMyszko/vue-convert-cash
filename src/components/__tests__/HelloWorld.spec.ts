import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FixedMenu from '../FixedMenu.vue'

describe('FixedMenu', () => {
  it('renders properly', () => {
    const wrapper = mount(FixedMenu, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
