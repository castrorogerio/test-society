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
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'community';
};

const Index = () => {
  // Sample data
  const speakers = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      role: "Lead QA Engineer, Google", 
      topic: "AI-Powered Testing: The Future of Quality Assurance",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 2, 
      name: "Michael Brown", 
      role: "Testing Director, Microsoft", 
      topic: "Scaling Test Automation in Enterprise Environments",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 3, 
      name: "Sarah Wilson", 
      role: "QA Automation Expert, Amazon", 
      topic: "Continuous Testing in DevOps Pipelines",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 4, 
      name: "Emily Parker", 
      role: "Test Strategy Consultant", 
      topic: "Risk-Based Testing: A Strategic Approach",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 5, 
      name: "David Chen", 
      role: "DevOps Testing Specialist", 
      topic: "Performance Testing in Cloud Environments",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    },
    { 
      id: 6, 
      name: "Jessica Lee", 
      role: "Security Testing Expert", 
      topic: "Security Testing: Protecting Your Applications",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
    }
  ];

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "TechCorp",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=TechCorp",
      tier: "platinum"
    },
    {
      id: 2,
      name: "InnovateX",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=InnovateX",
      tier: "platinum"
    },
    {
      id: 3,
      name: "FutureTech",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=FutureTech",
      tier: "gold"
    },
    {
      id: 4,
      name: "Digital Solutions",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=Digital+Solutions",
      tier: "gold"
    },
    {
      id: 5,
      name: "WebCraft",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=WebCraft",
      tier: "gold"
    },
    {
      id: 6,
      name: "CodeForge",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=CodeForge",
      tier: "silver"
    },
    {
      id: 7,
      name: "DevOps Inc",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=DevOps+Inc",
      tier: "silver"
    },
    {
      id: 8,
      name: "Cloud Systems",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=Cloud+Systems",
      tier: "silver"
    },
    {
      id: 9,
      name: "Tech Solutions",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=Tech+Solutions",
      tier: "silver"
    },
    {
      id: 10,
      name: "Digital Works",
      logo: "https://placehold.co/400x200/1a1a1a/ffffff?text=Digital+Works",
      tier: "silver"
    },
    {
      id: 11,
      name: "Quality Talks",
      logo: "/sponsors/Quality-Talks-Logo-1.png",
      tier: "community"
    },
    {
      id: 12,
      name: "MoTPorto",
      logo: "/sponsors/MoTPorto.jpeg",
      tier: "community"
    }
  ];

  const scheduleItems = [
    {
      time: "08:30 - 09:00",
      title: "Welcome & Opening Ceremony"
    },
    {
      time: "09:00 - 10:00",
      title: "Introduction to Modern Testing Practices",
      speaker: "Alex Johnson",
      description: "A comprehensive overview of the latest testing methodologies and practices in the industry.",
      speakerImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "10:15 - 11:15",
      title: "Continuous Testing in DevOps Pipeline",
      speaker: "David Chen",
      description: "Learn how to integrate automated testing seamlessly within your DevOps workflows.",
      speakerImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "11:30 - 12:30",
      title: "AI-Powered Testing Strategies",
      speaker: "Sarah Wilson",
      description: "Exploring how artificial intelligence is transforming the landscape of software testing.",
      speakerImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "12:30 - 14:00",
      title: "Lunch Break & Networking"
    },
    {
      time: "14:00 - 15:00",
      title: "Security-First Testing Approach",
      speaker: "Jessica Lee",
      description: "A deep dive into implementing security testing throughout the development lifecycle.",
      speakerImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "15:15 - 16:15",
      title: "Performance Testing at Scale",
      speaker: "Michael Brown",
      description: "Master the art of performance testing in large-scale applications and microservices.",
      speakerImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      time: "16:30 - 17:30",
      title: "Test Automation Best Practices",
      speaker: "Emily Parker",
      description: "Learn the industry's best practices for creating maintainable and efficient test automation frameworks.",
      speakerImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
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
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banner.png')" }}
      >
        <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center justify-center font-montserrat">
          <h1 className="text-[#f4a82e] text-5xl md:text-7xl font-bold mb-4 tracking-wider">TEST SOCIETY 2025</h1>
          <p className="text-white text-xl md:text-3xl mb-32 font-semibold">QUALITY ASSURANCE CONFERENCE</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-16">
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
            className="bg-teal-800 hover:bg-teal-700 text-white text-lg px-12 py-4 mt-8 uppercase tracking-wide font-bold rounded-md font-montserrat" 
            size="lg"
            asChild
          >
            <a href="#register">GRAB YOUR SEAT NOW</a>
          </Button>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12" style={{ 
        background: 'transparent',
        backgroundImage: 'linear-gradient(323deg, #f4a82e 21%, #865403 100%)'
      }}>
        <div className="container mx-auto px-4">
          <Countdown />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="black-bg section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="pt-16 pb-16">
              <SectionHeading
                title="Welcome to the Biggest Quality Assurance Conference"
                align="left"
                textColor="text-[#f4a82e]"
              />
              <p className="text-white mb-6 text-justify text-lg md:text-xl">
                Test Society 2025 brings together the best minds in software testing and quality assurance. Join us for a transformative experience with leading experts, hands-on workshops, and networking opportunities that will elevate your testing skills to the next level.
              </p>
              <p className="text-white mb-6 text-justify text-lg md:text-xl">
                With a focus on practical applications, innovative methodologies, and future trends, this conference is designed for testers, QA managers, developers, and anyone passionate about software quality. Whether you're just starting your QA journey or are a seasoned professional, Test Society 2025 offers valuable insights for all skill levels.
              </p>
              <p className="text-white text-justify text-lg md:text-xl">
                Don't miss this opportunity to connect with peers, learn from industry leaders, and stay ahead in the rapidly evolving world of software testing.
              </p>
            </div>
            <div>
              <img 
                src="/images/about.png" 
                alt="About Test Society Conference" 
                className="rounded-lg object-cover w-full h-[600px] ml-24" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="relative section-padding">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container mx-auto pt-16 pb-16 relative z-10">
          <SectionHeading 
            title="The Speakers" 
            subtitle="Learn from industry experts and thought leaders"
            textColor="text-[#f4a82e]"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <Speaker 
                key={speaker.id}
                name={speaker.name}
                role={speaker.role}
                topic={speaker.topic}
                image={speaker.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="black-bg section-padding">
        <div className="container mx-auto pt-16 pb-16">
          <SectionHeading
            title="Why You Should Join Event"
            textColor="text-[#f4a82e]"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e]"></div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">World Class Speakers</h3>
                <p className="text-white">Learn from the best in the industry with our lineup of exceptional speakers who bring years of expertise and insights to share.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e]"></div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">Hands-on Workshops</h3>
                <p className="text-white">Gain practical skills through our interactive workshops designed to enhance your testing abilities and solve real-world challenges.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-[#f4a82e]"></div>
              <div>
                <h3 className="text-[#f4a82e] text-xl font-semibold mb-2">Networking Opportunities</h3>
                <p className="text-white">Connect with fellow professionals, industry leaders, and potential collaborators in a setting designed for meaningful interactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Section */}
      <section 
        id="tickets"
        className="py-12" 
        style={{ 
          background: 'transparent',
          backgroundImage: 'linear-gradient(323deg, #f4a82e 21%, #865403 100%)'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Get Your Tickets"
              subtitle="Choose the best option for you"
              textColor="text-white"
              align="center"
            />
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {/* Single Ticket */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#f4a82e] transition-colors duration-300 relative">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Single Ticket</h3>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#f4a82e]">50€</span>
                    <span className="text-white/70">per ticket</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Access to all sessions
                    </li>
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Lunch and coffee breaks
                    </li>
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Networking opportunities
                    </li>
                  </ul>
                </div>
              </div>

              {/* Group Ticket */}
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border-2 border-teal-800 hover:border-teal-700 transition-colors duration-300 relative transform scale-105">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-800 text-white px-4 py-1 rounded-full text-sm font-bold">
                  BEST VALUE
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Group Ticket</h3>
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <span className="text-4xl font-bold text-[#f4a82e]">45€</span>
                    <span className="text-white/70">per ticket (min. 3)</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      All Single Ticket benefits
                    </li>
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Save 10% per ticket
                    </li>
                    <li className="flex items-center gap-2 text-white">
                      <svg className="w-5 h-5 text-[#f4a82e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Priority seating
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Add single buy button below cards */}
            <div className="mt-12 text-center">
              <Button 
                className="bg-teal-800 hover:bg-teal-700 text-white text-lg px-12 py-4 uppercase tracking-wide font-bold rounded-md font-montserrat"
                size="lg"
              >
                Purchase Tickets Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="black-bg section-padding">
        <div className="container mx-auto pt-16 pb-16">
          <SectionHeading
            title="Event Schedule"
            subtitle="Plan your day at Test Society 2025"
            textColor="text-[#f4a82e]"
          />

          <div className="max-w-4xl mx-auto bg-black/10 rounded-2xl p-6">
            {scheduleItems.map((item, index) => (
              <EventScheduleItem
                key={index}
                time={item.time}
                title={item.title}
                speaker={item.speaker}
                description={item.description}
                speakerImage={item.speakerImage}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              className="bg-teal-800 hover:bg-teal-700 text-white px-8 py-4 uppercase tracking-wide font-bold"
              asChild
            >
              <a href="#" download>DOWNLOAD FULL SCHEDULE</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
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
                    <p className="text-white/80">8:30 AM - 6:00 PM</p>
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
                    <p className="text-white/80">+351 21 000 0000</p>
                    <p className="text-white/80">info@testsociety2025.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <iframe
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
      <section id="sponsors" className="black-bg section-padding">
        <div className="container mx-auto pt-16 pb-16">
          <SectionHeading
            title="Official Sponsors"
            subtitle="Our valued partners who make this event possible"
            textColor="text-[#f4a82e]"
          />
          
          <div className="space-y-16">
            {/* Platinum Sponsors */}
            <div className="text-center">
              <h3 className="text-[#115e59] text-3xl font-bold mb-12">Platinum Sponsors</h3>
              <div className="grid grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'platinum')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      name={sponsor.name}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>
            
            {/* Gold Sponsors */}
            <div className="text-center">
              <h3 className="text-[#115e59] text-2xl font-bold mb-12">Gold Sponsors</h3>
              <div className="grid grid-cols-3 gap-8 mb-16 max-w-3xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'gold')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      name={sponsor.name}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>
            
            {/* Silver Sponsors */}
            <div className="text-center">
              <h3 className="text-[#115e59] text-xl font-bold mb-12">Silver Sponsors</h3>
              <div className="grid grid-cols-5 gap-6 mb-16 max-w-5xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'silver')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      name={sponsor.name}
                      logo={sponsor.logo}
                      tier={sponsor.tier}
                    />
                  ))}
              </div>
            </div>

            {/* Community Sponsors */}
            <div className="text-center">
              <h3 className="text-[#115e59] text-xl font-bold mb-12">Community Sponsors</h3>
              <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
                {sponsors
                  .filter(sponsor => sponsor.tier === 'community')
                  .map(sponsor => (
                    <Sponsor 
                      key={sponsor.id}
                      name={sponsor.name}
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
      <section id="past-events" className="relative section-padding">
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="container mx-auto pt-16 pb-16 relative z-10">
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
                  "The Test Society conference was a game-changer for our QA team. The insights we gained from the speakers and workshops have transformed our approach to testing and significantly improved our product quality."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="John Smith" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">John Smith</p>
                    <p className="text-[#f4a82e]">QA Director, TechCorp Inc.</p>
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
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                      alt="Sarah Johnson" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah Johnson</p>
                    <p className="text-[#f4a82e]">Senior QA Engineer, InnovateTech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/IMG_6877.jpg"
                  alt="Keynote Session 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/IMG_6890.jpg"
                  alt="Workshop Session 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/IMG_6925.jpg"
                  alt="Networking Event 2024"
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img 
                  src="/gallery/IMG_6928.jpg"
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
              <a href="/gallery">VIEW FULL EVENT GALLERY</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
