import React, { useState } from 'react';
import { FaNewspaper, FaCalendarAlt, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function PressArticles() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const articles = [
    {
      id: 1,
      title: "UNDP Sparks Talks on Gentrification Roots and Its Effect on Minorities",
      author: "Syihabudin Millah Wadin",
      date: "July 19, 2025",
      content: `UNDP: During the first session of the UNDP council
at PRESMUN 2025, delegates began discussions on
the root causes and impacts of gentrification. Countries
like Ethiopia and Tunisia gave strong statements in the
opening session.

Ethiopia opened their speech in a unique way, saying “skibidi toilet sigma” to catch attention,
before explaining that gentrification is about “kicking out the poor” because of rising rent prices.
They pointed out that this issue starts from the growing gap between rich developers and poor
residents. This statement was later echoed by delegates from China, Romania, Nigeria, and Ireland,
who all agreed that gentrification is an important global issue that must be addressed through
international cooperation and urban policy reform.

The council also talked about how gentrification affects minority communities. Tunisia shared that
their country works to ensure urban development is fair for all citizens. “We once collaborated
with UN-Habitat and applied SDG 11 to help cities grow without sacrificing people’s lives,”
Tunisia added.

UNDP delegates agreed that cities need better planning that listens to the people. Countries are
working together to create fair policies that prevent forced relocation, protect minorities, and
support sustainable development.

As PRESMUN continues, Arab News will follow more discussions and highlight solutions from
the global leaders.`
    },
    {
      id: 2,
      title: "UNDP In A Controlled-Havoc, Urging To Fight Against Gentrification.",
      author: "Malik Alif Djajadiredja",
      date: "July 19, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `The UNDP of PRESMUN 2025 goes into a frenzy to try to address all factors of
gentrification, albeit being controlled, delegates are rushing into solution-based discussions.
UNDP PRESMUN 2025 (New York Times) – At around 9:00 AM (Western Indonesian
Time), delegates of the UNDP PRESMUN 2025 rush to find solutions in the council. During
the opening, many delegates had a uniform ‘call to action’, which is the call to action of unity
in proposing an economic stance in solving gentrification.

The topic of displacement was repeatedly brought up during the opening speeches.
Displacement of the lower class was the main topic of concern, leading to many delegates
pledging to find economic ways to not only reduce the impact of gentrification within
neighborhoods, but also find ways to increase the quality of life within lower-class
neighborhoods.

Delegates pitched in on already-made resolutions, such as point 11 of the SDGs was brought
up by the delegate of the United Kingdom. The delegate of Ireland proposed an ‘Urban
Development Quota’ where some areas are imposed a cap on the use of land. This quota will
help with efficiency whilst helping to reduce the amount of money that can be used for
gentrification.

At 10:08 am, an unmoderated caucus was agreed upon, so the delegates went around the
chamber, coming together to form different blocs. One was seen to be spearheaded by the
delegation of the United States, and the other by the delegation of Nigeria. A split of blocs
was agreed upon to focus on tackling gentrification based on the economic capability of each
country.

All and all, the UNDP council was hectic, many delegates came together to find a way to
tackle all factors of gentrification; however, in the end, the delegates understood it was better
to focus on tackling and limiting gentrification, based on each country’s economic capability.

Citations:
UN SDG: https://sdgs.un.org/goals/goal11 accessed on July 19th 2025.`
    },
    {
      id: 3,
      title: "United States Proposes Community Land Trust Model in UNDP Council - Tunisia Open to Adoption",
      author: "Amira Alrizky",
      date: "July 19, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `The United States proposed the Community Land Trust (CLT) model during today’s UNDP
Council session as a response to the growing displacement of urban populations in
developing countries. The proposal was particularly highlighted during discussions with
Tunisia, where both delegations exchanged perspectives on inclusive and equitable urban
development.

The CLT model, originally developed in the United States, is designed to prevent real estate
speculation by placing land under community ownership. This approach enables long-term
housing affordability and stability for marginalized populations.

The U.S. delegation emphasized the success of CLTs in cities such as Washington, an area
facing significant gentrification pressures and noted that since 2025, the implementation and
impact of CLTs have significantly improved within the U.S. itself.

Tunisia responded positively, expressing openness to adapting similar community-based
models tailored to their local context and indicated their intent to explore the concept further
in upcoming discussions.

This dialogue was part of the UNDP Council’s broader efforts to address the consequences of
gentrification, particularly across the Global South. As urban inequality continues to impact
vulnerable communities worldwide, models like the CLT are gaining attention as potential
tools for sustainable and socially just development.`
    },
    {
      id: 4,
      title: "Small Island and Asia-Pacific Countries Raise Alarm at Climate Talk",
      author: "Renata Bahaswar",
      date: "July 19, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `The delegates mentioned climate change as the biggest driver of sea level rise at the UNEP
conference on Saturday, 19 July. The delegates discussed the root causes and the past
actions of climate mitigation. Besides that, small island developing country (SIDS) and Asia-
Pacific countries are also being discussed in the conference.

The delegates said that each country has its own challenge, such as Netherlands that have
been geographically shaped by water, Indonesia as an archipelago country, and Maldives
that are etoll country are concern of the island submerging driven by sea level rise. Therefore,
the solutions must be discussed and considered by the whole country.

In a recent discussion, the delegate of Netherlands mentioned the high-emitting activities,
especially causes by high economies and highlighted the negative impacts that ASEAN and
Pacific country and other SIDS as sea level rise at-risk countries facing. More over, the
delegate of Netherland emphasized the blue economy market and focusing on minimum
carbon emission industries and activities. The Unites States’ delegate responded the
statement by an appeal to immediate and significant measures instead of mentioning the
past actions.`
    },
    {
      id: 5,
      title: "Bridging the Gap: Netherlands and U.S. Spar Over Climate Change Solutionsat UNEP",
      author: "Gabriella Rindang",
      date: "July 19, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `Long-term changes in weather patterns and temperatures are commonly referred to by the term
climate change. Changes in the sun's activity can cause these changes naturally. These result
from using coal to heat a building or gasoline to power a vehicle. The Earth is warming faster
than it has in at least two millennia due to greenhouse gas emissions from human activities. The
United Nations Environment Programme (UNEP) under the UN Council focused on the solution
of climate change globally.

In the UNEP meeting simulations, the delegates of any country raise their placard proudly to
propose their solutions. In the Moderated Caucus, the delegates of the Netherlands and delegates
of the United States are active to propose motions to solve these issues. The delegates of the
Netherlands said “Climate Change is in there too. Country allocated below sea level. Always
manage the water with innovations and protect. We need support from all countries to face this
crisis together.” This can be seen as the Netherlands seeking for international cooperations
among countries. In the GSL, the US is saying that the current solutions are not enough, also
need collaboration too. It can be seen that the US mentioned already joining the Paris
Agreement.

Especially in unmoderated caucus, there's such a perspective gap between the delegates of
Netherlands and the delegates of the United States. The US is negotiating that just one bloc
exists and trying to dominate other countries to become one bloc. Because the US delegate thinks
that climate change is the problem of all countries, so all countries must work together in one
block. But the Netherlands and China have a different perspective about making the bloc. The
Netherlands negotiated that there must be another bloc because each country has different
perspectives and problems. Many countries have their own national interests as well.
The UNEP simulation meeting showed contrasting views between the US and the Netherlands,
reflecting challenges in uniting countries with different interests to address climate change
effectively.`
    },
    {
      id: 6,
      title: "USA faces decline from UNEP members; 'suggesting' the formation of one big bloc",
      author: "Maydicta Azzalya A.P.",
      date: "July 19, 2025",
      readTime: "3 min read",
      excerpt: "How technology transformed traditional Model UN into a hybrid experience that bridges physical and virtual diplomatic engagement.",
      content: `UNEP's main topic revolves around each member's concern regarding climate change and biodiversity loss. Majority expresses their fear towards the 'sinking' of each nation as the result of prolonged climate change.

The council started off calm in the morning, with Bangladesh kickstarting the GSL. The council's attention is quickly averted towards China's strong speech, demanding the discussion of root causes and loopholes, which then caught the delegate of Netherland's interest in later motion.

USA, however, started to show arrogance once the unmoderated caucus unfolded, with the main topic of root causes, loopholes, and possible solutions. "We believe that everyone is facing the same issue, and that is why we propose for us to be one bloc.", delegate of USA said. This proposal rapidly raises disagreements across the discussion circle, where China steps in for a rebuttal towards USA's statement, along with Netherlands. "It's not effective.", says the delegate of Netherlands.

"Not every country faces the same issue,", China said, "and by putting everyone in the same bloc, it'll be a struggle for us to differentiate each state's problem.". Delegate of Brazil, agreeing with China, added, "We can't fully cut gas emissions, because it occurs daily and the usage ofgas is necessary in today's civilization." Later on, the council split into two respectful groups, EU and G77 members.

The second moderated caucus lead into a more comprehensive discussion, such as the strengthening of global resilience and capacity building assist for developing countries. Delegate of USA, once again, tried to test China's stance (and possibly patience), by criticizing their 'half-hearted' effort on repairing coastal lines, that there has been no significant progress since the start.

"It's pretty difficult to work alongside USA with different economy strategies.", China answered when asked about the possibility of collaboration with USA during an interview.`
    },
  ];

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  return (
    <div className="bg-[#000420] min-h-screen text-white/90">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[#000420]">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 50% 50%, transparent 0%, #000420 70%)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative py-[5rem] sm:py-16 md:py-[10rem] px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 md:mb-20 text-center"
          >
            <h1 className="font-horizon text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-[#f3c623]">Press</span>{' '}
              <span className="text-white">Articles</span>
            </h1>
            <div className="h-px bg-gradient-to-r from-transparent via-[#f3c623] to-transparent opacity-50 max-w-md mx-auto"></div>
          </motion.div>

          {/* Articles Grid - Similar to Council Design */}
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Article Card */}
                <div
                  className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 ${expandedArticle === article.id ? 'bg-[#00072d]' : 'bg-[#00072d]/70 hover:bg-[#00072d]'}`}
                  onClick={() => toggleArticle(article.id)}
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-[#f3c623]/10 to-transparent opacity-0 ${expandedArticle === article.id ? 'opacity-100' : 'group-hover:opacity-50'} transition-opacity duration-300`}></div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="flex flex-col gap-4">
                      {/* Title and Toggle */}
                      <div className="flex justify-between items-start gap-4">
                        <h2 className="font-horizon text-xl md:text-2xl text-[#f3c623]">
                          {article.title}
                        </h2>
                        <button className="text-[#f3c623] p-1">
                          {expandedArticle === article.id ? <FaChevronUp /> : <FaChevronDown />}
                        </button>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap items-center gap-4 text-white/60 font-montserrat text-sm">
                        <span className="flex items-center gap-2">
                          <FaCalendarAlt /> {article.date}
                        </span>
                        <span className="flex items-center gap-2 bg-[#f3c623]/10 px-3 py-1 rounded-full">
                          <FaUser /> {article.author}
                        </span>
                        <div className="inline-block bg-[#f3c623]/10 px-3 py-1 rounded-full">
                          {/* <span className="text-[#f3c623]">{article.readTime}</span> */}
                        </div>
                      </div>

                      {/* Excerpt */}
                      {/* <p className="text-white/80 font-montserrat text-base leading-relaxed italic">
                        "{article.excerpt}"
                      </p> */}
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedArticle === article.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6"
                        >
                          <div className="pt-6 border-t border-[#f3c623]/20">
                            <div className="relative pl-6">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f3c623] to-transparent"></div>
                              <div className="prose prose-invert max-w-none">
                                {article.content.split('\n\n').map((paragraph, pIndex) => {
                                  // Helper to linkify URLs
                                  const linkify = (text) => {
                                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                                    return text.split(urlRegex).map((part, i) => {
                                      if (urlRegex.test(part)) {
                                        return (
                                          <a
                                            key={i}
                                            href={part}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#f3c623] underline break-all hover:text-[#ffe066]"
                                          >
                                            {part}
                                          </a>
                                        );
                                      }
                                      return part;
                                    });
                                  };
                                  return (
                                    <motion.p
                                      key={pIndex}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3, delay: pIndex * 0.1 }}
                                      className="text-white/80 leading-relaxed text-justify mb-4 font-montserrat"
                                    >
                                      {linkify(paragraph)}
                                    </motion.p>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#f3c623] opacity-50"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#f3c623] opacity-50"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-16 md:mt-20 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-gradient-to-r from-[#f3c623] to-transparent"></div>
            <FaNewspaper className="text-2xl sm:text-3xl text-[#f3c623]" />
            <div className="flex-1 h-px bg-gradient-to-l from-[#f3c623] to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}