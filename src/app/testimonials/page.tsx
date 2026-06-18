import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const coaching = [
  {
    quote:
      "Working with Shareef was such a pleasure, and was so impactful for me. At the outset, I had doubts: prior experiences of coaching had caused me to question my instincts. I shared this concern with Shareef, who made me feel heard and safe enough to give coaching another try, and I\u2019m really glad I did. When I started coaching, I was in the process of growing my team, and hoping to build my confidence as a leader. Shareef supported me to think about topics including body language and polarity of thinking, and through probing but supportive questions, helped me to reframe my own internal dialogue. He also encouraged me to draw on the areas where I already felt secure in my own abilities, helping me to remember the skills that I knew I already had in my wheelhouse and to recognize how these could be applied to the leadership of a new and expanding team. By the end of the 6-week coaching programme, my confidence in my own intuition and as a leader had increased significantly. I was able to recognize and celebrate my strengths, sit comfortably with the idea of making and learning from mistakes and access a level of self-assuredness that I\u2019d been craving for a long time. I\u2019ve been left less reliant on external validation, free of much of the self-doubt I had been experiencing for years and with actionable strategies to manage these challenges should they reoccur in future. Thank you so much Shareef \u2013 your support has been transformational!",
    author: "Penny D.",
    title: "Head of Fundraising, Settle UK",
  },
  {
    quote:
      "When I had to prepare for a big presentation to a 1000+ crowd of colleagues and experts, Shareef\u2019s help was a game-changer. His mixture of experience, empathy, and clear guidance turned my rushed prep into a confident and polished performance. Shareef\u2019s support helped me refine my strategy and sharpen my message, ensuring my presentation had maximum impact. Shareef\u2019s unassuming yet effective coaching style, stress management tips, and composure techniques have also made a huge difference in my workplace experience. He combines professionalism with a deep understanding of clients\u2019 needs. His dedication and ability to help me conquer nerves and feel confident allowed me to overcome my fear of public speaking, and has allowed me to be generally more grounded and ready to tackle professional challenges ahead.",
    author: "Hannah D.",
    title: "International Program Manager, Multilateral Donor",
  },
  {
    quote:
      "Shareef has been a great coach for me as a new manager. He has provided me tools to work through customized strategies for dealing with new management situations and to empower my team. His wealth of personal leadership experience provides great context for how to approach challenging management situations and his coaching style has given me assurance that my intrinsic ability can manifest into strong, empathetic leadership for my team.",
    author: "Andrew F.",
    title: "Division Lead, International Assistance \u2013 Energy Sector",
  },
];

const facilitation = [
  {
    quote:
      "Partnering with Shareef was a turning point for our leadership team. I came to him seeking support around team development, re-centering our vision and mission, and navigating complex challenges impacting our outcomes. From day one, he brought deep expertise, sharp insight, and genuine care\u2014helping us craft a clear, actionable plan that has led to measurable progress on goals for our school this year. When planning our full-day retreat, Shareef created a space where every voice was heard, every challenge named, and real solutions were developed. His ability to surface core values, strengthen team cohesion, and offer practical, research-based strategies empowered us to lead with clarity, cohesion and confidence. For any team looking to deepen its impact or solve persistent challenges, I wholeheartedly recommend Shareef. His work transforms people and outcomes.",
    author: "Will L.",
    title: "Principal, Public Middle School",
  },
];

const odChange = [
  {
    quote:
      "When I partnered with Shareef in a Program to strengthen the City of Portland\u2019s approach to gun violence prevention and intervention, I saw firsthand what visionary leadership can do. Shareef didn\u2019t just improve on what was already there\u2014he challenged long-standing assumptions and boldly conceptualized a new path forward for the City client. His ability to present a novel, community-centered approach disrupted business as usual and pushed the City to reimagine how it shows up in this critical work. What stood out most was Shareef\u2019s instinct for collaboration and his respect for the expertise others bring to the table. He engaged my team to provide technical assistance to community-based organizations doing frontline work\u2014ensuring they had the tools and support to thrive. He recognized the value of strategic communications early on and worked with both City staff and CBOs to sharpen messaging and align on a shared approach. Together, we witnessed powerful results: clearer messaging, stronger partnerships, and a measurable shift in how the City and community worked together. Shareef is the kind of change-maker who not only sees what\u2019s possible but helps others believe it and build it. I can\u2019t recommend him enough as a partner in organizational development and transformational change.",
    author: "Rose King",
    title: "Principal, Hearts & Minds Communications",
  },
];

const programDesign = [
  {
    quote:
      "I began working in public safety at the City of Portland in 2022 at the height of our gun violence emergency\u2026 That\u2019s when I called Shareef. I knew from working with him in Afghanistan and Nigeria that he would know how to bring new thinking and solutions to our crisis\u2026 Shareef landed in Portland and within 3 months had done things that no one in our city had done before \u2013 he got money into the hands of community partners with the relationships and skills to keep people from shooting\u2026 Today, gun violence is down nearly 60% since 2022. I\u2019m convinced we wouldn\u2019t be where we are today without Shareef\u2019s work.",
    author: "Lisa Freeman",
    title: "Chief of Staff for Portland City Councilor Sameer Kanal and Former Community Safety Division Manager",
  },
];

export default function TestimonialsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-cream text-charcoal">
      <Navbar />

      {/* Hero */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start space-y-4 mb-8">
            <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="w-12 h-[2px] bg-gold/60"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-charcoal mb-12">
            Testimonials
          </h1>
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Hear directly from clients about how we worked together, how it helped them, and how you might also benefit.
          </p>
        </div>
      </section>

      {/* Coaching */}
      <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-[#111]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaseANDfooter.png"
            alt="Decorative vase"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#151a16]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-cream mb-16 pb-8 border-b border-cream/10">
            Coaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {coaching.map((t, i) => (
              <div key={i} className="flex flex-col">
                <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                  &ldquo;
                </div>
                <p className="font-serif text-lg md:text-xl text-cream/90 leading-relaxed mb-8 grow">
                  {t.quote}
                </p>
                <div>
                  <div className="text-gold text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                    &mdash; {t.author}
                  </div>
                  <div className="text-cream/50 text-xs tracking-widest uppercase">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilitation, Teambuilding & Training */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal mb-16 pb-8 border-b border-charcoal/10">
            Facilitation, Teambuilding &amp; Training
          </h2>
          {facilitation.map((t, i) => (
            <div key={i} className="flex flex-col max-w-3xl">
              <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed mb-8">
                {t.quote}
              </p>
              <div>
                <div className="text-charcoal text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                  &mdash; {t.author}
                </div>
                <div className="text-charcoal/50 text-xs tracking-widest uppercase">
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organizational Development & Change Management */}
      <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 bg-[#111]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/vaseANDfooter.png"
            alt="Decorative vase"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-[#151a16]/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-cream mb-16 pb-8 border-b border-cream/10">
            Organizational Development &amp; Change Management
          </h2>
          {odChange.map((t, i) => (
            <div key={i} className="flex flex-col max-w-3xl">
              <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-xl md:text-2xl text-cream/90 leading-relaxed mb-8">
                {t.quote}
              </p>
              <div>
                <div className="text-gold text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                  &mdash; {t.author}
                </div>
                <div className="text-cream/50 text-xs tracking-widest uppercase">
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Design */}
      <section className="w-full py-32 px-6 md:px-16 lg:px-24 bg-[#f8f6f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal mb-16 pb-8 border-b border-charcoal/10">
            Program Design
          </h2>
          {programDesign.map((t, i) => (
            <div key={i} className="flex flex-col max-w-3xl">
              <div className="font-serif text-6xl text-gold opacity-50 mb-4 leading-none">
                &ldquo;
              </div>
              <p className="font-serif text-xl md:text-2xl text-charcoal/90 leading-relaxed mb-8">
                {t.quote}
              </p>
              <div>
                <div className="text-charcoal text-sm font-semibold tracking-[0.1em] uppercase mb-1">
                  &mdash; {t.author}
                </div>
                <div className="text-charcoal/50 text-xs tracking-widest uppercase">
                  {t.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
