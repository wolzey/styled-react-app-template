import { render } from '@testing-library/react'

import { AppThemer } from '../theme'

const customRender = (ui, options) => render(ui, { wrapper: AppThemer, ...options })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
export { customRender as render }
