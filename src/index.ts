/**
 * rem-responsive
 * 2024/22/29 wqs
 * 
 */
import { ResponsiveOptionType } from '../rem-responsive'
// 计算字体大小
function recalc({ root, max }: ResponsiveOptionType) {
  const docEl = document.documentElement;
  const maxWidth = !max || isNaN(max) ? docEl.clientWidth : max
  const clientWidth = Math.min(docEl.clientWidth, maxWidth)
  const fz = clientWidth / root;
  docEl.style.fontSize = Number(fz.toFixed(5)) + 'px';
}
const RemResponsive = {
  config({ root, max, watch = false }: ResponsiveOptionType) {
    if (isNaN(root) || root <= 0) {
      throw new Error('params `root` is invalid')
    }
    let timer: NodeJS.Timeout
    if (watch) {
      const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      window.addEventListener(resizeEvt, () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
          recalc({root, max})
        }, 150)
      }, false);
    }
    recalc({root, max})
  }
}

export default RemResponsive