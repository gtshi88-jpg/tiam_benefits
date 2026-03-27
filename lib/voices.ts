/**
 * 導入企業の声 - 一覧・詳細で共通利用するデータ
 */
export type VoiceItem = {
  id: string;
  company: string;
  industry: string;
  tags: string[];
  quote: string;
  image: string;
  // 詳細ページ用
  fullTitle: string;
  date: string;
  strategyTags: string[];
  strategySummary: string;
  body: string;
};

export const VOICES_LIST: VoiceItem[] = [
  {
    id: "1",
    company: "株式会社サンプルA",
    industry: "業界｜IT・Web",
    tags: ["#女性活躍", "#リテンション"],
    quote:
      "働きがいのある環境を整え、理想とするライフスタイルの実現を支援。当社が福利厚生サービスを導入した理由は...",
    image: "/images/voice_image1.jpg",
    fullTitle: "働きがいのある環境を整え、理想とするライフスタイルの実現を支援。株式会社サンプルAがTIAM BENEFITSを導入した理由は。",
    date: "2025.10.28",
    strategyTags: ["健康経営", "女性活躍", "採用強化", "リテンション"],
    strategySummary:
      "従業員一人ひとりが、自分らしいキャリアを築けるよう、働きがいのある環境を整えるために活用します。",
    body: `株式会社サンプルAは、「デジタルで未来を創る」をミッションに掲げ、IT・Webサービス事業を展開しています。全従業員の6割以上を女性が占める中、多様な従業員が自分らしいキャリアやライフスタイルを実現できるよう支援する取り組みの一環として、「TIAM BENEFITS」の導入を決定しました。美容医療に特化した福利厚生により、社員の自己投資を応援し、仕事への活力や満足度の向上につながっています。`,
  },
  {
    id: "2",
    company: "株式会社サンプルB",
    industry: "業界｜教育・人材",
    tags: ["#女性活躍", "#リテンション"],
    quote:
      "心身の健康づくりにとどまらない新たな福利厚生。社員の自分らしく輝ける環境づくりを目指し...",
    image: "/images/voice_image2.jpg",
    fullTitle: "心身の健康づくりにとどまらない新たな福利厚生。株式会社サンプルBは社員の自分らしく輝ける環境づくりを目指す。",
    date: "2025.09.15",
    strategyTags: ["女性活躍", "リテンション", "エンゲージメント"],
    strategySummary:
      "社員一人ひとりが自分らしく輝ける職場環境づくりを、福利厚生を通じて実現するために活用します。",
    body: `株式会社サンプルBは、教育・人材業界で幅広い事業を展開しています。採用競争が激化する中、福利厚生の差別化が課題となっていました。「TIAM BENEFITS」の導入により、美容医療という新しい切り口で社員満足度を高め、採用・定着の両面で効果を感じています。導入費用0円で、人数無制限の定額設計という手軽さも、導入の決め手となりました。`,
  },
  {
    id: "3",
    company: "株式会社サンプルC",
    industry: "業界｜小売・サービス",
    tags: ["#ウェルネス", "#採用"],
    quote:
      "従業員のウェルネス向上のため福利厚生を導入。採用差別化と定着率向上に役立っています...",
    image: "/images/voice_image3.jpg",
    fullTitle: "従業員のウェルネス向上のため福利厚生を導入。株式会社サンプルCが採用差別化と定着率向上を実現。",
    date: "2025.08.20",
    strategyTags: ["健康経営", "採用強化", "リテンション"],
    strategySummary:
      "従業員のウェルネス向上と、採用・定着の両面での効果を期待して導入しました。",
    body: `株式会社サンプルCは、小売・サービス業界で複数ブランドを展開しています。業界全体で人手不足が深刻化する中、従業員の満足度向上と採用差別化が重要な経営課題でした。「TIAM BENEFITS」は、銀座のクリニックという信頼感のある提供元と、導入費用0円で社員全員が優待価格（10〜45%OFF）を利用できる点が魅力でした。社員からは「自分磨きの機会が増えた」「働くモチベーションが上がった」という声が多く寄せられています。`,
  },
  {
    id: "4",
    company: "株式会社サンプルD",
    industry: "業界｜製造・ものづくり",
    tags: ["#健康経営", "#エンゲージメント"],
    quote:
      "ウェルビーイングを重視した環境づくりを福利厚生で実現。社内の満足度が上がり...",
    image: "/images/voice_image4.jpg",
    fullTitle: "ウェルビーイングを重視した環境づくりを福利厚生で実現。株式会社サンプルDの挑戦。",
    date: "2025.07.10",
    strategyTags: ["健康経営", "エンゲージメント", "採用強化"],
    strategySummary:
      "ウェルビーイングを重視した職場環境づくりと、従業員の定着率向上を目的に活用します。",
    body: `株式会社サンプルDは、製造・ものづくり分野で技術力を強みに事業を展開しています。従来型の福利厚生では差別化が難しく、健康経営の観点からも新しい施策を模索していました。「TIAM BENEFITS」の導入により、美容医療という新しい価値提供で社員の自己投資を支援。代表者様のみのご契約で社員全員に適用される手軽さも、導入の決め手となっています。`,
  },
];

export function getVoiceById(id: string): VoiceItem | undefined {
  return VOICES_LIST.find((v) => v.id === id);
}

export function getOtherVoices(currentId: string, limit = 3): VoiceItem[] {
  return VOICES_LIST.filter((v) => v.id !== currentId).slice(0, limit);
}

/** 業界カテゴリ一覧（industry から「業界｜」を除いた値） */
export function getIndustryCategories(): string[] {
  const set = new Set(VOICES_LIST.map((v) => v.industry.replace(/^業界｜/, "")));
  return Array.from(set).sort();
}

/** 人事戦略の課題意識タグ一覧（重複排除） */
export function getStrategyTagOptions(): string[] {
  const set = new Set<string>();
  VOICES_LIST.forEach((v) => v.strategyTags.forEach((t) => set.add(t)));
  return Array.from(set).sort();
}
