import Link from "next/link";

export const metadata = {
  title: "FAQ | Warriors Academy",
  description: "Frequently asked questions about Warriors Academy homeschool athletic program in Springfield, Missouri.",
};

export default function FAQ() {
  const faqs = [
    {
      q: "Is this a real school? Will my child get a diploma?",
      a: "Warriors Academy operates as a Missouri-compliant homeschool co-op. Our 4-day model meets all Missouri requirements including 1,000 hours of instruction covering math, reading, social studies, English, and science. Parents remain the primary educators and can issue diplomas under Missouri homeschool law."
    },
    {
      q: "Can my child still play for their public school sports team?",
      a: "Missouri does not currently have a Tim Tebow law allowing homeschoolers to play public school sports. However, our athletes compete in NCHC-sanctioned national homeschool tournaments and have access to elite-level competition and college recruiting exposure that most public school athletes never get."
    },
    {
      q: "How does the 4-day schedule work?",
      a: "Two days per week focus on core academics (math, reading, English, science, social studies) completed in focused 2-3 hour blocks. Two additional days are dedicated to enrichment including athletics, entrepreneurship, financial literacy, and AI education. This model gives athletes up to 4 hours of training daily while exceeding academic standards."
    },
    {
      q: "Do colleges accept homeschooled athletes?",
      a: "Absolutely. Homeschoolers have an 87% college acceptance rate compared to 68% for public school students. Our custom recruiting profile pages with highlight films, verified stats, and interview videos give our athletes a significant edge. Multiple NCAA Division I athletes were homeschooled including Tim Tebow, Blake Griffin, and Simone Biles."
    },
    {
      q: "What ages and grades do you accept?",
      a: "Warriors Academy serves student athletes in middle school and high school. Contact us to discuss your specific situation and how we can build a program around your athlete."
    },
    {
      q: "What is the ATG training program?",
      a: "ATG stands for Athletic Truth Group, a knees-over-toes joint-first training system developed by Ben Patrick. Warriors Academy is the only ATG-certified training hub within a 200-mile radius. This system bulletproofs knees, ankles, and the posterior chain to increase vertical jump and speed while dramatically reducing non-contact injuries."
    },
    {
      q: "What does the entrepreneur program involve?",
      a: "Every student is required to launch and operate their own real business, which directly impacts their grade. Students also participate in a team business to fundraise for the school. Our curriculum covers AI and app development, financial literacy, marketing, sales, and coding. Students learn to leverage technology and build real wealth."
    },
    {
      q: "Is this program only for basketball players?",
      a: "While basketball is our primary sport, we also offer a competitive Cheer and Stunt program. Every student also completes a mandatory 6-week golf season to build mental toughness. The entrepreneurship and academic curriculum benefits any student regardless of sport."
    },
    {
      q: "How do homeschoolers do compared to public school students academically?",
      a: "Homeschoolers consistently outperform public school peers. They score in the 65th to 80th percentile on standardized tests versus the 50th percentile for public school. Average SAT scores are 1190 versus 1060. College acceptance rates are 87% versus 68%. And 87% of peer-reviewed studies show homeschoolers have superior social and emotional development."
    },
    {
      q: "What about socialization?",
      a: "The socialization myth has been thoroughly debunked. 87% of peer-reviewed studies prove homeschool students perform significantly better than public school peers in social, emotional, and psychological development. Our athletes train together daily, compete in tournaments, participate in community outreach and mission projects, and build deep relationships through shared faith and competition."
    },
    {
      q: "How does film study work in your program?",
      a: "Film study is a core part of our athletic development. Our 4-day hybrid model dedicates time specifically to reviewing game film, breaking down plays, and helping athletes visually understand what coaches are asking them to do. Research shows that visual learning through film review significantly accelerates player development and game IQ."
    },
    {
      q: "What is Shoot 360 and how do your athletes use it?",
      a: "Shoot 360 is the world's leading immersive basketball training system with 60 locations worldwide. It just opened in Springfield, MO, and our athletes train there at least 2 sessions per week. The system uses motion-tracking cameras and AI analytics to measure arc, depth, and alignment on every shot. Players report shooting percentage improvements of up to 18 percent."
    },
    {
      q: "Is Warriors Academy a Christian program?",
      a: "Yes. Everything we do is rooted in faith. We are a Christ-centered program that blends spiritual growth with athletic achievement. Players are required to apply biblical principles in their daily lives and participate in community outreach and mission projects. We honor God in everything we do on and off the court."
    },
    {
      q: "How much does the program cost?",
      a: "Contact us directly for current tuition and fee information. We work with families to make our program accessible. Our athletes also participate in team fundraising businesses as part of the entrepreneur curriculum, which helps offset costs."
    },
    {
      q: "How do I apply?",
      a: "Email us at missouriwarriorsbasketball@gmail.com or use the contact form on our website. Spots are limited and we accept families who are serious about athletic development, academic excellence, and Christ-centered living."
    }
  ];

  return (
    <main className="bg-gray-900 text-white">
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Frequently Asked <span className="text-green-500">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">Everything you need to know about Warriors Academy.</p>
        </div>
      </section>

      <section className="py-8 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-300">{faq.a}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="mailto:missouriwarriorsbasketball@gmail.com" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
            Still Have Questions? Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
