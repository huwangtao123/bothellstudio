export const languages = ["en", "zh"] as const;

export type Language = (typeof languages)[number];

export type NavItem = {
  href: string;
  label: string;
};

export type FAQItem = {
  question: string;
  answer: string;
  category: string;
  language: Language;
  featured?: boolean;
};

export type ContactContent = {
  wechatQrImage: string;
  wechatLabel: string;
  scanInstructions: string;
  caption: string;
  secondaryNote?: string;
};

export type SiteContent = {
  locale: Language;
  languageLabel: string;
  brandName: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    highlights: string[];
  };
  homepage: {
    quickFactsTitle: string;
    trustNote: string;
    classCard: {
      title: string;
      description: string;
      href: string;
    };
    campCard: {
      title: string;
      description: string;
      href: string;
    };
    faqTitle: string;
    contactTitle: string;
    contactBody: string;
  };
  classes: {
    title: string;
    intro: string;
    ageGroups: Array<{ title: string; description: string }>;
    bullets: string[];
  };
  camp: {
    title: string;
    intro: string;
    featuredTitle: string;
    featuredBody: string;
    quickFacts: Array<{ label: string; value: string }>;
    dailySchedule: Array<{ time: string; activity: string }>;
    sessions: Array<{ title: string; description: string }>;
    bullets: string[];
    pricingTitle: string;
    pricingItems: Array<{ label: string; value: string }>;
    locationTitle: string;
    locationBody: string;
    showcaseTitle: string;
    showcaseItems: string[];
  };
  about: {
    title: string;
    intro: string;
    values: Array<{ title: string; description: string }>;
  };
  faqPage: {
    title: string;
    intro: string;
  };
  contactPage: {
    title: string;
    intro: string;
  };
  faqItems: FAQItem[];
  contact: ContactContent;
  footer: {
    tagline: string;
    serviceArea: string;
    rights: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

const wechatPlaceholder = "/wechat-qr-placeholder.svg";

export const siteContent: Record<Language, SiteContent> = {
  en: {
    locale: "en",
    languageLabel: "中文",
    brandName: "It is a studio",
    nav: [
      { href: "/", label: "Home" },
      { href: "/classes", label: "Art Classes" },
      { href: "/summer-camp", label: "Summer Camp" },
      { href: "/about", label: "About" },
      { href: "/faq", label: "Q&A" },
      { href: "/contact", label: "Contact" }
    ],
    hero: {
      eyebrow: "Children's Art Classes in Bothell, WA",
      title: "2026 Summer Camp for ages 4-6 in Bothell",
      description:
        "Current enrollment is focused on the 2026 summer camp: June 15 to July 10, 9:00 AM to 4:00 PM, with art, music, Chinese, calligraphy, clay, lunch, and snacks included.",
      primaryCta: "Scan WeChat to Ask About Camp",
      secondaryCta: "View Summer Camp Details",
      highlights: [
        "Ages 4-6",
        "June 15 - July 10, 2026",
        "Bothell, WA"
      ]
    },
    homepage: {
      quickFactsTitle: "Key facts parents usually need first",
      trustNote:
        "A small local studio format for Bothell families who want a clear daily schedule, included meals, and direct WeChat communication.",
      classCard: {
        title: "Weekly Art Classes",
        description:
          "A lighter, ongoing option for families who want regular art practice beyond summer camp.",
        href: "/classes"
      },
      campCard: {
        title: "2026 Summer Camp",
        description:
          "The current main enrollment focus: full-day summer camp with art, music, Chinese, calligraphy, clay, lunch, and snacks.",
        href: "/summer-camp"
      },
      faqTitle: "Questions parents ask before joining",
      contactTitle: "Ask on WeChat",
      contactBody:
        "Send your child's age and whether you are asking about summer camp or weekly classes."
    },
    classes: {
      title: "Children's Art Classes",
      intro:
        "Weekly classes are the ongoing option for families who want a regular art routine after summer camp.",
      ageGroups: [
        {
          title: "Ages 4-6",
          description:
            "Early creativity classes focused on colors, shapes, storytelling, and hands-on confidence."
        },
        {
          title: "Ages 7-10",
          description:
            "Structured art study with drawing, painting, mixed media, and project completion skills."
        },
        {
          title: "Ages 11+",
          description:
            "More advanced creative practice for students ready to deepen technique and personal style."
        }
      ],
      bullets: [
        "Small-group learning with room for individual guidance",
        "Projects balance technique, imagination, and finished work",
        "Use WeChat to ask which age group fits your child best"
      ]
    },
    camp: {
      title: "Summer Art Camp",
      intro:
        "A featured 2026 summer camp for ages 4-6, combining art, music, Chinese, calligraphy, clay, outdoor play, and a calm bilingual studio routine in Bothell.",
      featuredTitle: "2026 Featured Summer Camp",
      featuredBody:
        "This is the main camp shown in your flyer: a four-week bilingual summer program for ages 4-6 with full-day care, included lunch and snacks, and a mixed curriculum across painting, music, calligraphy, Chinese, and clay.",
      quickFacts: [
        { label: "Ages", value: "4-6" },
        { label: "Dates", value: "June 15 - July 10, 2026" },
        { label: "Hours", value: "9:00 AM - 4:00 PM" },
        { label: "Location", value: "10906 NE 197th St, Bothell, WA 98011" }
      ],
      dailySchedule: [
        { time: "9:00-9:15 AM", activity: "Arrival" },
        { time: "9:15-10:15 AM", activity: "Art drawing / clay project / music class" },
        { time: "10:15-10:30 AM", activity: "Morning snack" },
        { time: "10:30-11:45 AM", activity: "Outdoor activity" },
        { time: "12:00-1:00 PM", activity: "Lunch" },
        { time: "1:00-2:00 PM", activity: "Nap or quiet picture-book time" },
        { time: "2:00-3:00 PM", activity: "Chinese / calligraphy" },
        { time: "3:00-3:15 PM", activity: "Afternoon snack" },
        { time: "3:15-4:00 PM", activity: "Outdoor activity / indoor movement" }
      ],
      sessions: [
        {
          title: "Painting",
          description:
            "Children work on colorful canvas and drawing projects, building confidence through observation, color play, and finished take-home art."
        },
        {
          title: "Music + Rhythm",
          description:
            "The camp includes music-based learning to balance visual art with listening, rhythm, and joyful group participation."
        },
        {
          title: "Chinese, Calligraphy, and Clay",
          description:
            "The summer format is cross-disciplinary, letting younger children experience language, brushwork, and tactile making in one camp."
        }
      ],
      bullets: [
        "Lunch, snacks, and art materials are included in the weekly tuition",
        "Early bird pricing is available through March 25",
        "After-care is available from 4:00 PM to 5:00 PM",
        "Referral offer: both families receive a $35 total discount"
      ],
      pricingTitle: "Tuition and Enrollment",
      pricingItems: [
        { label: "Regular tuition", value: "$690 / week" },
        { label: "Early bird tuition", value: "$669 / week (through March 25)" },
        { label: "After care", value: "4:00-5:00 PM, $100 / week or $25 / day" },
        { label: "Included", value: "Lunch, snacks, and art supplies" }
      ],
      locationTitle: "Bothell Campus",
      locationBody:
        "The camp flyer lists the location as 10906 NE 197th St, Bothell, WA 98011. This page should present the camp as a local Bothell offering with WeChat as the primary enrollment path.",
      showcaseTitle: "What Families Can Expect",
      showcaseItems: [
        "Young children practicing brush control, Chinese calligraphy strokes, and character learning",
        "Studio painting sessions with easels, bright acrylic work, and one-on-one guidance",
        "Finished paintings children can proudly hold up and share with parents",
        "A balanced routine with art, music, language, movement, meals, and rest"
      ]
    },
    about: {
      title: "About the Studio",
      intro:
        "A local Bothell studio for families looking for art learning with clear structure and direct communication.",
      values: [
        {
          title: "Encouraging Environment",
          description:
            "Children learn best when they feel safe, seen, and excited to try new materials."
        },
        {
          title: "Skill + Joy",
          description:
            "Lessons support real growth in art fundamentals without losing the fun of making."
        },
        {
          title: "Parent Clarity",
          description:
            "Class expectations, materials, and common questions are answered upfront."
        }
      ]
    },
    faqPage: {
      title: "Common Questions",
      intro: "A complete question list for parents who want details before sending a WeChat message."
    },
    contactPage: {
      title: "Contact the Studio",
      intro:
        "Scan the WeChat QR code to ask about camp availability, weekly classes, or age fit."
    },
    faqItems: [
      {
        question: "What age is the 2026 summer camp for?",
        answer:
          "The current featured summer camp is for children ages 4-6.",
        category: "camp",
        language: "en",
        featured: true
      },
      {
        question: "Do you offer summer camp in Bothell?",
        answer:
          "Yes. The featured 2026 camp is a Bothell-based four-week program for ages 4-6, running from June 15 to July 10.",
        category: "camp",
        language: "en",
        featured: true
      },
      {
        question: "What are the camp hours?",
        answer:
          "Camp runs from 9:00 AM to 4:00 PM, with optional after-care from 4:00 PM to 5:00 PM.",
        category: "camp",
        language: "en",
        featured: true
      },
      {
        question: "What is included in tuition?",
        answer:
          "The flyer states that lunch, snacks, and art supplies are included in the weekly tuition.",
        category: "camp",
        language: "en",
        featured: true
      },
      {
        question: "Is after-care available?",
        answer:
          "Yes. After-care runs from 4:00 PM to 5:00 PM and is listed at $100 per week or $25 per day.",
        category: "camp",
        language: "en",
        featured: true
      },
      {
        question: "How do I sign up?",
        answer:
          "Use WeChat as the main contact path. Send your child's age and whether you are asking about summer camp or regular classes.",
        category: "contact",
        language: "en",
        featured: true
      },
      {
        question: "Do classes support English and Chinese speaking families?",
        answer:
          "Yes. The website and contact flow are prepared for bilingual English and Chinese communication.",
        category: "general",
        language: "en"
      },
      {
        question: "Do students need to bring their own materials?",
        answer:
          "The current copy assumes core materials can be listed clearly on the site. You can later specify whether supplies are included or need to be brought in.",
        category: "classes",
        language: "en"
      },
      {
        question: "Can my child try a class before committing?",
        answer:
          "The site supports trial-class messaging as a common CTA. Final availability and pricing can be updated once you confirm the policy.",
        category: "classes",
        language: "en"
      },
      {
        question: "How large are the classes?",
        answer:
          "The positioning assumes small-group classes with room for individual guidance. Add your exact student limit before launch.",
        category: "classes",
        language: "en"
      },
      {
        question: "Where do you serve?",
        answer:
          "The site is optimized for Bothell, Washington and nearby families in the surrounding Eastside area.",
        category: "location",
        language: "en"
      }
    ],
    contact: {
      wechatQrImage: wechatPlaceholder,
      wechatLabel: "Add us on WeChat",
      scanInstructions:
        "Open WeChat, scan the code, and send your child's age plus the program you're interested in.",
      caption: "Primary contact for class questions, camp availability, and trial lesson requests.",
      secondaryNote: "Placeholder QR image. Replace with your real WeChat code before launch."
    },
    footer: {
      tagline: "Creative growth for children through art, structure, and play.",
      serviceArea: "Serving Bothell, WA and nearby families.",
      rights: "All rights reserved."
    },
    seo: {
      title: "Children's Art Classes and Summer Camp in Bothell, WA",
      description:
        "Explore bilingual children's art classes and summer camp programs for Bothell, WA families. View common questions and contact the studio on WeChat.",
      keywords: [
        "Bothell art classes for kids",
        "Bothell summer camp art",
        "children art class Bothell WA",
        "kids art studio Bothell",
        "Bothell bilingual art class"
      ]
    }
  },
  zh: {
    locale: "zh",
    languageLabel: "EN",
    brandName: "一个工作室",
    nav: [
      { href: "/", label: "首页" },
      { href: "/classes", label: "艺术课程" },
      { href: "/summer-camp", label: "夏令营" },
      { href: "/about", label: "关于我们" },
      { href: "/faq", label: "常见问题" },
      { href: "/contact", label: "联系我们" }
    ],
    hero: {
      eyebrow: "Bothell, WA 儿童艺术课程",
      title: "儿童艺术课程与夏令营",
      description:
        "当前主推 2026 夏令营招生：4-6 岁，6 月 15 日到 7 月 10 日，每天 9:00 AM - 4:00 PM，包含绘画、音乐、中文、书法、黏土、午餐和点心。",
      primaryCta: "扫码微信咨询课程",
      secondaryCta: "查看夏令营详情",
      highlights: [
        "4-6 岁",
        "2026.6.15 - 7.10",
        "Bothell, WA"
      ]
    },
    homepage: {
      quickFactsTitle: "家长最先需要确认的关键信息",
      trustNote:
        "面向 Bothell 本地家庭的小型工作室安排，信息清楚、作息清楚、微信沟通直接。",
      classCard: {
        title: "常规艺术课程",
        description: "适合想在夏令营之外继续长期学习、保持艺术练习节奏的家庭。",
        href: "/classes"
      },
      campCard: {
        title: "2026 夏令营",
        description: "当前主要招生项目：全天安排，包含绘画、音乐、中文、书法、黏土、午餐和点心。",
        href: "/summer-camp"
      },
      faqTitle: "家长在报名之前最常问的问题",
      contactTitle: "微信咨询",
      contactBody: "扫码后发送孩子年龄，以及你想咨询的是夏令营还是常规课程。"
    },
    classes: {
      title: "儿童艺术课程",
      intro:
        "常规课程适合希望在夏令营之外继续稳定学习、持续练习艺术表达的家庭。",
      ageGroups: [
        {
          title: "4-6 岁",
          description: "从色彩、形状与故事表达入手，建立孩子的动手能力与自信。"
        },
        {
          title: "7-10 岁",
          description: "加强绘画、色彩、综合材料与完整作品创作能力。"
        },
        {
          title: "11 岁以上",
          description: "适合希望提升技巧、形成个人风格的学生。"
        }
      ],
      bullets: [
        "小班教学，方便个别指导",
        "兼顾技巧训练、想象力与成品完成度",
        "可先通过微信咨询年龄匹配与课程安排"
      ]
    },
    camp: {
      title: "暑期艺术夏令营",
      intro:
        "主推 2026 年 4-6 岁国学美术音乐夏令营，在 Bothell 提供绘画、音乐、中文、书法、黏土与户外活动结合的一日营体验。",
      featuredTitle: "2026 主推夏令营",
      featuredBody:
        "这是海报中的主推项目：面向 4-6 岁孩子的四周双语夏令营，采用全天安排，包含午餐、点心与美术材料，课程融合绘画、音乐、中文、书法与黏土。",
      quickFacts: [
        { label: "年龄", value: "4-6 岁" },
        { label: "时间", value: "2026.6.15 - 7.10" },
        { label: "每日时段", value: "9:00 AM - 4:00 PM" },
        { label: "地址", value: "10906 NE 197th St, Bothell, WA 98011" }
      ],
      dailySchedule: [
        { time: "9:00-9:15", activity: "入园" },
        { time: "9:15-10:15", activity: "艺术绘画 / 黏土制作 / 音乐课" },
        { time: "10:15-10:30", activity: "上午点心" },
        { time: "10:30-11:45", activity: "户外活动" },
        { time: "12:00-1:00", activity: "午餐" },
        { time: "1:00-2:00", activity: "午睡 / 无午睡娃绘本时间" },
        { time: "2:00-3:00", activity: "中文 / 书法" },
        { time: "3:00-3:15", activity: "下午点心" },
        { time: "3:15-4:00", activity: "户外活动 / 室内运动" }
      ],
      sessions: [
        {
          title: "绘画创作",
          description: "孩子会在画架与画布上完成色彩鲜明的作品，练习观察、构图与完成一幅作品的能力。"
        },
        {
          title: "音乐与节奏",
          description: "课程包含音乐内容，让孩子在视觉艺术之外，也通过节奏、聆听与互动获得表达体验。"
        },
        {
          title: "中文 / 书法 / 黏土",
          description: "这个夏令营是跨领域设计，让低龄孩子在一个项目里体验语言、书写和立体材料创作。"
        }
      ],
      bullets: [
        "学费已包含午餐、点心和美术耗材",
        "3 月 25 日前可享早鸟价格",
        "支持 4-5 点课后看护，可按周或按天购买",
        "推荐新朋友报名，双方总价减 $35"
      ],
      pricingTitle: "费用与报名",
      pricingItems: [
        { label: "标准学费", value: "$690 / 周" },
        { label: "早鸟学费", value: "$669 / 周（3/25 前）" },
        { label: "课后看护", value: "4:00-5:00 PM，$100 / 周 或 $25 / 天" },
        { label: "费用包含", value: "午餐、点心、美术材料" }
      ],
      locationTitle: "Bothell 校区",
      locationBody:
        "海报上给出的地址为 10906 NE 197th St, Bothell, WA 98011。页面会把这个项目作为 Bothell 本地夏令营重点展示，并继续以微信作为主要报名入口。",
      showcaseTitle: "家长可以期待什么",
      showcaseItems: [
        "低龄孩子练习毛笔控制、书法笔画与汉字感知",
        "在画架前进行绘画创作，完成色彩鲜明的美术作品",
        "孩子能够带回并展示自己完成的作品，获得成就感",
        "课程节奏兼顾艺术、音乐、语言、运动、用餐与休息"
      ]
    },
    about: {
      title: "关于工作室",
      intro:
        "面向 Bothell 家庭的本地艺术学习空间，重视清晰安排、稳定节奏和直接沟通。",
      values: [
        {
          title: "鼓励式环境",
          description: "孩子在被看见、被支持的氛围里更愿意尝试新的材料与表达方式。"
        },
        {
          title: "技巧与乐趣并重",
          description: "在建立基础能力的同时，保留创作本身的快乐。"
        },
        {
          title: "家长信息清晰",
          description: "课程安排、材料说明与常见问题提前说清楚，减少沟通成本。"
        }
      ]
    },
    faqPage: {
      title: "常见问题",
      intro: "这里集中整理完整问答，方便家长在加微信前先看清基本信息。"
    },
    contactPage: {
      title: "联系工作室",
      intro: "请扫描微信二维码，咨询夏令营名额、常规课程或年龄匹配。"
    },
    faqItems: [
      {
        question: "2026 夏令营适合几岁的孩子？",
        answer:
          "当前主推夏令营面向 4-6 岁孩子。",
        category: "camp",
        language: "zh",
        featured: true
      },
      {
        question: "Bothell 地区有暑期艺术夏令营吗？",
        answer:
          "有。当前主推项目为 2026 年 6 月 15 日到 7 月 10 日的 Bothell 4-6 岁夏令营。",
        category: "camp",
        language: "zh",
        featured: true
      },
      {
        question: "夏令营每天几点开始和结束？",
        answer: "夏令营时间为每天上午 9:00 到下午 4:00，另可选 4:00 到 5:00 的课后看护。",
        category: "camp",
        language: "zh",
        featured: true
      },
      {
        question: "夏令营学费包含哪些内容？",
        answer: "海报信息显示每周学费包含午餐、点心和美术耗材。",
        category: "camp",
        language: "zh",
        featured: true
      },
      {
        question: "是否提供课后看护？",
        answer:
          "提供。课后看护时间为 4:00 PM - 5:00 PM，费用为 $100 / 周 或 $25 / 天。",
        category: "camp",
        language: "zh",
        featured: true
      },
      {
        question: "怎么报名？",
        answer:
          "目前以微信为主要报名与咨询入口。扫码后发送孩子年龄，以及你想咨询的是夏令营还是常规课程。",
        category: "contact",
        language: "zh",
        featured: true
      },
      {
        question: "是否支持中文和英文沟通？",
        answer: "支持。网站结构与联系路径都已按中英双语场景设计。",
        category: "general",
        language: "zh"
      },
      {
        question: "材料需要自带吗？",
        answer:
          "目前页面预留了材料说明位置。后续你可以补充是包含材料还是需要自备。",
        category: "classes",
        language: "zh"
      },
      {
        question: "可以先试听再报名吗？",
        answer:
          "网站支持将试听课作为常见咨询内容之一，后续可根据你的政策补充具体规则与费用。",
        category: "classes",
        language: "zh"
      },
      {
        question: "每班大概多少学生？",
        answer:
          "当前定位为方便个别指导的小班教学。上线前可补充准确人数上限。",
        category: "classes",
        language: "zh"
      },
      {
        question: "服务区域是哪里？",
        answer: "网站重点面向 Bothell, Washington 及周边 Eastside 家庭。",
        category: "location",
        language: "zh"
      }
    ],
    contact: {
      wechatQrImage: wechatPlaceholder,
      wechatLabel: "添加微信咨询",
      scanInstructions: "打开微信扫一扫，并发送孩子年龄与想咨询的课程类型。",
      caption: "这是课程咨询、夏令营名额与试听课沟通的主要入口。",
      secondaryNote: "当前为占位二维码，上线前请替换为真实微信码。"
    },
    footer: {
      tagline: "通过艺术、结构与表达，让孩子持续成长。",
      serviceArea: "服务 Bothell, WA 及周边家庭。",
      rights: "保留所有权利。"
    },
    seo: {
      title: "儿童艺术课程与夏令营",
      description:
        "为 Bothell, WA 家庭提供双语儿童艺术课程与夏令营信息。查看常见问题，并通过微信二维码直接联系工作室。",
      keywords: [
        "Bothell 儿童艺术课",
        "Bothell 夏令营 艺术",
        "Bothell 儿童绘画课",
        "Bothell 双语艺术课程",
        "Bothell kids art class"
      ]
    }
  }
};

export function getContent(language: Language) {
  return siteContent[language];
}

export function localizeHref(language: Language, href: string) {
  return href === "/" ? `/${language}` : `/${language}${href}`;
}

export function getFeaturedFaqs(language: Language) {
  return siteContent[language].faqItems.filter((item) => item.featured).slice(0, 6);
}
