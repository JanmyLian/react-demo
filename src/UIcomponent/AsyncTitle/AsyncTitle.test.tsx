import { render, screen } from "@testing-library/react"
import { AsyncTitle } from "./AsyncTitle"

it("findByText",async () =>{
    render(<AsyncTitle/>)
    const $el = await screen.findByText(/hello/)
    expect($el).toBeInTheDocument()
})