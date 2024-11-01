$(document).ready(function () {
  const jobData = {
    "Webエンジニア": {
      languages: "HTML, CSS, JavaScript",
      alumni: [
        { name: "田中 太郎", course: "Labコース", generation: "5期生", facebook: "tanaka_taro_fb" },
        { name: "鈴木 次郎", course: "Devコース", generation: "7期生", facebook: "suzuki_jiro_fb" }
      ]
    },
    "ソフトウェアエンジニア": {
      languages: "Java, C++",
      alumni: [
        { name: "山田 花子", course: "Labコース", generation: "3期生", facebook: "yamada_hanako_fb" }
      ]
    },
    "データ関連": {
      languages: "Python, SQL",
      alumni: [
        { name: "佐藤 一郎", course: "Devコース", generation: "2期生", facebook: "sato_ichiro_fb" }
      ]
    },
    "AI/ML関連": {
      languages: "Python, R",
      alumni: [
        { name: "木村 美咲", course: "Labコース", generation: "8期生", facebook: "kimura_misaki_fb" }
      ]
    },
    "インフラ/クラウド関連": {
      languages: "AWS, Azure, Linux",
      alumni: [
        { name: "井上 武", course: "Devコース", generation: "6期生", facebook: "inoue_takeshi_fb" }
      ]
    },
    "プロダクトマネジメント関連": {
      languages: "特定言語は不要ですが、プロジェクト管理ツールや基本的なコーディング知識が有用です。",
      alumni: [
        { name: "中村 玲子", course: "Labコース", generation: "4期生", facebook: "nakamura_reiko_fb" }
      ]
    },
    "セキュリティ関連": {
      languages: "Python, Bash, PowerShell",
      alumni: [
        { name: "松本 和夫", course: "Devコース", generation: "5期生", facebook: "matsumoto_kazuo_fb" }
      ]
    },
    "ITサポート/運用関連": {
      languages: "SQL, システム管理スクリプト",
      alumni: [
        { name: "高橋 明", course: "Labコース", generation: "7期生", facebook: "takahashi_akira_fb" }
      ]
    },
    "UI/UXデザイナー": {
      languages: "HTML, CSS, JavaScript",
      alumni: [
        { name: "加藤 里奈", course: "Labコース", generation: "9期生", facebook: "kato_rina_fb" }
      ]
    }
  };

  const quotes = [
    { person: "スティーブ・ジョブズ (Apple 共同創業者)", quote: "あなたの時間は限られている。だから、他人の人生を生きることで無駄にしないでください。" },
    { person: "ビル・ゲイツ (Microsoft 共同創業者)", quote: "自分が最も情熱を持てることを見つけることが、成功への近道です。" },
    { person: "マーク・ザッカーバーグ (Facebook 共同創業者)", quote: "人々が自分の意見を発信できる場所を作ることが、私の目指すところです。" },
    { person: "レイ・カーツワイル (未来学者、発明家)", quote: "未来は、我々の思考の結果である。技術は未来を創造する力を持っている。" },
    { person: "アラン・ケイ (計算機科学者)", quote: "最も良い方法は、未来を創ることである。" },
    { person: "リンス・トーバルズ (Linux 創始者)", quote: "ソフトウェア開発は、難しい問題を解決するためのゲームです。楽しむことが重要です。" },
    { person: "ジェフ・ベゾス (Amazon 創業者)", quote: "失敗を恐れずに、新しいことに挑戦し続けることが、革新の鍵です。" },
    { person: "サティア・ナデラ (Microsoft CEO)", quote: "革新は、常にお客様のニーズから生まれる。" },
    { person: "ユウキ・イシハラ (起業家)", quote: "何事も、成し遂げるまではいつも不可能に見える。" }
  ];

  $("#jobSelect").change(function () {
    const selectedJob = $(this).val();
    const jobInfo = jobData[selectedJob];
    if (jobInfo) {
      let outputText = `<h2>必要なプログラミング言語:</h2><p>${jobInfo.languages}</p><h2>卒業生情報</h2><ul>`;
      jobInfo.alumni.forEach(alumnus => {
        outputText += `<li>名前: ${alumnus.name}、 コース: ${alumnus.course}、期: ${alumnus.generation}、Facebook: ${alumnus.facebook}</li>`;
      });
      outputText += `</ul>`;
      $("#output").html(outputText);
    } else {
      $("#output").html("<p>選択された職種には情報がありません。</p>");
    }
    const randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
    $("#quote").html(`<p>"${randomQuote.quote}" - ${randomQuote.person}</p>`);
  });
});