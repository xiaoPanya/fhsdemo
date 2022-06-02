// index.js
Page({
  data: {
    show: true,
  },
  handle() {
    wx.showToast({
      title: '点击了',
      icon: 'none',
    });
  },
  hind() {
    console.log('点击了');
  },
  handleScroll() {
    console.log('触发了');
    wx.pageScrollTo({
      scrollTop: 350,
      duration: 200,
      success: () => {
        setTimeout(() => {
          this.selectComponent('#CBootPrompt').update();
        }, 3000);
      },
    });
  },
});
