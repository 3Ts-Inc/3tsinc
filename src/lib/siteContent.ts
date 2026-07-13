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

export type ThreeTsContent = {
  home: {
    tagline: string;
    introduction: string;
    serviceSummary: string;
    services: HomeService[];
    engagements: Engagement[];
    testimonialImage: SiteImage;
  };
  about: {
    quote: string;
    image: SiteImage;
  };
  approach: {
    image: SiteImage;
    services: MethodologyService[];
  };
  services: {
    image: SiteImage;
    items: ServicePageItem[];
  };
  contact: {
    introduction: string;
    email: string;
    locations: string;
    image: SiteImage;
  };
};

export const defaultThreeTsContent: ThreeTsContent = {
  home: {
    tagline: "Thoroughly Thought Through.",
    introduction:
      "A better world starts with intention and is built through better decisions, with honest information, in rooms designed for clarity rather than comfort.",
    serviceSummary:
      "Coaching; Facilitation & Training; Inclusive Program Design — grounded in neuroscience, governance, and 20 years of global leadership experience.",
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
    testimonialImage: {
      src: "/shareef-facilitating-testimonials.webp",
      alt: "Shareef Khatib facilitating a regional working session",
      position: "62% 42%",
    },
  },
  about: {
    quote:
      "I hope that together, our work yields positive outcomes worthy of the people who need them most and leads to a more just world.",
    image: {
      src: "/shareef-about.webp",
      alt: "Shareef Khatib speaking during a facilitated session",
      position: "67% 44%",
    },
  },
  approach: {
    image: {
      src: "/shareef-approach.webp",
      alt: "Shareef Khatib listening during a facilitated session",
      position: "64% 44%",
    },
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
  },
  services: {
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
  contact: {
    introduction:
      "I'd love to hear from you. Reach out to discuss how we might work together to support your individuals, teams, and organization.",
    email: "shareef@3ts-inc.com",
    locations: "Washington, DC · London, UK · Amman, JO",
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
      home{
        tagline,
        introduction,
        serviceSummary,
        services[]{number, title, description},
        engagements[]{number, title, description},
        testimonialImage{"src": asset->url, alt, position}
      },
      about{quote, image{"src": asset->url, alt, position}},
      approach{
        image{"src": asset->url, alt, position},
        services[]{title, label, description}
      },
      services{
        image{"src": asset->url, alt, position},
        items[]{title, subtitle, description, cta, link}
      },
      contact{
        introduction,
        email,
        locations,
        image{"src": asset->url, alt, position}
      }
    }`,
    defaultThreeTsContent,
  );
}
