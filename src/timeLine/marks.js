import React, { useEffect } from 'react';

const Marks = ({ timeLineRef }) => {
  function updateMarks(canvas) {
    canvas.width = 1920;
    const scale = 32;
    const duration = 8000;
    var context = canvas.getContext('2d', { alpha: false });

    context.fillStyle = '#555';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#888';
    context.beginPath();

    // context.translate(-scroller.scrollLeft, 0);

    var width = duration * scale;
    var scale4 = scale / 4;
    for (var i = 0.5; i <= width; i += scale) {
      context.moveTo(i + scale4 * 0, 18);
      context.lineTo(i + scale4 * 0, 26);
      if (scale > 16)
        context.moveTo(i + scale4 * 1, 22), context.lineTo(i + scale4 * 1, 26);
      if (scale > 8)
        context.moveTo(i + scale4 * 2, 22), context.lineTo(i + scale4 * 2, 26);
      if (scale > 16)
        context.moveTo(i + scale4 * 3, 22), context.lineTo(i + scale4 * 3, 26);
    }

    context.stroke();

    context.font = '10px Arial';
    context.fillStyle = '#888';
    context.textAlign = 'center';
    var step = Math.max(1, Math.floor(64 / scale));
    for (var i = 0; i < duration; i += step) {
      var minute = Math.floor(i / 60);
      var second = Math.floor(i % 60);

      var text = (minute > 0 ? minute + ':' : '') + ('0' + second).slice(-2);

      context.fillText(text, i * scale, 13);
    }
  }

  function updateTimeMark() {
    var offsetLeft = player.currentTime * scale - scroller.scrollLeft - 8;
    timeMark.style.left = offsetLeft + 'px';

    // var loop = player.getLoop();

    // if (Array.isArray(loop)) {
    //   var loopStart = loop[0] * scale;
    //   var loopEnd = loop[1] * scale;

    //   loopMark.style.display = '';
    //   loopMark.style.left = loopStart - scroller.scrollLeft + 'px';
    //   loopMark.style.width = loopEnd - loopStart + 'px';
    // } else {
    //   loopMark.style.display = 'none';
    // }
  }

  function createTimeMarkImage(canvas) {
    var canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;

    var context = canvas.getContext('2d');
    context.fillStyle = '#f00';
    context.beginPath();
    context.moveTo(2, 0);
    context.lineTo(14, 0);
    context.lineTo(14, 10);
    context.lineTo(8, 16);
    context.lineTo(2, 10);
    context.lineTo(2, 0);
    context.fill();

    return canvas;
  }

  useEffect(() => {
    var timeline = document.getElementById('timeLine');
    // var loopMark = document.createElement('div');
    // loopMark.style.position = 'absolute';
    // loopMark.style.top = 0;
    // loopMark.style.height = 100 + '%';
    // loopMark.style.width = 0;
    // loopMark.style.background = 'rgba( 255, 255, 255, 0.1 )';
    // loopMark.style.pointerEvents = 'none';
    // loopMark.style.display = 'none';
    // timeline.appendChild(loopMark);

    var canvas = document.getElementById('marksCanvas');
    canvas.height = 32;
    canvas.style.position = 'absolute';
    // updateMarks(canvas);

    var timeMark = document.createElement('div');
    timeMark.id = 'timeMark';
    timeMark.style.position = 'absolute';
    timeMark.style.top = '0px';
    timeMark.style.left = '-8px';
    timeMark.style.width = '16px';
    timeMark.style.height = '100%';
    timeMark.style.background =
      'linear-gradient(90deg, transparent 8px, #f00 8px, #f00 9px, transparent 9px) 0% 0% / 16px 16px repeat-y';
    timeMark.style.pointerEvents = 'none';
    timeMark.style.marginTop = '16px';
    timeMark.appendChild(createTimeMarkImage());
    timeline.appendChild(timeMark);
  }, []);

  return <canvas id="marksCanvas" />;
};

export default Marks;
