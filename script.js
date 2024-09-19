document.addEventListener('DOMContentLoaded', function() {
  const texts = document.querySelectorAll('.text');

  // 각 텍스트를 글자 단위로 분리하여 <span> 태그로 감쌈
  texts.forEach(text => {
    const characters = text.innerText.split('');
    text.innerHTML = ''; // 기존 텍스트를 비움

    characters.forEach(char => {
      const span = document.createElement('span');
      span.innerText = char;
      text.appendChild(span);
    });
  });

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // 스크롤 위치
    const windowHeight = window.innerHeight; // 창 높이

    texts.forEach(text => {
      const spans = text.querySelectorAll('span'); // 각 글자를 가져옴
      const textTop = text.getBoundingClientRect().top;

      // 텍스트가 화면에 보이기 시작하는 위치 (조정 가능)
      if (textTop < windowHeight - 100) {
        const progress = Math.min(
          (windowHeight - textTop) / windowHeight, 1
        ); // 텍스트가 보이는 비율

        // 글자 하나씩 검정색으로 변환
        const visibleChars = Math.floor(progress * spans.length);
        spans.forEach((span, index) => {
          if (index < visibleChars) {
            span.classList.add('visible');
          } else {
            span.classList.remove('visible');
          }
        });
      }
    });
  });
});



document.getElementById('videoA').addEventListener('click', function() {
  changeVideo('https://www.youtube.com/embed/MPmbOhPzS3s?si=qTMg2zBKmjlQlrsy');
});

document.getElementById('videoB').addEventListener('click', function() {
  changeVideo('https://www.youtube.com/embed/-X0EvOCVJ9o?si=eEQM7vGNj3kG6Va0');
});

document.getElementById('videoC').addEventListener('click', function() {
  changeVideo('https://www.youtube.com/embed/zfRD5Snqycw?si=5GJXLIpKPetySDnF');
});

document.getElementById('videoD').addEventListener('click', function() {
  changeVideo('https://www.youtube.com/embed/tkPOi8yWKT0?si=IS1LO9_IU1TFv_mV');
});


function changeVideo(videoUrl) {
  const youtubePlayer = document.getElementById('youtubePlayer');
  youtubePlayer.src = videoUrl; // 새로운 YouTube 영상 링크로 설정
}

// Get references to the image and audio elements
const audioBtn = document.getElementById('audio-btn');
const audio = document.getElementById('audio');

// Set a variable to track the audio state
let isPlaying = false;

// Function to toggle play/pause and change the image
audioBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        audioBtn.src = 'image/off.png'; // Change to 'off' image when paused
    } else {
        audio.play();
        audioBtn.src = 'image/on.png'; // Change to 'on' image when playing
    }
    isPlaying = !isPlaying; // Toggle the state
});

