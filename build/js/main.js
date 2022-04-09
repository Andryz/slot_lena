"use strict";

var spins = document.querySelector('#spins');
var slotImg = document.querySelector('#slot-img');
var columnFirst = document.querySelector('.col-first');
var columnSecond = document.querySelector('.col-second');
var columnThird = document.querySelector('.col-third');
var currentSpins = document.querySelector('#current-spins');
var secondStep = document.querySelector('#second-step');
var firstStep = document.querySelector('#first-step');
var slotSpinBtns = document.querySelectorAll('.action-spin');
var spinsValue = 3;
var spinsActive = false;

var rotation = function rotation() {
  if (!spinsActive && spinsValue >= 1) {
    spinsActive = true;
    currentSpins.innerHTML = "".concat(--spinsValue, " ");

    if (document.documentElement.clientWidth > 1650) {
      if (spinsValue === 2) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-1475px';
        columnSecond.style.bottom = '-1919px';
        columnThird.style.bottom = '-2255px';
      } else if (spinsValue === 1) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-3027px';
        columnSecond.style.bottom = '-3596px';
        columnThird.style.bottom = '-4600px';
      } else if (spinsValue === 0) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-4484px';
        columnSecond.style.bottom = '-5277px';
        columnThird.style.bottom = '-6856px';
        setTimeout(function () {
          firstStep.classList.remove('active');
          secondStep.classList.add('active');
        }, 5000);
      }
    } else if (document.documentElement.clientWidth < 1650 && document.documentElement.clientWidth > 650) {
      if (spinsValue === 2) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-1464px';
        columnSecond.style.bottom = '-1912px';
        columnThird.style.bottom = '-2230px';
      } else if (spinsValue === 1) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-3050px';
        columnSecond.style.bottom = '-3623px';
        columnThird.style.bottom = '-4585px';
      } else if (spinsValue === 0) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-4446px';
        columnSecond.style.bottom = '-5277px';
        columnThird.style.bottom = '-6940px';
        setTimeout(function () {
          firstStep.classList.remove('active');
          secondStep.classList.add('active');
        }, 5000);
      }
    } else if (document.documentElement.clientWidth < 656) {
      if (spinsValue === 2) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-1472px';
        columnSecond.style.bottom = '-1974px';
        columnThird.style.bottom = '-2229px';
      } else if (spinsValue === 1) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-3067px';
        columnSecond.style.bottom = '-3617px';
        columnThird.style.bottom = '-4585px';
      } else if (spinsValue === 0) {
        slotImg.classList.add('active');
        columnFirst.style.bottom = '-4529px';
        columnSecond.style.bottom = '-5288px';
        columnThird.style.bottom = '-6935px';
        setTimeout(function () {
          firstStep.classList.remove('active');
          secondStep.classList.add('active');
        }, 5000);
      }
    }

    setTimeout(function () {
      slotImg.classList.remove('active');
      spinsActive = false;
    }, 4000);
  }
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = slotSpinBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener('click', rotation);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsic3BpbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbG90SW1nIiwiY29sdW1uRmlyc3QiLCJjb2x1bW5TZWNvbmQiLCJjb2x1bW5UaGlyZCIsImN1cnJlbnRTcGlucyIsInNlY29uZFN0ZXAiLCJmaXJzdFN0ZXAiLCJzbG90U3BpbkJ0bnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3BpbnNWYWx1ZSIsInNwaW5zQWN0aXZlIiwicm90YXRpb24iLCJpbm5lckhUTUwiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiYm90dG9tIiwic2V0VGltZW91dCIsInJlbW92ZSIsImJ0biIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBZDtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBTUUsV0FBVyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBcEI7QUFDQSxJQUFNRyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFyQjtBQUNBLElBQU1JLFdBQVcsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXBCO0FBQ0EsSUFBSUssWUFBWSxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQW5CO0FBQ0EsSUFBTU0sVUFBVSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNTyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU1RLFlBQVksR0FBR1QsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixjQUExQixDQUFy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cnlTZWxlY3RvcignI3NwaW5zJyk7XG5jb25zdCBzbG90SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nsb3QtaW1nJyk7XG5jb25zdCBjb2x1bW5GaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtZmlyc3QnKTtcbmNvbnN0IGNvbHVtblNlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtc2Vjb25kJyk7XG5jb25zdCBjb2x1bW5UaGlyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb2wtdGhpcmQnKTtcbmxldCBjdXJyZW50U3BpbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1zcGlucycpO1xuY29uc3Qgc2Vjb25kU3RlcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmQtc3RlcCcpO1xuY29uc3QgZmlyc3RTdGVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LXN0ZXAnKTtcbmNvbnN0IHNsb3RTcGluQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY3Rpb24tc3BpbicpO1xubGV0IHNwaW5zVmFsdWUgPSAzO1xubGV0IHNwaW5zQWN0aXZlID0gZmFsc2U7XG5cbmNvbnN0IHJvdGF0aW9uID0gKCkgPT4ge1xuXG4gICAgaWYoIXNwaW5zQWN0aXZlICYmIHNwaW5zVmFsdWUgPj0gMSl7XG4gICAgICAgIHNwaW5zQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY3VycmVudFNwaW5zLmlubmVySFRNTCA9IGAkey0tc3BpbnNWYWx1ZX0gYDtcbiAgICAgICAgaWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoID4gMTY1MCl7XG4gICAgICAgICAgICBpZihzcGluc1ZhbHVlID09PSAyKXtcbiAgICAgICAgICAgICAgICBzbG90SW1nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgY29sdW1uRmlyc3Quc3R5bGUuYm90dG9tID0gJy0xNDc1cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uU2Vjb25kLnN0eWxlLmJvdHRvbSA9ICctMTkxOXB4J1xuICAgICAgICAgICAgICAgIGNvbHVtblRoaXJkLnN0eWxlLmJvdHRvbSA9ICctMjI1NXB4J1xuICAgICAgICAgICAgfWVsc2UgaWYoc3BpbnNWYWx1ZSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgc2xvdEltZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIGNvbHVtbkZpcnN0LnN0eWxlLmJvdHRvbSA9ICctMzAyN3B4J1xuICAgICAgICAgICAgICAgIGNvbHVtblNlY29uZC5zdHlsZS5ib3R0b20gPSAnLTM1OTZweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5UaGlyZC5zdHlsZS5ib3R0b20gPSAnLTQ2MDBweCdcbiAgICAgICAgICAgIH1lbHNlIGlmKHNwaW5zVmFsdWUgPT09IDApe1xuICAgICAgICAgICAgICAgIHNsb3RJbWcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjb2x1bW5GaXJzdC5zdHlsZS5ib3R0b20gPSAnLTQ0ODRweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5TZWNvbmQuc3R5bGUuYm90dG9tID0gJy01Mjc3cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uVGhpcmQuc3R5bGUuYm90dG9tID0gJy02ODU2cHgnXG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0U3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kU3RlcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCAxNjUwICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA+IDY1MCl7XG4gICAgICAgICAgICBpZihzcGluc1ZhbHVlID09PSAyKXtcbiAgICAgICAgICAgICAgICBzbG90SW1nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgY29sdW1uRmlyc3Quc3R5bGUuYm90dG9tID0gJy0xNDY0cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uU2Vjb25kLnN0eWxlLmJvdHRvbSA9ICctMTkxMnB4J1xuICAgICAgICAgICAgICAgIGNvbHVtblRoaXJkLnN0eWxlLmJvdHRvbSA9ICctMjIzMHB4J1xuICAgICAgICAgICAgfWVsc2UgaWYoc3BpbnNWYWx1ZSA9PT0gMSl7XG4gICAgICAgICAgICAgICAgc2xvdEltZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIGNvbHVtbkZpcnN0LnN0eWxlLmJvdHRvbSA9ICctMzA1MHB4J1xuICAgICAgICAgICAgICAgIGNvbHVtblNlY29uZC5zdHlsZS5ib3R0b20gPSAnLTM2MjNweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5UaGlyZC5zdHlsZS5ib3R0b20gPSAnLTQ1ODVweCdcbiAgICAgICAgICAgIH1lbHNlIGlmKHNwaW5zVmFsdWUgPT09IDApe1xuICAgICAgICAgICAgICAgIHNsb3RJbWcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjb2x1bW5GaXJzdC5zdHlsZS5ib3R0b20gPSAnLTQ0NDZweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5TZWNvbmQuc3R5bGUuYm90dG9tID0gJy01Mjc3cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uVGhpcmQuc3R5bGUuYm90dG9tID0gJy02OTQwcHgnXG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0U3RlcC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kU3RlcC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9LCA1MDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZSBpZihkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggPCA2NTYpe1xuICAgICAgICAgICAgaWYoc3BpbnNWYWx1ZSA9PT0gMil7XG4gICAgICAgICAgICAgICAgc2xvdEltZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIGNvbHVtbkZpcnN0LnN0eWxlLmJvdHRvbSA9ICctMTQ3MnB4J1xuICAgICAgICAgICAgICAgIGNvbHVtblNlY29uZC5zdHlsZS5ib3R0b20gPSAnLTE5NzRweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5UaGlyZC5zdHlsZS5ib3R0b20gPSAnLTIyMjlweCdcbiAgICAgICAgICAgIH1lbHNlIGlmKHNwaW5zVmFsdWUgPT09IDEpe1xuICAgICAgICAgICAgICAgIHNsb3RJbWcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICBjb2x1bW5GaXJzdC5zdHlsZS5ib3R0b20gPSAnLTMwNjdweCdcbiAgICAgICAgICAgICAgICBjb2x1bW5TZWNvbmQuc3R5bGUuYm90dG9tID0gJy0zNjE3cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uVGhpcmQuc3R5bGUuYm90dG9tID0gJy00NTg1cHgnXG4gICAgICAgICAgICB9ZWxzZSBpZihzcGluc1ZhbHVlID09PSAwKXtcbiAgICAgICAgICAgICAgICBzbG90SW1nLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgY29sdW1uRmlyc3Quc3R5bGUuYm90dG9tID0gJy00NTI5cHgnXG4gICAgICAgICAgICAgICAgY29sdW1uU2Vjb25kLnN0eWxlLmJvdHRvbSA9ICctNTI4OHB4J1xuICAgICAgICAgICAgICAgIGNvbHVtblRoaXJkLnN0eWxlLmJvdHRvbSA9ICctNjkzNXB4J1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICBmaXJzdFN0ZXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIHNlY29uZFN0ZXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSwgNTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgICAgc2xvdEltZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHNwaW5zQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDQwMDAgKTtcblxuICAgIH1cblxufTtcblxuZm9yKGxldCBidG4gb2Ygc2xvdFNwaW5CdG5zKXtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGlvbilcbn1cblxuIiwiIl19