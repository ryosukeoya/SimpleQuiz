const dataset = {
  Engineer: {
    FrontEnd: [
      {
        question:
          '下記のJavaScriptのライブラリ、フレームワークの中で仮想DOMの技術を採用していないものはどれか？',
        answers: ['Vue', 'React', 'jQuery', 'Angular'],
        correct: 'jQuery',
        explain: [
          '良くも悪くも縛りが優しく、中小規模のアプリを作るのに適しています！',
          'ルールが厳格で堅牢なアプリケーションが作ることができます！',
          'jQueryは実際にブラウザのDOM操作を行います！',
          'MVCモデルを採用しておりフルスタックな機能を提供するフレームワークです',
        ],
      },
      {
        question: '静的サイトジェネレーターのメリットとして当てはまらないものはどれか？',
        answers: [
          'ページの読み込みが早くなる',
          'SEOがよくなる',
          'SPAと比較して動的なOGP対応が可能',
          'リアルタイムに情報が反映されるようになる',
        ],
        correct: 'リアルタイムに情報が反映されるようになる',
        explain: [
          '事前にレンダリングしてあるファイルをレスポンスとして返すので表示速度は上がります',
          'SSGもSSR同様サーバー側でレンダリングするのでSEOはよくなります（今のクローラーはCSRでもサイトの中身がわかりますがSSGを使った方がクローラーは早くサイトの情報を認識することができます）',
          'SPAだとサーバのレスポンスが返ってくるのはサイトにアクセスした時だけなので動的なOGPはできません',
          'ビルドをした時にプレレンダリングされHTMLを作るので情報の反映は遅れます',
        ],
      },
      {
        question: 'Webpackについて説明しているものはどれか？',
        answers: [
          'モジュールパンドラと呼ばれ複数のファイル（モジュール）を１つにまとめて出力する',
          'JavaScriptのコードを変換（トランスパイル）して、機能が対応していないブラウザでもコードが実行されるようにするもの',
          'Node.jsのパッケージ（モジュール）をインストールしたり管理したりする',
          'コンピュータプログラムなどのソースコードを読み込んで内容を分析し、問題点を指摘してくれる静的解析ツール',
        ],
        correct: 'モジュールパンドラと呼ばれ複数のファイル（モジュール）を１つにまとめて出力する',
        explain: [
          '依存関係のあるJavaScriptのモジュールをよしなにやって1つにまとめて出力してくれます！',
          'これはBabelの機能です！',
          'これはパッケージ管理システムと呼ばれnpmやyarnなどがそれにあたります',
          'これはLinterと呼ばれる機能でJavaScriptではESLintが有名です',
        ],
      },
      {
        question: 'デザイン4つの基本原則についての説明として間違っているのはどれか？',
        answers: [
          '近接：関連する情報を近づけることで、そのページの構造と内容の視覚的な手掛かりを提供することができる',
          '反復：視覚的要素を反復することで、一体感が生まれるデザインを作ることができます',
          'コントラスト：目立たせたものにはコントラストをつけます。ただし、強くコントラストしすぎると統一感が崩れるので少しにしましょう',
          '整列：要素を整列させ揃えることで一体感を持たせることができます',
        ],
        correct:
          'コントラスト：目立たせたものにはコントラストをつけます。ただし、強くコントラストしすぎると統一感が崩れるので少しにしましょう',
        explain: [
          'デザインの意味を考えるようにしよう！',
          'デザインの意味を考えるようにしよう！',
          'コントラストをつけるなら大きくつけましょう、これを「ノンデザイナーズ・デザインブック」では「衝突」と読んでいます',
          'デザインの意味を考えるようにしよう！',
        ],
      },
    ],
    BackEnd: [
      {
        question:
          '問1 トランスポート層のプロトコルであり、信頼性よりもリアルタイム性が重視される場合に用いられるものはどれか?',
        answers: ['HTTP', 'UDP', 'TCP', 'IP'],
        correct: 'UDP',
        explain: [
          'HTTPはアプリケーション層のプロトコルです',
          'UDPはトランスポート層のプロトコルで信頼性よりも速度を重視したものです',
          'TCPはトランスポート層のプロトコルですが違います',
          'IPはインターネット層のプロトコルです',
        ],
      },
      {
        question:
          'LaravelやRails、DjangoなどのMVCモデルについて適切でないこと言っているのはどれか(Djangoは正確にはMTV)？',
        answers: [
          'MはModelのことであり、データベースに関する処理について担当します',
          'VはViewのことであり、ユーザに見せる画面を担当します',
          'CはControllerのことであり、ModelとViewの制御の振り分けをします',
          'フルスタックフレームワークでこのフレームワークだけでサービスを作る使い方になります',
        ],
        correct:
          'フルスタックフレームワークでこのフレームワークだけでサービスを作る使い方になります',
        explain: [
          '合ってます！',
          '合ってます！',
          '合ってます！',
          'Viewを使わずにAPIを作るだけにすることはできます！',
        ],
      },
      {
        question: 'computerクイズ3',
        answers: ['1.3', '2.3', '3.3', '4.3'],
        correct: '2.3',
        explain: ['か', 'き', 'く', 'け'],
      },
      {
        question: 'computerクイズ4',
        answers: ['1.4', '2.4', '3.4', '4.4'],
        correct: '2.4',
        explain: ['さ', 'し', 'す', 'せ'],
      },
    ],
  },

  Anime: {
    Kimetu: [
      {
        question: '鬼滅隊が使う刀の名前は？',
        answers: ['斬魄刀', '黒刀・夜', '鏡花水月', '日輪刀'],
        correct: '日輪刀',
        explain: [
          'BLEACHの死神が使う刀ですw',
          'ワンピースの鷹の目のミホークの刀ですw',
          'BLEACHに出てくる対象を誤認させることができる「完全催眠」が使える刀です！',
          '太陽に一番近く一年中日光が射すという陽光山で採取できる原料で作成されます。人食いを行う鬼を、日光以外で倒すことができる唯一の武器です',
        ],
      },
      {
        question: '「水の呼吸」を使う水柱の名前は？',
        answers: ['嘴平 伊之助', '冨岡義勇', '宇髄 天元', '胡蝶 しのぶ'],
        correct: '冨岡義勇',
        explain: [
          '猪突猛進！猪突猛進！',
          '他の柱から嫌われてるらしい。。',
          '派手な人です。',
          'そんなだからみんなに嫌われるんですよ',
        ],
      },
      {
        question: '何故、下弦の鬼は殺されたのか？',
        answers: [
          '強いから',
          '弱いから',
          '作者が下弦の鬼編を書くのがめんどくさくなったから',
          'パワハラ上司無惨の機嫌がたまたま悪かったから',
        ],
        correct: '弱いから',
        explain: [
          'わざと間違えたでしょ笑',
          '簡単すぎたかw',
          '合ってるかもしれないけどそれはなしww',
          '切れたら怖い無惨！',
        ],
      },
      {
        question: '鬼滅隊入隊試験の最終選別が行われた山の名前は？',
        answers: [
          '藤襲山（ふじかさねやま）',
          '那田蜘蛛山（なたぐもやま）',
          '陽光山（ようこうざん）',
          '狭霧山（さぎりやま）',
        ],
        correct: '藤襲山（ふじかさねやま）',
        explain: [
          '鬼が嫌う藤の花が一年中咲いています！',
          '下弦の伍、累がいた山ですね！',
          'この山は一年中陽が差している山で、日輪刀の原料である、猩々緋砂鉄(しょうじょうひさてつ)と猩々緋鉱石(しょうじょうひこうせき)がとれるます！',
          '鬼滅隊入隊試験のために炭治郎が修行した山です、霧が濃く空気がとても薄いです!',
        ],
      },
    ],
    Eva: [
      {
        question:
          'ヤシマ作戦で使用した「ポジトロンスナイパーライフル」の発射に使用した電力は何kWか？',
        answers: ['53万kW', '100kW', '1億2000万kW', '1億8000万kW'],
        correct: '1億8000万kW',
        explain: [
          'フリーザ第一形態の戦闘力！',
          'フリーザ第二形態の戦闘力!',
          'フリーザ最終形態の戦闘力！',
          '日本中の電力が集められました！',
        ],
      },
      {
        question: 'ミサトさんがよく飲んでいるビールの銘柄はなんでしょう？',
        answers: ['アサヒビール', 'プレモル', 'エビスビール', '黒ラベル'],
        correct: 'エビスビール',
        explain: [
          'キリッとした味わい！',
          'コクのある味わい！',
          '深みのあるどっしりとした味わい！自分もエビス派です（ほとんど飲めないけど）',
          'バランスがいい!',
        ],
      },
      {
        question: '新劇場版:破でマリが使った２号機の裏コードは？',
        answers: ['ザ・ワールド', 'ザ・ビースト', 'コード７７７', 'コード００７'],
        correct: 'ザ・ビースト',
        explain: [
          '残念！ザ・ビーストでした。',
          '流石です！',
          '惜しい！コード７７７はQでアスカが使用しました。',
          '残念！ザ・ビーストでした。',
        ],
      },
      {
        question: '新劇場版：破の最後のニアサードインパクトシーンで流れていた曲はなに？',
        answers: ['翼をください', 'Beautiful World', '桜流し', 'One Last Kiss'],
        correct: '翼をください',
        explain: [
          '簡単すぎたか笑、名シーンですね',
          'EDで流れます、いい曲ですよね',
          '新劇場版:Qの主題歌です！',
          'シン・エヴァンゲリオン劇場版𝄇の主題歌です！',
        ],
      },
    ],
  },
  Game: {
    FF10: [
      {
        question: '主人公の名前は？',
        answers: ['アーロン', 'クラウド', 'ユウナ', 'ティーダ'],
        correct: 'ティーダ',
        explain: [
          'かっこいいおじさんですが主人公ではありません笑',
          'FF7の主人公です！',
          'ヒロインですが主人公ではありません！',
          'FF10は名作ですね!',
        ],
      },
      {
        question: 'シンがいない数年間はなんと呼ばれているか？',
        answers: ['トキ節', ' キイ節', 'ナギ節', 'シン節'],
        correct: 'ナギ節',
        explain: [
          'ナギ節でした！',
          'ナギ節でした！',
          'さすがです！ナギとは日本語で言えば海の無風を表す凪、シンがいない波風の立たない短い平和の期間に由来します',
          'ナギ節でした！',
        ],
      },
      {
        question: 'アルベド語辞書は全何巻？',
        answers: ['23巻', '26巻', '30巻', '47巻'],
        correct: '26巻',
        explain: [
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！',
          'ラヌダベヌ！（さすがです！）',
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！',
          'アルファベットが26文字なので、海外版も想定して26冊になったらしいよ！!',
        ],
      },
      {
        question: 'ジェクト曰く、アーロンの性格は？',
        answers: ['明るい', 'カタブツ野郎', '遊ばなすぎ', 'へなちょこ'],
        correct: 'カタブツ野郎',
        explain: [
          '明るくはないですねｗ',
          'ユウナレスカ戦の回想シーンでジェクトが実際に言っています！',
          '言いそうだけど違いますｗ',
          '言いそうだけど違いますｗ',
        ],
      },
    ],
  },
};

export default dataset;
