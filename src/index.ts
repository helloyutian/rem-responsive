/**
 * rem-responsive
 * 2024/22/29 wqs
 * 
 */

function remResponsive({ root, max, watch = true }: ResponsiveOptionType) {
    if (isNaN(root) || root <= 0) {
      throw new Error('params `root` is invalid')
    }
    const docEl = document.documentElement;
    
    let timer: NodeJS.Timeout
    const recalc = function() {
      const maxWidth = !max || isNaN(max) ? docEl.clientWidth : max
      const clientWidth = Math.min(docEl.clientWidth, maxWidth)
      const fz = clientWidth / root;
      docEl.style.fontSize = Number(fz.toFixed(5)) + 'px';
    }
    
    if (watch) {
      const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
      window.addEventListener(resizeEvt, () => {
        clearTimeout(timer)
        timer = setTimeout(recalc, 150)
      }, false);
    }
    recalc()
  }
  
  export default remResponsive