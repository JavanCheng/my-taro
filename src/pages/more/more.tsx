import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!1</Text>
      </View>
    )
  }
}
