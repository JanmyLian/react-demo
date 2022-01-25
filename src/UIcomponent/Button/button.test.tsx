import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './Button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
}
describe('test Button component', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('btn btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct component based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })

  it('test', ()=>{
    const wrapper = render(<Button {...disabledProps}>Test</Button>)
    const $el = wrapper.getByRole('button')
    const $tel = wrapper.getByText('Test')
    expect($el).toBeInTheDocument() // 断定某个元素会出现在渲染后的 Document 中
    expect($tel).toBeInTheDocument()
  })

  it('test', ()=>{
    const wrapper = render(<Button {...disabledProps}>Test</Button>)
    const $el = wrapper.getByRole('button')
    const $tel = wrapper.getByText('Test')
    const $tel2 = wrapper.getByText(/Test/); // 正则，找不到元素时中断报错
    /**
     * queryByText找不到元素时返回 null而不是中断报错
     * 用queryByText+toBeNull断言某个元素不存在Document中
     * 这种测试挺常见的，比如传个参数到组件里让它隐藏掉某个元素什么的。
     */
    const $tel3 = wrapper.queryByText(/Null/);
    expect($tel3).toBeNull();
})
})