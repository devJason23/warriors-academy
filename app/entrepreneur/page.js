import Link from "next/link";

export const metadata = {
  title: "Entrepreneur Program | Warriors Academy",
  description: "The Warriors Academy Entrepreneur Unschool teaches students to build real businesses, leverage AI, and develop financial literacy.",
};

export default function Entrepreneur() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-green-400 font-semibold tracking-wide mb-4 text-sm uppercase">Beyond the Court</p>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            The <span className="text-green-500">Entrepreneur</span> Unschool
          </h1>
          <p className="text-xl text-gray-300 mb-4 italic">
            "Start children off on the way they should go, and even when they are old they will not turn from it." - Proverbs 22:6
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Public schools teach kids to be employees. Warriors Academy teaches them to be owners. While other students memorize textbooks, our athletes build real businesses, master AI, and graduate with skills that create wealth.
          </p>
        </div>
      </section>

      {/* How It Works - Parent Partnership */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">A True <span className="text-green-500">Parent Partnership</span></h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Warriors Academy is a homeschool co-op. Missouri law requires parents to be responsible for at least 51% of their child's education. We designed our model to make that partnership powerful, not burdensome.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-3">Parents Handle the Foundations</h3>
              <p className="text-gray-300">Parents are responsible for core academics: math, English, reading, and science. These are the building blocks every child needs, and parents know their child's learning style best. Students have a dedicated study hour each day at the academy to work on parent-assigned or teacher-assigned work.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-3">Warriors Handles What Schools Cannot Teach</h3>
              <p className="text-gray-300">We teach the skills that public schools completely ignore: marketing, sales, funnels, AI, coding, finance, trusts, cryptocurrency, blockchain, entrepreneurship, and elite athletic training. These are the skills that build wealth and create opportunities no classroom can provide.</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8 text-lg">This is still homeschooling. Parents are actively involved. Children do not need to sit in classrooms all day to learn.</p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Students <span className="text-green-500">Learn and Build</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Launch a Real Business</h3>
              <p className="text-gray-300">Every student is required to launch and operate their own individual business. This is not a class project or simulation. It is a real business that directly impacts their grade. Students also participate in a team business used to fundraise for school programs, learning both individual initiative and team collaboration.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">AI and Software Development</h3>
              <p className="text-gray-300">Students learn to build applications, software, and SAAS platforms using artificial intelligence. We teach them to use AI as a competitive advantage, building marketing platforms, automating tasks, and creating digital products that generate real revenue.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Financial Literacy</h3>
              <p className="text-gray-300">Our enrichment days cover budgeting, investing, taxes, credit, trusts, cryptocurrency, blockchain, and wealth building. Warriors students understand how money works and how to make it work for them. We teach financial principles that public schools completely ignore.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Marketing and Sales</h3>
              <p className="text-gray-300">From social media marketing to sales funnels, our students learn how to attract customers and close deals. These are the skills that build empires, and our athletes learn them before they graduate high school.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 md:col-span-2">
              <h3 className="text-xl font-bold text-green-400 mb-3">Coding and Technology</h3>
              <p className="text-gray-300">Students gain hands-on experience with coding, web development, and emerging technologies. In a world driven by technology, our athletes will not just use it, they will build with it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Track */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">The <span className="text-green-500">Digital Marketing</span> Track</h2>
          <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto">
            Not every student walks in with a business idea, and that is okay. Our Digital Marketing Track gives students a proven entry point into entrepreneurship through affiliate marketing, content creation, and digital advertising, all without ever touching social media themselves.
          </p>
          <p className="text-lg text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            As a Christ-centered school, we take digital safety seriously. Students learn the business mechanics of social media without the toxic scroll.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-900 rounded-xl p-8 border border-green-500/30">
              <div className="text-3xl mb-4">&#128737;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">School-Managed Accounts</h3>
              <p className="text-gray-300">Warriors Academy creates and manages all business social media accounts on behalf of students. Students never log into Instagram, TikTok, or YouTube directly. They learn to use social media as a business tool, not a distraction.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-green-500/30">
              <div className="text-3xl mb-4">&#129302;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">AI-Assisted Content</h3>
              <p className="text-gray-300">Students use AI tools to generate posts, captions, product reviews, blog articles, and video scripts. They learn prompt engineering, content strategy, and how to create compelling marketing material. All content goes through a teacher and coach approval workflow before publishing.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-green-500/30">
              <div className="text-3xl mb-4">&#128200;</div>
              <h3 className="text-xl font-bold text-green-400 mb-3">Strategy Over Scrolling</h3>
              <p className="text-gray-300">Students focus on keyword research, audience targeting, content planning, analytics, and conversion optimization. They see the dashboards, track the data, and learn the business side of digital marketing without ever doom-scrolling a feed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Ideas for Young Entrepreneurs */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-4">Real <span className="text-green-500">Business Ideas</span> for Young Entrepreneurs</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Our students do not wait until college to start building. Here are examples of real businesses Warriors athletes can launch, from day one.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#127918;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Gaming Tutorials and Content</h3>
              <p className="text-gray-300 text-sm">One of our Warriors players is a top-ranked 2K Basketball player. He has the street cred to create and sell tutorial content, strategy guides, and coaching sessions. If you are elite at something, monetize it.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#128722;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Affiliate Marketing</h3>
              <p className="text-gray-300 text-sm">Students pick a niche they love, basketball gear, shoes, training equipment, faith-based products, and build affiliate blogs, review sites, or content channels using AI. Real commissions from real recommendations.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#128249;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Sports Media and Videography</h3>
              <p className="text-gray-300 text-sm">Film highlights for local teams, create training content, or start a sports photography business. Every youth league and travel team needs quality video and the market is wide open.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#128085;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Custom Merchandise and Apparel</h3>
              <p className="text-gray-300 text-sm">Design and sell custom t-shirts, hoodies, hats, and accessories using print-on-demand platforms. No inventory needed, just creativity and hustle.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#128187;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">AI-Built Niche Websites</h3>
              <p className="text-gray-300 text-sm">Students learn to build niche websites and blogs using AI tools, earning through affiliate links, ads, and digital products. A blog about basketball training tips can generate passive income while teaching SEO and content marketing.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#127912;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Digital Art and Design</h3>
              <p className="text-gray-300 text-sm">Create logos, graphics, social media templates, and digital art using AI design tools. Sell on marketplaces or offer services to local businesses. Creative students can turn their talent into a real design agency.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#9968;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Local Service Businesses</h3>
              <p className="text-gray-300 text-sm">Lawn care, car detailing, pressure washing, or pet sitting. These businesses teach scheduling, customer service, pricing, and cash flow management with zero technology required to start.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#128218;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Tutoring and Coaching</h3>
              <p className="text-gray-300 text-sm">Students who excel in a subject can tutor younger students. Athletes with skills can offer private training sessions. Teaching others is one of the most powerful ways to master any skill while earning income.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-2xl mb-3">&#9971;</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Faith-Based Products</h3>
              <p className="text-gray-300 text-sm">Devotional journals, scripture-based apparel, inspirational content, or faith-based accessories. Students can build businesses that align with their values and serve the Christian community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warriors Fight Song */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-green-500">Warriors Fight Song</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every Warriors athlete gets their name featured in our custom-produced team fight song built using AI music production. This is our anthem, our identity, and our culture.
          </p>
          <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30 max-w-md mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-green-500 text-2xl">&#9835;</div>
              <div className="text-left">
                <p className="text-white font-bold text-lg">Warriors Fight Song</p>
                <p className="text-green-400 text-sm">Warriors Academy</p>
              </div>
            </div>
            <audio controls className="w-full" style={{filter: 'invert(1) hue-rotate(140deg)'}}>
              <source src="/warriors-fight-song.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-gray-500 text-xs mt-3">Song coming soon. Check back for the official Warriors anthem.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">The Numbers <span className="text-green-500">Speak for Themselves</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">60%</p>
              <p className="text-gray-400 text-sm">of teens prefer starting a business over a traditional job (Junior Achievement USA)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">69%</p>
              <p className="text-gray-400 text-sm">of teens have a business idea but do not know how to start the process</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">78%</p>
              <p className="text-gray-400 text-sm">of entrepreneurs say work experience is more helpful than a college degree</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">4-9x</p>
              <p className="text-gray-400 text-sm">more likely to start a venture after receiving entrepreneurship training</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">24%</p>
              <p className="text-gray-400 text-sm">of 18-24 year olds are now active entrepreneurs, the highest rate of any age group (Babson College GEM Report)</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-500">67%</p>
              <p className="text-gray-400 text-sm">of teens say fear of failure stops them from starting, which is why we teach them young</p>
            </div>
          </div>
          <p className="text-center text-gray-400">Studies show entrepreneurship education significantly increases critical thinking, grit, growth mindset, and self-efficacy in students (NASSP).</p>
        </div>
      </section>

      {/* This Model is Exploding */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">This Model is <span className="text-green-500">Exploding Nationwide</span></h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">Warriors Academy is not an experiment. Schools across the country are proving that the athletic-entrepreneur hybrid model produces exceptional students. Here is the evidence.</p>
          <div className="space-y-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Acton Academy | 300+ Campuses, 31 States, 25+ Countries</h3>
              <p className="text-gray-300">Founded in Austin in 2010, Acton Academy has grown into a worldwide network of over 300 schools. Their learner-driven model, where entrepreneurial kids run their own businesses and self-paced learning quests, has produced students performing 3.0 to 5.0 grade levels above the national average. They have received over 15,000 applications from parents wanting to open affiliate schools.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Alpha School / Texas Sports Academy | 22 Campuses Nationally</h3>
              <p className="text-gray-300">Alpha School delivers core academics via AI in just two hours each morning so athletes can spend the afternoon on elite sports training and life skills. Their students score in the top 1 to 2 percent nationally on standardized tests. This is the same philosophy Warriors Academy uses: focused academics plus elite training.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Colossal Academy (Florida) | Featured in Forbes</h3>
              <p className="text-gray-300">A Forbes-featured model where students run live businesses, earn real apprenticeship certifications, and compete in a 25,000 dollar teen business competition alongside Shark Tank investor Daymond John. This is the future of education, and Warriors Academy is bringing it to Springfield.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Iowa BIG | Real Paid Work for Academic Credit</h3>
              <p className="text-gray-300">A hybrid high school where students earn core academic credits by doing real-world paid project work with local businesses instead of textbook simulations. Students graduate with a resume, not just a transcript.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Local Missouri Programs</h3>
              <p className="text-gray-300">To The Moon Education in St. Peters, Missouri operates on a similar 4-day schedule with athletics. Purpose Driven Academy in St. Louis uses Junior Achievement BizTown for simulated entrepreneurial field trips. The demand is real and growing across Missouri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-gray-900 to-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Real?</h2>
          <p className="text-xl text-gray-300 mb-4 italic">
            "I can do all things through Christ who strengthens me." - Philippians 4:13
          </p>
          <p className="text-xl text-gray-300 mb-8">
            Warriors Academy does not just prepare athletes for college. We prepare them for life. Our students graduate with businesses, skills, and a Christ-centered foundation that lasts forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:missouriwarriorsbasketball@gmail.com" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Apply Now
            </a>
            <Link href="/" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
