/**
 * サイト内の文言を一括管理（TIAM CLINIC 福利厚生）
 */
export const site = {
  name: "TIAM CLINIC 福利厚生",
  nameEn: "TIAM BENEFIT",
  /** ヘッダー用ロゴ（2行） */
  logoLine1: "TIAM",
  logoLine2: "BENEFIT",
  tagline: "採用力と社員満足度を最大化",
  companyName: "TIAM CLINIC GINZA",
  copyright: "©2025 TIAM CLINIC GINZA",
} as const;

export const nav = {
  top: "TOP",
  about: "サービスとは",
  reasons: "お悩み",
  benefits: "特典",
  flow: "導入の流れ",
  why: "選ばれる理由",
  director: "理事長",
  voices: "導入企業の声",
  faq: "FAQ",
  news: "お知らせ",
  terms: "利用規約",
  privacy: "プライバシーポリシー",
  company: "運営会社",
  ctaIntroduce: "LINEで導入相談",
  ctaContact: "電話で相談",
} as const;

/** LINE公式・電話 */
export const contact = {
  lineUrl: "https://page.line.me/718awdjv",
  tel: "0362806007",
  telDisplay: "03-6280-6007",
} as const;

/** SP用固定下部CTAバー */
export const mobileCtaBar = {
  heading: "TIAM BENEFITの特典",
  ctaIntroduce: "導入はこちら",
  ctaContact: "サービスのご相談",
  introduceHref: "https://page.line.me/718awdjv",
  contactHref: "https://page.line.me/718awdjv",
} as const;

export const hero = {
  subTitle: "美容医療サブスクリプションのご提案",
  titleLine1: "社員の採用力と",
  titleHighlight1: "満足度",
  titleMiddle: "を高める",
  titleHighlight2: "美容福利厚生",
  titleLine2: "",
  /** 右側CTAパネル */
  panelNoFee: "月額16,500円の定額導入",
  panelTitle: "社員全員が美容医療を40%OFFで受けられる新しい仕組み",
  categories: [
    { label: "LINEで導入相談", href: "https://page.line.me/718awdjv" },
    { label: "プラン詳細を見る", href: "#benefits" },
  ],
} as const;

/** ヒーロー直下の4枚カード */
export const heroCards = [
  { line1: "従業員満足度", line2: "向上・定着率UP" },
  { line1: "OFFICIAL", line2: "SNS ACCOUNT" },
  { line1: "定額で人数無制限", line2: "コスト一定" },
  { line1: "給与UPより", line2: "コスト効率が高い" },
] as const;

export const intro = {
  text: "給与アップよりもコスト効率が高く、即戦力人材に響く。月額16,500円の定額導入で、社員全員が美容医療を40%OFFで受けられる新しい仕組みです。",
  statLabel: "割引率",
  statValue: "40",
  statUnit: "% OFF",
  statNote: "対象施術が福利厚生価格でご利用いただけます",
} as const;

/** こんなお悩みはありませんか？ */
export const reasons = {
  title: "こんなお悩みはありませんか？",
  lead: "人材確保の難易度が上がる中、従来の対策では限界がきています。",
  items: [
    {
      title: "採用競争の激化",
      description: "求人募集を出しても同業他社との差別化が難しく、優秀な人材が集まらない。",
    },
    {
      title: "給与アップの限界",
      description: "給与を上げても社会保険や税金の負担が重く、社員の手取りは思ったほど増えない。",
    },
    {
      title: "福利厚生費の増大",
      description: "一般的な福利厚生は「人数 × コスト」。社員が増えるほど負担が青天井に。",
    },
  ],
} as const;

/** About セクション 4部構成 */
export const aboutIntro = {
  sectionLabel: "About",
  sectionSubLabel: "TIAM BENEFITとは",
  ctaCheckLines: [
    "TIAM CLINICがワンストップで予約サポート",
    "福利厚生価格で銀座のクリニックを利用可能",
  ],
  ctaIntroduce: "LINEで導入相談",
  ctaContact: "サービスのご相談はこちら",
  /** Point 01: About TIAM benefits */
  point01: {
    pointNumber: "01",
    verticalLabel: "About TIAM benefits",
    logoText: "TIAM BENEFIT",
    leftDescription:
      "TIAM CLINICが提供する「TIAM BENEFIT」は、時代の変化に先駆けて誕生した、美容医療に特化した福利厚生サービスです。企業の採用力・社員満足度の向上を支援しながら、従業員一人ひとりのQOL（Quality of Life）向上を実現します。銀座のクリニックと専任サポートを組み合わせ、誰もが気軽に、安心して利用できる環境を整えています。",
    rightHeading: "TIAMだから、\nできる。",
    rightDescription:
      "私たちは、美容医療をはじめとする多彩なサービスを通じて、人材定着やライフサポートに関する課題解決を支援します。従業員一人ひとりが自分らしく活躍できる環境づくりをお手伝いします。",
    challenges: [
      "採用競争の激化と福利厚生の差別化",
      "健康経営・従業員エンゲージメント向上",
      "離職率低下・人材定着のための施策不足",
    ],
  },
  /** Point 02: Why Choose Us */
  point02: {
    pointNumber: "02",
    verticalLabel: "Why Choose Us",
    title: "Why Choose Us",
    description: "人数無制限で定額。給与アップよりもコスト効率が高く、社員満足度・定着率の向上に寄与します。",
    items: [
      "人数無制限で定額・コスト一定",
      "代表者様のみのご契約でOK",
      "社員全員が40% OFF適用",
      "福利厚生は「守り」から「攻め」の投資へ",
    ],
    linkHref: "#reasons",
    linkLabel: "選ばれる理由を見る",
  },
  /** Point 03: Benefits（3カード：アイコン＋テキスト） */
  point03: {
    pointNumber: "03",
    verticalLabel: "Benefits",
    title: "TIAM BENEFITの特典",
    subLine: "予約優待に関する対象は当院までお問い合わせください。",
    linkHref: "#benefits",
    linkLabel: "特典一覧を見る",
    cards: [
      {
        title: "社員全員が40% OFF適用",
        description: "通常価格の40%オフで施術が受けられます。対象施術は当院までお問い合わせください。",
      },
      {
        title: "美容相談 365日対応",
        description: "LINE・電話・診察にて365日いつでも相談可能。専任スタッフがサポートします。",
      },
      {
        title: "紹介で16,500円分チケット",
        description: "ご友人紹介で16,500円分のチケットをお互いにプレゼント。",
      },
    ],
  },
  /** Point 04: How To Use Our Service（左テキスト・右動画） */
  point04: {
    pointNumber: "04",
    verticalLabel: "How To Use Our Service",
    sectionTitle: "ご利用のフロー",
    linkHref: "#flow",
    linkLabel: "導入の流れを見る",
    corporateEndLabel: "法人様のお手続きはここまで",
    steps: [
      { step: "01", role: "法人様", title: "最短5分でお申込み", description: "お電話やLINEにて「福利厚生を導入したい」旨をお伝えください。法人契約の手続きを行います。" },
      { step: "02", role: "法人様", title: "従業員様へ周知", description: "社員様へ向けた「福利厚生案内資料」を当院がご用意します。社内で配布・周知をお願いします。" },
      { step: "03", role: "従業員様", title: "LINEで簡単予約", description: "希望の施術を選び、LINE上で日程確定＆質問受付。専任スタッフがサポートします。" },
      { step: "04", role: "従業員様", title: "ご来院いただき、優待価格で施術", description: "社員様が個別に予約・来院するだけ。お会計時に自動的に40%OFFが適用されます。" },
    ],
  },
} as const;

/** なぜこの福利厚生が選ばれるのか（コスト比較） */
export const about = {
  title: "なぜ、この福利厚生が選ばれるのか？",
  subTitle: "視覚的にわかる「圧倒的なコストパフォーマンス」",
  description:
    "一般的な福利厚生は社員数に比例してコストが増大します。対して、TIAM CLINICは人数無制限で定額。社員が増えるほどお得になります。",
  subDescription: "同じコストをかけるなら、給与UPは税負担が大きく、福利厚生は満足度が大きく向上します。",
  challenges: [
    "人数無制限で定額・コスト一定",
    "代表者様のみのご契約でOK",
    "社員全員が40% OFF適用",
  ],
} as const;

/** 選ばれる理由（SBC風 2カード） */
export const why = {
  heading: "Why TIAM BENEFIT?",
  subLabel: "選ばれる理由",
  lead: "月額16,500円の定額で導入完了。\n銀座のクリニックを活かし、採用力・従業員満足度の向上に寄与します。",
  companyCard: {
    label: "企業側のメリット",
    items: [
      "社内の人材定着の施策の1つになる",
      "月額16,500円の定額なので社内決裁が通しやすい",
      "福利厚生が充実し採用ページで他社との差別化に役立つ",
    ],
  },
  employeeCard: {
    label: "従業員側のメリット",
    items: [
      "全施術を40% OFFの優待価格でご利用可能",
      "手軽なLINE予約で時短が可能",
      "ご家族も同じ優待価格でご利用可能",
    ],
  },
} as const;

/** 院長メッセージ */
export const director = {
  title: "10年後も通ってよかったと言っていただける「美容の町医者」を目指して",
  name: "谷口 弘樹",
  role: "TIAM CLINIC GINZA 理事長",
  credentials: ["福井大学医学部 卒業", "麻酔科標榜医 取得", "大手美容外科、大学病院整形外科を経て現職"],
  message1:
    "クリニック名のTIAM（ティアム）はペルシア語で「初めて出会った時の、目の輝き」という意味を持ちます。新たな自分に出会い目を輝かせる一瞬、そしてその輝きが自信となり、人生をより豊かにしていく。そんなお手伝いがしたいという想いで、このクリニックを開院しました。",
  message2:
    "私は元々麻酔科医としてキャリアをスタートさせました。「痛みが怖い」という患者様の不安を誰よりも理解しています。だからこそ、脂肪吸引や糸リフトといった施術においても、麻酔科医としての知識を活かし、痛みに最大限配慮した安全な医療を提供することをお約束します。福利厚生を通じて、働く皆様の「自信」と「笑顔」を引き出すことができれば幸いです。",
} as const;

/** Our Quality - 本物を提供 */
export const quality = {
  title: "福利厚生だからこそ、「本物」を提供したい",
  lead: "安かろう悪かろうではありません。大切な社員様をお預かりする責任を持って、質の高いサービスを提供します。",
  items: [
    {
      role: "DOCTOR",
      title: "痛みへの配慮と確かな美的センス",
      description:
        "麻酔科医出身の院長監修のもと、痛みに最大限配慮した施術を追求。小顔形成や美肌治療において、結果にこだわる治療を提供します。",
    },
    {
      role: "NURSE",
      title: "厳しい試験を突破した技術力",
      description:
        "独自の厳しい合格基準を満たすまで、患者様を担当することはありません。最新機器の照射技術や安全管理を徹底的に習得したプロフェッショナルが担当します。",
    },
    {
      role: "COUNSELOR",
      title: "「売上」ではなく「ありがとう」を評価",
      description:
        "当院のノルマは「患者様のありがとう」のみ。不要な施術の押し売りは一切行いません。社員様の理想の未来に親身に寄り添います。",
    },
  ],
} as const;

/** 提供する美容医療メニュー */
export const menu = {
  title: "提供する美容医療メニュー",
  lead: "最新機器と高度な手技による、結果にこだわる施術の数々。これら全てが、福利厚生価格で利用可能です。",
  categories: [
    {
      name: "美肌・肌質改善・医療脱毛",
      items: [
        {
          name: "毛穴洗浄",
          menuDetail: "ハイドラ / ケアシス",
          description:
            "水流の力で毛穴の奥の汚れをごっそり洗浄。ダウンタイムがほぼなく、仕事帰りや休憩時間にも人気の施術です。",
        },
        {
          name: "シミ・赤み改善",
          menuDetail: "ルメッカ / インモード",
          description: "高いピークパワーを持つ光治療で、シミや肌の赤みにアプローチ。ワントーン明るい透明感のある肌を目指します。",
        },
        {
          name: "ニキビ跡・肌質改善",
          menuDetail: "ポテンツァ",
          description: "マイクロニードルとRF（高周波）を組み合わせ、薬剤を均一に浸透。ニキビ跡や小じわ、毛穴の開きをケアします。",
        },
        {
          name: "医療脱毛",
          menuDetail: "全身 / 顔 / VIO",
          description:
            "看護師による丁寧な施術。医療用レーザーを使用し、少ない回数で効果を目指します。男性のヒゲ脱毛も対応。",
        },
      ],
    },
    {
      name: "小顔形成・注入治療",
      specialty: "当院は「小顔形成」に特化したクリニックです。麻酔科医出身の院長監修のもと、痛みに配慮した施術を実現。「脂肪吸引」や「糸リフト」といった、本来高額でハードルの高い施術も、福利厚生価格なら安心して挑戦いただけます。",
      items: [
        { name: "糸リフト", description: "切らずにリフトアップ。たるみを引き上げ、小顔ラインを作ります。" },
        { name: "くまとり", description: "目の下の膨らみやクマを解消し、疲れた印象を一掃します。" },
        { name: "ヒアルロン酸注入", description: "あご、鼻、唇など、バランスを整え理想のパーツへ。" },
        { name: "脂肪吸引・注射", description: "落ちにくい顔の脂肪を直接除去・溶解し、シャープな輪郭へ。" },
      ],
    },
  ],
} as const;

/** TIAMだけの5つの特典 */
export const benefits = {
  title: "TIAMだけの5つの特典",
  items: [
    {
      title: "全施術 40% OFF",
      description: "通常価格の40%オフのお値段で施術が受けられます。",
      note: null,
    },
    {
      title: "美容相談 365日対応",
      description: "LINE、電話、診察にて365日いつでも相談可能。",
      note: null,
    },
    {
      title: "紹介で16,500円分",
      description: "ご友人紹介で16,500円分のチケットをお互いにプレゼント。",
      note: null,
    },
    {
      title: "ビジネス交流会",
      description: "会員法人様をつなぐ交流会への招待やビジネスマッチング。",
      note: null,
    },
    {
      title: "導入時チケット",
      description: "導入時に16,500円分の施術チケットをプレゼント。",
      note: null,
    },
  ],
} as const;

/** 料金プラン */
export const price = {
  title: "シンプルで明快な料金プラン",
  monthlyLabel: "導入費用（月額）",
  monthlyValue: "16,500",
  monthlyUnit: "円（税込）",
  points: [
    "代表者様のみのご契約でOK",
    "社員数が増えてもコスト固定",
    "社員全員が40% OFF適用",
    "契約者の追加負担なし",
  ],
} as const;

/** 導入の流れ（3ステップ） */
export const flow = {
  title: "導入はとてもシンプルです",
  lead: "お申し込みからご利用開始まで、スムーズにご案内いたします。",
  steps: [
    {
      title: "お申し込み・ご契約",
      description:
        "お電話やLINEにて「福利厚生を導入したい」旨をお伝えください。法人契約の手続きを行います。",
    },
    {
      title: "案内資料を配布",
      description: "社員様へ向けた「福利厚生案内資料」を当院がご用意します。社内で配布・周知をお願いします。",
    },
    {
      title: "社員様が個別に予約",
      description: "あとは社員様が個別に予約・来院するだけ。お会計時に自動的に40%OFFが適用されます。",
    },
  ],
} as const;

export const news = {
  title: "お知らせ",
  listLabel: "News",
  listLinkText: "お知らせ一覧",
  list: [
    { date: "2025.03.01", title: "公式noteの連載を開始しました。" },
    { date: "2025.02.15", title: "メディアにて当サービスが紹介されました。" },
    { date: "2025.01.10", title: "展示会に出展しました。" },
  ],
  /** ニュースカード下のチェック2行（SBC風レイアウト用） */
  checkLines: [
    "TIAM CLINICがワンストップで予約サポート",
    "福利厚生価格で銀座のクリニックを利用可能",
  ],
  /** ニュース下CTA（画像の「5分で入力! 導入はこちら」相当） */
  ctaIntroduce: "LINEで導入相談",
  ctaContact: "サービスのご相談はこちら",
} as const;

export const voices = {
  heading: "Voices",
  title: "導入企業の声",
  description:
    "当サービスを導入いただいた企業様が、どのような課題意識を持っていたか、また導入にあたっての期待を伺いました。",
  more: "導入企業の声をもっと見る",
  items: [
    {
      company: "株式会社サンプルA",
      industry: "業界｜IT・Web",
      tags: ["#女性活躍", "#リテンション"],
      quote:
        "働きがいのある環境を整え、理想とするライフスタイルの実現を支援。当社が福利厚生サービスを導入した理由は...",
    },
    {
      company: "株式会社サンプルB",
      industry: "業界｜教育・人材",
      tags: ["#女性活躍", "#リテンション"],
      quote:
        "心身の健康づくりにとどまらない新たな福利厚生。社員の自分らしく輝ける環境づくりを目指し...",
    },
    {
      company: "株式会社サンプルC",
      industry: "業界｜小売・サービス",
      tags: ["#ウェルネス", "#採用"],
      quote:
        "従業員のウェルネス向上のため福利厚生を導入。採用差別化と定着率向上に役立っています...",
    },
    {
      company: "株式会社サンプルD",
      industry: "業界｜製造・ものづくり",
      tags: ["#健康経営", "#エンゲージメント"],
      quote:
        "ウェルビーイングを重視した環境づくりを福利厚生で実現。社内の満足度が上がり...",
    },
  ],
} as const;

export const faq = {
  title: "よくあるご質問",
  subtitle: "導入をご検討中の企業様から寄せられるご質問にお答えします。",
  items: [
    {
      q: "契約期間に縛りはありますか？",
      a: "原則として1年ごとの自動更新となりますが、解約をご希望の場合は更新月の1ヶ月前までにお申し出いただければスムーズに解約可能です。",
    },
    {
      q: "社員数が少ないのですが、導入できますか？",
      a: "はい、可能です。少人数の企業様でも導入いただけます。「月額16,500円」の固定コストで社員全員が割引対象となるため、数名の利用でも元が取れる設計です。",
    },
    {
      q: "男性社員も利用できますか？",
      a: "もちろんです。ヒゲ脱毛や毛穴洗浄（ハイドラフェイシャル）、ニキビ跡治療などで多くの男性にご来院いただいております。",
    },
    {
      q: "福利厚生費として計上できますか？",
      a: "はい、全社員を対象とした制度として導入いただくことで、原則として福利厚生費として計上可能です。詳細な税務処理については、顧問税理士様にご確認ください。",
    },
  ],
} as const;

/** 問い合わせセクション用 */
export const contactSection = {
  title: "御社にとって「コストパフォーマンスの高い投資」になるはずです。",
  salaryUp: {
    label: "給与アップの場合",
    company: "会社負担 重い（社会保険料等）",
    employee: "社員の手取り 意外と増えない",
  },
  benefit: {
    label: "本福利厚生の場合",
    company: "会社負担 軽い（月額固定・経費）",
    employee: "社員満足度 大きく向上！",
    recommend: "おすすめ",
  },
  cta: "まずは月額16,500円の定額プランを試して、社員様の反応を見てから本格導入することも可能です。ぜひ、新しい福利厚生の形をご体験ください。",
  ctaButton: "今すぐ問い合わせる",
} as const;

/** SNS */
export const sns = {
  instagram: "https://www.instagram.com/tiam_ginza",
  instagramLabel: "Instagram Follower 2.6万+",
  youtube: "https://www.youtube.com/@tiamclinicginza/videos",
  youtubeLabel: "YouTube Official Channel",
  tiktok: "https://www.tiktok.com/@tiam_clinic",
  tiktokLabel: "TikTok Official Account",
} as const;

export const cookie = {
  message:
    "当webサイトでは、お客様により良いサービスを提供するため、クッキーを利用しています。クッキーの使用に同意いただける場合は「同意する」ボタンをクリックし、クッキーに関する情報についてはプライバシーポリシーページをご覧ください。",
  accept: "同意する",
  privacyLink: "プライバシーポリシーページ",
} as const;
