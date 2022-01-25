import { render } from "@testing-library/react"
import { InputTitle } from "./InputTitle"
import userEvent from "@testing-library/user-event"

it("userEvent.type & getByText", () =>{

    const wrapper = render(<InputTitle/>)
    const $el = wrapper.getByRole("input")

    const val = "hello world"
    userEvent.type($el, val) // 模拟用户输入文字

    const text = wrapper.getByText(val)
    expect(text).toBeInTheDocument()
})