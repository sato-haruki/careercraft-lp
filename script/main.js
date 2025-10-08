(function() {
    var ham = document.querySelector('#js-hamburger');
    var nav = document.querySelector('#js-nav');
    if (!ham || !nav) return;
    ham.addEventListener('click', function () {
      ham.classList.toggle('active');
      nav.classList.toggle('active');
    });

  // close menu when any nav link is clicked
  var navLinks = document.querySelectorAll('#js-nav a');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      ham.classList.remove('active');
      nav.classList.remove('active');
    });
  });
  })();

// header background on scroll
(function() {
  var headerInner = document.querySelector('.header__inner');
  if (!headerInner) return;
  var onScroll = function() {
    if (window.scrollY > 10) {
      headerInner.classList.add('is-scrolled');
    } else {
      headerInner.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  // initialize on load
  onScroll();
})();

// コース切り替え機能
(function() {
  var courseButtons = document.querySelectorAll('.course-menu button');
  var courseDetails = document.querySelectorAll('.course-detail-bg');
  
  if (!courseButtons.length || !courseDetails.length) return;
  
  courseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // 全てのボタンからactiveクラスを削除
      courseButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      
      // 全てのコース詳細からactiveクラスを削除
      courseDetails.forEach(function(detail) {
        detail.classList.remove('active');
      });
      
      // クリックされたボタンにactiveクラスを追加
      button.classList.add('active');
      
      // 対応するコース詳細を表示
      var courseType = '';
      if (button.classList.contains('course-menu-web')) {
        courseType = 'course-web';
      } else if (button.classList.contains('course-menu-design')) {
        courseType = 'course-design';
      } else if (button.classList.contains('course-menu-ai')) {
        courseType = 'course-ai';
      } else if (button.classList.contains('course-menu-marketing')) {
        courseType = 'course-marketing';
      } else if (button.classList.contains('course-menu-video')) {
        courseType = 'course-video';
      } else if (button.classList.contains('course-menu-programming')) {
        courseType = 'course-programming';
      }
      
      var targetCourse = document.querySelector('.' + courseType);
      if (targetCourse) {
        targetCourse.classList.add('active');
      }
    });
  });
})();