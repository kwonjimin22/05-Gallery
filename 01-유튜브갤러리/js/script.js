$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe'); /* 이렇게 찾으면 범위가 줄어들기 때문에 컴퓨터가 좀 더 편하게 찾음 */
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    console.log($(this));

    // 해당 li의 data-link 값을 가져와서 videolink변수에 담자
    const videoLink = $(this).attr('data-link');
    // 해당 li의 text 값을 가져오자
    const videoTitle = $(this).text();
    console.log(videoLink);
    console.log(videoTitle);

    // 그 값을 iframe의 src 값으로 세팅
    $video.attr('src', videoLink);
    // videoTitle을 넣어주기
    $videoWrap.find('.video-title').text(videoTitle);

    // $videoWrap.find('.video').text($videoText);

    // $dim을 보이게 - fadeIn()
    $dim.fadeIn();
    // $videoWrap을 보이게 - addClass()
    $videoWrap.addClass('active');
  });

  // $btnClose를 클릭했을 때
  $btnClose.on('click', () => {
    // $dim을 사라지게 - fadeIn()
    $dim.fadeOut();
    // $videoWrap을 사라지게 - addClass()
    $videoWrap.removeClass('active');
    // 영상정보 초기화, 새로눌러도 기존 내용에서 변경되니까 이전 값 지우기
    $video.attr('src', '');
    $videoWrap.find('.video-title').text('');
  });
});
