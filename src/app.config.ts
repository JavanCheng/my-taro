export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/discovery/discovery',
    'pages/more/more',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '演示页面',
    navigationBarTextStyle: 'black',
    backgroundColor: '#eeeeee',
    // navigationBarBackgroundColor: '#0068C4',
    // navigationBarTextStyle: 'white',
    // navigationBarTextStyle: 'white',
    enablePullDownRefresh: true
  },
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/about_us.png",
        selectedIconPath: "./asset/images/about_us.png"
      }, {
        pagePath: "pages/discovery/discovery",
        text: "发现",
        iconPath: "./asset/images/about_us.png",
        selectedIconPath: "./asset/images/about_us.png"
      },
      {
        pagePath: "pages/more/more",
        text: "我的",
        iconPath: "./asset/images/about_us.png",
        selectedIconPath: "./asset/images/about_us.png"
      }
    ]
  }
})
