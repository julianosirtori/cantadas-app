import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import { rootStore } from 'store'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const Wrapper = ({ children }: { children: any }) => {
    return <Provider store={rootStore}>{children}</Provider>
}

const customRender = (
    ui: ReactElement,
    { ...renderOptions }: CustomRenderProps = {}
) => {
    const rendered = render(<Wrapper>{ui}</Wrapper>, renderOptions)

    return {
        ...rendered,
        rerender: (
            ui: ReactElement,
            { ...rerenderOptions }: CustomRenderProps = {}
        ) =>
            customRender(ui, {
                container: rendered.container,
                ...rerenderOptions,
            }),
    }
}

export * from '@testing-library/react'
export { customRender as render }
