$(function () {

    /*
     * Slideshow
     */
    $('.slideshow').each(function () {

    // 変数の準備
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        var $container = $(this),                                 // a
            $slideGroup = $container.find('.slideshow_slides'),   // b
            $slides = $slideGroup.find('.slide'),                 // c
            $nav = $container.find('.slideshow_nav'),             // d
            $indicator = $container.find('.slideshow_indicator'), // e
            // スライドショー内の各要素の jQuery オブジェクト
            // a スライドショー全体のコンテナー
            // b 全スライドのまとまり (スライドグループ)
            // c 各スライド
            // d ナビゲーション (Prev/Next)
            // e インジケーター (ドット)

            slideCount = $slides.length, // スライドの点数
            indicatorHTML = '',          // インジケーターのコンテンツ
            currentIndex = 0,            // 現在のスライドのインデックス
            duration = 500,              // 次のスライドへのアニメーションの所要時間
            easing = 'easeInOutExpo',    // 次のスライドへのアニメーションのイージングの種類
            interval = 7500,             // 自動で次のスライドに移るまでの時間
            timer;                       // タイマーの入れ物


    // HTML 要素の配置、生成、挿入
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 各スライドの位置を決定し、
        // 対応するインジケーターのアンカーを生成
        $slides.each(function (i) {
            $(this).css({ left: 100 * i + '%' });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });

        // インジケーターにコンテンツを挿入
        $indicator.html(indicatorHTML);


    // 関数の定義
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 任意のスライドを表示する関数
        function goToSlide (index) {
            // スライドグループをターゲットの位置に合わせて移動
            $slideGroup.animate({ left: - 100 * index + '%' }, duration, easing);
            // 現在のスライドのインデックスを上書き
            currentIndex = index;
            // ナビゲーションとインジケーターの状態を更新
            updateNav();
        }

        // スライドの状態に応じてナビゲーションとインジケーターを更新する関数
        function updateNav () {
            var $navPrev = $nav.find('.prev'), // Prev (戻る) リンク
                $navNext = $nav.find('.next'); // Next (進む) リンク
            // もし最初のスライドなら Prev ナビゲーションを無効に
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }
            // もし最後のスライドなら Next ナビゲーションを無効に
            if (currentIndex === slideCount - 1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            // 現在のスライドのインジケーターを無効に
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        // タイマーを開始する関数
        function startTimer () {
            // 変数 interval で設定した時間が経過するごとに処理を実行
            timer = setInterval(function () {
                // 現在のスライドのインデックスに応じて次に表示するスライドの決定
                // もし最後のスライドなら最初のスライドへ
                var nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }

        // タイマーを停止る関数
        function stopTimer () {
            clearInterval(timer);
        }


    // インベントの登録
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // ナビゲーションのリンクがクリックされたら該当するスライドを表示
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });

        // インジケーターのリンクがクリックされたら該当するスライドを表示
        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });

        // マウスが乗ったらタイマーを停止、はずれたら開始
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });


    // スライドショーの開始
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

        // 最初のスライドを表示
        goToSlide(currentIndex);

        // タイマーをスタート
        startTimer();

    });



    /*
     * ドロップダウン
     */

    $("#dinner_menu").click(function(){
        if ( $("#dinner_list").hasClass('hide_list')) {
            $("#dinner_list").slideDown();
            $("#dinner_list").toggleClass('hide_list');
        }
        else{
            $("#dinner_list").slideUp();
            $("#dinner_list").toggleClass('hide_list');
        }
    });
    $("#lunch_menu").click(function(){
        if ( $("#lunch_list").hasClass('hide_list')) {
            $("#lunch_list").slideDown();
            $("#lunch_list").toggleClass('hide_list');
        }
        else{
            $("#lunch_list").slideUp();
            $("#lunch_list").toggleClass('hide_list');
        }
    });
    $("#genre_menu").click(function(){
       if ( $("#genre_list").hasClass('hide_list')) {
            $("#genre_list").slideDown();
            $("#genre_list").toggleClass('hide_list');
        }
        else{
            $("#genre_list").slideUp();
            $("#genre_list").toggleClass('hide_list');
        }       
    });
    $("#floor_menu").click(function(){
       if ( $("#floor_list").hasClass('hide_list')) {
            $("#floor_list").slideDown();
            $("#floor_list").toggleClass('hide_list');
        }
        else{
            $("#floor_list").slideUp();
            $("#floor_list").toggleClass('hide_list');
        } 
    });
    $("#alcohol_menu").click(function(){
       if ( $("#alcohol_list").hasClass('hide_list')) {
            $("#alcohol_list").slideDown();
            $("#alcohol_list").toggleClass('hide_list');
        }
        else{
            $("#alcohol_list").slideUp();
            $("#alcohol_list").toggleClass('hide_list');
        }         
    });


    /*
     * ページ内リンク
     */

     $('a[href^=#]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });



});
