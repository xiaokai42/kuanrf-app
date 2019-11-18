// 设置 rem 函数
function autoRootFontSize () {
  // 取screen.width和document.documentElement.getBoundingClientRect().width的最小值；
  let screenWidth = Math.min(screen.width, document.documentElement.getBoundingClientRect().width)
  // 除以750，乘以32；懂的起撒，就是原本是750大小的32px;如果屏幕大小变成了375px,那么字体就是16px;
  document.documentElement.style.fontSize = screenWidth / 750 * 32 + 'px'
}
window.addEventListener('resize', autoRootFontSize)
autoRootFontSize()
