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
        }
      } else {
        this.setState({
          Component,
          loading: false
        }, () => {
          
        })
      }
    }

    render() {
      const C = this.state.Component
      const Provider = this.state.Provider
      return !this.state.loading ? Provider ? <Provider><C {...this.props} /></Provider> : <C {...this.props} /> : <div>加载中</div>
    }
  }
  return AsyncLoader
}