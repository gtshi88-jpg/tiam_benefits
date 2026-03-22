/**
 * 施術メニュー一覧（当院サイト https://tiamclinic.com/menu に準拠）
 * 福利厚生価格で全メニューをご利用いただけます
 */

export const CLINIC_MENU_URL = "https://tiamclinic.com/menu" as const;

export type MenuCategory = {
  id: string;
  label: string;
  treatments: string[];
};

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "skin",
    label: "お肌の悩み",
    treatments: [
      "ハイドラジェントル",
      "ミラノリピール",
      "ララピール",
      "水光注射",
      "リジュラン注射",
      "プロファイロ",
      "シワ取り注射",
      "ヒアルロン酸注入",
      "ダーマペン",
      "フラクショナル",
      "HIFU(ハイフ)",
      "POTENZA(ポテンツァ)",
      "ルメッカ",
      "ジュベルック",
      "ベビーコラーゲン",
    ],
  },
  {
    id: "face",
    label: "顔のお悩み",
    treatments: [
      "糸リフト",
      "脂肪吸引",
      "脂肪注入",
      "シワ取り注射",
      "ヒアルロン酸注入",
      "インモードFX",
      "オンダリフト",
      "HIFU(ハイフ)",
      "ほうれい線はがし",
      "二重埋没",
      "目頭切開",
      "目尻切開",
      "眉下切開",
      "ノーズスレッド",
      "口角挙上",
      "スネコス注射",
    ],
  },
  {
    id: "body",
    label: "脂肪吸引・痩身",
    treatments: [
      "身体脂肪吸引",
      "インモードFX（身体用）",
      "医療ダイエット注射",
      "医療ダイエット薬",
      "脂肪溶解注射",
      "ダイエット点滴",
      "インディバ",
    ],
  },
  {
    id: "drip",
    label: "美容点滴",
    treatments: [
      "プラセンタ",
      "高濃度コンディショニング点滴",
      "美容リカバリー点滴",
      "疲労回復点滴",
      "高濃度ビタミン点滴",
      "二日酔い点滴",
      "白玉点滴",
    ],
  },
  {
    id: "hair",
    label: "毛の悩み",
    treatments: ["脱毛", "AGA注射", "AGA内服"],
  },
  {
    id: "gyne",
    label: "乳輪・乳頭・婦人科形成",
    treatments: [
      "ヒアルロン酸豊胸",
      "脂肪注入/豊胸",
      "陥没乳頭修正術",
      "乳輪縮小",
      "小陰唇縮小",
      "婦人科形成",
    ],
  },
  {
    id: "art",
    label: "アートメイク",
    treatments: ["アートメイク"],
  },
];
