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

      {/* Core Pillars */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Our Students <span className="text-green-500">Learn and Build</span></h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Launch a Real Business</h3>
              <p className="text-gray-300">Every student is required to launch and operate their own individual business. This is not a class project or simulation. It is a real business that directly impacts their grade. Students also participate in a team business used to fundraise for school programs, learning both individual initiative and team collaboration.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">AI and Software Development</h3>
              <p className="text-gray-300">Students learn to build applications, software, and SAAS platforms using artificial intelligence. We teach them to use AI as a competitive advantage, building marketing platforms, automating tasks, and creating digital products that generate real revenue.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Financial Literacy</h3>
              <p className="text-gray-300">Our enrichment days cover budgeting, investing, taxes, credit, and wealth building. Warriors students understand how money works and how to make it work for them. We teach financial principles that public schools completely ignore.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Marketing and Sales</h3>
              <p className="text-gray-300">From social media marketing to sales funnels, our students learn how to attract customers and close deals. These are the skills that build empires, and our athletes learn them before they graduate high school.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 border border-gray-700 md:col-span-2">
              <h3 className="text-xl font-bold text-green-400 mb-3">Coding and Technology</h3>
              <p className="text-gray-300">Students gain hands-on experience with coding, web development, and emerging technologies. In a world driven by technology, our athletes will not just use it, they will build with it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warriors Fight Song */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The <span className="text-green-500">Warriors Fight Song</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every Warriors athlete gets their name featured in our custom-produced team fight song built using AI music production. This is our anthem, our identity, and our culture.
          </p>
          <div className="bg-gray-800 rounded-2xl p-6 border border-green-500/30 max-w-md mx-auto">
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
      <section className="py-16 px-4 bg-gray-800">
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
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">This Model is <span className="text-green-500">Exploding Nationwide</span></h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">Warriors Academy is not an experiment. Schools across the country are proving that the athletic-entrepreneur hybrid model produces exceptional students. Here is the evidence.</p>
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Acton Academy | 300+ Campuses, 31 States, 25+ Countries</h3>
              <p className="text-gray-300">Founded in Austin in 2010, Acton Academy has grown into a worldwide network of over 300 schools. Their learner-driven model, where entrepreneurial kids run their own businesses and self-paced learning quests, has produced students performing 3.0 to 5.0 grade levels above the national average. They have received over 15,000 applications from parents wanting to open affiliate schools. As one founder said, they cannot build schools fast enough.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Alpha School / Texas Sports Academy | 22 Campuses Nationally</h3>
              <p className="text-gray-300">Alpha School delivers core academics via AI in just two hours each morning so athletes can spend the afternoon on elite sports training and life skills. Their students score in the top 1 to 2 percent nationally on standardized tests. This is the same philosophy Warriors Academy uses: focused academics plus elite training.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Colossal Academy (Florida) | Featured in Forbes</h3>
              <p className="text-gray-300">A Forbes-featured model where students run live businesses, earn real apprenticeship certifications like a fishing captain license, and compete in a 25,000 dollar teen business competition alongside Shark Tank investor Daymond John. This is the future of education, and Warriors Academy is bringing it to Springfield.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-green-400 mb-3">Iowa BIG | Real Paid Work for Academic Credit</h3>
              <p className="text-gray-300">A hybrid high school where students earn core academic credits by doing real-world paid project work with local businesses instead of textbook simulations. Students graduate with a resume, not just a transcript.</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
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
