export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/cate/index',
    'pages/cart/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: "black",
    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: "./static/tab-bar/home.png",
        selectedIconPath: "./static/tab-bar/home-active.png",
        text: "首页",
      },
      {
        pagePath: "pages/cate/index",
        iconPath: "./static/tab-bar/cate.png",
        selectedIconPath: "./static/tab-bar/cate-active.png",
        text: "分类",
      },
      {
        pagePath: "pages/cart/index",
        iconPath: "./static/tab-bar/cart.png",
        selectedIconPath: "./static/tab-bar/cart-active.png",
        text: "购物车",
      },
      {
        pagePath: "pages/user/index",
        iconPath: "./static/tab-bar/user.png",
        selectedIconPath: "./static/tab-bar/user-active.png",
        text: "个人",
      },
    ],
  },
});
