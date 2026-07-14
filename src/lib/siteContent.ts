import { fetchCmsDocument } from "./sanity";

export type SiteImage = {
  src: string;
  alt: string;
  position: string;
};

export type HomeService = {
  number: string;
  title: string;
  description: string[];
};

export type Engagement = {
  number: string;
  title: string;
  description: string;
};

export type MethodologyService = {
  title: string;
  label: string;
  description: string[];
};

export type ServicePageItem = {
  title: string;
  subtitle?: string;
  description: string[];
  cta: string;
  link: string;
};

export type ContentLink = {
  label: string;
  href: string;
};

export type TextItem = {
  title: string;
  description: string;
};

export type Principle = TextItem & {
  short: string;
};

export type Statistic = {
  value: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  title: string;
};

export type TestimonialGroup = {
  heading: string;
  testimonials: Testimonial[];
};

export type ThreeTsContent = {
  global: {
    navigation: ContentLink[];
    email: string;
    calendlyUrl: string;
    footerEyebrow: string;
    footerHeading: string;
    locations: string;
    tagline: string;
    legalName: string;
  };
  home: {
    eyebrow: string;
    tagline: string;
    introduction: string;
    serviceSummary: string;
    primaryCta: ContentLink;
    secondaryCta: ContentLink;
    audiences: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
      items: string[];
    };
    servicesIntro: {
      eyebrow: string;
      heading: string;
      introduction: string;
      cta: ContentLink;
    };
    services: HomeService[];
    principles: {
      eyebrow: string;
      heading: string;
      introduction: string;
      items: Principle[];
    };
    impact: {
      eyebrow: string;
      heading: string;
      statistics: Statistic[];
    };
    engagementsEyebrow: string;
    engagementsHeading: string;
    engagements: Engagement[];
    aboutSection: {
      eyebrow: string;
      heading: string;
      paragraphs: string[];
      cta: ContentLink;
      image: SiteImage;
    };
    testimonials: {
      eyebrow: string;
      items: Testimonial[];
      cta: ContentLink;
    };
    testimonialImage: SiteImage;
  };
  about: {
    eyebrow: string;
    heading: string;
    subheading: string;
    introduction: string[];
    profileHeading: string;
    profileItems: TextItem[];
    ethosHeading: string;
    ethosDescription: string;
    ethosCta: ContentLink;
    credentialsHeading: string;
    credentials: string[];
    cta: ContentLink;
    quote: string;
    image: SiteImage;
  };
  approach: {
    eyebrow: string;
    heading: string;
    introduction: string;
    image: SiteImage;
    methodologyEyebrow: string;
    methodologyHeading: string;
    services: MethodologyService[];
    ethos: {
      eyebrow: string;
      heading: string;
      lead: string;
      paragraphs: string[];
      closing: string[];
    };
    stakeholderHeading: string;
    stakeholderDescription: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    introduction: string;
    image: SiteImage;
    items: ServicePageItem[];
  };
  perspectives: {
    eyebrow: string;
    heading: string;
    introduction: string;
    featuredEyebrow: string;
    featuredTitle: string;
    videoEmbedUrl: string;
    videoTitle: string;
    videoLink: ContentLink;
    cards: Array<{ label: string; title: string; text: string }>;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    introduction: string;
    backgroundImage: SiteImage;
    groups: TestimonialGroup[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    introduction: string;
    email: string;
    locations: string;
    emailLabel: string;
    locationsLabel: string;
    emailCtaLabel: string;
    bookingCta: ContentLink;
    imageCaption: string;
    image: SiteImage;
  };
};

export const defaultThreeTsContent: ThreeTsContent = {
  global: {
    navigation: [
      { href: "/about", label: "About" },
      { href: "/approach", label: "Approach" },
      { href: "/services", label: "Services" },
      { href: "/perspectives", label: "Perspectives" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/contact", label: "Contact" },
    ],
    email: "shareef@3ts-inc.com",
    calendlyUrl: "https://calendly.com/shareef3ts/a-30min-slot-with-shareef",
    footerEyebrow: "Considered collaboration. Consequential change.",
    footerHeading: "Let's Chat",
    locations: "Washington, DC · London, UK · Amman, JO",
    tagline: "Thoroughly Thought Through.",
    legalName: "Shareef - 3Ts Consulting",
  },
  home: {
    eyebrow: "Considered collaboration. Consequential change.",
    tagline: "Thoroughly Thought Through.",
    introduction:
      "A better world starts with intention and is built through better decisions, with honest information, in rooms designed for clarity rather than comfort.",
    serviceSummary:
      "Coaching; Facilitation & Training; Inclusive Program Design — grounded in neuroscience, governance, and 20 years of global leadership experience.",
    primaryCta: { label: "Get Started", href: "/contact" },
    secondaryCta: {
      label: "Book Now",
      href: "https://calendly.com/shareef3ts/a-30min-slot-with-shareef",
    },
    audiences: {
      eyebrow: "Who We Work With",
      heading:
        "Discover a unique approach to building better partnerships, teams and organizations.",
      paragraphs: [
        "Shareef 3Ts Consulting works with individuals, teams, and organizations across the globe — from Washington, DC to Amman, from London to Kuala Lumpur — helping them do the work on the inside to make the desired impact on the outside.",
        "There is no “one size fits all.” Every engagement is tailored to meet your specific needs, challenges and goals.",
      ],
      items: [
        "Governments & Multilaterals",
        "Nonprofit & Public-Sector Organizations",
        "Sovereign-backed institutions",
        "Family enterprises & private organizations",
        "Teams navigating complex, high-stakes challenges",
      ],
    },
    servicesIntro: {
      eyebrow: "Services",
      heading:
        "Comprehensive services to support stronger leadership, teams and organizations.",
      introduction:
        "Explore a range of coaching and consulting services designed to meet your unique organizational needs, build resilience, and drive sustainable improvements in how you make an impact in the world.",
      cta: { label: "Learn More About Our Services", href: "/services" },
    },
    services: [
      {
        number: "01",
        title: "Coaching",
        description: [
          "Navigate challenge or change, enhance strengths, build resilience, and present your best self with clarity and confidence. Using thought-provoking, self-analytic and creative processes to help you build on strengths, identify blind spots, and fulfill your potential.",
        ],
      },
      {
        number: "02",
        title: "Facilitation & Training",
        description: [
          "Dismantle limiting structures with tailored engagement, intercultural insights, and practical tools that drive meaningful improvements in team dynamics. Fostering inclusion and liberation from entrenched structures and thinking.",
        ],
      },
      {
        number: "03",
        title: "Inclusive Design",
        description: [
          "Before the agenda is built, before the program is written, before the room is set, the most consequential decisions have already been made. Who is present. Whose voice shapes the design. Whether those affected have genuine authority to change the outcome.",
          "Whether a stakeholder convening, a multi-year program, or a discrete change initiative: design for the conditions that make real adoption possible, not just announced.",
        ],
      },
    ],
    principles: {
      eyebrow: "Why Choose 3Ts",
      heading: "Why choose 3Ts?",
      introduction:
        "Six working principles, held in motion: structured enough to guide decisions, flexible enough to meet the room as it is.",
      items: [
        {
          title: "Tailored Solutions",
          short: "Designed around the real context.",
          description:
            "There is no one size fits all. I appreciatively enquire to tailor my engagement to meet your specific needs, challenges and goals.",
        },
        {
          title: "Walking the Talk",
          short: "The work models the outcome.",
          description:
            "Together, we model effective teamwork by setting shared goals, clarifying roles, and communicating openly.",
        },
        {
          title: "One Team Mindset",
          short: "Shared ownership of what follows.",
          description:
            "We share responsibility for outcomes, successes and setbacks alike, because we will rise or fall together.",
        },
        {
          title: "Inclusive and Accountable",
          short: "Every voice has a role and a standard.",
          description:
            "We honor diverse perspectives, foster mutual accountability, and create space for every voice to be heard.",
        },
        {
          title: "Creativity with Purpose",
          short: "Inventive where it helps the work.",
          description:
            "We embrace fun and creativity as important tools for innovation, connection, and sustainable progress.",
        },
        {
          title: "Serious About Work, Light on Ego",
          short: "High standards without the posturing.",
          description:
            "Together we will take our mission, our stakeholders, and each other - but not ourselves - VERY seriously.",
        },
      ],
    },
    impact: {
      eyebrow: "Selected Impact",
      heading: "Better Decisions. Better Outcomes.",
      statistics: [
        {
          value: "16%",
          text: "Improvement in leadership scores across 18 training cohorts of World Bank leaders",
        },
        {
          value: "60%",
          text: "Reduction in gun violence since 2022 in a major US city, following community-centered intervention",
        },
        {
          value: "$247m",
          text: "Government funding managed for target communities, and reconciled for audit-ready closeout.",
        },
        {
          value: "20+",
          text: "Countries of professional experience across the Middle East, Africa, Asia, and beyond",
        },
      ],
    },
    engagementsEyebrow: "Selected Engagements",
    engagementsHeading: "Selected engagements.",
    engagements: [
      {
        number: "01",
        title: "MENA Region —\nNutrition Scale-Up Consultation",
        description:
          "Facilitated a three-day regional consultation convening 120 participants from 12 Arab government delegations and two multilateral partners to build shared commitments for scaling up maternal, adolescent, and child nutrition across the MENA region.",
      },
      {
        number: "02",
        title: "Saudi Arabia —\nVision 2030 Assessment",
        description:
          "Supported a multinational team to convene 80 global experts and facilitated their three-day convening to support an assessment of Saudi Arabia’s Vision 2030 progress and next steps.",
      },
      {
        number: "03",
        title: "Portland —\nCommunity Safety Transformation",
        description:
          "Led citywide initiative to realign governance and community engagement around gun violence and safety. 43% reduction in predicted gun violence and 24% mitigation of predicted homicides over three months.",
      },
      {
        number: "04",
        title: "Executive and Leadership Coach to INGOs",
        description:
          "Currently providing executive coaching support to multiple MENA and Africa senior leaders in a leading global humanitarian confederation working to combat systemic poverty and inequality.",
      },
      {
        number: "05",
        title: "DC Public Schools —\nLeadership Team Support",
        description:
          "Facilitated team building retreats and served as technical adviser for public sector leaders navigating the increased risk of gun violence in schools.",
      },
    ],
    aboutSection: {
      eyebrow: "About 3Ts",
      heading: "3Ts Consulting is a private advisory practice led by Shareef Khatib.",
      paragraphs: [
        "20 years of senior international experience across the Gulf, Levant, Africa, and Asia, including leadership of multi-country governance and reform portfolios valued at up to $161 million.",
        "Global class coach, facilitator and trainer (World Bank roster member). Georgetown-trained in Leadership Coaching and in Organizational Development & Change Leadership. Advanced degrees in Governance & Behavioral Neuroscience. British and Jordanian; working across the region in English, French, and Arabic.",
      ],
      cta: { label: "More About Shareef Khatib", href: "/about" },
      image: {
        src: "/shareef-khatib.webp",
        alt: "Portrait of Shareef Khatib",
        position: "50% 50%",
      },
    },
    testimonials: {
      eyebrow: "What Clients are Saying",
      items: [
        {
          quote:
            "Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team.",
          author: "Andrew F.",
          title: "Division Lead, International Assistance – Energy Sector",
        },
        {
          quote:
            "When I partnered with Shareef in a Program to strengthen the City of Portland’s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do.",
          author: "Rose King",
          title: "Principal, Hearts & Minds Communications",
        },
        {
          quote:
            "Shareef knew how to navigate criticism and stay the course, transparently and frequently sharing information about the work, building relationships, and not bending to the pressure of the “way things are always done.”",
          author: "Lisa Freeman",
          title: "Chief of Staff for Portland City Councilor Sameer Kanal",
        },
      ],
      cta: { label: "Read More Testimonials", href: "/testimonials" },
    },
    testimonialImage: {
      src: "/shareef-facilitating-testimonials.webp",
      alt: "Shareef Khatib facilitating a regional working session",
      position: "62% 42%",
    },
  },
  about: {
    eyebrow: "About",
    heading: "Building Together",
    subheading: "Hello, I'm Shareef.",
    introduction: [
      "I help individuals, teams, and organizations do the work on the inside to make the impact they want on the outside. I believe a better world is built decision by decision, room by room — when the right people are aligned around difficult truths and leave with the will to act on them. That belief is what connects everything I do, whether I'm holding a politically sensitive room in the Gulf, coaching a senior leader through a career inflection point, or designing a program for a community that has been failed by previous attempts at change.",
      "My methods are grounded in an academic background spanning Neuroscience and Governance, and shaped by 20 years of leading teams in some of the world's most complex and consequential environments. I bring rigor, warmth, and a genuine commitment to fairness — not as a stated value but as a design principle embedded in how I work.",
    ],
    profileHeading: "Professional Profile",
    profileItems: [
      {
        title: "Leader, Facilitator, Trainer & Coach",
        description:
          "I engage, convene, and support diverse individuals, teams, and stakeholders to meet their challenges: creating the conditions for candid exchange, genuine alignment, and decisions that hold.",
      },
      {
        title: "Strategist, Implementer & Change-maker",
        description:
          "I develop data-driven approaches to organizational and social change, drawing on systems and complexity thinking, human-centered design, and a both/and mindset that resists false choices.",
      },
      {
        title: "Program Leader & Cultural Interlocutor",
        description:
          "I have lived and worked across 9 countries, establishing and leading multi-million-dollar programs in fragile and conflict-affected environments, and have worked across science, health, education, government, and the public and private sectors.",
      },
    ],
    ethosHeading: "Inclusion is a global condition, not a Western export.",
    ethosDescription:
      "Read more about how I apply fairness and equity to facilitation, coaching, program design, and organizational change in my approach.",
    ethosCta: { label: "Explore my approach", href: "/approach" },
    credentialsHeading: "Education & Credentials",
    credentials: [
      "Certificate in Leadership Coaching — Georgetown University",
      "Certificate in Organizational Development & Change Leadership — Georgetown University",
      "Project Management Professional (PMP) — PMI",
      "PgDip in Local Government Management — University of Warwick",
      "M.Sc. International Development: Governance & Development — University of Birmingham",
      "M.S. Neuroscience — Emory University",
    ],
    cta: { label: "Book Now", href: "/contact" },
    quote:
      "I hope that together, our work yields positive outcomes worthy of the people who need them most and leads to a more just world.",
    image: {
      src: "/shareef-about.webp",
      alt: "Shareef Khatib speaking during a facilitated session",
      position: "67% 44%",
    },
  },
  approach: {
    eyebrow: "My Approach",
    heading:
      "Discover a unique approach to building better partnerships, teams and organizations.",
    introduction:
      "My methods are grounded in an academic background spanning Neuroscience and Governance, and shaped by 20 years of leading teams in some of the world's most complex and consequential environments.",
    image: {
      src: "/shareef-approach.webp",
      alt: "Shareef Khatib listening during a facilitated session",
      position: "64% 44%",
    },
    methodologyEyebrow: "My Methodology",
    methodologyHeading: "Find the service you need, then go deeper.",
    services: [
      {
        title: "Facilitation",
        label: "For consequential rooms",
        description: [
          "Most gatherings generate energy without producing decisions. I design and hold the rooms where that changes: politically sensitive multi-stakeholder processes, leadership off-sites, cross-functional strategy sessions, and decision convenings where alignment is earned and owned, rather than assumed. My methods do not manage the conversation, but listen for what is underneath it: the underlying narrative, the unspoken resistance, the connection no one has yet vocalized. I play that back with precision, so senior teams can make informed choices and leave with decisions that hold under the stress of real implementation.",
        ],
      },
      {
        title: "Coaching",
        label: "For leaders at inflection points",
        description: [
          "I work with senior leaders who are navigating complexity, carrying transformation mandates, or standing at a genuine inflection point in their careers. My approach is disciplined, warm, and direct: I hold the structure of our work firmly while creating the space and safety for real exploration. I listen for the person beneath the presenting problem and reflect it with precision: who you are in this situation, what grounds you, what gets in your way, and what a considered next step looks like from where you actually stand, not where the system expects you to be.",
        ],
      },
      {
        title: "Inclusive Design",
        label:
          "For plans, programs, and processes that must survive contact with reality — and the people who need to benefit from them",
        description: [
          "The most important decisions in any engagement happen before the room is set, before the agenda is built, and before implementation begins. Who is present? Whose voice shapes the design? Where does power sit, and where does it need to be redistributed for the work to land? Are we granting our stakeholders the authority to change our minds?",
          "I bring the same discipline to designing a three-day stakeholder consultation as I do to a multi-year program: honest diagnosis followed by a sound architecture that will adapt. That means understanding what the data shows and what people closest to the issue actually experience, and taking seriously where those two accounts diverge. It means building toward a shared, clearly articulated goal while keeping the path deliberately flexible, with equity, accountability, and guardrail agreements designed in from the start.",
          "It also means understanding that announced change is not adopted change: the conditions for adoption — whether in an organization, a policy environment, or a room — must be built deliberately. My work is to help create those conditions: in the workshop, in the program, and in the spaces between.",
        ],
      },
    ],
    ethos: {
      eyebrow: "Guiding Ethos",
      heading: "A Commitment to Fairness and Equity",
      lead:
        "I work with teams and organizations to understand the unique challenges of the current global context and help them consider their position and approaches to better support fairness and inclusion.",
      paragraphs: [
        "I approach every engagement with the understanding that equity looks different depending on where power sits, whose voice has historically been excluded, and what local realities actually demand.",
        "This is not a separate service. It is the lens through which I design facilitation processes, coaching relationships, programs, and organizational change.",
      ],
      closing: [
        "It's about recognizing that local leadership, indigenous knowledge, and non-Western organizational norms have immense value that is often overlooked.",
        "This work asks us to consider who sets the standards, whose knowledge counts, and what it truly means to be fair in a global context.",
      ],
    },
    stakeholderHeading: "Stakeholder Breadth",
    stakeholderDescription:
      "I work with government ministries, parliaments, militaries, civil society, faith leaders, communities, multilateral donors, and private-sector counterparts. In-person, hybrid, and virtual; multi-day design sprints, retreats, strategic dialogues, and learning cohorts.",
  },
  services: {
    eyebrow: "Services",
    heading:
      "Tailored consulting services to build stronger teams and organizations",
    introduction:
      "Explore coaching, facilitation and consulting services designed to meet your organizational needs, build resilience, and improve how you make an impact in the world.",
    image: {
      src: "/shareef-services.webp",
      alt: "Shareef Khatib presenting to a room",
      position: "58% 42%",
    },
    items: [
      {
        title: "Coaching",
        description: [
          "We come together in partnership to help you navigate challenge, change or opportunity. Using thought-provoking, self-analytic and creative processes, we build on strengths, identify blind spots, and help the best version of you show up when it matters.",
        ],
        cta: "Fulfill your potential",
        link: "/testimonials",
      },
      {
        title: "Facilitation & Training",
        description: [
          "I support diverse teams to come together to address their needs: fostering inclusion, surfacing entrenched structures and thinking, and using tailored stakeholder engagement to help teams identify drivers and solutions they can sustain.",
        ],
        cta: "Make a better team",
        link: "/testimonials",
      },
      {
        title: "Inclusive design for catalytic change",
        subtitle:
          "For organizations, programs and teams ready to move from intention to practice",
        description: [
          "Good programming and lasting organizational change share the same dependency: those doing the work must be part of designing it.",
          "I design and deliver programming that is locally-led, adaptive, and human-centered: drawing on inclusive engagement to define challenges and solutions in the language and narrative of those living them. That discipline carries directly into my organizational work: supporting leaders, teams, and the structures around them to strengthen how they lead, collaborate, and make decisions, so that change doesn't stop at the strategy document.",
          "Whether the starting point is an event to be planned, a program to be built, an organization to be shifted, or something in-between, I bring the same fundamental question: what conditions do we need to build for this to actually take hold, and how do we build them deliberately before implementation begins?",
        ],
        cta: "Build a better world",
        link: "/testimonials",
      },
    ],
  },
  perspectives: {
    eyebrow: "Perspectives",
    heading: "Writings, videos, and talks on decisions that hold.",
    introduction:
      "A growing library for Shareef's thinking on facilitation, coaching, organizational change, program design, fairness, and leadership in complex environments.",
    featuredEyebrow: "Featured Video",
    featuredTitle: "Featured perspective",
    videoEmbedUrl: "https://www.youtube.com/embed/_-31fvz8-7w",
    videoTitle: "Featured perspective from Shareef Khatib",
    videoLink: {
      label: "Watch on YouTube",
      href: "https://youtu.be/_-31fvz8-7w?si=faDjit1int1ba0Ga",
    },
    cards: [
      {
        label: "Writing",
        title: "Essays and reflections",
        text: "Future articles can live here with a title, excerpt, date, and link.",
      },
      {
        label: "Video",
        title: "Recorded conversations",
        text: "Future talks, interviews, and panels can be added as embedded media or external links.",
      },
      {
        label: "Talks",
        title: "Speaking and convening",
        text: "Future public engagements can be organized here without changing the page structure.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    heading: "Testimonials",
    introduction:
      "Hear directly from clients about how we worked together, how it helped them, and how you might also benefit.",
    backgroundImage: {
      src: "/vaseANDfooter.png",
      alt: "Decorative vase",
      position: "50% 50%",
    },
    groups: [
      {
        heading: "Coaching",
        testimonials: [
          {
            quote:
              "Working with Shareef was such a pleasure, and was so impactful for me. At the outset, I had doubts: prior experiences of coaching had caused me to question my instincts. I shared this concern with Shareef, who made me feel heard and safe enough to give coaching another try, and I’m really glad I did. When I started coaching, I was in the process of growing my team, and hoping to build my confidence as a leader. Shareef supported me to think about topics including body language and polarity of thinking, and through probing but supportive questions, helped me to reframe my own internal dialogue. He also encouraged me to draw on the areas where I already felt secure in my own abilities, helping me to remember the skills that I knew I already had in my wheelhouse and to recognize how these could be applied to the leadership of a new and expanding team. By the end of the 6-week coaching programme, my confidence in my own intuition and as a leader had increased significantly. I was able to recognize and celebrate my strengths, sit comfortably with the idea of making and learning from mistakes and access a level of self-assuredness that I’d been craving for a long time. I’ve been left less reliant on external validation, free of much of the self-doubt I had been experiencing for years and with actionable strategies to manage these challenges should they reoccur in future. Thank you so much Shareef – your support has been transformational!",
            author: "Penny D.",
            title: "Head of Fundraising, Settle UK",
          },
          {
            quote:
              "When I had to prepare for a big presentation to a 1000+ crowd of colleagues and experts, Shareef’s help was a game-changer. His mixture of experience, empathy, and clear guidance turned my rushed prep into a confident and polished performance. Shareef’s support helped me refine my strategy and sharpen my message, ensuring my presentation had maximum impact. Shareef’s unassuming yet effective coaching style, stress management tips, and composure techniques have also made a huge difference in my workplace experience. He combines professionalism with a deep understanding of clients’ needs. His dedication and ability to help me conquer nerves and feel confident allowed me to overcome my fear of public speaking, and has allowed me to be generally more grounded and ready to tackle professional challenges ahead.",
            author: "Hannah D.",
            title: "International Program Manager, Multilateral Donor",
          },
          {
            quote:
              "Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team. His wealth of personal leadership experience provides great context for how to approach challenging management situations and his coaching style has given me assurance that my intrinsic ability can manifest into strong, empathetic leadership for my team.",
            author: "Andrew F.",
            title: "Division Lead, International Assistance – Energy Sector",
          },
        ],
      },
      {
        heading: "Facilitation, Teambuilding & Training",
        testimonials: [
          {
            quote:
              "Partnering with Shareef was a turning point for our leadership team. I came to him seeking support around team development, re-centering our vision and mission, and navigating complex challenges impacting our outcomes. From day one, he brought deep expertise, sharp insight, and genuine care—helping us craft a clear, actionable plan that has led to measurable progress on goals for our school this year. When planning our full-day retreat, Shareef created a space where every voice was heard, every challenge named, and real solutions were developed. His ability to surface core values, strengthen team cohesion, and offer practical, research-based strategies empowered us to lead with clarity, cohesion and confidence. For any team looking to deepen its impact or solve persistent challenges, I wholeheartedly recommend Shareef. His work transforms people and outcomes.",
            author: "Will L.",
            title: "Principal, Public Middle School",
          },
        ],
      },
      {
        heading: "Inclusive Design",
        testimonials: [
          {
            quote:
              "When I partnered with Shareef in a Program to strengthen the City of Portland’s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do. Shareef didn’t just improve on what was already there—he challenged long-standing assumptions and boldly conceptualized a new path forward for the City client. His ability to present a novel, community-centered approach disrupted business as usual and pushed the City to reimagine how it shows up in this critical work. What stood out most was Shareef’s instinct for collaboration and his respect for the expertise others bring to the table. He engaged my team to provide technical assistance to community-based organizations doing frontline work—ensuring they had the tools and support to thrive. He recognized the value of strategic communications early on and worked with both City staff and CBOs to sharpen messaging and align on a shared approach. Together, we witnessed powerful results: clearer messaging, stronger partnerships, and a measurable shift in how the City and community worked together. Shareef is the kind of change-maker who not only sees what’s possible but helps others believe it and build it. I can’t recommend him enough as a partner in organizational development and transformational change.",
            author: "Rose King",
            title: "Principal, Hearts & Minds Communications",
          },
        ],
      },
      {
        heading: "Program Design",
        testimonials: [
          {
            quote:
              "I began working in public safety at the City of Portland in 2022 at the height of our gun violence emergency… That’s when I called Shareef. I knew from working with him in Afghanistan and Nigeria that he would know how to bring new thinking and solutions to our crisis… Shareef landed in Portland and within 3 months had done things that no one in our city had done before – he got money into the hands of community partners with the relationships and skills to keep people from shooting… Today, gun violence is down nearly 60% since 2022. I’m convinced we wouldn’t be where we are today without Shareef’s work.",
            author: "Lisa Freeman",
            title:
              "Chief of Staff for Portland City Councilor Sameer Kanal and Former Community Safety Division Manager",
          },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's Chat",
    introduction:
      "I'd love to hear from you. Reach out to discuss how we might work together to support your individuals, teams, and organization.",
    email: "shareef@3ts-inc.com",
    locations: "Washington, DC · London, UK · Amman, JO",
    emailLabel: "Email",
    locationsLabel: "Office Locations",
    emailCtaLabel: "Email",
    bookingCta: {
      label: "Book Now",
      href: "https://calendly.com/shareef3ts/a-30min-slot-with-shareef",
    },
    imageCaption: "In the room · Amman",
    image: {
      src: "/shareef-contact.webp",
      alt: "Shareef Khatib listening during a facilitated workshop",
      position: "70% 48%",
    },
  },
};

export function getThreeTsContent() {
  return fetchCmsDocument<ThreeTsContent>(
    `*[_type == "threeTsSite"][0]{
      global,
      home{
        ...,
        aboutSection{..., image{"src": asset->url, alt, position}},
        testimonialImage{"src": asset->url, alt, position}
      },
      about{..., image{"src": asset->url, alt, position}},
      approach{
        ...,
        image{"src": asset->url, alt, position},
      },
      services{
        ...,
        image{"src": asset->url, alt, position},
      },
      perspectives,
      testimonials{..., backgroundImage{"src": asset->url, alt, position}},
      contact{
        ...,
        image{"src": asset->url, alt, position}
      }
    }`,
    defaultThreeTsContent,
  );
}
