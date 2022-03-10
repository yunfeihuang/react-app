import React from 'react'

export default (importComponent, importReducer) => {
  class AsyncLoader extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        Component: null,
        Provider: null,
        loading: true
      }
    }

    async componentDidMount() {
      const { default: Component } = await importComponent()
      if (importReducer){
        if (importReducer instanceof Function) {
          const { Provider } = await importReducer()
          this.setState({
            Component,
            Provider,
            loading: false
          }, () => {
            
          })
        } else if (importReducer instanceof Array) {
          Promise.all(importReducer.map(item => item())).then(res => {
            this.setState({
              loading: false,
              Component,
              Provider: res.map(item => {
                return item.Provider
              }).reverse()
            })
          })
        } else {
          this.setState({
            loading: false,
            Component
          })
        }
      } else {
        this.setState({
          Component,
          loading: false
        }, () => {
          
        })
      }
    }
    renderProviders () {
      let result = null
      const C = this.state.Component
      const fn = (Item, children) => {
        if (children) {
          return <Item>{children}</Item>
        } else {
          return <Item><C {...this.props} /></Item>
        }
      }
      this.state.Provider.forEach((item,i) => {
        if (i === 0) {
          result = fn(item)
        } else {
          result = fn(item, result)
        }
      })
      return result
    }
    render() {
      const C = this.state.Component
      const Provider = this.state.Provider
      return !this.state.loading ? Provider ? Provider instanceof Array ? this.renderProviders() : <Provider><C {...this.props} /></Provider> : <C {...this.props} /> : <div>加载中</div>
    }
  }
  return AsyncLoader
}