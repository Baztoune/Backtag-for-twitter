// ==UserScript==
// @author         Baztoune
// @name           hashtaglol
// @namespace      http://codeblessyou.com/
// @include        http://twitter.com/*
// @description    Adds background on tweets with special hashtag (#trollface #likeaboss #foreveralone so far, more later)
// ==/UserScript==


function stuf(){
	var nb_try = 10; // try 10 times to init
	var pics = {
		trollface : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQ0NGOUQzODcyMTExRTA5MTVBRDI0NkRCODk3RTNBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQ0NGOUQ0ODcyMTExRTA5MTVBRDI0NkRCODk3RTNBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNDQ0Y5RDE4NzIxMTFFMDkxNUFEMjQ2REI4OTdFM0EiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODNDQ0Y5RDI4NzIxMTFFMDkxNUFEMjQ2REI4OTdFM0EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4W5gpUAAABgFBMVEV2dna2trYLCwu+vr6FhYVZWVmBgYEwMDBhYWFdXV19fX20tLRlZWWsrKzPz89RUVGysrIsLCxNTU26urqampqIiIhGRkZqamqqqqpJSUk0NDQ9PT2dnZ0hISEZGRmYmJgoKCgdHR0lJSWUlJRUVFSioqKgoKCLi4sVFRWmpqaSkpKwsLCMjIwEBASkpKSenp5AQEB6enqoqKhycnKWlpY6OjqOjo4QEBB4eHhubm5sbGxwcHCQkJCurq7+/v79/f37+/v39/f8/Pz4+Pj29vb5+fnz8/Pf39/q6ur19fXn5+fp6en6+vrj4+Pr6+vFxcXl5eW5ubnNzc3T09Pv7+/09PTR0dHx8fHS0tLX19fQ0NDZ2dn////Dw8Pt7e3m5ubw8PDu7u7i4uLY2NjMzMzU1NTKysq9vb3e3t7s7Oy4uLjIyMjAwMDb29vh4eHo6Ojk5OTW1tbc3Nzd3d3y8vLa2trGxsbV1dXJycnCwsLHx8c4ODjBwcHLy8sAAAD///8aKc1lAAAAgHRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADgFS2cAAAciSURBVHja7FdpW+LIFg5BDIooIKCiiSyiaJseHAfTtn2TsO/7IovsyCLu+9ZVf30qCbba156597nP/Tb5AEXqvFVnfc8Bg//Dg/0Dlh53rZUtyD4frY5Nbk0ur/eW1u/vn1vBfjrj+2twvvR5fGKRwmkAAE0zlFVLUhaC0JImE4HjE/Ffgr2ZSRMOgEO7sraqSld78t6S+rNGk2n5YvvByn6kPeukZz8GX3whtVMGTH90eNs5TN4+lq/OI5H9XD4/uDlO5iQZTgN6H4ArCnwyWO+kYmjN+/J+fz5e/p55KMvvj8v7XCIp25fk0uDwZ7DXBrZSMN4eyuSP2U42+UmtV2uKIR5yvC9Uejw6PqvJ5byEYHzvwQEjXUU6ccKyFQmzLM+J7w+i2eR9ppi9OdH0an1NTXgXprffgxXMjXh/O1P4/qDqHVVGu9eCipw7MX17WJDduZNB4Uw9aLwDuzLCp2f1RtIs4R7F+/ngR+jbFyddrtZEL/bB72/BXrIofNVHxhyUA9KiNv0mLqGUP8WKqzWCfQPuAzESsR/xPpW+WaTIWW8M2zb0zpFiLOsRX8fA8SuYW9SNjoJn5XgYXfJiM8waaTMFhGTTtV6VUNOhF7BnF4xiGNKRFgepHHpHNrMGMBWEtwLYYaSCI9U8Pu8iE5HAB3Pgwlc5b1QvvTTQzRFIcuFMAutBCXKqOQGMG3RPnuxGEkL/Rbe7bHGURPAGuCuNl5vXg5z/eNNotjJIVKuY8aJNJ3X2iQTEpqwgX9KRCne06+bcuYA32h8amDICHwLZRbKy/2IO529c3eqAoiR4IfEEiPkEhEm9ECwIfQ2blnEQ4znI14f0FcQwR/vysj2Y35LVfjjkMzla+KqCAjAHdEHBJWs0UJYqQ4w6gZznlnZjC7qOt+/X0lqtY/scJlOC8LqFf1/kJQXj0j3h1G4S6pGSVboBrz3aP7AFZ5bv3jw3OH4a0DNAiLBvguJ/5oiEPPtwhbydE2yFk0oYhTYTNm7+7hPy62QHGva2hDQ9NVsyEsJTPQpy7jdHRJccwIQsuGD4JixTmJy6h1k/hHKrlD4wie/lR7JhowU33LWC8YjgPra9DbT2VQBs/iDursNDBgtTe+FB94B9YsKCfGMTgOvRNTdxH7uq857Vz4MsvFYtAErmgT36q6lnd8I41FsxuITbCwN4CGiUGYHisWpqZU6spS5N04uesQkxgKVxHOA7qF64p0kkRpUOLiGBYdCHq/fVzS2K1PZhQggX79rk/U0Y6KeahSPmEvoP1xyA2v1qQnv7X8FvEMZlMBkvgDrK7THKDz0mK8XQNqkUPTNmq3wU6FJxjKKJnSse/ka6Q6sUoNqoZv2XV+dgSSiMHP0J5kmw0kN5OTdsoihxNhsqvMaJeuoJMXEvIRzTJHEroCgxlmzuukOPSSWpw2DAAZ4fnKFNJEs6p5Rz2ysmM0Mzzm/VNC6UX15GAmB5jFN6SSM5MBxIYIMTnuHgZMkIoWkpubFlBNaVNdmMsiWE2I8Pc2qlBWnlCsMpk0SMZ9Q4OyKD30nh5olFAmZogVKitFCthg1Rzm8kHQj5NGuchElQl5zidHEvTKIhWDcpsMWCEV/udTpqqlCcrii3T09ubQotalr43IMX7i2oQVpS+gYMftDQ8hPLusCvHhJfEmmj5gBbIzIdn3rlsLSZg1MfIx3Y7QktdcYjXDcqFw/TfQWvuxDjkC6AvwcyxFJyIHhMoOnQFMBe2szmyG0ieG0FwiC9iquohS8UPYGZweLWhv3SNlJOz/DoWrD+UlodEHxD+ruo+Xisu4RdpvW26RTMLyqFLduCJMKTO0ow8wKAPaB+26t0a0I9A+rYy+ghgRL/2SrotWkVayIlswDiAcJU0O9LRhCjrr1tsSwhaqRmgBmf6Y/hA1gnhaySOQrt7rIWACeK0JXqrjY7d1dXAPm75u52VMVlQ22UmoPWRVsIl9Yh8vXiahSZuVzMH29Nu9X0YuT9WNGixV4fQwmXj3dV9t1thWJlRvllTz2bOUcM4cnqC+fpyXt3WUvbPT8NNGX8Gl4cQvY5LHW5aOT0tBHNFKX+FZpVTRf06y2+6gI7g3+bw2RMAKYuED8YPg2Qo/hGKBUN+KKpGB+ODNMPs3bVdJh9JGhD9IMhbpn0Qva0iWDJf83PdvoxT+Iu4fMmLr8PH2XqYTEBPRqS/hb6cAL8w8oLLLveFdT2eL0sG/O53c3KTandiiBuCXxjKHXzF+PjLC12qnpPk04Xv18UK6lKMHgaD4ZFo2Nqh1bm++XsybkML794nov5efZ12ycjyLT/rwbXCKh+sNOyK1cUlFnv/puptwCw8/fT6928DiUIoTzy//3IXDEB4/r0VS0YTWQ7mnEX43janb8M/IfzNnuvQNlIi1OyVbH5eP3fDevu/rF+zDZuP5que//5d/N/Av8pwABN+GydRalhcAAAAABJRU5ErkJggg==',
		foreveralone : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjc4QzY0QjMzODcyMjExRTA4NUE0RUVERkEzQTMyNjVFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjc4QzY0QjM0ODcyMjExRTA4NUE0RUVERkEzQTMyNjVFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzhDNjRCMzE4NzIyMTFFMDg1QTRFRURGQTNBMzI2NUUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzhDNjRCMzI4NzIyMTFFMDg1QTRFRURGQTNBMzI2NUUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/czE2AAABgFBMVEX6+vpycnL09PS+yOvCwsLd3d1sbGxcXFycnJyLm9Dq6uqBgYHx8fGLlbNUVFTt7eyUlJN4hrLu7u47OzuysrLo6Oipqam8vLw6UZng4ODk6vzt8f8NDQ9WcsXb29u5ublhYWFMTEzl5eXFxcXX19fi4uKhoaHy8vK1tbXS0tLY2NhBQUF9fX3c5Pvm5ub5+v40NDSJiYmOjo7U3PTOzs7Q0NDIyMjLy8sjIyPMzMylpaXDxMrU1NR5eXnf4uzj5OplZWWrq6vy9f/Cwb/t7er9/f/t7vTk5/P+/v79/f38/Pz////39/f4+Pj5+fn29vb+/v/v7+/Z2dm2uL319ve5u8OWosnp6end3+WotNqpqaXX1tOfr+LS1dz09fbW2N77+/vo7ft3d3WYobmLi4rMz9idnJdZWFhOT1L19fXo6evQ0tZoZV2wvOJGRka3t7Xm5uQ4Ql/4+PfHx8duhMzG0vXj4+OmrcKjqr6xudTz8/Otra3k4+JjY2Pv8fT///8hN5ICAAAAgHRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADgFS2cAAAVCSURBVHjapJeLe9pUGIcDC5eGjNBAYKksBJpSAh2FLgU2YcJw28kNBl7wLlaUxgtTp6jUev51cxJCCaUtrXke4Dzn5D2X7/I7Hxj8Hw92RT8lVSRJA3eC2WbAHxgfRETltrAhHgRMCpuyT/3j7m1gOT4aH1QWC7ZPlc3hjL8ZJ+0mYX0H45vC8tOJ5DRFRkO/ZEHbDN4/L+sQKhwj1BlfnhugPvzEo24Cz6IJ9NOvsmICLzemEBMMKINGbAMYhI/tRneQ55tlCg4lgjX3rEyom+HcCKpVTGaBPlUA6p++Cfs9hAbF0I2wVuhAWPXNSPn4mAOwI8PEiP/klNIgmfQUwfVwMIfc44Uwng1FdGhwQCYjDx68b/r6TEo3Q0fZvnwVrIdtlxhEtPvmFJlPkaH0/fbW82/ufTmNxab5oJ9nr4CnHnvzEp3c3p4ImjKUJYESB+9+jW9/8cezdmgKoTAJrodjdr8K9dbDh542yGN0K9vG8eo/mcEPL+8nc5S5LObProWDpo8H5qFU7OnWtycymU+RrYw1IpKVn369D6HPHAXj7Dq4QQCBMIcVtrv1kZfukj2NRSbuDBKT8Y8ffyVDn46iNpC6DCvnGblntTrPfu9TVirVDahXTpLh1C9/vurJMme5C4sSl+BuoOcE2uMHZQYb6obWGbCRaDLAsedb/zIDbB5nbBiswjI/z1vfe/fu15LRdC0dbYZOw+NmoxynHn3XkxbrlXOrsM7bLfmzw3t/zXypSCjYOB81IuH4HgONx8P2hSYYheEK7C2c2QoQg68/rTPAVB+WUjDo3euQPm7ng4R10qkPfWfjKzDBR3CUt6AqKD+/7LO0wFJWyAFCyn3+96vfOlZyC9bSacwN1w8MHLe2VjX+fWbFGsUKLYYgurD74XNzXgpAOWXrwqjihp8cgcRbed+Osh1IZdBrnSJjHe/1O0jdAEx57ZfFkRsOVuCQpGIGah/umArWFzMLE73YQTuBmbnFB9WmCwY8jUyNc4uFdG64gNVD88N14vOUJAXeBZMBgCzCWWaBj17Mw87ijbl8+nzOZL2xC45lASk4KkkczluG5R9jflKcdGDG74IP2C4+dcaqu/aOvaQr/yqqE5ftyDLcCRDSDHbnC6pVO4yJ2TLMeQ1n3x7fMkyP9wEsCkCxLyl1d1WtZgO4p4J5776TGjbcOzXggEHOtPONzqzAQKEHF5mBu8JzGE5By8U+e8PqriZbsw8Xet9ZGKCXlt2xrRWeWOey3I3SO0ubXlNiIXSJdNy78B+vpqQ3KqIIH3mdqxaFL+gSAoCE4GL7vHpJw8iS+Q5rLNKWXKgN5bLeMNpbc2P0ShwUZ5ask0jqdEfd9lwLh2JrLzq61JfrbB2dwbVWYvmSrIzV9fczVWJBLMat2AdOl/ymR/evqgyoUh/uYxLhhrmLlQFfubomoZHVgO6GixdFSS50XTVERs2pM8xyl5pZ6DQ41a8tpWaFXCafE4dL89mnAGYynPlvKOL0goc0xLwZG/PaT0QVKEHgVNF/7r2pfPQe8dmMGStEVqxzkgQUWMRTu3skV6iDDWpP+swfPmLlLpsXd/c6bxMt3tMKnoyZTateOsEHTg7Mh097zhJvq4ngpYLkmnobAg5nxPaTQu4OxbrzxFv6nWHgT5bK3rvBGJ+ciJ5oCtwBJguFoqluDO/Rbg0rpdIQ1szIAq2SdEtYbSQxqNUs4RNrQXAreDdZR8WPrWB07QTcAh4mUf4pk7ns6KUmthZe+z/gKInGQHrkZEytMNgUppK2PI8XtSpZi65ozH8CDABTN7iElaMQcAAAAABJRU5ErkJggg==',
		likeaboss : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBNkNBNEEzODcyMjExRTA5REFCQjU4RUZFOTRCRUUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBNkNBNEE0ODcyMjExRTA5REFCQjU4RUZFOTRCRUUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE2Q0E0QTE4NzIyMTFFMDlEQUJCNThFRkU5NEJFRTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE2Q0E0QTI4NzIyMTFFMDlEQUJCNThFRkU5NEJFRTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6WYPzAAAABgFBMVEXV1dVfX19paWnOzs7MzMxVVVUxMTHIyMi4uLjCwsLZ2dklJSWmpqbo6OhiYmIdHR2urq7FxcWkpKS8vLzl5eWCgoLg4OCenp62trbe3t4pKSnb29uWlpaqqqqTk5NgYGA6OjoYGBg2NjaYmJh8fHwVFRWoqKh3d3eIiIihoaFwcHCAgICcnJyampp6enpGRkaUlJRCQkJQUFBtbW2GhoaEhIS6urpKSko0NDQsLCyxsbFkZGQJCQlAQEB4eHhTU1NaWlpYWFhNTU08PDwBAQFISEhmZmY+Pj4iIiIvLy8QEBBOTk4fHx9ERET+/v79/f37+/v8/Pz6+vrv7+/u7u7z8/P19fX4+Pj29vb5+fn39/fy8vLw8PDr6+vc3Nzn5+fR0dHLy8uQkJDm5ubGxsb09PTx8fHq6urW1tbX19fi4uJ1dXWPj4/S0tK/v7/j4+Pt7e3KysrT09Ps7OyysrKzs7NycnKKiorAwMC0tLSMjIx/f39dXV3d3d3///////9OWFfeAAAAgHRSTlP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ADgFS2cAAAR/SURBVHjaxJeJX9pIFMcDVA5B8EK2FJREWZFtdaHtAhXWK6vospOEcF/ifd/au2/+9eZARcwEt/3sZ+fDJwmZ+c68mffebyYU/olC/VcwSOX28u9hHin3rPAjZm8498rUyLv4P5s3QyNSZ8qvO6y0gz4vS9v/Xvywfj1pdLlFeOLICCDbcDPu5+OpseYlgjxURlct5S2+KywvkeAJZOY31vsa22+8a5Fw8BCfx9j0XA66w8g0k2ZTX9zhhdfRYCxppJ/V3tPTFnrgCWYXJ7wfeb/Zd17IVRv2xCxXBC7oGhIa6VwXGBDlDRek+4vPqcAKE4m9kj2FDBOjhrf2GdTucg14hL5BanBwPJIKKGWAOdhLuuhBRIalVpdJk9q7dEGKJYK4izBsx2OBlVX2sM3Xj+BCwqYaX8qaJlIJJr40E4v2HFFFzJ8NWevHk0CEMUxPq7U7844Vx1Z9vV4q5cW6dd7lVoK0ZK+RYICNYFWtzKau1AcIBSbGe3kxnKrKs1q23A/dAaNV2+1zKyswlPoOTYaFI4ePFiXuehwTYHye4G/rbp2i5mSx/xT8EQ5wv4cI942BVpaoLwtJE8an5JHXx0AvRRMVbPUBEf4Kesqyy8OXT0Q4583qyxYYTESzuYhNH+ZSZ+QguVhCoDftXbNADs+sdxvrwVYjOSUB76fzemYb/9DNZ8cSR9JpgHJ6TxdGzlkEJF8NRUFfSYTVUdxSaOiYk2DfwKCvYQVmlFdCGnCWh3ZNfbmIoJsA8k7zN5nNNpnr9gj/FLzCXTRMHmM7PlWyTa7MuP68r9gyMOLDpaS0FB+gEmKTbLq3EqJb4Qo5Kz3Id9+rUN5iyIRN3yxORpJ+5/JXw+zy0eu080JZBSIsVe1QvoV0anBHbsWLuf4g/fHEeny86cm1ZIEEA+R8mblQs8rdtdlj/rI97WQAr1Y9w3CvHFKpBKz2QndYMmnK9SisUXTrwzwH3Y4VgJts7eFqynOMDJSSv5OS9N5sbuVzZzhK+5TbiM/Yg7sKzQWT+nbYtc4tFjvCv6zVdEcGnE/2auWRSBcxOBlOF0axI62ZAe+SjkH59GylPTChDZYX82atrAnDUr9sVmCR11AIGUYc5Nf2sTZ8bJT75hdnalgTlmpDGaSpe5KmmZUURnPB6qPuVXg3eEASntqaGmHcBH0CGq4C+G2BKFu8q7cVL71xw7agurV9tauZPGCCZIIz1HoP5Yu5+CbFK2rRggGEHme2wpHktuHl7lQCXb21M/07964CtMm6IvEoYYcDjllXptoakDuZDxhs6mGOAjhkY0yubHDyBHr6XUe+8FaD2S8qIxdcyXrYLylmT1mbbi49cKNyukuwsghT+GUsIp1TpfmcFrVHznq3OjNVNMeSdRl+/yw6JCR+BcCkDWrT3bmYjjdTrEeG3fvNTGmY9gNxd2tGO6v8vsnwAgCFpy3gOcC1KmgWeauvZAZafwT5FIs4NPx88DJRBArEshIfra8gQHdXOVFBibwXiawiu6ggSFeuyMkebEjw//ZF912AAQBYCzih+KIrdwAAAABJRU5ErkJggg==',
		'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFS0tL/f39RUVF6NzZtS4wOjo6iYmJKysr2gIFxsbG6enp9dracDE27u7uMzMzkZGR9ufnzpiVY2Nj4uLihoaGyQEDcAQGCwsLWVlZ8vLyylFP6be0IyMjFRUV4peZsgECAwMD9fX1mpubUlJS4wUJcHBw0tLS2dnZpgEBenp6oaGhGhoatLS0uU5LsLCwaGlqysrKwsLCra2t5ubm+vr6vb29NgEGrAEBSgIFdnZ2qqmpqQEAxGdlxHNzgYGBfnx85G1yzs7O5OTk7OPkVFRU+Pj4wMDApqam3NzcrQQKqgEEqgAA7QMEqAACrgEF4AECvQEBqgYH4ggJqgECpAUCqQEBpwEEHQMDqAQDowMCqwIDqAID39/flZWVCQYH6Y+Y/Pf36uvs/fv6pg8LQUFB4Lez03p+qg4W1xEQUUFDYEdHuLi4EBARBQYGkhgb6KOkrhMT5AgEwUE/rAYI5o2JrKuqyHZ2wDc8qgEB06Kl58rDwX18pgEIAQEBAAAA////ZbNuqwAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAADvklEQVR42pyW+1faSBTHAxojtgYXxUA3KaMIBmPbpahB7eJ2bbc2FBA1SMFmt7vss5N9dR/sI5d/vTMT7Tl9MRnu4aeBD9/7npFG4yxWrGVUtZb9wNfSWPi2DsTQi4ngFASAEKRWJoAvFIIGCPTPJ4C38kBYBNbiJG7vUjaYTHlU9Ig0gFKZBI6VqN8Qn58EHiU0IAlf2poAXkyqCgYkFcXrnC0PEOCCqh2NhOHKgQUkXnkvuVkSjbmsIBouQOL+MyO/IgRnM3BphY1dGZaE4AQO0QCSdzMPICkCZyXmMoNXVdmqiMBlH66Un+0qcl4kYVsZQFcxS6ql1ETgbUyrFCpbWJETAvB8ns7xJaxpqnEhAJc1uj9C87Emi8xzjKQaBVqo7BNldS46nCBTDAMlVEYIW7qA8hJ1uWZcxgw68gU2SYEUWS95NGlkeYKPYDM6nCQ/lyWggYOGNIygFB2+6wWgkpADUuvNeIGMyAMBmLjtE1XitLL+xaIFOC6QMEJSl8kn/2LvwJf1ZHQ4hUiLBCzTHtZAk0BgMCS66S/bk1YLISU6nIEw02GTBMQGkeFFWbMMBK+ViRv4TiIinH0ky7L3ehmEA2bdno/m9qpPaxyEKKsYwY3C80jwAfLPl8/pBYlYxDR+8jfq/Qjwwk+AvMfLAcsVazNgyfdmOPC1m9/9de/n69d3lnvVanXnHGM/rBZ1fokD30inc2ZumG7Nzs62Wk9++HOvNsAsA4SXno+Hb3XMft/p2rmzZi6Xa518NXpYKRd0n8Vdio2H7z1uuH3bcf93++bTZutkgS3iWJ6Gj0octz9tm3XTHrr7ruuaRPnb8HhAQ9aSPPhlp94hMLF9Nzd7BSsUxo848H/txrBTd5nt2+mTj9npnE6bxdjmwB+9bPQbp4wdnu6n134J97hBm8Q64sPmaY/BdtdMr33JTvcwbVCV157/tJ1Oz+k0Gr262bXTazfDq8ugldZ58LVv2o7Zcxy71+3aZ8dP/ghvAYPOd5wHL3zfHDpds27bp53e0+PfPmOnGxrNdp4HT03/2radZrPpds/q9nErhGfYxXeHB38dO/zxfKdaXb514/fp6em//2WnNTrVUODOc2XA7nWisnA4NXXIunklxXYD1+25OPud8sb8HKlsKCUevK7R2bfKb21EOpR8mCojyLz5yr2Q6Q7luz0q0jv17ZWxHbdIuq3iw/Hw1gZpRG/9nadV2aLvolWOcoLsrJnYuw+zo5RiaXkOTF5RH3gHFIufVHirt4y99yi/314JMABjfCeCt8CeFwAAAABJRU5ErkJggg=='
	};

	function init() {
		if (isTwitterReady()) {
			var array = document.getElementsByClassName("twitter-hashtag");
			var len = array.length;
			while(len--){	
				var text = array[len].children[1].textContent.toLowerCase();
				var div = array[len].parentNode.parentNode.parentNode.parentNode.parentNode;
				console.log(eval("pics."+text));
				div.style.backgroundImage="url('"+ eval("pics."+text) +"')";
				div.style.backgroundPosition="right center";
				div.style.backgroundRepeat="no-repeat";
				div.style.backgroundSize="60px auto";
			}
		} else if (nb_try--){
			window.setTimeout(init, 1000); // loop for waiting
		}
	}

	function isTwitterReady() {
		return typeof $ != 'undefined' && document.getElementsByClassName("twitter-hashtag").length;
	}
	
	init();
}

var stuf_script = document.createElement("script"); // add new script element
stuf_script.id = 'stuf_script';
stuf_script.text ="(function"+ stuf.toString().substr(13)+"\n"+ ')()';
document.body.appendChild(stuf_script); //inject
