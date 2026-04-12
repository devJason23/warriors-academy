import Link from "next/link";

export const metadata = {
  title: "Why Homeschool? | Warriors Academy",
  description: "The hidden history of public education and why homeschooling is the superior path for student athletes.",
};

export default function WhyHomeschool() {
  return (
    <main className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Why <span className="text-green-500">Homeschool</span>?
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The system is not broken. It is working exactly as it was designed: to create obedient workers, not independent thinkers. Here is the full story.
          </p>
        </div>
      </section>

      {/* The Hidden History */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">The Hidden History of Public Education</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">The Prussian Military Blueprint</h3>
              <p className="text-gray-300 mt-2">The modern American school system was imported from 19th-century Prussia, a military state that designed its education system to create obedient soldiers and suppress independent thought. This was never about learning. It was about control.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">The Industrial Takeover</h3>
              <p className="text-gray-300 mt-2">Titans like Rockefeller and Carnegie funded the American school system not to educate, but to train children for factory work and what they called "perfect docility." The Carnegie Unit, still used today, rewards kids simply for sitting in a seat for a set number of hours, not for actual mastery of the material.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-xl font-bold text-green-400">Early American Literacy Was Higher</h3>
              <p className="text-gray-300 mt-2">Before compulsory schooling existed, American literacy rates were at 99.6%. Today, after over a century of government-run education and nearly a trillion dollars in annual spending, 45% of high school seniors cannot pass basic math on the NAEP assessment.</p>
            </div>
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-xl font-bold text-red-400">Today: The Breaking Point</h3>
              <p className="text-gray-300 mt-2">Students spend 6-8 hours per day in classrooms designed for the 1890s, plus homework, leaving student athletes with almost no time for dedicated training. The system rewards seat time, not learning. It produces compliant workers, not creative thinkers or elite athletes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Fails Athletes */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why This System <span className="text-red-500">Fails</span> Student Athletes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Time Poverty</h3>
              <p className="text-gray-300">Between 7+ hours of school, homework, and commute, athletes have maybe 1-2 hours for training. Our athletes get up to 4 hours of elite training daily because academics are completed in focused 3-5 hour blocks.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Physical Exhaustion</h3>
              <p className="text-gray-300">Sitting 7-8 hours creates fatigue, poor posture, and reduced performance. By practice time, athletes are mentally and physically drained. Our model trains athletes when they are fresh and focused.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">The Carnegie Unit Trap</h3>
              <p className="text-gray-300">Public schools still use the Carnegie Unit, which rewards students for sitting in a seat for a set number of hours, not for actual mastery. Our students master the material and move on.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">Zero Life Skills</h3>
              <p className="text-gray-300">Public schools teach kids to be employees, not entrepreneurs. Our students launch real businesses, learn AI, financial literacy, and build wealth beyond the court.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Homeschool Advantage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">The <span className="text-green-500">Homeschool</span> Advantage</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">01</div>
              <div>
                <h3 className="text-xl font-bold">Academic Dominance in Half the Time</h3>
                <p className="text-gray-300">Homeschoolers study just 2-3 hours per day yet consistently score in the 65th-80th percentile on standardized tests, crushing the public school 50th percentile average. Average SAT: 1190 vs 1060. Average ACT: 26.5 vs 21.0.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">02</div>
              <div>
                <h3 className="text-xl font-bold">College Ready</h3>
                <p className="text-gray-300">87% college acceptance rate vs 68% for public school. Higher first-year GPA (3.41 vs 3.12) and a 66.7% four-year graduation rate vs 57.5% nationally.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">03</div>
              <div>
                <h3 className="text-xl font-bold">Superior Social Development</h3>
                <p className="text-gray-300">The socialization myth is dead. 87% of peer-reviewed studies prove homeschool students perform significantly better than public school peers in social, emotional, and psychological development.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">04</div>
              <div>
                <h3 className="text-xl font-bold">Missouri Compliant</h3>
                <p className="text-gray-300">Our 4-day co-op model meets all Missouri homeschool requirements including 1,000 hours of instruction covering math, reading, social studies, English, and science.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-green-500 text-2xl font-bold mt-1">05</div>
              <div>
                <h3 className="text-xl font-bold">Christ-Centered Foundation</h3>
                <p className="text-gray-300">Everything we do is rooted in faith. We blend spiritual growth with athletic achievement, requiring players to apply biblical principles in daily life alongside community outreach and mission projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elite Athletes Who Homeschooled */}
      <section className="bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Elite Athletes Who <span className="text-green-500">Homeschooled</span></h2>
          <p className="text-gray-300 text-center mb-10">Escaping the classroom is the proven path to elite athletic development.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Tim Tebow</p>
              <p className="text-gray-400 text-sm">Heisman Trophy Winner, NFL QB. Has a law named after him protecting homeschool sports access.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Blake Griffin</p>
              <p className="text-gray-400 text-sm">#1 NBA Draft Pick, 6x All-Star. Homeschooled by his mother through 7th grade.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Simone Biles</p>
              <p className="text-gray-400 text-sm">Most decorated US gymnast. 11 Olympic medals. Homeschooled for elite training.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Venus and Serena Williams</p>
              <p className="text-gray-400 text-sm">23 combined Grand Slam titles. Homeschooled by their father around training.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Shaun White</p>
              <p className="text-gray-400 text-sm">3x Olympic Gold Medalist. Homeschooled to train 10 hours a day starting at age 6.</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-xl text-center">
              <p className="font-bold">Maria Sharapova</p>
              <p className="text-gray-400 text-sm">5 Grand Slam titles. Homeschooled to accommodate professional tennis development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Break Free?</h2>
          <p className="text-gray-300 text-lg mb-3 italic">"Whatever you do, work at it with all your heart, as working for the Lord." - Colossians 3:23</p>
          <p className="text-gray-300 text-lg mb-8">Warriors Academy gives your athlete the time, training, and Christ-centered education they deserve. Stop fitting your child into a system that was never designed for them.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#apply" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition">
              Apply Now
            </Link>
            <Link href="/" className="border-2 border-gray-600 text-gray-300 hover:border-green-500 hover:text-green-400 font-bold py-4 px-8 rounded-lg text-lg transition">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
