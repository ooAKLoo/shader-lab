const FN = ['play', 'pause']

function getUpstream(_el, cls) {
  if(_el === document.body) return null;
  if(_el.classList.contains(cls)) return _el;
  return getUpstream(_el.parentNode, cls)
}

function update(_btn, bit = 0) {
  _btn.textContent = FN[_btn.dataset.action = bit]
}

function manual(_vid) {
  let _cont = getUpstream(_vid, 'video-text-container'),
      _btn = null;

  _vid.dataset.auto = 0;
  _vid.pause();

  if(_cont) {
    let _btn = document.createElement('button');

    _btn.classList.add('play-ctrl');
    update(_btn);
    _cont.appendChild(_btn);

    return _btn
  }
}

addEventListener('DOMContentLoaded', e => {
  const _VIDS = [...document.querySelectorAll('video')];

  _VIDS.forEach((_vid, i) => {
    let _btn = null;

    if(+getComputedStyle(_vid).getPropertyValue('--auto')) {
      let promise = _vid.play();

      if(promise !== undefined)
        promise.then(_ => { _vid.dataset.auto = 1 })
               .catch(err => { _btn = manual(_vid) })
    }
    else _btn = manual(_vid);

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let inview = Math.ceil(entry.intersectionRatio);
        if(+_vid.dataset.auto) _vid[FN[inview]]();
        else {
          if(!inview && _btn && +_btn.dataset.action) {
            _vid.pause();
            update(_btn)
          }
        }
      });
    });

    observer.observe(_vid);
  });

  addEventListener('click', e => {
    let _t = e.target;

    if(_t.tagName.toLowerCase() === 'button') {
      let bit = +_t.dataset.action,
          _cont = getUpstream(_t, 'video-text-container'),
          _vid = null;

      if(_cont) _vid = _cont.querySelector('video');

      if(_vid) {
        update(_t, 1 - bit);
        _vid[FN[bit]]()
      }
    }
  })
})
