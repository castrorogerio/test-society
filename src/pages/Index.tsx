import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Speaker from "../components/Speaker";
import Sponsor from "../components/Sponsor";
import EventScheduleItem from "../components/EventScheduleItem";
import Countdown from "../components/Countdown";
import ScrollToTop from "../components/ScrollToTop";
import { Button } from "../components/ui/button";

type Sponsor = {
  id: number;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community' | 'partner';
};

const Index = () => {
  // Sample data
  const speakers = [
    { 
      id: 1, 
      name: "João Proença", 
      job: "Expert Quality Engineer / International Speaker",
      topic: "Limitless Within Our Boundaries",
      image: "speakers/joao_proenca.jpeg" 
    },
    { 
      id: 2, 
      name: "Joana Silva", 
      job: "Director of Quality Assurance | Quality Advocate | Mentor",
      topic: "Unlocking Quality Excellence: Is Your Organization Truly Embracing a Quality Culture?",
      image: "speakers/joana_silva.jpg" 
    },
    { 
      id: 3, 
      name: "TBA", 
      job: "",
      topic: "To Be Announced",
      image: "placeholder" 
    },
    { 
      id: 4, 
      name: "TBA", 
      job: "",
      topic: "To Be Announced",
      image: "placeholder" 
    },
    { 
      id: 5, 
      name: "TBA", 
      job: "",
      topic: "To Be Announced",
      image: "placeholder" 
    },
    { 
      id: 6, 
      name: "TBA", 
      job: "",
      topic: "To Be Announced",
      image: "placeholder" 
    }
  ];

  const sponsors: Sponsor[] = [
    {
      id: 1,
      logo: "/sponsors/qualitytalks_logo.png",
      tier: "partner"
    },
    {
      id: 2,
      logo: "/sponsors/MoTPorto.png",
      tier: "partner"
    },
    {
      id: 3,
      logo: "/sponsors/brightest_logo.png",
      tier: "silver"
    },
    {
      id: 4,
      logo: "/sponsors/xelerate_logo.png",
      tier: "community"
    },
    {
      id: 5,
      logo: "/sponsors/ipq_logo.png",
      tier: "partner"
    }
  ];

  const scheduleItems = [
    {
      time: "08:30 - 09:00",
      title: "Welcome & Opening Ceremony"
    },
    {
      time: "09:00 - 10:00",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "10:15 - 11:15",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "11:30 - 12:30",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "12:30 - 14:00",
      title: "Lunch Break & Networking"
    },
    {
      time: "14:00 - 15:00",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "15:15 - 16:15",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "16:30 - 17:30",
      title: "To Be Announced",
      speaker: "TBD",
      description: "To Be Announced"
    },
    {
      time: "17:30 - 18:00",
      title: "Closing Ceremony & Networking"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  ];

  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          backgroundImage: "url('/images/Speakers_BG.png')",
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'translate3d(0,0,0)',
          willChange: 'transform'
        }}
      />
      <Header />
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-32 pb-24"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center font-montserrat">
          <h1 className="text-[#f4a82e] text-5xl md:text-7xl font-bold mb-8 tracking-wider">TEST SOCIETY 2025</h1>
          <p className="text-white text-xl md:text-3xl mb-16 font-semibold">QUALITY ASSURANCE CONFERENCE</p>

          {/* Countdown */}
          <div className="mt-8 mb-20">
            <Countdown />
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-24 mb-20">
            <div className="flex items-center text-white text-2xl md:text-3xl">
              <span className="text-[#f4a82e] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="font-semibold">October 10th 2025</span>
            </div>
            <div className="flex items-center text-white text-2xl md:text-3xl">
              <span className="text-[#f4a82e] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </span>
              <span className="font-semibold">6 Speakers</span>
            </div>
            <div className="flex items-center text-white text-2xl md:text-3xl">
              <span className="text-[#f4a82e] mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 md:w-10 md:h-10">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="font-semibold">Lisbon, Portugal</span>
            </div>
          </div>
          <Button 
            className="bg-teal-800 hover:bg-teal-700 text-white text-lg px-12 py-4 mt-12 uppercase tracking-wide font-bold rounded-md font-montserrat transition-colors opacity-70" 
            size="lg"
            aria-label="Tickets will be available soon"
          >
            Tickets will be available soon
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 relative shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8),0_20px_50px_-15px_rgba(0,0,0,0.8)]">
        <div 
          className="absolute inset-0 -z-10"
          style={{ 
            backgroundImage: "url('/images/about-bg.png')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
          }}
        />
        <div className="container mx-auto px-4 pt-8 pb-8">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 md:order-1 pt-8 md:pt-16 pb-8 md:pb-16">
              <SectionHeading
                title="Welcome to Test Society 2025 — The Trailblazing Quality Assurance Conference"
                align="left"
                textColor="text-[#f4a82e]"
              />
              <p className="text-white mb-6 text-justify text-lg md:text-xl">
              Test Society 2025 brings together top voices in software testing and quality assurance for a focused, high-impact day of learning and connection. With six insightful talks from industry experts, this event is designed to spark ideas, share practical knowledge, and elevate the QA community.
              </p>
              <p className="text-white mb-6 text-justify text-lg md:text-xl">
              Centered on actionable insights, new methodologies, and forward-looking trends, the conference welcomes testers, QA managers, developers, and anyone dedicated to software quality. Whether you're early in your career or an experienced professional, you'll walk away with valuable perspectives and fresh inspiration.
              </p>
              <p className="text-white text-justify text-lg md:text-xl">
              Join us to connect with peers, gain expert insights, and stay ahead in the fast-moving world of software testing.
              </p>
            </div>
            <div className="order-1 md:order-2 flex justify-center items-center">
              <div className="w-full max-w-[1200px]">
                <img 
                  src="/images/about.png" 
                  alt="About Test Society Conference" 
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-12 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <SectionHeading 
            title="The Speakers" 
            subtitle="Learn from industry experts and thought leaders"
            textColor="text-[#f4a82e]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6 justify-center items-start">
            {speakers.map((speaker) => (
              <Speaker 
                key={speaker.id}
                name={speaker.name}
                topic={speaker.topic}
                image={speaker.image}
                job={speaker.job}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section id="why-attend" className="py-12 relative shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8),0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(135deg, #18403e 0%, #1a4a47 50%, #1c5451 100%)'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#f4a82e] opacity-20 blur-3xl transition-transform duration-300 ease-out"
          style={{
            transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))',
            left: '0',
            top: '50%',
            translate: '0 -50%'
          }}
        ></div>
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <SectionHeading
            title="Why You Should Join Test Society 2025"
            textColor="text-[#f4a82e]"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">World Class Speakers</h3>
                <p className="text-white">Hear from some of the most influential voices in software testing and quality assurance. Our curated lineup of speakers brings deep expertise, fresh perspectives, and practical insights that will challenge and inspire you.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">Elevate Your Skills</h3>
                <p className="text-white">Advance your professional skills  by discovering cutting-edge methodologies, tools, and strategies shaping the future of QA. Whether you're refining your craft or expanding your toolkit, you'll gain actionable knowledge to take your practice further directly from industry pioneers.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e] rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">Networking Opportunities</h3>
                <p className="text-white">Engage with a vibrant community of QA professionals, industry leaders, great companies and innovators. This is your chance to exchange ideas, build relationships, and find collaborators who share your passion for quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-12 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <SectionHeading
            title="Event Schedule"
            subtitle="Plan your day at Test Society 2025"
            textColor="text-[#f4a82e]"
          />

          {/* Schedule section temporarily commented out
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-2xl p-6">
            {scheduleItems.map((item, index) => (
              <EventScheduleItem
                key={index}
                time={item.time}
                title={item.title}
                speaker={item.speaker}
                description={item.description}
              />
            ))}
          </div>
          */}
          <div className="max-w-4xl mx-auto bg-black/50 backdrop-blur-sm rounded-2xl p-6 text-center">
            <h2 className="text-2xl font-bold text-white">Schedule Coming Soon</h2>
            <p className="text-gray-300 mt-2">Stay tuned for our exciting event schedule!</p>
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-teal-800/50 text-white/50 px-8 py-4 uppercase tracking-wide font-bold cursor-not-allowed"
              disabled
              aria-label="Download full schedule (Coming Soon)"
            >
              DOWNLOAD FULL SCHEDULE
            </Button>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section 
        id="tickets"
        className="py-12 relative overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, #18403e 0%, #1a4a47 50%, #1c5451 100%)'
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#f4a82e]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f4a82e]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Get Your Ticket"
              subtitle="Join us for an unforgettable experience"
              textColor="text-[#f4a82e]"
              align="center"
            />
            
            <div className="mt-8">
              {/* Ticket Card */}
              <div className="bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#f4a82e] relative max-w-4xl mx-auto shadow-2xl hover:shadow-[#f4a82e]/20 transition-all duration-300">
                {/* Limited Time Offer Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-[#FF4D4D] rounded-lg blur opacity-75"></div>
                    <div className="relative bg-[#FF4D4D] px-6 py-1.5 rounded-lg">
                      <span className="text-white font-bold tracking-wider text-lg">LIMITED TIME OFFER</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-wide">EARLY BIRD OFFER</h3>
                    <div className="flex flex-col items-center justify-center gap-6">
                      <span className="text-5xl font-bold text-[#f4a82e]">40€</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#f4a82e]/20 flex items-center justify-center group-hover:bg-[#f4a82e]/30 transition-colors">
                        <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Full Conference Access</h4>
                        <p className="text-white/70 text-sm">Access to all sessions</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#f4a82e]/20 flex items-center justify-center group-hover:bg-[#f4a82e]/30 transition-colors">
                        <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Premium Networking</h4>
                        <p className="text-white/70 text-sm">Connect with leaders</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#f4a82e]/20 flex items-center justify-center group-hover:bg-[#f4a82e]/30 transition-colors">
                        <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Refreshments</h4>
                        <p className="text-white/70 text-sm">Lunch & coffee breaks</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-[#f4a82e]/20 flex items-center justify-center group-hover:bg-[#f4a82e]/30 transition-colors">
                        <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Vibrant Community</h4>
                        <p className="text-white/70 text-sm">Share your knowledge and learn from others</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-[#f4a82e] to-[#f4a82e]/90 hover:from-[#f4a82e]/90 hover:to-[#f4a82e] text-black text-lg py-4 uppercase tracking-wide font-bold rounded-xl font-montserrat shadow-lg hover:shadow-[#f4a82e]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    size="lg"
                    disabled
                    aria-label="Ticket sales coming soon"
                  >
                    Tickets on Sale Soon
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Venue Location</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f4a82e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lisbon Congress Centre</h3>
                    <p className="text-white/80">R. António Gião 2, 2829-513 Caparica, Portugal</p>
                    <a 
                      href="https://maps.google.com/?q=R.+António+Gião+2,+2829-513+Caparica,+Portugal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="md:hidden inline-flex items-center mt-2 text-[#f4a82e] hover:text-[#f4a82e]/80 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f4a82e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                    <p className="text-white/80">October 10th, 2025</p>
                    {/* <p className="text-white/80">8:30 AM - 6:00 PM</p> */}
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f4a82e] rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Contact</h3>
                    <p className="text-white/80">testsocietyconf@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl hidden md:block">
              <iframe
                title="Test Society 2025 Venue Location - Lisbon Congress Centre"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.0000000000005!2d-9.2345!3d38.6625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecc2b7c5d5d5d%3A0x5d5d5d5d5d5d5d5d!2sR.%20Ant%C3%B3nio%20Gi%C3%A3o%202%2C%202829-513%20Caparica!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-12 relative shadow-[0_-20px_50px_-15px_rgba(0,0,0,0.8),0_20px_50px_-15px_rgba(0,0,0,0.8)]">
        <div 
          className="absolute inset-0 -z-10"
          style={{ 
            backgroundImage: "url('/images/sponsors-bg.png')",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
          }}
        />
        <div className="container mx-auto px-4 pt-8 pb-8">
          <SectionHeading
            title="Official Sponsors"
            subtitle="Our valued partners who make this event possible"
            textColor="text-[#f4a82e]"
          />
          
          <div className="space-y-16">
            {/* Platinum Sponsors */}
            <div className="text-center">
              <h3 className="text-white text-3xl font-bold mb-12">Platinum Sponsors</h3>
              <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'platinum')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>
            
            {/* Gold Sponsors */}
            <div className="text-center">
              <h3 className="text-white text-2xl font-bold mb-12">Gold Sponsors</h3>
              <div className="grid grid-cols-1 gap-8 mb-16 max-w-3xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'gold')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>
            
            {/* Silver Sponsors */}
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-12">Silver Sponsors</h3>
              <div className="grid grid-cols-1 gap-6 mb-16 max-w-5xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'silver')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>

            {/* Community Sponsors */}
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-12">Community Sponsors</h3>
              <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'community')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>

            {/* Partners Sponsors */}
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-12">Partners</h3>
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'partner')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Last Year's Event Section */}
      <section id="past-events" className="py-12 relative">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 pt-8 pb-8 relative z-10">
          <SectionHeading
            title="Last Year's Event"
            subtitle="Highlights from Test Society 2024"
            textColor="text-[#f4a82e]"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Feedback Section */}
            <div className="space-y-8">
              <div className="bg-black/30 p-8 rounded-xl border border-teal-800/30">
                <blockquote className="text-white text-lg md:text-xl italic mb-6">
                  "The Test Society conference was a pleasant surprise. The speakers and the topics covered throughout the day were diverse and engaging. It was also a great opportunity for networking with colleagues from various fields and backgrounds. Overall, it was an enriching experience."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="testemonials/estela_ferreira.png" 
                      alt="Estela Ferreira" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Estela Ferreira</p>
                    <p className="text-[#f4a82e]">Quality Assurance Analyst, Blip.pt</p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 p-8 rounded-xl border border-teal-800/30">
                <blockquote className="text-white text-lg md:text-xl italic mb-6">
                  "The networking opportunities were incredible. I connected with industry leaders and found solutions to challenges we've been facing for months."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="testemonials/joao_castro.png" 
                      alt="João Castro" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">João Castro</p>
                    <p className="text-[#f4a82e]">Senior QA Engineer, LetsGetChecked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/thumbnails/36.jpg"
                  alt="Keynote Session 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/thumbnails/40.jpg"
                  alt="Workshop Session 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/thumbnails/8.jpg"
                  alt="Networking Event 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/thumbnails/29.jpg"
                  alt="Panel Discussion 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button 
              className="bg-[#f4a82e] hover:bg-[#f4a82e]/90 text-black px-8 py-4 uppercase tracking-wide font-bold"
              asChild
            >
              <a href="/gallery" aria-label="View full event gallery from Test Society 2024">VIEW FULL EVENT GALLERY</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('scroll', () => {
            const whyAttend = document.getElementById('why-attend');
            const ball = whyAttend.querySelector('.rounded-full');
            const rect = whyAttend.getBoundingClientRect();
            const scrollProgress = (window.scrollY - rect.top) / rect.height;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              const x = Math.sin(scrollProgress * Math.PI * 2) * 100;
              const y = scrollProgress * 100;
              ball.style.setProperty('--mouse-x', x + 'px');
              ball.style.setProperty('--mouse-y', y + 'px');
            }
          });
        `
      }} />
    </div>
  );
};

export default Index;
