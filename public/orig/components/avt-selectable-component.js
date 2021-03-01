/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

AFRAME.registerComponent('avt-selectable', {
    schema: {
        hoverColor: { type: 'color', default: '#ff0' },
        selectedColor: { type: 'color', default: '#0f0' }
    },
    init: function() {
        var el = this.el;
        var data = this.data;
        el.originalColor = el.getAttribute('color');
        el.addEventListener('mouseenter', function() {
            if (el.isSelected) return;
            el.setAttribute('color', data.hoverColor);
        });
        el.addEventListener('mouseleave', function() {
            if (el.isSelected) return;
            el.setAttribute('color', el.originalColor);
        });
        el.addEventListener('click', function(evt) {
            el.isSelected = !el.isSelected;
            el.setAttribute('color', el.isSelected ? data.selectedColor : data.hoverColor);
        });
    }
});
